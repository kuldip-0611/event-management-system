import React from 'react'
import {Form, Container} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'
import {Formik} from 'formik'
import './loginForm.css'
import {loginValidationSchema} from '../../../utils/validations/validation'
import {LoginFormProps} from './loginForm.props'
import LoadingButton from '../../Button/Button'
import Spacer from '../../Spacer/Spacer'

const LoginForm: React.FC<LoginFormProps> = ({handleLogin, loading}) => {
  const {t} = useTranslation()
  const initialValues = {
    code: '',
    role: 'admin',
  }

  return (
    <Container className="login-form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values, {setSubmitting}) => {
          handleLogin(values)
          setSubmitting(false)
        }}
      >
        {({handleSubmit, handleChange, values, errors, touched, isValid}) => {
          const isFormValid = Boolean(values.code) && Boolean(values.role) && isValid

          return (
            <Form onSubmit={handleSubmit} className="w-100">
              <Form.Group controlId="formBasicCode">
                <p className="form-labels pb-1 m-0">{t('code')}</p>
                <Form.Control
                  type="text"
                  name="code"
                  placeholder={`${t('codeEg')}`}
                  value={values.code}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  isInvalid={!!errors.code && touched.code}
                  className={`custom-input`}
                />
                <Form.Control.Feedback type="invalid">
                  {`${t('code')} ${t(errors?.code || '')}`}
                </Form.Control.Feedback>
              </Form.Group>
              <Spacer size={8} />

              <Form.Group controlId="formBasicRole">
                <p className="form-labels pb-1 m-0">{t('role')}</p>
                <Form.Control
                  as="select"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  isInvalid={!!errors.role && touched.role}
                  className={`custom-input`}
                >
                  <option value="admin">Admin</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {`${t('role')} ${t(errors?.role || '')}`}
                </Form.Control.Feedback>
              </Form.Group>
              <Spacer size={12} />

              <LoadingButton
                buttonText={t('signIn')}
                isSubmitting={loading}
                isValid={isFormValid}
              />
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}

export default LoginForm
