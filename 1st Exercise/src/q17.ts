import inviteList3 from "./q16";

console.log(` I can invite only two people for dinner`);

let temp : number=inviteList3.length;
for(let i=0; i<(temp-2); i++)
{
    console.log(`I'am sorry ${inviteList3.pop()} you i can't invite you to dinner`);
}

console.log(inviteList3);

for(let i=0; i<=2; i++)
{
    console.log(`Mr.${inviteList3.pop()} you are invited to the dinner`);
    i++;
}

console.log(inviteList3);