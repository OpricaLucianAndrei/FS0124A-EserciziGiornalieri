import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { RelatedComponent } from './components/related/related.component';
import { AdviseComponent } from './components/advice/advice.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    EvidenceComponent,
    RelatedComponent,
    AdviseComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
