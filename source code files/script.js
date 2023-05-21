document.getElementById("border1").style.display = "none";
document.getElementById("quest2").style.display = "none";
document.getElementById("optionform").style.display = "none";
document.getElementById("submitbut2").style.display = "none";
//hides elements of program (revealed later through function)

document.getElementById("d_quest1").style.display = "none";
document.getElementById("d_quest2").style.display = "none";
document.getElementById("d_quest3").style.display = "none";
document.getElementById("d_quest4").style.display = "none";
document.getElementById("d_ans1").style.display= "none";
document.getElementById("d_ans2").style.display = "none";
document.getElementById("d_ans3").style.display = "none";
document.getElementById("d_ans4").style.display = "none";
document.getElementById("submitbut3").style.display = "none";document.getElementById("ans1").style.display = "none";
//hides elements of program (revealed later through function)

document.getElementById("m_quest1").style.display = "none";
document.getElementById("m_quest2").style.display = "none";
document.getElementById("m_quest3").style.display = "none";
document.getElementById("m_quest4").style.display = "none";
document.getElementById("m_ans1").style.display = "none";
document.getElementById("m_ans2").style.display = "none";
document.getElementById("m_ans3").style.display = "none";
document.getElementById("m_ans4").style.display = "none";
document.getElementById("submitbut4").style.display = "none";
document.getElementById("ans2").style.display = "none";
//hides elements of program (revealed later through function)

document.getElementById("mi_quest1").style.display = "none";
document.getElementById("mi_ans1").style.display = "none";
document.getElementById("submitbut5").style.display = "none";
document.getElementById("ans3").style.display = "none";
//hides elements of program (revealed later through function)

document.getElementById("kfc_res").style.display = "none";
document.getElementById("optionform2").style.display = "none";
document.getElementById("submitbut6").style.display = "none";
document.getElementById("kfc_quest1").style.display = "none";
document.getElementById("kfc_ans1").style.display = "none";
document.getElementById("submitbut7").style.display = "none";
document.getElementById("ans4").style.display = "none";
//hides elements of program (revealed later through function)

function enot(answer){
	var x = answer;
	console.log(x);
	if (x=="yes")
	{
	  document.getElementById("enot_info").innerHTML = "'e notation' is the equivalent of scientific notation in Javascript. </br>It is formatted like so: 3.456E+02. </br>'3.456E+02' is the equivalent of '345.6'. </br>The value after the E, '+xx' is how many times the decimal point will move to the right or left. </br>EX: 0.0453 --> 4.53E-02 (In order to get 0.0453 from 4.53, you move the decimal points 2 times to the left!) </br>EX: 453.6 --> 4.536E+02 (In order to get 453.6 from 4.536, you move the decimal points 2 times to the right!) </br>You can also enter values in e notation when you are prompted to enter values!";
	  document.getElementById("enot_info").style.color = "#26F601";
	  document.getElementById("enot_info").style.fontFamily = "Courier New";
	} 
	else {
		document.getElementById("enot_info").innerHTML = ""
	}
	//changes the value of the paragraph based on whether the user selected yes or no

	quest2_vis();
	//calls other function to change display of question
}
//function for e-notation question and result

function quest2_vis(){
	document.getElementById("border1").style.display = "block";
	document.getElementById("quest2").style.display = "block";
	document.getElementById("optionform").style.display = "block";
	document.getElementById("submitbut2").style.display = "block";
}
//function that changes display of calculation option question

function options(){
	var a = document.getElementById("optionform").value;
	console.log(a);
	if(a=="density")
	{
		dens_quest();
	}
	else if(a=="mass")
	{
		mass_quest();
	}
	else if(a=="mi_light")
	{
		miles_quest();
	}
	else if (a=="kelvin")
	{
		kel_quest1();
	}
}
//function that recieves option that user selected and goes to option by calling function

function options2(){
	var b = document.getElementById("optionform2").value;
	console.log(b);

	kel_quest2();
}
//function that is called to call another function

function dens_quest()
{
	document.getElementById("d_quest1").style.display = "block";
	document.getElementById("d_quest2").style.display = "block";
	document.getElementById("d_quest3").style.display = "block";
	document.getElementById("d_quest4").style.display = "block";
	document.getElementById("d_ans1").style.display = "block";
	document.getElementById("d_ans2").style.display = "block";
	document.getElementById("d_ans3").style.display = "block";
	document.getElementById("d_ans4").style.display = "block";
	document.getElementById("submitbut3").style.display = "block";
}
//function that changes display of a question

