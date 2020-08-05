var eightAM = document.querySelector("#eightAm");
var nineAM = document.querySelector("#nineAm");
var tenAM = document.querySelector("#tenAm");
var elevenAM = document.querySelector("#elevenAm");
var twelvePM = document.querySelector("#twelvePm");
var onePM = document.querySelector("#onePm");
var twoPM = document.querySelector("#twoPm");
var threePM = document.querySelector("#threePm");
var fourPM = document.querySelector("#fourPm");
var saveBtn = document.querySelector("#save");
var today = document.querySelector("#currentDay");
var momentElement = moment().hours(Number);

today.innerHTML = (momentElement);


var saved8am = [];
var saved9am = [];
var saved10am = [];
var saved11am = [];
var saved12pm = [];
var saved1pm = [];
var saved2pm = [];
var saved3pm = [];
var saved4pm = [];

//8am
var saved8am =JSON.parse(localStorage.getItem("8AM-User"))
  if (saved8am !== null) {

  for (var i = 0; i<saved8am.length; i++) {
      $(".eightAMtodo").append(saved8am[i])

  }};

//9am


var saved9am =JSON.parse(localStorage.getItem("9AM-User"))
  if (saved9am !== null) {

  for (var i = 0; i<saved9am.length; i++) {
      $(".nineAMtodo").append(saved9am[i])

  }};

//  10am


var saved10am =JSON.parse(localStorage.getItem("10AM-User"))
  if (saved10am !== null) {

  for (var i = 0; i<saved10am.length; i++) {
      $(".tenAMtodo").append(saved10am[i])

  }};

  //11am
  

var saved11am =JSON.parse(localStorage.getItem("11AM-User"))
  if (saved11am !== null) {

  for (var i = 0; i<saved11am.length; i++) {
      $(".elevenAMtodo").append(saved11am[i])

  }};

  //12pm

var saved12pm =JSON.parse(localStorage.getItem("12PM-User"))
  if (saved12pm !== null) {

  for (var i = 0; i<saved12pm.length; i++) {
      $(".twelvePMtodo").append(saved12pm[i])

  }};

  //1pm


var saved1pm =JSON.parse(localStorage.getItem("1PM-User"))
  if (saved1pm !== null) {

  for (var i = 0; i<saved1pm.length; i++) {
      $(".onePMtodo").append(saved1pm[i])

  }};

  //2pm
  

var saved2pm =JSON.parse(localStorage.getItem("2PM-User"))
  if (saved2pm !== null) {

  for (var i = 0; i<saved2pm.length; i++) {
      $(".twoPMtodo").append(saved2pm[i])

  }};

  //3pm
 

var saved3pm =JSON.parse(localStorage.getItem("3PM-User"))
  if (saved3pm !== null) {

  for (var i = 0; i<saved3pm.length; i++) {
      $(".threePMtodo").append(saved3pm[i])

  }};

  //4pm

var saved4pm =JSON.parse(localStorage.getItem("4PM-User"))
  if (saved4pm !== null) {

  for (var i = 0; i<saved4pm.length; i++) {
      $(".fourPMtodo").append(saved4pm[i])

  }};





var eightElem = [];
var nineElem = [];
var tenElem = [];
var elevenElem = [];
var twelveElem = [];
var oneElem = [];
var twoElem = [];
var threeElem = [];
var fourElem = [];



$(".save8am").on("click", function () {
    event.preventDefault();
    
    eightElem.push(eightAM.value);
    localStorage.setItem("8AM-User", JSON.stringify(eightElem));
    $(".eightAMtodo").html(eightElem);
   

});


$(".save9am").on("click", function() {
    event.preventDefault();

    nineElem.push(nineAM.value);
    localStorage.setItem("9AM-User", JSON.stringify(nineElem));
    $(".nineAMtodo").html(nineElem);


})

$(".save10am").on("click", function() {
    event.preventDefault();

    tenElem.push(tenAM.value);
    localStorage.setItem("10AM-User", JSON.stringify(tenElem));
    $(".tenAMtodo").html(tenElem);

})

$(".save11am").on("click", function() {
  event.preventDefault();

  elevenElem.push(elevenAM.value);
  localStorage.setItem("11AM-User", JSON.stringify(elevenElem));
  $(".elevenAMtodo").append(elevenElem);

})

