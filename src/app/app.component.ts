import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[] = [
    {
      id: 1,
      title: 'Item 1',
      options: [
        'Option 1',
        'Option 2'
      ]
    },
    {
      id: 2,
      title: 'Item 2',
      options: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4'
      ]
    },
    {
      id: 3,
      title: 'Item 3',
      options: [
        'Option 1',
        'Option 2',
        'Option 3'
      ]
    },
    {
      id: 4,
      title: 'Item 4',
      options: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
        'Option 6'
      ]
    }
  ];
}
