import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template:`
                {{ title }}
              `
})
export class TitleComponent {
   @Input({ required: true}) title!: string;
}
