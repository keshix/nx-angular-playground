import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from "./todo.service";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [TodoService],
            imports: [HttpClientTestingModule],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(fixture).toBeTruthy();
    });

    it(`should have as title 'my-app'`, () => {
        const app = fixture.componentInstance;
        expect(app.title).toEqual('my-app');
    });

    it('should render title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Welcome my-app');
    });

    it(`should fetch todos`, () => {
        const addTodoSpy = jest.spyOn(component, 'addTodo');
        let button = fixture.debugElement.nativeElement.querySelector('#add-todo');
        button.click();
        fixture.detectChanges();
        expect(addTodoSpy).toHaveBeenCalled();
    });
});
