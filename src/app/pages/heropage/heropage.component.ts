import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';  // <-- add this

@Component({
  selector: 'app-heropage',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FormsModule, NgIf],
  templateUrl: './heropage.component.html',
  styleUrl: './heropage.component.css'
})
export class HeropageComponent {

}
