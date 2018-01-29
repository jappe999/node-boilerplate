'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default({
  el: '#app',
  data: {
    hasError: false,
    comment: '',
    errorMsg: '',
    question: '',
    questions: []
  },
  mounted: function mounted() {
    this.getQuestions();
  },

  methods: {
    getQuestions: function getQuestions() {
      var _this = this;

      _axios2.default.get('/api/questions').then(function (response) {
        _this.questions = response.data;
      }).catch(function (err) {
        console.error(err);
      });
    },
    askQuestion: function askQuestion() {
      var _this2 = this;

      var postData = {
        question: this.question
      };

      _axios2.default.put('/api/questions', postData).then(function (response) {
        if (response.data === 'true') {
          _this2.questions.push(postData);
        } else {
          _this2.error('Could not ask question.');
        }
      });
    },
    deleteQuestion: function deleteQuestion(question) {
      var _this3 = this;

      var postData = {
        question: question
      };

      _axios2.default.delete('/api/questions', postData).then(function (response) {
        if (response.data === 'true') {
          question.comments.push(postData);
        } else {
          _this3.error('Could not add comment.');
        }
      });
    },
    addComment: function addComment(question) {
      var _this4 = this;

      question.comments.push(comment);

      var postData = {
        question: question
      };

      _axios2.default.put('/api/questions/' + question._id + '/comments/add', postData).then(function (response) {
        if (response.data === 'true') {
          question.comments.push(postData);
        } else {
          _this4.error('Could not add comment.');
        }
      });
    },
    upvote: function upvote(question) {
      _axios2.default.post('/api/questions/' + question._id + '/upvote').then(function (response) {
        if (response.data === true) {
          question.upvotes++;
        }
      }).catch(function (err) {
        console.error(err);
      });
    },
    downvote: function downvote(question) {
      _axios2.default.post('/api/questions/' + question._id + '/downvote').then(function (response) {
        if (response.data === true) {
          question.upvotes--;
        }
      }).catch(function (err) {
        console.error(err);
      });
    },
    error: function error(err) {
      this.errorMsg = err;
      this.hasError = true;

      var _vm = this;

      setTimeout(function () {
        _vm.hasError = false;
      });
    }
  }
});