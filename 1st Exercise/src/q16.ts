let inviteList3 : string[] = ["Bilal", "Auns", "Saad"];
console.log(inviteList3[1]);
inviteList3[1]="Zaki";
for(let i=0; i<inviteList3.length;i++)
console.log(`Mr.${inviteList3[i]} you are invited to our upcomig party`);

console.log(`We have found' a bigger table for the party`);
inviteList3.unshift(`AbuBakar`);
inviteList3.unshift(`Malala`);
inviteList3.splice((inviteList3.length)/2,0,`AYan`);
inviteList3.push(`Umer`);

console.log(inviteList3);

export default inviteList3;
