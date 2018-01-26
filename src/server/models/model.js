import Database from '../helpers/database.js'

export default class Model {
  constructor() {
    this.db = new Database()

    this.collection = this.db.collection(this.collectionName)
  }

  all() {
    this.collection
  }

  insert(items) {
    return new Promise((resolve, reject) => {
      try {
        this.collection.insertMany(items, (err, result) => {
          assert.equal(err, null)
          resolve()
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
