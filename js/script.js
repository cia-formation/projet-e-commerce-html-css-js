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
