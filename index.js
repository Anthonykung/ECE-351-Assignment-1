// Mortage Function
function mortgage(morP, morN, morR) {
  // Divide The Interest To Get Monthly Interest
  morR = morR / 1200;

  // To make the math easier calculate the power first
  let power = Math.pow((1 + morR), morN);

  // Calculate the Result
  let result = ( morP * morR * power ) / ( power - 1 );

  return result;
}

// Get P Function
// This will make the [p] array
function getP(outp, inP, inN, inR, count) {
  if (count == 0) {
    outp[count] = outp[count] - mortgage(inP, inN, inR);
    console.log(outp[count]);
    count++;
  }
  else if (outp[count] <= 0 && count != (inN + 1)) {
    outp[count] = outp[count - 1] - morgage(inP, inN, inR);
    console.log(outp[count]);
    count++;
  }
  return count;
}

// For Part A
function partA() {
  console.log("Part A");

  // Total 15 Years Payment
  // 15*12 is the number of months in 15 years
  // * (15*12) is multiplying the momthly payment
  // returned by mortgage function by the total
  // number of months to get the total payment
  let if15 = mortgage(300000, 15*12, 3.25) * (15 * 12);
  console.log("15 Years: $", if15.toLocaleString('en'));

  // Total 30 Years Payment
  // 30*12 is the number of months in 30 years
  // * (30*12) is multiplying the momthly payment
  // returned by mortgage function by the total
  // number of months to get the total payment
  let if30 = mortgage(300000, 30*12, 3.25) * (30 * 12);
  console.log("30 Years: $", if30.toLocaleString('en'));

  // Get Potential Saving
  let posav = if30 - if15;
  console.log("Potential Saving: $", posav.toLocaleString('en'));
}

// For Part B
function partB() {
  console.log("Part B");

  // Biweekly Payment
  // mortgage function return the monthly payment
  // the problem state the biweekly payment is half
  // of the monthly so divide by 2
  let biweekly = mortgage(300000, 30*12, 3.25/26) / 2;

  // Total Biweekly Payment
  // multiply by the total number of biweekly
  // payment by 30 years X 12 months X 2 biweeks
  let ifbi = biweekly * (30 * 12 * 2);
  console.log("Biweekly: $", ifbi.toLocaleString('en'));

  // Total 30 Years Payment
  // 30*12 is the number of months in 30 years
  // * (30*12) is multiplying the momthly payment
  // returned by mortgage function by the total
  // number of months to get the total payment
  let if30 = mortgage(300000, 30*12, 3.25) * (30 * 12);
  console.log("30 Years: $", if30.toLocaleString('en'));

  // Get Potential Saving
  let posav = if30 - ifbi;
  console.log("Potential Saving: $", posav.toLocaleString('en'));
}

partA();
console.log("\n");
partB();