export const copyText = function(text) {
  // Based on https://stackoverflow.com/questions/45071353/copy-text-string-on-click/53977796#53977796
  // copy to clipboard by creating a read only textarea
  // save the current selection (if any) to restore, just in case
  var e1 = document.createElement("textarea");
  e1.value = text;
  e1.setAttribute("readonly", "");
  e1.style.position = "absolute";   // move off screen
  e1.style.left = "-9999px";
  document.body.appendChild(e1);
  const selected = document.getSelection().rangeCount > 0        // Check if there is any content selected previously
    ? document.getSelection().getRangeAt(0)     // Store selection if found
    : false;
  e1.select();
  document.execCommand("copy");
  document.body.removeChild(e1);
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
}
