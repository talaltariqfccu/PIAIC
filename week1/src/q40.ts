function make_album(name:string,title:string, tracks?:number):object{
    const tempObject:{
        artistName:string,
        albumTitle:string
        totalTracks?:number|String
    }={artistName:name, albumTitle:title,totalTracks:tracks};

    return tempObject;
}

console.log(make_album(`adele`,`bornfire`));
console.log(make_album(`adele`,`hello`));
console.log(make_album(`adele`,`why`));
console.log(make_album(`Arjit`,`wja`,4));

