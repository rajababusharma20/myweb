$(document).ready(function() {

    // -------------------------------------date picker------------------------------------

    $('#dob').datepicker({

        // inline: true,

        dateFormat: 'dd / mm / yyyy',
        language: 'en',
        minDate: new Date('01/15/1995'),
        maxDate: new Date(),

        // multipleDates: true,
        // multipleDatesSeparator: ' - ',
        // range: true,

        autoClose: true,
        todayButton: true,
        clearButton: true,

        // timepicker: true,
        // onlyTimepicker: false,
        // dateTimeSeparator: ' - ',
        // timeFormat: 'hh : ii AA',
        // minHours: 0,
        // maHours: 24,
        // minMinutes: 0,
        // maxMinutes: 59,
        // hoursStep: 1,
        // minutesStep: 1,
        
        // onRenderCell: function(date, cellType) {
        //     var disabledDays = [0, 6];
        //     if (cellType == 'day') {
        //         var day = date.getDay(),
        //         isDisabled = disabledDays.indexOf(day) != -1;
        //         return {
        //             disabled: isDisabled
        //         }
        //     }
        // }

        
    });

    // -------------------------------------Full name text------------------------------------

    $('#first-name, #middle-name, #last-name').bind('keyup', function() {
        $('#full-name').val($('#first-name').val() + ' ' + $('#middle-name').val() + ' ' + $('#last-name').val());
    });

    // -------------------------------------Form fields clicking ------------------------------------

    //Nationality

    $('#nationality-others-text').attr('disabled','disabled');
    $('#nationality-others').click(function () {
        if ($(this).is(':checked')) {
            $('#nationality-others-text').removeAttr('disabled');
        }
    });
    $('#nationality-indian, #nationality-nepalese').click(function () {
        if ($(this).is(':checked')) {
            $('#nationality-others-text').attr('disabled','disabled');
            $('#nationality-others-text').val(null);
        }
    });

    //OBC Category Layer

    $('#layer-cl, #layer-ncl').attr('disabled','disabled');
    $('#layer-cl, #layer-ncl').prop('checked', false);
    $('#category-obc').click(function () {
        if ($(this).is(':checked')) {
            $('#layer-cl, #layer-ncl').removeAttr('disabled');
            $('#layer-cl-check, #layer-ncl-check').removeClass('disabled');
        }
    });
    $('#category-gen, #category-sc, #category-st, #category-cs').click(function () {
        if ($(this).is(':checked')) {
            $('#layer-cl, #layer-ncl').attr('disabled','disabled');
            $('#layer-cl, #layer-ncl').prop('checked', false);
            $('#layer-cl-check, #layer-ncl-check').addClass('disabled');
        }
    });

    //Religion Others

    $('#religion-others-text').attr('disabled','disabled');
    $('#religion-others').click(function () {
        if ($(this).is(':checked')) {
            $('#religion-others-text').removeAttr('disabled');
        }
    });
    $('#religion-hindu, #religion-muslim, #religion-sikh, #religion-christian, #religion-buddhist, #religion-jain').click(function () {
        if ($(this).is(':checked')) {
            $('#religion-others-text').attr('disabled','disabled');
            $('#religion-others-text').val(null);
        }
    });

    // Disability Others and Type Yes

    $('#disability-hearing, #disability-loco-imp, #disability-vis-imp, #disability-reading, #disability-others').attr('disabled','disabled');
    $('#disability-hearing, #disability-loco-imp, #disability-vis-imp, #disability-reading, #disability-others').prop('checked', false);
    $('#disability-others-text').attr('disabled','disabled');
    $('#disability-yes').click(function () {
        if ($(this).is(':checked')) {
            $('#disability-hearing, #disability-loco-imp, #disability-vis-imp, #disability-reading, #disability-others').removeAttr('disabled');
            $('#disability-hearing-check, #disability-loco-imp-check, #disability-vis-imp-check, #disability-reading-check, #disability-others-check').removeClass('disabled');
        }
    });
    $('#disability-no').click(function () {
        if ($(this).is(':checked')) {
            $('#disability-hearing, #disability-loco-imp, #disability-vis-imp, #disability-reading, #disability-others').attr('disabled','disabled');
            $('#disability-hearing, #disability-loco-imp, #disability-vis-imp, #disability-reading, #disability-others').prop('checked', false);
            $('#disability-hearing-check, #disability-loco-imp-check, #disability-vis-imp-check, #disability-reading-check, #disability-others-check').addClass('disabled');
            $('#disability-others-text').attr('disabled','disabled');
            $('#disability-others-text').val(null);
        }
    });
    $('#disability-hearing, #disability-loco-imp, #disability-vis-imp, #disability-reading, #disability-others').click(function () {
        if ($(this).is(':checked')) {
            $('#disability-others-text').attr('disabled','disabled');
            $('#disability-others-text').val(null);
        }
    });
    $('#disability-others').click(function () {
        if ($(this).is(':checked')) {
            $('#disability-others-text').removeAttr('disabled');
        }
    });

});