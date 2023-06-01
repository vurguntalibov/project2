// let ali=[2,5,9,10,15,17];
// let veli=[];
// for (let x= 0; x <ali.length;x++) {   
//  veli.push(ali[x]*2)
// };
// console.log(veli);
// 


//   For function
// let ali=[5,10,15,20];
// let soyad=[];
// function samir(x){
//     for (let y= 0; y<x.length; y++) {
//      soyad.push(x[y]*2);
//     }
// };
// samir(ali);
// console.log(soyad);


// let numbers=[5,10,15,20];
//  numbers.forEach(function y(number) {
//     console.log(number*2);
//  })






//     let ad = [
//         { name: "Mauro Icardi", age: 30 },
//         { name: "Vini Junior", age: 22 },
//         { name: "Erling Haaland", age: 25 },
//         { name: "David Alaba", age: 28 },
//         { name: "Tomas Muller", age: 45 },
//         { name: "Leo Messi", age: 50 },
//     ];
// let ali=ad.filter(function (samir) {
//     return samir.age>30;
// })
// console.log(ali);




// const names = ['Samir' , 'nigar' , 'Asim' , 'Ali']
// const limit = names.filter(name => name.length <=4)
// console.log(limit);


// const people = [
//     {
//         name: 'Niyazi',
//         age: 23
//     },
//     {
//         name: 'Malik',
//         age: 25
//     },
//     {
//         name: 'Kenan',
//         age: 12
//     },
//     {
//         name: 'Elvin',
//         age: 15
//     },
// ]
// const b=people.filter(x=> x.age>15);
// console.log(b);

// const people = [
//     {
//         name: 'Niyazi',
//         age: 23
//     },
//     {
//         name: 'Malik',
//         age: 25
//     },
//     {
//         name: 'Kenan',
//         age: 12
//     },
//     {
//         name: 'Elvin',
//         age: 15
//     },
// ]
// const a=[];
// const b=people.filter(function(ali){
//     return ali.age>15
// });
// console.log(b);



// const people = [
//     {
//         name: 'Niyazi',
//         age: 23
//     },
//     {
//         name: 'Malik',
//         age: 25
//     },
//     {
//         name: 'Kenan',
//         age: 12
//     },
//     {
//         name: 'Elvin',
//         age: 15,
//         }];
// const b=[];
// for (let x =0; x <people.length; x++) {if(people[x].age>15) b.push(people[x])
//   };
// console.log(b);



// let a=[1,2,4,8,9];
// let b=c=>{a.push(c)}
// b(10)
// b(15)
// b(18)
// console.log(a);


// let a=[1,2,4,8,9];
// let b=c=>{if(!a.includes(c)) a.push(c)};
// b(1)
// b(2)
// b(10)
// b(20)
// console.log(a);
  

// const people = [
//     {
//         name: 'Niyazi',
//         age: 23
//     },
//     {
//         name: 'Malik',
//         age: 25
//     },
//     {
//         name: 'Kenan',
//         age: 12
//     },
//     {
//         name: 'Elvin',
//         age: 15
//     },
// ]

// const adults = people.filter(person => person.age >= 18);
// console.log(adults)
// // const adult =  people.filter(person => person.age === 15);
// // // console.log(adult)


// const people = [
//     {
//         name: 'Niyazi',
//         age: 23
//     },
//     {
//         name: 'Malik',
//         age: 25
//     },
//     {
//         name: 'Kenan',
//         age: 12
//     },
//     {
//         name: 'Elvin',
//         age: 15
//     },
// ]

// const findName = people.filter((person => person.name.toLowerCase().includes('kenan'))); // boyu kicik herf qebul etmir
// console.log(findName)
  

// const people = [
//     {
//         name: 'Niyazi',
//         age: 23
//     },
//     {
//         name: 'Malik',
//         age: 25
//     },
//     {
//         name: 'Kenan',
//         age: 12
//     },
//     {
//         name: 'Elvin',
//         age: 15
//     },
// ]
// const ali=[];
// people.forEach( x=> {if (x.age>15) {
//     ali.push(x);
// }
    
// });
// console.log(ali);

// const people = [
//     {
//         name: 'Niyazi',
//         age: 23
//     },
//     {
//         name: 'Malik',
//         age: 25
//     },
//     {
//         name: 'Kenan',
//         age: 12
//     },
//     {
//         name: 'Elvin',
//         age: 15
//     }
// ];
//    const ali=[];
//    const y=0;
//    people.forEach(function(x){
//     ali.push(x);
//     y=x.age+y;
//    });
 
// console.log(ali);
// console.log(y);
  
