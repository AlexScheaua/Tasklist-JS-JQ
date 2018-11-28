//functie care apeleaza functia addItemTask daca in campul input exista text
function btnClick() {
  var val = document.getElementById('item').value;
  if(val) {
    addItemTask(val)
  };
  document.getElementById('item').value = null;
}
//click buton care apeleaza functia btnClick
document.getElementById('add').onclick = btnClick;
//enter apeleaza functia btnClick
document.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      btnClick();
    }
});
//functie care sterge LI parinte al butonului pe care am dat click
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

function editItem() {
  var item = this.parentNode;
  var parent = this.parentNode.parentNode;
//sterg containerul cu butoane
  parent.removeChild(item);
//salvez textul care este deja in li in variabila before si sterg textul din LI
  var before = parent.innerText;
  parent.innerText = '';
//creez un input cu value - before(valoarea anterioara a li), cu o clasa pentru css si cu autofocus
  var inp = document.createElement('input');
  inp.setAttribute("value", before);
  inp.setAttribute("class", "editinput");
  inp.setAttribute("autofocus", "true");
  parent.appendChild(inp);

//creez un div container pentru butonul save
  var div = document.createElement('div');
  div.className = 'btnContainer';
//creez buton save
  var save = document.createElement('button');
  save.className = 'btnCompleted';
  save.id = 'save';
  save.innerText = 'Save';
  parent.appendChild(div);
  div.appendChild(save);
  document.getElementById('save').onclick = edited;
//functia care salveaza datele noi din input
  function edited() {
//sterg inputul si revin la text in LI
    var text = inp.value;
    parent.innerText = text;
  //creez un div container pentru butoane
    var div = document.createElement('div');
    div.className = 'btnContainer';
  //creez buton remove
    var remove = document.createElement('button');
    remove.className = 'btnRem';
    remove.innerText = 'Remove';
  //creez click event pentru stergere care apeleaza fucnctia removeItem
    remove.addEventListener('click', removeItem);
  //creez buton edit
    var edit = document.createElement('button');
    edit.className = 'btnEdit';
    edit.innerText = 'Edit';
  //creez click event pentru editare care apeleaza fucnctia editItem
    edit.addEventListener('click', editItem);
  //creez buton complete
    var completed = document.createElement('button');
    completed.className = 'btnCompleted';
    completed.innerText = 'Complete';
//creez click event pentru editare care apeleaza fucnctia completeItem
    completed.addEventListener('click', completeItem);

    parent.appendChild(div);
    div.appendChild(remove);
    div.appendChild(edit);
    div.appendChild(completed);
  }

  document.addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        edited();
      }
  });

}

function completeItem() {
  var text = this.parentNode.parentNode.innerText;
  text = text.replace('RemoveEditComplete','');
  var list = document.getElementById("done");
  var item = document.createElement('li');
  item.innerText = text;
//creez un div container pentru butoane
  var div = document.createElement('div');
  div.className = 'btnContainer';
//creez buton remove
  var remove = document.createElement('button');
  remove.className = 'btnRem';
  remove.innerText = 'Remove';
//creez click event pentru stergere care apeleaza fucnctia removeItem
  remove.addEventListener('click', removeItem);

  var element = this.parentNode.parentNode;
  var parent = this.parentNode.parentNode.parentNode;
//sterg LI din lista TO DO
  parent.removeChild(element);

  item.appendChild(div);
  div.appendChild(remove);
  list.insertBefore(item, list.childNodes[0]);
}

function addItemTask(text) {
//creez LI
  var list = document.getElementById("todo");
  var item = document.createElement('li');
  item.innerText = text;
//creez un div container pentru butoane
  var div = document.createElement('div');
  div.className = 'btnContainer';
//creez buton remove
  var remove = document.createElement('button');
  remove.className = 'btnRem';
  remove.innerText = 'Remove';
//creez click event pentru stergere care apeleaza fucnctia removeItem
  remove.addEventListener('click', removeItem);
//creez buton edit
  var edit = document.createElement('button');
  edit.className = 'btnEdit';
  edit.innerText = 'Edit';
//creez click event pentru editare care apeleaza fucnctia editItem
  edit.addEventListener('click', editItem);
//creez buton complete
  var completed = document.createElement('button');
  completed.className = 'btnCompleted';
  completed.innerText = 'Complete';
//creez click event pentru editare care apeleaza fucnctia completeItem
  completed.addEventListener('click', completeItem);

  item.appendChild(div);
  div.appendChild(remove);
  div.appendChild(edit);
  div.appendChild(completed);
  list.insertBefore(item, list.childNodes[0]);


}