function mass_quest()
{
	document.getElementById("m_quest1").style.display = "block";
	document.getElementById("m_quest2").style.display = "block";
	document.getElementById("m_quest3").style.display = "block";
	document.getElementById("m_quest4").style.display = "block";
	document.getElementById("m_ans1").style.display = "block";
	document.getElementById("m_ans2").style.display = "block";
	document.getElementById("m_ans3").style.display = "block";
	document.getElementById("m_ans4").style.display = "block";
	document.getElementById("submitbut4").style.display = "block";
}
//function that changes display of a question

function miles_quest()
{
	document.getElementById("mi_quest1").style.display = "block";
	document.getElementById("mi_ans1").style.display = "block";
	document.getElementById("submitbut5").style.display = "block";
}
//function that changes display of a question

function kel_quest1()
{
	document.getElementById("kfc_res").style.display = "block";
	document.getElementById("optionform2").style.display = "block";
	document.getElementById("submitbut6").style.display = "block";
}
//function that changes display of a question

function kel_quest2()
{
	document.getElementById("kfc_quest1").style.display = "block";
	document.getElementById("kfc_ans1").style.display = "block";
	document.getElementById("submitbut7").style.display = "block";
}
//function that changes display of a question

function density()
{
	var v1 = document.getElementById("d_ans1").value;
	var v2 = document.getElementById("d_ans2").value;
	var m1 = document.getElementById("d_ans3").value;
	var m2 = document.getElementById("d_ans4").value;

	density_calc(v1, v2, m1, m2);
}
//function that recieves values from user prompt, makes variables, and calls function for calculation

function mass()
{
	var d1 = document.getElementById("m_ans1").value;
	var d2 = document.getElementById("m_ans2").value;
	var v1 = document.getElementById("m_ans3").value;
	var v2 = document.getElementById("m_ans4").value;

	mass_calc(d1, d2, v1, v2);
}
//function that recieves values from user prompt, makes variables, and calls function for calculation

function mi_light()
{
	var miles = document.getElementById("mi_ans1").value;

	mi_light_calc(miles);
}
//function that recieves values from user prompt, makes variables, and calls function for calculation

function kelvin()
{
	var degree = document.getElementById("kfc_ans1").value;

	kelvin_calc(degree);
}
//function that recieves values from user prompt, makes variables, and calls function for calculation


function density_calc(v1, v2, m1, m2)
{
	var vol1 = parseFloat(v1, 10);
	var vol2 = parseFloat(v2, 10);
	var mas1 = parseFloat(m1, 10);
	var mas2 = parseFloat(m2, 10);
	//variables

	var d1 = mas1/vol1;
	var d2 = mas2/vol2;
	var diff = 0;
	//calculation
	if (d1 > d2)
	{
		diff = d1-d2;
	}
	else if (d1 < d2)
	{
		diff = d2-d1;
	}
	else
	{
		diff = 0;
	}
	//determines order of subtraction in order to have a positive value
	console.log(diff);

	if(!isThisANumber(v1) || !isThisANumber(v2) || !isThisANumber(m1) || !isThisANumber(m2))
	{
		document.getElementById("ans1").style.display = "block";
		document.getElementById("ans1").innerHTML = "One or more of your inputs is not a number. Please try again!";
		document.getElementById("ans1").style.color = "#26F601";
		document.getElementById("ans1").style.fontFamily = "Courier New";
		return false;
	}
	//determines if values entered by user are numbers and adjusts output message. returns false if one or more values is not a number

	document.getElementById("ans1").style.display = "block";
	document.getElementById("ans1").innerHTML = "Density 1: " + d1 + " unit(s) per cubic centimeter/meter</br>Density 2: " + d2 + " unit(s) per cubic centimeter/meter</br></br>The difference between the two densitites is " + diff + " unit(s) per cubic centimeter/meter.";
	document.getElementById("ans1").style.color = "#26F601";
	document.getElementById("ans1").style.fontFamily = "Courier New";
	//outputs value if all values entered by user are numbers
}
//function for calculating density
//algorithm - this function is called through a series of events. When clicking the submitbut3, density() is called, which changes the visibility and calls this function. This function has if statements within it. This creates a series of nested functions and sequences. This function (density_calc()) conatins math that calculates the density.

