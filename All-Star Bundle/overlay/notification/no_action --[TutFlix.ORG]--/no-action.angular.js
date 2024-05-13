import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-no-action",
    templateUrl: "./no-action.component.html",
})
export class NoActionComponent implements OnInit {
    constructor() {}
    notification: boolean = false;
  notificationBtn(){
    this.notification=!this.notification
  }
    ngOnInit(): void {
     
    }
}
