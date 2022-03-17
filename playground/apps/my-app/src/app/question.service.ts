import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './interfaces/models';

@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<Question[]>('api/questions');
    }

    get(id: number) {
        return this.http.get<Question>(`api/question/${id}`);
    }
}
