import { Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';


/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerProvider {

  url:string;
  stream:any;
  promise:any;
  currentTime: any;
  
  constructor() {
    this.stream = this.audioObj('');
    console.log('Hello PlayerProvider Provider');
  }
  audioObj(song) {
    return new Audio(song);
  }
  play(song) {
    if(this.url != undefined && this.url != song){
      this.stream.currentTime = 0;
      this.currentTime = 0;
      this.url = song;
    } else {
      this.url = song;
    }
    this.stream.pause();
    this.stream = this.audioObj(song);
    if(this.currentTime > 0){
      this.stream.currentTime = this.currentTime;
    }
    this.stream.play();
    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        console.log("playing")
        resolve(this.stream.duration);
      });
      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });
    return this.promise;
  };

  seekTo(seek: any) {
    this.stream.currentTime = seek;
  }

  ended() {
    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('ended', () => {
        console.log("ended")
        resolve(true);
      });

      this.stream.addEventListener('error', () => {
        reject(false);
      });
      
    });
    return this.promise;
  }
  getStream(){
    return this.stream;
  }
  getCurrentTime(){
    return this.stream.currentTime;
  }
  getDuration(){
    return this.stream.duration;
  }

  pause() {
    this.currentTime = this.stream.currentTime;
    this.stream.pause();
  };
  stop() {
    this.currentTime = 0;
    this.stream.currentTime = 0;
    this.stream.pause();
  };
  duration() {
    return this.stream.duration;
  };
  currenttime() {
    return this.stream.currentTime;
  }

}