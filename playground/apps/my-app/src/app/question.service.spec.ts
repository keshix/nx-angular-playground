import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('QuestionService', () => {
    let service: QuestionService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [],
        });
        service = TestBed.inject(QuestionService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch all questions', () => {
        const mockResult = [
            {
                foo: 'bar',
            },
        ];
        service.getAll().subscribe((data) => {
            expect(data).toMatchObject(mockResult);
        });

        const req = httpMock.expectOne(`api/questions`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResult);
    });

    it('should fetch a single question', () => {
        const mockResult = {
            foo: 'bar',
        };
        service.get(0).subscribe((data) => {
            expect(data).toMatchObject(mockResult);
        });

        const req = httpMock.expectOne(`api/questions/0`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResult);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
