import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { validUrl: true };
  }
  return null;
}

const regex = new RegExp('^[a-zA-Z]+$')
export function ValidateEmail(control: AbstractControl) {
    if (!regex.test(control.value)) {
      console.log(regex.test(control.value));
      return { validEmail: true };
    }
    return null;
}