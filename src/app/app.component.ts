import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: true,
    imports: [WelcomeComponent, RouterModule]
})
export class AppComponent  {


}
