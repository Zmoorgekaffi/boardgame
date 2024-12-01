import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-canvas-playboard',
  standalone: true,
  imports: [],
  templateUrl: './canvas-playboard.component.html',
  styleUrls: ['./canvas-playboard.component.scss']
})
export class CanvasPlayboardComponent implements OnInit { 

  stage:any;
  layersArray:{ [key: string]: Konva.Layer } = {};
  layercounter:number = 0;
  
  @ViewChild('stageContainer', { static: true }) stageContainer!: ElementRef;

  ngOnInit(): void {
    this.createStage();
    this. createLayer();
    this.test();
    this.stage.add(this.layersArray['layer0']);
  }

  createStage() {
    this.stage = new Konva.Stage({
      container: `#${this.stageContainer.nativeElement.id}`,		
      width:	720,
      height: 480
    });
  }

  
  createLayer() {
    let layer = new Konva.Layer();
    this.layersArray[`layer${this.layercounter}`] = layer;
  }

 

  //test
  test() {
    let circle = this.createCircle();
    let circleArray = [circle];
    this.addShapesToLayer(circleArray);
  }

  createCircle() {
    let circle = new Konva.Circle({
      radius: 50,
      fill: 'blue',
      x: 0,
      y: 0, 
    });
    return circle;
  }

  addShapesToLayer(shapes: Konva.Shape[]) {
    const layer = this.layersArray['layer0'];

    shapes.forEach(shape => {
      layer.add(shape);
    });

    layer.draw();
  }

}