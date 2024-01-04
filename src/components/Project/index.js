import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ProjectList from '../ProjectList'
import './index.css'

class Project extends Component {
  state = {
    name: '',
    link: '',
    details: '',
    projectList: [],
  }

  onSubmitProjectDetails = event => {
    event.preventDefault()
    const {name, link, details} = this.state

    const newProject = {
      id: uuidv4(),
      projectName: name,
      projectLink: link,
      projectDetails: details,
    }

    this.setState(prevState => ({
      projectList: [...prevState.projectList, newProject],
      name: '',
      link: '',
      details: '',
    }))
  }

  takeProjectName = event => {
    this.setState({name: event.target.value})
  }

  takeProjectLink = event => {
    this.setState({link: event.target.value})
  }

  takeProjectDetails = event => {
    this.setState({details: event.target.value})
  }

  render() {
    const {projectList} = this.state
    console.log(projectList)
    return (
      <>
        <div className="home-container">
          <h1>Add Project</h1>
          <hr className="hr-line" />
          <form className="form-element" onSubmit={this.onSubmitProjectDetails}>
            <label htmlFor="projectName" className="label-1">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              onChange={this.takeProjectName}
            />
            <label htmlFor="projectLink" className="label-2">
              Project Link
            </label>
            <input
              type="text"
              id="projectLink"
              onChange={this.takeProjectLink}
            />
            <label htmlFor="details" className="label-3">
              Description
            </label>
            <textarea
              id="details"
              name="details"
              rows="4"
              cols="50"
              placeholder="Enter project details..."
              onChange={this.takeProjectDetails}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <ul className="project-ul-list">
          <h1 className="p-heading">Project List</h1>
          <hr className="hr-line" />
          {projectList.map(project => (
            <ProjectList key={project.id} description={project} />
          ))}
        </ul>
      </>
    )
  }
}

export default Project
