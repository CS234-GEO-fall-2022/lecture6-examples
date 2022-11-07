import { Component, OnInit } from '@angular/core';
import { Test2Service } from 'src/shared/services/test2.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  // providers: [Test2Service]
})
export class Test2Component implements OnInit {
  name: string;
  constructor(private test2Service: Test2Service) { }

  ngOnInit(): void {
  }

  getName(){
    // let test = new Test2Service();
    // this.name = test.getName();

    this.name = this.test2Service.getName();
  }
}
