import Model from './model'

export default class Question extends Model {
  constructor() {
    super()
    
    this.collectionName = 'questions'
  }
}
