for (let k = 100; k <= 200; k++) {
 if (k%3 === 0 && k%4 !== 0) {
   console.log("Loopy");
 } else if (k%3 !== 0 && k%4 === 0) {
   console.log("Lighthouse");
 } else if(k%3 === 0 && k%4 === 0) {
   console.log("LoopyLighthouse");
 } else console.log(k);

}