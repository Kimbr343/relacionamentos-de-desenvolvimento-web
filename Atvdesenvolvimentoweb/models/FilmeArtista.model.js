const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FilmeArtista = sequelize.define('FilmeArtista', {
    filmeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    artistaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'FilmeArtista',
    timestamps: false
});

module.exports = FilmeArtista;