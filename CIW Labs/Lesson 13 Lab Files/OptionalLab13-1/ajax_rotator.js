function loadScript(xmlScripts, index) {
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = ''; // Clear previous image

  const newImage = document.createElement('img');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  const file = xmlScripts[index].getElementsByTagName('FILE')[0].textContent;
  const height = xmlScripts[index].getElementsByTagName('HEIGHT')[0].textContent;
  const width = xmlScripts[index].getElementsByTagName('WIDTH')[0].textContent;
  const alt = xmlScripts[index].getElementsByTagName('ALT')[0].textContent;

  newImage.src = file;
  newImage.height = parseInt(height);
  newImage.width = parseInt(width);
  newImage.alt = alt;
  newImage.id = 'toggle';

  imageContainer.appendChild(newImage);

  // Disable or enable buttons based on index position
  prevButton.disabled = index === 0;
  nextButton.disabled = index === xmlScripts.length - 1;

  // Removed event listeners by cloning nodes
  const prevClone = prevButton.cloneNode(true);
  prevButton.parentNode.replaceChild(prevClone, prevButton);
  const nextClone = nextButton.cloneNode(true);
  nextButton.parentNode.replaceChild(nextClone, nextButton);

  // Event listeners for buttons
  prevClone.addEventListener('click', (e) => {
    e.preventDefault();
    if (index > 0) {
      loadData(index - 1);
    }
  });

  nextClone.addEventListener('click', (e) => {
    e.preventDefault();
    if (index < xmlScripts.length - 1) {
      loadData(index + 1);
    }
  });
}

// Add AJAX data loader function


}
