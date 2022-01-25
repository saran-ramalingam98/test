const s = [{"region": "Europe", "population":

2525285, "startOfWeek": "sunday",},{"region": "Asia", "population": 50025285, "startOfWeek":

"monday",},{"region": "Africa", "population":

5425285, "startOfWeek": "sunday",},{"region": "USA", "population": 525285, "startOfWeek":

"monday",},{"region": "Antartica", "population":

25285, "startOfWeek": "monday",}]

let saran = s.filter(num=>num.population > 200000);
console.log(saran);

let sr = s.filter(num=>num.startOfWeek === "monday");
console.log(sr);

console.log(s.filter((value)=>(value.region)));