

function openTab(evt, tabName){
    let i, x, tablinks;

    x = document.getElementsByClassName('tab');
    for(i=0; i< x.length; i++){
        x[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablink');
    for(i=0; i< tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("w3-blue", "h");  
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " w3-blue"

}
