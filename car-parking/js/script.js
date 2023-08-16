$(document).ready(function () {



    $('#showAddVehicle').click(function () {
        $('#form-modal').addClass('active');
        $('body').css("overflow", "hidden");
        
    });
    $('#closeAddVehicle').click(function () {
        $('#form-modal').removeClass('active');
        $('body').css("overflow", "auto");
    });

    $('#btnAddVehicle').click(function () { 
        
        var txtOwnerName = $('#owner-name');
        var txtOwnerMobile = $('#owner-mobile');
        var txtVehicleBrand = $('#vehicle-brand');
        var txtVehicleModel = $('#vehicle-model');
        var txtVehicleColor = $('#vehicle-color');
        var txtVehicleRegNo = $('#vehicle-reg-no');
        // var sltRegistrationType = $('#registration-type');
        var dtEntryDateTime = $('#entry-date-time');
        // var sltCurrentStatus = $('#current-status');
        var dtExitDateTime = $('#exit-date-time');


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

        if (txtVehicleBrand.val() == "") {
            alert("Please enter vehicle brand.");
            txtVehicleBrand.addClass('error');
            txtVehicleBrand.focus();
            return false;
        }
        else {
            txtVehicleBrand.removeClass('error');
        }

        if (txtVehicleModel.val() == "") {
            alert("Please enter vehicle model.");
            txtVehicleModel.addClass('error');
            txtVehicleModel.focus();
            return false;
        }
        else {
            txtVehicleModel.removeClass('error');
        }

        if (txtVehicleColor.val() == "") {
            alert("Please enter vehicle color.");
            txtVehicleColor.addClass('error');
            txtVehicleColor.focus();
            return false;
        }
        else {
            txtVehicleColor.removeClass('error');
        }

        if (txtVehicleRegNo.val() == "") {
            alert("Please enter vehicle registered no.");
            txtVehicleRegNo.addClass('error');
            txtVehicleRegNo.focus();
            return false;
        }
        else {
            txtVehicleRegNo.removeClass('error');
        }

        if (dtEntryDateTime.val() == "") {
            alert("Please enter vehicle entry date-time.");
            dtEntryDateTime.addClass('error');
            dtEntryDateTime.focus();
            return false;
        }
        else {
            dtEntryDateTime.removeClass('error');
        }

        if (dtExitDateTime.val() == "") {
            alert("Please enter vehicle exit date-time.");
            dtExitDateTime.addClass('error');
            dtExitDateTime.focus();
            return false;
        }
        else {
            dtExitDateTime.removeClass('error');
        }

    });


    
    $('#search').on("keyup", function () { 
        
        var value = $(this).val().toLowerCase();

        $('#vehicleList > tbody > tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > - 1);
        });

    });

});