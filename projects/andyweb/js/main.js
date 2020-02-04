
$('#modal1').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
  });
  $('#modal6').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
  });
  
  $('#modal4').on('hidden.bs.modal', function (e) {
    // do something...
    $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
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
	
	
