import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get('api/questions');
    }

    get(id: number) {
        return this.http.get(`api/question/${id}`);
    }
}
