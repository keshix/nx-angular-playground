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
            {
                id: 10,
                userId: 1,
                creationDate: new Date('2022-03-11'),
                title: 'first question',
                message: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                       no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd
                         gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.,`,
            },
            {
                id: 11,
                userId: 1,
                creationDate: new Date('2022-02-18'),
                title: 'second question',
                message: `
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                     no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.


                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                     esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                     vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                     zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                     sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                     tincidunt ut laoreet dolore magna aliquam erat volutpat. `,
            },
        ];

        let answers: Answer[];
        answers = [{ id: 20, questionId: 10, userId: 2, creationDate: new Date(), message: 'Interesting question' }];

        return { users, questions, answers };
    }
}
