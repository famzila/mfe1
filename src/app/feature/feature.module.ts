import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/mfe1/i18n/', '.json');
}

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    // Translate is working with this configuration (but only translated messages with pipe and not translate with service):
    // TranslateModule.forChild({
    //   defaultLanguage: 'en',
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    //   extend: true,
    //   // isolate: true,
    // }),
    FeatureRoutingModule,
  ],
})
export class FeatureModule {}
