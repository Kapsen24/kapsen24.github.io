function openSidePanel() {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.style.right = '0';
}

// Function to close the sidebar when the close button is clicked
function closeSidePanel() {
    document.getElementById('sidePanel').style.right = '-300px';
}

// Function to handle scrolling to the clicked section
function scrollToSection(sectionId, offset = 70) {
    // Close the sidebar
    closeSidePanel();

    // Scroll to the section with the specified ID and offset
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetPosition = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetPosition - offset,
            behavior: 'smooth',
        });
    }
}
