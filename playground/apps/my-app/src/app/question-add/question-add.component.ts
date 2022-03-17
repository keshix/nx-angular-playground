import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
    selector: 'playground-question-add',
    templateUrl: './question-add.component.html',
    styleUrls: ['./question-add.component.scss'],
})
export class QuestionAddComponent implements OnInit {
    questionForm = this.formBuilder.group({
        title: '',
        message: '',
    });
    showSuccessMessage = false;
    private static SUCCESS_MESSAGE_TIMEOUT = 3500;

    constructor(private formBuilder: FormBuilder, private questionService: QuestionService) {}

    ngOnInit(): void {}

    get title() {
        return this.questionForm.get('title');
    }

    get message() {
        return this.questionForm.get('message');
    }

    onSubmit(): void {
        if (this.questionForm.valid) {
            const question = {
                // FIXME: dirty hack to generate unique id
                id: new Date().getTime(),
                userId: 1,
                creationDate: new Date(),
                title: this.title!.value,
                message: this.message!.value,
            };
            this.questionService.create(question);
            this.showSuccessMessage = true;
            setTimeout(() => {
                this.showSuccessMessage = false;
            }, QuestionAddComponent.SUCCESS_MESSAGE_TIMEOUT);
            this.questionForm.reset();
        }
    }
}
