
  (function($) {
  'use strict';
  $(function() {
    $('#browse-file').on('click', function() {
      var file = $(this).parent().parent().parent().find('#upload-default');
      file.trigger('click');
    });
    $('#upload-default').on('change', function() {
      $(this).parent().find('.foto-barang').val($(this).val().replace(/C:\\fakepath\\/i, ''));
    });
  });
})(jQuery);
