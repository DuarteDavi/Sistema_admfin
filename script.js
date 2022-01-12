document.getElementById("btn");
document.getElementById('btn').addEventListener("change", (e)=>{
    document.body.classList.toggle("dark", e.target.checked);
})