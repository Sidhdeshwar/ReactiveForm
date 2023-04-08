import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
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

    //* VID -52
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

      //Type-1
      items : this.formBuilder.array([
         new FormControl('Angular'),
         new FormControl('React')

          ]),
      //Type -2
      items2 : this.formBuilder.array([
        this.formBuilder.group({
          itemId : [1],
          itemName : ['ARC'],
          itemDec : ['Tutorial']
        })
      ])


    });
    this.reactiveForm.value.items[0] = 'Siddhu...@123...';
    console.log(this.reactiveForm.value.items[0])
    console.log(this.reactiveForm.get('items')?.value.length);

  }

  // Vid-54






  index=2;
  myArry=[{id:1,Name:"Sid",marks:50}]

  get items1()
  {
    return this.reactiveForm.get('items2') as FormArray;
  }

    addRow()
  {
   const itemLength = this.items1.length;
   const newItem = this.formBuilder.group({
    itemId : [itemLength+1],
    itemName : ['ARC'],
    itemDec : ['Tutorial']
  })
this.items1.push(newItem);

      //  this.reactiveForm.value.items2.push({
      //   itemId : [this.index++],
      //   itemName : [],
      //   itemDec : []
      // })
  }

  removeItem(id:number)
  {
      this.items1.removeAt(id-1);
  }

  

  ngOnInit(): void {
    // console.log(this.reactiveForm.get('items')?.value.length());
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
