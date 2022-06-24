# Google Books UI
![Screen Shot 2022-06-24 at 1 28 23 pm](https://user-images.githubusercontent.com/97388878/175456668-bff17220-01ab-4cf1-8f94-8d6013b4f57b.png)


## Link to Live website

[Link](https://samm-au.github.io/google-books-ui/)

## About

A website implementing Google books api to search for books based on a search input.

## MVP

MVP
Create a page that allows users to search for books

Page should include the following:

Header section introducing the page

Form containing a text input and a submit / search button

A grid of books

Instructions:

When the submit button is clicked you need the request books from the Google books API using the input value as your query string

The books that you receive should be rendered in the books grid.

Each book in the grid should have an image, author, title and description

The grid should be responsive on different screen sizes

You should use async / await for your request code, NOT .then

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.

Styling must use BEM, and each block should have its own SCSS file

Your palette should use variables

Application Design (required):

You should separate DOM functions and non-DOM functions in different modules Example: https://github.com/chillcaw/el-salvador-code-alongs/tree/master/js-modules

Write as many non-DOM functions as you can

Functions should do 1 thing, and should be as pure and reusable as possible

Always use iterators over loops

Always parametrize and abstract large pieces of duplicate code.

Bonus (optional, but highly recommended):

Give feedback to the user when no book results can be found for the query.

When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

Website needs to be responsive to most screen sizes.

## Technologies used

- HTML
- CSS
- Sass
- Javascript


## Thought process

Design:
I wanted to be fun and inviting. Something easy on the eyes and not too complicated.

When building this website, I wanted to have the focus on the searchbar and the books grid. 

I first started off with a simple form for my searchbar and connected the googlebooks api to make sure that it's working. 

I analyzed the google books search results json and see what fields I needed access too. Once I had that figured out, I wrote some conditions such as if there is not field data present or if there are no search results, to display a message like "no results".

I then worked on styling the webpage, picking my font and colours. I worked on the grid component and styling the images and added hover effects.

In the future I would like to add some CRUD actions so users can add books to a reading collection.