function mass_calc(d1, d2, v1, v2)
{
	var den1 = parseFloat(d1, 10);
	var den2 = parseFloat(d2, 10);
	var vol1 = parseFloat(v1, 10);
	var vol2 = parseFloat(v2, 10);
	//variables

	var m1 = den1*vol1;
	var m2 = den2*vol2;
	var diff = 0;
	//calculates
	
	if (m1 > m2)
	{
		diff = m1-m2;
	}
	else if (m1 < m2)
	{
		diff = m2-m1;
	}
	else
	{
		diff = 0;
	}
	//determines order of subtraction in order to have a positive value

	if(!isThisANumber(d1) || !isThisANumber(d2) || !isThisANumber(v1) || !isThisANumber(v2))
	{
		document.getElementById("ans2").style.display = "block";
		document.getElementById("ans2").innerHTML = "One or more of your inputs is not a number. Please try again!";
		document.getElementById("ans2").style.color = "#26F601";
		document.getElementById("ans2").style.fontFamily = "Courier New";
		return false;
	}
	//determines if values entered by user are numbers and adjusts output message. returns false if one or more values is not a number

	document.getElementById("ans2").style.display = "block";
	document.getElementById("ans2").innerHTML = "Mass 1: " + m1 + " units</br>Mass 2: " + m2 + " units</br>The difference between the two masses is " + diff + " units.";
	document.getElementById("ans2").style.color = "#26F601";
	document.getElementById("ans2").style.fontFamily = "Courier New";
	//outputs value if all values entered by user are numbers
}
//function for calculating mass

function mi_light_calc(miles)
{
	var convo_fact = 1/(5.88e12);
	lighty = miles*convo_fact;
	//calculates using conversion factor

	if (!isThisANumber(miles)){
		document.getElementById("ans3").style.display = "block";
		document.getElementById("ans3").innerHTML = miles + " is not a valid value. Please try again!";
		document.getElementById("ans3").style.color = "#26F601";
		document.getElementById("ans3").style.fontFamily = "Courier New";
		return false;
	}
	//determines if value entered by user is a number and adjusts output message. returns false if miles is not a number

	document.getElementById("ans3").style.display = "block";
	document.getElementById("ans3").innerHTML = miles + " miles in lightyears: " + lighty + " lightyears";
	document.getElementById("ans3").style.color = "#26F601";
	document.getElementById("ans3").style.fontFamily = "Courier New";
	//outputs value if miles entered by user is a number
}
//function for calculating miles to lightyears

function kelvin_calc(kelvin)
{
	var ch = document.getElementById("optionform2").value;
	console.log(ch);
	var fahren = 0;
	var celsius = 0;
	//initializes variables

	if (!isThisANumber(kelvin)){
		document.getElementById("ans4").style.display = "block";
		document.getElementById("ans4").innerHTML = kelvin + " is not a valid value for temperature. Please try again!";
		document.getElementById("ans4").style.color = "#26F601";
		document.getElementById("ans4").style.fontFamily = "Courier New";
		return false;
	}
	//determines if value entered by user is a number and adjusts output message. returns false if miles is not a number

	if (ch == "far")
	{
		var mult = (9/5)+32;
		var val = kelvin-273.15;

		fahren = val*mult;
		//calculates

		document.getElementById("ans4").style.display = "block";
		document.getElementById("ans4").innerHTML = kelvin + " kelvin in fahrenheit: " + fahren + " degrees";
		document.getElementById("ans4").style.color = "#26F601";
		document.getElementById("ans4").style.fontFamily = "Courier New";
		//outputs value if temperature entered by user is a number and they selected kelvin to fahrenheit
	}
	else (ch == "cel")
	{
		celsius = kelvin - 273.15;
		//calculates

		document.getElementById("ans4").style.display = "block";
		document.getElementById("ans4").innerHTML = kelvin + " kelvin in celsius: " + celsius + " degrees";
		document.getElementById("ans4").style.color = "#26F601";
		document.getElementById("ans4").style.fontFamily = "Courier New";
		//outputs value if temperature entered by user is a number and they selected kelvin to celsius
	}
}
//function for calculating kelvin to fahrenheit or celsius
//abstraction - this function calculates values using mathematical operators and determines the response to the user based on if-statements

function isThisANumber(x) {
  return isFinite(x) && !isNaN(parseFloat(x));
}
//isThisANumber function
// CITATION: Stack Overflow Users. “Check Whether a Value Is a Number in JavaScript or JQuery.” Stack Overflow, 23 June 2011, stackoverflow.com/questions/6449611/check-whether-a-value-is-a-number-in-javascript-or-jquery. Accessed 17 May 2020.