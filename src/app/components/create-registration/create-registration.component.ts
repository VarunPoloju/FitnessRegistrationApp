import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/register.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {
  public packages: string[] = ['Monthly', 'Quarterly', 'Yearly'];
  public gender: string[] = ['Male', 'Female'];
  public opinions: string[] = ['Yes', 'No'];
  public importantList: string[] = [
    "Fat Reduction",
    "Endurance",
    "Strength",
    "Building Lean Muscle",
    "Beach Body"
  ];
  public registerForm!: FormGroup;
  public userIdToUpdate !: number;
  public isUpdateActive: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService, private toastService: ToastrService) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      weight: [''],
      height: [''],
      bmi: [''],
      bmiResult: [''],
      gender: [''],
      requireTrainer: [''],
      package: [''],
      important: [''],
      haveGymBefore: [],
      enquiryDate: ['']
    });
    this.registerForm.controls['height'].valueChanges.subscribe(res => {
      this.calculateBMI(res);
    });
    this.activatedRoute.params.subscribe(val => {
      this.userIdToUpdate = val['id'];
      this.api.getRegisteredUserId(this.userIdToUpdate).subscribe(res => {
        this.isUpdateActive = true;
        this.fillFormToUpdate(res)
      })
    })
  }

  fillFormToUpdate(user: User) {
    this.registerForm.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
      weight: user.weight,
      height: user.height,
      bmi: user.bmi,
      bmiResult: user.bmiResult,
      gender: user.gender,
      requireTrainer: user.requireTrainer,
      package: user.package,
      important: user.important,
      haveGymBefore: user.haveGymBefore,
      enquiryDate: user.enquiryDate
    })
  }


  Submit() {
    this.api.createRegistration(this.registerForm.value).subscribe(res => {
      // this.toastService.success('registration successfull!');
      alert('Registration successfull!')
      this.registerForm.reset();
    })
  }

  Update() {
    this.api.updateRegisterUser(this.registerForm.value, this.userIdToUpdate).subscribe(res => {
      alert('User details updated successfully!')
      this.registerForm.reset();
      this.router.navigate(['list'])
    })
  }

  calculateBMI(inputHeight: number) {
    const weight = this.registerForm.value.weight;
    const height = inputHeight;
    const bmi = weight / (height * height);
    this.registerForm.controls['bmi'].patchValue(bmi);
    switch (true) {
      case bmi < 18.5:
        this.registerForm.controls['bmiResult'].patchValue('Under Weight')
        break;
      case (bmi >= 18.5 && bmi < 25):
        this.registerForm.controls['bmiResult'].patchValue('Normal')
        break;
      case (bmi >= 25 && bmi < 30):
        this.registerForm.controls['bmiResult'].patchValue('Over weight')
        break;
      default:
        this.registerForm.controls['bmiResult'].patchValue('Obese!')
        break;
    }
  }
}
