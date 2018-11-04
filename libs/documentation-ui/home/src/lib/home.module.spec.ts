import { async, TestBed } from '@angular/core/testing';
import { DocumentationUiHomeModule } from './home.module';

describe('DocumentationUiHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocumentationUiHomeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocumentationUiHomeModule).toBeDefined();
  });
});
