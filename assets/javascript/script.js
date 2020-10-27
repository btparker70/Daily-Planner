
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

for (i = 0; i < 3; i++) {
    // Row
    var row = $('<div/>').appendTo('.container');
    $(row).attr('class', 'row');
    // Time on left
    var hour = $('<div/>').appendTo(row);
    $(hour).attr('class', 'hour col-2 past');
    // Text field middle
    var description = $('<div/>').appendTo(row);
    $(description).attr('class', 'hour col-8 present');
    // Save button right
    var saveBtn = $('<div/>').appendTo(row);
    $(saveBtn).attr('class', 'saveBtn col-2');
    $(saveBtn).prepend('<i class="far fa-save fa-2x center"></i>');
}
