import { Component } from '@angular/core';

import {
  ExportAsService,
  ExportAsConfig,
  SupportedExtensions,
} from 'ngx-export-as';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  downloadAs: SupportedExtensions = 'png';

  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', // the type you want to download
    elementIdOrContent: 'sampleTable', // the id of html/table element
  };

  constructor(private exportAsService: ExportAsService) {}

  export() {
    this.exportAsConfig.type = this.downloadAs;
    // download the file using old school javascript method
    this.exportAsService
      .save(this.exportAsConfig, 'Exported_File_Name')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
      console.log(content);
    });
  }

  exportCSV() {
    this.exportType('csv')
  }

  exportPDF() {
    this.exportType('pdf')
  }

  exportXLSX() {
    this.exportType('xlsx')
  }

  exportType(format : SupportedExtensions) {
    this.exportAsConfig.type = format;
    this.exportAsService.save(this.exportAsConfig, 'Exported_File_Name').subscribe(() => {
      // save started
    });
  }
}
