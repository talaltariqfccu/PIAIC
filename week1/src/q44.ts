let sandwishMaker=((meat:string,sauce:string,toppings:string,bread:string):void=>{
    console.log(`Your sandwich contains the following ingridients`);
    console.log(`Meat: ${meat}`);
    console.log(`Sauce: ${sauce}`);
    console.log(`Toppingd: ${toppings}`);
    console.log(`Bread: ${bread}`);
        
});

sandwishMaker(`Chicken`,`Mustard`,`Olives`,`Wholegrain`);
sandwishMaker(`Beeg`,`Ketchup`,`Mushrooms`,`Wholegrain`);
sandwishMaker(`Tuna`,`BBQ`,`Olives`,`Bran`);