//  const employees = [
//         { name: "David Carlson", age: 30 },
//         { name: "John Cena", age: 22 },
//         { name: "Mike Sheridan", age: 25 },
//         { name: "David Alaba", age: 28 },
//         { name: "Tomas Muller", age: 45 },
//         { name: "John Carte", age: 50 }
//     ];
    
//     let user = [];
//     let y = 0;
//   employees.forEach((x)=>{
//     if(x.age>30)
//    { user.push(x);
//    y+=x.age}
// });
// console.log(user);
// console.log(y);

   /////sort metodu ile/////

// var say = [170, 92, 260, 12, 44, 77, 180, 150, 16];
// say.sort((a,b)=>
// {return a-b}
// );
// console.log(say);





// const basket = [
//   {
//     model: "Samsung A71",
//     price: 1700,
//   },
//   {
//     model: "Beko 55",
//     price: 1500,
//   },
//   {
//     model: "Apple 13",
//     price: 2000,
//   },
// ];
// basket.sort();
// console.log(basket);

// let alfa=basket.sort((x,y)=>{
//     return x.price-y.price
// });
// console.log(alfa);

////ternal usul ile yazanda hem reqemleri hem de herfleri azdan coxa yaza bilerik.///

// let alfa=basket.sort((a,b)=>(
//     a.model > b.model ? 1: -1)
// );
// console.log(alfa);


// var say = [12, 44, 77, 180, 150, 16];
// let y=say.find((x)=>{
//  return x>44 }
// );
// console.log(y);

///reduce metodu

// const say = [12, 44, 77, 180, 150, 16];
// let alfa=say.reduce(function(call,number){
//     return call+number
// });
// console.log(alfa);


    //  const basket = [
    //         {
    //             model: "Samsung A71",
    //             price: 700
    //         },
    //         {
    //             model: "Samsung A51",
    //             price: 500
    //         },
    //         {
    //             model: "Samsung S20",
    //             price: 1500
    //         }
    //     ]

    //     let sum = basket.reduce((value, item) => value + item.price, 0); // baslangic deyeri vermek lazimdi burada 0
    //     console.log(sum);


    ////tapsiriqlar////
    const companies = [
        {name:'Fogito' , category:'Development' , start:2002 , end:2021},
        {name:'Fahovo' , category:'Finance' , start:1998 , end:2023},
        {name:'Marandi' , category:'Design' , start:2012 , end:2022},
        {name:'Kapital' , category:'Technology' , start:1992 , end:2015},
        {name:'Pasha' , category:'Retail' , start:1999 , end:2005},
        {name:'Rabite' , category:'Finance' , start:2006 , end:2009},
        {name:'Irshad' , category:'Development' , start:2004 , end:2021},
        {name:'AzGranata' , category:'Design' , start:1993 , end:2011},
        {name:'AzerSun' , category:'Development' , start:1997 , end:2001},
        {name:'Veyseloglu' , category:'Design' , start:1988 , end:2018},
    ];
    //     /foreach ile nameleri tapmaq///
    //   let choose=[];
    //   companies.forEach(function (x) {
    //     choose.push(x.name)
    //   });
    //   console.log(choose);

            // /map ile nameleri tapmaq///
            
            // let choose=[];
            //   companies.map((x)=>{
            //     choose.push(x.name)
            //   });
            //   console.log(choose);
        

        //      ///for-dan istifade edib nameleri tapmaq//
        //     let choose=[];
        //    for (let index = 0; index <companies.length; index++) {
        //     choose.push(companies[index].name)};
        //      console.log(choose);


        // Map ile start ve end arasindaki il araligini tapin///
            // let choose=[];
            // companies.map(function(differ)
            // {
            //     choose.push(differ.end - differ.start)
            //     return
            // });
            // console.log(choose);



            // 3.Map istifade ederek  ages  arrayindeki reqemleri 10-na vurun  ///

        // const ages = [30 , 22 , 16 , 33 , 32 , 45 , 63 , 34 , 24 , 21 , 27 , 10 , 19 , 55]
        //  let choose=[];
        //  ages.map((numeral)=>{
        //   y=numeral*10;
        //  return choose.push(y)
         
        //  });
        //  console.log(choose);

        //  // 4.Filter ile ages  arrayindeki 45-den yuxari olan reqemleri tapin//
        // const ages = [30 , 22 , 16 , 33 , 32 , 45 , 63 , 34 , 24 , 21 , 27 , 10 , 19 , 55];   
        // let choose=[];
        // ages.filter((numeral)=>{
        //     if (numeral>45)
        //     return choose.push(numeral)
        // })
        // console.log(choose);

       // 5.Filter istifade ederek category:'Development' olanlari tapin//

    // let choose=[];
    // companies.filter((x)=>{
    //    if(x.category==="Development"){
    //     return choose.push(x)}});
    //     console.log(choose);


   //// 6.Filter ile company.start >= 1988 ve company.end < 2014 araligini tapin /////
        //  let count=[];
        //  companies.filter( (x)=>{
        //     if(x.start>=1988)
        //     if(x.end < 2014)
        //  {return count.push(x)}
        //  });
        //  console.log(count);

