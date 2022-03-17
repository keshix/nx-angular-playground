import { Component } from '@angular/core';
import { UserService } from './user.service';
import { QuestionService } from './question.service';

@Component({
    selector: 'playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'my-app';

    constructor(private questionService: QuestionService) {
        questionService.getAll();
    }
}
