import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public arrow: LucideIconData = ArrowLeft;

  constructor(private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const evidences: { [key: string]: () => void } = {
      suspect: () => {
        this.options = SUSPECTS;
        this.title = 'Selecione um Suspeito';
      },
      weapon: () => {
        this.options = WEAPONS;
        this.title = 'Selecione uma Arma';
      },
      location: () => {
        this.options = LOCATIONS;
        this.title = 'Selecione um Local';
      },
    };

    this.ActivatedRoute.params.subscribe((param) => {
      const evidence = param['evidence'];
      evidences[evidence]();
    });
  }
}
