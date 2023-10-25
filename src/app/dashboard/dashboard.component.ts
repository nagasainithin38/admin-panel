import { Component } from '@angular/core';



export interface cardContent {
  heading: string,
  icon: string,
  mainContent: string,
  profitOrLoss: string,
  POLclass: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cardContent: Array<cardContent> = [
    {
      heading: "Sales",
      icon: "truck",
      mainContent: "2.382",
      profitOrLoss: "-3.65%",
      POLclass: "danger"
    },
    {
      heading: "Earnings",
      icon: "dollar-sign",
      mainContent: "$21.300",
      profitOrLoss: "6.65%",
      POLclass: "success"
    },
    {
      heading: "Visitors",
      icon: "users",
      mainContent: "14.212",
      profitOrLoss: "5.25%",
      POLclass: "success"
    },
    {
      heading: "Orders",
      icon: "shopping-cart",
      mainContent: "64",
      profitOrLoss: "-2.25%",
      POLclass: "danger"
    }

  ]

}
