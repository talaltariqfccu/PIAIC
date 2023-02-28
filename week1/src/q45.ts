let a =(manufact:string,modelNm:number,...optional:string[]):object =>{

    let carObj:{
        manufavturer:string,
        modelNumber:number,
        color?:string,
        feature?:string
        others?:[]|any;
    }={
        manufavturer:manufact,
        modelNumber:modelNm,
        color:optional[0],
        feature:optional[1],
        others:optional.splice(2)
    };
    return carObj;
};

let c:object = a(`Honda`,35,`White`,`4Wd`);
let b:object = a(`Honda`,35,`White`,`4Wd`,`Galaxy ROof`,`Aerodynamic`);
// console.log(c);
console.log(b);