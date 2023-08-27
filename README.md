![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# The Virtual Pub Quiz

The Virtual Pub Quiz is an online interactive quiz game designed to test the user's general knowledge of varying subjects that you would normally find at a real in-person pub quiz.

The purpose of this project is to demonstrate a practical understading of how interactive front end development works in terms of DOM manipulation and to demonstate how the trinity of web development languages can interact with each other to create in this case a fun application for a lover of quiz apps.

Add an image of the finished site here [amiresponsive](https://ui.dev/amiresponsive) to get an image of my site on all device sizes. 

Add a link to the live site here

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

## User Experience (UX)

The best (intuitive) UX creates single-use learning.

### User Stories

* Website Owner's Goals:

  * I want new and returning players to use the quiz game.

  * I want users to be able to understand how to navigate the website.

  * I want the quiz game to be fun and educational.

  * I want the webpage/quiz game to function as it should.

  * I want users to return to the quiz game.

* First Time Visitor Goals: 

  * I want to be able to understand how the game works.

  * I want to be able to start playing the game quickly in as few steps as possible.

  * I want to be able to exit the game if need's be and return to the start menu.

  * I want to get my final score at the very end of the quiz. 

* Returning Visitor Goals:

  * I want to be able to start playing the game quickly in as few steps as possible.

  * I would like a choice of subjects and to be able to pick a subject of my choosing.

  * I want the gaming experience to be consistent with every use.

  * I would like an option to get random questions from random subjects. 
   
## Design

### Colour Scheme

I wanted the colours used for this project to reflect the interior appearance of a typical British or
Irish pub. In keeping with the theme of the pub quiz I used the following main colours:

* Seagreen: rgb(46, 139, 87)
* Saddlebrown: rgb(139, 69, 19)

The secondary colours used primarily in the quiz section are:

* Red: rgb(255, 0, 0)
* White: rgb(255, 255, 255)
* Black: rgb(0, 0, 0)

The secondary colours used alongside the green siding background of the quiz section help to generate a sense of playing a pub game. One very common game found in pubs is snooker or pool so the use of these three colours help reinforce this aspect of the quiz game.

### Typography

Google Fonts was used to import an external font style which was used as the main project font for the logo, the body
text and the questions and answers text. The Lato font was chosen to be the main font used throughout the project
as it is often regarded as a excellent choice for website. The text is clear and very readable compared to other 
font styles. The backup font style is sans-serif which is included in the CSS family-font selector in case the Lato font fails the load.

### Imagery

Imagery is important. The large, background/ hero image is designed to be striking and catch the user's attention and to help reinforce the nature of the application.

The background/hero image was downloaded from [Pexels](https://www.pexels.com), a simple search using the keyword "pub" 
and its the first hit on the first page, the image license is free to use (CC0). 

### Wireframes

The wireframes were created using Balsamiq desktop for Windows 10:

* [Home Page](assets/img/Home%20Page.png)

* [Quiz Page](assets/img/Quiz%20Page.png)

## Features

### General features on each page

The Virtual Pub Quiz consists of two pages "Home" and "Quiz".

* Features that are common across the site include:

  * A logo which acts as a link back to the home page.

  * A navigation bar which provides linkage to both pages.

  * Both the logo and navigation bar are responsive when viewed on different sized screens. 

  * The pub background/hero image is featured in both pages.

Other features of the Home Page:

* A welcome message which informs the user of what to expect from the quiz and an instruction
to click on the quiz navigation link to start playing the quiz.

The Quiz Page:

* A start quiz button which when clicked brings up a modal with a list of rules telling the user how 
to play the game.

* The modal includes two buttons, an exit button which returns the user back to the quiz page and a continue button 
to start playing the quiz.

* When the user clicks on the continue button the modal displaying the game instructions which disapear to be 
replaced by a scrolling green screen and another modal displaying the first questions.

* With each question the user has to pick one answer, a right answer will produce a white border around that question
and a wrong answer choice will highlight that question in red. The user must choose an answer before being able 
to continue with the quiz.

* Once the user has completed the quiz another modal will appear to present the user with their total score.

* The final score modal inclues to buttons were the user can either press "Try Again?" to retake the quiz 
and potenially improve their score or press "Go Home?" to return to the main quiz screen.

### Future Implementations

Future implementations could involve:

* Incorporating a trivia quiz API to generate the questions rather than having to manually type them out in an array file.

* The option to select from a list of subjects occording to the user's preferences.

* A randomiser mode where the app will generate the questions from different subjects.

### Accessibility

Whilst coding the site I have ensured that the site is accesible for all. This is achieve by using:

* Google Dev Tools to check contrast of items.
* Alt tags to describe the images on site.
* Semantic HTML
* Aria Labels to hightlight areas for users who require the use of screen reade

## Technologies Used

### Languages Used

* HTML5
* CSS3
* JavaScript ES6

### Frameworks, Libraries & Programs Used

[Balsamiq](https://balsamiq.com/wireframes/) was used to create the wireframes for the website.
[Font Awesome](https://fontawesome.com/icons) was used to add the beer glass to the logo and the social media icons used in the footer.
[Google Fonts](https://fonts.google.com/) was used to import the font for the body text.
Google Dev Tools was used to identify and resolve problems related to responsiveness and appearance.
[Github](https://github.com/) was used to store my project in a repository.
[Git](https://git-scm.com/) was used for version control.
[Google](https://google.com) was used to research other CSS styles to add more dynamic touches to the
project and help with JavaScript functionality issues/problems. 
[Gitpod](https://www.gitpod.io/) the vast majority of my time was spent inside GitPod's VSCode Cloud IDE.
CDNs [Cloudflare](https://www.cloudflare.com/en-gb/learning/what-is-cloudflare/) and [JsDelivr](https://www.jsdelivr.com/) were used for Font Awesome icons CSS minified and Fork Awesome minified.
[Am I Responsive](https://ui.dev/amiresponsive) To create the responsive banner of devices.

## Deployment & Local Development

👩🏻‍💻 View an example of a completed Deployment & Local Development section [here](https://github.com/kera-cudmore/TheQuizArms#Deployment)

### Deployment

Include instructions here on how to deploy your project. For your first project you will most likely be using GitHub Pages.

### Local Development

The local development section gives instructions on how someone else could make a copy of your project to play with on their local machine. This section will get more complex in the later projects, and can be a great reference to yourself if you forget how to do this.

#### How to Fork

Place instructions on how to fork your project here.

#### How to Clone

Place instructions on how to clone your project here.

## Testing

Start as you mean to go on - and get used to writing a TESTING.md file from the very first project!

Testing requirements aren't massive for your first project, however if you start using a TESTING.md file from your first project you will thank yourself later when completing your later projects, which will contain much more information.
  
Use this part of the README to link to your TESTING.md file - you can view the example TESTING.md file [here](milestone1-testing.md)

## Credits

👩🏻‍💻 View an example of a completed Credits section [here](https://github.com/kera-cudmore/BookWorm#Credits)

The Credits section is where you can credit all the people and sources you used throughout your project.

### Code Used

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

### Content

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

If someone helped you out during your project, you can acknowledge them here! For example someone may have taken the time to help you on slack with a problem. Pop a little thank you here with a note of what they helped you with (I like to try and link back to their GitHub or Linked In account too). This is also a great place to thank your mentor and tutor support if you used them.