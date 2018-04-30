import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  showJournal = false;
  constructor() { }

  ngOnInit() {
  }
  onAddJournal(){
    this.showJournal = true;
  }
}
