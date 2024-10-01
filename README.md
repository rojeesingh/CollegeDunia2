**   College Table with Infinite Scroll, Sorting, and Search **
----------------------------------------------------------

 This project is a React.js frontend and Node.js backend application that displays a list of colleges in a table layout with the following features:


Features:
1. Initial Table Display: Display a table with 10 rows initially.
2. Infinite Scroll: As the user scrolls down, more rows are loaded dynamically.
3. Featured Flag: A "Featured" flag is displayed if a college has a featured attribute set to true.
4. Sorting: The table supports sorting by:
5.CollegeDunia Rating
6. Fees
7. User Review Rating Sorting is available in both ascending and descending order.
8. Search: Users can search for colleges by their name.

**Technologies Used**----
--------------------------------
Frontend: React.js, HTML, CSS
Backend: Express.js, Node.js
Development Tools: Visual Studio Code (VS Code)


**Setup Instructions**

Follow these steps to set up the project locally on your machine:

1. Backend Setup (Node.js + Express)
+ Navigate to the backend directory:
> cd college-table/server

* Install the required dependencies:
> npm install
 - Install the required dependencies:
> node server.js
 + Run the server:
> node server.js

 The backend server will start on [http://localhost:5000], serving the dummy JSON data at [/api/colleges].

2. Frontend Setup (React.js)
  + Navigate to the frontend directory:
> cd college-table-frontend
 * Install the required dependencies:
> npm install
- Start the React application:
> npm start

 The React frontend will start on [http://localhost:3000].

 
** How It Works**
-------------------------------------
Backend: The backend (server.js) serves a list of colleges through a simple API at /api/colleges. This is either served directly from memory or loaded from a data.json file.

Frontend:

The React app fetches the college data from the API and displays it in a table format.
Infinite Scroll loads more college rows as the user scrolls to the bottom of the page.
Search: A search input allows the user to filter the table by college name.
Sorting: Clicking on the table headers allows sorting by collegedunia rating, fees, or user review rating in ascending and descending order.


**Key Files**
-----------
Backend (Node.js + Express):
server.js: Main Express server setup that serves the college data.
data.json: (Optional) College data file that can be served.
Frontend (React.js):
CollegeTable.js: Main React component that renders the college table with infinite scroll, sorting, and search functionality.
App.js: Main application entry point where CollegeTable is rendered.


