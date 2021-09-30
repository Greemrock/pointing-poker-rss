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
  title: string;
  link: string;
  priority: string;
}

@Table({ tableName: 'issues' })
export class Issue extends Model<Issue, IssueCreationAttributes> {
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
  title: string;
  @Column({
    type: DataType.STRING,
    unique: false,
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
  isDone: boolean;
  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: true,
  })
  currentId: number;

  @ForeignKey(() => Room)
  @Column({
    type: DataType.UUID,
  })
  roomId: string;

  @BelongsTo(() => Room)
  room: Room;
}
