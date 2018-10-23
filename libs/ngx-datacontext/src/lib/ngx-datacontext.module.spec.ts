import { async, TestBed } from '@angular/core/testing';
import { NgxDataContextModule } from './ngx-datacontext.module';

describe('NgxDatacontextModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxDataContextModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxDataContextModule).toBeDefined();
  });
});
