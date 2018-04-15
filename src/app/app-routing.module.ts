import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*customs*/
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ProgComponent } from './prog/prog.component';

const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'cv', component: CvComponent },
    { path: 'prog', component: ProgComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
   exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
