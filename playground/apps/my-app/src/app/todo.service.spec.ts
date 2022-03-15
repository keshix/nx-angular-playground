import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

describe('TodoService', () => {
    let service: TodoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [],
        });
        service = TestBed.inject(TodoService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch todos', () => {
        const expectedResult = [
            {
                title: 'Todo 1234',
            },
        ];
        service.fetch().subscribe((data) => {
            expect(data).toMatchObject(expectedResult);
        });

        const req = httpMock.expectOne(`/api/todos`);
        expect(req.request.method).toBe('GET');
        req.flush(expectedResult);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
