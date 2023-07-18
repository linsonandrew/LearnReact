import React from 'react'
// import ReactDOM from 'react-dom'
import {Header} from './index.js'
import {Middle} from './index.js'
import {Img} from './index.js'
import {Footer} from './index.js'
import {Button} from './index.js'

const sayHiBack = (what) => (
    alert("Hi Rajesh")
)

export class App extends React.Component{
    state = {
      count : "day",
    }
    render(){
      return(
        <div className={this.state.count}>
        <button className='Mode' onClick={()=>{
          if(this.state.count === "day"){
            this.setState({count : "night",})
          }
          else{
            this.setState({count : "day",})
          }
        }
        }>{this.state.count}</button>
        
        {/* <Button /> */}
        <Header />
        <Middle skills = {['HTML','CSS']}/>
        <Img />
        <Button text = 'Rakesh' onClickk={sayHiBack}/>
        <Footer />
        </div>
      ) 
    }
  }