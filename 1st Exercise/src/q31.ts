let users1: string[]=[`Talal`,`Bilal`,`Ayan`,`Zakwan`,`Adnan`];
let users2:string[]=[];

let checkEmpty=(arr:string[]):boolean=>{
    if(arr.length==0){
    console.log(`We need some more users`);
    return true;
    }
    else{
    console.log(`We have ${arr.length} users`);
    return false;
    }
}

console.log(checkEmpty(users1));
console.log(checkEmpty(users2));