
$('.btn-upload').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length) + $("#submit").show();
    else $(this).prev().text('Файлы не выбраны');
});


// $(function() {
//   'use strict';
//   $.contextMenu({
//       selector: '#context-menu-simple',
//       callback: function(key, options) {},
//       items: {
//           "edit": {
//               name: "Сохранить",
//           },
//           copy: {
//               name: "Копировать путь",
//               icon: "copy"
//           },
//           "delete": {
//               name: "Удалить",
//               icon: "delete"
//           },
//           "sep1": "---------",
//           "quit": {
//               name: "Закрыть",
//               icon: function() {
//                   return 'context-menu-icon context-menu-icon-quit';
//               }
//           }
//       }
//   });
// })

