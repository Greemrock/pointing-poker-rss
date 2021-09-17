import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Room } from '../rooms/room.model';

interface UserCreationAttributes {
  name: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  id: string;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  surname: string;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  job: string;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  image: string;
  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    defaultValue: false,
  })
  isAdmin: boolean;
  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    defaultValue: false,
  })
  observer: boolean;

  @ForeignKey(() => Room)
  @Column({
    type: DataType.UUID,
  })
  roomId: string;

  @BelongsTo(() => Room)
  room: Room;
}
