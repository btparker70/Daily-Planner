
//This gives us a moment object for the local date and time.
let m = moment();

// //iso 8601 string set day
// m = moment('2020-10-25');
// //iso 8601 string with time set day and time
// m = moment('2020-10-25T23:10:00.000');
// //iso 8601 string adjusting UTC with offset
// m = moment('2020-10-25T23:10:00.000+05:00');

//using the documentation, give accurate times based on local time format
m = moment('10/25/2020 4:50PM', 'MM/DD/YYYY h:mmA');

// create using miliseconds since epoc (jan 1 1970)
m = moment(600000);

//create using seconds since epoc jan 1 1970
m = moment.unix(7200);

// time and date in at UTC
m = moment.utc();


//This gives us the date/time of this moment object in my local time zone
console.log(`toString() => ${m.toString()}`);

//M moment date time string in ISO 8601 format and UTC
//always returns UTC value in the ISO format
console.log(`toString() => ${m.toISOString()}`);

//iso 8601 string
// m = moment('2020-10-25');


// var row = $('<div />').appendTo('.container');
// // $timeBlock.attr('class', 'row present')
// var $row = $('<div/>').appendTo('.container');
// $row.attr('class', 'row');
// var $hour = $('<div/>').appendTo('.row');
// $hour.attr('class', 'hour ');
// var $saveBtn = $('<div/>').appendTo('.row');
// $saveBtn.attr('class', 'saveBtn present');


//month name
var currMonthName = moment().format('MMMM');
console.log(currMonthName);
//day number
var currDayNum = moment().format('DD');
console.log(currDayNum);
//day of week
var currDOW = moment().format('dddd');
console.log(currDOW);
// hour
var currHour = moment().format('HH');
console.log(currHour);
// Date in header
$('#currentDay').text(currDOW + ', ' + currMonthName + ' ' + currDayNum);




for (i = 0; i < 9; i++) {
    // Row
    var row = $('<div/>').appendTo('.container');
    $(row).attr('class', 'row');
    // Time on left
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

    // Description box middle
    // var description = $('<div/>').appendTo(row);
    // $(description).attr('class', 'hour col-10 description present');

    // Text Area
    // var textArea = $('<textarea/>').appendTo(description);
    // $(textArea).attr('id', (hour).text());
    // $(textArea).attr('disabled', true);

    // test
    var textArea = $('<textarea/>').appendTo(row);
    $(textArea).attr('class', 'hour col-10 description present');
    $(textArea).attr('disabled', true);

    // Save button right
    var saveBtn = $('<div/>').appendTo(row);
    $(saveBtn).attr('class', 'saveBtn col-1');
    $(saveBtn).attr('id', (hour).text() + 'Save');
    $(saveBtn).prepend('<i class="far fa-save fa-2x center"></i>');
}

var testHour = 12;
var testHour12 = testHour % 12;

$('[id*="' + (testHour) + '"]').removeClass('present').addClass('future');

console.log(testHour % 12);

console.log( $('[id*="11pm"]'));
// $('[id*="12pm"]').removeClass('present').addClass('future');

// $('description:contains(12pm)').removeClass('present').addClass('future');

// $('#12pm').removeClass('present').addClass('future');


$('#10AMSave').click(function() {
   if ($(textArea).attr('disabled') === true) {
    $(textArea).attr('disabled', false);
    console.log('test');
   } else {
       console.log('testfail');
   }
})

