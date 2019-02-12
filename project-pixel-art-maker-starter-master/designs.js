

var height, width, color;

$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})


function makeGrid(n,m) {
  $('tr').remove();

  for (var i = 1; i<= n; i++) {
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var j = 1; j <= m; j++) {
        $('#table' + i).append('<td></td>');
      }
  }

  //This section adds and removes color to cell
  
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })

}
