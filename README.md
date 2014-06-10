## Gallery Explore
Gallery Explore is a tool that allows docents to explore the artwork in their museum.  Docents need to do a lot of research in order to create visitor tours and many docents store information about the art and the tours they've created in files and folders.  However, every great tour starts from actually seeing the art.  Gallery Explores stores all information about the artwork and the tours from the perspective of images in an image gallery.

This tool is separated into three main sections:

### Explore Images


### View Tours


### Create New Tour


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

*public/client/config.js*

##### The Controllers and Partials

*public/client/imagegallery.js* and *public/client/partials/gallery.html*


*public/client/imagedetails.js* and *public/client/partials/details.html*


*public/client/tourcreate.js* and *public/client/partials/tour.html*


*public/client/tourview.js* and *public/client/partials/tours.html*


*public/client/onetourview.js* and *public/client/partials/onetour.html*


##### The Directives

*public/client/details.js* and *public/client/partials/detailsTemplate.html*


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










