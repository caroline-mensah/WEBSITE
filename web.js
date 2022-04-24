function process(e){
    let search = document.getElementById("search").value;
    localStorage.setItem("textvalues",search);
    return false;
    e.preventDefault();
    alert(search);
}
let footer=document.querySelector("ftr");
footer.style.color="green";