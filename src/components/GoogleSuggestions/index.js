// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onUpdateValue = value => {
    this.setState({searchInput: value})
  }
  onChageSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const serachResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestion-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google-logo"
            className="logo-image"
          />
          <div className="search-input-suggestion-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                className="search-input"
                onChange={this.onChageSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestion-list">
              {serachResults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionDetails={eachItem}
                  updateSearchInput={this.onUpdateValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
