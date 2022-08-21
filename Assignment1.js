// program to find whether a given year is a leap year or not
console.log("Problem 1")
let year = 2000
checkleapYear(year) 
function checkleapYear(year)
{
    if((year % 4 == 0 ) && (year % 100 != 0) || (year % 400 == 0))
    {
        console.log(year + " is a leap year ")
    }
    else
    {
        console.log(year + " is not a leap year")
    }
}
console.log("--------------------------------------------------------------------------------")
//---------------------------------------------------------------------
// program to convert temperature to convert tepmeratures to and from celsius , Fahrenheit
console.log("Problem 2")
let tempInC = 55
let tempInF = 131
convertCelsiusToF(tempInC)
convertFahrenhietToC(tempInF)

function convertCelsiusToF (temp)
{
    let tempInF
    tempInF = (temp * 1.8) + 32
    console.log(`${tempInC} degree in celsius is equal to ${tempInF} Fahernheit`)
}

function convertFahrenhietToC(temp)
{
    let temInC
    temInC = (temp - 32)/1.8
    console.log(`${tempInF} degree in Fahernheit is equal to ${tempInC} Celsius`)

}
console.log("--------------------------------------------------------------------------------")
//------------------------------------------------------------------------
// program to find the factorial of a number
console.log("Problem 3 ")
let num = 6
findFactorial(num)
function findFactorial(num)
{
    if (num < 0 )
    {
        console.log("Error! Factoril number for negative number does not exist")
    }
    else if (num == 0 )
    {
        console.log("The factorial of 0 is 1")
    }
    else
    {
        let fact = 1 
        for(let i = num ; i >= 1 ; i--)
        {
            fact = fact * i
        }
        console.log("The factorial of " + num + " is " + fact)
    }
}


