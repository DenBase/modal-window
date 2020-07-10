
$('.btn-upload').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length) + $("#submit").show();
    else $(this).prev().text('Файлы не выбраны');
});
