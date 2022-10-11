import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-all-notes',
  templateUrl: './display-all-notes.component.html',
  styleUrls: ['./display-all-notes.component.scss']
})
export class DisplayAllNotesComponent implements OnInit {

  @Input() NotesList: any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(notesObject: any): void {
    console.log("Notes", notesObject);

    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '400px',
      data: notesObject,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
