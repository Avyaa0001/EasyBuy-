document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loanForm");
    const resultDiv = document.getElementById("result");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const amount = parseFloat(document.getElementById("amount").value);
      const rate = parseFloat(document.getElementById("rate").value);
      const years = parseFloat(document.getElementById("years").value);
  
      if (isNaN(amount) || isNaN(rate) || isNaN(years) || amount <= 0 || rate <= 0 || years <= 0) {
        resultDiv.innerHTML = `<span style="color:#ff4ff6;"> Enter valid positive numbers!</span>`;
        resultDiv.style.transform = "scale(1.05)";
        return;
      }
  
      const monthlyRate = rate / 100 / 12;
      const totalPayments = years * 12;
  
      const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
                  (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
      resultDiv.innerHTML = `
        <div style="animation: popIn 0.5s ease;">
          💸 Your monthly EMI is: <strong>₹${emi.toFixed(2)}</strong>
        </div>
      `;
  
      resultDiv.style.color = "#39ff14";
      resultDiv.style.transform = "scale(1.1)";
    });
  });