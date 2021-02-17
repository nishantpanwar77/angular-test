import { MyHttpService } from './my-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  apiResponse: any = [];
  tableData: any = [];
  constructor(
    private myService: MyHttpService
  ) { }

  ngOnInit() {
    this.myService.getData().subscribe(res => {
      this.apiResponse = res;
    });
  }

  showAdd(item:any): boolean{
    return !(this.tableData.find(x => x.id == item.id));
  }

  showRemove(item): boolean{
    return (this.tableData.find(x => x.id == item.id));
  }

  onCompare(rowItem) {
    console.log(rowItem);
    this.tableData.push(rowItem);
  }

  onRemove(rowItem) {
    this.tableData = this.tableData.filter((item) => item.id !== rowItem.id);
  }

}
