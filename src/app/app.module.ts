//Components 
import { AppComponent } from './app.component';
import { AddStocksPopupComponent } from './add-stocks-popup/add-stocks-popup.component';
import { AdComponent } from './ad/ad.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CRateComponent } from './Common/c-rate/c-rate.component';
import { CsrComponent } from './social/csr/csr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './social/header2/header2.component';
import { LoginComponent } from './login/login.component';
import { LikeComponent } from './Common/like/like.component';
import { MoComponent } from './mo/mo.component';
import { Mo2Component } from './mo/mo2/mo2.component';
import { Mo3Component } from './mo/mo3/mo3.component';
import { Mo4Component } from './mo/mo4/mo4.component';
import { Mo5Component } from './mo5/mo5.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfitQueryComponent } from './profit-query/profit-query.component';
import { RegisternewComponent } from './registernew/registernew.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SocialComponent } from './social/social.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { StockAnalysisComponent } from './stock-analysis/stock-analysis.component';
import { TeamComponent } from './team/team.component';
//Modules 
import {AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule } from '@angular/platform-browser';
import {ChartsModule } from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule}  from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {NgModule } from '@angular/core';
import {NgbModule,NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import {NgTickerModule } from 'ng-ticker';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {PaginationModule } from 'ngx-pagination-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Pf1TableComponent } from './pf1-table/pf1-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    AddStocksPopupComponent,
    AboutusComponent,
    AdComponent,
    CsrComponent,
    CRateComponent,
    DashboardComponent,
    FeatureComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    Header2Component,
    LoginComponent,
    LikeComponent,
    MoComponent,
    Mo2Component,
    Mo3Component,
    Mo4Component,
    Mo5Component,
    PortfolioComponent,
    ProfitQueryComponent,
    RegisternewComponent,
    StockAnalysisComponent,
    SocialComponent,
    SidebarComponent,
    SocialmediaComponent,
    TeamComponent,
    Pf1TableComponent,
        
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatChipsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgTickerModule,
    NgxTwitterTimelineModule,
    NgbRatingModule,
    PaginationModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
