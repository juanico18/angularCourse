import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routes';
  constructor(private router: Router){}
  public goA():void{
    this.router.navigate(['a']);
  }
  public goB():void{
    this.router.navigate(['b']);
  }
  public goC():void{
    this.router.navigate(['c']);
  }
}
