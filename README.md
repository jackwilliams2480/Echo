# Echo CS520 Semester Group Project
Groupmates: Linhao He, Jack Williams, Nghia Pham

## Description:
Our project goal is to design and implement a web app music player along with its own dedicated database. We want to have a secure login to the website, which will then take you to a homepage which you can navigate through recommended and popular songs. You can also go to your own playlists.

## Architecture:
Client-Server / N-tier architecture, built with Open Closed principle in mind.

## Logistics:
- Version Control: Git
- Scrum board: Github
- Front-end: 
  - Framework: built using React OOP class structure with props and data manipulation to represent our UI
  - Language: JavaScript, HTML, CSS
  - Library: Material UI, React Router, React Redux, Axioms

## Back-end:
- Framework: Express.js
- Language: JavaScript, SQL
- Library: Sequelize ORM
- Database: SQL

# Guide to Docker & Echo:

## Installing:
* [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you don't already have it installed
* Clone the repository to your Desktop (or desired file directory)
``git clone https://github.com/jackwilliams2480/Echo``
* [Install Docker](https://docs.docker.com/get-docker/) on your machine

## Building & Running:
* Note: If you have a prevous build, run ``docker system prune -a`` to remove it. Beware that this removes all docker containers that exist on your computer, not only echo.
* Open up a terminal on your computer, and navigate to the Echo project directory 
* From here run ``docker-compose up --build -d``
	* ``--build`` creates containers if they do not already exist
	* ``-d`` allows for us to detach the docker process in order to more easily troubleshoot errors
* Once Docker has completed its build and setup, you now have access to the complete build of the project
* We can now access the Echo webapp from http://localhost:3000
	* Note: to access the main page without login navigate to http://localhost:3000/home
* To get an overview of the api, navigate to http://localhost:8000/api-docs

## Testing:
* After Build, open echo_server CLI
* From container CLI, run ``npm test``

## Stopping:
* While still in the same Echo directory, run ``docker-compose down``

## Database:
[Schema Diagram](https://dbdiagram.io/d/6267735095e7f23c617118c4)
