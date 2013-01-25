// Global variables
var name = "";
var position = "";
var twitter = "";
var phone = "";
var address = "9336 Washington Blvd, Building K \n" +
    "Culver City, CA 90232 \n" +
    "(310) 202-3333";
var companyName = "Fullscreen, Inc.";
var logoURL = "http://gatech.careereco.net/files/2012/09/Fullscreen-Logo.png";



$(document).ready(function () {
    // Mask input in form of: (___) ___-____
    $("#inputPhone").mask("(999) 999-9999");


    // validate signup form on keyup and submit
   /* $(".required").validate({
        rules: {
            inputName: {
                required: true,
                minlength: 2
            },
            inputPosition: {
                required: true,
                minlength: 2
            },
            inputAddress: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            inputName: {
                required: "Please enter your name.",
                minlength: "Please enter your name."
            },
            inputPosition: {
                required: "Please enter your position at Fullscreen.",
                minlength: "Please enter your position at Fullscreen."
            },
            inputAddress: {
                required: "Please include Fullscreen's Address.",
                minlength: "Please include Fullscreen's Address."
            }
        }
    }); 


    $("#outputPreviewCopy").zclip({
        path: 'ZeroClipboard.swf',
        copy: function () {
            return $("#outputPreview").val();
            alert("Copied!");
        }
    });*/
});

function fetchInputs() {
    name = $('#inputName').val();
    position = $('#inputPosition').val();
    twitter = $('#inputTwitter').val();
    phone = $('#inputPhone').val();
    address = $('#inputAddress').val();

    generateHTMLOutput();
    generateTextOutput();
}

function selectText(containerid) {
   var text = (containerid).firstChild.nodeValue;
   text.select();
}

function generateHTMLOutput() {
    var hOutput = '';

    hOutput += '<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0; font-family: \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif; font-size:12px; color:rgb(10,10,10); margin:10px 0 0 10px;">' +
                '<tr>' +
                    '<td >' + 
                        '<table style="border:0;border-spacing:0;height:10px;width:18px;padding:0px;color:white;background-color:#000000;">' +
                            '<tr>' + 
                                '<td colspan="3" height="4" width="18" style="height:4px;width:18px;"></td>' +
                           '</tr>' +
                            '<tr>' + 
                                '<td height="5" width="1" style="height:5px;width:1px;"></td>' +
                                '<td height="5" width="8" style="height:5px;width:8px;background-color:#fff;"></td>' +
                                '<td height="5" width="9" style="height:5px;width:9px;"></td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td colspan="3" height="1" width="18" style="height:1px;width:18px;"></td>' +
                            '</tr>' +
                        '</table>' +
                     '</td>' +
                '</tr>' +
                '<tr>' +
                    '<td style="color:rgb(10,10,10); font-size:14px; padding:15px 0 3px 0px; border-bottom:1px solid rgb(10,10,10);"><b>Matt Danna</b> &nbsp; <span style="letter-spacing:1px;font-size:10px;text-transform:uppercase;">Product Manager</span></td>' +
                '</tr>' +
                '<tr>' +
                    '<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0; font-size:12px; font-family: \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif; margin:5px 0 0 10px; color:rgb(40,40,40)">' +
                        '<tr>' +
                            '<td style="padding:0 15px 3px 0;">' +
                                '<a style="color:#398b96; text-decoration:none;" href="http://fullscreen.net">Fullscreen, Inc.</a>' +
                            '</td>' +
                            '<td style="padding:0 15px 3px 0;">' +
                                '(310) 202-3333' +
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td style="padding:0 15px 3px 0;">' +
                                '@<a style="color:#398b96; text-decoration:none;" href="http://twitter.com/' + twitter + '">' + twitter + '</a>' +
                            '</td>' +
                            '<td style="padding:0 15px 3px 0;">' +
                                'YouTube: <a style="color:#398b96; text-decoration:none;" href="http://youtube.com/user/mattdanna">mattdanna</a>' +
                            '</td>' +
                        '</tr>' +
                    '</table>' +
                '</tr>' +            
            '</table>';

    document.getElementById("outputFieldHTML").value = hOutput;
    document.getElementById("outputPreview").innerHTML = hOutput;
}

function generateTextOutput() {
    var tOutput = '';

    tOutput = name + " | " + position;
    tOutput += "\n";
    tOutput += companyName;
    tOutput += "\n";
    tOutput += address;

    document.getElementById("outputFieldText").value = tOutput;
}