function clickHandler() {
    var valeur = parseInt(document.getElementById('likes').innerHTML);
    valeur++;
    document.getElementById('likes').innerHTML = valeur;
  }