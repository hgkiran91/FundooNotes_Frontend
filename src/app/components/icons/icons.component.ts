import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() notecard: any

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  deleteNote() {
    console.log(this.notecard)
    // let reqdata = {
    //   noteId: this.notecard._id,
    //   isDeleted: true
    // }
    this.noteService.deleteNoteById(this.notecard._id).subscribe((response: any) => {
      console.log("Delete note api test", response);
    }), (error: any) => {
      console.log("The error", error);
    }
  }

  archiveNote() {
    this.noteService.archiveNoteById(this.notecard._id).subscribe((response: any) => {
      console.log("Archive note api test", response);
      console.log("NoteId", this.notecard._id);
      
    }), (error: any) => {
      console.log("The error", error);
    }
  }
}
