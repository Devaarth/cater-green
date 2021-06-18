import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public lineChartDataYearly: ChartDataSets[] = [
    { data: [400, 410, 430, 470, 500, 490, 580], label: 'CarbonContentPerIngredient' },
    { data: [80, 85, 80, 100, 110, 120, 130], label: 'CarbonContentPerPackagingMat' },
    { data: [200, 210, 220, 230, 244, 250, 280], label: 'CarbonContentPerTransportMode' }
  ];
  public lineChartDataMonthly: ChartDataSets[] = [
    { data: [54, 63, 45, 54, 50, 60, 50, 55, 63, 40, 65, 98], label: 'CarbonContentPerIngredient' },
    { data: [9, 7, 4, 9, 6, 10, 7, 11, 18, 5, 19, 11], label: 'CarbonContentPerPackagingMat' },
    { data: [18, 14, 8, 18, 12, 20, 14, 9, 13, 8, 19], label: 'CarbonContentPerTransportMode' }
  ]
  public lineChartDataWeekly: ChartDataSets[] = [
    { data: [1, 1.2, 1.4, 1.5, 1.7, 1.6, 1.8], label: 'CarbonContentPerIngredient' },
    { data: [0.2, 0.4, 0.3, 0.6, 0.5, 0.7, 0.8], label: 'CarbonContentPerPackagingMat' },
    { data: [0.02, 0.04, 0.03, 0.06, 0.05, 0.07, 0.08], label: 'CarbonContentPerTransportMode' }
  ];
  public lineChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public lineChartLabelsYearly: Label[] = [
    '2017',
    '2018',
    '2019',
    '2020'
  ];
  public lineChartLabelsMonthly: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decemeber'
  ];
  public lineChartLabelsWeekly: Label[] = [
    '1st week',
    '2nd week',
    '3rd week',
    '4th week'
  ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // Bar charts
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: any = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [39, 20, 13, 16, 9], label: 'Ingredients', stack: 'a', barThickness: 20 }
  ];
  public barChartLabels: string[] = ['Beef', 'Lamb', 'Dairy', 'Tofu', 'Peas'];

  //Table data

  public ELEMENT_DATA: any[] = [
    { position: 1, name: 'Meat Products', weight: 18, unit: 'kg/mt' },
    { position: 2, name: 'Dairy Products', weight: 8, unit: 'kg/mt' },
    { position: 3, name: 'Vegetables and oils', weight: 11, unit: 'kg/mt' },
    { position: 4, name: 'Fruits', weight: 6, unit: 'kg/mt' },
    { position: 5, name: 'Other', weight: 10, unit: 'kg/mt' }
  ];
  public displayedColumns: any;
  public dataSource;

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'weight', 'unit'];
    this.dataSource = this.ELEMENT_DATA;
  }

}
