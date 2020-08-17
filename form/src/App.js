import React, { Component} from 'react';
import './App.css';

const CheckBox = ({value, label, checked, onChange}) => (
  <span>
    <input
      type="checkbox"
      value={value}
      name="time"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </span>
)

const Input = ({name, label, value, onChange}) => (
  <div>
    {label}：<input name={name} type="text" value={value} onChange={onChange} />
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      review: '',
      gender: 'male',
      city: 'taipei',
      time: ['1']
    }
  }

  handleSubmit = (e) => {
    console.log(this.state)
    this.setState({
      name: '',
      address: '',
      review: '',
      gender: 'male',
      city: 'taipei',
      time: ['1']
    })
    e.preventDefault()
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckboxChange = (e) => {
    const {time} = this.state
    const value = e.target.value
    const newTime = time.filter(item => item !== value)
    if (newTime.length !== time.length) {
      this.setState({
        time: newTime
      })
    } else {
      this.setState({
        time: [...time, value]
      })
    }
  }

  render () {
    const {name, address, review, city, gender, time} = this.state
      return (
          <div className="App">
              <form onSubmit={this.handleSubmit}>
                  <Input name="name" value={name} label='姓名' onChange={this.handleInputChange} />
                  <Input name="address" value={address} label='地址' onChange={this.handleInputChange} />
                  <div>
                      心得<textarea name="review" value={review} onChange={this.handleInputChange}/>
                  </div>
                  <div>
                      性別
                      <input id="gender_male" checked={gender === 'male'} name="gender" type="radio" value="male" onChange={this.handleInputChange} />
                      <label htmlFor="gender_male">男</label>
                      <input id="gender_female" checked={gender === 'female'} name="gender" type="radio" value="female" onChange={this.handleInputChange} />
                      <label htmlFor="gender_female">女</label>
                      <input id="gender_other" checked={gender === 'other'} name="gender" type="radio" value="other" onChange={this.handleInputChange} />
                      <label htmlFor="gender_other">其他</label>
                  </div>
                  <div>
                    縣市：<select name='city' value={city} onChange={this.handleInputChange}>
                      <option value="taipei">台北市</option>
                      <option value="new_taipei">新北市</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                      有空的時間：
                      <CheckBox value={1} label='星期一' checked={time.indexOf('1') >= 0} onChange={this.handleCheckboxChange} />
                      <CheckBox value={2} label='星期二' checked={time.indexOf('2') >= 0} onChange={this.handleCheckboxChange} />
                      <CheckBox value={3} label='星期三' checked={time.indexOf('3') >= 0} onChange={this.handleCheckboxChange} />
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