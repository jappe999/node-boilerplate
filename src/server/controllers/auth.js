import bcrypt from 'bcryptjs'
import assert from 'assert'
import Controller from './controller.js'
import User from '../models/user'

export default class AuthController extends Controller {
  // Get Login form
  loginForm() {
    this.res.render('auth/login', this.options)
  }

  // Log the user in
  login() {
    const user = this.req.params.user

    new User().find({
      name: user.name,
      email: user.email
    })
    .then(result => {
      this.res.session._id = Math.random().toString(36).substring(7)

      this.res.redirect('/questions')
    }).catch(err => {
      console.error(err)

      this.res.redirect('/login')
    })
  }

  // Get registration form
  registerForm() {
    this.res.render('auth/register', this.options)
  }

  register() {
    const user = this.req.body

    // Generate salt with a length of 10 characters.
    user.password = bcrypt.hashSync(user.password, 10)

    new User().insert([ user ])
    .then(result => {
      assert.equal(1, result.result.n)
      assert.equal(1, result.ops.length)

      this.res.session._id = Math.random().toString(36).substring(7)

      this.res.redirect('/questions')
    }).catch(err => {
      console.error(err)

      this.res.redirect('/login')
    })
  }
}
