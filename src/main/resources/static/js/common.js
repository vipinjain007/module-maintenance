function checkOutageStatus(){
   var analysisId=document.getElementById("analysis_id").value;
   console.log("Id:"+analysisId);
   if(validation(analysisId)){
	   var result=getResult(analysisId);   
   }
   
}



function validation(analysisId){
	if (analysisId==null || analysisId=="")
	  {
		document.getElementById("result").innerHTML="Please fill Analysis Id";
	  return false;
	  }else if (! /^[0-9]{9}$/.test(analysisId)) {
		  document.getElementById("result").innerHTML="Analysis Id input is not valid!";
		  return false;
	 }else{
		 return true;
	 }
}

function getResult(id){
	//alert(get("CPR_CUST_IMPACT_CABLE_DOWN"));
	//document.getElementById("result").innerHTML =get("CPR_CUST_IMPACT_CABLE_DOWN");
	
	$.ajax({
		  url: "ajax.call",
		  type: "GET", //send it through get method
		  data: { 
			  analysisId:id
		    },
		  success: function(response) {
		      var obj=JSON.parse(response);
			  var result= obj.key;
			  var resp=get(result);
			  resp= resp.replace("#{ETROutageMessageBody}",obj.message) ;
			  document.getElementById("result").innerHTML =resp;
				
		  },
		  error: function(xhr) {
			  document.getElementById("result").innerHTML ="Please try after some time.";
		  }
		});
	
}		
