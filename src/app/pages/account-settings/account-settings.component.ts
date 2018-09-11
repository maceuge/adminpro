import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private themeSetting: SettingsService) {
  }
              
  ngOnInit() {       
    this.putChek();           
  }

  changeTheme (theme: string, link: any) {
     this.applyChek(link);
     this.themeSetting.setTheme(theme);
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
    let themeSet = localStorage.getItem('theme');
    for (let select of selectors) {
      if (select.getAttribute('data-theme') === themeSet) {
        select.classList.add('working');
        break;
      }
    }
  }

}
