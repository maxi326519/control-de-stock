module.exports = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Invoice",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      archivo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tipoImpositivo: {
        type: DataTypes.ENUM("IVA", "Equivalencia", "REBU"),
      },
    },
    { updatedAt: false, timestamps: false }
  );
};
