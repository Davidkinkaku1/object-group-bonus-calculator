const employees = [{
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: '47000',
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: '63500',
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: '74750',
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: '66000',
        reviewRating: 1
    },
    {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: '35000',
        reviewRating: 1
    }
]; //end employees object

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//function is getting name value from the employee object and creating a new function
function bonusCalc(employeeId) {
    let empBonus = {
        name: employeeId.name,
        bonusPercentage: 0.0,
        totalBonus: 0,
        totalCompensation: Number(employeeId.annualSalary),
    }

    if (employeeId.reviewRating <= 2) {
        empBonus.bonusPercentage = 0.0;
    } else if (employeeId.reviewRating === 3) {
        empBonus.bonusPercentage = 0.4;
    } else if (employeeId.reviewRating === 4) {
        empBonus.bonusPercentage = 0.06;
    } else if (employeeId.reviewRating === 5) {
        empBonus.bonusPercentage = 0.10;
    } else {
        // greater than 5? unsupported (do nothing)
    }


    // Check employee ID length
    if (employeeId.employeeNumber.length <= 4) {
        // add 5% to the current bonus   
        empBonus.bonusPercent += 0.05;
    }
    if (employeeId.annualSalary > 65000) {
        empBonus.bonusPercent -= 0.01;
    }
    if (empBonus.bonusPercentage > 0.13) {
        empBonus.bonusPercent = 0.13;
    } else if (empBonus.bonusPercent < 0) {
        empBonus.bonusPercent = 0.0;
    }







    return empBonus;
} // end of bonuCalc
console.log(employees);


//Looping through the array to get all the employees info so we don't have to indvidually console.log them



// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let emp of employees) {
    console.log(`Processing bonus for: ${emp.name}`);
    const bonus = bonusCalc(emp);
    console.log(`Bonus Percent: ${emp.reviewRating}`);
    console.log(`Total Bonus: ${bonus.bonusPercent * 100}`);
    console.log(`Total comp: ${bonus.totalCompensation}`);
}


// test calculations of one employees

let atticus = employees[0];
let atticusBonus = bonusCalc(atticus);
console.log(`Atticus should have a bonus of .09: ${atticusBonus.bonusPercent}`);
console.log(`Atticus should have a total compensation of 47000: ${atticusBonus.totalCompensation}`);