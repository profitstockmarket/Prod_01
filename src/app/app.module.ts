import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockAnalysisComponent } from './stock-analysis/stock-analysis.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialComponent } from './social/social.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule }    from '@angular/common/http';
import { AddStocksPopupComponent } from './add-stocks-popup/add-stocks-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { PaginationModule } from 'ngx-pagination-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    StockAnalysisComponent,
    HomepageComponent,
    SocialComponent,
    PortfolioComponent,
    AddStocksPopupComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FeatureComponent,
    LoginComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    PaginationModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
