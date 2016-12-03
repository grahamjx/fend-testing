# Feed Reader Testing


### Getting Started

This project uses gulp to build the web application and host it locally on port 8000.

1. [Install Node.js] (https://nodejs.org/en/download/)
2. Clone the repository

    `$ git clone https://github.com/grahamjx/fend-testing`

3. Navigate to the project folder and run npm install

  ```bash
  $> cd /path/to/your-project-folder
  $> npm install
  ```
4. This will install everything necessary to evaluate the project. If you're curious about what gets installed, check out the package.json file.

5. Run gulp from project directory
   
    `$ gulp serve`
  
6. Open a browser and visit localhost:8000

### The Project

For this final project, I had to write Jasmine specs in order to effectively test the provided application.

1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

3. A test that ensures the menu element is hidden by default.

4. A test that ensures the menu changes visibility when the menu icon is clicked.

5. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

6. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
