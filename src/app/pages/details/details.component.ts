import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Route, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  navigationSections: any[] = [
    {
      name: 'ՄԱԳԻՍՏՐԱՏՈՒՐԱ',
      url: 'details/test'
    },
    {
      name: 'ԲԱԿԱԼԱՎՐԻԱՏ',
      url: 'tesrtf'
    }, {
      name: 'ԱՎԱԳ ԴՊՐՈՑ',
      url: 'testff'
    }, {
      name: 'ԱՄԲԻՈՆՆԵՐ',
      url: 'testfgtf'
    },
  ]
  activeTab = this.navigationSections[0].name;
  isFullScreen: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isFullScreen =  this.route.snapshot.data['isIndividual']
  }

  changeActiveTab(name: string): void {
    this.activeTab = name;
  }

}
