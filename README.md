# Full documentation 
In order to see all of the docs in one place after runing 
```bash 
$ npm install
 #or
$ yarn install 
```
Then run:
 ```bash 
$ npm run compodoc
```




# Description

Nest js fundumental and starting structure. It has minimum requirements for nest js app development like authentication and role permissions seeds , users and etc. . 
This app is built with software as a service principles. You have a owner entity and the owner has multiple users with diffrent roles. owner and owners users can only do actions in their owner data's. Allthough the owner's database is all the same but divided by owner_id.

 ---
## Installation

For running this app you need latest version of node js and NPM. After installing node run this command on project directory.

```bash
$ npm install

# or 

$ yarn install
```

## Running the app
First of all run the following command and config your database options in .env file. You need to specify two dfferent database for test and development enviroment : 
```bash
cp .env.example .env
```  
Then you can run seed command to build tables and seed some vital data's in order to work with API's.
```bash
$ npm run seed:run
```
In order to seed datas for test enviroment you can run : 
```bash 
$ npm run seed:run:Test
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
Project structure is Nest js standard: 
```text
.
├── src
│ ├── Middlewares
│ │ ├───── xxxx.middleware.ts
│ ├── utils
│ ├── Seeds
│ ├── Entity_Name
│ │ ├── Controllers
│ │ ├───── Entity_Name.controller.ts
│ │ ├───── Entity_Name.controller.spec.ts?
│ │ └── Entities
│ │ ├───── index.ts
│ │ ├───── Entity_Name.ts?
│ │ └── permissions
│ │ ├───── Permissions.ts
│ │ └── Services
│ │ ├───── Entity_Name.service.ts
│ │ ├───── Entity_Name.service.spec.ts?
│ │ └── types?
│ │ ├───── type1.ts
│ │ ├───── type2.ts?
│ │ └── Entity_Name.module.ts
│ ├── ...
└── app.module.ts
└── test 
│ ├── Entity_Name
│ │ ├── Entity_Name.e2e.ts
```
To build a new module, service, controller etc. you can use ``nest generator``. You can find all required knowladge in [NestJs](https://docs.nestjs.com/)

## swagger 
you can open swagger in app runing url + /swagger 
<br>
 like : 
```text 
localhost:3000/swagger
```
## Stay in touch

- Author - [Mohammad khani](mailto:Mohammadkhani722@gmail.com)
- LinkedIn - [Mohammad khani](https://www.linkedin.com/in/mohammad-khani-973165169/)
- Twitter - [@KhaniGargantua](https://twitter.com/KhaniGargantua)

## License

Nest is [MIT licensed](LICENSE).
