"use strict";

var ALUMNI_TO_SHOW = 17;

function randomizeAlumni() {
  // Shuffle list
  var alumniContainer = $("#alumni");
  var alumniMembers = alumniContainer.children();
  while (alumniMembers.length > 0) {
    alumniContainer.append(
      alumniMembers.splice(
        Math.floor(Math.random() * alumniMembers.length),
        1
      )[0]
    );
  }

  // Hide the later elements
  alumniContainer
    .children()
    .filter(function(index) {
      return index > ALUMNI_TO_SHOW;
    })
    .hide();

  // Provide option to show all
  var showAllButton = $(
    "<li><a href='javascript:;' style='font-style:italic'>See all</a></li>"
  ).click(function() {
    alumniContainer.children().show();
    $(this).remove();
  });
  alumniContainer.append(showAllButton);
}
window.onload = function() {
  randomizeAlumni();
};
