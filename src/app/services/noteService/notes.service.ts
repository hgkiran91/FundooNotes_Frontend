import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpSevice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('Token')
  }

  addNote(data: any) {
    console.log("Data in Note Service", data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    // console.log("Data in Note Service", data);
    return this.httpService.postService('notes', data, true, header);
  }

  getAllNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('notes', true, header);
  }

  deleteNoteById(_id: any) {
    // console.log(data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`notes/${_id}/isTrash`, {}, true, header);
  }

  archiveNoteById(_id:any) {
    console.log("token: ", this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`notes/${_id}/isarchive`, {}, true, header);
  }

  updateNoteById(data: any, id: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`notes/${id}`, data, true, header)
  }
}
