// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length
    return (
      <div className="mainBgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calculator-img"
        />
        <div className="text-container">
          <h1 className="heading">
            Calculate the <br /> Letters you enter
          </h1>
          <label htmlFor="labelValue" className="label-text">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the Phrase"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            id="labelValue"
            className="input-styles"
          />

          <p className="para">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
