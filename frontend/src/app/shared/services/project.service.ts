import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    selectedProject = null
    selectedProjectChanged: Subject<any> = new Subject<any>();

    constructor() { }

    setSelectedProject(project: any): void {
        this.selectedProject = project
        this.selectedProjectChanged.next(this.selectedProject)
    }

    getSelectedProject(): any {
        return this.selectedProject
    }

    removeSelectedProject(): void {
        this.selectedProject = null
        this.selectedProjectChanged.next(this.selectedProject)
    }
}