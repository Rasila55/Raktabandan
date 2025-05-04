import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  donor = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    contact: '',
    district: '',
    vdc: '',
    wardNo: '',
    location: '',
    bloodGroup: ''
  };
  
  genders = ['Male', 'Female', 'Other'];
  
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  
  districts = ['Kathmandu', 'Lalitpur', 'Bhaktapur']; // Add your actual districts
  
  vdcs = ['VDC 1', 'VDC 2', 'VDC 3']; // You can customize this too
  
  onSubmit() {
    console.log('Donor Registered:', this.donor);
    alert('Donor Registered Successfully!');
  }
  
}
