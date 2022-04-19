import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OtmmserviceService {
  constructor(private http: HttpClient) {}
  Otdsurl =
    'http://training-otmm.acheron-tech.com:8080/otdsws/rest/authentication/credentials';
  OtdsTicket=""
  sessionUrl='http://training-otmm.acheron-tech.com:11090/otmmapi/v6/sessions'
  
  sessionUrl2='http://training-otmm.acheron-tech.com:11090/otmm/ux-html/index.html'

  sessionId=""
  searchUrl="http://training-otmm.acheron-tech.com:11090/otmmapi/v6/search/text?keyword_query=book";
  login() {
    this.http.post(this.Otdsurl, {
      userName: 'Thanmai',
      password: 'TrainingE11',
      targetResourceId: 'e1332625-4b8e-4e40-94a8-012f81846665',
      ticketType: 'OTDSTICKET',
    }).subscribe((res:any)=>{
      this.OtdsTicket = res.ticket
      this.getSession()
    });
  }

  getSession() {
    this.http.get(this.sessionUrl,{headers:{
     "OTDSToken":this.OtdsTicket
    }}).subscribe((res:any)=>{
      console.log(this.sessionId)
     this.sessionId=res.session_resource.session.id
    console.log(this.sessionId)
    this.search()
    });
  }

  getSessionRes() {
    this.http.post(this.sessionUrl2,"",{headers:{
     "OTDSToken":this.OtdsTicket
    }}).subscribe((res:any)=>{
      console.log(this.sessionId)
     this.sessionId=res.session_resource.session.id
    console.log(this.sessionId)
    this.search()
    });
  }

  search() {
    let headers:HttpHeaders = new HttpHeaders({
      'X-Requested-By': this.sessionId,
    })
    this.http.get(this.searchUrl,{headers}).subscribe((res:any)=>{
      console.log(res)
    });
  }
  

}
