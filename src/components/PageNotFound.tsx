import React from 'react'
import {useTranslation} from 'react-i18next'

const PageNotFound = () => {
  const {t} = useTranslation()
  return <div>{t('404')}</div>
}
export default PageNotFound
