import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@playground/data';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'my-app';
    todos?: Observable<Todo[]>;

    constructor(private http: HttpClient, private todoService: TodoService) {}

    ngOnInit() {
        this.fetch();
    }

    fetch() {
        this.todos = this.todoService.fetch();
    }

    addTodo() {
        this.http.post('/api/addTodo', {}).subscribe(() => {
            this.fetch();
        });
    }
}
