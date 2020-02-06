import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() itemSelectPersonne = new EventEmitter();
  constructor() { }
  date = new Date();
  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'teacher', 'as.jpg'),
      new Personne(2, 'sellaouti', 'aymen', 37, 123456, 'teacher', ''),
      new Personne(3, 'sellaouti', 'aymen', 37, 123456, 'teacher', '            ')
    ];
  }

  forwardPersonne(personne: Personne) {
    this.itemSelectPersonne.emit(personne);
  }
}
