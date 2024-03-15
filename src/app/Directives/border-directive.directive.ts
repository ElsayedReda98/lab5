import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { Color } from '../Enums/color';

@Directive({
  selector: '[appBorder]',
  standalone: true,
})
export class BorderDirective {
  @Input() quantity: number = 100;
  @Input() set appBorder(v: number) {
    // if (v <= 1) {
    // this.changeBgColor('yellow');
    // this.addBorder(Color.ERROR);
    // } else {
    // this.changeBgColor('none');
    // }
  }

  @HostListener('mouseover') onMouseOver() {
    this._elementRef.nativeElement.style.boxShadow =
      'rgba(0,0,0,0.39) 2px 2px 15px';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._elementRef.nativeElement.style.boxShadow = 'none';
  }
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(
      _elementRef.nativeElement,
      'transition-duration',
      '0.5'
    );
    // _elementRef.nativeElement.style.border = '2px dashed black';
    // console.log(this.quantity);
    // if (this.quantity == 1) {
    //   _elementRef.nativeElement.style.border = '2px dashed red';
    // } else if (this.quantity == 2) {
    //   _elementRef.nativeElement.style.border = '2px dashed yellow ';
    // } else {
    //   _elementRef.nativeElement.style.border = '2px dashed black ';
    // }
  }

  addBorder(color: Color, typeBorder: string = 'solid') {
    this._elementRef.nativeElement.style.border = `2px ${typeBorder} ${color}`;
  }
  changeBgColor(color: string) {
    this._elementRef.nativeElement.style.backgroundColor = `${color}`;
  }
}
