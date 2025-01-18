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
  public options!: Evidence[];
  public title!: string;
  public lastRoute!: string;
  public nextRoute!: string;

  public evidences: { [key: string]: () => void } = {
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

  public arrow: LucideIconData = ArrowLeft;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      const evidence = param['evidence'];
      this.evidences[evidence]();
    });
  }

  public next() {
    this.router.navigateByUrl(this.nextRoute);
  }

  public back() {
    this.router.navigateByUrl(this.lastRoute);
  }
}
