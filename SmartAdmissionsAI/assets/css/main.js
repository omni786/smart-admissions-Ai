// Drag and drop functionality
const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop area when dragging over it
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

// Handle file selection
fileInput.addEventListener('change', handleFiles, false);

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropArea.style.borderColor = '#4a8cff';
    dropArea.style.backgroundColor = '#f0f7ff';
}

function unhighlight() {
    dropArea.style.borderColor = '#cbd5e0';
    dropArea.style.backgroundColor = 'white';
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(e) {
    const files = e.target?.files || e;
    const fileNames = [];
    
    for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
    }
    
    if (fileNames.length > 0) {
        alert('Files selected: ' + fileNames.join(', '));
        // Here you would normally upload the files to a server
    }
}

// Form submission
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', function() {
    alert('Your essay has been submitted for AI review. You will receive feedback shortly.');
});


// Toggle switches functionality
