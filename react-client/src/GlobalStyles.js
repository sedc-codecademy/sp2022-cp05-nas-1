import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
   --primary-color: #2196f3;
   --secondary-color: #90caf9;
   --color-red:#f7473e;
   --color-green:#4caf50;
   --background-lightGrey: #fcfcfc;
   --yellowPrimary:#ffeb3b;
   --screen-lg:992px;
}

html {
   font-family: 'Nunito', sans-serif;
}

*,
*::after,
*::before {
   margin: 0;
   padding: 0;
   /* box-sizing:border-box; */
}
#root{
   width:100vw;
}
main{
   min-height:100vh;
}
a{
   text-decoration:none;
}
body {
   overflow-x: hidden;
   min-height: 100vh;
}

body::-webkit-scrollbar {
   width: 12px;
}
body::-webkit-scrollbar-track {
   background: var(--background-lightGrey);
}
body::-webkit-scrollbar-thumb {
   background-color: var(--primary-color);
   border-radius: 10px;
}
button {
   cursor: pointer;
}
.container {
   width: 100vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
}

.main {
   padding: 30px 20px;
   display: flex;
   flex-flow: column nowrap;
   width: 100%;
   flex: 100% 4 0;
}

.container aside {
   flex: 15% 1 1;
   background-color: var(--background-lightGrey);
}

#ads-sidebar {
   padding-top: 10px;
}

#category-sidebar {
   position: fixed;
   left: 0;
   transform: translateX(-100%);
   transition: transform 250ms ease-in;
   z-index: 20;
}

#category-sidebar.active {
   transform: translateX(0);
}

@media screen and (min-width: 992px) {
   .container {
      flex-direction: row;
      align-items: flex-start;
   }
   .main {
      width: 60%;
      flex: 60% 4 0;
   }

   #ads-sidebar {
      height: 100vh;
      position: sticky;
      top: 70px;
   }
   #category-sidebar {
      position: sticky;
      top: 70px;
      left: 0;
      transform: none;
   }
}

.hide {
   display: none;
}

#cookiePopup {
   background-color: #ffffff;
   position: fixed;
   bottom: 20px;
   right: 20px;
   max-width: 400px;
   box-shadow: 0 0 20px rgba(5, 0, 31, 0.15);
   text-align: justify;
   line-height: 1.8em;
   padding: 20px;
   border-radius: 6px;
   transition: all 1s ease-in;
}
#cookiePopup img {
   display: block;
   width: 50px;
   position: relative;
   margin: auto;
}
#cookiePopup p {
   text-align: center;
   margin: 20px 0;
}
#cookiePopup button {
   background-color: var(--primary-color);
   text-decoration: none;
   padding: 10px 20px;
   display: block;
   position: relative;
   margin: auto;
   border-radius: 5px;
   color: #fff;
   border: 0;
}

`;
