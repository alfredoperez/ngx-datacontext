import { async, TestBed } from '@angular/core/testing';
import { DocumentationUiModule } from './documentation-ui.module';

describe('DocumentationUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocumentationUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocumentationUiModule).toBeDefined();
  });
});
