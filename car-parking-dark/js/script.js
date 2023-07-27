$(document).ready(function () {

    $('#btnAddVehicle').click(function () { 
        
        var txtOwnerName = $('#txtOwnerName');
        var txtOwnerMobile = $('#txtOwnerMobile');
        var txtBrand = $('#txtBrand');
        var txtModel = $('#txtModel');
        var txtRegNo = $('#txtRegNo');
        var txtEntryDT = $('#txtEntryDT');
        var txtExitDT = $('#txtExitDT');


        if (txtOwnerName.val() == "") {
            alert("Please enter owner name.");
            txtOwnerName.addClass('error');
            txtOwnerName.focus();
            return false;
        }
        else {
            txtOwnerName.removeClass('error');
        }



        if (txtOwnerMobile.val() == "") {
            alert("Please enter owner mobile no.");
            txtOwnerMobile.addClass('error');
            txtOwnerMobile.focus();
            return false;
        }
        else {
            txtOwnerMobile.removeClass('error');
        }



        if (txtOwnerMobile.val().length < 10) {
            alert("Mobile no must be 10 digits long.");
            txtOwnerMobile.addClass('error');
            txtOwnerMobile.focus();
            return false;
        }
        else {
            txtOwnerMobile.removeClass('error');
        }



        if (txtBrand.val() == "") {
            alert("Please enter vehicle brand.");
            txtBrand.addClass('error');
            txtBrand.focus();
            return false;
        }
        else {
            txtBrand.removeClass('error');
        }



        if (txtModel.val() == "") {
            alert("Please enter vehicle model.");
            txtModel.addClass('error');
            txtModel.focus();
            return false;
        }
        else {
            txtModel.removeClass('error');
        }



        if (txtRegNo.val() == "") {
            alert("Please enter vehicle registered no.");
            txtRegNo.addClass('error');
            txtRegNo.focus();
            return false;
        }
        else {
            txtRegNo.removeClass('error');
        }



        if (txtEntryDT.val() == "") {
            alert("Please enter vehicle entry date-time.");
            txtEntryDT.addClass('error');
            txtEntryDT.focus();
            return false;
        }
        else {
            txtEntryDT.removeClass('error');
        }



        if (txtExitDT.val() == "") {
            alert("Please enter vehicle exit date-time.");
            txtExitDT.addClass('error');
            txtExitDT.focus();
            return false;
        }
        else {
            txtExitDT.removeClass('error');
        }

    });


    
    $('#txtSearch').on("keyup", function () { 
        
        var value = $(this).val().toLowerCase();

        $('#vehicleList > tbody > tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > - 1);
        });

    });

});