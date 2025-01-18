import { Component } from '@angular/core';
import { OptionComponent } from '../../components/option/option.component';
import { Suspect } from '../../../../types/suspect.type';
import { SUSPECTS } from '../../../../data/suspects.mock';
import { WEAPONS } from '../../../../data/weapons.mock';
import { LOCATIONS } from '../../../../data/locations.mock';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [OptionComponent, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public suspects: Suspect[] = SUSPECTS;
  public weapons: string[] = WEAPONS;
  public locations: string[] = LOCATIONS;
}
