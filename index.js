// console.log('hello');

// prog-1 check even or odd

// const no=7;

// if(no%2==0){
//     console.log('even');
// }

// else{
//     console.log('odd');
// }


// prog-2 find the maximum of 2 numbers

// a=5;
// b=9;

// if(a>b){
//     console.log('a is large');
// }

// else{
//     console.log('b is large');
// }


// prog-3 check leap year

// a=2020;
// if(a%4==0){
//         console.log('a is leap year');
//     }
    
// else{
//         console.log('a is not leap year');
// }

// prog-4 sum of natural numbers

// let a=5;
// let total=0;
// for(i=1; i<=a; i++)
// {
    
//     total=total+i;
// }
// console.log(total);


// prog-5 factorial no.

// const fact=4;
// var total=1;

// for(i=fact; i>=1; i--)
// {
//     total=total*i;
// }
// console.log(total);


// prog-6 multiplication table

// const no=5;

// for(i=1; i<=10; i++)
// {
//     console.log(no+"*"+i+"="+no*i)
// }


// prog-7 reverse the number

// let num=1234
// let rev=0
// let temp=num

// for(i=1; temp!=0; i++)
// {
//     let dig=temp%10;
//     rev=rev*10+dig;
//     temp=Math.floor(temp/10);
// }
// console.log(rev)


// prog-8 palindrom number

// let num=121
// let original=num
// let rev=0

// for(i=1; num!=0; i++)
// {
//     rev=rev*10+(num%10)
//     num=Math.floor(num/10)
// }

// if(original==rev)
// {
//     console.log("palindrom")
// }
// else
// {
//     console.log("not palindrom")
// }


// prog-9 prime number

// let num=4
// let prime=true

// if(num<=1)
// {
//     isprime=false
// }
// else{
//     for(i=2; i<=num; i++)
//     {
//         if(num%i==0)
//         {
//             isprime=false
//             break
//         }
//     }
// }

// if(isprime==true)
// {
//     console.log("prime number")
// }
// else
// {
//     console.log("not prime number")
// }


// prog-10 count digits in a number

// let num=12324
// let count=0

// while(num>0)
// {
//     num=Math.floor(num/10)
//     count++
// }
// console.log(count)


// prog-11 sum of digits

// let num=1234
// let sum=0
// for(i=0; i<String(num).length; i++)
// {
//     sum +=Number(String(num)[i])
// }
// console.log(sum)


// prog-12 check armstrong number

// let num=154
// let digit=String(num)
// let sum=0

// for(i=0; i<digit.length; i++)
// {
//     sum +=Math.pow(Number(digit[i]),digit.length)
// }
// if(sum==num)
// {
//     console.log("num is armstrong")
// }
// else
// {
//     console.log("num is not armstrong")
// }


// prog-13 phebonaki series

// let count=15
// let a=0
// let b=1

// for(i=0; i<count; i++)
// {
//     console.log(a)
//     next=a+b
//     a=b
//     b=next
// }


// prog-14 vowel and consonant

let char='v'

if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||
char=='A' || char=='E' || char=='I' || char=='O' || char=='U' )
{
    console.log("character is a vowel")
}
else
{
    console.log("character is a consonant")
}