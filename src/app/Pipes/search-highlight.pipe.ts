import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'searchHighlight',
  standalone: true,
})
export class SearchHighlightPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}
  transform(value: string, search: string): SafeHtml {
    if (!search) return value;
    let regex = new RegExp(search, 'gi');
    let highlightedText = value.replace(
      regex,
      (match) => `<span style="background-color: yellow;">${match}</span>`
    );
    return this._sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
