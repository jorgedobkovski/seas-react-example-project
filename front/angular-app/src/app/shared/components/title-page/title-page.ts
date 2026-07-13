import { Component, Input } from '@angular/core';

@Component({ standalone: false,
  selector: 'app-title-page',
  templateUrl: './title-page.html',
  styleUrls: ['./title-page.css']
})
export class TitlePageComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}

