// Select the modal and toggle icon elements
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal .action-icon'); // Close icon inside the modal

// Function to show the modal
function openModal() {
    modal.style.display = 'flex';
}

// Function to hide the modal
function closeModal() {
    modal.style.display = 'none';
}


// Login function
function login() {
    // Get the email and password values from the form
    const email = document.querySelector('.signin-form input[type="email"]').value;
    const password = document.querySelector('.signin-form input[type="password"]').value;

    if (email === 'admin@email' && password === 'admin') {
        window.location.href='../html/admin/liste-produits.html'
    } else {
        window.location.href='../html/client/liste-produits.html'
    }
}