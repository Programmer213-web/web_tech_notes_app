document.querySelector(".add-note").addEventListener("mouseover", function() {
    document.querySelector(".popover").style.display = "block";
    console.log("Hello");
});

document.querySelector(".add-note").addEventListener("mouseout", function() {
    document.querySelector(".popover").style.display = "none";
    console.log("Hello");
});
