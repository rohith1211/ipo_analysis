function toggleSection(section) {
    const sections = ['upcoming', 'ongoing', 'closed'];
    sections.forEach(s => {
        const element = document.getElementById(s);
        if (s === section) {
            element.classList.toggle('hidden'); // Toggle the current section visibility
        } else {
            element.classList.add('hidden'); // Hide other sections
        }
    });
}
function toggleLogin() {
    var loginForm = document.getElementById("loginForm");
    loginForm.classList.toggle("hidden");
}

function showIPOs(type) {
    const ipoSections = ['sme', 'large', 'closed-sme', 'closed-large'];
    ipoSections.forEach(s => {
        const element = document.getElementById(s);
        element.classList.add('hidden');
    });

    const activeIPO = document.getElementById(type);
    activeIPO.classList.remove('hidden');
}
// Open the modal
function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initialize the page with the correct period (year)
window.onload = function() {
    // Period dropdown already has year options (no months to add now)
};
