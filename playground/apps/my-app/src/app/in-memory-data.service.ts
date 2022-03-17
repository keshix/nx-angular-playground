import { Injectable } from '@angular/core';
import { getStatusText, InMemoryDbService, ResponseOptions, STATUS } from 'angular-in-memory-web-api';
import { User, Question, Answer } from './interfaces/models';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService extends InMemoryDbService {
    // In-Memory DB will intercept /api/whatever calls and return data
    createDb() {
        let users: User[];
        users = [
            { id: 1, name: 'fred92', password: '1234' },
            { id: 2, name: 'john69', password: '1234' },
        ];

        let questions: Question[];
        questions = [
            {
                id: 10,
                userId: 1,
                creationDate: new Date('2022-03-11'),
                title: 'first question',
                message: `Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to
                        corporate strategy foster collaborative thinking to
                        further the overall value proposition. Organically
                        grow the holistic world view of disruptive innovation
                        via workplace diversity and empowerment.
                        Whazzuuup?`,
            },
            {
                id: 11,
                userId: 1,
                creationDate: new Date('2022-02-18'),
                title: 'second question',
                message: `
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going
                    forward, a new normal that has evolved from generation X is
                    on the runway heading towards a streamlined cloud solution.
                    User generated content in real-time will have multiple touchpoints for offshoring.


                   Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide with
                    additional clickthroughs from DevOps. Nanotechnology immersion
                    along the information highway will close the loop on focusing
                    solely on the bottom line.
                    `,
            },
        ];

        let answers: Answer[];
        answers = [{ id: 20, questionId: 10, userId: 2, creationDate: new Date(), message: 'Interesting question' }];

        return { users, questions, answers };
    }
}
