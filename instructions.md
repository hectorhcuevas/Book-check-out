# Pair Project - Check Out a Book
Test drive and create a React / Express app that models a library's book catalogue.

## Requirements:
Utilize your entire arsenal of testing: Cypress with Cypress Testing Library, React Testing Library, and Supertest.

This should be containerized and utilize `docker-compose`, and should have a README for any steps needed to initialize the project, like:

  * Run `docker-compose up`
  * Run "this command to execute file to initialize the database"
  * Run "this command to make magical programming things occur"
  * etc...

## This project should satisfy the following criteria:

- [x] As a user, I want to see a page-heading at the top of the site that clearly shows me that I am at the SDI Library page.

- [x] As a user, I want to be able to see a list of every book in the library so that I can browse the selections, including:
    * Book Title,
    * Author,
    * ISBN Number (this can be any number for today!),
    * If the book is checked out or not

    This story is so big that you should break it up into smaller subtasks:

  - [x] React renders list of dummy data for books
  - [x] React makes AJAX (__Asynchronous JavaScript and XML__, e.g. `fetch()`) call to Express endpoint
  - [x] Create Express endpoint: `/api/books`    
  - [x] Create Library database and `books` table
  - [x] Use knex to seed and return books from database to Express
  - [x] Returns an array of book objects from Express endpoint
  
  Feel free to break down any of the following stories into subtasks if needed!
    
- [ ]  As a user, I want to be able to see details about an individual book so that I can focus on one book at a time.
        including:
            * Book Title,
            * Author,
            * ISBN Number (this can be any number for today!),
            * If the book is checked out or not
            * Date due back if checked out
            * UserId of user that checked out the book
    API endpoint: `/api/books/:bookId`    
    
- [ ] As a user, I want to be able to check out a book for two weeks so that I may read it.
    API endpoint: `/api/books/:bookId/checkout/:userId`
    
- [ ] As a user, I want to know if a book is available to checkout (if I am the person that checked it out, I should see a message indicating that I have the book already and if someone else checked the book out, I should see a message telling me to check back after the current due date of the book), so that I can save time.
    API endpoint: `/api/books/:bookId/checkout/:userId`
    
- [ ]  As a librarian, I want to be able to check on the due date for a book that someone just checked out so that I may 	keep track of its status and identify the person who checked it out.
    API endpoint: `/api/books/:bookId`
    
- [ ] As a librarian, I want to be able to update the system for a book that has been returned
    API endpoint: `/api/books/:bookId/return`