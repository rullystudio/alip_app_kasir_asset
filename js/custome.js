
$(document).ready(function() {
  
     $(document).on('click','#show-image_karyawan',function(e){
        e.preventDefault();
        url = $(this).attr('data-url');
        id = "<img src='"+url+" >";
        $.post(url,
          {
            id:$(this).attr('data-id'),
          },
          function(html){
            $('#modal-foto').modal('show');
            $("#data-foto").html('<img src="'+url+'" style="width:100%;"/>');
          }) ;
      });

     $(document).on('click','#show-image_user',function(e){
        e.preventDefault();
        url = $(this).attr('data-url');
        id = "<img src='"+url+" >";
        $.post(url,
          {
            id:$(this).attr('data-id'),
          },
          function(html){
            $('#modal-foto_user').modal('show');
            $("#data-foto").html('<img src="'+url+'" style="width:100%;"/>');
          }) ;
      });
});

function convertToRupiah(objek) {
    separator = ".";
    a = objek.value;
    b = a.replace(/[^\d]/g,"");
    c = "";
    panjang = b.length; 
    j = 0; 
    for (i = panjang; i > 0; i--) {
      j = j + 1;
      if (((j % 3) == 1) && (j != 1)) {
        c = b.substr(i-1,1) + separator + c;
      } else {
        c = b.substr(i-1,1) + c;
      }
    }
    objek.value = c;

  }       

  function convertToAngka()
  { var nominal= document.getElementById("nominal").value;
    var angka = parseInt(nominal.replace(/,.*|[^0-9]/g, ''), 10);
    document.getElementById("angka").innerHTML= angka;
  }       

  function convertToAngka()
  { var nominal1= document.getElementById("nominal1").value;
    var angka1 = parseInt(nominal.replace(/,.*|[^0-9]/g, ''), 10);
    document.getElementById("angka1").innerHTML= angka;
  }

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
