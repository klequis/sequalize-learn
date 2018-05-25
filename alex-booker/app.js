const Sequelize = require('sequelize')
const connection = new Sequelize('demo_schema', 'root', 'karl', {
  dialect: 'mysql',
  operatorsAliases: false,
})



const Article = connection.define('article', {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true,
  }, // end slug
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [10, 150],
        msg: 'Length should be between 10 and 150.'
      },
      startsWithUpper: function (bodyVal) {
        const first = bodyVal.charAt(0)
        const startsWithUpper = first === first.toUpperCase()
        if (!startsWithUpper) {
          throw new Error('First letter must be uppercase')
        }
      }

    }
  }, // end title
  body: {
    type: Sequelize.TEXT,
    defaultValue: 'Coming soon...',
  }, // end body
},
{
  hooks: {
    beforeValidate: function() {
      console.log('beforeValidate')
    },
    afterCreate: function (res) {
      console.log('afterCreate: Created article with slug', res.dataValues.slug)
    }
  }
}
)

// connection.sync().then(function () {
//   Article.create({
//     slug: 'bla-slug',
//     title: 'demo title',
//     body: 'bla bla bla bla bla bla'
//   })
//
//   Article.findById('bla-slug').then(function(article) {
//     console.log('**** 1', article.dataValues)
//   })
//   // console.log('1 ********************************')
//   Article.findAll().then(function(articles) {
//     console.log('**** 2', articles)
//   })
// })

connection.sync({
  logging: console.log
}).then (function() {
  return Article.create({
    slug: 'slug-5',
    title: 'Slug 5 title',
    body: 'body, body, body body body body',
  })
}).catch(function (err) {
  console.log(err)
})
