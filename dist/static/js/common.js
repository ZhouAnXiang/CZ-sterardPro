function GetQueryString(name){
	 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var r = window.location.search.substr(1).match(reg);
	 if(r!=null){
		 return  unescape(r[2]);
	 }
	  return null;
	}
	// var Myemail = GetQueryString("email")
    // var id = GetQueryString("pid")

const config ={

	id:GetQueryString("pid"),
	// Myemail:GetQueryString("email"),
	//测试URL
	domain:'http://192.168.220.55:8080/dotpro/',
	// Emaildomain:'http://192.168.220.55:8080/dotpro/'

	//线上URL
//  domain:"http://pro.dothealth.cn/app/dot/treatmentreport/TIA?pid="+id + "&suiji=" + suiji,
//  Emaildomain: "http://pro.dothealth.cn/util/FileUpload/sendMail?pid=" + id + "&suiji=" + suiji,
}

export { 
	config 
  }