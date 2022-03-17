import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListComponent } from './question-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuestionAddComponent } from '../question-add/question-add.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('QuestionListComponent', () => {
    let component: QuestionListComponent;
    let fixture: ComponentFixture<QuestionListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, ReactiveFormsModule],
            declarations: [QuestionListComponent, QuestionAddComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
