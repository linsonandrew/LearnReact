// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import lanny from './linson.jpeg';
import "./index.css";
import {App} from './App'
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}
export class Header extends React.Component{
  render(){
    return(
      <header style={headerStyles}>
        <h1>Learn React in 10 days</h1>
        <h2>A.Linson</h2>
      </header>
    )
  }  
}

const Butt=()=>{
  let rnd  = Math.random()
  return rnd
}


// const Even = (props)=>{
//   return(
//     <div className='ele'>{props.num}</div>
//   )
// }

// const Odd = (props)=>{
//   return(
//     <div className='ele'>{props.num}</div>
//   )
// }


const BoxyEle = (props) =>{
  let number = parseInt(props.days);
  let arr = []
  for(let i=0;i<=number ;i++){
    arr.push(i)
  }
  const bulk =arr.map((num)=>{
    if(num%2 === 0)
        return(
          <div className='Even'>
            <div className='ele'>{num}</div>
          </div>
        )
    else{
      return(
          <div className='Odd'>
            <div className='ele'>{num}</div>
          </div>
      )
    }
  })
  return(
    bulk
  )
}

const Boxy =(props) =>  {
  let number  = parseInt(props.days)
  return(
    <div className='container'>
      <BoxyEle days = {number} />
    </div>
  )
}

export const Middle = (props) =>  {
  const skillset  = (props.skills.map((skill) => <li className='midtext'>{skill}</li>))
  
  return(
  <main >
    <p className='midtext'>God Bless!!</p>
    <p className='midtext'>Skills: </p>
    <ul >{skillset}</ul>
    <div>{Butt()}</div>

    <Boxy days = "31" />
    
  </main>
  )
}


export const Img = () => {
  
  return(
    <div className = "linson" >
      <img src={lanny} alt = 'linson'/>
    </div>
  )
}

export const Button = (props) => {
  return(
  <button onClick={props.onClickk} >Hi</button>
  )
}

export const Footer = () => {
  return(
  <footer className="foot" >
    <p>thanks lol!!</p>
  </footer>
  )
}
//count : 1 for day and 2 for night 


//Asignment 

const mountele  = document.getElementById("root")
ReactDOM.render(<App />,mountele)


