import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  selectItemSubject = new Subject<Personne>();
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'teacher', 'as.jpg'),
      new Personne(2, 'sellaouti', 'aymen', 37, 123456, 'teacher', ''),
      new Personne(3, 'sellaouti', 'aymen', 37, 123456, 'teacher', '            ')
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id) {
    // 1 == '1'
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }
  selectItem(personne: Personne) {
    this.selectItemSubject.next(personne);
  }
}
