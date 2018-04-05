"use strict";

var ALUMNI_TO_SHOW = 17;

function shuffleChildren(element) {
  var children = element.children();
  while (children.length > 0) {
    element.append(
      children.splice(Math.floor(Math.random() * children.length), 1)[0]
    );
  }
}

function randomizeAlumni() {
  var alumniContainer = $("#alumni");

  // Shuffle list
  shuffleChildren(alumniContainer);

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
