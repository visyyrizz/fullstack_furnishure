document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const searchDropdown = document.getElementById('searchDropdown');
  
    // Sample furniture data
    const furnitureItems = [
        { name: 'Chair', link: 'chair.html' },
        { name: 'Table', link: 'table.html' },
        { name: 'Sofa', link: 'sofa.html' },
        // Add more furniture items as needed
    ];
  
    // Function to filter furniture items based on search input
    function filterItems(query) {
        return furnitureItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }
  
    // Function to update search results
    function updateResults(query) {
        const filteredItems = filterItems(query);
        displayResults(filteredItems);
    }
  
    // Function to display search results in a dropdown
    function displayResults(results) {
        searchDropdown.innerHTML = '';
  
        if (results.length > 0) {
            searchDropdown.style.display = 'block';
            results.forEach(result => {
                const div = document.createElement('div');
                div.textContent = result.name;
                div.addEventListener('click', function() {
                    window.location.href = result.link;
                });
                searchDropdown.appendChild(div);
            });
        } else {
            searchDropdown.style.display = 'none';
        }
    }
  
    // Event listener for keyup event on the search bar
    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value;
        updateResults(searchTerm);
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchDropdown.contains(e.target) && e.target !== searchBar) {
            searchDropdown.style.display = 'none';
        }
    });
  });