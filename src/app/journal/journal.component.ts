import { ShareDataService } from './../share-data.service';
import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  showJournal = false;
    dataToBeShared: Object;

  getJournal = false;
servers = [
  {
    name: 'jialin2',
    id: 32,
    age: 262
  }
];

  constructor(private serverService: ServerService, private shareData: ShareDataService) { }

  ngOnInit() {
    this.shareData.currentMessage.subscribe(message => this.dataToBeShared = message);
  }
  
  onAddJournal(){
    this.showJournal = true;
    console.log(this.dataToBeShared);
    this.servers.push({name:'andy',age:2,id:2});
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  
  onGetJournal(){
    this.getJournal = true;
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => console.log(error)
    )
  }
}
