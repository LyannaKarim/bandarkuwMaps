import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController, IonicPage, Platform } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { LocationsProvider } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';

@Component({
  selector: 'page-parking',
  templateUrl: 'parking.html'
})
export class ParkingPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

tasks: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, 
    public maps: GoogleMapsProvider,
    public platform: Platform,
    public locations: LocationsProvider,
    public db: AngularFireDatabase, 
    public alertCtrl: AlertController) {

  this.tasks = db.list('/tasks/Parking');

  }

  updateTask(key, amount) {
    this.tasks.update(key, {amount: amount});
    this.showAlert();
  }

 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Parking has been updated.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {

    this.platform.ready().then(() => {

      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
      let locationsLoaded = this.locations.load();

      Promise.all([
        mapLoaded,
        locationsLoaded
      ]).then((result) => {

        let locations = result[1];

        for (let location of locations) {
          this.maps.addMarker(location.latitude, location.longitude);
        }

      });

    });

  }

}
