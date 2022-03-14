import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@playground/data';

@Component({
    selector: 'playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'my-app';
    todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

    constructor(private http: HttpClient) {
        this.fetch();
    }

    fetch() {
        this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
    }

    addTodo() {
        this.http.post('/api/addTodo', {}).subscribe(() => {
            this.fetch();
        });
    }
}
