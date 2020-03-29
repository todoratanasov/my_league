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
import { ProfileGeneralInfoComponent } from "./poker/user/profile/profile-general-info/profile-general-info.component";
import { HostLeaguesComponent } from "./poker/leagues/host-leagues/host-leagues.component";
import { ParticipatedLeaguesComponent } from "./poker/leagues/participated-leagues/participated-leagues.component";
import { JoinLeagueComponent } from "./poker/leagues/join-league/join-league.component";
import { ProfileSecurityComponent } from "./poker/user/profile/profile-security/profile-security.component";
import { ProfilePersonalStatsComponent } from "./poker/user/profile/profile-personal-stats/profile-personal-stats.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavigationComponent,
    SideBarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileGeneralInfoComponent,
    HostLeaguesComponent,
    ParticipatedLeaguesComponent,
    JoinLeagueComponent,
    ProfileSecurityComponent,
    ProfilePersonalStatsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
