import { v4 } from "uuid"
import { projects } from "../datasets/datas"

const Projects = () => {

  return (
    <div className="projects">

      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      {projects.map((i) => (
        <div key={v4()} className="row project-card">
          <div className="col-sm-4">
            <img alt="thumb" src={i.thumbnail} />
          </div>
          <div className="col-sm-8">
            <h2>{i.title}</h2>
            <p className="project-description">{i.description}</p>
            {i.tags.map((tag) => (
              <span key={v4()} className="tag-span">{tag}</span>
            ))}
            <div className="project-links"><a href={i.url} target="_blank">View Site</a> <a href={i.github} target="_blank">Github</a></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects