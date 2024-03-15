import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isBtnDisabled: boolean = true;
  imgSrc: string = 'https://picsum.photos/200/300';

  displayed: boolean = true;

  toggleImage() {
    this.displayed = !this.displayed;
  }
}
