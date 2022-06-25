const team = document.getElementById("team");
const sections = Array.from(document.getElementsByClassName("section"));
const links = document.getElementById("choice").children;

Array.from(links).forEach((link, index) =>{
    link.addEventListener("click", ()=> {
        sections.forEach((section, sectionIndex) =>  section.classList.toggle("hide", sectionIndex!==index));
    });
})

let names=["Johhny Bravo","Jack Sparrow","Samurai Jack","Ace Ventura","Kevin McCallister","Mary Poppins","Indiana Jones","James Bond","Dorothy Gale","Forrest Gump","Bonnie Parker"]
   for(i=0;i<names.length;i++){
    team.innerHTML+=
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