import { DataTypes } from 'sequelize'
import { sequelize } from './index'
import { Model, Optional } from 'sequelize'

export type UserAttributes = {
  id: number
  name: string
  age: string
  roleId: number
  createdAt?: Date
  updatedAt?: Date
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>

export type UserInstance = Model<UserAttributes, UserCreationAttributes> & UserAttributes

const User = sequelize.define<UserInstance>('User', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING
  },
  age: {
    allowNull: true,
    type: DataTypes.STRING
  },
  roleId: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: true,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE
  }
})

export default User
