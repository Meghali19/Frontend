let obj = {
    id : 0,
    name : "Meghali"
} 


//dot operator
// console.log(`

//     ID = ${obj.id}
//     Name = ${obj.name}
// `)

//2 square brackets
// console.log(`

//     ID = ${obj["id"]}
//     Name = ${obj["name"]}
// `)


//Array of object

let arr = [
    {
        id:1,
        name:"Meghali",
        country:{
            cid:1,
            cname:"India"
        },
        month:["jan","May","june"],
        result:[
            {
                sub:"M1",
                marks:40
            },
            {
                sub:"M2",
                marks:50
            },
            {
                sub:"M3",
                marks:60
            }
        ]
    },
    {
        id:2,
        name:"Rounak",
        country:{
            cid:1,
            cname:"India"
        },
        month:["jan","May","june"],
        result:[
            {
                sub:"M1",
                marks:70
            },
            {
                sub:"M2",
                marks:80
            },
            {
                sub:"M3",
                marks:90
            }
        ]
    }
]

for(let i=0; i<arr.length; i++)
{
       console.log(`
               Id = ${arr[i].id}
               name = ${arr[i].name}
               Country = ${arr[i].country.cid}
               Country = ${arr[i].country.cname}
               Month = ${arr[i].month.join("|")}
       `)
    //    for(let j=0; j<arr[i].month.length; j++)
    //    {
    //         console.log(`
    //                Months: ${arr[i].month[j]}
    //         `)
    //    }

    // for(let j=0; j<arr[i].result.length; j++)
    //    {
    //         console.log(`
    //                Sub: ${arr[i].result[j].sub}
    //                Marks: ${arr[i].result[j].marks}
    //         `)
    //    }


    //using foreach loop
    arr[i].result.forEach((item)=>{
            console.log(`
                     subject: ${item.sub}
                     marks: ${item.marks}
            `)
    });
}