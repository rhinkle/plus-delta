import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';

let componet: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ HeaderComponent ]
  });
  fixture = TestBed.createComponent(HeaderComponent);
  componet = fixture.componentInstance;
});
describe('Header', () => {
  it('should have title', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Plus / Delta');
  });
});
