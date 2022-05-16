import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hamburger-btn',
  templateUrl: './hamburger-btn.component.html',
  styleUrls: ['./hamburger-btn.component.scss']
})
export class HamburgerBtnComponent implements OnInit {
  value = false;
  @Output('opened') opened: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.value = !this.value;
    this.opened.emit(this.value);
  }

}
