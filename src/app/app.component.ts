import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('english');
  }
  title = 'MultiLingual';
  languageControl = new FormControl('', Validators.required);

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
