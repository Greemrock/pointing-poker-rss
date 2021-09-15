import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Room } from '../rooms/room.model';

interface IssueCreationAttributes {
  link: string;
  priority: string;
}

@Table({ tableName: 'issues' })
export class Issue extends Model<Issue, IssueCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  link: string;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  priority: string;
  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    allowNull: false,
  })
  isDone: false;
  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: true,
  })
  currentId: number;

  @ForeignKey(() => Room)
  @Column
  roomId: number;

  @BelongsTo(() => Room)
  room: Room;
}
