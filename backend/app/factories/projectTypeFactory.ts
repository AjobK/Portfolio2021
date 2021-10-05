// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { define } from 'typeorm-seeding'
import * as Faker from 'faker'
import ProjectType from '../entities/projectType'

// eslint-disable-next-line @typescript-eslint/ban-types
define(ProjectType, (faker: typeof Faker, settings: { name: string }) => {
  const projectType = new ProjectType()
  projectType.name = settings.name || 'None'

  return projectType
})
