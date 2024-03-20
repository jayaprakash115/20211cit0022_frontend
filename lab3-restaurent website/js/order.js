const menuItems = document.querySelectorAll('.menu li');
const subtotalSpan = document.getElementById('subtotal');
const taxSpan = document.getElementById('tax');
const totalSpan = document.getElementById('total');

// Update bill on quantity change
menuItems.forEach(menuItem => {
  const input = menuItem.querySelector('input[type="number"]');
  input.addEventListener('change', () => {
    updateBill();
  });
});

// Update bill function
function updateBill() {
  let subtotal = 0;
  let tax = 0;
  let total = 0;

  // Loop through menu items and calculate cost
  menuItems.forEach(menuItem => {
    const itemName = menuItem.querySelector('.item-name').textContent;
    const itemPrice = parseFloat(menuItem.querySelector('.item-price').textContent.slice(1));
    const quantity = parseInt(menuItem.querySelector('input[type="number"]').value);

    const itemCost = quantity * itemPrice;
    subtotal += itemCost;
  });

  // Apply tax (assuming 10%)
  tax = subtotal * 0.2;

  // Calculate total
  total = subtotal + tax;

  // Update UI elements
  subtotalSpan.textContent = `₹${subtotal.toFixed(2)}`;
  taxSpan.textContent = `₹${tax.toFixed(2)}`;
  totalSpan.textContent = `₹${total.toFixed(2)}`;
}

// Initial call to update bill
updateBill();
