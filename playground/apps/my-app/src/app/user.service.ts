import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get('api/users');
    }

    get(id: number) {
        return this.http.get(`api/users/${id}`);
    }
}
