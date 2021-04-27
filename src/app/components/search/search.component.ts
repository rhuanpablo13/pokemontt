import { Component, Output,  EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  name = new FormControl('');
  faSearch = faSearch;
  @Output() onSubmit = new EventEmitter<string>();

  _onsubmit() {
    this.onSubmit.emit(this.name.value)
  }
}
