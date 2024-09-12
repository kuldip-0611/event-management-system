import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  code: Yup.number()
    .typeError('mustContainNumber')
    .required('isRequired')
    .positive('mustBePositive')
    .integer('mustBeAnInteger'),
})
