# Holoclips

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

A single page web application for watching virtual idol related video clips.

## Component Design
I took a responsive static design html template and moved it into the Angular application. The next step would be to make it functional. These functions should be broken up into smaller steps.

* User
  * Login
  * Registration
  * Authentication
* Videos
  * Upload
  * Manage
  * View

I should work on the User system work, so that users can upload videos. I will need a few things.

* User Interface
* Form Validation
* Database
* State Management

* Layout of User Interface (UI)
  * Navigation Component
  * Modal Component
  * Login/Register Components
  * Tabs Component
  
## Reactive Forms
Forms can be challenging to create due to various requirements. It is a common but complex task.

* Form Validation - the original purpose of JavaScript, verify correct information
* Feedback - help the user fill out a form
* Dynamic Fields - different types of input from names to addresses

* Reactive Forms - Harder to learn, more flexible, scalable, configured through classes

In the latest version of angular (v13), the team has enabled an option called ```noPropertyAccessFromIndexSignature```

In either the tsconfig.json or tsconfig.app.json files, you can set the ```noPropertyAccessFromIndexSignature``` to false inside the compilerOptions object. This should effectively disable the option.

If this option is enabled, access properties with square brackets instead of dot syntax. For example, let's say you were accessing a property like so: form.name

And it produces the following error: ```Property 'name' comes from an index signature, so it must be accessed with ['name']```

Change the syntax to this: ```form['name']```

* Presentational Components - Components that focus on the presentation (template) instead of handling business logic

## Template Forms

* Template Forms - Easier to learn, less flexible, better for small forms, configured through templates

## Authentication

## Custom Validators

We can use ```AbstractControl``` properties to write validators.
* valid - The input is valid.
* invalid - The input is invalid
* disabled - Ignores validation on the input.
* touched - The field has been touched.
* untouched - The field remains untouched.
* pristine - The value in the field remains unchanged.
* dirty - The value in the field has been changed.

## Routing

## Uploading Files

## WebAssembly & Rust

## Video Processing

## Video Player

## Deployment

## Unit and End to End Testing

## Angular commands

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
`npm run start` also runs the `ng serve` command.


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
