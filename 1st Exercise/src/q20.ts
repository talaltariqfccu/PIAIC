var likings : string[] = [`Fairy Meadows`,`Neelum Valley`,`Switzerlnd`,`Urdu`,`Good Will Hunting`];
let i =1;
console.log(`LIST OF MY FAVOURITE THINGS`)
while(likings.length!=0)
{
    console.log(`${i}. ${likings.pop()}`);
    i++;
}

likings.forEach(i=>i.startsWith)