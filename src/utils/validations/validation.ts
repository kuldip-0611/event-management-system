import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  code: Yup.number()
    .typeError('mustContainNumber')
    .required('isRequired')
    .positive('mustBePositive')
    .integer('mustBeAnInteger'),
})

export const addEventValidationSchema = Yup.object().shape({
  eventName: Yup.string().required('isRequired'),
  eventType: Yup.string()
    .oneOf(['conference', 'workshop', 'webinar'], 'Invalid event type')
    .required('isRequired'),
  eventStatus: Yup.string()
    .oneOf(['upcoming', 'ongoing', 'completed'], 'Invalid event status')
    .required('isRequired'),
  gender: Yup.string().oneOf(['female', 'male', 'other'], 'Invalid gender').required('isRequired'),
  ageGroup: Yup.string()
    .oneOf(['18-25', '26-35', '36-45', '46+'], 'Invalid age group')
    .required('isRequired'),
})
