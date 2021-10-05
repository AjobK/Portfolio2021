import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import ProjectType from './projectType'

@Entity('project')
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    imageUrl: string

    @ManyToOne(() => ProjectType, (projectType) => projectType.id)
    @JoinColumn({ name: 'project_type', referencedColumnName: 'id' })
    projectType: ProjectType
}

export default Project
