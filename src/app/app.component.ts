import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-ui';

  showLibrary = false;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.showLibrary = false;
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.showLibrary = true;
  }
}
