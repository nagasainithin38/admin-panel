import { Component } from '@angular/core';
import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  public chart: any;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        data: [2115,
          1562, 
          1584,
          1892,
          1587,
          1923,
          2566,
          2448,
          2805,
          3438,
          2917,
          3327],
        label: 'Sales ($)',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = false;
}