$(".save12pm").on("click", function() {
  event.preventDefault();

  twelveElem.push(twelvePM.value);
  localStorage.setItem("12PM-User", JSON.stringify(twelveElem));
  $(".twelvePMtodo").html(twelveElem);

})

$(".save1pm").on("click", function() {
  event.preventDefault();

  oneElem.push(onePM.value);
  localStorage.setItem("1PM-User", JSON.stringify(oneElem));
  $(".onePMtodo").html(oneElem);

})

$(".save2pm").on("click", function() {
  event.preventDefault();

  twoElem.push(twoPM.value);
  localStorage.setItem("2PM-User", JSON.stringify(twoElem));
  $(".twoPMtodo").html(twoElem);

})

$(".save3pm").on("click", function() {
  event.preventDefault();

  threeElem.push(threePM.value);
  localStorage.setItem("3PM-User", JSON.stringify(threeElem));
  $(".threePMtodo").html(threeElem);

})

$(".save4pm").on("click", function() {
  event.preventDefault();

  fourElem.push(fourPM.value);
  localStorage.setItem("4PM-User", JSON.stringify(fourElem));
  $(".fourPMtodo").append(fourElem);

})



var eightAmElement = eightAM;
var nineAmElement = nineAM;
var tenAmElement = tenAM;
var elevenAmElement = elevenAM;
var twelvePmElement = twelvePM;
var onePmElement = onePM;
var twoPmElement = twoPM;
var threePmElement = threePM;
var fourPmElement = fourPM;

  //8am
  console.log(moment().format("HH"))
  console.log($(eightAmElement).attr("data-time"))

  if (moment().format("HH") == $(eightAmElement).attr("data-time"))

      $(eightAmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(eightAmElement).attr("data-time"))
      $(eightAmElement).css("backgroundColor", "lightgray");
  else
      $(eightAmElement).css("backgroundColor", "green");
  
  //9am

  if (moment().format("HH") == $(nineAmElement).attr("data-time"))
    $(nineAmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(nineAmElement).attr("data-time"))
    $(nineAmElement).css("backgroundColor", "lightgray");
  else
    $(nineAmElement).css("backgroundColor", "green");
  
//10am
  console.log(moment().format("HH"))
  console.log($(tenAmElement).attr("data-time"))

  if (moment().format("HH") == $(tenAmElement).attr("data-time"))
    $(tenAmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(tenAmElement).attr("data-time"))
    $(tenAmElement).css("backgroundColor", "lightgray");
  else
    $(tenAmElement).css("backgroundColor", "green");  

//11am
  if (moment().format("HH") == $(elevenAmElement).attr("data-time"))
    $(elevenAmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(elevenAmElement).attr("data-time"))
    $(elevenAmElement).css("backgroundColor", "lightgray");
  else
    $(elevenAmElement).css("backgroundColor", "green");

//12pm
  if (moment().format("HH") == $(twelvePmElement).attr("data-time"))
    $(twelvePmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(twelvePmElement).attr("data-time"))
    $(twelvePmElement).css("backgroundColor", "lightgray");
  else
    $(twelvePmElement).css("backgroundColor", "green");

//1pm
  if (moment().format("HH") == $(onePmElement).attr("data-time"))
    $(onePmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(onePmElement).attr("data-time"))
    $(onePmElement).css("backgroundColor", "lightgray");
  else
    $(onePmElement).css("backgroundColor", "green");  

//2pm
  if (moment().format("HH") == $(twoPmElement).attr("data-time"))
    $(twoPmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(twoPmElement).attr("data-time"))
    $(twoPmElement).css("backgroundColor", "lightgray");
  else
    $(twoPmElement).css("backgroundColor", "green");

//3pm
  if (moment().format("HH") == $(threePmElement).attr("data-time"))
    $(threePmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(threePmElement).attr("data-time"))
    $(threePmElement).css("backgroundColor", "lightgray");
  else
    $(threePmElement).css("backgroundColor", "green");
//4pm
  if (moment().format("HH") == $(fourPmElement).attr("data-time"))
    $(fourPmElement).css("backgroundColor", "blue");

  else if (moment().format("HH") > $(fourPmElement).attr("data-time"))
    $(fourPmElement).css("backgroundColor", "lightgray");
  else
    $(fourPmElement).css("backgroundColor", "green");
 
