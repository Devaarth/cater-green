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
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 80, 90], label: 'Series A' },
    { data: [30, 40, 46, 75, 56, 55, 40, 45, 55, 65, 75, 85, 95], label: 'Series B' },
    { data: [20, 59, 70, 81, 56, 55, 40, 48, 32, 65, 74, 87, 23], label: 'Series C', borderColor: 'green' }
  ];
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
    { data: [5, 15, 34, 87, 2], label: 'Transport', stack: 'a', barThickness: 20 },
    { data: [20, 40, 67, 98, 98], label: 'Ingredients', stack: 'a', barThickness: 20 },
    { data: [40, 60, 39, 38, 12], label: 'XYZ', stack: 'a', barThickness: 20 },
  ];
  public barChartLabels: string[] = ['Beef', 'Lamb', 'Dairy', 'Tofu', 'Peas'];

  //Table data

  public ELEMENT_DATA: any[] = [
    { position: 1, name: 'Meat Products', weight: 10 , unit: 'kg/mt' },
    { position: 2, name: 'Dairy Products', weight: 8, unit: 'kg/mt' },
    { position: 3, name: 'Plastic Cuttlery', weight: 25, unit: 'kg/mt' },
    { position: 4, name: 'Non Recyclabe containers', weight: 20, unit: 'kg/mt' },
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
