import { APP_INITIALIZER, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BREAKPOINTS, FlexLayoutModule } from '@angular/flex-layout';
import { FormlyModule } from '@ngx-formly/core';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NgxFormlyAntdModule } from 'ngx-formly-antd';
import { ThemeService } from 'doc/app/services/theme.service';
import { LayoutModule } from './components/layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { CUSTOMEBREAKPOINTS } from './configs/breakpoint';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    FormlyModule.forRoot({
      // validationMessages: [
      //   { name: 'required', message: (error, field: FormlyFieldConfig) => `${field.templateOptions?.label || '当前字段'}不可为空` },
      // ],
    }),
    FlexLayoutModule.withConfig({
      disableDefaultBps: true,
    }),
    NgxFormlyAntdModule,
    RoutesModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: APP_INITIALIZER,
      useFactory: (themeService: ThemeService) => (): Promise<void> => {
        return themeService.setup();
      },
      deps: [ThemeService],
      multi: true,
    },
    { provide: BREAKPOINTS, useValue: CUSTOMEBREAKPOINTS, multi: false },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
