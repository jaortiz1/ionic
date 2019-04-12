import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoPage } from './photo';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer } from '@ionic-native/file-transfer';
@NgModule({
  declarations: [
    PhotoPage,
  ],
  imports: [
    Camera,
    Transfer,
    FilePath,
    File,
    IonicPageModule.forChild(PhotoPage)
  ],
  providers: [
    Camera,
    Transfer,
    FilePath,
    File,
    FileTransfer,
    

  ]
})
export class PhotoPageModule {}
