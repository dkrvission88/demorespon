
import React from "react";
 import Navbar from "./Pages/Navbar";
 import Hero from "./Pages/Hero";
 import Body from "./Pages/Body";
 
 import SportsEvent from "./Pages/SportsEvent";
 import MiddleSlider from "./Pages/MiddleSlider";
 import Customers from "./Pages/Customers";
 import Counter from "./Pages/Counter";
 import Footer from "./Pages/Footer";
import Repeat from "./Pages/Repeat";
import Venues from "./Pages/Venues";
import Main from "./Pages/Main";
import Training from "./Pages/Training";
import Professional from "./Pages/Professional";

// import Intro from "./component/intro/intro";
// import Skills from "./component/Skills/skills";

function App() {
  return (
    <div className='App'>   
     <Navbar/>
     <Hero/>
    
   
     <Venues/>
     
     <Training/>
     <Professional/>
     <Main/>
    
     <Customers/>
    
     <Counter/>
     <Footer/>
  
     
     
    
      {/*<Intro/>
     <Skills/> */}
   </div>
  );
}

export default App;




























// import React from 'react'
// import { BrowserRouter,Route,routes } from 'react-router-dom'
// import Home from './Pages/Home'
// import ReadUser from './Pages/ReadUser'
// import CreateUser from './Pages/CreateUser'
// import UpdateUser from './Pages/UpdateUser'
// import UpdateUser from './Pages/UpdateUser'
// import SearchUser from './Pages/SearchUser'
// import Header from './comman/Header'
// import footer from './comman/Footer'
// import Menu from './comman/Menu'
// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App




/*import React from 'react'
import Menu from './Menu'
function App() {
  let[data,setdata]=useState(Menu)

  let filtercategory=(cat)=>{
    let fdata=Menu.filter(()=>{
      return cat===process.category
    })
    //console.log(fdata);
    setdata(fdata)
  }
  let mobilefilter={cat,subcat}

  return (
   <>
   
  
   </>
  )
}

export default App*/







/*
import React{useSate} from 'react'
import Menu from './Menu'
function App() {
  return (
    <>
    
    <div className='containe-fluid'></div>
    <div  className='row'>
      <div  className='left col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2 p-2'></div>
      <div  className='left col-sm-0 col-md-8 col-lg-9 col-xl-9 col-xxl-10 p-2'></div>
      {data? <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2"
      {data.map((item)=>{
    
    
    
    return (
      <>
    <div class= "col">
      <div class="card">
        <img src={item.pimage} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-tittle">{item.pname}</h5>
          <p class="card-text"> price=rs.{item.pname}</p>
          <p class="card-text"> category={item.category} subcat={item.subcat}</p>
        </div>
      </div>
    </div>
    
    </>
  )
})}
</div>:<p>no data</p>

export default App
*/






/*import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import News from './News'
import Menu from './Menu'
import Footer from './Footer'
function App() {
  return (
   <>
   <BrowserRouter>
   <Menu/>
   <Routes>
    <Route path='/'element={<Home/>} />
    <Route path='/news'element={<News/>} />
    <Route path='/about'element={<About/>} />
    <Route path='*'element={<h1>404 page not found</h1>} />
   </Routes>
   </BrowserRouter>
    <Footer/> 
   </>
  )
}
export default App
*//*




/*import React from 'react'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import News from './News'
function App() {
  return (
   <>
 
   <BrowserRouter>
   <Link to="/">home</Link>
   <br/>
   <Link to="/about">About</Link>
   <br/>
   <Link to="/news">News</Link>
   <Routes>
    <Route path='/'element={<h1>this is home page</h1>} />
    <Route path='/news'element={<h1>this is News</h1>} />
    <Route path='/about'element={<h1>this is About page</h1>} />
    <Route path='*'element={<h1>404 page not found</h1>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
*/












/*import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<h1>this is home page</h1>} />
    <Route path='/Services'element={<h1>this is servicespage</h1>} />
    <Route path='/About'element={<h1>this is About page</h1>} />
    <Route path='*'element={<h1>404 page not found</h1>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
*/




/*

import React from 'react'
import { FaHome } from "react-icons/fa";
import {Button,nav,navbarDropdown,Navbar,Container} from "react-bootstrap"

function App() {
  return (
    <>
     <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Home</Button>
      <Button variant="link">Link</Button>

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default App



*/




/*

import React from 'react'
import User from './User'

function App() {
  return (
    <>
  <h2>this is function component</h2>
  <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><span className='fa fa-house'>Home</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a classNames="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default App
*/

/*import React,{useState}from 'react'
import User from './User'

function App() {
  let[data,setdata]=useState()
  let result={
    background:"orange"
  }
  let show=()=>{
    setdata(result)
  }
  
  return (
    <>
    <div>App component</div>
    <button onClick={show}>set css</button>
    <hr/>
    <User udata={data}/>
    </>
  )
}

export default App
*/



// import React from 'react'
// import "./style.css"

// function App() {
//   let data={background:"orange"
// }
//   return (
//     <>
//     <h2 className='data'>App component</h2>
//     {/* <h1 style={{data}}>App component</h1> */}
    
//     </>
//   )
// }

// export default App






