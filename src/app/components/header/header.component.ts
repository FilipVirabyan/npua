import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationSections: any[] = [
    {
      name: 'admission',
      url: 'details/dimord'
    },
    {
      name: 'news',
      url: 'list/news'
    }, {
      name: 'structure',
      url: 'testff'
    }, {
      name: 'chairs',
      url: 'testfgtf'
    }, {
      name: 'council',
      url: 'testvf'
    }, {
      name: 'education',
      url: 'testffv'
    }, {
      name: 'for_student',
      url: 'testfd'
    },
    {
      name: 'documents',
      url: 'testfv'
    },
    {
      name: 'media',
      url: 'list/media'
    },
    {
      name: 'about_us',
      url: 'testd'
    }
  ]
  dropdownOpened = false;
  langs = {
    en: {
      path: 'assets/images/us-flag.png'
    },
    ru: {
      path: 'assets/images/rus-flag.png'
    },
    am: {
      path: 'assets/images/arm-flag.png'
    }
  }
  selectedLangImg = this.langs.am.path;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  selectLang(lang: string) {
    // @ts-ignore
    this.selectedLangImg = this.langs[lang].path
    this.translate.use(lang)
  }

}
