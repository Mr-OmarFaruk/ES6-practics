// javaScript 3 dot ... spread operator
const ages=[11,15,48,9,22];
const ages2=[15,6,44,23,50];
const ages3=[15,26,40,13,20];
//const allages=ages.concat(ages2).concat(ages3);
const allages=[...ages, ...ages2, ...ages3];
//console.log(allages);

const business=450;
const minister=550;
const programmer=250;
const takaPoisa=[650,450,250];
//const maximum=Math.max(business,minister,programmer);
const maximum=Math.max(...takaPoisa);
console.log(maximum);