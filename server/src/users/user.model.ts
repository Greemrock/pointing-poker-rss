import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttributes {
  name: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
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
  position: string;
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
  admin: boolean;
  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    defaultValue: false,
  })
  observer: boolean;
}
