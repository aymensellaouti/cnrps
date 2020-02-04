import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'teacher', 'rotating_card_profile2.png'),
      new Personne(2, 'sellaouti', 'aymen', 37, 123456, 'teacher', 'rotating_card_profile3.png')
    ];
  }

}
