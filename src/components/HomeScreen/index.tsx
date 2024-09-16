import React, {useState} from 'react'
import ScreenTemplate from '../ScreenTemplate/ScreenTemplate'
import {eventsArray, eventsData, HeaderEvents} from '../../utils/constants'
import {Button} from 'react-bootstrap'
import {EventsProps} from './homeScreen.props'
import './homeScreen.css'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import Phone from '../../assets/icons/Phone'
import Spacer from '../Spacer/Spacer'
import More from '../../assets/icons/More'
import PaginationComponent from '../Pagination/Pagination'

const HomeScreen = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const [active, setActive] = useState(1)
  const [pageActive, setPageActive] = useState(1)
  const [eventsActive, setEventsActive] = useState(1)
  let totalPage = 10

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPage) {
      setPageActive(page)
    }
  }

  return (
    <ScreenTemplate>
      <div className="home-component d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <Spacer size={32} />
              {HeaderEvents.map((item: EventsProps, index: number) => (
                <Button
                  key={index}
                  className="bg-transparent border-0 p-0"
                  style={{boxShadow: 'none'}}
                  onClick={() => setActive(item.id)}
                >
                  <p className={`management-text ${active === item.id ? 'active' : ''}`}>
                    {item.title}
                  </p>
                </Button>
              ))}
            </div>
            <Spacer size={16} />
            <div className="d-flex flex-row justify-content-end align-items-center gap-3">
              <Button className="download-excel-btn bg-transparent p-0 rounded-3">
                <p className="download-excel-btn-text">{t('downloadExcel')}</p>
              </Button>
              <Button
                className="create-event-btn rounded-3 border-0 p-0 "
                onClick={() => navigate('/add-event')}
              >
                <p className="create-event-btn-text">{t('createEvent')}</p>
              </Button>
            </div>
          </div>
          <Spacer size={16} />

          {eventsArray.map((item: EventsProps, index: number) => (
            <Button
              key={index}
              className="bg-transparent border-0 p-0"
              style={{boxShadow: 'none'}}
              onClick={() => setEventsActive(item.id)}
            >
              <p className={`${eventsActive === item.id ? 'events-text-active' : 'events-text'}`}>
                {item.title}
              </p>
            </Button>
          ))}
          <Spacer size={32} />
          <Table className="no-borders-table">
            <thead>
              <tr>
                <th className="table-head-text">{t('name')}</th>
                <th className="table-head-text">{t('date')}</th>
                <th className="table-head-text">{t('time')}</th>
                <th className="table-head-text">{t('contactPerson')}</th>
                <th className="table-head-text">{t('participantsText')}</th>
                <th className="table-head-text">{t('format')}</th>
                <th className="table-head-text">{t('court')}</th>
                <th className="table-head-text">{t('paymentStatus')}</th>
                <th className="table-head-text">{t('more')}</th>
              </tr>
            </thead>
            <tbody>
              {eventsData.map((item, index) => (
                <tr key={index}>
                  <td className="event-name-text">{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <div className="d-flex flex-row justify-content=start align-items-center gap-3">
                      <Phone />
                      <p>{item.contactPerson}</p>
                    </div>
                  </td>
                  <td>{item.participants}</td>
                  <td>{item.format}</td>
                  <td>{item.court}</td>
                  <td>{item.paymentStatus}</td>
                  <td>
                    <More />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
          <PaginationComponent
            active={pageActive}
            setActive={setPageActive}
            handlePageClick={(page) => {
              handlePageChange(page)
            }}
            totalPage={totalPage}
          />
        </div>
      </div>
    </ScreenTemplate>
  )
}

export default HomeScreen
