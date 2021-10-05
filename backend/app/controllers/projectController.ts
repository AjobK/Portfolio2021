import { Request, Response } from 'express'
import ProjectDAO from '../daos/projectDAO'

class ProjectController {
  private projectDAO: ProjectDAO

  constructor() {
    this.projectDAO = new ProjectDAO()
  }

  public getProjects = async (req: Request, res: Response): Promise<any> => {
    const projects = await this.projectDAO.getProjects()

    return res.status(200).json(projects)
  }
}

export default ProjectController
