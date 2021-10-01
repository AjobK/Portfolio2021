import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.scss']
})
export class ProjectBlockComponent implements OnInit {
  @Input() title: String = 'No title';
  @Input() type: String = 'Personal project';
  @Input() description: String = 'No description';
  @Input() imageSource: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  goToProject(projectName: String = '') {
    alert('Page has not been created yet. I likely forgot to make it.\n\nSorry for the inconvenience.\n\n- Forgetful Ajob Kustra')
  }

}
