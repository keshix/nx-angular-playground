import { TestBed } from '@angular/core/testing';

import { AnswerService } from './answer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AnswerService', () => {
    let service: AnswerService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [],
        });
        service = TestBed.inject(AnswerService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch all answers', () => {
        const mockResult = [
            {
                foo: 'bar',
            },
        ];
        service.getAll().subscribe((data) => {
            expect(data).toMatchObject(mockResult);
        });

        const req = httpMock.expectOne(`api/answers`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResult);
    });

    it('should fetch a single answer', () => {
        const mockResult = {
            foo: 'bar',
        };
        service.get(0).subscribe((data) => {
            expect(data).toMatchObject(mockResult);
        });

        const req = httpMock.expectOne(`api/answer/0`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResult);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
