// Get all the <a> elements on the page
var links = document.getElementsByTagName('a');

// Convert the HTMLCollection to an array for easy iteration
links = Array.from(links);

// Listen for the click event on the remove-links button
document.getElementById('remove-links').addEventListener('click', function() {
  // Remove all links from the page
  links.forEach(function(link) {
    link.parentNode.removeChild(link);
  });
});
