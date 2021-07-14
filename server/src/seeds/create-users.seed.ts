import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import bcrypt from 'bcrypt';

export class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('users')
      .values([
        { username: 'admin', password: (await this.generatePasswordHash('admin')).toString(), name: 'admin' }
      ])
      .execute()
  }

  private async generatePasswordHash(password: string): Promise<string> {
    return await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }
}