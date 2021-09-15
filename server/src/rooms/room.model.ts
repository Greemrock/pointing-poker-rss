import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Issue } from '../issues/issue.model';
import { Sets } from '../settings/sets.model';

interface RoomCreationAttributes {
  roomName: string;
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

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  roomName: string;

  @HasMany(() => User)
  users: User[];

  @HasMany(() => Issue)
  issues: Issue[];

  @HasMany(() => Sets)
  settings: Sets[];
}
