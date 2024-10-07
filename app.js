const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  let  primeNumbers=[];

  
  for(i=0;i<=numbers.length-1;i++)
  {
    let counter=0;
    for(j=1;j<=numbers.length-1;j++)
    {
        if(i%j==0)
        {
            counter++;
        }
       
       
       
    }
    if(counter==2)
        {
           primeNumbers.push(i)

        }
   
  }

  console.log(primeNumbers)

let min=primeNumbers[0];
let max=-Infinity;

  for(i=0; i<=primeNumbers.length-1;i++)
  {
if(min>primeNumbers[i])
{
    min=primeNumbers[i];
}

if(max<primeNumbers[i])
    {
        max=primeNumbers[i];
    }

  }

  console.log(max);
  
  console.log(min);

  