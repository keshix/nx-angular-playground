import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AnswerService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get('api/answers').subscribe((customers) => {
            console.log(customers);
        });
    }

    get(id: number) {
        return this.http.get(`api/answer/${id}`).subscribe((customer) => {
            console.log(customer);
        });
    }
}
