# AstroClash

### Table of Contents
* [Description](#description)
* [Setup](#setup)
* [Running Tests](#runningtests)
* [Technologies](#technologies)
* [Authors](#author)
* [Reflection](#reflections)


## Description
Do you love astronomy, but always get confused when someone mentions astrology? Do you live by your astrological chart and only date your zodiac love matches, but you're constantly offended when people think your passion lies in astronomy? This app is for you!! You don't even have to know the difference between astronomy and astrology to use it! Shucks, you don't even have to know what astronomy or astrology is to use this app! Not only will you learn a new astronomy fun fact daily, but you can also get your daily reading. If you want to prove your friends that your reading from last week came true, you can save it! If you desperately need to learn more about the universe, you can save all the daily facts your brain can soak up!


#### Main Page

![HoroscopeSaveFeature](https://user-images.githubusercontent.com/76409536/121985812-b275a980-cd52-11eb-8fc7-e14edd24fac1.gif)

![AstronomySaveFeature](https://user-images.githubusercontent.com/76409536/121985807-b1447c80-cd52-11eb-95fb-0a68bb96b70e.gif)


#### 404 Error Handling

![404_ErrorPage](https://user-images.githubusercontent.com/76409536/121985499-12b81b80-cd52-11eb-968c-190127b76d99.gif)


#### Fully Responsive

![Fully_Responsive](https://user-images.githubusercontent.com/76409536/121985506-177ccf80-cd52-11eb-82af-a2d123c96d36.gif)


#### Accessibility Audit

<img width="589" alt="Screen Shot 2021-06-14 at 3 08 29 PM" src="https://user-images.githubusercontent.com/76409536/121980652-8dc90400-cd49-11eb-8656-41564e257bc8.png">


## Setup
* From your terminal, clone this repository
`git clone https://github.com/EllieAzaveda/AstroClash.git`  
* `cd` into the project directory
* Run `$npm install` to install dependencies
* Run `$npm start`
* Your default browser should automatically open Comic Cache

OR

* View deployed application [here](http://astro-clash.surge.sh/)

## Running Tests
* Once in project directory, run `npm run cypress:open![404_Error](https://user-images.githubusercontent.com/76409536/121985201-860d5d80-cd51-11eb-8b69-5e8d55faeab7.gif)
` 
* In the `integration` directory, click on the file you'd like to see the testing for. 
* A Cypress window should open
* Open dev tools in the Cypress window 
* Go to the Application tab, and check 'Bypass for network' under Service Worker 
* Re-run tests  

## Technologies
<p>
  <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

  <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>

  <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

  <img alt="Cypress.io" src="https://camo.githubusercontent.com/bd9c528263673db09f67bcf3445ba8e5512cfb6829e966a31ef7a378933b231a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d437970726573732e696f2d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d637970726573732e696f266c6f676f436f6c6f723d7768697465"/>
</p>

## Author
<table>
    <tr>
        <td> Ellie Azaveda <a href="https://github.com/EllieAzaveda">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76409536?v=4" alt="E. Azaveda" width="125" height="auto" /></td>
    </tr>
</table>


## Reflections

#### Learning Goals
My learning goals for this project were to solidify my React, Router, and Cypress Testing skills, as well as enhance my css and responsive design abilities. I also wanted to learn how to implement prop typechecking.


#### Evolution of the Project && Personal Reflection
I started this project by thoroughly planning all of my class and functional components and diagrammed the way they would communicate. As I began to build out the components, I found that not all of the components were needed or were used the way I initially planned. Once the main components were built out, I implemented cypress and built out mostly "happy paths" along with some "sad paths". I spent some time styling and responsiveness, then adding extensive error handling/conditional rendering as I implemented Router. I finished the project by adding more "sad paths", testing for the error handling I implemented.

I believe I achieved all of my learning goals. I really struggled with adding a 404 error page, because I initally had the Astrology and Astronomy cards in individual routes in App. I needed to add a Switch to ensure that the 404 error page would be handled properly, so I decided to build a "helper" functional component ("Main Page") to handle this. Later on, I'd love to be able to fully refactor to avoid prop-drilling here, as well as to add delete functionality and persisting data with saves/deletes.

 

