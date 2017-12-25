import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';
import { Storage } from '@ionic/storage';
import { DataProvider } from "../../providers/data/data";

import { PlayMusicPage } from '../play-music/play-music';

import { PlayerProvider } from '../../providers/player/player';

/**
 * Generated class for the PlayerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-list',
  templateUrl: 'player-list.html',
})
export class PlayerListPage {

  PlayerList : any;
  tab: Tabs;
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  private player: PlayerProvider,
          private storage: Storage,
          public data:DataProvider) {
  	this.tab = this.navCtrl.parent;
  }

  ionViewDidLoad() {
    this.PlayerList = [
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 1',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
	        'description' : 'Song 1 from soundhelix',
	        'rating' : '5'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 2',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
	        'description' : 'Song 2 from soundhelix',
	        'rating' : '4'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 3',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
	        'description' : 'Song 3 from soundhelix',
	        'rating' : '5'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 4',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
	        'description' : 'Song 4 from soundhelix',
	        'rating' : '3.5'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 5',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
	        'description' : 'Song 5 from soundhelix',
	        'rating' : '4.5'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 6',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
	        'description' : 'Song 6 from soundhelix',
	        'rating' : '3'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 7',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
	        'description' : 'Song 6 from soundhelix',
	        'rating' : '5'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 8',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
	        'description' : 'Song 7 from soundhelix',
	        'rating' : '5'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 9',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
	        'description' : 'Song 8 from soundhelix',
	        'rating' : '5'
   	 	},
   	 	{
   	 	    'thumb' : '/assets/imgs/T1-01.png',
   	 	    'title' : 'Song 10',
	        'art' : '/assets/imgs/song-1-01.png',
	        'track' : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
	        'description' : 'Song 8 from soundhelix',
	        'rating' : '5'
   	 	}
    ];
  }

  openPlayer(track : any) {
    //console.log(track);
    this.data.paramData = track;
    this.tab.select(1, track);
    //this.navCtrl.setRoot(PlayMusicPage, input);
  }

}
