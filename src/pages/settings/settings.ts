import { Component } from '@angular/core';
import {Toggle} from "ionic-angular";
import {SettingsService} from "../../services/settings";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private settingsService: SettingsService) {}
  onToggle(toggleEv: Toggle) {
    console.log(toggleEv);
    this.settingsService.setBackground(toggleEv.checked);
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
