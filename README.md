# Angular15

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


-------------------------

# This is a Fitness Registration App built using Angular 16.2.0v

## I'm using json server to run backend server , no other backend is used here.
## to run the project in 1st terminal run ng serve and in other terminal first install json server using the command 'npm i -g json-server' and then run 'json-server --watch db.json'
## so that a json file will be created and it will be running on some particular port
## I'm using both Bootstrap and Angular material mostly for predefined styles.
## Main focus is on CRUD operations.
## Not used validations in the form it can be done later purpose.

## Concepts used in this referring to angular are

## 1)Routing 2)Route params 3)services dependency injection 4)predefined user model 

## It has the following features :

# Project explanation 

1)A reactive registration form where user can enter his details like firstname, lastname, email, height, weight, email etc.

2)User can enter his/her height only after entering weight and then using those values BMI is calculated and BMI result and BMI value will be populated by the logic written in code.

3)clicking on view enquiries button user can see list of registered user's and also can able to view, update, delete his details in that page.

4)clicking on eye button in user details page the particular user details will be shown in user details page, this is achieved using route params using ID

5)similary clicking on pencil and trash box symbols it will navigate to register form prepopulating with all the fields for the updation and similarly with delete also.

6)For deleting it is achieved using ID. based on ID the user details will be deleted.