//    //// 7.Filter ile company.end - company.start edende 25 olanlari goturun.
//         let count=[];
//         companies.filter((x)=>{
//             if(x.end-x.start===25)
//             return count.push(x)
//         })
//        console.log(count);



     ///8.Sort ile companies arrayin start-a gore sort edin 
        //  let count=companies.sort(function(x,y){
        //  return x.start-y.start})
        //  console.log(count);

    ///8.Sort ile companies arrayin start-a gore sort edin ternar metod ile
        //    let count=companies.sort((x,y)=>(x.start>y.start ?1:-1))
        //    console.log(count);
 
   

    //    /*/ 9.Sort ile companies arrayni name-lerini sort edin  localcompare metodu ile */

    // //     let count=companies.sort((x,y)=>(x.name>y.name?1:-1));
    // //     console.log(count);
    //         let count=companies.sort((x,y)=>x.name.localeCompare(y.name));
    //         console.log(count);
      
           

       // 10.Sort ile ages  arrayini sort edin  ///
    //     const ages = [30 , 22 , 16 , 33 , 32 , 45 , 63 , 34 , 24 , 21 , 27 , 10 , 19 , 55];   
    //     let count=ages.sort(function(a,b){
    //     return a-b
    // });
    //     console.log(count);


    // 11.Reduce ile ages arrayindeki numberlarin cemin tapin
    //  const ages = [30 , 22 , 16 , 33 , 32 , 45 , 63 , 34 , 24 , 21 , 27 , 10 , 19 , 55];   
    //  let count=ages.reduce((a,b)=>{
    //   return a+b
    //  });
    //  console.log(count)

     // 12.Reduce ile nece eded category oldugun tapin  ////  
    //     let count=companies.reduce((x,y)=>{
    //     let a=y.name;
    //     if (a in x)
    //     {x[a]++}
    //     else{x[a]=1}
    //     return x
    // },{}
    //     );
    //     console.log(count);


    //   12. ///Reduce ile nece eded name oldugunu tapin //
    // let count=companies.reduce((x,y)=>{
    //         let a=y.category;
    //         if (a in x)
    //         {x[a]++}
    //         else{x[a]=1}
    //         return x
    //     },{}
    //         );
    //         console.log(count);

     
        //13.Reduce ile bir name-den nece eded oldugunu tapin//
        // let count=companies.reduce((x,y)=>{
        //  if( y.category in x) {}
        //     });
        //     console.log(count);
         



        // 14.Reduce ile Categorye gore qrublasdirin//
        // let count=companies.reduce((x,y)=>{
        // return x+y.category
        // });
        // console.log(count);
     




   //interval metodu//
    ///5e kimi isleyecek.sonra dayanacaq//

        // let count=0
        // let hour=setInterval(() => {
        //   if(count==5) {clearInterval(hour)}
        //  console.log(count); count ++;  
        // }, 2000);
     

        ////  try  catch metdu  ////

// let a=5;
// try{
//     console.log(b)
// }
// catch(error){
//     console.log(error,"burada hec ne tapilmadi")
// }

    ///  localStorage metodu ile veb sehifenin yaddasina melumati vermek///
     
// let cars = {
//     brand: "Mercedes",
//     year: 2021,
//     colors: ["green", "gray", "blue"],  
//     model: { e240: 1998, e220: 2012, gallery: "Avto777" },
//     stock: true,
//   };
//      localStorage.setItem("ali",JSON,stringify(cars));


    ///  localStorage metodu ile veb sehifenin yaddasina melumati vermek///

// let cars = {
//     brand:"BMW",
//     year : 2023,
//     colors:["black" , "red" , 'white'],
//     model:{x5:2010 , x6:2015 , gallery:"Avto888"},
//     stock:true
// }
// localStorage.setItem('y', JSON.stringify(cars))
   

    ///  localStorage metodu ile veb sehifenin yaddasina verilmis melumati ekrana getirmek.yeni consol logla ehrana getirmek/////
    
// let a=JSON.parse(localStorage.getItem('y'));
// console.log(a);