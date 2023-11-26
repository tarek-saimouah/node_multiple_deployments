# NODE.JS EXPRESS SERVER MULTIPLE ENVIRONMENTS DEPLOYMENTS SAMPLE

Node.js REST API with multiple environments sample project documentation.

## Tech Stack

- Node js (16^).
- Express.js (4^)
- mongodb (5^)
- os: linux ubuntu (LTS version)

## How to use

- clone project
- create .env file in the root directory and fill this environment variable:
- MONGODB_URL=mongodb://db_username:db_password@localhost:27017/${NODE_ENV}\_deployment_db?authSource=admin

- run:

```bash
$ npm install
$ npm run start:dev
```

- test:

```bash
$ curl http://localhost:3001/hello
```

- [Full article on Medium](#https://medium.com/@tareksaimouah/6f9433bdaa63)

---
