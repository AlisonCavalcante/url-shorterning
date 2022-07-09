import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  formUrl!: FormGroup;
  @Output() public urlEmmit: EventEmitter<string> = new EventEmitter();
  @Input() public replaceLoading!: number;
  isLoading: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) this.isLoading = false
  }

  initForm(){
    this.formUrl = this.formBuilder.group({
      url: [null, Validators.required]
    })
  }

  submitUrl(){
    this.isLoading = true;
    this.urlEmmit.emit(this.formUrl.get('url')?.value);
    this.formUrl.reset()
  }

}
