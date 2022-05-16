import {Component, OnInit} from '@angular/core';
import {ListService} from '../../core/api-services/list.service';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.scss']
})
export class LendingComponent implements OnInit {
  newsCards: any[] = this.listService.getNews()
  albumCards: any[] = this.listService.getMedia()


  constructor(private listService: ListService) {
  }

  ngOnInit(): void {
  }

}
