Application Structure

1. Public Part (guests)
  - Users that are not logged in have access to the home page where all car posts are listed
  - Users that are not logged in have access to the details page of a post
  - Users that are not logged in have access to the register page
  - Users that are not logged in have access to the login

2. Private Part (Authenticated users)
  - Have access to the public part of the application
  - Have access to the create post page
  - Have access to the profile page
  - Posts owners have an ability to edit and delete their posts

Project Architecture

1. The project is split into 4 main folders: core, features, shared, types
  - Core folder contains the CoreModule which contains:
    * Components (header, footer, error, etc.)
    * Essential services (Auth service etc.)
    * Interceptors
    * Guards
  - Features folder contains the features of the application. Each feature has its own module
    * cars module that contains components, services and rounting module specific to that feature
    * users module that contains components, services and rounting module specific to that feature
  - Shared folder contains the SharedModule which contains:
    * reusable UI components
    * pipes
    * validators
  - Types folder contains type definitions that are used across the application
