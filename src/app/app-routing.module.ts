import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { DocumentationComponent } from '@pages/documentation/documentation.component';
import { HomeComponent } from '@pages/home/home.component';
import { LoginComponent } from '@pages/login/login.component';
import { NewsComponent } from '@pages/news/news.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/home' }, // fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
