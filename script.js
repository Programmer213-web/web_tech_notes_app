var number = 1;
var status = 0;
var id = '';

document.querySelector(".add-note").addEventListener("mouseover", function() {
    document.querySelector(".popover").style.opacity = "1";
});

document.querySelector(".add-note").addEventListener("mouseout", function() {
    document.querySelector(".popover").style.opacity = "0";
});

document.querySelector(".add-note").addEventListener("click", function() {
    if(status == 0)
    {
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
            document.getElementById("placeholder").style.opacity = "0";
        }
    }
    else if(status == 1)
    {
        let note = document.getElementById(id);
        let newvalue = document.getElementsByClassName("new-note")[0].value;
        note.innerHTML = newvalue;
        status = 0;
        document.getElementById("edit").style.opacity = 0;
    }
});

var notelist = document.querySelectorAll(".note");

for(note of notelist)
{
    note.addEventListener("click", function(event) {
        let notevalue = event.target.closest(".note").innerHTML;
        document.getElementsByClassName("new-note")[0].value = notevalue;
        status = 1;
        id = event.target.closest(".note").id;
        console.log(id);
        document.getElementById("edit").style.opacity = 1;
    })
}