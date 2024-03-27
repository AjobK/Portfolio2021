import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'

const ProjectTypeSeeder = require('./projectTypeSeeder')
const ProjectSeeder = require('./projectSeeder')

export default class CreateObjects implements Seeder {
    private projectTypes = [
      'Personal Project',
      'Client Project',
      'School Project',
      'Internship'
    ]

    private projects = [
      {
        title: 'Social Media Monitoring Police',
        description: 'This was a project for the Dutch Police, in which the monitoring of COVID-19 riots was the ' +
        'focus. As of today, multiple Police facilities run our scraping software on large monitors using Raspberry ' +
        'PI\'s. The platforms that are being scraped are Telegram, Facebook, Instagram, Twitter (Now X) and WhatsApp.',
        imageUrl: '/images/smm.png',
        projectType: 0
      },
      {
        title: 'ARAG Vouchercheck',
        description: 'This is a project for the insurance company ARAG. They needed an efficient way for customers ' +
        'to get legal advice. Before we made this application, they walked their clients through all the legal forms ' +
        'on the phone. Now these customers can get most of the necessary advice through an online decision tree.',
        imageUrl: '/images/arag.png',
        projectType: 1
      },
      {
        title: 'aanmelder.nl',
        description: 'During my internship at aanmelder.nl I got to work on their event management tool. This was a ' +
        'great learning experience, since it was my first time working in a codebase with over 1m lines and a big ' +
        'customer base. I mainly used python and django here.',
        imageUrl: '/images/aanmelder.jpg',
        projectType: 3
      },
      {
        title: 'ReadySetMask',
        description: 'This project was my first introduction to machine learning and computer vision. It was also a ' +
        'lot of fun, mainly because we took a pretty simple concept and turned it into a game. In this game you ' +
        'drive a car around a race track using facemask detection and hand gestures. For this project we used ' +
        'python opencv, tensorflow and keras. We also used keggle for training data.',
        imageUrl: '/images/rsm.png',
        projectType: 2
      },
      {
        title: 'Work Pamoja',
        description: 'At one of my internships I worked on a collaboration project between GIZ, a part of the German ' +
        'government, and small Kenyan business. The purpose of this project was giving Kenyan companies a portal on ' +
        'which they can promote their business to european investors. In this project I worked on the back-end with ' +
        'Laravel and on the front-end with React.',
        imageUrl: '/images/giz.jpg',
        projectType: 1
      },
      {
        title: 'Seaqull',
        description: 'This is a social media platform built with React, SCSS, NodeJS, PostgreSQL and a lot more. I ' +
        'still work on this project as a product owner and full-stack developer with a team of 6 people. We plan to ' +
        'deploy this application and advertise it in the very near future.',
        imageUrl: '/images/seaqull.png',
        projectType: 0
      },
      {
        title: 'Soyboy',
        description: 'My first attempt at making a game with unity within a week! ' +
        'It\'s a simple wave clearing game with break rooms and upgrades. I worked a lot with C# during this ' +
        'project, which was a lot of fun. I also made the pixelart for it.',
        imageUrl: '/images/soyboy.png',
        projectType: 0
      },
      {
        title: 'IPOSE Queue',
        description: 'I made this product for the university of applied sciences Leiden. This is a student queue ' +
        'management tool for teachers. It was especially useful during the corona period, since there was no ' +
        'effective way of handling queues digitally. This was for example a big problem when doing assessments. ' +
        'My tool proved to be very effective and was used in multiple subjects to manage queues. It is made with ' +
        'Angular and NodeJS',
        imageUrl: '/images/ipose-queue.png',
        projectType: 1
      },
      {
        title: 'Replicart',
        description: 'To get better at making management applications with masonry layouts I made replicart. This is ' +
        'a mock application on which you can buy your favourite art replicas. Administrators can add, edit and ' +
        'remove replicas. This was made with Angular, NodeJS and PostgreSQL.',
        imageUrl: '/images/replicart.png',
        projectType: 0
      },
      {
        title: 'Albion discord bot',
        description: 'I like playing MMORPG\'s, and for a long time Albion was one of my favourites. That is why I ' +
        'made a discord bot with which you can check the game market, organise guild events, view player and guild ' +
        'rankings and all kinds of other things. Multiple guilds have used it.',
        imageUrl: '/images/albion.jpg',
        projectType: 0
      },
      {
        title: 'SushiGoParty',
        description: 'A digital socket based recreation of the card game SushiGoParty. It worked well, but could ' +
        'have used a better stack. It is made with JavaFX and firebase. I also made all the graphics.',
        imageUrl: '/images/sushigo.png',
        projectType: 2
      }
    ]

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line no-unused-vars
    public async run(factory: Factory, _connection: Connection): Promise<any> {
      const projectTypesGenerated = []

      for (let i = 0; i < this.projectTypes.length; i++) {
        projectTypesGenerated.push(await ProjectTypeSeeder(factory, this.projectTypes[i]))
      }

      for (let i = 0; i < this.projects.length; i++) {
        const polishedProjectJSON = this.projects[i]

        await ProjectSeeder(factory, polishedProjectJSON, projectTypesGenerated[polishedProjectJSON.projectType])
      }
    }
}
