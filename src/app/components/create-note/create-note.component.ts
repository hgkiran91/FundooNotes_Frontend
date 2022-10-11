import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  noteForm!: FormGroup
  submitted = false;
  constructor(private formBuilder: FormBuilder, private noteService: NotesService) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      Title: [''],
      Descreption: ['']
    })
  }

  ngSubmit() {
    this.submitted = true;
    if (this.noteForm.valid) {
      let reqdata = {
        Title: this.noteForm.value.Title,
        Descreption: this.noteForm.value.Descreption
      }
      console.log("Data", reqdata);
      this.noteService.addNote(reqdata).subscribe((response: any) => {
        console.log("Create note api test", response);
      }), (error: any) => {
        console.log("The error", error);
      }
    }
  }
  show = false;

  showing() {
    // this.show = !this.show
    if (this.show == false) {
      console.log("showing function is working")
      this.show = true;
      console.log("Showing value is true")
    } else {
      this.show = false;
    }
  }

  // close() {
  //   if (this.show == true) {
  //     console.log("close function is working")
  //     this.show = false;
  //     console.log("Showing value is true")
  //   }
  // }

}