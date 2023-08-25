window.onload = () => {
    const welcomeDiv = document.getElementById('welcome');
    const welcomeToShowDiv = document.getElementById('welcomeToShow');
    
    document.getElementById("showMe").onclick = () => { 
      welcomeDiv.classList.add('hide');
      setTimeout(() => {
        welcomeDiv.classList.add('remove');
        welcomeToShowDiv.classList.add('show'); 
      }, 850)
    };
  };