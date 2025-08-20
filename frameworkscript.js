      const fileInput = document.getElementById('fileInput');
        const fileList = document.getElementById('fileList');
        const clearBtn = document.getElementById('clearBtn');


        window.addEventListener("DOMContentLoaded", () => {
        const metadata = JSON.parse(localStorage.getItem("fileMetadata") || "[]");
        metadata.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.textContent = `${file.name} (${file.size} KB) - Tags: ${file.tags.join(', ')}`;
            fileList.appendChild(fileItem)

        });
    });

    fileInput.addEventListener('change', () => {
    fileList.innerHTML = '';
    const metadata = [];

    Array.from(fileInput.files).forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        const sizeKB = Math.round(file.size / 1024);
        fileItem.textContent = `${file.name} (${sizeKB} KB)`;
        fileList.appendChild(fileItem);

        metadata.push({
        name: file.name,
        size: sizeKB,
        tags: [] 
        });
    });

    localStorage.setItem("fileMetadata", JSON.stringify(metadata));
    });
    
        clearBtn.addEventListener('click', () => {
        localStorage.removeItem("fileMetadata");
        fileList.innerHTML = '';
        });