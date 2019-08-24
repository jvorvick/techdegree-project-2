# Techdegree Project 2

This project uses starter files provided by Treehouse's FullStack JavaScript Tech Degree program. Only the content of script.js is original coding.

This app is meant to display a list of students ten at a time, each ten being divided into a seperate page number. Each page can then be conveniently clicked through using pagination links displayed at the bottom of the app. The number of pages will depend on the length of the list of students, as the app is meant to work with any length.

To create this project, and still allow the flexibility to take any list length, functions with a heavy emphasis on loop iteration and conditional statements were implimented.  Once the program first runs and the pages are set up, the user can click each page number to view different pages of the students on the list. In order to achieve this, the Event listeners have been set up to use similar techniques to the functions, and/or to call said functions by passing the appropriate arguments to them. 

The search function is designed to show results each time a user key press is heard (provided the seach bar has been clicked on first) or the submit button is clicked. The results are still displayed by page, with clickable page links, and ten students per page. If a search yields no results, the message "No results" will be displayed on the page in lieu of any students.