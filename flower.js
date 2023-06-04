//show hide element
function toggleHide(elementid) {
  var x = document.getElementById(elementid);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//update css Variables
function updateCssVar(valsource,cssvariable,unit){
	var val= document.getElementById(valsource).value;
	document.documentElement.style
    .setProperty(cssvariable,val+unit);

}

//set cssvariables
function setCssVar(cssvariable,val){
	document.documentElement.style.setProperty(cssvariable,val);

}

//breedpetals
function breedpetals(valsource){
	var val= document.getElementById(valsource).value;
	breed(val);
	
}
function breed(val){
	var layer1=document.getElementById("layer1");
	var layer2=document.getElementById("layer2");
	var divsopen="",divsclose="";
	var i;
	for (i = 0; i < val; i++) {
		divsopen+="<div>";
		divsclose+="</div>";
	}   

	layer1.innerHTML=divsopen+divsclose;
	layer2.innerHTML=divsopen+divsclose;
	
}

//numbers to sliders
function slidertoggle(){ 
	var x=document.getElementById('slidertoggle');
	if (x.innerHTML==="Numbers Please"){
		document.getElementById('scalew').type = 'number';
		document.getElementById('scaleh').type = 'number';
		document.getElementById('petalradius').type = 'number';
		document.getElementById('innerwidth').type = 'number';
		document.getElementById('innerheight').type = 'number';
		document.getElementById('petals').type = 'number';
		document.getElementById('animduration').type = 'number';
		x.innerHTML="Range Sliders";
	}
	else{
		document.getElementById('scalew').type = 'range';
		document.getElementById('scaleh').type = 'range';
		document.getElementById('petalradius').type = 'range';
		document.getElementById('innerwidth').type = 'range';
		document.getElementById('innerheight').type = 'range';
		document.getElementById('petals').type = 'range';
		document.getElementById('animduration').type = 'range';
		x.innerHTML="Numbers Please";
	}
}

//presets
function setPreset(x){
	
	var scalew, scaleh, petalradius, innerwidth, innerheight, animduration;
	switch (x) {
		case 1:
			scalew=450;
			scaleh=450;
			petalradius=0;
			innerwidth=100;
			innerheight=100;
			animduration=15;
			petals=2;
			break;								
		case 2:	
			scalew=400;
			scaleh=400;
			petalradius=50;
			innerwidth=100;
			innerheight=15;
			animduration=5;
			petals=15;
			break;							
		case 3:									
			scalew=450;
			scaleh=450;
			petalradius=25;
			innerwidth=100;
			innerheight=60;
			animduration=10;
			petals=5;
			break;			
		case 4:
			scalew=450;
			scaleh=450;
			petalradius=25;
			innerwidth=100;
			innerheight=100;
			animduration=30;
			petals=5;
			break;			
		case 5:									
			scalew=450;
			scaleh=450;
			petalradius=35;
			innerwidth=80;
			innerheight=80;
			animduration=15;
			petals=20;
			break;			
		case 6:									
			scalew=450;
			scaleh=450;
			petalradius=50;
			innerwidth=100;
			innerheight=80;
			animduration=20;
			petals=10;
			break;			
		case 7:									
			scalew=50;
			scaleh=400;
			petalradius=50;
			innerwidth=100;
			innerheight=80;
			animduration=15;
			petals=20;
			break;			
		case 8:
			scalew=50;
			scaleh=50;
			petalradius=50;
			innerwidth=120;
			innerheight=120;
			animduration=15;
			petals=15;
			break;			
		case 8:
			scalew=50;
			scaleh=50;
			petalradius=50;
			innerwidth=120;
			innerheight=120;
			animduration=15;
			petals=15;
			break;
		case 9:
			scalew=50;
			scaleh=150;
			petalradius=50;
			innerwidth=120;
			innerheight=100;
			animduration=10;
			petals=23;
			break;
		case 10:
			scalew=1;
			scaleh=60;
			petalradius=0;
			innerwidth=125;
			innerheight=140;
			animduration=10;
			petals=10;
			break;
		case 11:
			scalew=500;
			scaleh=500;
			petalradius=0;
			innerwidth=99;
			innerheight=99;
			animduration=50;
			petals=25;
			break;
		case 12:
			scalew=500;
			scaleh=500;
			petalradius=50;
			innerwidth=95;
			innerheight=90;
			animduration=50;
			petals=25;
			break;
		case 13:
			scalew=250;
			scaleh=450;
			petalradius=0;
			innerwidth=100;
			innerheight=100;
			animduration=100;
			petals=15;
			break;
		case 14:
			scalew=1000;
			scaleh=50;
			petalradius=0;
			innerwidth=100;
			innerheight=100;
			animduration=15;
			petals=5;
			break;
		case 15:
			scalew=1000;
			scaleh=20;
			petalradius=50;
			innerwidth=80;
			innerheight=120;
			animduration=15;
			petals=5;
			break;
		case 16:
			scalew=400;
			scaleh=400;
			petalradius=0;
			innerwidth=80;
			innerheight=80;
			animduration=40;
			petals=12;
			break;			
		case 17:
			scalew=380;
			scaleh=320;
			petalradius=25;
			innerwidth=105;
			innerheight=92;
			animduration=100;
			petals=20;
			break;
		case 18:
			scalew=450;
			scaleh=450;
			petalradius=50;
			innerwidth=100;
			innerheight=95;
			animduration=200;
			petals=15;
			break;
		case 19:
			scalew=450;
			scaleh=450;
			petalradius=25;
			innerwidth=50;
			innerheight=100;
			animduration=15;
			petals=8;
			break;	
		case 20:
			scalew=70;
			scaleh=400;
			petalradius=50;
			innerwidth=50;
			innerheight=100;
			animduration=50;
			petals=8;
			break;
		case 21:
			scalew=700;
			scaleh=300;
			petalradius=50;
			innerwidth=100;
			innerheight=100;
			animduration=500;
			petals=25;
			break;	
		case 22:
			scalew=500;
			scaleh=25;
			petalradius=50;
			innerwidth=95;
			innerheight=105;
			animduration=100;
			petals=25;
			break;				
}

	setCssVar('--scalew',scalew+'px');				updateValue('scalew',scalew);
	setCssVar('--scaleh',scaleh+'px');				updateValue('scaleh',scaleh);
	setCssVar('--petalradius',petalradius+'%');		updateValue('petalradius',petalradius);
	setCssVar('--innerwidth',innerwidth+'%');		updateValue('innerwidth',innerwidth);
	setCssVar('--innerheight',innerheight+'%');		updateValue('innerheight',innerheight);
	setCssVar('--animduration',animduration+'s');	updateValue('animduration',animduration);
	breed(petals);									updateValue('petals',petals);
	
}

function updateValue(id,val){
		document.getElementById(id).value=val;
}
