import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-a-job-form',
  templateUrl: './add-a-job-form.component.html',
  styleUrls: ['./add-a-job-form.component.css']
})
export class AddAJobFormComponent implements OnInit {

  @Input() dataObject;
  form: FormGroup;
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.dataObject);
    let interested = 1;
    if (form.value.interested == undefined) {
      form.value.interested =[interested];
    } 
    form.value.interested = [1];
    this.dataObject.map(function(job) {
      if (form.value.title == job.title) {

        form.value.interested.push("MATCH FOUND")
      }
    })

    this.dataObject.unshift(form.value);
  }
}
