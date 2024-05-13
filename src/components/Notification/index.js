// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props

  console.log(children)

  return (
    <div className="notification-container">
      <div className="notification-message">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
