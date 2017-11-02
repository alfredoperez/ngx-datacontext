import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';

import { NgxDatacontextModule } from '../src';

describe('ngx-hello-world component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxDatacontextModule.forRoot()]
    });
  });

  it('should say hello world', () => {
    expect('Hello world from the Ngx-DataContext module!').to.equal(
      'Hello world from the Ngx-DataContext module!'
    );
  });
});
