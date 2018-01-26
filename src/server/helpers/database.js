import { MongoClient } from 'mongodb'
import assert from 'assert'

export default class Database {
  constructor(dbName) {
    this.url = 'mongodb://mongodb.dev:27018'

    this.dbName = dbName ? dbName : 'test'

    this.db = null
    this.client = null

    this.callback = function () { }
  }

  connect(callback) {
    MongoClient.connect(this.url, (err, client) => {
      assert.equal(null, err)

      const db = client.db(this.dbName)

      // Callback is defined as parameter of this method.
      callback(db, function () {
        console.log(client)
        client.close()
      })
    })
  }
}
