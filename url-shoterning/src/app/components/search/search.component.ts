import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formUrl!: FormGroup;
  @Output() public urlEmmit: EventEmitter<string> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formUrl = this.formBuilder.group({
      url: [null, Validators.required]
    })
  }

  submitUrl(){
    this.urlEmmit.emit(this.formUrl.get('url')?.value);
  }

}
