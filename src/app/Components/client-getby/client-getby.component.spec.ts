import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGetbyComponent } from './client-getby.component';

describe('ClientGetbyComponent', () => {
  let component: ClientGetbyComponent;
  let fixture: ComponentFixture<ClientGetbyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientGetbyComponent]
    });
    fixture = TestBed.createComponent(ClientGetbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
