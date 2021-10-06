import { Sequelize } from 'sequelize';
import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { OverallResult } from 'src/overallResults/overallResult.model';
import { UserResult } from 'src/userResults/userResult.model';
import { Room } from '../rooms/room.model';

interface IssueCreationAttributes {
  title: string;
  link: string;
  priority: string;
  overall: number[];
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
    defaultValue: false,
    unique: false,
    allowNull: false,
  })
  isDone: boolean;

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
    defaultValue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  })
  overall: number[];

  @ForeignKey(() => Room)
  @Column({
    type: DataType.UUID,
  })
  roomId: string;

  @BelongsTo(() => Room)
  room: Room;

  @HasMany(() => UserResult)
  userResults: UserResult[];

  // @HasMany(() => OverallResult)
  // overallResults: OverallResult[];
}
