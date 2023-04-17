var date = new Date()
let display_date= "Date:" + date.toLocaleDateString()

$(document).ready(function () {
    $("#date").html(display_date)
})

let reviewed_emotion,emo_url;

$(function(){
    //  write an event, when Submit button is clicked
    $('#review_button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        //let text_value = $('#text').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'text' : $('#text').val()}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : 'POST',

            url: "/review_emotion",

            //  Data to be sent in JSON format
            data : JSON.stringify(input_text),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                reviewed_emotion = result.data.review_emotion
                emo_url = result.data.review_emotion_img_url

                //  update the DOM elements

                //  show them

            },

            //  if any error, run this function
            error : function(result){
                alert(result.responseJSON.message)
            }
        })
        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})