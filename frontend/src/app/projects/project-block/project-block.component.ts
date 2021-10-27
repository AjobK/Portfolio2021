import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.scss']
})
export class ProjectBlockComponent implements OnInit {
  @Input() title: String = 'No title';
  @Input() type: String = 'Personal project';
  @Input() description: String = 'No description';
  @Input() imageUrl: String = '';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  goToProject() {
    this.projectService.setSelectedProject({
      title: this.title,
      type: this.type,
      description: this.description,
      imageUrl: this.imageUrl
    })

    // Is this optimal? No... Was I lazy? Yes!
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

}
