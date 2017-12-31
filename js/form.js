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
    } else if ($number.length > 10) {
      $('#next').attr('disabled', true);
      alert('Deben ser 10 dígitos');
    } else {
      $('#next').attr('disabled', true);
    }
  });
  //   generando número aleatorio
  function random() {
    var codeOrigin = Math.random() * (999 - 100) + 100;
    return Math.round(codeOrigin);
  }
  //  mostrando codigo y redireccionando
  var code = random();
  var codeRandom = $('#next').on('click', function() {
    console.log(localStorage.codee = code);
    alert('Anota, tu código es el siguiente:  LAB - ' + code);
    $('#number-phone').val(' ');
    window.location.href = '../views/verify.html';
  });
  //  reenviando codigo
  var resendRandom = $('#resend').on('click', function() {
    console.log(localStorage.codee = code);
    alert('Anota, tu código es el siguiente:  LAB - ' + code);
    $('#insert-code').val(' ');
    $('#resend').attr('disabled', true);
  });
  //  validando codigo para redireccionar
  $('#insert-code').on('input', function(event) {
    console.log(localStorage.codee);
    var $inputCode = parseInt($(this).val());
    if (parseInt($(this).val()) === parseInt(localStorage.codee) && $(this).val().length === 3) {
      $('#next-two').removeAttr('disabled');
    } else if ($(this).val().length > 3) {
      $('#next-two').attr('disabled', true);
      alert('Código inválido');
    } else {
      $('#next-two').attr('disabled', true);
    }
  });
  $('#next-two').on('click', function() {
    $('#number-phone').val(' ');
    window.location.href = '../views/sign.html';
  });
}
