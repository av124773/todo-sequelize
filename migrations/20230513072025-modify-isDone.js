'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Todos', 'isDone', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Todos', 'isDone', {
      allowNull: false,
      type: Sequelize.BOOLEAN
    })
  }
};
