document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simulate role-based redirection (adjust logic as needed)
    if(role === 'customer') {
        window.location.href = '/customer-dashboard.html';  // Only Room Booking
    } else if(role === 'admin' || role === 'staff') {
        window.location.href = '/admin-dashboard.html';  // Full access
    }
});
