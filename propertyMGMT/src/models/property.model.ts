import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { IClearPropertyDetail } from '../types/property.types';

class Property extends Model<IClearPropertyDetail> implements IClearPropertyDetail {
  public id!: number;
  public property_id!: number;
  public call_us!: string;
  public exe_name!: string;
  public exe_email!: string;
  public exe_contact_no!: string;
  public exe_address!: string;
  public owner_name!: string;
  public owner_email!: string;
  public owner_contact_no!: string;
  public owner_address!: string;
  public pro_curr_status!: string;
  public prop_avail!: string;
  public permi_avail!: string;
  public project_unit!: string;
  public floor_loc!: string;
  public prop_ownership!: string;
  public flooring_type!: string;
  public facing!: string;
  public no_of_lift!: string;
  public no_of_bedrooms!: string;
  public no_of_bathrooms!: string;
  public no_of_balconies!: string;
  public no_of_open_sides!: string;
  public kitchen_detail!: string;
  public furniture_detail!: string;
  public age_of_property!: string;
  public power_supply!: string;
  public security_guards!: string;
  public camera!: string;
  public fire_avai!: string;
  public water_supply!: string;
  public water_timing!: string;
  public road_width!: string;
  public parking_detail!: string;
  public gas_supply!: string;
  public amenities!: string;
  public otheramenities!: string;
  public client_avail!: string;
  public overlooking!: string;
  public some_features!: string;
  public wardrobe!: string;
  public beds!: string;
  public fans!: string;
  public light!: string;
  public m_kitchen!: string;
  public fridge!: string;
  public ac!: string;
  public geyser!: string;
  public tv!: string;
  public stove!: string;
  public washing_machine!: string;
  public water_purifier!: string;
  public microwave!: string;
  public curtains!: string;
  public chimney!: string;
  public exhaust_fan!: string;
  public sofa!: string;
  public dinning_table!: string;
  public super_plot_area!: string;
  public super_plot_area_unit!: string;
  public super_con_area!: string;
  public super_con_area_unit!: string;
  public carpet_plot_area!: string;
  public carpet_plot_area_unit!: string;
  public carpet_con_area!: string;
  public carpet_con_area_unit!: string;
  public offer_price!: number;
  public offer_price_unit!: string;
  public expected_rent!: string;
  public expected_rent_unit!: string;
  public rent_security!: string;
  public rent_security_unit!: string;
  public maint_charge!: string;
  public maint_charge_unit!: string;
  public tax_charge!: string;
  public tax_charge_unit!: string;
  public other_charge!: string;
  public google_map!: string;
  public school!: string;
  public college!: string;
  public hospital!: string;
  public bank!: string;
  public brts_stop!: string;
  public r_station!: string;
  public m_station!: string;
  public airport!: string;
  public brochure!: string;
  public post_date!: Date;
  public pricerequest!: '0' | '1';
  public main_charges!: number;
  public main_charges_unit!: string;
  public parkingdetail!: string;
  public custom_tag!: string;
}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    call_us: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    exe_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    exe_email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    exe_contact_no: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    exe_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    owner_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    owner_email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    owner_contact_no: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    owner_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pro_curr_status: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    prop_avail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    permi_avail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    project_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    floor_loc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    prop_ownership: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    flooring_type: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    facing: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_of_lift: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_of_bedrooms: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_of_bathrooms: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_of_balconies: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    no_of_open_sides: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    kitchen_detail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    furniture_detail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    age_of_property: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    power_supply: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    security_guards: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    camera: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fire_avai: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    water_supply: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    water_timing: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    road_width: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    parking_detail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gas_supply: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    amenities: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    otheramenities: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    client_avail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    overlooking: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    some_features: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    wardrobe: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    beds: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fans: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    light: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    m_kitchen: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fridge: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ac: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    geyser: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tv: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stove: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    washing_machine: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    water_purifier: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    microwave: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    curtains: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    chimney: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    exhaust_fan: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sofa: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dinning_table: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    super_plot_area: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    super_plot_area_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    super_con_area: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    super_con_area_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    carpet_plot_area: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    carpet_plot_area_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    carpet_con_area: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    carpet_con_area_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    offer_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    offer_price_unit: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expected_rent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    expected_rent_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rent_security: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rent_security_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    maint_charge: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    maint_charge_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tax_charge: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tax_charge_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    other_charge: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    google_map: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    school: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    college: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hospital: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bank: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    brts_stop: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    r_station: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    m_station: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    airport: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    brochure: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pricerequest: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: false,
      defaultValue: '0',
    },
    main_charges: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    main_charges_unit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    parkingdetail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    custom_tag: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'clear_property_detail',
    timestamps: false,
  }
);

export default Property; 