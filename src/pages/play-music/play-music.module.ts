import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayMusicPage } from './play-music';

@NgModule({
  declarations: [
    PlayMusicPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayMusicPage),
  ],
})
export class PlayMusicPageModule {}
