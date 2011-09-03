// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(function(){
  $('#council_selector').change(function() {
    if($(this).val() != ''){
      goToCouncilPage($(this).val());
    }
  });
});




function goToCouncilPage(id) {
  window.location = '/councils/' + id;
}
