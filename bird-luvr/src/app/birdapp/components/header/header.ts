import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  @Input() title:string = "Title";
}
