function generateportfolio(){
    let name =document.getElementById("name").value;
    let role =document.getElementById("role").value;
    let about =document.getElementById("about").value;
    let skills =document.getElementById("skills").value;
    let project =document.getElementById("projects").value;
    let email=document.getElementById("email").value;
    document.getElementById("pname").innerText =name;
    document.getElementById("prole").innerText =role;
    document.getElemenetById("pabout").innertext =about;
    document.getElementById("pskills").innerText =skills;
    document.getElementById("pprojects").innerText =project;
    document.getElementById("pemail").innerText =email;
}
function downloadPDF(){
    const element =document.getElementById("portfolio");
    html2pdf().from(element).save("portfolio.pdf");
}