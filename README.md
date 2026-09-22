# Siwes-projects
This contains all the project i'll be doing during my siwes training</br>
## 🚀 JavaScript Coding Challenges Completed

This repository contains solutions to several JavaScript coding challenges designed to strengthen my understanding of modern JavaScript concepts, asynchronous programming, and data manipulation.

### ✅ Challenge 1: Fetch API & Async/Await

Built a local JavaScript script that retrieves mock user data from the JSONPlaceholder API.

**Key concepts demonstrated:**

* `fetch()` with **async/await**
* Data retrieval from a REST API
* Object destructuring
* Extracting only the required fields:

  * Name
  * Email
  * Company Name
* Error handling using `try...catch`
* Custom error messages for failed network requests

**API Used:**

* https://jsonplaceholder.typicode.com/users

### ✅ Challenge 2: Text Metadata Extraction

Developed a script that processes a raw paragraph of text and extracts useful metadata.

**Features:**

* Character count
* Word count
* Sentence count
* Unique word count
* Word frequency analysis

**JavaScript concepts used:**

* String methods
* Regular Expressions (Regex)
* Arrays
* Objects
* `Set`

### ✅ Challenge 3: Student Score Analyzer

Created a console-based JavaScript program that processes an array of student scores.

**Features:**

* Calculates the average score
* Filters out failing scores (below 50)
* Sorts the passing scores in ascending order
* Displays the processed results in the console

**JavaScript concepts used:**

* Arrays
* `.filter()`
* `.reduce()`
* `.sort()`
* Functions
* Arrow functions

---

## 📚 Skills Practiced

* JavaScript (ES6+)
* Async/Await
* Fetch API
* Error Handling (`try...catch`)
* Object Destructuring
* Array Methods (`map`, `filter`, `reduce`, `sort`)
* String Manipulation
* Regular Expressions
* Data Processing
* Console-based Programming

---
## 🚀 Month 1 — Week 4: Data Manipulation, Storage & Processing

### ✅ Challenge: Local Storage & Data Filtering

Built a JavaScript application that fetches user data from the JSONPlaceholder API, processes the dataset using modern array methods, and persists the processed results using the Web Storage API.

**API Used:**

* https://jsonplaceholder.typicode.com/users

**Key features:**

* Fetches user data from an external API
* Uses `.filter()` to extract data based on specific conditions
* Uses `.map()` and `.reduce()` to transform and calculate information from the dataset
* Calculates aggregate metrics from the processed data
* Saves processed data to `localStorage`
* Checks `localStorage` on page load before making another API request
* Loads previously processed data instantly when available
* Handles empty storage states gracefully
* Handles network/API failures with error handling

**JavaScript concepts practiced:**

* `fetch()`
* `.map()`
* `.filter()`
* `.reduce()`
* `localStorage`
* Conditional logic
* Error handling
* Data transformation
* Asynchronous JavaScript

---

## 🚀 Month 1 — Week 5: Server-Side JavaScript & Node.js Data Pipelines

### ✅ Challenge: Command-Line Data Processor

Built a standalone Node.js command-line tool named `data-processor.js` that retrieves external data, processes it, and saves the results to local files.

**API Used:**

* https://jsonplaceholder.typicode.com/users

**Key features:**

* Runs directly from the command line using Node.js
* Uses native `fetch()` to retrieve external API data
* Processes and transforms the API response
* Uses `.map()`, `.filter()`, and `.reduce()` for data manipulation
* Flattens nested user information into cleaner records
* Uses Node.js `fs/promises` to work with the local file system
* Creates an `output/` directory for generated files
* Generates a formatted `users.json` file
* Generates a `report.txt` containing processing metadata
* Includes execution timestamp
* Reports the total number of records processed
* Tracks the number of filtered records
* Uses `process.argv` to accept a custom output file name from the command line

**Example command:**

```bash
node data-processor.js output_name
```

**JavaScript/Node.js concepts practiced:**

* Node.js runtime
* Command-line execution
* `process.argv`
* Native `fetch()`
* `fs/promises`
* File system operations
* JSON file generation
* Data pipelines
* Array methods
* Asynchronous programming
* Error handling
* Server-side JavaScript

---

## 📚 Skills Practiced During Week 4 & Week 5

* JavaScript (ES6+)
* Node.js
* Server-Side JavaScript
* Fetch API
* Async/Await
* Array Methods (`map`, `filter`, `reduce`)
* Data Transformation
* Local Storage
* File System Operations
* `fs/promises`
* Command-Line Interfaces (CLI)
* `process.argv`
* JSON Data Processing
* Error Handling
* API Integration
* Data Persistence
* Data Pipelines

## 🎯 Learning Progress

These tasks helped strengthen my understanding of JavaScript beyond the browser by progressing from client-side data manipulation and local storage to server-side JavaScript, command-line applications, file-system operations, and automated data processing with Node.js.


## 🎯 Purpose

These challenges were completed to improve my problem-solving skills, strengthen my understanding of modern JavaScript, and gain practical experience working with APIs, asynchronous programming, and data processing.

