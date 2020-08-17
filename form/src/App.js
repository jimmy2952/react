import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      review: ''
    }
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const {name, address, review} = this.state
      return (
          <div className="App">
              <form onSubmit={this.handleSubmit}>
                  <div>
                      姓名<input name="name" type="text" value={name} onChange={this.handleInputChange} />
                  </div>
                  <div>
                      地址<input name="address" type="text" value={address} onChange={this.handleInputChange}/>
                  </div>
                  <div>
                      心得<textarea name="review" value={review} onChange={this.handleInputChange}/>
                  </div>
                  <div>
                      性別
                      <input id="gender_male" name="gender" type="radio" value="male" />
                      <label htmlFor="gender_male">男</label>
                      <input id="gender_female" name="gender" type="radio" value="female" />
                      <label htmlFor="gender_female">女</label>
                      <input id="gender_other" name="gender" type="radio" value="other" />
                      <label htmlFor="gender_other">其他</label>
                  </div>
                  <div>
                    縣市：<select name='city'>
                      <option value="taipei">台北市</option>
                      <option value="new_taipei">新北市</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                      是否吃素<input type="checkbox" value="yes" name="is_veg"/>
                  </div>
                  <div>
                      <input type="submit" />
                  </div>
              </form>
          </div>
      )
  }
} 

export default App