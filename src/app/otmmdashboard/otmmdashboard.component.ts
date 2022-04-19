import { Component, OnInit } from '@angular/core';
import { OtmmserviceService } from '../otmmservice.service';

@Component({
  selector: 'app-otmmdashboard',
  templateUrl: './otmmdashboard.component.html',
  styleUrls: ['./otmmdashboard.component.css']
})
export class OTMMDashboardComponent implements OnInit {

  constructor(private otmmService:OtmmserviceService) { }

  ngOnInit(): void {
     this.otmmService.login()
  }
  onFilter(event:any){
      
  }

}
