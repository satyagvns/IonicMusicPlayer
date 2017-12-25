import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { PlayMusicPage } from '../pages/play-music/play-music';
import { ContactPage } from '../pages/contact/contact';
import { PlayerListPage } from '../pages/player-list/player-list';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayerProvider } from '../providers/player/player';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    PlayMusicPage,
    ContactPage,
    PlayerListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayMusicPage,
    ContactPage,
    PlayerListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerProvider,
    DataProvider
  ]
})
export class AppModule {}
