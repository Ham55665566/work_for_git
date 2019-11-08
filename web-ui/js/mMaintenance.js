function div_show() 
{
	document.getElementById('lloginfailed').style.display = "none";	
	var screen_width = 50 - (19000/screen.width);
	document.getElementById("LoginBox").style.left = screen_width+'%';
	document.getElementById("userContent").style.opacity="0.2";
	var  errorMsg = document.getElementById("lloginfailed");	
	document.getElementById('LoginBox').style.display = "block";
	errorMsg.style.display = "none";
	document.getElementById("pwd").value='';	
}

function btnCancel()
{
	document.getElementById("userContent").style.opacity="1";
	document.getElementById('LoginBox').style.display = "none";
	return false;
}

function check_login_field()
{
	document.forms["login_form"].submit();
}