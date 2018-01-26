import MongoDB from 'mongodb'
import assert from 'assert'

export default class Database {
  constructor(dbName) {
    this.url = 'mongodb://mongodb.dev:27018'

    this.dbName = dbName ? dbName : 'test'

    this.db = null

    this.connect()
  }

  connect() {
    MongoClient.connect(this.url, (err, client) => {
      assert.equal(null, err)

      this.db = client.db(this.dbName)

      client.close()
    })
  }
}
