import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';
import { HighlightComponent } from './highlight.component';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);

@NgModule({
  declarations: [
    HighlightComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HighlightComponent,
  ],
})
export class HighlightModule { }
