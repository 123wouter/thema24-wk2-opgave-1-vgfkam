import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Welkom, {{studentnaam}}.</p>
    <p>Aantal uren gestudeerd: <span [textContent]="studietijd"></span></p>
    <p>Aantal uren gelanterfanterd: </p>
    <p>Dagen tot aan de volgende vakantie: <b>{{ 365 - dagen }}</b></p>
    <img [src]="studentendata.picture">
`,
styles: [` p { font-family:Calibri,Verdana,sans-serif; font-size:1.2rem; } `],
})

export class AppComponent  {
  studentnaam = 'Henk de Boer';
  studietijd = 5;
  dagen = 280;
  studentendata = {
    picture : 'https://pbs.twimg.com/profile_images/974378148476407809/BwaR7PSs_400x400.jpg',
    test : 'hoi'
  }
}
