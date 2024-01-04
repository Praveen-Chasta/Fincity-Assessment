import './index.css'

const ProjectList = props => {
  const {description} = props

  if (!description) {
    return <p className="no-project">No project information available.</p>
  }

  const {projectName, projectLink, projectDetails} = description

  const randomImages = [
    'https://picsum.photos/id/7/367/267',
    'https://picsum.photos/id/29/367/267',
    'https://picsum.photos/id/16/367/267',
    'https://picsum.photos/id/28/367/267',
  ]

  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)]

  return (
    <>
      <div className="project-container">
        <div className="project-list-cart">
          <div className="project-details">
            <h1 className="project-heading">{projectName}</h1>
            <p className="project-para">{projectDetails}</p>
            <button type="button" className="project-link-button">
              {projectLink}
            </button>
          </div>
          <div className="img-container">
            <img src={randomImage} alt="Random" className="random-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectList
