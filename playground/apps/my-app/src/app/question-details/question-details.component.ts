import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../interfaces/models';
import { QuestionService } from '../question.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'playground-question-details',
    templateUrl: './question-details.component.html',
    styleUrls: ['./question-details.component.scss'],
})
export class QuestionDetailsComponent implements OnInit {
    question!: Observable<Question>;
    constructor(private route: ActivatedRoute, private questionService: QuestionService) {}

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const questionIdFromRoute = Number(routeParams.get('questionId'));
        this.question = this.questionService.get(questionIdFromRoute);
    }
}
