import { Component } from '@angular/core';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { Evidence } from '../../../types/evidence.type';

@Component({
  selector: 'app-confirm-guess',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './confirm-guess.component.html',
  styleUrl: './confirm-guess.component.scss',
})
export class ConfirmGuessComponent {
  public suspectName!: string;
  public suspectColor!: string;
  public weapon!: string;
  public location!: string;

  public arrow: LucideIconData = ArrowLeft;
}
