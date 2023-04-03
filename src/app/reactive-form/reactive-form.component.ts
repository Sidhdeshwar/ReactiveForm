import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  required: any;
  changedDataValue = '';

  constructor(public formBuilder: FormBuilder) {
    // this.reactiveForm = formBuilder.group({       // *Building Form Using FormBuilder
    //   emailControl : new FormControl(),         //* In the form Builder - we are creating group of element
    //   passwordControl : new FormControl(),      //* This should be exactly same as your form
    //   checkBoxControl : new FormControl()

    // })

    // Vid = 46
    this.reactiveForm = this.formBuilder.group({
      // *Building Form Using FormBuilder
      emailControl: [
        '',
        [Validators.required, Validators.email, Validators.minLength(15)],
      ],
      passwordControl: [
        '',
        [
          Validators.maxLength(10),
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
        ],
      ],
      checkBoxControl: ['', Validators.requiredTrue],
    });
  }
  ngOnInit(): void {
    //* VID-50 valueChanges
    //~ 1) For Single Form Control Variable = obj
    // this.reactiveForm.get('emailControl')?.valueChanges.subscribe((data) => {
    //   console.log(data);
    //   this.changedDataValue = data;
    // });

     //~ 2) For Complete Object
    //  this.reactiveForm.valueChanges.subscribe((data) => {
      // console.log(data);
    // });

    //* VID-51 statusChanges
        //~ 1) For Single Form Control Variable = obj
        // this.reactiveForm.get('emailControl')?.statusChanges.subscribe((data) => {
        //   console.log(data);
        //   this.changedDataValue = data;
        // });

            //~ 2) For Complete Object
     this.reactiveForm.statusChanges.subscribe((data) => {
      console.log(data);
      //! If All Fields all Filled then , it will return VALID
      
    });

  }

  submitMyForm() {
    console.log(this.reactiveForm);
    alert(this.reactiveForm.value.emailControl);
    //  this.reactiveForm.value.emailControl = 'Siddheshwar@angularminds.in' // My Set value
    //  alert(this.reactiveForm.value.emailControl);

//* VID-48  setValue & PatchValue
    //~ 1) setValue({})
    this.reactiveForm.setValue({
      emailControl: 'Siddhuiiiiiiiiiiiiiiiiiii@gmail.com',
      passwordControl: 'Siddhu@123',
      checkBoxControl: false,
    });
    // alert(this.reactiveForm.value.emailControl);

    //~ 2) patchValue({})
    this.reactiveForm.patchValue({
      emailControl: 'Sandesh@gmail.com',
      passwordControl: 'Sandesh@123',
    });
    // alert(this.reactiveForm.value.emailControl + " &&&& " +this.reactiveForm.value.passwordControl );

    //* VID-49 Reset Form
    // this.reactiveForm.reset();
    // alert(this.reactiveForm.value.emailControl);


  }
}
