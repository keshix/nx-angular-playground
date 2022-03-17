import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';
import { Question } from '../interfaces/models';

@Component({
    selector: 'playground-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
    public questions$!: Observable<Question[]>;

    constructor(private questionService: QuestionService) {}

    ngOnInit(): void {
        this.questions$ = this.questionService.getAll();
    }
}
