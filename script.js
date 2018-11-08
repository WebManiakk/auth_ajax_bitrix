//авторизация
$(document).on("click", '#auth_submit', function(e) {
    e.preventDefault();
      $.ajax({
          url: '/local/ajax/auth.php',
          data: {
            login: $('#auth_form input[name="login"]').val(),
            pass: $('#auth_form input[name="pass"]').val(),
        },
        dataType: 'json',
          success: function(result){
              if(result.TYPE == 'ERROR'){
                  $('#auth_result').html(result.MESSAGE);
              }else{
                  location.reload();
              }
          }
      });
});
