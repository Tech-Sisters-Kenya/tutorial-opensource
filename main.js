
// Initialize variables
let projectName = "Tech Sisters Kenya";
let isActive = true;
let memberCount = 0;

// DOM Elements
const heading = document.querySelector('h2');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('Project started!');
    initializeProject();
});

// Functions
function initializeProject() {
    memberCount++;
    console.log(`Welcome to ${projectName}`);
    console.log(`Current member count: ${memberCount}`);
}

// Basic project configuration
const config = {
    version: '1.0.0',
    author: 'Tech Sisters Kenya',
    lastUpdated: new Date().toLocaleDateString()
};
