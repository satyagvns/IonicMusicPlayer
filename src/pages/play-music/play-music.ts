import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataProvider } from "../../providers/data/data";
import { PlayerProvider } from "../../providers/player/player";

/**
 * Generated class for the PlayMusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-music',
  templateUrl: 'play-music.html',
})
export class PlayMusicPage {

  songData : any;
  song: any;
  minRange: any;
  maxRange: any;
  playStory: any;

  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  private storage: Storage,
			  public data:DataProvider,
			  public player: PlayerProvider) {}

  ionViewDidEnter() {
  	 this.songData = this.data.paramData;
  	 console.log(this.songData);
  	 this.song = this.songData.track;
  	 this.minRange = 0;
     this.maxRange = 10;
  	 this.play(this.song);

  }

  play(song){
  this.playStory = 1;
      this.player.play(song).then((response) => {
      	this.maxRange = response;
      });
      let stream = this.player.getStream();
      stream.addEventListener('timeupdate', () => {
        this.myRange = this.player.getCurrentTime();   
      });
      this.player.ended().then((f) => {
      if(f == true){
        this.next();      
      }    
    })
  }
  pause() {
    this.player.pause();
    this.playStory = 0;
    console.log('Pause');
  }

  timeline(){
    let current = this.player.getCurrentTime();
    let duration = this.player.getDuratoin();
    if(current == duration){
      return false;
    }
    this.myRange = current;
    this.timeline()    
  }

  changeTime(event: any){
    this.player.seekTo(event.value);
  }

}
