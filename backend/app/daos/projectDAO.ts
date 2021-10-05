import DatabaseConnector from '../utils/databaseConnector'
import { Project } from '../entities/project'

class ProjectDAO {
  // This function is strictly for reference
  //
  // public async getAccountByUsername( username:string ): Promise<Account> {
  //   const repository = await DatabaseConnector.getRepository('Account')
  //   const account = await repository.createQueryBuilder('account')
  //     .leftJoinAndSelect('account.profile', 'profile')
  //     .leftJoinAndSelect('profile.avatar_attachment', 'attachment')
  //     .leftJoinAndSelect('profile.title', 'title')
  //     .where('account.user_name = :user_name', { user_name: username })
  //     .getOne()

  //   return account
  // }

  public async getProjects(): Promise<Project> {
    const repository = await DatabaseConnector.getRepository('Project')

    return await repository.find({
      relations: ['projectType']
    })
  }
}

export default ProjectDAO
