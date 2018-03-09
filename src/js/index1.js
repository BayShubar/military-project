let isFirstOpen = true;
        var x = document.getElementById("first_opt");
        var y = document.getElementById("second_opt");
        y.style.display = "none";
function showFirstOption() {
    if (!isFirstOpen) {
        x.style.display = "block";
        y.style.display = 'none';
        isFirstOpen = true;
    }
}
function showSecondOption(){
if (isFirstOpen) {
    y.style.display = "block";
    x.style.display = 'none';
    isFirstOpen = false;
} 
}