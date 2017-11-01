import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { HelloWorldComponent } from '../src/hello-world.component';
import { NgxDatacontextModule } from '../src';

describe('ngx-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxDatacontextModule.forRoot()]
    });
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<
      HelloWorldComponent
    > = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal(
      'Hello world from the Ngx-DataContext module!'
    );
  });
});
