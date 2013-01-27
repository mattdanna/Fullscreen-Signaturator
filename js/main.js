// Global variables
var name = "";
var position = "";
var twitter = "";
var youtube = "";
var phone = "";
var companyName = "Fullscreen, Inc.";
var companyURL = 'http://Fullscreen.net';
var linkColor = '#398b96';

var confirm = $('.confirm').hide();
var gmail_instruction = $('#outputPreview-instruction').hide();


$(document).ready(function () {
    // Mask input in form of: (___) ___-____
    $("#inputPhone").mask("(999) 999-9999");

    $("#signaturator").validate({
        rules: {
            inputName: {
                required: true
            },
            inputPosition: {
                required: true
            }
        },
        messages: {
            inputName: {
                required: "What's an email signature without a name?!"
            },
            inputPosition: {
                required: "Hey! What's your job title at " + companyName + "?" 
            }
        },
        success: "valid",
        errorClass: "error help-block",
        submitHandler: function() { 
            console.log('form submitted!');
            fetchInputs(); 
            $('#myModal').modal('toggle');
        }
    });
});

$("a#outputPreview-btn").on("mouseenter", this, function(event){
    event.preventDefault();
    
    $(this).zclip({
        path: 'js/vendor/ZeroClipboard10.swf',
        copy: function(){
            return $('#outputPreview').html()
        },
        afterCopy: function(){
            console.log('copied!' + $('#outputPreview').html());
            $("#outputPreview-confirm").hide();
            $("#outputPreview-confirm").html("Copied!");
            $("#outputPreview-confirm").show().fadeOut(1000, function(){
                $(this).html('Now paste it into <a href="https://mail.google.com/mail/u/0/#settings/general" target="_blank">Gmail\'s Signature Settings</a>.');
                $(this).fadeIn(300);
            });
        }
    });
});

$("a#outputFieldText-btn").on("mouseenter", this, function(event){
    event.preventDefault();
    
    $(this).zclip({
        path: 'js/vendor/ZeroClipboard10.swf',
        copy: function(){
            return $('#outputFieldText').val()
        },
        afterCopy: function(){
            console.log('copied!' + $('#outputFieldText').val());
            $("#outputFieldText-confirm").show().fadeOut(2000);
        }
    });
});

$("a#outputFieldHTML-btn").on("mouseenter", this, function(event){
    event.preventDefault();
    
    $(this).zclip({
        path: 'js/vendor/ZeroClipboard10.swf',
        copy: function(){
            return $('#outputFieldHTML').val()
        },
        afterCopy: function(){
            console.log('copied!' + $('#outputFieldHTML').val());
            $("#outputFieldHTML-confirm").show().fadeOut(2000);
        }
    });
});


function fetchInputs() {
    name = $('#inputName').val();
    position = $('#inputPosition').val();
    twitter = $('#inputTwitter').val();
    youtube = $('#inputYouTube').val();
    phone = $('#inputPhone').val();
    address = $('#inputAddress').val();

    generateHTMLOutput();
    generateTextOutput();
}

function generateHTMLOutput() {
    var hOutput = '';

    hOutput +=  '<br/>' + 
                '<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-spacing:0; font-family: \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif; font-size:12px; color:rgb(10,10,10); margin:10px 0 0 0;">' +
                '<tr>' +
                    '<td >' + 
                        '<table style="border:0; border-spacing:0; height:10px; width:18px; padding:0px; color:white; background-color:#000000;">' +
                            '<tr>' + 
                                '<td colspan="3" height="4" width="18" style="height:4px; width:18px; padding:0;"></td>' +
                           '</tr>' +
                            '<tr>' + 
                                '<td height="5" width="1" style="height:5px; width:1px; padding:0;"></td>' +
                                '<td height="5" width="8" style="height:5px; width:8px; background-color:#fff; padding:0;"></td>' +
                                '<td height="5" width="9" style="height:5px; width:9px; padding:0;"></td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td colspan="3" height="1" width="18" style="height:1px; width:18px; padding:0;"></td>' +
                            '</tr>' +
                        '</table>' +
                     '</td>' +
                '</tr>' +
                '<tr>' +
                    '<td style="color:rgb(10,10,10); font-size:11px; letter-spacing:0px; text-transform:uppercase; padding:10px 0 5px 0px; border-bottom:1px solid rgb(10,10,10);"><b>' + name + '</b> &nbsp; <span style="letter-spacing:0px; font-size:11px;">' + position + '</span></td>' +
                '</tr>' +
                '<tr>' +
                    '<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-spacing:0; font-size:11px; font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; margin:10px 0 0 0; color:rgb(40,40,40)">' +
                        '<tr>' +
                            '<td style="padding:0 10px 3px 0;">' + 
                                '<a style="color:' + linkColor + '; text-decoration:none;" href="' + companyURL + '">' + companyName + '</a>' + 
                            '</td>';
                            if(phone != '' && phone != null && phone != 'NULL'){
                            hOutput += '<td style="padding:0 10px 3px 0;">' +
                                phone +
                            '</td>';}
                        hOutput += '</tr>';
                        if(twitter != '' && twitter != null && youtube != '' && youtube != null){
                            hOutput += '<tr>' +
                             '<td style="padding:0 15px 3px 0;">' +
                                '@<a style="color:' + linkColor + '; text-decoration:none;" href="http://twitter.com/' + twitter + '">' + twitter + '</a>' +
                            '</td>' +
                            '<td style="padding:0 15px 3px 0;">' +
                                'YouTube: <a style="color:' + linkColor + '; text-decoration:none;" href="http://youtube.com/user/' + youtube + '">' + youtube + '</a>' + 
                            '</td>' +
                            '</tr>';
                        }else if(twitter != '' && twitter != null){
                            hOutput += '<tr>' +
                             '<td style="padding:0 15px 3px 0;">' +
                                '@<a style="color:' + linkColor + '; text-decoration:none;" href="http://twitter.com/' + twitter + '">' + twitter + '</a>' +
                            '</td>' +
                            '</tr>';
                        }else if(youtube != '' && youtube != null){
                            hOutput += '<tr>' +
                            '<td style="padding:0 15px 3px 0;">' +
                                'YouTube: <a style="color:' + linkColor + '; text-decoration:none;" href="http://youtube.com/user/' + youtube + '">' + youtube + '</a>' + 
                            '</td>' +
                            '</tr>';
                        }else{
                            // Don't output second row because both twitter and youtube are blank
                        }
                    hOutput += '</table>' + 
                '</tr>' +
            '</table>';

    document.getElementById("outputFieldHTML").value = hOutput;
    document.getElementById("outputPreview").innerHTML = hOutput;
}

function generateTextOutput() {
    var tOutput = '';
    tOutput = name + '  |  ' + position + '  |  ' + companyName + '  |  ' + phone;
    document.getElementById("outputFieldText").value = tOutput;
}