document.getElementById("form").addEventListener('submit', (event) =>{

  let url = "https://script.google.com/macros/s/AKfycbzPjAgEakPPtPfaJVa23C2IsWy0rjbtRcrQZgzvBzfqgWhaRCQ/exec";
  event.preventDefault();


  let formSelect  = document.querySelector("form");

  console.log(url);
  console.log("formsubmitted");

  let formData = new FormData(formSelect);

  const aa = formData.get('fName');
  const bb = formData.get('lName');
  const cc = formData.get('email');
  const dd   = formData.get('dob');
  const ee   = formData.get('zip');
  const ff   = formData.get('car');
  const gg  = formData.get('city');

  const hh = formData.get('schoolAttending');
  const ii = formData.get('schoolName');
  const jj   = formData.get('prevWork');
  const kk    = formData.get('grandmaQues');
  const ll  = formData.get('techRecc');
  const mm   = formData.get('helpTeam');
  const nn  = formData.get('difficult');
  const oo   = formData.get('amusing');
  const pp   = formData.get('youtube');
  const qq   = formData.get('whyApply');
  const rr    = formData.get('addInfo');
  const ss    = formData.get('hear');
  const tt  = formData.get('acknowledge');

  const data = {
    aa,
    bb,
    cc,
    dd,
    ee,
    ff,
    gg,
    hh,
    ii,
    jj,
    kk,
    ll,
    mm,
    nn,
    oo,
    pp,
    qq,
    rr,
    ss,
    tt
  };

  console.log(data);








  $.ajax({
    url: url,
    method: "GET",
    dataType: 'json',
    data: data
  })





});
