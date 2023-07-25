document.addEventListener("DOMContentLoaded", function () {
    const companyLogo = document.querySelector("#company-logo");

    // Add click event listener to the company logo
    companyLogo.addEventListener("click", function (event) {
        event.preventDefault();
        scrollToTop();
    });

    // Function to scroll to the top of the page
    function scrollToTop() {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

function openSidePanel() {
    const sidePanel = document.querySelector('#sidePanel');
    sidePanel.style.right = '0';
}

// Function to close the sidebar when the close button is clicked
function closeSidePanel() {
    document.querySelector('#sidePanel').style.right = '-300px';
}

// Function to handle scrolling to the clicked section
function scrollToSection(sectionId, offset = 70) {
    // Close the sidebar
    closeSidePanel();

    // Scroll to the section with the specified ID and offset
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        const offsetPosition = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetPosition - offset,
            behavior: 'smooth',
        });
    }
}
