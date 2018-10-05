# inspirit
A Web inspiration application.

## Overview
This is Inpir.it, a web application for internet inspiration! Have you ever browsed the web and wanted to save all the cool websites you come across in a way you’ll remember? That’s what Inspir.it is all about - a visual medium that stores website links, names, descriptions and an associated category and color. All you have to do is fill out a form, conveniently placed on the frontpage, hit submit, and your website and color selection will dynamically appear in a grid that you can scroll through! I believe the association of color with the creation of the website item will actually help you remember it better. 

The idea for this tool came out of a need: I wanted a visual way to browse through all the amazing websites I’ve found without putting them in a boring, text based, Excel spreadsheet. The application uses fetch/ajax to instantly add the content, jQuery/JS for the animations and Express/Handlebars to stand it up and glue it all together.

![inspirit-ss1](https://github.com/sathyaram/inspirit/blob/master/public/images/inspirit-ss1.png) "Inspirit Screenshot 1"

![inspirit-ss2](https://github.com/sathyaram/inspirit/blob/master/public/images/inspirit-ss2.png) "Inspirit Screenshot 2"

### Features
- Create Projects with Title, Link, Category, Description and a Color
- Projects can be filtered by Categories
- Application is responsive and usable on mobile
- All fields on Projects can be edited, including color
- All content that is created/saved shows up immediately, without page refresh

### Routes
- Path: / - Method: GET - Action: #index - Desc: Shows All Grid Items for User
- Path: /item/new - Method: GET - Action: #new - Desc: Get Form to Create Grid Item
- Path: /item - Method: POST - Action: #create - Desc: Create new item in DB
- Path: /item/:id - Method: PUT - Action: #update - Desc: Update data for Item
- Path: /item/:id - Method: DELETE - Action: #delete - Desc: Delete data for item
 
### Technologies
- HTML
- CSS
- Javascript
- Express
- Mongoose
- Handlebars
- Body Parser
- Node
- Fetch

### User Story
1. User enters website, sees splash page
2. User logs into website
3. User sees form to creates item in grid
    - / is route that is going to fetch all items from database and show them on page on a hbs view
4. User's homepage populates with grid items
5. User sees visual grid of inspiration names/tags/links
6. User is able to add to this grid
7. User is able to click on item in grid, to open up link page
8. User is able to update an item in the grid
9. User is able to delete item in grid
--- 
Nice to Have - User is able to categorize/search/by tag for items in grid

### Schemas
- Item
    - Title
    - Website Link
    - Tags
    - Description
    - Color (RGB) (Use HTML5 Color Picker)
- Groupings
    - Name

### Tutorial Video
A Intro to Inspir.it -
https://youtu.be/32rwzymxIl4
