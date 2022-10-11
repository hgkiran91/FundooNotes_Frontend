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
      console.log(this.notesArray);
    })
  }
}
