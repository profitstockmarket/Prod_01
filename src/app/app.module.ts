import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockAnalysisComponent } from './stock-analysis/stock-analysis.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialComponent } from './social/social.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule }    from '@angular/common/http';
import { AddStocksPopupComponent } from './add-stocks-popup/add-stocks-popup.component';
import { NgbModule,NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule}  from '@angular/material/card';
import {MatButtonModule}  from '@angular/material/button';
import {MatDividerModule}  from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MoComponent } from './mo/mo.component';
import { Mo2Component } from './mo/mo2/mo2.component';
import { Mo3Component } from './mo/mo3/mo3.component';
import { Mo4Component } from './mo/mo4/mo4.component';
import { Mo5Component } from './mo5/mo5.component';
import { ProfitQueryComponent } from './profit-query/profit-query.component';
import { RegisternewComponent } from './registernew/registernew.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TeamComponent } from './team/team.component';
import { AdComponent } from './ad/ad.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { Header2Component } from './social/header2/header2.component';
import { CsrComponent } from './social/csr/csr.component';
import { NgTickerModule } from 'ng-ticker';
import {MatChipsModule} from '@angular/material/chips';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { CRateComponent } from './Common/c-rate/c-rate.component';
import { LikeComponent } from './Common/like/like.component';
import { DashboardComponent } from './dashboard/dashboard.component';




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
    MoComponent,
    Mo2Component,
    Mo3Component,
    Mo4Component,
    Mo5Component,
    ProfitQueryComponent,
    RegisternewComponent,
    AboutusComponent,
    TeamComponent,
    AdComponent,
    SocialmediaComponent,
    Header2Component,
    CsrComponent,
    CRateComponent,
    LikeComponent,
    DashboardComponent,
    
    
    
    ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    PaginationModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatExpansionModule,
    NgTickerModule,
    MatChipsModule,
    NgxTwitterTimelineModule,
    NgbRatingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
