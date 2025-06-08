// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    // Handle all forms except the payment form
    const forms = document.querySelectorAll('form:not(#paymentForm)');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // For Formspree forms, let them handle the submission
            if (form.action.includes('formspree.io')) {
                form.submit();
            }
            
            // Clear all form fields
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                if (input.type !== 'submit' && input.type !== 'button') {
                    input.value = '';
                }
            });
            
            // Scroll to home section
            window.location.href = '#home';
            
            // For demo purposes, show an alert
            alert('Thank you for your submission!');
        });
    });

    // Payment form handling
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const email = document.getElementById('checkout-email').value;
            const address = document.getElementById('checkout-address').value;
            const phone = document.getElementById('checkout-phone').value;
            
            // Send payment data to Formspree
            fetch('https://formspree.io/f/mwpbpzbw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    address: address,
                    phone: phone,
                    message: 'New payment received',
                    amount: document.getElementById('checkoutTotal').innerText,
                    items: Array.from(document.querySelectorAll('.checkout-item')).map(item => ({
                        name: item.querySelector('.checkout-item-name').innerText,
                        price: item.querySelector('.checkout-item-price').innerText,
                        quantity: item.querySelector('.checkout-item-quantity').innerText
                    }))
                })
            })
            .then(response => {
                if (response.ok) {
                    // Process payment with Paystack (you'll need to configure this with your actual Paystack keys)
                    const handler = PaystackPop.setup({
                        key: 'pk_test_your_paystack_key', // Replace with your Paystack public key
                        email: email,
                        amount: parseFloat(document.getElementById('checkoutTotal').innerText.replace('GH', '')) * 100, // Convert to kobo
                        currency: 'GHS',
                        ref: '' + Math.floor((Math.random() * 1000000000) + 1),
                        callback: function(response) {
                            alert('Payment complete! Reference: ' + response.reference);
                            // Clear cart and redirect
                            document.querySelector('.cart-items').innerHTML = '';
                            document.querySelector('.cart-count').textContent = '0';
                            document.querySelector('.total-amount').textContent = '0.00';
                            document.querySelector('.cart-overlay').classList.remove('show');
                            window.location.href = '#home';
                        },
                        onClose: function() {
                            alert('Payment window closed');
                        }
                    });
                    handler.openIframe();
                } else {
                    throw new Error('Failed to send payment details');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error processing your payment. Please try again.');
            });
        });
    }
});