import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  updateNoteForm!: FormGroup

  submitted = false;

  Title: any
  Descreption: any
  noteId: any

  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private notesService: NotesService) {
    console.log(data);
    this.updateNoteForm = this.formBuilder.group({
      Title: [''],
      Descreption: ['']
    })
    // this.Title = data.Title
    // this.Descreption = data.Descreption
    this.noteId = data._id
    this.updateNoteForm.patchValue({
      Title: data.Title,
      Descreption: data.Descreption
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

  updateNote() {
    this.submitted = true;
    if (this.updateNoteForm.valid) {
      let reqdata = {
        Title: this.updateNoteForm.value.Title,
        Descreption: this.updateNoteForm.value.Descreption
      }
      console.log("NoteID", this.noteId);

      this.notesService.updateNoteById(reqdata, this.noteId).subscribe((response: any) => {
        console.log("Update note api test:", response)
        this.dialogRef.close(response);
      }), (error: any) => {
        console.log("error", error);
      }
    }
  }
}
