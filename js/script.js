function openMenu(evt, menuName) {
  var i, tabcontent, listitem;

  tabcontent = document.getElementsByClassName("col-md-9");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  listitem = document.getElementsByClassName("list-group-item");
  for (i = 0; i < listitem.length; i++) {
    listitem[i].className = listitem[i].className.replace(" active", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}
