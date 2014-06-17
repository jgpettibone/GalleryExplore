## Gallery Explore
Gallery Explore is a visual database for artwork in a museum.  This tool facilitates the research that docents need to do when planning a visitor tour by giving them a way to explore the artwork through images of the pieces in the museum and to create and store information about tours in the application.  

This tool is separated into three main sections:

### Explore Images
This is an image gallery containing images of the artwork in the museum.  The images are filterable on a number of different criteria including:

* title and/or description
* artist and/or cultural group
* country of origin
* collection in the museum
* any number of user-defined tags

Docents will be able to easily find art that fits into a particular theme.  Clicking on an individual image will take the docent to a page with a larger image and all the relevant details.  This detailed page also gives docents the opportunity to input more information about the piece - both new user-defined tags as well as notes or talking points that the docent can use during the tour.  From this screen the user can also designate this artwork to be included in a new tour.

### View Tours
This section shows a list of all the tours saved in the application.  By clicking on the title of one of the tours, the docent will see all of the relevant images and information associated with that tour.


### Create New Tour
This is the new tour editor.  When a docent chooses to add artwork to a new tour from Explore Images's details page, this page will be populated with that information.    


## Gallery Explore Status
The work in this repo is a prototype represented about 40 hours of work.  It was created for discussion with the Docent Council of the Fine Arts Museums of San Francisco (FAMSF).  Note that the images are currently stored in the database only as local paths so as to protect the property of FAMSF.  The database associated with this repo is also not fully populated for this reason.

I continue to work on this project when I have time.

## Tech Stack
Gallery Explore is built with a SQLite database, Ruby/Sinatra on the back end and JavaScript/Angular on the front end.

### Back End

#### Ruby / Sinatra
The backend is written in Ruby using Sinatra and Active Record to interact with the database.  The main server file is found in `explore.rb`.  

#### SQLite DB
Gallery Explore uses a SQLite database.  The schema is as follows:

### Front End 

#### Scripts and Partials
Scripts and partials can be found in public/client.

##### The App Module and Config Files

*public/client/app.js*
Defines the application module.

*public/client/config.js*
Defines the routes for the partial pages and their controllers.

##### The Services

*public/client/imageServices.js*
This defines the imageServices module.  There are two services in this module: imageHTTPService and tourService.

*public/client/imageHTTPService.js*
The ImageServices include all http services.  We don't want these in the controllers because the model (and the creation of the model data) should be separate from the controller. 

*public/client/tourService.js*
This service includes data to be shared across controllers.  

##### The Directive

*public/client/details.js* and *public/client/partials/detailsTemplate.html*
The directive here is used to show an image of artwork along with its relevant information.  This directive is used once within the details page and multiple times with an ng-repeat in the Create New Tour and in the single tour view pages.

##### The Controllers and Partials

*public/client/imagegallery.js* and *public/client/partials/gallery.html*
These control the image gallery found on the Explore Images page.

*public/client/imagedetails.js* and *public/client/partials/details.html*
These control the details of an artwork shown when an image is clicked on the Explore Image page.

*public/client/tourcreate.js* and *public/client/partials/tour.html*
These control the Create New Tour page.

*public/client/tourview.js* and *public/client/partials/tours.html*
These control the View Tours page. 

*public/client/onetourview.js* and *public/client/partials/onetour.html*
These control the single tour view when one of the tours is clicked from the View Tours page.

### Compatibility
Note that Gallery Explore was written and tested for use on Chrome 5 or later.  Please use Gallery Explore with Chrome.

## Getting Started

### Dependencies
The `Gemfile` contains all of the project's dependencies.  Ensure all dependencies are installed by running `bundle install`.  (You need to have the `bundler` gem for this.)

### Running the server
Start the server from the repo with the following command: `bundle exec ruby explore.rb`.
Or to have the app reload automatically, run the server with shotgun: `bundle exec shotgun`.

### Creating Database Migrations
Migrations are created like this: `rake db:create_migration NAME=add_tours`
where `add_tours` is the name of the migration and will be used to name the migration file
found in the `db/migrate` directory.  You will need to edit this newly created migration file 
before running the migration.

Migrations are run like this: `rake db:migrate`

For deleting the database and re-running the migrations: `rake db:reset`










