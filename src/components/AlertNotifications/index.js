// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

import Notification from '../Notification'

const renderInfoMessage = () => (
  <Notification>
    <MdInfo className="icon icon-info" />
    <div className="message-content">
      <h1 className="heading info">Info</h1>
      <p className="description">Anyone on the internet can view these files</p>
    </div>
  </Notification>
)

const renderWarningMessage = () => (
  <Notification>
    <MdWarning className="icon icon-warning" />
    <div className="message-content">
      <h1 className="heading warning">Warning</h1>

      <p className="description">
        Viewers of this file can see comments and suggestions
      </p>
    </div>
  </Notification>
)

const renderErrorMessage = () => (
  <Notification>
    <RiErrorWarningFill className="icon icon-error" />
    <div className="message-content">
      <h1 className="heading error">Error</h1>

      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </div>
  </Notification>
)

const renderSuccessMessage = () => (
  <Notification>
    <AiFillCheckCircle className="icon icon-success" />
    <div className="message-content">
      <h1 className="heading success">Success</h1>

      <p className="description">You can access all the files in the folder</p>
    </div>
  </Notification>
)

const AlertNotification = () => (
  <div className="alert-notification-container">
    <h1 className="main-heading">Alert Notifications</h1>
    {renderSuccessMessage()}
    {renderErrorMessage()}
    {renderWarningMessage()}
    {renderInfoMessage()}
  </div>
)

export default AlertNotification
