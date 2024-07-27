
// Step 1: Import the fs module
const fs = require('fs');
// console.log(fs)

// Step 2: Write a file rady.txt with the content: "Him is the best front programmer"
fs.writeFile('rady.txt', 'Him is the best front programmer', (err) => {
  if (err) throw err;
//   console.log('rady.txt has been created with initial content.');
  
  // Step 3: Read the content of the file rady.txt
  fs.readFile('rady.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log('Content of rady.txt:', data);
    
    // Step 4: Add to this content 'But Ronan is the funniest' and write again our file
    const updatedContent = data + ' But Ronan is the funniest';
    fs.writeFile('rady.txt', updatedContent, (err) => {
      if (err) throw err;
      console.log('Content has been updated in rady.txt.');
    });
  });
});
