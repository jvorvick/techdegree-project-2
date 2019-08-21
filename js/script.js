// Global variables to be interacted with through functions

const pageDiv = document.querySelector('.page');
const Students = document.querySelector('.student-list');
const students = document.querySelector('.student-list').children;
const studentsPerPage = 10;

/* 
   Function to identify and display students corresponding to a given page.
   Ten students will be displayed per page.
   Students not belonging to the given page will be hidden. 
*/
function showPage(list, page) {  
   const startIndex = (page * 10) - 10;
   const endIndex = (page * 10) - 1;
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }   
}

// The showPage function is called immediately after creation, and the first page is displayed.

showPage(students, 1);

/* 
   A div and unordered list for the students are created.
   The ul is appended to the div.
   Each student, in the form of an li, is appended to the ul in a loop.
   Each li has a numbered hyperlink attached, representing each page number.
   An event listener checks for a click on any of the ul's child lis. 
   Upon a click event, the clicked lis will obtain a class of "active."
   In addition, all other lis have their className set to null to ensure they are not "active."
   The showPage function is called immediately afterward; the corresponding arguments are passed to ensure the clicked page is displayed.
   These arguments differ depending on whether the appendPageLinks function was called in response to a search or not.
*/
function appendPageLinks (list, page) {
   const div = document.createElement('div');
   div.className = 'pagination';
   pageDiv.appendChild(div);
   const ul = document.createElement('ul');
   const li = ul.children;
   div.appendChild(ul);
   for (let i = 0; i < list.length / page; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      a.href = '#';
      a.textContent = i + 1;
      aNum = a.textContent;   
   }
   ul.addEventListener ('click', (e) => {
      const pageNum = e.target.textContent;
      for (let i = 0; i < ul.children.length; i++) {
         const a = li[i].firstElementChild;
         if (a.className = true) {
            a.className = null;
         }      
      }
      e.target.className = 'active';
      if (searchResults.length === 0) {
         showPage (students, pageNum);
      } else {
         showPage (searchResults, pageNum);
      }
   });
}

// appendPageLinks function is called to display the proper number of students on the currently active page.

appendPageLinks(students, studentsPerPage);

// Search bar

/* 
   A search bar and button are created and appended to a newly created search div.
   The searchdiv is likewise appended to the page header.
*/

const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
   searchDiv.className = 'student-search';
const search = document.createElement('input');
   search.placeholder = 'Search for students...';
const submit = document.createElement('button');
   submit.textContent = 'Search';
pageHeader.appendChild(searchDiv);
searchDiv.appendChild(search);
searchDiv.appendChild(submit);

// An empty array is declared to store the list items that match a user's search.

const searchResults = [];

// Search bar functionality

/*
   When a search triggers the performSearch function, two arguments are accepted.
   All numbered paged buttons are removed and and all contents of the searchResults variable are emptied (in case of previous searches).
   If there there is anything in the search bar, the students are iterated through. 
   Any students whose name matches or partially matches the search are displayed and added to the searchResults array.
   Any who do not match or partially match the search are not displayed.
   When the iteration is complete, appendPageLinks and showPage are called and passed the appropriate arguments.
   If there was nothing in the search bar when the performSearch function was called, the same two functions are still called.
   However, in this case appendPageLinks is passed the full list of students instead of the ones stored in the searchResults array.
   This ensures that all students are shown as they were when the webpage was initially loaded, should the contents of the search bar be deleted.
*/

function performSearch (searchInput, names) {
   let pagination = document.getElementsByClassName('pagination');
   pageDiv.removeChild(pagination[0]);
   while (searchResults.length > 0) {
      searchResults.pop();
   }
   if (searchInput.value.length !== 0) {
      for (let i = 0; i < names.length; i ++) { 
         let fullName = names[i].querySelector('h3');    
         if (fullName.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            names[i].style.display = 'block';
            searchResults.push(names[i]);
         } else {
            names[i].style.display = 'none';
         }  
      }
      appendPageLinks(searchResults, studentsPerPage);
      showPage(searchResults, 1);
   } else {
      appendPageLinks (students, studentsPerPage);
      showPage (students, 1);
   } 
}

// This click event listens for a user's click on the search button and calls the performSearch function.

submit.addEventListener('click', (e) => {
   e.preventDefault();
   performSearch (search, students);
});

// This keyup event listens for a key press when the user types something into the search bar, and then calls the performSearch function.

search.addEventListener('keyup', () => {
   performSearch (search, students);
});
