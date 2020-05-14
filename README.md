# VideoStar - A Full Stack React App

This application is specially designed for video collectors and keep track of all the videos in their collection. 

* The user can search for movies in [TMDB (The Movie Database)](https://www.themoviedb.org/?language=en-US) and add them to their collection. 
* After a search in TMDB, the user gets a table of movies with the results of the search term.
* The search results table from TMDB show information about each movie: 
    ** poster image
    ** movie title
    ** synopsis
    ** popularity
    ** realease date
* The search results table from TMDB, allows the user to click on the Details button to get more details about a specific movie.
* The search results table from TMDB, allows the user to click on the 3 Add buttons (`Add Blu-Ray`, `Add DVD`, `Add Digital`) to save the specific movie in their collection as Blu-Ray, DVD or Digital format.
* The collection can be of 3 different types of videos: Blu-Ray, DVD or Digital. 
* The user can save their videos as physical Blu-Ray and DVD or as digital format.
* The user can lend videos to other people and can specify to whom, the lending date and the agreed return date.
* The user can borrow videos from other people and can specify from whom, the borrowing date and the agreed return date.
* To use the app the user must signup for a free account or login with its credentials.
* To signup, the user is required to provide a name, a valid email address and a password.
* To login, the user only needs to provide a valid email and password. 
* The user session is controlled with a [JWT (JSON Web Token)](https://jwt.io/) stored in the browser's [Window.sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
* The user has a profile that can be updated.
* Once authenticated, the user has access to all the features in the app.
* Users that are not authenticated can not access any resources.

This is a Full Stack application that follows the [MVC (Model View Controller)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) software design pattern. This app uses: 
* [React JS](https://reactjs.org/) is the front-end library that is acting as the __View__.
* [Express JS](https://expressjs.com/) is the web server that is acting as the __Controller__.
* [MySQL](https://www.mysql.com/) is the database server that is acting as the __Model__.

This app contains React components, helper/util functions, and uses React lifecycle methods to query and display books based on user searches. Node, Express and MongoDB are used in the backend so that users can save books to review or purchase later.

- - -
## Deployed App in Heroku

[VideoStar in Heroku](https://video-star.herokuapp.com/)
- - -

## GitHub Repository

[VideoStar in GitHub](https://github.com/zackapotamus/video-star)
- - -
## App Screenshots

__Login Page__

![Login Page](./client/src/img/1-login.png)
- - -
__Signup Page__

![Signup Page](./client/src/img/2-signup.png)
- - -
__My Library Page__

![Signup Page](./client/src/img/3-mylibrary.png)
- - -
__Lent/Borrowed Page__

![Lent/Borrowed Page](./client/src/img/4-lent-borrowed.png)
- - -
__Add To Library Page__

![Add To Library Page](./client/src/img/5-add-to-library.png)
- - -
__Lend Page__

![Lend Page](./client/src/img/6-lend.png)
- - -
__Borrow Page__

![Borrow Page](./client/src/img/7-borrow.png)
- - -
__Details Page__

![Details Page](./client/src/img/8-details.png)
- - -
__Account Page__

![Account Page](./client/src/img/9-profile.png)
- - -
__User Experience Flow__

![User Experience Flow Page](./client/src/img/10-user-experience-flow.png)
- - -

## Coding Requirements

This application has the following requirements:

* Must use [React JS](https://reactjs.org/)
* Must use [Node](https://nodejs.org/en/) and [Express JS](https://expressjs.com/) Web Server
* Must be backed by a database, like [MySQL](https://www.mysql.com/) or [MongoDB](https://www.mongodb.com/)
* Must use a [ORM (Object-Relational Mapping)](https://en.wikipedia.org/wiki/Object-relational_mapping) like [Sequelize](https://sequelize.org/) or a [ODM](https://www.tutorialspoint.com/phalcon/phalcon_object_document_mapper.htm) like [Mongoose](https://mongoosejs.com/)
* Must have full [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) routes for retrieve, add, update and delete data.
* Must be deployed in Heroku with data.
* Must use at least 2 new libraries, packages or technologies.
* Must use user authentication
* Must have a polished font end user interface.
* Must follow the MVC paradigm
* Must follow best practices for directory structure.
* Must follow good quality coding standards (indentation, scope, naming conventions, etc).
* Must use an external API call.
* Must hide the API key with environment variables.
* Must hide sensitive information from the public. 