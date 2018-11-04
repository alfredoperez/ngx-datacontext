import { async, TestBed } from '@angular/core/testing';
import { DocumentationUiGettingStartedModule } from './getting-started.module';

describe('DocumentationUiGettingStartedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DocumentationUiGettingStartedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DocumentationUiGettingStartedModule).toBeDefined();
  });
});
