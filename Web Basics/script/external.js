
				
	function showMessage(form)     //to print the values of html form in new pop-up window  
	{ 
		
			var win=window.open("","Show Details","width=300,height=500");
			
			var message="<html><head><title><style>*{font-family:'Segoe UI'}</style><b><ul>Show Details..</ul></b></title></head></html>";
			
		message+="<h2> Name is"+ frm.name.value+"</h2>"; 
		
		message+="<h2> Address is"+ frm.add.value+"</h2>"; 
		
		message+="<h2> Rate Of Interest is"+ frm.txtR.value+"</h2>"; 
		
		var p= form.name.value;
		var t= parseFloat(form.add.value);
		var r= parseFloat(form.txtR.value);
		var si= p*t*r;
		
		message+='<h1>Simple Interest is'+si/100+"</h1>";
		
		win.document.write(message);
		
		
	}
	
	
	
	function findCode(form)				//to calculate the postal code and the store location based on the state value
	{
			
				var s=document.getElementById('txtstate').value;
				if(s=="Karnataka")
				{
					var postal=560000;
					var store_loc=""Banglore;
							disp(s,postal,store_loc);
				}
				else if(s=="Tamilnadu")
				{
					var postal=600000;
					var store_loc="Chennai";
							disp(s,postal,store_loc);
				}
				else if(s=="Kerala")
				{
					var postal=680000;
					var store_loc="Thriuvanthapuram";
							disp(s,postal,store_loc);
			.	}
					else if(s=="Andrapradesh")
				{
					var postal=500000;
					var store_loc="Hyderabad";
							disp(s,postal,store_loc);
				}
				
			
			
	}
	
	
	function disp(state,postal,store_loc)			//to print the postal code and the store location based on the state value
	{
		
		alert('State is'+state+'postal address is'+postal+'Store location in state is:'+store_loc);
	}
