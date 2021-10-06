import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface VoteKickCreationAttributes {
  counterYes: number;
  allVoting: number;
}

@Table({ tableName: 'voteKicks' })
export class VoteKick extends Model<VoteKick, VoteKickCreationAttributes> {
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
    allowNull: true,
    defaultValue: 1,
  })
  counterYes: number;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: true,
    defaultValue: 1,
  })
  allVoting: number;
}
