let username : string[]=[`Eric`,`Mike`,`username`,`strck`];
username.forEach(Element=>{
    if(Element==`username`)
    console.log(`Hello admin, would you like to see a status report?`);

    else
    console.log(`Hello ${Element}, thank you for logging in again.`);
});