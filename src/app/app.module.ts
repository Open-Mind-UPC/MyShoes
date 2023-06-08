import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import{PerfilContentComponent} from "./perfil/perfil-content.component";
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import { FooterContentComponent } from './web/components/footer-content/footer-content.component';
import { MainWebComponent } from './web/components/main-web/main-web.component';
import { MainContentComponent } from './web/components/main-content/main-content.component';
import { HeaderContentComponent } from './web/components/header-content/header-content.component';
import { UserLoginComponent } from './authentication/login/pages/user-login/user-login.component';
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { ForgotPasswordComponent } from './authentication/login/pages/forgot-password/forgot-password.component';
import {RouterModule, Routes} from "@angular/router";
import { UserSignUpComponent } from './authentication/signup/pages/user-sign-up/user-sign-up.component';
import {NavComponent} from "./shop/pages/nav/nav.component";
import {MatSelectModule} from "@angular/material/select";
import {ListShoesComponent} from "./shop/pages/list-shoes/list-shoes.component";
import {EditarPerfilContentComponent} from "./editar-perfil/editar-perfil-content.component";
import { DesignComponent } from './design/pages/design/design.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

const routes: Routes =[
  { path: 'home', component: MainWebComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'reset-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: UserSignUpComponent },
  { path: 'perfil', component: PerfilContentComponent },
  { path: 'editar', component: EditarPerfilContentComponent },
  { path: 'shop', component: NavComponent},
  { path: 'design', component: DesignComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    MainWebComponent,
    MainContentComponent,
    HeaderContentComponent,
    MainWebComponent,
    UserLoginComponent,
    ForgotPasswordComponent,
    UserSignUpComponent,
    NavComponent,
    ListShoesComponent,
    PerfilContentComponent,
    EditarPerfilContentComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    MatButtonToggleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