// /sunday ka miss hai-------14 css apply krna miss hai------------
/*import React,{useEffect, useState} from 'react'

function App() {
  let [no,setno]= useState(1)
  let [val,setval]= useState(50)

  let inc=()=>{
  setno(no+1)
}  

let dec=()=>{
  setval(val-1)
} 
useEffect(()=>{
  console.log("useEffect");
},[val])

return (
    <>
    <h2>number={no}</h2>
    <button onClick={inc}>inc</button>
    <h2>number={val}</h2>
    <button onClick={dec}>dec</button>
    
    </>
  )
}

export default App
*/




/*function App(props) {
  let[ag,setag]=useState(Number(props.age))
  let show=()=>{
    //setag(55)
    setag(ag+1)
  }
  
  return (
    <>
    <h2>function</h2>
    <h2>age with props={props.age}</h2>
    <h2>age with hook={ag}</h2>
    <button onClick={show}>click</button>
    </>
  )
}
*/

//export default App





//function hook
/*import React,{useState} from 'react'

function App() {
  let [data,setdata]=useState('amit')//setstate =updatevalue
  let fun=()=>{
    setdata("sumit")
  }
  return (
    <>
    <h2>App function component</h2>
    <p>name={data}</p>
    <button onClick={fun}>click</button>
    </>
  )
}
export default App
*/


/*import React, { Component } from 'react'

export default class App extends Component {
  cpnstructor(){
    super()
    this.state={
      no:50
    }
  }
  inc=()=>{
    this.setState({no:this.state.no+1})
  }
  dec=()=>{
    this.setState({no:this.state.no-1})
  }
  render() {
    return (
      <>
      <button onClick={this.inc}>+</button>
      <span>{this.state.no}</span>
      <button onClick={this.dec}>-</button>
      </>
    )
  }
}
*/


/*import React, { Component } from 'react'

export default class App extends Component {
  state={
    name:"amit",
    age:20,
    sroll:145
  }
  show=()=>{
    this.setState({name:"sumit",age:45,sroll:150})
  }
  render() {
    return (
      <>
    <h2>App class </h2>
    <h2>Name={this.state.name}</h2>  
    <h2>age={this.state.age}</h2>
    <p>roll no with props={this.props.roll}</p>
    <p>roll no with state={this.state.sroll}</p>
    <button onClick={this.show}>click</button>
      </>
    )
  }
}
*/


/*import React, { Component } from 'react'
 
 export default class App extends Component {

    show=(cat)=>{
        console.log(cat+"-called");
    }
   render() {
     return (
        <>
       <div>App</div>
      { // <button onClick={this.show}>click</button> }
       <button onClick={()=>{this.show('mobile')}}>Mobile</button>
       <button onClick={()=>{this.show('Watch')}}>Watch</button>
       <button onClick={()=>{this.show('laptop')}}>laptop</button>
       </>
     )
   }
 }
 */
 




 /*import React, { Component } from 'react'
 
 export default class App extends Component {

    show=()=>{
        console.log("button")
    }
   render() {
     return (
        <>
       <div>App</div>
       <button onClick={this.show}>click</button>
       </>
     )
   }
 }
 */
 
 /*import React, { Component } from 'react'
 
 export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Arti",
            city:"mathura",
            sroll:this.props.roll
        }
    }
   render() {
     return (
        <>
       <div>App data</div>
       <p> name={this.state.name} city={this.state.city}</p>
       <p>roll no with props={this.props.roll}</p>
       <p>roll no with state={this.state.sroll}</p>
       </>
     )
   }
 }
 */

 // calling by using refrence

/*import React, { Component } from 'react'

export default class App extends Component {
    state={
        name:"rahul",
        age:22,
        sroll:this.props.roll

    }
  render() {
    return (
      <>
      <h2>App class component</h2>
      <p>Ur Name={this.state.name} age={this.state.age}</p>
      <p>Roll No with props={this.props.roll} </p>
      <p>Roll No with state={this.state.sroll} </p>
      </>
    )
  }
}
*/

 
 
 
 //import User from "./User"
 //import Guest from "./Guest"
 /*function App(){
    let data="amit kumar"
    return(
        <>
        <h2>App Function based componnet</h2>
        <hr/>
        <User/>
        <Guest gdata={data}/>
        </>
    )
 }
 export default App;
 */
 
 
 
 
 
 
 
//---1st class
 
 //class based
 /*
import React,{Component} from "react";
import User from "./User";
class App extends Component{
    render(){
        return(
            <>
            <h1>App compoent class</h1>
            <hr/>
            <User name="hari" roll="100"/>
            <hr/>
            <User name="Shyam" roll="100"/>
            <hr/>
            <User name="preeti" roll="100"/>
            </>
        )
    }
 }
 export default App
 */



//Function based

 /*import User from "./User"
 function App(){
    return(
        <>
        <h2>App component function</h2>
        <hr/>
        <User name="rahul" age="20"/>
        <hr/>
        <User name="Hari" age="28"/>
        <hr/>
        <User name="Sumit" age="34"/>
        <hr/>
        <User name="SHyam" age="26"/>
        </>
    )
 }
 export default App
 */
 
 
 
 /*function App(){
    return(
        <>
        <h2>App function</h2></>
    )
 }
 export default App
 */

/*function App(){
    return(
       <>
       <h1>THis is function based componnet</h1>
       <p>sjknwdjfe djdj jdjdd</p>
       <h3>nd jn jksdj  jjde</h3>
       </>
    )
}
export default App
*/






// import React,{Component} from "react";
// class App extends Component {
//     render(){
//         return(
//             <h1>This is class component</h1>
//         )
//     }
// }
// export default App






// function User(){
//     return(
//         <h1>This is first componnet</h1>
//     )
// }
// export default User