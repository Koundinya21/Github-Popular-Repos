// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <img src={imageUrl} className="repository-img" alt={name} />
      <h1 className="repository-heading">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars-icon"
        />
        <p className="stars-text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars-icon"
        />
        <p className="stars-text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="stars-icon"
        />
        <p className="stars-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
