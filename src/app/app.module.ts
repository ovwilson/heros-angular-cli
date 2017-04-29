import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { FirebaseEffects } from './effects/firebase-effects';
import { APPRROUTES } from './app.routing';
import { PreloadSelectedModules } from './app.preload-strategy';

import { reducers } from './reducers/reducers';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DatePickerComponent } from './datepicker/datepicker.component';
export function useDock() {
  return {
    monitor: useLogMonitor({
      visible: false,
      position: 'right'
    })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APPRROUTES, { preloadingStrategy: PreloadSelectedModules }),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(reducers()),
    StoreDevtoolsModule.instrumentStore(useDock),
    StoreLogMonitorModule,
    EffectsModule.run(FirebaseEffects)
  ],
  providers: [
    PreloadSelectedModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
