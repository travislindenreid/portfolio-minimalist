import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrls: ['../portfolio.scss', './header.scss'],
  templateUrl: './header.html',
})
export class Header {
  @Input () title:string = "Travis Linden Reid";
}
