import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManageTestService } from '../manage-test.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  score: number;
  maxScore: number;

  constructor(public router: Router, public manageTestService: ManageTestService) {
    let obj: Object = this.manageTestService.calculateResult();
    this.score = obj["score"];
    this.maxScore = obj["maxScore"];
  }

  ngOnInit(): void {
  }

  leaveBtnClickEventHandler() {
    this.router.navigateByUrl("/login");
  }
}
