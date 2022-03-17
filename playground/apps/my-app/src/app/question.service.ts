import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './interfaces/models';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    private questionsUrl = 'api/questions';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<Question[]>(this.questionsUrl);
    }

    get(id: number) {
        return this.http.get<Question>(this.questionsUrl + `/${id}`);
    }

    create(question: Question) {
        return this.http.put<Question>(this.questionsUrl, question, this.httpOptions).pipe(map((res) => res));
    }
}
