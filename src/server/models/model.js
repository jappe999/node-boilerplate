import Database from '../helpers/database.js'
import assert from 'assert'

export default class Model {
  constructor() {
    this.db = new Database()
    this.collectionName = ''
  }

  all() {
    return new Promise((resolve, reject) => {
      try {
        this.db.connect((db, callback) => {
          db.collection(this.collectionName)
          .find({}).toArray((err, results) => {
            assert.equal(err, null)

            resolve(results)
          })
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  find(query) {
    return new Promise((resolve, reject) => {
      try {
        this.db.connect((db, callback) => {
          db.collection(this.collectionName)
          .find({}).toArray((err, results) => {
            assert.equal(err, null)

            resolve(results)
          })
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  insert(items) {
    return new Promise((resolve, reject) => {
      try {
        this.db.connect((db, callback) => {
          db.collection(this.collectionName)
          .insertMany(items, (err, results) => {
            assert.equal(err, null)

            resolve(results)
          })
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  update(selectOn, newItem) {
    return new Promise((resolve, reject) => {
      try {
        this.db.connect((db, callback) => {
          db.collection(this.collectionName)
          .updateOne(selectOn, newItem, (err, result) => {
            assert.equal(err, null)

            resolve(result)
          })
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  delete(item) {
    return new Promise((resolve, reject) => {
      try {
        this.db.connect((db, callback) => {
          db.collection(this.collectionName)
          .deleteOne(item, (err, result) => {
            assert.equal(err, null)

            resolve(result)
          })
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
