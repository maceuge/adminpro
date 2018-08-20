import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _doc,
               private themeSetting: SettingsService) {
  }
              
  ngOnInit() {       
      this.putChek();           
  }

  changeTheme (color: string, link: any) {
     this.applyChek(link);
     let url = `assets/css/colors/${color}.css`;
     this._doc.getElementById('theme').setAttribute('href', url);
     this.themeSetting.setTheme(color);
  }

  applyChek (link: any) {
     let selectors: any = document.getElementsByClassName('selector');
     for (let select of selectors) {
       select.classList.remove('working');
     }
     link.classList.add('working');
  }

  private putChek () {
    let selectors: any = document.getElementsByClassName('selector');
    let themeSet = this.themeSetting.getThemeSetting();
    for (let select of selectors) {
      if (select.getAttribute('data-theme') === themeSet.theme) {
        select.classList.add('working');
        break;
      }
    }
  }

}
