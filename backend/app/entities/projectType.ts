import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('project_type')
export class ProjectType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}

export default ProjectType
