import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  captchaText: string = '';
 
  constructor () { }
 
  ngOnInit(): void {
    this.generateCaptcha();
  }
 
  generateCaptcha(): void {
    const chars = '!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZadcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6;
    let captcha = '';
    for (let i = 0; i<captchaLength; i++) {
      const index = Math.floor(Math.random() * chars.length);
      captcha +=chars[index];
    }
    this.captchaText = captcha;
  }
}
 
