import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evidence } from '../../../types/evidence.type';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
})
export class OptionComponent {
  @Output() public selectOption: EventEmitter<Evidence> =
    new EventEmitter<Evidence>();
  @Input() public name!: string;
  @Input() public details?: string;
  @Input() public checked!: boolean;

  public checkOption() {
    this.selectOption.emit({
      name: this.name,
      details: this.details,
      checked: !this.checked,
    });
  }
}
