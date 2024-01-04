import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import './index.css'

const Contact = () => (
  <>
    <div className="contact">
      <div className="contact-container">
        <RiInstagramFill className="contact-img" />
        <FaLinkedin className="contact-img" />
        <IoIosMail className="contact-img" />
      </div>
      <p className="info-para">
        Feel free to reach out to me via email at{' '}
        <a href="mailto:praveen.chastaa@gmail.com">praveen.chastaa@gmail.com</a>
      </p>
    </div>
  </>
)
export default Contact
