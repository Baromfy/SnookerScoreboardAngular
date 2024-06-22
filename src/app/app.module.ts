import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassicComponent } from './classic/classic.component';
import { ShotoutComponent } from './shotout/shotout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchStatisticsComponent } from './match-statistics/match-statistics.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { PlayerScoreboardComponent } from './player-scoreboard/player-scoreboard.component';
import { PlayerTwoScoreboardComponent } from './player-two-scoreboard/player-two-scoreboard.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { TimerComponent } from './timer/timer.component';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { IpServiceService } from './ip-service.service';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { StatisticComponent } from './statistic/statistic.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassicComponent,
    ShotoutComponent,
    MatchStatisticsComponent,
    PlayerScoreboardComponent,
    PlayerTwoScoreboardComponent,
    TimerComponent,
    WinnerDialogComponent,
    NavbarComponent,
    StatisticComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
    MatDialogModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    IpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
