
//Assignment 5(Day 5)

//Q1)Print odd numbers in an array

let oddNumbers=function(...num){      //using Anonymous function with Rest Parameter.
      for(const number of num)
      {
            if(number%2!=0)              //Condition for Checking the Number Odd or not
            {
                  console.log(number)
            }
      }

}
console.log(oddNumbers(22,34,33,45,51,621,1,562))

/*OUTPUT
33
45
51
621
1
*/

//Q2)Convert all the strings to title caps in a string array

let CaptialLetters=function(string)
{
      let string1=string.split(" ");            //split the string into an array

      for(var i=0;i<string1.length;i++)         //ititrate through the loop
      {
            string1[i]=string1[i].charAt(0).toUpperCase()+string1[i].slice(1);
      }

      let string2=string1.join(" ");
      console.log(string2);
}
CaptialLetters("hi i am nishitha from guvi as a student")

/*OUTPUT
Hi I Am Nishitha From Guvi As A Student
*/

//Q3)Sum of all numbers in an array

let SumNumber=function(...number)               //using Rest parameter
{
      let sum=0;                                      //initalize the sum as 0
      for(var i=0;i<number.length;i++)
      {
            sum=sum+number[i];
      }
      console.log(sum);

}

SumNumber(10,20,30,3,5,22)

/*OUTPUT
90
*/

//Q4)Return all the prime numbers in an array

let primeNumber=function(...pnumber)
{
      //let primes=[];
      for(var i=2;i<=pnumber.length;i++)        
      {
            if(pnumber[i]%2!=0)                       //checking the number divisible by 2.
            {
                  console.log(pnumber[i]);
                  // return pnumber;
            }
      }
      //console.log(primes);
}
primeNumber(22,17,19,23,29,32,144,97,26)

/*OUTPUT
19
23
29
97
*/

//Q5) Return all the palindromes in an array

let arr=["madam", "did","mummy","malyalam"]
let palindromes=arr.filter(function(value)
{
      // let sample=value.reverse();
      // console.log(sample)

      let n=value.length
      // console.log(n);
      for(let i=0;i<n/2;i++)
      {
            if(value[i]==value[n-i-1])
            {
                  return true;
            }
            else{
                  return false;

            }
      }
})
// let arr=["madam", "did","mummy","malyalam"]

console.log(palindromes)

//Q6)Return median of two sorted arrays of the same size.

let median=function(arr,arr1)
{
      let c=[...arr, ...arr1].sort((arr,arr1)=>arr-arr1);
      let median1=Math.floor(c.length/2);
      //console.log(median1)

      if(c.length%2!=0)                               //if Odd
      {
            return c[median1];
      }
      else
      {
            return (c[median1-1] + c[median1]) / 2;               //if the length is even
      }

      
}
arr=[1,12,15,26,38]
arr1=[2,13,17,30,45,47]
console.log(median(arr,arr1));

/*OUTPUT
17
*/

//Q7)Remove duplicates from an array

let duplicate=function(array)
{
      return[...new Set(array)]                                         //using the Set Property.
}
array=["nishitha","ram","shree","hasani","nishitha","ram"]
console.log(duplicate(array))

/*OUTPUT

['nishitha', 'ram', 'shree', 'hasani']

*/


//using arrow function

//Q1)Print odd numbers in an array

let oddNumber=(...num)=>{               //using Anonymous function with Rest Parameter.
      for(const number of num)
      {
            if(number%2!=0)              //Condition for Checking the Number Odd or not
            {
                  console.log(number)
            }
      }

}
console.log(oddNumber(22,34,33,45,51,621,1,562))

//Q2)Convert all the strings to title caps in a string array

let CaptialLetter=(string)=>
{
      let string1=string.split(" ");                        //split the string into an array

      for(var i=0;i<string1.length;i++)                     //ititrate through the loop
      {
            string1[i]=string1[i].charAt(0).toUpperCase()+string1[i].slice(1);
      }

      let string2=string1.join(" ");
      console.log(string2);
}
CaptialLetter("hi i am nishitha from guvi as a student")

//Q3)Sum of all numbers in an array

let SumNumbers=(...number)=>                          //using Rest parameter
{
      let sum=0;                                      //initalize the sum as 0
      for(var i=0;i<number.length;i++)
      {
            sum=sum+number[i];
      }
      console.log(sum);

}

SumNumbers(10,20,30,3,5,22)

//Q4)Return all the prime numbers in an array

let primeNumbers=(...pnumber)=>                             //checking the number divisible by 2. 
{
      //let primes=[];
      for(var i=2;i<=pnumber.length;i++)
      {
            if(pnumber[i]%2!=0)
            {
                  console.log(pnumber[i]);
                  // return pnumber;
            }
      }
      //console.log(primes);
}
primeNumbers(22,17,19,23,29,32,144,97,26)

//Q5)Return all the palindromes in an array

let samplearray=["madam", "did","mummy","malyalam","aba"]
let palindrome=samplearray.filter((value)=>
{
      // let sample=value.reverse();
      // console.log(sample)

      let n=value.length
      // console.log(n);
      for(let i=0;i<n/2;i++)
      {
            if(value[i]==value[n-i-1])
            {
                  return true;
            }
            else{
                  return false;

            }
      }
})
// let arr=["madam", "did","mummy","malyalam"]

console.log(palindrome)