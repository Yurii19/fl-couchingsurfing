import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css'],
})
export class AboutFormComponent {
  
  languages: string[] = ['Ukrainian', 'English'];
  languagesSet = ['Ukrainian', 'English', 'Frech', 'Spain', 'Poland'];
  form = new FormGroup({
    availability: new FormControl(''),
    occupation: new FormControl(''),
    education: new FormControl(''),
    languages: new FormControl(''),
    aboutText: new FormControl(''),
  });

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
