const {DataTypes} = require('sequelize');
const sequelize = require('../config/bd');

const Artista = sequelize.define(
    'Artista',
    {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    anoNascimento: {
        type: DataTypes.STRING,
    },

    foto: {
        type: DataTypes.STRING,
    },

    nomeArtistico: {
        type: DataTypes.STRING,
    },

    atv: {
        type: DataTypes.BOOLEAN,
    },
},

    { tableName: 'Artistas', timestamps: true }
);

module.exports = Artista;