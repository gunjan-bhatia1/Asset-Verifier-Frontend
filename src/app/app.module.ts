/// <reference types="@types/googlemaps" />
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { VerifierComponent } from './verifier/verifier.component';
import { AssetListVerifierComponent } from './asset-list-verifier/asset-list-verifier.component';
import { LogoutComponent } from './logout/logout.component';
import { AssetComponent } from './asset/asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetDetailsListComponent } from './asset-details-list/asset-details-list.component'
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { UploadFileService } from './service/upload-file.service';
import { MailComponent } from './mail/mail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    AssetListComponent,
    MenuComponent,
    FooterComponent,
    VerifierComponent,
    AssetListVerifierComponent,
    LogoutComponent,
    AssetComponent,
    AssetDetailsComponent,
    AssetDetailsListComponent,
    MapComponent,
    ListUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
  apiKey:'AIzaSyDuMESj1SaEqwxlNaoDUm79ig_U-a2SET8'
     // apiKey:'AIzaSyCcITnEtELzhAKr5IjD2esG0Rx82-fvZc0'
   //apiKey:'AIzaSyBhRF5JE7eCSai1M1mdelk2y34Ul2l4GFs'
    })

  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
