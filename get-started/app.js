const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', 'karl', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

// force: true will drop the table if it already exists
// User.sync({force: false}).then(() => {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

const logUser = async () => {
  users = await User.findAll()
  console.log(users)
}
// logUser()
// User.findAll().then(users => {
//   console.log('*users*', users)
// })
console.log("*******************")
const getUsers = async () => {
  users = await sequelize.query(`SELECT * FROM users`)
  console.log(' *users* ', users)
}
// getUsers()
const User = {
  firstName: 'Dan'
  lastName: 'Dandan'
}
