import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormGroupDirective } from '@angular/forms';
import { Post } from '../../model/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  @Output() postEvent = new EventEmitter<Post>();


  postForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if(this.postForm.errors)
    {
      console.log("fuck off")
    }
    console.log(this.postForm.value);
    this.postEvent.emit({content: this.postForm.value.postContent})
    setTimeout(() => 
    this.formGroupDirective.resetForm(), 0)
  }

  private initForm(){
    this.postForm = new FormGroup({
      'postContent': new FormControl(null, Validators.required)
    })

  }



}
