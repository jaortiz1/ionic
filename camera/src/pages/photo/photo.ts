import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';


@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  textBtnLibraryUpload='Upload from library';
  textBtnCameraUpload='Upload from camera'
  base64:string;
  source:string;
  showButtonUpload:boolean=true;
  btnUploadImage: string = 'Upload image';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, public file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }
  openGallery(){
    //quality, return type like file_uri, onlye take picture and not video
    const  options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //open library
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY  
    }
    
    //open gallery and take the picture selected
    this.camera.getPicture(options).then((imageData) => {
      
      this.source = imageData;
     }, (err) => {
      // Handle error
      console.log(err)

     });
  }
  
  openCamera(){
    //quality, return type like file_uri, onlye take picture and not video
    const  options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    
    this.camera.getPicture(options).then((imageData) => {
    //set image on <img> of html
    this.source = imageData;
            
 
     }, (err) => {
      // Handle error
      

      console.log(err)

     });
  }

}
