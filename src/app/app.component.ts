import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
  Welcome to {{ title }}!
</h1>Enter Name:
<input type="text" placeholder={{name}} name="t1" >`,
  styles: [`input 
    {
        color: blue;
        font-style: italic;
        background-color:darkgrey;
        
    }`]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
  name="pratu";
}
