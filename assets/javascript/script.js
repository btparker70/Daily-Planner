// Month name
var currMonthName = moment().format('MMMM');

// Day number
var currDayNum = moment().format('DD');

// Day of week
var currDOW = moment().format('dddd');

// Hour
var currHour = moment().format('HH');


// Date in header
$('#currentDay').text(currDOW + ', ' + currMonthName + ' ' + currDayNum);

// This var helps color code text areas based on time of day below
futureFlag = false;
for (i = 0; i < 9; i++) {
    // Create row for each hour
    var row = $('<div/>').appendTo('.container');
    $(row).attr('class', 'row');

    // Hour div on left
    var hour = $('<div/>').appendTo(row);
    // Adds hour and AM/PM
    $(hour).attr('class', 'hour col-1');
    switch (i < 4) {
        case true:
            $(hour).text((i + 9));
            break;
        case false:
            $(hour).text((i - 3));
            break;
    }
    switch (i < 3) {
        case true:
            $(hour).append('AM');
            break;
        case false:
            $(hour).append('PM');
            break;
    }

    // Create textarea in center
    var textArea = $('<textarea/>').appendTo(row);
    $(textArea).attr('id', (hour).text());
    $(textArea).attr('class', 'hour col-10 description past');
    $(textArea).attr('disabled', true);

    // Color codes based on time of day //
    // Colors future time slots
    if (futureFlag) {
        $(textArea).attr('class', 'hour col-10 description future');
    }
    // Colors current time slot unless the work day is over
    if ((parseInt($(textArea).attr('id')) == currentHour()) && (moment().format('HH') < 17)) {
        $(textArea).attr('class', 'hour col-10 description present');
        futureFlag = true;
    }

    // Save button right
    var saveBtn = $('<div/>').appendTo(row);
    $(saveBtn).attr('class', 'saveBtn col-1');
    $(saveBtn).attr('id', (hour).text() + 'Save');
    $(saveBtn).prepend('<i class="far fa-save fa-2x center"></i>');
}

// Trims 0 from beginning of hour if there is one
function currentHour() {
    var currHour = moment().format('hh');
    if (currHour < 10) {
        var newCurrHour = currHour.slice(1, 2);
        return newCurrHour;
    } else {
        return currHour;
    }
}

// Save/Edit button functionality
$('[id*="Save"]').click(function () {
    var saveId = $(this).attr('id');                        // Save button id
    var textareaId = '#' + saveId.slice(0, -4);             // remove 'Save' from id string 
    if ($(textareaId).attr('disabled') === 'disabled') {    // Enable or disable textarea editing
        $(textareaId).attr('disabled', false);
    } else {
        $(textareaId).attr('disabled', true);
        var desc = $(textareaId).val();
        localStorage.setItem((textareaId + 'desc'), desc);
    }
})

// Populates textareas with stored text
$('textarea').each(function () {
    var textareaId = '#' + $(this).attr('id');
    if (localStorage.key = (textareaId + 'desc')) {
        $(textareaId).val(localStorage.getItem(textareaId + 'desc'));
    }
})