import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}

  getInput = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {initialDestinationsList} = this.props

    const {search} = this.state

    const searchList = initialDestinationsList.filter(each =>
      each.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="bg">
        <div className="bg-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              onChange={this.getInput}
              value={search}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="icon"
            />
          </div>
          <div>
            <ul className="card-container">
              {searchList.map(each => (
                <DestinationItem key={each.id} item={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
