import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Issue } from 'src/issues/issue.model';

interface UserResultCreationAttributes {
  voteResult: string;
}

@Table({ tableName: 'userResults' })
export class UserResult extends Model<
  UserResult,
  UserResultCreationAttributes
> {
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
    allowNull: true,
  })
  voteResult: string;

  @Column({
    type: DataType.UUID,
    unique: false,
    allowNull: true,
  })
  userId: string;

  @ForeignKey(() => Issue)
  @Column({
    type: DataType.UUID,
  })
  issueId: string;

  @BelongsTo(() => Issue)
  issue: Issue;
}
