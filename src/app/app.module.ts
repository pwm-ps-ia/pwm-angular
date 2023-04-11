import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from '@components/nav/footer/footer.component';
import { HeaderComponent } from '@components/nav/header/header.component';
import { NewCardComponent } from '@components/cards/new-card/new-card.component';
import { TeamCardComponent } from '@components/cards/team-card/team-card.component';

import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { DocumentationComponent } from '@pages/documentation/documentation.component';
import { NewsComponent } from '@pages/news/news.component';
import { LoginComponent } from '@pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const pages = [
  AboutUsComponent,
  NewsComponent,
  LoginComponent,
  DocumentationComponent,
];

const components = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  NewCardComponent,
  TeamCardComponent,
];

@NgModule({
  declarations: [...pages, ...components, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
