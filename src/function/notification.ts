import {Store, NOTIFICATION_TYPE} from 'react-notifications-component'

interface Notification {
  title: string
  type: NOTIFICATION_TYPE
  message: string
}

export default function showNotification(payload: Notification) {
  Store.addNotification({
    title: payload.title,
    message: payload.message,
    type: payload.type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  })
}
