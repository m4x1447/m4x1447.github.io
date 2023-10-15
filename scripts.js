<script>
    // Function to show the loading screen
    function showLoadingScreen() {
        document.querySelector('.loader-container').style.display = 'flex'; // Show the loading screen
    }
 
    // Function to hide the loading screen
    function hideLoadingScreen() {
        document.querySelector('.loader-container').style.display = 'none'; // Hide the loading screen
    }
 
    // Show the loading screen when the page starts loading
    window.addEventListener('load', hideLoadingScreen); // When the page is fully loaded, hide the loading screen
</script>