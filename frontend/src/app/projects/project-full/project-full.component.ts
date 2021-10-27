import { Component, OnInit, Output } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-full',
  templateUrl: './project-full.component.html',
  styleUrls: ['./project-full.component.scss']
})
export class ProjectFullComponent implements OnInit {
  @Output() selectedProject: any = null

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    this.selectedProject = this.projectService.selectedProject

    this.projectService.selectedProjectChanged.subscribe((project) => {
      this.selectedProject = project
    })
  }
}
