import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonServerComponent } from './json-server.component';

describe('JsonServerComponent', () => {
  let component: JsonServerComponent;
  let fixture: ComponentFixture<JsonServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
