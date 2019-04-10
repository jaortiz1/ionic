import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoPage } from './photo';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    PhotoPage,
  ],
  imports: [
    Camera,
    IonicPageModule.forChild(PhotoPage)
  ],
  providers: [
    Camera
  ]
})
export class PhotoPageModule {}
