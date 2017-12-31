$(document).ready(begin);

function begin() {
  var centinelOne = false;
  var centinelTwo = false;
  var centinelThree = false;
  var centinelFour = false;
  //  validando nombre
  $('#name').on('input', function() {
    if ($(this).val().match(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/)) {
      console.log(centinelOne = true);
      activeBtn();
    } else {
      console.log(centinelOne = false);
    }
  });
  //  validando apellido
  $('#last-name').on('input', function() {
    if ($(this).val().match(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/)) {
      console.log(centinelTwo = true);
      activeBtn();
    } else {
      console.log(centinelTwo = false);
    }
  });
  //  validando email
  $('#email').on('input', function() {
    if ($(this).val().match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/)) {
      console.log(centinelThree = true);
      activeBtn();
    } else {
      console.log(centinelThree = false);
    }
  });
  //  validando checkbox
  $('#check').on('click', function(event) {
    if (event.target.checked) {
      console.log(centinelFour = true);
      activeBtn();
    } else {
      console.log(centinelFour = false);
    }
  });

  function activeBtn() {
    if (centinelOne && centinelTwo && centinelThree && centinelFour) {
      $('#btn-next').removeAttr('disabled');
    }
  }

  //  guardando datos y redireccionando página a LISTO!
  $('#btn-next').on('click', function() {
    event.preventDefault();
    localStorage.name = $('#name').val();
    localStorage.last = $('#last-name').val();
    localStorage.email = $('#email').val();
    window.location.href = '../views/done.html';
  });
}
