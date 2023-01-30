import { Component, Input } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent {
  @Input() capital: Capital[] = []
}
