// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { define } from 'typeorm-seeding'
import * as Faker from 'faker'
import Project from '../entities/project'
import ProjectType from '../entities/projectType'

// eslint-disable-next-line @typescript-eslint/ban-types
define(Project, (faker: typeof Faker, settings: { projectJSON: Object | null, projectType: ProjectType }) => {
  const project = new Project()

  const defaultProjectProps = {
    title: 'No title',
    type: 1,
    description: 'No description',
    imageUrl: '../public/images/default.png'
  }

  const projectProps = {
    ...defaultProjectProps,
    ...(settings.projectJSON || {}),
    ...{ projectType: settings.projectType }
  }

  Object.keys(projectProps).forEach((prop) => {
    project[prop] = projectProps[prop]
  })

  return project
})
