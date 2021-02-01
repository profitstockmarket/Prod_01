import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockAnalysisComponent } from './stock-analysis/stock-analysis.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialComponent } from './social/social.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { MoComponent } from './mo/mo.component';
import { Mo4Component } from './mo/mo4/mo4.component';
import { Mo3Component } from './mo/mo3/mo3.component';
import { Mo2Component } from './mo/mo2/mo2.component';
import { ProfitQueryComponent } from './profit-query/profit-query.component';
import { RegisternewComponent } from './registernew/registernew.component';

 



const routes: Routes = [
{ path: '', component: HomepageComponent },
{ path: 'Homepage', component: HomepageComponent },
{ path: 'StockAnalysis', component: StockAnalysisComponent },
{ path: 'Portfolio', component: PortfolioComponent },
{ path: 'Social', component: SocialComponent  },
{ path: 'login', component: LoginComponent  },
{ path: 'Mo4', component: Mo4Component },
{ path: 'Mo', component: MoComponent },
{ path: 'Mo3', component: Mo3Component },
{ path: 'Mo2', component: Mo2Component },
{ path: 'profitquery', component: ProfitQueryComponent },
{ path: 'registernew', component: RegisternewComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
 }
