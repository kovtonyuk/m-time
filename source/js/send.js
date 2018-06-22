$(document).ready(function(){
    $("#btn_form").click(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send.php", //путь до php фаила отправителя
            data: form_data,
            success: function () {
                //код в этом блоке выполняется при успешной отправке сообщения
                window.location.href="http://4893v1qa.idua.org"
                //alert("Ваше сообщение отпрвлено!");
            }
        });
    });
});