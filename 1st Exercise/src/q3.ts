const nm2: string='Talal butt';
console.log(nm2.toUpperCase());
console.log(nm2.split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' '));
console.log(nm2.substring(1));