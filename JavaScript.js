/* 1. Create an array of people's names called myArray. This will be
      the default original list of names. */
let myArray = ['Lawrence', 'Mike', 'John', 'Larry', 'Maaike'];

/* 2. Select the page elements as JavaScript objects so they can
      easily be selected within the code. */
const addFriendInput = document.getElementById('addFriend');
const addFriendButton = document.getElementById('addNew');
const outputTable = document.getElementById('output');

// 3. Add event listener to the Add Friend button.
addFriendButton.addEventListener('click', addFriend);

/* Once clicked, this will get the value from the input field and pass the
    values to a function that will add the friend list to the page. */
function addFriend()
{
   const newFriend = addFriendInput.value.trim();

   if (newFriend !== '')
   {
    /* Additionally, add the new friend's name into the people's 
       names array you created */
      myArray.push(newFriend);
 
    // print name to page and clear the input field
      buildPage();
      addFriendInput.value = '';
   }
}

/* 4. Run a function to build the content on the page, using the 
      forEach() loop get all the items within the array and add them to 
      the page. Include 0 as a default for the vote count, as all 
      individuals should start on zero votes. */
function buildPage()
{
 // clear the existing content in the table.
    outputTable.innerHTML = '';
    myArray.forEach(main);
}

/* 5. Create a main function that will create the page elements, starting 
      with the parent table row, tr. Then create three table cell, td, 
      elements. Add content to the table cells, including the vote count 
      in the last column, the person name in the middle, and the index 
      plus 1 in the first column. */
function main(friend, index)
{
   const row = document.createElement('tr');
   const cell1 = document.createElement('td');
   const cell2 = document.createElement('td');
   const cell3 = document.createElement('td');

   cell1.textContent = index + 1;   // person number
   cell2.textContent = friend;      // person name
   cell3.textContent = 0;           // default vote count

 /* 6. Append the table cells to the table row and append the table row 
       to the output area on the page. */
   row.appendChild(cell1);
   row.appendChild(cell2);
   row.appendChild(cell3);
   outputTable.appendChild(row);

 /* 7. Add an event listener that will increase the vote counter for that 
       row when the user clicks. */
   row.addEventListener('click', function() {
    // 8. Get the text content from the last column in the row.
      let numVotes = parseInt(cell3.textContent);
      numVotes += 1;

    // 9. Update the last column with the new click counter.
      cell3.textContent = numVotes;
   });
}

buildPage();