import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable()
export class ManageTestService {

  private questionsArray: Array<Question> = new Array();
  private selectedAnswers: Object;

  constructor() {
    this.questionsArray.push(new Question(1, "WWW stands for ?", ["World Whole Web", "Wide World Web", "Web World Wide", "World Wide Web"], "World Wide Web"));
    this.questionsArray.push(new Question(2, "Which of the following are components of Central Processing Unit (CPU) ?", ["Arithmetic logic unit, Mouse", "Arithmetic logic unit, Control unit", "Arithmetic logic unit, Integrated Circuits", "Control Unit, Monitor"], "Arithmetic logic unit, Control unit"));
    this.questionsArray.push(new Question(3, "Which among following first generation of computers had ?", ["Vaccum Tubes and Magnetic Drum", "Integrated Circuits", "Magnetic Tape and Transistors", "All of above"], "Vaccum Tubes and Magnetic Drum"));
    this.questionsArray.push(new Question(4, "Where is RAM located ?", ["Expansion Board", "External Drive", "Mother Board", "All of above"], "Mother Board"));
    this.questionsArray.push(new Question(5, "If a computer has more than one processor then it is known as ?", ["Uniprocess", "Multiprocessor", "Multithreaded", "Multiprogramming"], "Multiprocessor"));
    this.questionsArray.push(new Question(6, "If a computer provides database services to other, then it will be known as ?", ["Web server", "Application server", "Database server", "FTP server"], "Database server"));
    this.questionsArray.push(new Question(7, "Full form of URL is ?", ["Uniform Resource Locator", "Uniform Resource Link", "Uniform Registered Link", "Unified Resource Link"], "Uniform Resource Locator"));
    this.questionsArray.push(new Question(8, "In which of the following form, data is stored in computer ?", ["Decimal", "Binary", "HexaDecimal", "Octal"], "Binary"));
    this.questionsArray.push(new Question(9, "Technology used to provide internet by transmitting data over wires of telephone network is ?", ["Transmitter", "Diodes", "HHL", "DSL"], "DSL"));
    this.questionsArray.push(new Question(10, "Which level language is Assembly Language ?", ["high-level programming language", "medium-level programming language", "low-level programming language", "machine language"], "low-level programming language"));
    

    this.selectedAnswers = {};
    for (let question of this.questionsArray) {
      this.selectedAnswers[question.qId] = "";
    }
  }

  getFirstQId(){
    return this.questionsArray[0].qId;
  }

  getQuestionById(id: number) {
    let pos = this.questionsArray.findIndex(question => question.qId === id);
    if (pos < 0)
      return null;
    else
      return this.questionsArray[pos];
  }

  getNextQuestion(currQId: number) {

    let nextQInd = 1 + this.questionsArray.findIndex(question => question.qId === currQId);
    console.log(nextQInd);
    if (nextQInd >= this.questionsArray.length)
      return null;
    else {
      // console.log(this.questionsArray[nextQInd]);
      return this.questionsArray[nextQInd];
    }

  }

  calculateResult() {
    let score: number = 0;
    let questionWeight: number = 1;
    let maxScore: number = this.questionsArray.length * questionWeight;
    let negetiveFraction: number = 0;       //value between 0 and 1;
    for (let i = 0; i < this.questionsArray.length; i++) {
      if (this.questionsArray[i].correct == this.selectedAnswers[this.questionsArray[i].qId]) {
        score = score + questionWeight;
      }
      else {
        score = score - (questionWeight * negetiveFraction);
      }
    }
    return { "score": score, "maxScore": maxScore };
  }

  setAnswer(qId, answer = "") {
    this.selectedAnswers[qId] = answer;
    // console.log(this.selectedAnswers);
  }

  getTotalQuestions() {
    return this.questionsArray.length;
  }
}
