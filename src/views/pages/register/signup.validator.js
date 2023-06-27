import Joi from 'joi-browser'
var Schema = Joi.object().keys({
  name: Joi.string()
    .required()
    .error(() => {
      return {
        message: 'Username is required.',
      }
    }),

  mobile_number: Joi.string()
    .regex(/^[0-9]*$/)
    .min(10)
    .max(10)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case 'any.empty':
            err.message = 'number should not be empty!'
            break
          case 'string.required':
            err.message = `number required.`
            break
          case 'string.regex.name':
            err.message = `number should be number only.`
            break
          case 'string.min':
            err.message = `number must be a 10 digit!`
            break
          case 'string.max':
            err.message = `number must be a 10 digit`
            break
          case 'string.regex.base':
            err.message = `number must be a number only.`
            break
          default:
            err.message = `number is not valid.`
            break
        }
      })
      return errors
    }),

  password: Joi.string()
    .min(5)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case 'any.empty':
            err.message = 'Password should not be empty!'
            break
          case 'string.min':
            err.message = `Password have at least 8 character!`
            break
          case 'string.max':
            err.message = `Password should have at most 30 character!`
            break
          case 'string.required':
            err.message = `Password required.`
            break
          case 'string.regex.name':
            err.message = `Password should be alphacharacter only.`
            break
          default:
            err.message = `Password is not valid.`
            break
        }
      })
      return errors
    }),

  confirm_password: Joi.string()
    .min(5)
    .required()
    .error((errors) => {
      errors.forEach((err) => {
        switch (err.type) {
          case 'any.empty':
            err.message = 'Confirm password should not be empty!'
            break
          case 'string.min':
            err.message = `Confirm password have at least 8 character!`
            break
          case 'string.max':
            err.message = `Confirm password should have at most 30 character!`
            break
          case 'string.required':
            err.message = `Confirm password required.`
            break
          case 'string.regex.name':
            err.message = `Confirm password should be character only.`
            break
          default:
            err.message = `Confirm password is not valid.`
            break
        }
      })
      return errors
    }),

  corresponding_address: Joi.string(),
})

const Validator = (customer) => {
  const result = Joi.validate(customer, Schema, {
    abortEarly: false,
    allowUnknown: true,
  })
  return result
}
export { Validator }
