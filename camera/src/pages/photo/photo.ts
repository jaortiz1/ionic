import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


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
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }
  openGallery(){
    console.log('entra en OPEN GALLERY')
    const  options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //open library
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY  
    }
    
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.base64='data:image/jpeg;base64,' + imageData;
      // console.log('aqui')
      // console.log(this.base64)
      //put available the upload button
      // console.log(this.showButtonUpload)
      // this.showButtonUpload=false;
      // console.log(this.showButtonUpload)
      this.source = imageData;
      console.log('ruta')
      console.log(this.source)
     }, (err) => {
      // Handle error
      console.log('da error galleria')
      console.log(err)

     });
  }
  openCamera(){
    console.log('se mete')
    const  options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    
    this.camera.getPicture(options).then((imageData) => {

      
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.base64='data:image/jpeg;base64,' + imageData;
      // console.log('aqui')
      // console.log(this.base64)
      this.source = imageData;
      console.log('ruta')
      console.log(this.source)
      
 
     }, (err) => {
      // Handle error
      console.log('da error camera')

      console.log(err)

     });
  }

}
