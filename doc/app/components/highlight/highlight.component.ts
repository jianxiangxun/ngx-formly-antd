import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import hljs from 'highlight.js/lib/core';

@Component({
  selector: 'doc-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: [ './highlight.component.less' ],
})
export class HighlightComponent implements OnChanges {

  @Input() raw!: string;
  @Input() language!: 'typescript' | 'json';

  html?: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { raw } = changes;
    if (raw) {
      this.html = hljs.highlight(this.raw, { language: this.language }).value;
    }
  }

}
