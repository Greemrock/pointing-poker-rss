import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Room } from '../rooms/room.model';

interface SetsCreationAttributes {
  timer: string;
  cardValue: string;
  scoreType: string;
  isTimerNeeded: boolean;
}

@Table({ tableName: 'settings' })
export class Sets extends Model<Sets, SetsCreationAttributes> {
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
    allowNull: false,
  })
  timer: string;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  cardValue: string;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  scoreType: string;
  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    defaultValue: false,
  })
  isTimerNeeded: boolean;

  @ForeignKey(() => Room)
  @Column
  roomId: number;

  @BelongsTo(() => Room)
  room: Room;
}
