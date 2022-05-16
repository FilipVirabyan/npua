import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListService} from '../../core/api-services/list.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  sectionName = this.activatedRoute.snapshot.paramMap.get('section');
  cards = this.listService.getList(this.sectionName);
  filteredCards = this.cards;
  imageList: any[] = [];
  showSlider = false
  sliderIndex = -1;
  filterInput: FormControl = new FormControl('')

  constructor(private activatedRoute: ActivatedRoute,
              private listService: ListService) {
  }

  ngOnInit(): void {
    this.filterInput.valueChanges
      .subscribe(inpValue => {
        console.log(inpValue);
        if (inpValue) {
          this.filteredCards = this.cards.filter(card =>
            card.title.toLowerCase().includes(inpValue.toLowerCase()) ||
            card.text.toLowerCase().includes(inpValue.toLowerCase())
          )
          return;
        }
        this.filteredCards = this.cards;
      })
  }

  openSlider(card: any) {
    this.imageList = this.listService.getAlbumByID(card.id);
    this.showSlider = true
  }

  closeEventHandler() {
    this.showSlider = false;
    this.sliderIndex = -1;
  }

}
