import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './component/navigation/navigation.component';
import { NewPostComponent } from './component/new-post/new-post.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './auth/auth.init';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PermissionDirective } from './directive/permission.directive';
import { RegistrationComponent } from './component/registration/registration.component';
import { HttpHeaderInterceptor } from './interceptor/httpHeaderInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewPostComponent,
    PostsComponent,
    PostDetailComponent,
    WelcomeComponent,
    PermissionDirective,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    KeycloakAngularModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
