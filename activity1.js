point = 0;
function updatescore()
{
    point = point + 1;
    document.getElementById("score").innerHTML="score:" + point;
}

function savescore()
{
    localStorage.setItem("score", point);
}