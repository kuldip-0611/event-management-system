import React from 'react'
import {Button, Spinner} from 'react-bootstrap'
import {useTranslation} from 'react-i18next'
import {ButtonProps} from './button.props'

const LoadingButton: React.FC<ButtonProps> = ({
  isSubmitting,
  buttonText,
  isValid,
  isCurvedButton,
}) => {
  const {t} = useTranslation()
  return (
    <Button
      type="submit"
      className={
        isCurvedButton
          ? `adding-button border-0 pt-3 pb-3  rounded-5 sign-in-btn${
              !isValid ? '-invalid-btn' : ''
            }`
          : `w-100 sign-in-btn${!isValid ? '-invalid-btn' : ''}`
      }
      disabled={isSubmitting}
    >
      {isSubmitting ? <Spinner animation="border" size="sm" /> : t(buttonText)}
    </Button>
  )
}

export default LoadingButton
