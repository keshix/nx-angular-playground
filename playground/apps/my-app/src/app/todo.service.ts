import { Injectable } from '@angular/core';
import { Todo } from '@playground/data';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor(private http: HttpClient) {}

    fetch() {
        return this.http.get<Todo[]>('/api/todos');
    }
}
