const banco =require('./banco');
const Eleitor =require('./Eleitor');

const User = banco.sequelize.define('users', {
    id: {
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: banco.Sequelize.STRING(45),
        allowNull: false
    },
    password: {
        type: banco.Sequelize.STRING(45),
        allowNull: false
    },
    status: {
        type: banco.Sequelize.INTEGER,
        allowNull: false
    },
})

User.belongsTo(Eleitor, {
    foreignKey: 'eleitor_id',
    constraint: true,
});

User.sync()

module.exports = User