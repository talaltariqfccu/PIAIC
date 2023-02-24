let currenr_user: string[]=[`Talal`,`Bilal`,`Ayan`,`Zakwan`,`Adnan`];
let new_user: string[]=[`Saad`,`Talal`,`Umair`,`Umer`,`Zakwan`];

currenr_user.forEach(Element1=>{
    new_user.forEach(Element2=>{
        if(Element2==Element1)
        console.log(`This person will need to enter a new username`);
        
        else
        console.log(`This username is available`);
    })
});