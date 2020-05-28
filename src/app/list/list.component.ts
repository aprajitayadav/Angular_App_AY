import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { person } from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personarr: any;
  listOfPerson: any;
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPerson().subscribe((persons: any) => {
      this.listOfPerson = persons;
    });
  }

  // ngOnInit(): void {}
  // get dataList(): person[] {
  //   //return this.personService.getpersons();
  //   return this.personService.getpersons();
  // }
}
