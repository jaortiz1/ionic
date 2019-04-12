import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  token : string = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCbHV1bGluayIsImlkIjoiMjQxNDUxNCIsImV4cCI6MTU1NTA1NjY0NX0.h9JdZgQqE7QVKkUMK4uUx7fYDWDdJ6peDBCBNM9dTsk'

  textBtnLibraryUpload='Upload from library';
  textBtnCameraUpload='Upload from camera'
  base64:string;
  source:string;
  showButtonUpload:boolean=true;
  btnUploadImage: string = 'Upload image';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, private transfer: FileTransfer, private file: File) {
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
    
    this.obtainPicture(options);
  }

  obtainPicture(options:CameraOptions){
    this.camera.getPicture(options).then((imageData) => {
      //set image on <img> of html
      this.source = imageData;
      console.log('ruta')
      console.log(this.source)
      this.showButtonUpload=false;
   
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
    
    this.obtainPicture(options);

    
  }

  public uploadImage(){
    var headers={'Authorization': this.token};
    let options: FileUploadOptions = {
      fileKey: 'profile',
      fileName: this.source.substring(this.source.lastIndexOf('/') + 1),
      httpMethod: 'PUT',
      headers: headers
      
   }
   const fileTransfer= this.transfer.create();
   fileTransfer.upload(this.source, 'https://desarrollo.bluulink.com/api/v1', options)
   .then(data=>{
      console.log('exito')
      console.log(data)
   })
   .catch(err=>{
     console.log('Error')
     console.log(err);
   })

    
  }

}
