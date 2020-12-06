[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <a href="https://github.com/jubaan/employee-csv-express">
    <img src="./images/enroute.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Employee CSV Express</h3>

  <p align="center">
    This project is part of the **Enroute | Rockstars G5** apprenticeship 2020 program.
    <br />
    <a href="https://github.com/jubaan/employee-csv-express"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://repl.it/@jubaan/employee-csv-express">View Demo</a>
    ·
    <a href="https://github.com/jubaan/employee-csv-express/issues">Report Bug</a>
    ·
    <a href="https://github.com/jubaan/employee-csv-express/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#known-issues">Known Issues</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://repl.it/@jubaan/employee-csv-express)

The project consist on including on a previous project "**[employee-csv-node](https://www.github.com/jubaan/employee-cvs-node)**"
  the use of Expressjs.

Required features:
- Http routing
- Return the employee's information that match the query.

### Built With

* [Nodejs](https://nodejs.dev)
* [Expressjs](https://expressjs.com)
* [JavaScript](https://www.javascript.com)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this script your local environment should have at least these
installations.
* [Nodejs](https://nodejs.dev)
* [Expressjs](https://expressjs.com)k
* [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/) (Optional)
* Linux/UNIX based OS (Recommended)

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/jubaan/employee-csv-express.git
   ```
2. Change to the newly cloned directory.
   ```sh
   cd enroute/employee-csv-express
   ```
3. Run the next command to install all needed dependencies.
   ```sh
   npm install
   ```
4. Run the next command to run the server.
   ```sh
   node bin/employeeQuery.js
   ```
5. In your preferred browser go to:
  ```
  localhost:3000
  ```

#### Run with `docker-compose`

1. Follow steps 1 and 2 from <a href="#installation">Installation</a>

2. Run the next command to build and run the docker image
  ```sh
  docker-compose up
  ```
  or to run a detach version
  ```sh
  docker-compose up -d
  ```
3. To stop the attach version press `CTRL + c` and to stop the detach version
   enter the next command in the console:
   ```sh
   docker-compose down
   ```

<!-- USAGE EXAMPLES -->
## Usage

Once you start the application, and go to `localhost:3000` you'll be prompted with the usage instructions:

1. Append the `localhost:3000` with `/employee/` + `query`.
  ```sh
  localhost:3000/employee/<query>
  ```
2. The available queries are:
  - "**all**": This will show the list of all employees.
    ```
    localhost:3000/employee/all
    ```
  - The ID number of any available employee from `1` to `10`.
    ```
    localhost:3000/employee/10
    ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jubaan/employee-csv-express/issues) for a list of proposed features (and known issues).

<!-- KNOWN ISSUES -->
## Known Issues

- The project can take only the ID property, to search for the employee
    information, any other given property like `first_name`, `last_name`,
    `email`, or `ip_adress` is not recognized by the Http request, not
    individualy nor mixed together.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to 
be learn, inspire, and create. Any contributions you make are 
**greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/jubaan/employee-csv-express/blob/employee-csv-express/MIT_LICENSE.md) for more information.

<!-- CONTACT -->
## Contact

**Julio Añoveros** 

- LinkedIn: [@jubaan](https://www.linkedin.com/in/jubaan)
- GitHub:   [@jubaan](https://www.github.com/jubaan)
- Twitter:   [@jubaan](https://www.twitter.com/AnoverosJulio)
- E-mail:   julio.ab@outlook.com

Project Link: [Employee CSV Express](https://github.com/jubaan/epmloyee-csv-express)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Enroute](https://www.enroutesystems.com)
* [Rodrigo Rodriguez](https://www.github.com/roier-rodriguez) | Enroute Systems

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jubaan/employee-csv-express.svg?style=for-the-badge
[contributors-url]: https://github.com/jubaan/employee-csv-express/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jubaan/employee-csv-express.svg?style=for-the-badge
[forks-url]: https://github.com/jubaan/employee-csv-express/network/members
[stars-shield]: https://img.shields.io/github/stars/jubaan/employee-csv-express.svg?style=for-the-badge
[stars-url]: https://github.com/jubaan/employee-csv-express/stargazers
[issues-shield]: https://img.shields.io/github/issues/jubaan/employee-csv-express.svg?style=for-the-badge
[issues-url]: https://github.com/jubaan/employee-csv-express/issues
[license-shield]: https://img.shields.io/github/license/jubaan/employee-csv-express.svg?style=for-the-badge
[license-url]: https://github.com/jubaan/employee-csv-express/blob/main/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jubaan
[product-screenshot]: ./images/screenshot.png
