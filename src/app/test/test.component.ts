import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSearch() {

  }

  goHome() {
    this.router.navigate(['home'])
  }
}
