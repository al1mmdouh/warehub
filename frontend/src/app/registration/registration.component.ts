import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registeration!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticate: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.registeration = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.minLength(8), Validators.email],
      ],
      number: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitregisteration() {
    if (this.registeration.valid) {
      this.authenticate.register(this.registeration).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/login-Page']);
      });
    }
  }
}
