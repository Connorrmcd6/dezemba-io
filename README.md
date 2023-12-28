<img src="https://github.com/Connorrmcd6/dezemba/blob/main/webapp/src/assets/svg/Readme-banner.svg?sanitize=true" width="100%" alt="Dezemba.io Banner">
Dezemba.io is a specialized leave tracking software designed to streamline and simplify leave management for small businesses in South Africa. With intuitive features tailored to the local business landscape, Dezemba.io helps organizations efficiently manage employee leave, ensuring compliance with labor laws and enhancing workforce productivity. A world-class service at a South African Price 😉 🇿🇦

## Features

- **Leave Requests**: Employees can easily request leave through the platform, specifying the type of leave (annual, sick, maternity, etc.) and desired dates.
- **Approval Workflow**: Managers or designated approvers receive notifications for leave requests, enabling quick review and approval within the system.
- **Leave Balances**: Real-time tracking of leave balances for each employee, ensuring accurate availability information.
- **Calendar View**: Visual representation of leave schedules to assist in planning and preventing conflicts.
- **Reporting**: Comprehensive reports for leave utilization, trends, and compliance, facilitating decision-making and HR analytics.
- **Customization**: Configurable settings to align with South African labor laws, public holidays, and company-specific policies.

## Environment setup

You need to have [Go](https://golang.org/),
[Node.js](https://nodejs.org/),
[Docker](https://www.docker.com/), and
[Docker Compose](https://docs.docker.com/compose/)
(comes pre-installed with Docker on Mac and Windows)
installed on your computer.

Verify the tools by running the following commands:

```sh
go version
npm --version
docker --version
docker-compose --version
```

## Start in development mode

In the project directory run the command (you might
need to prepend it with `sudo` depending on your setup):

```sh
docker-compose -f docker-compose-dev.yml up
```

This starts a local PostgreSQL database on `localhost:5432`.
The database will be populated with test records from the
[init-db.sql](init-db.sql) file.

Navigate to the `server` folder and start the back end:

```sh
cd server
go run server.go
```

The back end will serve on http://localhost:8080.

Navigate to the `webapp` folder, install dependencies,
and start the front end development server by running:

```sh
cd webapp
npm install
npm start
```

The application will be available on http://localhost:3000.

## Start in production mode

Perform:

```sh
docker-compose up
```

This will build the application and start it together with
its database. Access the application on http://localhost:8080.
