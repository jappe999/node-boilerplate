import Vue from 'vue'
import axios from 'axios'

const app = new Vue({
  el: '#app',
  data: {
    hasError: false,
    comment: '',
    errorMsg: '',
    question: '',
    questions: []
  },
  mounted() {
    this.getQuestions()
  },
  methods: {
    getQuestions() {
      axios.get('/api/questions')
      .then(response => {
        this.questions = response.data
      }).catch(err => {
        console.error(err)
      })
    },

    askQuestion() {
      let postData = {
        question: this.question
      }

      axios.put('/api/questions', postData)
      .then(response => {
        if (response.data === 'true') {
          this.questions.push(postData)
        } else {
          this.error('Could not ask question.')
        }
      })
    },

    deleteQuestion(question) {
      let postData = {
        question: question
      }

      axios.delete('/api/questions', postData)
      .then(response => {
        if (response.data === 'true') {
          question.comments.push(postData)
        } else {
          this.error('Could not add comment.')
        }
      })
    },

    addComment(question) {
      question.comments.push(comment)

      let postData = {
        question: question,
      }

      axios.put(`/api/questions/${question._id}/comments/add`, postData)
      .then(response => {
        if (response.data === 'true') {
          question.comments.push(postData)
        } else {
          this.error('Could not add comment.')
        }
      })
    },

    upvote(question) {
      axios.post(`/api/questions/${question._id}/upvote`)
      .then(response => {
        if (response.data === true) {
          question.upvotes++
        }
      }).catch(err => {
        console.error(err)
      })
    },

    downvote(question) {
      axios.post(`/api/questions/${question._id}/downvote`)
      .then(response => {
        if (response.data === true) {
          question.upvotes--
        }
      }).catch(err => {
        console.error(err)
      })
    },

    error(err) {
      this.errorMsg = err
      this.hasError = true

      const _vm = this

      setTimeout(() => {
        _vm.hasError = false
      })
    }
  }
})
