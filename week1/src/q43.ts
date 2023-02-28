let magicians2 : string[] = [`Fahad`,`Moni`,`Bobi`];

function make_great2(arr:string[]): string[]
{
    for(let i =0; i<arr.length;i++)
    arr[i]=`The Great `+arr[i];

    return arr;
}

console.log(magicians2);
console.log(make_great2(magicians2));