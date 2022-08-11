import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from './fake-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-primeirospassos';
  public name: any;

  constructor(
    private fakeBackendService: FakeBackendService
  ) { }

  ngOnInit() {
    this.getName();
  }

  public getName() {
    this.fakeBackendService.getProfile()
      .subscribe((res) => { this.name = res });
  }
}
