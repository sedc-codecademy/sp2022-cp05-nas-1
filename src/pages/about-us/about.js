const team = document.getElementById('team');
const sections = Array.from(document.getElementsByClassName('section'));
const links = document.querySelectorAll('[data-link]');

[...links].forEach((link, index) => {
   link.addEventListener('click', () => {
      sections.forEach((section, sectionIndex) => section.classList.toggle('hide', sectionIndex !== index));
   });
});

const teamMembers = [
   {
      Name: 'Andrea Angelova',
      Role: 'Mentor',
      Img: '../../assets/images/andrea.jpg',
      Desc: 'Meet Andrea! An innovative tech mind with 5 years of experience working as a JavaScript developer. Skilled in Angular, React, Node.js and Azure. Passionate about software architecture and cloud computing. Regular attendee & mentor of web developer meetups and hackathons.'
   },

   {
      Name: 'Martina Jovanova',
      Role: "Student",
      Img: '../../assets/images/martinaj.jpg',
      Desc: 'Martina is a hardworking student who is mainly focused on back-end development. Lately, her main hobby is coding, but she also loves cycling and admiring nature, as long as learning something new everyday.'
   },
   {
      Name: 'Anita Nikolovska',
      Role: 'Student',
      Img: '../../assets/images/anita.jpg',
      Desc: 'A creative and ambitious person who is currently a Web Development student. Anita is always open to learn something new. Her free time is spent by listening to music and playing video games as well.'
   },
   {
      Name: 'Martina Vujovska',
      Role: 'Student',
      Img: '../../assets/images/martinav.jpg',
      Desc: 'A creative and enthusiastic Web Development student who is passionate about Arts & Design. Martina enjoys writing, coding, reading mystery novels, going on walks in nature. Latino dance is one of her favorite recreations. However, her main goal at the moment is to become an amazing developer.'
   },
   {
      Name: 'Bojan Trpcevski',
      Role: 'Student',
      Img: '../../assets/images/bojan.jpg',
      Desc: 'An achaeology graduate at the Faculty of Philosophy who is very passionate, hardworking and looks forward to becoming a Web Developer. Everyday, he learns something new and works hard to improve his skills. Bojan loves helping others as well as watching tennis and reading about History and Astronomy.'
   },
   {
      Name: 'David Pavlovski',
      Role: 'Student',
      Img: '../../assets/images/david.jpg',
      Desc: 'A dental laboratory technician that graduated at the Faculty of Stomatology. David is very passionate about playing his guitar. He also likes reading books and gaming. He is a hardworking student that loves to help others and learn something new along the way.'

   },
   {
      Name: 'Stefan Kostoski',
      Role: 'Student',
      Img: '../../assets/images/stefan.jpg',
      Desc: 'A Full-Stack Web Developer passionate about creating application and experiences on the web. Stefan is a lover of electronic dance music. His free time is spent by walking in nature, reading some IT or thriller-action books.'
   },
   {
      Name: 'Vojce Jakovlevski',
      Role: 'Student',
      Img: '../../assets/images/vojce.jpg',
      Desc: 'Vojce is a goal oriented Web Development student who has a soft spot for technology. He graduated at the Ss. Cyril and Methodius University of Skopje, where he studied about finance management. His favorite hobbies are swimming, playing basketball and hiking. Vojce\'s current goal is to develop a career in the IT industry.'
   },
   {
      Name: 'Daniel Kolevski',
      Role: 'Student',
      Img: '../../assets/images/kolevski.jpg',
      Desc: '25 year old Web Development student from Bitola. Graduated engineer at the Faculty of Informatics in Bitola. Passionate about nature and technology. He also really likes cycling on the hills of Pelister.'
   },
   {
      Name: 'Marko Koneski',
      Role: 'Student',
      Img: './img/',
      Desc: 'sfsdfsdfsdfsdfdfsfsfdsfdfsfsdf'
   },
   {
      Name: 'David Karatasev',
      Role: 'Student',
      Img: '../../assets/images/karatashev.jpg',
      Desc: 'A physics student who has a remarkable passion about Astronomy. At the moment, his main goal is to become a Web Developer. David\'s hobbies are learning something new about cars everyday, playing video games on his PC and watching tennis.'
   },
   {
      Name: 'David Prenkov',
      Role: 'Student',
      Img: '../../assets/images/prenkov.jpg',
      Desc: 'A creative web developer, who loves front-end programing. For David\'s hobbies he enjoys playing and watching any kind of sports especially basketball. Watching Movies, TV Series and playing video games are also things that David does in his free time.'
   }]

teamMembers.forEach((el) => {
   team.innerHTML += `<div class="team" width="100" height="200">             
               <img src=${el.Img} alt="" width="200" height="250"/>
                <div class="name">${el.Name}</div>
                <div class="design">${el.Role}</div>
                <div class="desc">${el.Desc}</div>
                <div class="social">
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                   <a href="#"><i class="fa fa-github"></i></a>
             </div>
          </div>`
});
