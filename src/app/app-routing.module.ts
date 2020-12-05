import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockAnalysisComponent } from './stock-analysis/stock-analysis.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialComponent } from './social/social.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
{ path: '', component: HomepageComponent },
{ path: 'Homepage', component: HomepageComponent },
{ path: 'StockAnalysis', component: StockAnalysisComponent },
{ path: 'Portfolio', component: PortfolioComponent },
{ path: 'Social', component: SocialComponent  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
 }
