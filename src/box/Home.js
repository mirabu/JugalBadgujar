import React,{useState} from 'react';
import "./Home.css";
import Skills from './Skills';
import {db} from './Firebase';
import {motion} from 'framer-motion';


import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BsGeoAlt,BsFillEnvelopeFill,BsPhone, } from 'react-icons/bs';
import {AiFillBehanceCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import Navbarelement from './Navbarelement';

const Home =()=>{

 const [name, setname] = useState(" ");
 const [phone, setphone] = useState(" ");
 const [email, setemail] = useState(" ");
 const [message, setmessage] = useState(" ");

 const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts').add({
      name : name,
      phone: phone,
      email: email,
      message: message,

    })
    .then(()=>{
      alert("Your Response is submitted...✔");
    }).catch((error)=>{
      alert('Error Message..');
    });


    setname("");
    setphone("");
    setemail("");
    setmessage("");
 }




    return(
      <div>
      
      <Router>
        <Navbarelement/>
      </Router>

      <section id="body">
      


       <div className="container" >
       <div className="row">

       <div className="col-md-5  col-sm-5 col-xs-12" id="first">
         <div drag="x"
  dragConstraints={{ left: -100, right: 100 }} id="data">
         <h1>I'm Jugal</h1>
         <h4 id="justab">Freelance Web & Mobile UI/UX Designer
         and  <br />  Code Enthusiast</h4>
         <div id="hiremebutton"><a href="#contactme" smooth={true} duration={1500} className="btn btn-default" id="butto">Hire Me</a></div>
         </div>
        


       </div> 

       <div className="col-md-7 col-sm-7 col-xs-12" id="sec">
         <img src="/images/meandmyself.jpg" alt="" />
         
       </div>

       </div> 
       </div>
       </section>
         
         <section id="aboutme">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-12 " id="divoftitle">
                <h1 id="titleofaboutme">About Me</h1>
                <div id="underline"></div>
                <div id="footballme"><img src="/images/footballme.jpg" alt="" /></div>
                <div className="container">

  
</div>
              </div>

              <div className="col-md-8 col-sm-12 col-12 " id="limit">
                <div className="container"><p id="myabouttext">Ever since I was a kid, it's always been fun with computer playing games and much more but I was different, Drawing has been my passion I still remember when I was sketched and showing to my teacher they always appreciate my work and creativity
after some time when I learned C in my 12 class, believe me, it quite was boring, but we all know every newborn programmer write his first code in life and that is "Hello World" after some practicing, I saw we are just solved puzzles using a programming language and I realize that "Computer has an ability to change the World "
This passion carried me through doing engineering in computer science
from the University Of Pune, <br /> there so many resources available I learned dozens of subject and some programming languages, and I found every subject is remotely related to software development but my interest was something else
I always being an artist so choose UI/UX development and I know I can make
more user-friendly design and give to the new way of my creativity 

As an Engineering Graduate, I know my responsibility for the world I can help out people with my knowledge and try to reduce their stress and give them a new perspective, and I don't know how can I achieve that but I always
been passionate about it and try to make a world better place
</p></div>




              </div>     
             

            </div>
          </div> 
         </section>


         <section id="mygallery">
        <div className="container">
        <div className="col-12" id="works">
            <h1>Services</h1>
            <div id="workunderline3"></div>
            <div id="slogenforwork"><h4>"When we strive to become better than we are, everything around us becomes better too"</h4></div>
          </div>
        </div>

        

        <div className="container">
          <div className='row'>
            <div className='col-12 col-md-8 col-sm-8'>
              <div className="container" id="projectsectionservice">
               <div className="ecommerceservice">
                 <h2>Web Developer</h2>
                 <p>We don't just build websites, we build websites that SELLS</p>
               </div>
 
               <div className="MachineLearningservice">
                 <h2>Web Designer</h2>
                 <p>Thise Things aren’t always #000000 and #FFFFFF</p>
               </div>

               <div className="psddesignservice">
                 <h2>UI/UX Designer</h2>
                 <p>How do I explain what I do at a party? <br /> The short version is that I say I humanize technology</p>
               </div>

               <div className="DataAnalysisservice">
                 <h2>Data Scientist</h2>
                 <p>Data is a precious thing and will last longer than the systems themselves </p>
               </div>






              </div>
            </div>

            <div className="col-12 col-md-4 col-sm-4" id="astroservice">
              <strong>Services</strong>
            </div>

          </div>

          </div>

         </section> 


         <section id="myprojects">
         <div className="container">
          <div className="col-12" id="works">
            <h1>Latest Works</h1>
            <div id="workunderline"></div>
            <div id="slogenforwork"><h4>"When we strive to become better than we are, everything around us becomes better too"</h4></div>
          </div>

          <div className="container">
          <div className='row'>
            <div className="col-12 col-md-4 col-sm-4" id="astro">
              <strong>Projects</strong>
            </div>

            <div className='col-12 col-md-8 col-sm-8'>
              <div className="container" id="projectsection">
               <div className="ecommerce">
                 <h2>Bicycle Store web site</h2>
                 <p>Simple Bicycle store where customer can buy top brand bicycle</p>
               </div>
 
               <div className="MachineLearning">
                 <h2>House Price Prediction</h2>
                 <p>That is a very simple project I've done in this project <br /> I've just predict the price of the house using linear regression algorithm</p>
               </div>

               <div className="psddesign">
                 <h2>Mockup design</h2>
                 <p>In there ive maked website Mockup for freebies photoshop website</p>
               </div>

               <div className="DataAnalysis">
                 <h2>Data visualization</h2>
                 <p>In this project I've predict the heart disease rate and analyse and visualize <br /> using pandas and matplotlib & Tableau </p>
               </div>






              </div>
            </div>



          </div>

          </div>


        </div>
         </section>

         <section id="myskills">
         <div className="col-12" id="works">
            <h1>Skills</h1>
            <div id="workunderline2"></div>
            <div id="slogenforwork"><h4>"All skills are perfected through the process of failure"</h4></div>
          </div>

          <div className="container"  id="skillslinks">
          <Router>
          <ul>
            <Link to="/" id="linko" className="btn btn-default btn-success">Skills</Link>
            
          </ul>

          <Switch>
		      <Route path="/" component={Skills}/>
				  
	        </Switch>

          </Router>
          
          
          
          </div>


         </section>

        




        

         <section id="contactme">


           <div className="container-fluid">
             <div className="row">
               <div className="col-12 col-md-4 col-sm-4" id="inform">
                <div id="contactmedivarea">
                 <strong>Contact Me</strong>
                 <div className="container-fluid" id="boatfill">
                   <p> <BsGeoAlt/>Shindkheda,Dhule</p>
                   <p><BsFillEnvelopeFill/>badgujarjugal898@gmail.com</p>
                   <p><BsPhone/>+918550926397</p>
                   <br /><br />
                 </div>
                 <strong>Follow Me</strong>
                 <div id="social">
                 <a href="https://www.instagram.com/jugalbadgujar2/"><img src="images/insta.png" alt="" id="socialmedia" /></a>
                 <a href="https://github.com/mirabu"><img src="images/github.png" alt="" id="socialmedia" /></a>
                 <a href="linkedin.com/in/jugal-badgujar-2296b7165/"><img src="images/linkedin.png" alt="" id="socialmedia" /></a>
                 <a href="https://www.behance.net/jugalbadgujar"><img src="images/behance.png" alt="" id="socialmedia" /></a>
                 </div>
               </div>
               </div>

               <div className="col-12 col-md-8 col-sm-8">
                <form onSubmit={handleSubmit}>
                <div  id="nameandtext">
                  <label htmlFor="" id='titleo'>Name</label><br />
                  <input type="text" className='form-control'  id="inputboxname" placeholder="Full Name" value={name}
                  onChange={(e)=>setname(e.target.value)} />   
                </div><br />
                 
                <div id="emailandphone" className='row'>
                <div className="col col-md-6 col-sm-6">
                <label htmlFor="" id='titleo'>Phone</label><br />
                  <input type="text" className='form-control' id="inputbox"  placeholder="PhoneNumber" value={phone}
                  onChange={(e)=>setphone(e.target.value)} />   
                  </div>  

                  <div className="col col-md-6 col-sm-6">
                <label htmlFor="" id='titleo'>Email</label><br />
                  <input type="text" className='form-control' id="inputbox"  placeholder="email"   value={email}
                  onChange={(e)=>setemail(e.target.value)}  />   
                  </div> 
                </div>
                <br />
                <div id="nameandtext">
                  <label htmlFor="" id='titleo'>Your Message</label><br />
                  <textarea class="form-control" id="textAreaExample1" rows="4" placeholder="something for me...." value={message}
                  onChange={(e)=>setmessage(e.target.value)}></textarea>
                </div> 
                 <br />
                 <div id='buttono'>
                   <button className="btn" id="sendbutton" type='submit'>Send Message</button>
                 </div>


                </form>
                 
               </div>
             </div>
           </div>
         </section>

         <section className="footer">
         <div id="conttent" className="col-4  offset-4">
         <div id="logofoot">
           <h1>J.</h1>
         </div>

         <div id="hiremetag">
           <p>Have a Project on Mind?</p>
           <a href="" id="sendbutton"  className="btn">Hire Me</a>
         </div>
          <br />
          <div id="socialiconss">
          <div id="instagramm"><AiFillInstagram  size="3x"/></div>
          <div id="linkedinn"><AiFillLinkedin  size="3x"/></div>
          <div id="githubb"><AiFillGithub  size="3x"/></div>
          <div id="behancee"><AiFillBehanceCircle  size="3x"/></div>
          </div>

         </div>
          



        <div id="footerfooter">
          <p>copyright@2021 jugal badgujar</p>
        </div>
         </section>

        
      </div>
    );
}

export default Home;