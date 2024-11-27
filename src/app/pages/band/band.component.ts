import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';

@Component({
  selector: 'app-band',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './band.component.html',
  styleUrl: './band.component.css'
})
export class BandComponent {

}
