import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  ngOnInit(): void {

  }

  onCameraActivated(event: Event) {

    console.log(event);
    let file = (event.target as HTMLInputElement).files[0];
    console.log('activated! ', file.name);

  }
}
