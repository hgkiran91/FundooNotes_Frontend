import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { NotesService } from 'src/app/services/noteService/notes.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-display-all-notes',
  templateUrl: './display-all-notes.component.html',
  styleUrls: ['./display-all-notes.component.scss']
})
export class DisplayAllNotesComponent implements OnInit {

  @Input() NotesList: any
  @Output() messageFromDisplayToGetAllNotes = new EventEmitter<any>();
  @Output() messageFromUpdateToDisplayAndToGetAllNotes = new EventEmitter<any>();
  @Output() messageFromDisplayToGetAllNotesByArchive = new EventEmitter<any>();

  messageFromDelete: any;


  messageFromUpdate: any;
  messageFromColor: any;
  messageFromArchive: any;
  filterString: any;

  userNote = new Array();

  constructor(public dialog: MatDialog, private notessService: NotesService, private data: DataService) { }

  ngOnInit(): void {
    this.viewAllNotes();
    this.data.currentMessage.subscribe(message => this.filterString = message)
  }

  viewAllNotes() {
    this.notessService.getAllNotes().subscribe((items: any) => {
      console.log("All notes of User:", items);
      for (var i of items.data) {
        if (i.isArchived == false && i.isDeleted == false) {
          this.userNote.push(i);
        }
      }
    })
  }

  openDialog(notesObject: any): void {
    console.log("Notes", notesObject);

    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '400px',
      data: notesObject,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.messageFromUpdateToDisplayAndToGetAllNotes.emit(result);
    });
  }

  receiveResponseFromDeleteIcons($event: any) {
    console.log("Emited by Delete", $event);
    this.messageFromDelete = $event;
    this.messageFromDisplayToGetAllNotes.emit(this.messageFromDelete)
  }

  receiveResponseFromColorIcon($event: any) {
    console.log("Emited by Color", $event);
    this.messageFromColor = $event;
    this.messageFromDisplayToGetAllNotes.emit(this.messageFromColor)
  }

  receiveResponseFromArchiveIcons($event: any) {
    console.log("Emited by Archive", $event);
    this.messageFromArchive = $event;
    this.messageFromDisplayToGetAllNotesByArchive.emit(this.messageFromArchive)
  }
}
