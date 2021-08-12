import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { VerifierComponent } from './verifier/verifier.component';
import { AssetListVerifierComponent } from './asset-list-verifier/asset-list-verifier.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { AssetComponent } from './asset/asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetDetailsListComponent } from './asset-details-list/asset-details-list.component';
import { MapComponent } from './map/map.component';
import { MailComponent } from './mail/mail.component';


const routes: Routes = [
 
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'welcome/:userType', component:WelcomeComponent,canActivate:[RouteGaurdService]},
  {path:'assets', component:AssetListComponent,canActivate:[RouteGaurdService]},
  {path:'asset/:id', component:AssetComponent,canActivate:[RouteGaurdService]},
  {path:'verifiedAssetDetails/:id', component:AssetDetailsComponent,canActivate:[RouteGaurdService]},
  {path:'assetDetailsList/:id', component:AssetDetailsListComponent,canActivate:[RouteGaurdService]},
  {path:'map/:id', component:MapComponent,canActivate:[RouteGaurdService]},
  
  {path:'assetVerifier', component:AssetListVerifierComponent,canActivate:[RouteGaurdService]},
{path:'verify/:id', component:VerifierComponent,canActivate:[RouteGaurdService]},
{path:'mail',component:MailComponent,canActivate:[RouteGaurdService]},
{path:'', component:LoginComponent},

{path:'logout',component:LogoutComponent,canActivate:[RouteGaurdService]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
