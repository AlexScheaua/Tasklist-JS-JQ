
$("#add").click(addListItem)
$(document).keypress(function(e) {
    if(e.which == 13) {
        addListItem();
    }
});

//functie add list item
function addListItem(){
  //adaug li si resetez inputul la null
  var list = $("#todo");
  var itemText = $("#item:text").val();
  if (itemText) {
    var item = $("<li></li>").text(itemText);
    list.prepend(item);
    $("#item:text").val(null);
    //creez container div pentru butoanele remove edit si complete
    var containerDiv = $("<div></div>");
    containerDiv.attr("class", "btnContainer");
    item.append(containerDiv);

    var btnRem = $("<button></button").text("Remove");
    btnRem.attr("class", "btnRem");
    containerDiv.append(btnRem);
    $(".btnRem").on("click", removeItem);

    var btnEdit = $("<button></button").text("Edit");
    btnEdit.attr("class", "btnEdit");
    containerDiv.append(btnEdit);
    $(".btnEdit").on("click", editItem);

    var btnCompleted= $("<button></button").text("Complete");
    btnCompleted.attr("class", "btnCompleted");
    containerDiv.append(btnCompleted);
    $(".btnCompleted").on("click", completeItem);
  }
}

function removeItem() {
  $(this.parentElement.parentElement).remove();
}

function editItem() {
  //inlocuiesc textul si butoanele remove/edit/complete din li cu un input care contine textul din li
  var li = $(this.parentElement.parentElement);
  var inp = $("<input>");
  inp = inp.attr("value", li.text().replace("RemoveEditComplete",""));
  inp.attr("class", "editinput");
  li.html(inp);
  inp.focus();

  //adaug container pentru butonul de save
  var containerDiv = $("<div></div>");
  containerDiv.attr("class", "btnContainer");
  li.append(containerDiv);
  //adaug butonul de save
  var btnSave = $("<button></button").text("Save");
  btnSave.attr("class", "btnCompleted btnSave");
  containerDiv.append(btnSave);
  $(".btnSave").on("click", saveItem);
}

function saveItem() {
  //inlocuiesc inputul si butonul save cu textul din input
  var li = $(this.parentElement.parentElement);
  var itemText = $(".editinput:text").val();
  if (itemText){
    li.html(itemText);
    //adaug butoanele remove/edit/complete
    var containerDiv = $("<div></div>");
    containerDiv.attr("class", "btnContainer");
    li.append(containerDiv);

    var btnRem = $("<button></button").text("Remove");
    btnRem.attr("class", "btnRem");
    containerDiv.append(btnRem);
    $(".btnRem").on("click", removeItem);

    var btnEdit = $("<button></button").text("Edit");
    btnEdit.attr("class", "btnEdit");
    containerDiv.append(btnEdit);
    $(".btnEdit").on("click", editItem);

    var btnCompleted= $("<button></button").text("Complete");
    btnCompleted.attr("class", "btnCompleted");
    containerDiv.append(btnCompleted);
    $(".btnCompleted").on("click", completeItem);
  }
}

function  completeItem(){
  //mut elementul din lista to do in lista done
  var li = $(this.parentElement.parentElement);
  this.parentElement.remove();
  li.appendTo($("#done"));
  //adaug container pentru butonul de remove
  var containerDiv = $("<div></div>");
  containerDiv.attr("class", "btnContainer");
  li.append(containerDiv);

  var btnRem = $("<button></button").text("Remove");
  btnRem.attr("class", "btnRem");
  containerDiv.append(btnRem);
  $(".btnRem").on("click", removeItem);
}
