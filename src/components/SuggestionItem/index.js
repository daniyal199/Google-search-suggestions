// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestions = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-items">
      <p className="suggestion-text">{suggestion}</p>
      <button className="arrow-btn" type="button" onClick={onClickSuggestions}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
