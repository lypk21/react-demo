1. how to run?

1) yarn install
2) yarn start

2. Tech Stack： I main using React, Router, SASS, Bootstrap, Cookies, Pubsub, moment， prop-types

3. Login function explain: 
   1) using the Cookies to store user state
   2) once successfully login, there are some changes on the page, the header will hide the 'Login' menu and show the 'Logout' on the right top side;
      the footer will hide 'Login' menu, the user state will store in Cookie.   
   3) once successfully logout, there is some changes on the page, the header will show the 'Login' menu and hide the 'Logout' on the right top side;
      the footer will show 'Login' menu, the user state will be clear in Cookie.
   4) without login, if visit profile, will be redirect to login. once login, will redirect to profile page. 
   5) user state needs to be used in several component, there is why I use Pubhub to communicate between different components.  
   
