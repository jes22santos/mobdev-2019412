import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-death-count',
  templateUrl: './death-count.page.html',
  styleUrls: ['./death-count.page.scss'],
})
export class DeathCountPage implements OnInit {

    deaths: any;
    searchname: string = '';
    

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  // method receive event from html, with the name to be searched, and bring the result found in the api
  onSearchChange(event){
      
      this.searchname = event.target.value;
     
      this.api.searchDeath(this.searchname).subscribe(data => {
      this.deaths = data;
      }, err => {
      this.deaths = [];
    });
  }

}
