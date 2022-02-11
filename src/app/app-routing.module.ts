import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SubscriberComponent } from './subscriber/subscriber.component';

const routes: Routes = [
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'subscriber',
    component: SubscriberComponent
  },
  {
    path: '**',
    redirectTo:'footer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
