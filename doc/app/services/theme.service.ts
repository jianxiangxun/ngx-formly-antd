import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export type ThemeType = 'default'|'compact'|'dark';
export const ThemeOptions: ThemeType[] = [ 'default', 'compact', 'dark' ];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  current: ThemeType = 'default';

  private gc(): void {
    ThemeOptions
      .filter(theme => this.current !== theme)
      .forEach(theme => {
        document.documentElement.classList.remove(theme);
        document.querySelector(`link[data-theme=${theme}]`)?.remove();
      });
  }

  private load(theme: ThemeType): Observable<void> {
    return new Observable(observe => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = `${theme}.css`;
      style.setAttribute('data-theme', theme);
      style.onload = () => {
        this.current = theme;
        observe.next();
        observe.complete();
      };
      style.onerror = (error) => {
        observe.error(error);
        observe.complete();
      };
      document.head.append(style);
    });
  }


  public set(theme: ThemeType): Observable<void> {
    if (theme === this.current) {
      return of();
    } else {
      return this.load(theme).pipe(
        tap(() => {
          document.documentElement.classList.add(theme);
          this.gc();
        }),
      );
    }
  }

  public setup(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.load(this.current).pipe(tap((() => {
        document.documentElement.classList.add(this.current);
        this.gc();
      }))).subscribe(resolve, reject);
    });
  }

}
