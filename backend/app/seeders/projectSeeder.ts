import { Factory } from 'typeorm-seeding'
import Project from '../entities/project'
import ProjectType from '../entities/projectType'

module.exports = async (factory: Factory, projectJSON: any, projectType: ProjectType) => {
  return await factory(Project)({ projectJSON: projectJSON, projectType: projectType }).create()
}
