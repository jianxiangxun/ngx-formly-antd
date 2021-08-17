import { AfterViewInit, Component, ElementRef } from '@angular/core';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('bash', bash);


@Component({
  selector: 'doc-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less'],
})
export class GettingStartedComponent implements AfterViewInit {
  raw: string = require('!html-loader!markdown-loader!README.md');
  constructor(
    private ref: ElementRef,
  ) {}
  ngAfterViewInit(): void {
    this.ref.nativeElement.querySelectorAll('pre code').forEach((block: HTMLElement) => {
      hljs.highlightBlock(block);
    })

  }
}
