import React , {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <h1>Job board 職缺報報</h1>
        <div className='jobs'>
          <div className='job'>
            <h2>前端工程師</h2>
            <p>前端工程師前端工程師前端工程師前端工程師</p>
            <a href='https://google.com'>我要應徵</a>
          </div>
          <div className='job'>
            <h2>前端工程師</h2>
            <p>前端工程師前端工程師前端工程師前端工程師</p>
            <a href='https://google.com'>我要應徵</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
