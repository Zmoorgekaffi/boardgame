import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';0

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule, 
    RouterOutlet, 
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'brettspiel';
}
