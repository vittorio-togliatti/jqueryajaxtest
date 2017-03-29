function query(){
	
	$.ajax({  
       type: "GET",  
       url: "http://echo.jsontest.com/key/value/one/two",  
       dataType: "json",  
       success: function(resp){  
         // we have the response  
         alert(resp.one);  
       },  
       error: function(e){  
         alert('Error121212: ' + e);  
       }  
     });
	 
}