import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [],
        });
        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch all users', () => {
        const mockResult = [
            {
                foo: 'bar',
            },
        ];
        service.getAll().subscribe((data) => {
            expect(data).toMatchObject(mockResult);
        });

        const req = httpMock.expectOne(`api/users`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResult);
    });

    it('should fetch a single user', () => {
        const mockResult = {
            foo: 'bar',
        };
        service.get(0).subscribe((data) => {
            expect(data).toMatchObject(mockResult);
        });

        const req = httpMock.expectOne(`api/users/0`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResult);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
