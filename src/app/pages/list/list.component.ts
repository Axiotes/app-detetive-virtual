import { Component } from '@angular/core';
import { OptionComponent } from '../../components/option/option.component';
import { Suspect } from '../../../types/suspect.type';
import { SUSPECTS } from '../../../../data/suspects.mock';
import { WEAPONS } from '../../../../data/weapons.mock';
import { LOCATIONS } from '../../../../data/locations.mock';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Evidence } from '../../../types/evidence.type';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [OptionComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public suspects: Suspect[] = SUSPECTS;
  public weapons: Evidence[] = WEAPONS;
  public locations: Evidence[] = LOCATIONS;

  constructor(private router: Router) {}

  public makeGuess(): void {
    this.router.navigateByUrl('guess/suspect');
  }

  public exit(): void {
    this.router.navigateByUrl('home');
  }
}
