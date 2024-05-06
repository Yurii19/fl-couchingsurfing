import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/services/models';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css'],
})
export class AboutFormComponent implements OnInit {
  @Input() user!: User;

  imageUrl: string | null = null;
  languages: string[] = [];
  languagesSet = ['Ukrainian', 'English', 'French', 'Spain', 'Poland', 'German', 'Turkish', 'Italian'];
  form = new FormGroup({
    age: new FormControl(),
    location: new FormControl(''),
    occupation: new FormControl(''),
    education: new FormControl(''),
    languages: new FormControl(''),
    aboutText: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.user.id) {
      this.router.navigateByUrl('/profile');
    }
    this.initFormValues();
  }

  initFormValues() {
    this.languages = this.user.userInfo?.languages ?? [];
    this.form.patchValue({
      age: this.user.userInfo?.age ?? null,
      location: this.user.userInfo?.location ?? null,
      occupation: this.user.userInfo?.occupation ?? null,
      education: this.user.userInfo?.education ?? null,
      languages: null,
      aboutText: this.user.userInfo?.aboutMe ?? null,
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
  }

  removeLanguage(language: string) {
    this.languages = [...this.languages.filter((l) => l !== language)];
    this.form.get('languages')?.setValue('');
  }

  addLanguage() {
    const newLanguage = this.form.get('languages')?.value;
    if (newLanguage && this.languages.includes(newLanguage)) {
      return;
    } else {
      this.languages.push(newLanguage as string);
    }
  }
}
