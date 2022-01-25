const employees = [
    {
    name: "John",
    age: 30,
    rank: 4,
    },
    {
    name: "Jane",
    age: 25,
    rank: 5,
    },
    {
    name: "Jack",
    age: 35,
    rank: 3,
    },
    {
    name: "Jill",
    age: 40,
    rank: 2,
    },
    {
    name: "Joe",
    age: 45,
    rank: 1,
    },
    ];
    //let s=employees.map((value)=>value.rank);
    employees.sort((pre,curr)=>pre.rank-curr.rank);
    console.log(employees);
