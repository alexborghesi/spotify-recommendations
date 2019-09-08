import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducers, metaReducers, CustomRouterStateSerializer } from './app.reducer'
import { AppComponent } from './app.component';
import { AppContainer } from './app.container';
import { environment } from '../environments/environment';

import { AppService } from './app.service';
import { AppEffects} from './app.effects';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ name: 'NgRx Store DevTools', logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    AppRoutingModule,
    FormsModule
  ],
  declarations: [AppContainer, AppComponent],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: AppService, useClass: AppService }

  ],
  bootstrap: [AppContainer]
})

export class AppModule { }