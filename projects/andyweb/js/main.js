
$('#modal1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
  });
  $('#modal2-1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal2-1 iframe').attr("src", $("#modal2-1 iframe").attr("src"));
  });
  $('#modal2-2').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal2-2 iframe').attr("src", $("#modal2-2 iframe").attr("src"));
  });
  $('#modal2-3').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal2-3 iframe').attr("src", $("#modal2-3 iframe").attr("src"));
  });
  $('#modal2-4').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal2-4 iframe').attr("src", $("#modal2-4 iframe").attr("src"));
  });
  $('#modal3-1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal3-1 iframe').attr("src", $("#modal3-1 iframe").attr("src"));
  });
  
  $('#modal4-1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal4-1 iframe').attr("src", $("#modal4-1 iframe").attr("src"));
  });


var containerEl = document.querySelector('.mixitup');
	var mixer = mixitup(containerEl, {
			animation: {
				effects: 'fade scale(0.5)'
			},
			selectors: {
				target: '.mix',
				control: '[data-mixitup-control]'
			}
	});
	
	
