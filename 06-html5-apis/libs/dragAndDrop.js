function cancel(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

var drop = document.querySelector('#drop');

// Tells the browser that we *can* drop on this target
addEvent(drop, 'dragover', cancel);
addEvent(drop, 'dragenter', cancel);

addEvent(drop, 'drop', function (e) {
  if (e.preventDefault) e.preventDefault(); // stops the browser from redirecting off to the text.

  //this.innerHTML += '<p>' + e.dataTransfer.getData('Text') + '</p>';
  //return false;
});