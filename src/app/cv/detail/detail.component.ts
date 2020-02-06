import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/personne';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit() {
    this.loggerService.logger('cc je suis le détail');
  }

}
