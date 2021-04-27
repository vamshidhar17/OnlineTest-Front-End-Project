import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageTestService } from '../manage-test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  selectedAnswer: number;
  currentQuestionNumber: number;
  totalQuestions: number;
  question: Question;

  constructor(public router: Router, public manageTestService: ManageTestService) {
    this.currentQuestionNumber = 1;
    this.question = this.manageTestService.getQuestionById(this.manageTestService.getFirstQId());
    this.selectedAnswer = -1;
    this.totalQuestions = this.manageTestService.getTotalQuestions();
  }

  ngOnInit(): void {
  }

  nextBtnClickEventHandler() {
    this.manageTestService.setAnswer(this.question.qId, this.question.options[this.selectedAnswer]);
    this.currentQuestionNumber++;
    this.question = this.manageTestService.getNextQuestion(this.question.qId);
    this.selectedAnswer = -1;
    this.router.navigateByUrl("/test");
  }

  finishBtnClickEventHandler() {
    this.manageTestService.setAnswer(this.question.qId, this.question.options[this.selectedAnswer]);
    this.router.navigateByUrl("/finish");
  }

  onAnswerChange(value) {
    this.selectedAnswer = parseInt(value);
  }
}
