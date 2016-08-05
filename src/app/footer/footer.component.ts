import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  styleUrls: [ './footer.style.css' ],
  templateUrl: './footer.template.html'
})
export class Footer {
  private copyright: string;

  constructor() {
    this.copyright = setCopyrightText();

    function setCopyrightText(): string {
      let baseYear: number = 2016;
      let currentYear: number = new Date().getFullYear();
      let baseText: string = "Copyright Lucky Circuit " + String(baseYear);
      if (currentYear == baseYear) {
        return baseText;
      } else {
        return baseText + " - " + String(currentYear);
      }
    }
  }
  
}
