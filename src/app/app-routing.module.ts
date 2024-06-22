import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassicComponent } from './classic/classic.component';
import { ShotoutComponent } from './shotout/shotout.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classic', component: ClassicComponent },
  { path: 'shotout', component: ShotoutComponent },
  { path: 'stat', component: StatisticComponent }
  // Add other routes here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
