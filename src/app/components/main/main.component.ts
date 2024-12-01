import { Component } from '@angular/core';
import { CanvasPlayboardComponent } from './canvas-playboard/canvas-playboard.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CanvasPlayboardComponent,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
