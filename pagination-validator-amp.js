//1. WORKS

/*function myFunction1() {
var add_data_onclick = document.getElementById('wpforms-prev-nextid');

     add_data_onclick.addEventListener('click', () => {
      var h6 = document.createElement('h5');
      h6.textContent = 'Please enter the values in above fields';
      document.body.appendChild(h6);
      // add h6 tag with class hide with an ID
      // get that ID
      // 

    });
 }*/


//2.
/*function myFunction11() {	
	var getter = document.getElementsByTagName("span")[0];
	//console.log(getter) ;
	getter.addEventListener('click', () => {
      var attribute = getter.getAttribute('data-on');	
      //getter.removeAttribute("data-on");     
 	  getter.setAttribute('on',attribute);
    });	
}
myFunction11();

//3. WORKS
function validateForm() {
  var x =  document.getElementById("wpforms-prev-nextid");
  x.addEventListener('click', () => {
      var xd = x.getAttribute('data-on');	
      //getter.removeAttribute("data-on");     
 	  x.setAttribute('on',xd);
    });	
  //var x =  document.getElementById("12345").value = "Johnny Bravo";
  //console.log(x);
}



/*

      var h6 = document.createElement('h5');
      h6.textContent = 'Please enter the values in above fields';
      document.body.appendChild(h6);
*/
//4.
var add_data_onclick = document.getElementsByClassName('wpforms-prev-next');
var submit_btn = document.getElementsByClassName("wpforms-submit-container");

  for(var i=0; i<add_data_onclick.length;i++ ){

     add_data_onclick[i].addEventListener('click', (e) => {
     	//console.log(e);
if(e.target.innerHTML == "Next"){
//console.log(submit_btn[0]);
var test = e.target.getAttribute("data-on");
var testt= test.match(/(.*?)hidebutton(.*?):\s+false,\s+hidebutton(.*?):\s+true/);
var pg_id = testt[3];
var nextpg_id = testt[2];
var clss = 'amp-wpforms-pagebreak-'+pg_id+'';
var next_clss = 'amp-wpforms-pagebreak-'+nextpg_id+'';
var pg_break = document.getElementsByClassName(clss);
var nextpg_break = document.getElementsByClassName(next_clss);
var get_id = pg_break[0].getElementsByClassName("wpforms-field-required");
var add_msg = document.getElementById('showmessage');
var check  = false;

     	//amp-wpforms-pagebreak-23
     	for(var i=0; i<get_id.length;i++ ){

     	  var field_check = get_id[i].value;
	     	  if(field_check == ''){
	     	  	 check  = true;
	     	  }
     	}
     	if(check == true){
     		//myFunction1();
     		//console.log('not filled')
     		// add h6 tag with class hide with an ID
      		// get that ID
      		// remove hide when clicked on 
      		//console.log(add_msg);
      		add_msg.classList.remove("hide");

          
     	}else{
           // validateForm();
            //console.log(nextpg_break[0]);
           pg_break[0].classList.add("hide");
           nextpg_break[0].removeAttribute("hidden");

           nextpg_break[0].classList.remove("hide");
           add_msg.classList.add("hide");

           // get that ID
      		// add hide when clicked on 
     var sub_two  = e.target.parentNode.getElementsByClassName("wpforms-page-indicator-steps");

     var sub_three = sub_two[0].innerHTML;
     var sub_four = sub_three.match(/Step\s+(.*?)\s+(.*?)\s+(.*)/);
     console.log(sub_four);
     var currnt_pb =  parseInt(sub_four[1]);
     var total_pb = parseInt(sub_four[3]);
     var final_res = parseInt( total_pb - currnt_pb) ;
     //console.log(sub_two);
           var sub = add_data_onclick.length - 1;
//           	console.log(e.target.parentNode);
           /*	console.log(add_data_onclick.length);
           	console.log(sub);*/
           if(1 == final_res){
          	submit_btn[0].classList.remove("hide");
           }
     	}

//console.log(get_id.length);
//console.log(add_data_onclick.getAttribute("data-on"));

//console.log(testt[3]);
}

if(e.target.innerHTML == "Prev"){
var test2 = e.target.getAttribute("data-test");

var testt2= test2.match(/(.*?)hidebutton(.*?):\s+false,\s+hidebutton(.*?):\s+true/);
var pg_id2 = testt2[3];
var nextpg_id2 = testt2[2];
var clss2 = 'amp-wpforms-pagebreak-'+pg_id2+'';
var next_clss2 = 'amp-wpforms-pagebreak-'+nextpg_id2+'';
var pg_break2 = document.getElementsByClassName(clss2);
var nextpg_break2 = document.getElementsByClassName(next_clss2);
//var submit_btn = document.getElementsByClassName("wpforms-submit-container");


			nextpg_break2[0].classList.remove("hide");
			pg_break2[0].classList.add("hide");
			submit_btn[0].classList.add("hide");
			
			//pg_break2
			//console.log(nextpg_break2);
			//console.log(test2);
           //nextpg_break[0].removeAttribute("hidden");
}

    });
 }


function checkforvalidation() {
var wfmButton = document.querySelectorAll('form[method="post"]');
if (wfmButton) {
    //for ( var i = 0; i < wfmButton.length; i++){
    	var name = document.querySelectorAll('[name=value]');
    	//console.log(wfmButton);
    	var inputElements = document.querySelectorAll('input'); //closest('form')
    	//console.log(inputElements);
    	/*(type==text ! == null){

    	}*/
    }
	 

}
//
//checkforvalidation();