//BISMILLAH
let monthlyBudget = 0;
let expenses = [];

let budgetInput = document.getElementById("budget-input");
let budgetInfo = document.getElementById("budget-info");
let expenseDescriptionInput = document.getElementById("description-input");
let expenseAmountInput = document.getElementById("amount-input");
let expenseDateInput = document.getElementById("date-input");
let expenseInfo = document.getElementById("expense-info");
let budgetDisplay = document.getElementById("budget-display");
let expenseTableBody = document.getElementById("expense-table-body");
let remainingBudget = document.getElementById("remaining-budget");
// day 4
    function addBudget() {
    let budget = parseInt(budgetInput.value);
    if (isNaN(budget) || budget <= 0) {
        budgetInfo.textContent = "Invalid budget amount";
        return;
        }
    monthlyBudget = budget;
    budgetInfo.textContent = "Monthly budget added: $" + monthlyBudget.toFixed(2);
    budgetDisplay.textContent = "Monthly Budget: $" + monthlyBudget.toFixed(2);
    budgetInput.value = "";
    updateRemainingBudget();
    }
//day 7

    function addExpense() {
        let description = expenseDescriptionInput.value;
        let amount = parseFloat(expenseAmountInput.value);
        let date = expenseDateInput.value;
        if (description.trim() === "" || isNaN(amount) || amount <= 0 || date === "") {
            expenseInfo.textContent = "Invalid expense details";
             return;
        }
        let expense = { description, amount, date };
        expenses.push(expense);
         renderExpenseTable();
        expenseDescriptionInput.value = "";
         expenseAmountInput.value = "";
        expenseDateInput.value = "";
        expenseInfo.textContent = "Expense added successfully";
        updateRemainingBudget();
    }

    //day 10

    function renderExpenseTable() {
        expenseTableBody.innerHTML = "";
        for (let expense of expenses) {
            let row = document.createElement("tr");
            let descriptionCell = document.createElement("td");
            descriptionCell.textContent = expense.description;
            let amountCell = document.createElement("td");
            amountCell.textContent = "$" + expense.amount.toFixed(2);
            let dateCell = document.createElement("td");
            dateCell.textContent = expense.date;
            row.appendChild(descriptionCell);
            row.appendChild(amountCell);
            row.appendChild(dateCell);
            expenseTableBody.appendChild(row);
          }
    }

    function updateRemainingBudget() {
        let totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
        let  remaining = monthlyBudget - totalExpenses;
        remainingBudget.textContent = "Remaining Budget: $" + remaining.toFixed(2);
    }
//shukr alhamdulillah