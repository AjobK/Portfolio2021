import { Component, OnInit, Output } from '@angular/core'
import { environment } from '../../environments/environment'
import { ProjectService } from '../shared/services/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Output() projects: any
  selectedProject: any

  constructor(public projectService: ProjectService) {
    fetch(`${environment.backendUrl}/api/project`)
    .then((projectsResponse) => {
      return projectsResponse.json()
    })
    .then((projects) => {
      projects.map((project: any) => {
        project.imageUrl = `${environment.backendUrl}${project.imageUrl}`
      })

      this.projects = projects
    })
  }

  ngOnInit(): void {
  }

}
