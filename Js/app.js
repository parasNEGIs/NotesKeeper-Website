// 
showNotes()
let btn = document.getElementById('addBtn')
btn.addEventListener('click', function(e){
    let txt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes")
    if (notes==null) {
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = ""
    console.log(notesObj)
    showNotes()
})
function showNotes(){
    let notes = localStorage.getItem('notes')
    if (notes==null) {
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = ""
    notesObj.forEach(function(element, index) {
        html +=`
        <div class="my-4 mx-4 notecard" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="class-text"> ${element} </p>
              <button href="#" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `;
    });
    let notesElm = document.getElementById('notes')
    if (notesObj.length !=0){
        notesElm.innerHTML = html
    }
    else{
        notesElm.innerHTML = 'No Notes Present Use "Add Note"'
    }
}