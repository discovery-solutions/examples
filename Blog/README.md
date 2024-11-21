# Blog Example

This project is an example of how to create a blog using the **Quick Server** framework. It demonstrates how to set up CRUD routes, authentication, and database integration to manage blog posts.

## Features

- **CRUD for Posts**:
  - Create
  - Read/List
  - Update
  - Delete
- **Authentication**:
  - JWT-based authentication
  - Role-based permissions
- **Database Integration**:
  - MongoDB
  - MySQL
  - PostgreSQL
  - SQLite
- **API Documentation**:
  - Viewable at `/system/docs`.

## Installation

Install the package using npm:

```bash
npm install github:discovery-solutions/quick-server
```

## Configuration

**Quick Server** uses a YAML configuration file for easy setup. Below is an example:

```yaml
developer:
  env: ".env"
  logger:
    formatted: true
    verbose: false

servers:
  - name: "Blog-Server"
    port: 3501
    type: "rest"
    format: "json"
    database: "mongodb"
    request:
      limit: 10
      timeout: 10

auth:
  strategies:
    jwt:
      secret: "super_secret_key"
      expiresIn: "1h"
      entity:
        name: "user"
        identifiers:
          - "email"
          - "password"
  permissions:
    default:
      get: false
      list: false
      insert: false
      update: false
      delete: false
    entities:
      user:
        "*":
          get: true
          list: true
        user:
          insert: true
          update: true
          delete: true
        post:
          insert: true
          update: true
          delete: true

databases:
  - type: mongodb
    key: "mongodb"
    uri: "{MONGODB_URI}"
    name: "quick-server"
    logs: true

entities:
  - name: "user"
    alias: "User"
    fields:
      name:
        type: "string"
        required: true
      email:
        type: "string"
        required: true
      avatar:
        type: "file"
      password:
        type: "string"
        required: true
        secure: true
    auth:
      type: "jwt"
      jwt:
        fields: ["email", "password"]
  - name: "post"
    alias: "Post"
    fields:
      title:
        type: "string"
        required: true
      content:
        type: "string"
        required: true
      author:
        type: "string"
        required: true
      date:
        type: "date"
        required: true
```

## Usage

After configuration, start your server using the following code:

```ts
import { QuickServer } from "@discovery-solutions/quick-server";

const server = new QuickServer();

server.use((ctx) => {
  console.log('Custom middleware triggered');
  return ctx.status(200).json({ message: 'Hello World' });
});

server.start();
```

This will start your REST server based on the configuration.

## Routes

### Authentication

- `POST /auth/login`: User authentication and JWT token generation.

### Posts

- `POST /posts`: Create a new post.
- `GET /posts`: List all posts.
- `GET /posts/:id`: Get a specific post.
- `PUT /posts/:id`: Update a specific post.
- `DELETE /posts/:id`: Delete a specific post.

### API Documentation

You can access the API documentation by navigating to the endpoint:

```
/system/docs
```

This provides an interactive interface to explore and test the API.

## Web Interface

The `/web` directory of this project contains the frontend code for the blog, which uses a custom version of React from [DSCRV Solutions](https://github.com/discovery-solutions/react/tree/development).

### Features

- **Custom Components**:
  - Header
  - Footer
  - Navigation
  - Widgets (Categories, Tags)
- **Routing**:
  - Home Page
  - About Page

### Usage

To start the web interface, navigate to the `/web` directory and run the following commands:

```bash
npm install
npm run dev
```

This will start the development server for the web interface.

### Custom React

The web interface uses a custom version of React provided by DSCRV Solutions. You can find more details about this custom React version [here](https://github.com/discovery-solutions/react/tree/development).
