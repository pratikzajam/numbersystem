const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  
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
            console.log(`prime numbers are ${i}`);
        }
  }