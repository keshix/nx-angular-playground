import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/models';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<User[]>('api/users');
    }

    get(id: number) {
        return this.http.get<User>(`api/users/${id}`);
    }
}
