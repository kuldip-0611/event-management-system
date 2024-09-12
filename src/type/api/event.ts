export interface Court {
  name: string
  noOfWorkers: string
}

export interface AddEventParams {
  eventName?: string
  eventFormat?: string
  type?: string
  status?: string
  payment?: string
  hours?: string
  date?: string
  fromTime?: string
  toTime?: string
  noOfParticipants?: string
  court?: Court[]
  totalWorkers?: string
  totalWorkerHours?: string
  employeeSalary?: number
  amount?: string
  gender?: string
  ageGroup?: string[]
  paymentStatus?: string
  food?: string[]
  foodCost?: string
  description?: string
  contactPerson?: string
  contactNumber?: string
  contactEmail?: string
  needPhotographer?: boolean
  sendSurvey?: boolean
  surveyQuestion?: string
  adminRemark?: string
  lead?: string
  eventType: any
}
