var number = 1;
var status = 0;

document.querySelector(".add-note").addEventListener("mouseover", function() {
    document.querySelector(".popover").style.opacity = "1";
});

document.querySelector(".add-note").addEventListener("mouseout", function() {
    document.querySelector(".popover").style.opacity = "0";
});

document.querySelector(".add-note").addEventListener("click", function() {
    let boxid = 'note' + number;
    console.log(boxid);
    let textarea = document.getElementsByClassName("new-note");
    let text = textarea[0].value;
    let box = document.getElementById(boxid);
    console.log(box);
    console.log(text);
    if(text != "")
    {
        box.style.display = "block";
        box.innerHTML = text;
        number++;
    }
});

var notelist = document.querySelectorAll(".note");

for(note of notelist)
{
    note.addEventListener("click", function(event) {
        let notevalue = event.target.closest(".note").innerHTML;
        document.getElementsByClassName("new-note")[0].value = notevalue;
        status = 1;
        id = note.id;
        console.log(id);
    })
}