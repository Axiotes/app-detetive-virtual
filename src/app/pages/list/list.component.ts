import { Component } from '@angular/core';
import { OptionComponent } from "../../components/option/option.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [OptionComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
