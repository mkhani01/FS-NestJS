
## Description

Nest js fundumental and starting structure.

## Installation

For running this app you need latest version of node js and NPM. After installing node run this command on project directory.

```bash
$ npm install
```

## Running the app
First of all run the following command and config your database options in .env file : 
```bash
cp .env.example .env
```  
Them you can run seed command to build tables and seed some vital data's in order to work with API's.
```bash
npm run seed:run
```

To serve the app in diffrent modes run following commands: 
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
## Development
You can find more about project's structure and documentations about how to to develop in this project and future tasks here : [NESTJS_FS](https://docs.google.com/document/d/1IECkiuewrdInclOAkbag2YDFgyAklCvZAYcJaOyqkeE/edit?usp=sharing)

## Stay in touch

- Author - [Mohammad khani](mailto:Mohammadkhani722@gmail.com)
- LinkedIn - [Mohammad khani](https://www.linkedin.com/in/mohammad-khani-973165169/)
- Twitter - [@KhaniGargantua](https://twitter.com/KhaniGargantua)

## License

Nest is [MIT licensed](LICENSE).
