document.getElementById("loanForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const P = parseFloat(document.getElementById("loanAmount").value);
    const annualRate = parseFloat(document.getElementById("interestRate").value);
    const years = parseFloat(document.getElementById("loanTerm").value);
  
    const r = annualRate / 12 / 100; 
    const n = years * 12;
  
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const result = isFinite(emi) ? `₹${emi.toFixed(2)}` : "Invalid Input";
  
    document.getElementById("result").innerText = `🧾 Your Estimated EMI: ${result}`;
  });