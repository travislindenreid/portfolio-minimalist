import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-icon',
  styleUrl: './app-icon.scss',
  templateUrl: './app-icon.html',
})
export class AppIcon {
  @Input() url:string = "";
  @Input() img_url:string = "";
}
