import React, {useState} from 'react'
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
    eventType: '',
    eventStatus: '',
    gender: '',
    ageGroup: [],
    court: '',
    participants: undefined,
    paymentStatus: '',
    amount: '',
    averagePayment: '',
    food: '',
    description: '',
    hours: '',
    contactPerson: '',
    contactNumber: '',
    contactEmail: '',
    foundLead: '',
    surveyQuestion: '',
    remark: '',
    noOfWorkers: [],
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
  const handleContainerClick = () => {
    const datePickerInput = document.querySelector('.date-picker-input') as HTMLInputElement | null
    if (datePickerInput) {
      datePickerInput.focus()
    }
  }
  return (
    <Container className="m-0 p-0">
      <Formik
        initialValues={initialValues}
        validationSchema={addEventValidationSchema}
        onSubmit={(values, {setSubmitting}) => {
          handleAddEvent({
            ...values,
            selectedEvent: eventTypeData?.filter((item) => item.id === selectedEvent)[0]?.title,
            selectedPaymentType: paymentType?.filter((item) => item.id === selectedPaymentType)[0]
              ?.title,
            startDate: startDate,
            fromTime: fromTime,
            toTime: toTime,
            selectedHours: hours?.filter((item) => item.id === selectedHours)[0]?.title,
          })
          setSubmitting(false)
        }}
      >
        {({handleSubmit, handleChange, values, errors, touched, isValid, setFieldValue}) => {
          const isFormValid = Object.values(values).every((value) => Boolean(value)) && isValid
          const handleMultipleChange = (event: any) => {
            const {name, value, options} = event.target

            if (name === 'ageGroup' || name === 'food' || name === 'court') {
              const selectedOptions = Array.from(options)
                .filter((option) => (option as HTMLOptionElement).selected)
                .map((option) => (option as HTMLOptionElement).value)

              setFieldValue(name, selectedOptions)
            } else {
              setFieldValue(name, value)
            }
          }
          const handleWorkerChange = (e: any, index: number, court: string) => {
            const updatedWorkers: string[] = [...(values.noOfWorkers || [])]
            updatedWorkers[index] = e.target.value
            setFieldValue('noOfWorkers', updatedWorkers)
          }

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
              <Form.Label className="custo-label">{t('Event format')}</Form.Label>
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
                      <option value="" disabled className="dropdown-placeholder">
                        {t('selectEventType')}
                      </option>
                      <option value="Private">Private</option>
                      <option value="Public">Public</option>
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
                      <option value="" disabled className="dropdown-placeholder">
                        {t('selectSventStatus')}
                      </option>
                      <option value="Contract">Contract</option>
                      <option value="Out of Contract">Out of Contract</option>
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
                      <option value="" disabled className="dropdown-placeholder">
                        {t('selectGender')}
                      </option>
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
                      onChange={(e) => handleMultipleChange(e)}
                      isInvalid={
                        !!(errors.ageGroup && errors.ageGroup.length > 0 && touched.ageGroup)
                      }
                      className="custom-input"
                      multiple
                    >
                      <option value="" disabled className="dropdown-placeholder">
                        {t('selectAgeGroup')}
                      </option>
                      <option value="18-20">18-20</option>
                      <option value="16-18">16-18</option>
                      <option value="20-40">20-40</option>
                      <option value="40+">40+</option>
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
                        const inputValue = e.target.value
                        if (/^\d*$/.test(inputValue)) {
                          setFieldValue('participants', inputValue)
                        }
                      }}
                      isInvalid={!!errors.participants && touched.participants}
                      className={`custom-input`}
                    />
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
                      onChange={(e) => handleMultipleChange(e)}
                      isInvalid={!!errors.court && touched.court}
                      className="custom-input"
                      multiple
                    >
                      <option value="" disabled className="dropdown-placeholder">
                        {t('selectCourt')}
                      </option>
                      <option value="court 1">court 1</option>
                      <option value="court 2">court 2</option>
                      <option value="court 3">court 3</option>
                      <option value="court 4">court 4</option>
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
              {Array.isArray(values.court) &&
                values?.court?.length > 0 &&
                values.court.map((court, index) => (
                  <Form.Group
                    key={index}
                    controlId={`formBasicEventName_${index}`}
                    className="w-100 custom-form-group"
                  >
                    <Form.Label className="custo-label">{t('noOfWorkers')}</Form.Label>
                    <div className="custom-input-container d-flex flex-row justify-content-start align-items-center">
                      <Form.Control
                        type="text"
                        name={`noOfWorkers_${index}`}
                        placeholder={t('noOfWorkers')}
                        value={values.noOfWorkers[index]}
                        onChange={(e) => handleWorkerChange(e, index, court)}
                        isInvalid={!!errors.noOfWorkers?.[index] && touched.noOfWorkers?.[index]} // Validate specific field
                        className="custom-input"
                      />
                      <p className="court-name">{court}</p>
                    </div>
                    <Form.Control.Feedback type="invalid">
                      {`${t('noOfWorkers')} ${t(errors?.noOfWorkers?.[index] || '')}`}
                    </Form.Control.Feedback>
                  </Form.Group>
                ))}

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
                    <option value="" disabled className="dropdown-placeholder">
                      {t('selectPaymentStatus')}
                    </option>
                    <option value="Paid">Paid</option>
                    <option value="Uncompleted">Uncompleted</option>
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
                    onChange={(e) => {
                      const inputValue = e.target.value
                      if (/^\d*$/.test(inputValue)) {
                        setFieldValue('amount', inputValue)
                      }
                    }}
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
                    value={values.averagePayment}
                    onChange={(e) => {
                      const inputValue = e.target.value
                      if (/^\d*$/.test(inputValue)) {
                        setFieldValue('averagePayment', inputValue)
                      }
                    }}
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
                  onChange={(e) => handleMultipleChange(e)}
                  isInvalid={!!errors.food && touched.food}
                  className="custom-input"
                  multiple
                >
                  <option value="" disabled className="dropdown-placeholder">
                    {t('selectFoodOption')}
                  </option>
                  <option value="Snacks">Snacks</option>
                  <option value="Combo">Combo</option>
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
                  value={values.description}
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
                        value={values.contactNumber}
                        onChange={(e) => {
                          const inputValue = e.target.value
                          if (/^\d*$/.test(inputValue)) {
                            setFieldValue('contactNumber', inputValue)
                          }
                        }}
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
                      value={values.contactEmail}
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
                        <option value="" disabled className="dropdown-placeholder">
                          {t('selectLead')}
                        </option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Google">Google</option>
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
                      value={values.surveyQuestion}
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
                      value={values.remark}
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

              <LoadingButton buttonText={t('addEvent')} isSubmitting={loading} isValid={true} />
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}

export default AddEventForm
