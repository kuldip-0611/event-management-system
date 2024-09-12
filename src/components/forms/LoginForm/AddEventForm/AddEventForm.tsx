import React, {useEffect, useState} from 'react'
import {Form, Container} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'
import {Formik} from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Spacer from '../../../Spacer/Spacer'
import LoadingButton from '../../../Button/Button'
import {AddEventFormProps} from './addEventForm.props'
import {addEventValidationSchema} from '../../../../utils/validations/validation'
import './addEventForm.css'
import ArrowDown from '../../../../assets/icons/ArrowDown'
import Global from '../../../../assets/icons/Global'
import Public from '../../../../assets/icons/Public'
import Local from '../../../../assets/icons/Local'
import Selection from '../../../Selection/Selection'
import Online from '../../../../assets/icons/Online'
import Offline from '../../../../assets/icons/Offline'
import Free from '../../../../assets/icons/Free'
import Date from '../../../../assets/icons/Date'

const AddEventForm: React.FC<AddEventFormProps> = ({handleAddEvent, loading}) => {
  const [eventFormat, setEventFormat] = useState(1)
  const [selectedEvent, setSelectedEvent] = useState(1)
  const [selectedPaymentType, setSelectedPaymentType] = useState(1)
  const [selectedHours, setSelectedHours] = useState(1)
  const [photgrapherChecked, setphotgrapherChecked] = useState(false)
  const [surveyChecked, setSurveyChecked] = useState(false)
  const [startDate, setStartDate] = useState<Date | null | undefined>(null)
  const [fromTime, setFromTime] = useState<Date | null | undefined>(null)
  const [toTime, setToTime] = useState<Date | null | undefined>(null)
  const {t} = useTranslation()
  const [workersCourt, setWorkersCourt] = useState<any>([])

  const handlePhotographerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setphotgrapherChecked(e.target.checked)
  }
  const handleSurveyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyChecked(e.target.checked)
  }
  const initialValues = {
    eventName: '',
    eventType: 'conference',
    eventStatus: 'upcoming',
    gender: 'female',
    ageGroup: '18-25',
    court: 'court 1',
    participants: '',
    paymentStatus: 'Pending',
    amount: '',
    averagePayment: '',
    food: 'Online',
    description: '',
    hours: '1-2',
    contactPerson: '',
    contactNumber: '',
    contactEmail: '',
    foundLead: '',
    surveyQuestion: '',
    remark: '',
    noOfWrokers: '',
  }
  const eventTypeData = [
    {
      id: 1,
      title: 'Public',
      icon: <Public color={selectedEvent === 1 ? '#DB545D' : '#a5a5a5'} />,
    },
    {
      id: 2,
      title: 'Global',
      icon: <Global color={selectedEvent === 2 ? '#DB545D' : '#a5a5a5'} />,
    },
    {
      id: 3,
      title: 'Local',
      icon: <Local color={selectedEvent === 3 ? '#DB545D' : '#a5a5a5'} />,
    },
  ]
  const paymentType = [
    {
      id: 1,
      title: 'Online',
      icon: <Online color={selectedPaymentType === 1 ? '#DB545D' : '#a5a5a5'} />,
    },
    {
      id: 2,
      title: 'Offline',
      icon: <Offline color={selectedPaymentType === 2 ? '#DB545D' : '#a5a5a5'} />,
    },
    {
      id: 3,
      title: 'Free',
      icon: <Free color={selectedPaymentType === 3 ? '#DB545D' : '#a5a5a5'} />,
    },
  ]
  const hours = [
    {
      id: 1,
      title: '1-2',
    },
    {
      id: 2,
      title: '2-3',
    },
    {
      id: 3,
      title: '3-4',
    },
    {
      id: 4,
      title: '4+',
    },
  ]

  return (
    <Container className="m-0 p-0">
      <Formik
        initialValues={initialValues}
        validationSchema={addEventValidationSchema}
        onSubmit={(values, {setSubmitting}) => {
          handleAddEvent({
            ...values,
            selectedEvent,
            selectedPaymentType,
            startDate,
            fromTime,
            toTime,
            selectedHours,
          })
          setSubmitting(false)
        }}
      >
        {({handleSubmit, handleChange, values, errors, touched, isValid}) => {
          const isFormValid = Object.values(values).every((value) => Boolean(value)) && isValid

          return (
            <Form onSubmit={handleSubmit} className="w-100">
              <Form.Group controlId="formBasicEventName">
                <Form.Label className="custo-label">{t('eventName')}</Form.Label>
                <Form.Control
                  type="text"
                  name="eventName"
                  placeholder={t('eventNameEg')}
                  value={values.eventName}
                  onChange={handleChange}
                  isInvalid={!!errors.eventName && touched.eventName}
                  className="custom-input"
                />
                <Form.Control.Feedback type="invalid">
                  {`${t('eventName')} ${t(errors?.eventName || '')}`}
                </Form.Control.Feedback>
              </Form.Group>
              <Spacer size={8} />
              <Form.Label className="custo-label">{t('eventType')}</Form.Label>
              <br />
              <Selection
                data={eventTypeData}
                selectedId={selectedEvent}
                setSelectedId={setSelectedEvent}
              />
              <Spacer size={8} />
              <div className="d-flex flex-row justify-content-between align-items-center gap-3">
                <Form.Group controlId="formBasicEventType" className="w-100">
                  <Form.Label className="custo-label">{t('eventType')}</Form.Label>
                  <div className="custom-select-container">
                    <Form.Control
                      as="select"
                      name="eventType"
                      value={values.eventType}
                      onChange={handleChange}
                      isInvalid={!!errors.eventType && touched.eventType}
                      className="custom-input"
                    >
                      <option value="conference">Private</option>
                      <option value="workshop">Public</option>
                    </Form.Control>
                    <div className="arrow-down-icon">
                      <ArrowDown />
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {`${t('eventType')} ${t(errors?.eventType || '')}`}
                  </Form.Control.Feedback>
                  <Spacer size={8} />
                </Form.Group>

                <Form.Group controlId="formBasicEventStatus" className="w-100">
                  <Form.Label className="custo-label">{t('eventStatus')}</Form.Label>
                  <div className="custom-select-container">
                    <Form.Control
                      as="select"
                      name="eventStatus"
                      value={values.eventStatus}
                      onChange={handleChange}
                      isInvalid={!!errors.eventStatus && touched.eventStatus}
                      className="custom-input"
                    >
                      <option value="upcoming">Contract</option>
                      <option value="ongoing">Out of Contract</option>
                    </Form.Control>
                    <div className="arrow-down-icon">
                      <ArrowDown />
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {`${t('eventStatus')} ${t(errors?.eventStatus || '')}`}
                  </Form.Control.Feedback>
                  <Spacer size={8} />
                </Form.Group>
              </div>
              <div className="d-flex flex-row justify-content-around align-items-center">
                <div className="w-50">
                  <Form.Label className="custo-label">{t('date')}</Form.Label>
                </div>
                <div className="w-50">
                  <Form.Label className="custo-label">{t('time')}</Form.Label>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="custom-date-select-container">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="date-picker-input w-100 date-picker border-0 p-0"
                    placeholderText={t('dateEg')}
                  />
                  <div className="arrow-down-icon">
                    <Date />
                  </div>
                </div>
                <div className="w-50">
                  <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                    <div className="custom-time-select-container">
                      <DatePicker
                        selected={fromTime}
                        onChange={(time: Date) => setFromTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                        placeholderText="From"
                        className="time-picker  w-100 border-0"
                      />
                    </div>
                    <div className="horizontal-line" />
                    <div className="custom-time-select-container">
                      <DatePicker
                        selected={toTime}
                        onChange={(date: any) => setToTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="HH:mm"
                        placeholderText="To"
                        className="time-picker  w-100 border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Spacer size={12} />
              <div className="d-flex flex-row justify-content-between align-items-center gap-3">
                <Form.Group controlId="formBasicGender" className="w-100">
                  <Form.Label className="custo-label">{t('gender')}</Form.Label>
                  <div className="custom-select-container">
                    <Form.Control
                      as="select"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      isInvalid={!!errors.gender && touched.gender}
                      className="custom-input"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </Form.Control>
                    <div className="arrow-down-icon">
                      <ArrowDown />
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {`${t('gender')} ${t(errors?.gender || '')}`}
                  </Form.Control.Feedback>
                  <Spacer size={8} />
                </Form.Group>

                <Form.Group controlId="formBasicAgeGroup" className="w-100">
                  <Form.Label className="custo-label">{t('ageGroup')}</Form.Label>
                  <div className="custom-select-container">
                    <Form.Control
                      as="select"
                      name="ageGroup"
                      value={values.ageGroup}
                      onChange={handleChange}
                      isInvalid={!!errors.ageGroup && touched.ageGroup}
                      className="custom-input"
                    >
                      <option value="18-25">18-20</option>
                      <option value="26-35">16-18</option>
                      <option value="36-45">20-40</option>
                      <option value="46+">40+</option>
                    </Form.Control>
                    <div className="arrow-down-icon">
                      <ArrowDown />
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {`${t('ageGroup')} ${t(errors?.ageGroup || '')}`}
                  </Form.Control.Feedback>
                  <Spacer size={12} />
                </Form.Group>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center gap-3">
                <Form.Group controlId="formBasicGender" className="w-100">
                  <Form.Label className="custo-label">{t('participants')}</Form.Label>
                  <div className="custom-select-container">
                    <Form.Control
                      type="text"
                      name="participants"
                      placeholder={`${t('codeEg')}`}
                      value={values.participants}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      isInvalid={!!errors.court && touched.court}
                      className={`custom-input`}
                    />
                    <div className="arrow-down-icon">
                      <ArrowDown />
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {`${t('gender')} ${t(errors?.gender || '')}`}
                  </Form.Control.Feedback>
                  <Spacer size={8} />
                </Form.Group>

                <Form.Group controlId="formBasicAgeGroup" className="w-100">
                  <Form.Label className="custo-label">{t('court')}</Form.Label>
                  <div className="custom-select-container">
                    <Form.Control
                      as="select"
                      name="court"
                      value={values.court}
                      onChange={handleChange}
                      isInvalid={!!errors.court && touched.court}
                      className="custom-input"
                    >
                      <option value="18-25">court 1</option>
                      <option value="26-35">court 2</option>
                      <option value="36-45">court 3</option>
                      <option value="46+">court 4</option>
                    </Form.Control>
                    <div className="arrow-down-icon">
                      <ArrowDown />
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {`${t('court')} ${t(errors?.court || '')}`}
                  </Form.Control.Feedback>
                  <Spacer size={12} />
                </Form.Group>
              </div>
              {values?.court && (
                <Form.Group controlId="formBasicEventName" className="w-100 custom-form-group">
                  <Form.Label className="custo-label">{t('noOfWrokers')}</Form.Label>
                  <div className="custom-input-container d-flex flex-row justify-content-start align-items-center">
                    <Form.Control
                      type="text"
                      name="noOfWrokers"
                      placeholder={t('noOfWrokers')}
                      value={values.noOfWrokers}
                      onChange={handleChange}
                      isInvalid={!!errors.noOfWrokers && touched.noOfWrokers}
                      className="custom-input"
                    />
                    <p className="court-name">{values.court}</p>
                  </div>
                  <Form.Control.Feedback type="invalid">
                    {`${t('noOfWrokers')} ${t(errors?.noOfWrokers || '')}`}
                  </Form.Control.Feedback>
                </Form.Group>
              )}
              <Form.Label className="custo-label">{t('payment')}</Form.Label>
              <br />
              <Selection
                data={paymentType}
                selectedId={selectedPaymentType}
                setSelectedId={setSelectedPaymentType}
              />
              <Spacer size={12} />
              <Form.Group controlId="formBasicAgeGroup" className="w-100">
                <Form.Label className="custo-label">{t('paymentStatus')}</Form.Label>
                <div className="custom-select-container">
                  <Form.Control
                    as="select"
                    name="paymentStatus"
                    value={values.paymentStatus}
                    onChange={handleChange}
                    isInvalid={!!errors.paymentStatus && touched.paymentStatus}
                    className="custom-input"
                  >
                    <option value="18-25">Paid</option>
                    <option value="26-35">Uncompleted</option>
                  </Form.Control>
                  <div className="arrow-down-icon">
                    <ArrowDown />
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  {`${t('paymentStatus')} ${t(errors?.paymentStatus || '')}`}
                </Form.Control.Feedback>
                <Spacer size={12} />
              </Form.Group>
              <div className="d-flex flex-row justify-content-between align-items-center gap-3">
                <Form.Group controlId="formBasicEventName" className="w-100">
                  <Form.Label className="custo-label">{t('amount')}</Form.Label>
                  <Form.Control
                    type="text"
                    name="amount"
                    placeholder={t('amount')}
                    value={values.amount}
                    onChange={handleChange}
                    isInvalid={!!errors.amount && touched.amount}
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {`${t('amount')} ${t(errors?.amount || '')}`}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicEventName" className="w-100">
                  <Form.Label className="custo-label">{t('averagePayment')}</Form.Label>
                  <Form.Control
                    type="text"
                    name="averagePayment"
                    placeholder={t('averagePayment')}
                    value={values.amount}
                    onChange={handleChange}
                    isInvalid={!!errors.averagePayment && touched.averagePayment}
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {`${t('averagePayment')} ${t(errors?.averagePayment || '')}`}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <Spacer size={12} />
              <Form.Group controlId="formBasicEventName" className="w-100">
                <Form.Label className="custo-label">{t('food')}</Form.Label>
                <Form.Control
                  as="select"
                  name="food"
                  value={values.food}
                  onChange={handleChange}
                  isInvalid={!!errors.food && touched.food}
                  className="custom-input"
                >
                  <option value="18-25">Snacks</option>
                  <option value="26-35">Combo</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {`${t('food')} ${t(errors?.food || '')}`}
                </Form.Control.Feedback>
              </Form.Group>
              <Spacer size={12} />
              <Form.Group controlId="formBasicEventName" className="w-100">
                <Form.Label className="custo-label">{t('description')}</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder={t('descriptionEg')}
                  value={values.amount}
                  onChange={handleChange}
                  isInvalid={!!errors.description && touched.description}
                  className="custom-input"
                />
                <Form.Control.Feedback type="invalid">
                  {`${t('description')} ${t(errors?.description || '')}`}
                </Form.Control.Feedback>
              </Form.Group>
              <Spacer size={12} />
              <Form.Label className="custo-label">{t('actualHours')}</Form.Label>
              <br />
              <Selection data={hours} selectedId={selectedHours} setSelectedId={setSelectedHours} />
              <Spacer size={8} />
              <Form.Check
                type="checkbox"
                label={t('needPhotographer')}
                checked={photgrapherChecked}
                onChange={handlePhotographerChange}
              />
              <Spacer size={8} />
              {photgrapherChecked && (
                <>
                  <div className="d-flex flex-row justify-content-between align-items-center gap-3">
                    <Form.Group controlId="formBasicEventName" className="w-100">
                      <Form.Label className="custo-label">{t('contactPerson')}</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactPerson"
                        placeholder={t('contactPerson')}
                        value={values.contactPerson}
                        onChange={handleChange}
                        isInvalid={!!errors.contactPerson && touched.contactPerson}
                        className="custom-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        {`${t('contactPerson')} ${t(errors?.contactPerson || '')}`}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicEventName" className="w-100">
                      <Form.Label className="custo-label">{t('contactNumber')}</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactNumber"
                        placeholder={t('contactNumber')}
                        value={values.amount}
                        onChange={handleChange}
                        isInvalid={!!errors.contactNumber && touched.contactNumber}
                        className="custom-input"
                      />
                      <Form.Control.Feedback type="invalid">
                        {`${t('contactNumber')} ${t(errors?.contactNumber || '')}`}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Spacer size={8} />
                  <Form.Group controlId="formBasicEventName" className="w-100">
                    <Form.Label className="custo-label">{t('contactEmail')}</Form.Label>
                    <Form.Control
                      type="text"
                      name="contactEmail"
                      placeholder={t('contactEmail')}
                      value={values.amount}
                      onChange={handleChange}
                      isInvalid={!!errors.contactEmail && touched.contactEmail}
                      className="custom-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {`${t('contactEmail')} ${t(errors?.contactEmail || '')}`}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Spacer size={8} />
                  <Form.Group controlId="formBasicAgeGroup" className="w-100">
                    <Form.Label className="custo-label">{t('foundLead')}</Form.Label>
                    <div className="custom-select-container">
                      <Form.Control
                        as="select"
                        name="foundLead"
                        value={values.foundLead}
                        onChange={handleChange}
                        isInvalid={!!errors.foundLead && touched.foundLead}
                        className="custom-input"
                      >
                        <option value="18-25">LinkedIn</option>
                        <option value="26-35">Google</option>
                      </Form.Control>
                      <div className="arrow-down-icon">
                        <ArrowDown />
                      </div>
                    </div>
                    <Form.Control.Feedback type="invalid">
                      {`${t('foundLead')} ${t(errors?.foundLead || '')}`}
                    </Form.Control.Feedback>
                    <Spacer size={12} />
                  </Form.Group>
                </>
              )}
              <Spacer size={8} />
              <Form.Check
                type="checkbox"
                label={t('sendSurvey')}
                checked={surveyChecked}
                onChange={handleSurveyChange}
              />
              <Spacer size={8} />
              {surveyChecked && (
                <>
                  <Form.Group controlId="formBasicEventName" className="w-100">
                    <Form.Label className="custo-label">{t('surveyQuestion')}</Form.Label>
                    <Form.Control
                      type="text"
                      name="surveyQuestion"
                      placeholder={t('surveyQuestion')}
                      value={values.amount}
                      onChange={handleChange}
                      isInvalid={!!errors.surveyQuestion && touched.surveyQuestion}
                      className="custom-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {`${t('surveyQuestion')} ${t(errors?.surveyQuestion || '')}`}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Spacer size={8} />
                  <Form.Group controlId="formBasicEventName" className="w-100">
                    <Form.Label className="custo-label">{t('remark')}</Form.Label>
                    <Form.Control
                      type="text"
                      name="remark"
                      placeholder={t('remark')}
                      value={values.amount}
                      onChange={handleChange}
                      isInvalid={!!errors.remark && touched.remark}
                      className="custom-input"
                    />
                    <Form.Control.Feedback type="invalid">
                      {`${t('remark')} ${t(errors?.remark || '')}`}
                    </Form.Control.Feedback>
                  </Form.Group>
                </>
              )}

              <LoadingButton
                buttonText={t('addEvent')}
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

export default AddEventForm
