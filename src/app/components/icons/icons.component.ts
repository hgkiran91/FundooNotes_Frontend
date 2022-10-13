import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() notecard: any

  colorList = ['white', '#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3']

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

  addColor(color: any) {
    let reqdata = {
      color: color,
    }
    this.noteService.updateNoteById(reqdata, this.notecard._id).subscribe((response: any) => {
      console.log("Color api test", response);
    })
  }
}
