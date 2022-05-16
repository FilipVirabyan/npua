import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {LendingComponent} from './pages/lending/lending.component';
import {MainFooterComponent} from './components/main-footer/main-footer.component';
import {CardComponent} from './components/card/card.component';
import {DetailsComponent} from './pages/details/details.component';
import {ListComponent} from './pages/list/list.component';
import {ArticleComponent} from './pages/article/article.component';
import {NgImageFullscreenViewModule} from 'ng-image-fullscreen-view';
import {ReactiveFormsModule} from '@angular/forms';
import {HamburgerBtnComponent} from './components/hamburger-btn/hamburger-btn.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LendingComponent,
    MainFooterComponent,
    CardComponent,
    DetailsComponent,
    ListComponent,
    ArticleComponent,
    HamburgerBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageFullscreenViewModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
