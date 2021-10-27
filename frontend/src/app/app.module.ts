import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectBlockComponent } from './projects/project-block/project-block.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycvComponent } from './mycv/mycv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectFullComponent } from './projects/project-full/project-full.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProjectsComponent,
    ProjectBlockComponent,
    ContactComponent,
    MycvComponent,
    ProjectFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
