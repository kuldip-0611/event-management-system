import React from 'react'
import {ScreenTemplateProps} from './ScreenTemplate.props'
import Logo from '../../assets/icons/Logo'
import {useTranslation} from 'react-i18next'
import './screenTemplate.css'

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({children}) => {
  const {t} = useTranslation()
  return (
    <div className="h-100 ps-3 pe-3">
      <div className="d-flex flex-row justify-content-start align-items-center">
        <Logo />
        <p className="heading-text ps-3">{t('eventManagement')}</p>
      </div>
      {children}
    </div>
  )
}

export default ScreenTemplate
