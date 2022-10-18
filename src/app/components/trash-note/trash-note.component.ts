import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  notesArray: any;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes()
  }

  getAllNotes() {
    this.notesService.getAllNotes().subscribe((request: any) => {
      console.log("Request data: ", request);
      this.notesArray = request.data;
      this.notesArray.reverse()
      this.notesArray = this.notesArray.filter((note: any) => {
        return note?.isDeleted == true
      })
      console.log("List of notes", this.notesArray);
      // console.log(this.notesArray);
    })
  }
}
