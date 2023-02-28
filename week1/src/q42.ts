let magicians1 : string[] = [`Fahad`,`Moni`,`Bobi`];

function make_great(): void
{
    for(let i =0; i<magicians1.length;i++)
    magicians1[i]=`The Great `+magicians1[i];
}

make_great();
console.log(magicians1);