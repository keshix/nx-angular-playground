import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [HttpClientTestingModule],
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
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

    // it(`should fetch todos`, () => {
    //     // const result = fixture.componentInstance.fetch();
    //     const app = fixture.componentInstance;
    //     // fixture.;
    // });
});
