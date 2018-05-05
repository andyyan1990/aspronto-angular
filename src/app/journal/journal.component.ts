import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  showJournal = false;
  getJournal = false;
servers = [
  {
    name: 'jialin2',
    id: 32,
    age: 262
  }

];


  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }
  onAddJournal(){
    this.showJournal = true;
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
