import {useHistory} from 'react-router-dom'
import './index.css'

const About = () => {
  const history = useHistory()

  const handleButtonClick = () => {
    history.push('/project')
  }

  return (
    <>
      <div className="about-container">
        <div>
          <p className="about-para">UI/UX DESIGNER</p>
          <h1 className="about-heading">
            Hello, my name <br />
            is Praveen Chasta
          </h1>
          <p className="my-details">
            I Completed my B.Tech from skit college. After that I did a one year
            training in jk tyres during jacket tyres I was a ship supervisor .
            When I was in JK Tyres I decided to switch my career from mechanical
            to it so I choose the next wave ccbp 4.0 programme . In this
            programme I learned some technologies like Html ,css, javascript,
            python, sql, node js, and react js I build some websites using these
            technologies in static responsive and dynamic manner apart from it I
            am a district level volleyball player
          </p>
          <div className="button-container">
            <button
              type="button"
              className="project-button"
              onClick={handleButtonClick}
            >
              Project
            </button>
            <button type="button" className="linkedin-button">
              Linkedin
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://www.pfcla.com/hubfs/young-woman-with-flower.png"
            alt="girl-pic"
            className="girl-img"
          />
        </div>
      </div>
    </>
  )
}

export default About
