              function calculateTotal() {
                // Get the input elements
                var quantityInput = document.getElementById('first');
                var subtotalInput = document.getElementById('second');
                var totalInput = document.getElementById('third');
            
                // Constants
                var productPrice = 19999; // Set the product price
                var taxRate = 0.18; // 18% tax rate
            
                // Get the quantity
                var quantity = parseFloat(quantityInput.value) || 0;
            
                // Calculate subtotal and total with tax
                var subtotal = quantity * productPrice;
                var tax = subtotal * taxRate;
                var total = subtotal + tax;
            
                // Update the input values
                subtotalInput.value = subtotal.toFixed(2);
                totalInput.value = total.toFixed(2);
            }
            
            // Attach the calculateTotal function to the input events
            var quantityInput = document.getElementById('first');
            quantityInput.addEventListener('input', calculateTotal);
            
            // Initial calculation on page load
            calculateTotal();
        
            let mainimage = document.getElementById("mainimage");
              let smallimage = document.getElementsByClassName("image");
              smallimage[0].onclick=()=>{
                mainimage.src=smallimage[0].src;
              }
              smallimage[1].onclick=()=>{
                mainimage.src=smallimage[1].src;
              }
              smallimage[2].onclick=()=>{
                mainimage.src=smallimage[2].src;
              }
              smallimage[3].onclick=()=>{
                mainimage.src=smallimage[3].src;
              }