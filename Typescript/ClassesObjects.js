var obj = {
    id: 0,
    name: "Meghali"
};
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
var arr = [
    {
        id: 1,
        name: "Meghali",
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["jan", "May", "june"],
        result: [
            {
                sub: "M1",
                marks: 40
            },
            {
                sub: "M2",
                marks: 50
            },
            {
                sub: "M3",
                marks: 60
            }
        ]
    },
    {
        id: 2,
        name: "Rounak",
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["jan", "May", "june"],
        result: [
            {
                sub: "M1",
                marks: 70
            },
            {
                sub: "M2",
                marks: 80
            },
            {
                sub: "M3",
                marks: 90
            }
        ]
    }
];
for (var i = 0; i < arr.length; i++) {
    console.log("\n               Id = ".concat(arr[i].id, "\n               name = ").concat(arr[i].name, "\n               Country = ").concat(arr[i].country.cid, "\n               Country = ").concat(arr[i].country.cname, "\n               Month = ").concat(arr[i].month.join("|"), "\n       "));
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
    arr[i].result.forEach(function (item) {
        console.log("\n                     subject: ".concat(item.sub, "\n                     marks: ").concat(item.marks, "\n            "));
    });
}
