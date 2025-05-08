console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    for (let i = 0; i < Math.abs(count); i++)
    {
        if (i % 2 !=  0)
        {
            console.log(i);
        }
        else if  (i % 2 == 0)
        {
            continue;
        }
        

    }

}


printOdds(8);
printOdds(-5);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age)

{

    let aboveSixteen = `Congrats ${name}, you can drive!`;
    let belowSixteen = `Sorry ${name}, but you need to wait until you are 16.`;

    console.log(`Hi, ${name} ! `);

    if (age < 16)
    {
        console.log(belowSixteen);
        
    }
    else
    {
        console.log(aboveSixteen);
    }



}

checkAge("Shannon", 14);
checkAge("Brad", 25);


//BONUS PROBLEMS 3 - 5  --> Complete Later!

//Exercise 3


//Exercise 4


//Exercise 5
