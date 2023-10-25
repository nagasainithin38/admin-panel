import { Component, Input } from '@angular/core';
import { cardContent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  cardContent!:cardContent

}
