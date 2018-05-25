## build
- entity.build
- creates but does not persist
- call .save to persist

## fields: []
- is a list of fields that can be submitted to the db
- prevents malicious adding of fields. it will be ignored
````
Article.create(req.body, {
  fields: ['title', 'body']
  }).then(...)
````

## insert multiple records
- bulkCreate([])
- by default, skips the validations. Pass { validate: true } to enforce validations
- ignoreDuplicates: true/false can be useful as well
````
Article.bulkCreate([
  {
    title: 'Article1',
    body: 'Article 1'
  },
  {
    title: 'Article2',
    body: 'Article 2'
  }
  ])
````
