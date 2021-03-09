import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploBtp';

  public aux: boolean=true;

  ocultarComponente(value:boolean){
  	this.aux = value;
  }
}
