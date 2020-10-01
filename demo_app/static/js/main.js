$(function(){

	var csrf = $('input[name=csrfmiddlewaretoken]').val() //did this in the end

	$('.btn').click(function(){
		$.ajax({
			url:'',
			type:'get', //defines the type of request
			data:{      //'data' defines the data being sent to the server with request
				button_text: $(this).text()
				//gets the text of selected item and stores it in 'button_text'
			},

			//When the server responds successfully i.e status code = '200'
			success: function(response){
			//Argument response comes from the django view  
			$(".btn").text(response.text,)
			//Response is actually the response returned by JSON response
			//'text' is the key of that response
			//selects the item with class '.btn' and set its text to 'response.text'
			$('#seconds').append('<li>' + response.text + '</li>')
		}

		});
	});

	$('#seconds').on('click', 'li', function(){
		$.ajax({
			url:'',
			type: 'post',
			data: {
				text: $(this).text(), // '$(this)' refers to specific list item
				csrfmiddlewaretoken: csrf
			},
			success: function(response) {
				// 'response' comes from the django view
				$('#right').append('<li>' + response.data + '</li>')
			}
		});
	});

});