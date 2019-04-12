import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { PhotoPage } from '../pages/photo/photo';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer } from '@ionic-native/transfer';
import { FileTransfer } from '@ionic-native/file-transfer';

import { PhotoProvider } from '../providers/photo/photo';
@NgModule({
  declarations: [
    MyApp,
    PhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Transfer,
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FilePath,
    FileTransfer,
    
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     PhotoProvider
  ]
})
export class AppModule {}
