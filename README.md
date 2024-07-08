
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Contact-Page-Backend</h3>
  <p align="center">
    <br />
    <a href="https://github.com/Prashant-kumar-aryan/CONTACT_PAGE_BACKEND"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Prashant-kumar-aryan/CONTACT_PAGE_BACKEND">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This is the backend for my contact page server, providing essential API endpoints for managing contact data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* Node.js
* MongoDB

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone "https://github.com/Prashant-kumar-aryan/CONTACT_PAGE_BACKEND.git"
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file and enter your environment variables
   ```sh
   touch .env
   ```
   Add the following variables to the `.env` file:
   ```sh
   DB=YOUR_MONGO_DB_URI
   PORT=3005
   # for email
   USER=YOUR_EMAIL_ID
   PASS=YOUR_EMAIL_APP_PASSWORD
   ```
   To generate an app password for your email, follow the instructions [here](https://support.google.com/accounts/answer/185833?hl=en) and use it in place of `YOUR_EMAIL_APP_PASSWORD`.
   DONT FORGET TO REMOVE BLACK SPACES
4.npm run build or npm start
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### POST Request

To add a new contact, send a POST request to:

- https://contact-page-backend.onrender.com/api/v1/newContact
- or http://localhost:3005/api/v1/newContact

With the following JSON body:

```json
{
  "name": "name",
  "email": "email",
  "phoneNumber": "no",
  "topic": "Feedback",
  "message": "This is a test inquiry message."
}
```

### GET Requests

To retrieve all contacts, send a GET request to:

- http://localhost:3005/api/v1/admin/Contacts

To retrieve all users, send a GET request to:

- http://localhost:3005/api/v1/admin/Users

### PUT Request

To update a contact's status, send a PUT request to:

- http://localhost:3005/api/v1/admin/update

With the following JSON body:

```json
{
  "id": "id",
  "status": "newStatus"
}
```
```

Make sure to adjust the URLs and payloads as per your actual requirements.
