document.getElementById("form").addEventListener('submit', (event) =>{

  let url="https://script.google.com/macros/s/AKfycbwL_RAsrD575XZevtFMDDrBU_jQpXZm8jh20VlNCye7G2KLPgL3/exec"


  let formSelect  = document.querySelector("form");

  let formData = new FormData(formSelect);

  const fName = formData.get('fName');
  const lName = formData.get('lName');
  const email = formData.get('email');
  const dob   = formData.get('dob');
  const zip   = formData.get('zip');
  const car   = formData.get('car');

  const schoolAttendance = formData.get('schoolAttending');
  const schoolName = formData.get('schoolName');
  const prevWork   = formData.get('prevWork');
  const grandma    = formData.get('grandmaQues');
  const techRecc   = formData.get('techRecc');
  const helpTeam   = formData.get('helpTeam');
  const difficult  = formData.get('difficult');
  const amusing    = formData.get('amusing');
  const youtube    = formData.get('youtube');
  const whyApply   = formData.get('whyApply');
  const addInfo    = formData.get('addInfo');
  const hear       = formData.get('hear');
  const acknwldge  = formData.get('acknowledge');

  const data = {
    fName,
    lName,
    email,
    dob,
    zip,
    car,
    schoolAttendance,
    schoolName,
    prevWork,
    grandma,
    techRecc,
    helpTeam,
    difficult,
    amusing,
    youtube,
    whyApply,
    addInfo,
    hear,
    acknwldge
  };





  event.preventDefault();


  $.ajax({
    url: url,
    method: "GET",
    dataType: 'json',
    data: data
  })





});
