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
  minutes: number;
  seconds: number;
  deck: string;
  isTimerNeeded: boolean;
}

@Table({ tableName: 'settings' })
export class Sets extends Model<Sets, SetsCreationAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  id: string;
  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  minutes: number;
  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  seconds: number;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  deck: string;
  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    defaultValue: false,
  })
  isTimerNeeded: boolean;

  @ForeignKey(() => Room)
  @Column({
    type: DataType.UUID,
  })
  roomId: string;

  @BelongsTo(() => Room)
  room: Room;
}
