import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Issue } from '../issues/issue.model';

interface RoomCreationAttributes {
  idRoom: string;
}

@Table({ tableName: 'rooms' })
export class Room extends Model<Room, RoomCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @HasMany(() => User)
  users: User[];

  @HasMany(() => Issue)
  issues: Issue[];
}
