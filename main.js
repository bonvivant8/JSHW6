let str='';
for (let i=10;i<=20;i++)
{
    str=str+i+',';
}
console.log(str)


for ( let i=10;i<=20;i++)
{
   console.log(`sqrt${i} = ${i*i}`);
}



for ( let i=1;i<=10;i++)
{
    console.log(`sqrt ${i} * 7 = ${i*7}`);
}



let sum=0;
for ( let i=1;i<=15;i++)
{
    sum+=i;
}
console.log(sum);



let arMean=0;
for ( let b=1;b<=500;b++)
{
    arMean+=b;
}
console.log(arMean/500)



let evenSum=0;
for (let t=30;t<=80;t++)
{
    if (t%2===0)
    {
        console.log(t)
        evenSum=evenSum+t
    }
}
console.log(evenSum);


for (let r=100;r<=200;r++)
{
    if(r%3===0)
    {
        console.log(r)
    }
}


let oneNumber =prompt ('Enter your number');
let divisorSum=0;
for (let d=1;d<=oneNumber;d++)
{
    if (oneNumber%d===0)
    {

        console.log(`Number ${oneNumber} can be divide by ${d}`);

        if(d%2===0)
        {
            divisorSum+=d
            console.log(`Even divisor is ${d}`);

        }

    }

}
console.log(`The sum of the even divisors is ${divisorSum }`)



for (let x=1;x<=10;x++)
{
  console.log(` • Multiplication table for ${x}`)
    for ( let j=1; j<=10;j++)
    {
        console.log(` ${x}*${j}=${x * j}`);

    }
}

