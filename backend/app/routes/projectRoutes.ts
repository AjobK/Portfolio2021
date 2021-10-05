import * as express from 'express'
import RouterBase from '../interfaces/RouterBase'
import ProjectController from '../controllers/projectController'

class ProjectRoutes implements RouterBase {
    public router = express.Router()
    private projectController: ProjectController

    constructor() {
      this.projectController = new ProjectController()
      this.initRoutes()
    }

    public initRoutes(): void {
      this.router.get('/project', this.projectController.getProjects)
    }
}

export default ProjectRoutes
