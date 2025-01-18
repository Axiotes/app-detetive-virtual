import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SUSPECTS } from '../../../../data/suspects.mock';
import { WEAPONS } from '../../../../data/weapons.mock';
import { LOCATIONS } from '../../../../data/locations.mock';
import { OptionComponent } from '../../components/option/option.component';
import { NgFor } from '@angular/common';
import { Evidence } from '../../../types/evidence.type';
import { ArrowLeft, LucideAngularModule } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-guess',
  standalone: true,
  imports: [OptionComponent, NgFor, LucideAngularModule],
  templateUrl: './guess.component.html',
  styleUrl: './guess.component.scss',
})
export class GuessComponent implements OnInit {
  public evidence!: string;

  public options!: Evidence[];
  public title!: string;
  public lastRoute!: string;
  public nextRoute!: string;

  public selectedSuspect!: Evidence;
  public selectedWeapon!: Evidence;
  public selectedLocation!: Evidence;

  public arrow: LucideIconData = ArrowLeft;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const evidences: { [key: string]: () => void } = {
      suspect: () => {
        this.options = SUSPECTS;
        this.title = 'Selecione um Suspeito';
        this.lastRoute = 'list';
        this.nextRoute = 'guess/weapon';
      },
      weapon: () => {
        this.options = WEAPONS;
        this.title = 'Selecione uma Arma';
        this.lastRoute = 'guess/suspect';
        this.nextRoute = 'guess/location';
      },
      location: () => {
        this.options = LOCATIONS;
        this.title = 'Selecione um Local';
        this.lastRoute = 'guess/weapon';
        this.nextRoute = 'guess/confirm';
      },
    };

    this.activatedRoute.params.subscribe((param) => {
      this.evidence = param['evidence'];
      evidences[this.evidence]();
    });
  }

  public next() {
    this.router.navigateByUrl(this.nextRoute);
  }

  public back() {
    this.router.navigateByUrl(this.lastRoute);
  }

  public selectOption(evidence: Evidence) {
    const evidences: { [key: string]: () => void } = {
      suspect: () => {
        this.selectedSuspect = evidence;

        this.options.forEach((suspect) => {
          if (suspect.name !== evidence.name) {
            console.log('Suspect', suspect);
            suspect.checked = false;
          }
        });
      },
      weapon: () => (this.selectedWeapon = evidence),
      location: () => (this.selectedLocation = evidence),
    };

    evidences[this.evidence]();
  }
}
