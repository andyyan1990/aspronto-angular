import { ShareDataService } from './../share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  showJournal = false;
  dataToBeShared: Object;
  
  constructor(private shareData: ShareDataService) { }

  ngOnInit() {
    this.shareData.currentMessage.subscribe(message => this.dataToBeShared = message);
  }
  onAddJournal(){
    this.showJournal = true;
    console.log(this.dataToBeShared);
  }
}
