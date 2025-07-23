function checkEligibility() {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
  
    if (isNaN(income) || isNaN(expenses) || income <= 0 || expenses < 0 || expenses > income) {
      alert("Please enter valid income and expense values.");
      return;
    }
  
    const savings = income - expenses;
    const maxLoan = savings * 60; 
    const result = `Based on your monthly savings of ₹${savings.toFixed(2)}, you are likely eligible for a loan up to ₹${maxLoan.toFixed(2)}.`;
  
    document.getElementById("resultBox").innerText = result;
  }