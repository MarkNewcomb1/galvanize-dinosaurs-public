import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  public h2Title = "Job Listings";
  @Input() jobs;
  ngOnInit() {
    
  }

}
