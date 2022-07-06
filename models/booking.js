module.exports =  (sequelize , DataTypes) => {
    const Booking = sequelize.define("Booking", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false
        },
       appointmentDate:  {
        type: DataTypes.DATE,
        allowNull: false
        },
       description: {
        type: DataTypes.TEXT,
        allowNull: true
        }
    })

    return Booking
}