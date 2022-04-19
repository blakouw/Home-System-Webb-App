document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var stan=0;
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        stan=1;
        console.log('Checked');
      } else {
        console.log('Not checked');
      }
    });
  });