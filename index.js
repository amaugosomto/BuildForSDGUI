$(document).ready(function () {
  $("select").formSelect();
  $("input.select-dropdown.dropdown-trigger").attr("id","mewSelect");
  $(".select-wrapper").append(`<label for="mewSelect" style="display:none">`);
});