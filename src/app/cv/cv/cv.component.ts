import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit() {

  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
    console.log(personne);
  }

  logger() {
    this.loggerService.logger('je suis cvComponent je viens d etre crée :D');
  }
}
