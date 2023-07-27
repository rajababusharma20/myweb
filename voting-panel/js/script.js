$(document).ready(function () {


    $('#btnLogin').click(function () { 
        
        var txtMobile = $('#mobile');
        var mobTextLen = $('#mobile').val().length;
        var txtPassword = $('#password');

        if (txtMobile.val() == "") {
            alert("Please enter your registered mobile no.");
            txtMobile.addClass('error');
            txtMobile.focus();
            return false;
        }
        else {
            txtMobile.removeClass('error');
        }

        if (mobTextLen < 10) {
            alert("Mobile no must be 10 digits long.");
            txtMobile.addClass('error');
            txtMobile.focus();
            return false;
        }
        else {
            txtMobile.removeClass('error');
        }

        if (txtPassword.val() == "") {
            alert("Please enter your password.")
            txtPassword.addClass('error');
            txtPassword.focus();
            return false;
        }
        else {
            txtPassword.removeClass('error');
        }

    });


    $('#btnRegister').click(function () { 
        
        var txtName = $('#name');
        var txtMobile = $('#mobile');
        var mobTextLen = $('#mobile').val().length;
        var txtState = $('#state');
        var txtCity = $('#city');
        var txtPassword = $('#password');
        var txtConfirmPassword = $('#confirm-password');
        var txtDob = $('#dob');
        var txtAddress = $('#address');
        var photoName = $('#photo');


        if (txtName.val() == "") {
            alert("Please enter your name.");
            txtName.addClass('error');
            txtName.focus();
            return false;
        }
        else {
            txtName.removeClass('error');
        }

        if (txtMobile.val() == "") {
            alert("Please enter your mobile no.");
            txtMobile.addClass('error');
            txtMobile.focus();
            return false;
        }
        else {
            txtMobile.removeClass('error');
        }

        if (mobTextLen < 10) {
            alert("Mobile no must be 10 digits long.");
            txtMobile.addClass('error');
            txtMobile.focus();
            return false;
        }
        else {
            txtMobile.removeClass('error');
        }

        if (txtState.val() == "") {
            alert("Please enter your state name.");
            txtState.addClass('error');
            txtState.focus();
            return false;
        }
        else {
            txtState.removeClass('error');
        }

        if (txtCity.val() == "") {
            alert("Please enter your city name.");
            txtCity.addClass('error');
            txtCity.focus();
            return false;
        }
        else {
            txtCity.removeClass('error');
        }

        if (txtPassword.val() == "") {
            alert("Please enter your password.");
            txtPassword.addClass('error');
            txtPassword.focus();
            return false;
        }
        else {
            txtPassword.removeClass('error');
        }

        if (txtConfirmPassword.val() == "") {
            alert("Please enter your confirm password.");
            txtConfirmPassword.addClass('error');
            txtConfirmPassword.focus();
            return false;
        }
        else {
            txtConfirmPassword.removeClass('error');
        }
        
        if (txtPassword.val() != txtConfirmPassword.val() ) {
            alert("Password mismatch.\nPlease re-check your password.");
            return false;
        }
        
        if (txtDob.val() == "") {
            alert("Please select your DOB.");
            txtDob.addClass('error');
            txtDob.focus();
            return false;
        }
        else {
            txtDob.removeClass('error');
        }

        if (txtAddress.val() == "") {
            alert("Please enter your address.");
            txtAddress.addClass('error');
            txtAddress.focus();
            return false;
        }
        else {
            txtAddress.removeClass('error');
        }

        if (photoName.val() == ''){
            alert('Please select your photo.');
            photoName.addClass('error');
            photoName.focus();
            return false;
        }
        else{
            var photoExtension = photoName.val().split('.').pop().toLowerCase();
            if (jQuery.inArray(photoExtension, ['png','jpg','jpeg']) == -1){
                alert('Invalid photo format.\nPhoto must be in ".png, .jpg, .jpeg" format.');
                photoName.val('');
                return false;
            }
        }

    });


});