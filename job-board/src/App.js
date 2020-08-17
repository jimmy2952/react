import React , {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  componentDidMount(){
    fetch('http://www.mocky.io/v2/5c18f4ac2f00002a00af130a')
      .then(res => res.json())
      .then(data => {
        this.setState({
          jobs: data
        })
      })
  }

  render() {
    const {jobs} = this.state
    return (
      <div className="App">
        <h1>Job board 職缺報報</h1>
        <div className='jobs'>
          {
            jobs.map(job => (
              <div className='job'>
                <h2>{job.title}</h2>
                <p className='job__content'>{job.content}</p>
                <p>薪水範圍：{job.salary}</p>
                <a href={job.link} target='_blank'>我要應徵</a>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default App;
