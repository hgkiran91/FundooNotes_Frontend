import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesArray: any;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.notesService.getAllNotes().subscribe((request: any) => {
      console.log("Request data: ", request);
      this.notesArray = request.data;
      this.notesArray.reverse()
      this.notesArray = this.notesArray.filter((note: any) => {
        return note?.isDeleted == false && note?.isArchived == false
      })
      console.log("List of notes", this.notesArray);
      // console.log(this.notesArray);
    })
  }

  receiveEventFromDisplay($event: any) {
    console.log($event);
    this.getAllNotes();
  }

  receiveResponseFromDisplayByUpdate($event: any) {
    console.log($event);
    this.getAllNotes();
  }

  receiveEventFromCreate($event: any) {
    this.getAllNotes();
  }

  receiveResponseFromDisplayByColor($event: any) {
    console.log($event);
    this.getAllNotes();
  }

  receiveEventFromDisplayByArchive($event: any) {
    console.log($event);
    this.getAllNotes();
  }
}
