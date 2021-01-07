import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType,ChartDataSets, ChartOptions, pluginService} from 'chart.js';
import { Color, Label,SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-stock-analysis',
  templateUrl: './stock-analysis.component.html',
  styleUrls: ['./stock-analysis.component.css']
})
export class StockAnalysisComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [49.90, 87.69, 97.66, 80.44, 76.47, 90.30, 98.90,80.92,87.51,201.47], label: 'EPS' },
  ];
  public lineChartLabels: Label[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  public lineChartOptions: (ChartOptions & { annotation ?: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  // Pie
public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};

public pieChartLabels: Label[] = [['Promotor', 'Group'], ['FII ',], ['Retail'],'Mutual Funds'];
public pieChartData: SingleDataSet = [59.91, 15, 10,10];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [pluginService];

public barChartOptions: ChartOptions = {
  responsive: true,
};
public barChartLabels: Label[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];

public barChartData: ChartDataSets[] = [
  { data: [49.90, 87.69, 97.66, 80.44, 76.47, 90.30, 98.90,80.92,87.51,201.47], label: 'EPS' }
 
];

  constructor(private route1:Router) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }



  ngOnInit(): void {
  }
  Home(){
    this.route1.navigate(["Homepage"]);
    
    }
    Social(){
      this.route1.navigate(["Social"]);
      
      }
      analysis(){
        this.route1.navigate(["stock-analysis"]);
        
        }
        Portfolio(){
          this.route1.navigate(["Portfolio"]);
            }
  

}

