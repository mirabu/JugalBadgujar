import React from 'react';
import {Link} from 'react-scroll';
import "./Navbar.css";
import {Nav,Navbar} from 'react-bootstrap';





class Navbarelement extends React.Component {

   constructor(){
     super();
     this.state ={
       show: true,
       scrollPos: 0 
       

     };
   }


   componentDidMount(){
     window.addEventListener('scroll',this.handleScroll)
   }
   componentWillUnmount(){
     window.removeEventListener('scroll',this.handleScroll)
   }
   handleScroll=()=>{
       console.log(document.body.getBoundingClientRect());
       this.setState({
         scrollPos: document.body.getBoundingClientRect().top,
         show:document.body.getBoundingClientRect().top>this.scrollPos
       });
   }




  
  render(){
    console.log(this.state);
    return(
      <div className="container-fluid" id="divmainnav">
      <Navbar fixed="top" />
        <Navbar >
          <Navbar.Brand id="logo">Jugal</Navbar.Brand>
           <Navbar.Toggle/>
           <Navbar.Collapse>
           <Nav className="justify-content-end" style={{ width: "100%" }} id="navbox">
           <Link to="body" id="navitem" smooth={true} duration={1500}>Home</Link>
           <Link to="aboutme" id="navitem" smooth={true} duration={1500}>About</Link>
           <Link to="mygallery" id="navitem" smooth={true} duration={1500}>Service</Link>
           <Link to="myprojects" id="navitem" smooth={true} duration={1500}>Work</Link>
           <Link to="contactme" id="navitem" smooth={true} duration={1500}>Contact</Link>
          </Nav>

           </Navbar.Collapse>

          
        </Navbar>
      </div>
    );}
}
export default Navbarelement;