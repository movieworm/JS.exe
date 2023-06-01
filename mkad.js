let v = Number(prompt()) 
let t = Number(prompt()) 
let c; 
if (v*t>0){ 
    c=(v*t)%109 
} else { 
    c = (109 - Math.abs(v*t)%109)%109
} 
console.log(c)