console.log("About us js")
const about=document.getElementById("about")
const meetTeam=document.getElementById("meet")
const contact=document.getElementById("contact")
const wraper=document.getElementById("wraper")


let names=["Johhny Bravo","Jack Sparrow","Samurai Jack","Ace Ventura","Kevin McCallister","Mary Poppins","Indiana Jones","James Bond","Dorothy Gale","Forrest Gump","Bonnie Parker"]

meetTeam.addEventListener("click",() => {
   wraper.innerHTML=""
   for(i=0;i<names.length;i++){
   wraper.innerHTML+=
  `
   <div class="team">
                <img src="../../assets/images/image-avatar.png" alt="">
                <div class="name">${names[i]}</div>
                <div class="design">Web Developer</div>
                <div class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non esse, maiores
                    exercitationem
                    facere pariatur nulla tenetur temporibus, molestias odio officia voluptates commodi expedita
                    dignissimos
                    eveniet. Itaque sunt officiis corrupti? Dolore.</div>
                <div class="social">
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-github"></i></a>
                </div>
            </div>`
        
   }
   })

   contact.addEventListener("click",() => {
   wraper.innerHTML=
      `<div class="container">
   <!--first part-->
   <div class="form">
     <div class="contact-info">
       <h3 class="title">Let's get in touch</h3>
       <p class="text"> Do not hesitate to contact us </p>

       <div class="info">
         <div class="information">
           <img src="../../assets/images/location.png" class="icon" alt="" />
           <p>11th October St. 33a, Skopje 1000 MK</p>
         </div>
         <div class="information">
           <img src="../../assets/images/email.png" class="icon" alt="" />
           <p>sedcteam@hotmail.com</p>
         </div>
         <div class="information">
           <img src="../../assets/images/mobile.png" class="icon" alt="" />
           <p>088-234-789</p>
         </div>
       </div>

       <div class="social-media">
         <p>Connect with us </p>
         <div class="social-icons">
           <a href="#">
             <i class="fab fa-facebook-f"></i>
           </a>
           <a href="#">
             <i class="fab fa-twitter"></i>
           </a>
           <a href="#">
             <i class="fab fa-instagram"></i>
           </a>
           <a href="#">
             <i class="fab fa-linkedin-in"></i>
           </a>
         </div>
       </div>
     </div>
<!--second part-->
     <div class="contact-form">  <form action="about-us.html" autocomplete="off">
         <h3 class="title">Contact us</h3>
         <div class="input-container">
           <input type="text" name="name" class="input" placeholder="Username"/>
           <label for="" ></label>
         </div>
         <div class="input-container">
           <input type="email" name="email" class="input" placeholder="Email" />
           <label for=""></label>
         </div>
         <div class="input-container">
           <input type="tel" name="phone" class="input" placeholder="Phone"/>
           <label for=""></label>
         </div>
         <div class="input-container textarea">
           <textarea name="message" class="input" placeholder="Message"></textarea>
           <label for=""></label>
         </div>
         <input type="submit" value="Send" class="btn" />
       </form>
     </div>
   </div>
 </div>`

   })

 about.addEventListener("click",() => {
    wraper.innerHTML=""
    wraper.innerHTML=
    `<div class="section-container">

    <div class="columns image">
        <img src="../../assets/images/team.jpg" alt="team" width="400px" height="300px">
    </div>
    <div class="columns content">
        <div class="content-container">
            <h2>Who we are</h2>
            <p>
                Everyone says it, but in our case it is true: our team is the secret to our success.
                Each of our employees is amazing in their own right, but together we make our job easier.
                Our team is talented group with a great results for our clients, as well as , is a fun,
                challenging place to work and develop a career
                We are very proud of the team and we have always been an team defined with talented people
                with a shared vision and passion for helping us to be the best we can be for our clients.
            </p>

        </div>
    </div>
</div>
<div class="section-container">
    <div class="columns content">
        <div class="content-container">
            <h2>What we do ?</h2>
            <p>
                Front-end web development is the development of the graphical user interface of a website,
                through the use of HTML, CSS, and JavaScript,
                so that users can view and interact with that website.
                We created website for news ,the name is newstopia. Our team count eleven members and the result is
                exelent.
            </p>
        </div>
    </div>
    <div class="columns image">
        <img src="../../assets/images/great-team.jpg" alt="team" width="400px" height="300px">
    </div>
</div>
</div>`
 })