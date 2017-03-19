import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import 'chart.js/dist/Chart.bundle.js';
import {Color} from 'ng2-charts';
import  Chart  from './chart.js/src/chart';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }


  name:string;
  labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data:number[] = [350, 450, 100];

  type:string = 'doughnut';



  colorsUndefined: Array<Color>;
  colorsEmpty: Array<Color> = [];
  colorsOverride: Array<Color> = [{
    backgroundColor: 'green',
    hoverBackgroundColor: 'purple'
  }];
  colorsEmptyObject: Array<Color> = [{}];

  datasets: any[] = [
    {
      borderColor: "rgba(255, 255, 0, 1)",
      data: this.data,
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#000",
        "#36A2EB",
        "#FFCE56"
      ]
    }];

  // options = [{
  //   scales: {
  //     yAxes: {
  //       ticks: {
  //         BeginAtZero: true
  //       }
  //     }
  //   }
  // }];



  // public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales'];
  // public doughnutChartData:number[] = [75, 25];
  // public doughnutChartType:string = 'doughnut';
  //
  //
  // public colors: any[] = [{
  //   backgroundColor:["#FF7360", "#6FC8CE"]
  // }];
  //
  //
  //
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
  //
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

}
