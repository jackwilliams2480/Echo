window.onload = (event) => {
    let myAlert = document.querySelectorAll('.toast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}