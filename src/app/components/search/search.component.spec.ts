import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        TranslateTestingModule.withTranslations({ pt: require('src/assets/i18n/pt.json'), en: require('src/assets/i18n/en.json') }),
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form', inject([TranslateService], (translateService: TranslateService) => {
    const fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const form = compiled.querySelector('#form-search')
    
    expect(form).toBeTruthy();
  }));

  it('should render input placeholder and value', inject([TranslateService], (translateService: TranslateService) => {
    const fixture = TestBed.createComponent(SearchComponent);
    const name = new FormControl('AZ');
    fixture.componentInstance.name = name;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('#inp-search')

    expect(input.placeholder).toEqual('Buscar Pokemon');
    expect(input.value).toEqual('AZ');
  }));

  it('should render click button', inject([TranslateService], (translateService: TranslateService) => {
    const fixture = TestBed.createComponent(SearchComponent);
    const name = new FormControl('AZ');
    fixture.componentInstance.name = name;

    const compiled = fixture.debugElement.nativeElement;
    spyOn(fixture.componentInstance, '_onsubmit')


    const button = compiled.querySelector('#btn-search')
    const form = compiled.querySelector('#form-search')

    button.click() 
    fixture.detectChanges();
    
    expect(fixture.componentInstance._onsubmit).toHaveBeenCalledTimes(1); 
  }));
});
