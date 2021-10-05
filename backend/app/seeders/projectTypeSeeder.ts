import { Factory } from 'typeorm-seeding'
import ProjectType from '../entities/projectType'

module.exports = async (factory: Factory, name: string) => {
  return await factory(ProjectType)({ name: name }).create()
}
