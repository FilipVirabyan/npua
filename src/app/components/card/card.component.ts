import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card?: {
    id: string;
    title: string;
    text: string;
    image: string;
  }
  @Input() showTitle: boolean = true;
  @Output('selectCard') selectCard: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.selectCard.emit(this.card);
  }

}
