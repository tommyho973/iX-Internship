import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-away-chil',
  templateUrl: './away-chil.component.html',
  styleUrls: ['./away-chil.component.css']
})
export class AwayChilComponent implements OnInit {

  @Input() receivedName?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
