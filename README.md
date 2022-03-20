
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# env Setup
```bash
Replace the XXXXX with your MongoDB Atlas User and Password
I will be sharing the details in an email. Please add that values for the below keys in the .env

MONGO_ATLAS_USER=XXXX
MONGO_ATLAS_PASSWORD=XXXXXX

```

# Runing the application using Docker

```bash
docker-compose up -d --build

OR

docker-compose build
docker-compose up

If you face permission issues then try to run 
above commands with sudo on linux system


```


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
