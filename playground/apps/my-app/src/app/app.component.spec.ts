import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoService } from "./todo.service";
import { Subject } from "rxjs";
import { MockInstance, MockProvider, MockReset } from "ng-mocks";

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    MockInstance.scope();
    const fakeAddTodo = new Subject();
    const fakeList = new Subject();
    let addTodo: jest.Mock;
    let fetch: jest.Mock;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [MockProvider(TodoService)],
            imports: [HttpClientTestingModule],
        }).compileComponents();

        addTodo = jest.fn().mockReturnValueOnce(fakeAddTodo);
        fetch = jest.fn().mockReturnValueOnce(fakeList);
        MockInstance(TodoService, () => ({
            addTodo,
            fetch
        }));

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterAll(MockReset);

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

        fakeAddTodo.next([]);
        expect(addTodo).toHaveBeenCalledTimes(1);

        expect(addTodoSpy).toHaveBeenCalled();

    });
});
