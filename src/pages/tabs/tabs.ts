import { Component } from '@angular/core';


import { PlayMusicPage } from '../play-music/play-music';
import { ContactPage } from '../contact/contact';
import { PlayerListPage } from '../player-list/player-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlayerListPage;
  tab2Root = PlayMusicPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
