import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./poker/header/header.component";
import { MainNavigationComponent } from "./poker/header/main-navigation/main-navigation.component";
import { SideBarComponent } from "./poker/side-bar/side-bar.component";
import { HomeComponent } from "./poker/home/home.component";
import { RegisterComponent } from "./poker/user/register/register.component";
import { LoginComponent } from "./poker/user/login/login.component";
import { ProfileComponent } from "./poker/user/profile/profile.component";
import { HostLeaguesComponent } from "./poker/leagues/host-leagues/host-leagues.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavigationComponent,
    SideBarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HostLeaguesComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
