import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoVendasComponent } from './posto-vendas.component';

describe('PostoVendasComponent', () => {
  let component: PostoVendasComponent;
  let fixture: ComponentFixture<PostoVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostoVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostoVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
