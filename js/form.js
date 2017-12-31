$(document).ready(init);

function init() {
  //  guardando país
  var $select = $('#select-flags');
  $select.on('click', function(event) {
    var $country = $(this).val();
  });
  //  obteniendo numero de telefono y desabilitando el boton
  var $numberPhone = $('#number-phone');
  $numberPhone.on('input', function(event) {
    var $number = $(this).val();
    if ($number.length === 10) {
      $('#next').removeAttr('disabled');
    } else if ($number.length > 10 || $number.length < 10) {
      $('#next').attr('disabled', true);
    }
  });
  //   generando número aleatorio
  function random() {
    var codeOrigin = Math.random() * (999 - 100) + 100;
    return Math.round(codeOrigin);
  }
  var code = random();
  var codeRandom = $('#next').on('click', function() {
    console.log(localStorage.codee = code);
    alert('Anota, tu código es el siguiente:  LAB - ' + code);
    $('#number-phone').val(' ');
    window.location.href = '../views/verify.html';
  });
  var code = random();
  var resendRandom = $('#resend').on('click', function() {
    console.log(localStorage.codee = code);
    alert('Anota, tu código es el siguiente:  LAB - ' + code);
    $('#insert-code').val(' ');
    $('#resend').attr('disabled', true);
  });
  $('#insert-code').on('input', function(event) {
    console.log(localStorage.codee);
    var $inputCode = parseInt($(this).val());
    if (parseInt($(this).val()) === parseInt(localStorage.codee)) {
      $('#next-two').removeAttr('disabled');
    } else {
      $('#next-two').attr('disabled', true);
    }
  });
  $('#next-two').on('click', function() {
    $('#number-phone').val(' ');
    window.location.href = '../views/sign.html';
  });
}
