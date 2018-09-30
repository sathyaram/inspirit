# inspirit
A Web inspiration visual application

## Overview
A place to save the cool websites you find on the web. Users experience an interface where they can save their interesting links/sites that they find on the web, keep detailed notes and tags on these links, and have a visual medium to browse them on.

## Features
- Projects can be tagged, with multiple tags
- Projects can be categorized

## Routes
- Path: / - Method: GET - Action: #index - Desc: Shows All Grid Items
- Path: /new - Method: GET - Action: #new - Desc: Get Form to Create Grid Item
- Path: /item - Method: POST - Action: #create - Desc: Create new item in DB
- Path: /item/:id - Method: PATCH/PUT - Action: #update - Desc: Update data for Item
- Path: /item/:id - Method: DELETE - Action: #delete - Desc: Delete data for item
 
## Technologies
- HTML
- CSS
- Javascript
- Express
- Mongoose
- Handlebars
- Body Parser
- Node

## User Story
1. User enters website
2. User sees visual grid of inspiration names/tags/links
3. User is able to add to this grid
4. User is able to click on item in grid, to open up new page
5. User is able to update an item in the grid
6. User is able to delete item in grid
--- 
Nice to Have - User is able to categorize/search for items in grid


