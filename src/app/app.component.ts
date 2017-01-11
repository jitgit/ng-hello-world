import{Component}from'@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <heroes></heroes>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular JS 2 is awesome!!';
}
