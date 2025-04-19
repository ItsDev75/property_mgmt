import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { IClearProperty } from '../types/clear_property.types';

class ClearProperty extends Model<IClearProperty> implements IClearProperty {
  public id!: number;
  public form_no!: string;
  public prop_date!: Date;
  public property_name!: string;
  public property_type!: string;
  public for_property!: string;
  public membership!: string;
  public project_name!: string;
  public State!: string;
  public city!: string;
  public location!: string;
  public video_url!: string;
  public tour_link!: string;
  public content!: string;
  public status!: '0' | '1';
  public admin_del!: '0' | '1';
  public display_order!: number;
  public url!: string;
  public hit!: number;
}

ClearProperty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    form_no: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    prop_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    property_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    property_type: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    for_property: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    membership: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    project_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    State: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    video_url: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    tour_link: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: false,
      defaultValue: '1',
    },
    admin_del: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: false,
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    hit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'clear_property',
    timestamps: false,
  }
);

export default ClearProperty; 