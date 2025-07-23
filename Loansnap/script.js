function calculateLoan() {
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const term = parseFloat(document.getElementById("term").value);
  
    if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
      alert("Please fill out all fields with valid numbers.");
      return;
    }
  
    const interest = (amount * rate * term) / 100;
    const total = amount + interest;
    const monthly = total / (term * 12);
  
    document.getElementById("loanAmountDiv").innerHTML = `
      <h3>Loan Amount</h3>
      <p>₹${amount.toFixed(2)}</p>
    `;
  
    document.getElementById("totalInterestDiv").innerHTML = `
      <h3>Total Interest</h3>
      <p>₹${interest.toFixed(2)}</p>
    `;
  
    document.getElementById("monthlyEMIDiv").innerHTML = `
      <h3>Monthly EMI</h3>
      <p>₹${monthly.toFixed(2)}</p>
    `;
  
   
    setTimeout(() => {
      window.location.href = "thankyou.html";
    }, 2000); 
  }