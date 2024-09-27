  const fs = require('fs');

  fs.writeFile("output.txt","Jai Shri ram",(err)=>{
    if(err) console.log("Error Occurred");
    else console.log("File written successfully");
    
  })
  console.log("Node js is the new game area");
  