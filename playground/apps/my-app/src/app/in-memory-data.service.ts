import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User, Question, Answer } from './interfaces/models';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    // In-Memory DB will intercept /api/whatever calls and return data
    createDb() {
        let users: User[];
        users = [
            { id: 1, name: 'fred92', password: '1234' },
            { id: 2, name: 'john69', password: '1234' },
        ];

        let questions: Question[];
        questions = [
            { id: 10, userId: 1, creationDate: new Date(), title: 'first question', message: 'Whats going on?' },
            { id: 11, userId: 1, creationDate: new Date(), title: 'second question', message: 'Yeah, really?' },
        ];

        let answers: Answer[];
        answers = [{ id: 20, questionId: 10, userId: 2, creationDate: new Date(), message: 'Interesting question' }];

        return { users, questions, answers };
    }
}
