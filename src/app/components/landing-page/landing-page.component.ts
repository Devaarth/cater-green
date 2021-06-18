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
  //Line chart 
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90], label: 'Series A' },
  //   { data: [30, 40, 46, 75, 56, 55, 40, 45, 55, 65, 75, 85, 95], label: 'Series B' },
  //   { data: [20, 59, 70, 81, 56, 55, 40, 48, 32, 65, 74, 87, 23], label: 'Series C', borderColor: 'green' }
  // ];
  public lineChartData: ChartDataSets[] = [
  { data: [400, 410, 430, 470, 500, 490, 580], label: 'CarbonContentPerIngredient' },
  { data: [80, 85, 80, 100, 110, 120, 130], label: 'CarbonContentPerPackagingMat' },
  { data: [200, 210, 220, 230, 244, 250, 280], label: 'CarbonContentPerTransportMode' }
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
    { data: [20, 40, 67, 98, 98], label: 'Ingredients', stack: 'a', barThickness: 20 }
  ];
  public barChartLabels: string[] = ['Beef', 'Lamb', 'Dairy', 'Tofu', 'Peas'];

  //Table data

  public ELEMENT_DATA: any[] = [
    { position: 1, name: 'Meat Products', weight: 18 , unit: 'kg/mt' },
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
