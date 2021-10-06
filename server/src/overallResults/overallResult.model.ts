import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Issue } from 'src/issues/issue.model';

interface OverallResultCreationAttributes {
  card_1: string;
  card_2: string;
  card_3: string;
  card_4: string;
  card_5: string;
  card_6: string;
  card_7: string;
  issueId: string;
}

@Table({ tableName: 'overallResults' })
export class OverallResult extends Model<
  OverallResult,
  OverallResultCreationAttributes
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
  card_1: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  card_2: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  card_3: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  card_4: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  card_5: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  card_6: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  card_7: string;

  @ForeignKey(() => Issue)
  @Column({
    type: DataType.UUID,
  })
  issueId: string;

  @BelongsTo(() => Issue)
  issue: Issue;
}
