$(function (){
   
	$('.popup-with-form').magnificPopup({
		type: 'inline',		
	});

	$('.login-link').magnificPopup({
		items: {
			src: '#login-form',
			type: 'inline'
		},
		closeBtnInside: true
	  });
	  $('.register-link').magnificPopup({
		items: {
			src: '#register-form',
			type: 'inline'
		},
		closeBtnInside: true
	  });
	  $('.purchase-link').magnificPopup({
		items: {
			src: '#purchase-popup',
			type: 'inline'
		},
		
	  });
	// $.magnificPopup.close();
	// $('.login').magnificPopup({
	// 	type: 'inline',
	// });
	$('.filter-head').on('click', function(){
        $(this).toggleClass('open');
    });
	$('.switcher-lang').on('click', function(){
        $(".lang-drop").toggleClass('open');
    });

	$('.filter-btn').on('click', function(){
        $(".filter").toggleClass('open');
        $(".background").toggleClass('open');
    });
	$('.filters-close').on('click', function(){
        $(".filter").removeClass('open');
        $(".background").removeClass('open');
    });
	$('.background').on('click', function(){
        $(".filter").removeClass('open');
        $(".background").removeClass('open');
        $(".navigation-inner").removeClass('open');
        $(".navigation-inner").removeClass('open');
        $(".menu-btn").removeClass('open');
    });

	//card-popup btn
	$('#pricechart-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.pricechart-content').toggleClass('active');
        $('#screenshot-btn').removeClass('active');
    });

	$('#screenshot-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.pricechart-content').toggleClass('active');
        $('#pricechart-btn').removeClass('active');
    });

	$('.switch-game-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.swithcher-game-drop').toggleClass('open');
    });
	$('.steam-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.mobile-block-content').toggleClass('open');
    });

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('open');
        $('.navigation-inner').toggleClass('open');
		$(".background").toggleClass('open');
    });

	$( "#accordion").accordion();

	//select 
	$('.select').each(function() {
		const _this = $(this),
			selectOption = _this.find('option'),
			selectOptionLength = selectOption.length,
			selectedOption = selectOption.filter(':selected'),
			duration = 250; // длительность анимации 
	
		_this.hide();
		_this.wrap('<div class="select"></div>');
		$('<div>', {
			class: 'new-select',
			text: _this.children('option:disabled').text()
		}).insertAfter(_this);

		const selectHead = _this.next('.new-select');
		$('<div>', {
			class: 'new-select__list'
		}).insertAfter(selectHead);
	
		const selectList = selectHead.next('.new-select__list');
		for (let i = 1; i < selectOptionLength; i++) {
			$('<div>', {
				class: 'new-select__item',
				html: $('<span>', {
					text: selectOption.eq(i).text()
				})
			})
			.attr('data-value', selectOption.eq(i).val())
			.appendTo(selectList);
		}
	
		const selectItem = selectList.find('.new-select__item');
		selectList.slideUp(0);
		selectHead.on('click', function() {
			if ( !$(this).hasClass('on') ) {
				$(this).addClass('on');
				selectList.slideDown(duration);
	
				selectItem.on('click', function() {
					let chooseItem = $(this).data('value');
	
					$('select').val(chooseItem).attr('selected', 'selected');
					selectHead.text( $(this).find('span').text() );
	
					selectList.slideUp(duration);
					selectHead.removeClass('on');
				});
	
			} else {
				$(this).removeClass('on');
				selectList.slideUp(duration);
			}
		});
	});


	//card-popup
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});	

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
	//card-modal

	//popup start
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	//popup end

	//tab faq start
    $('.faq-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.faq-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.faq-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
	$('.faq-nav').on('click', function(){
		$(".active-tab").removeClass('active-tab');
    });
	//tab faq end

	//range-slider start
	$(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 12300,
        from: 0,
        to: 12000,
		postfix: "Ru"
    });

	//range-slider end

	//dropzone
	// Dropzone.autoDiscover = false;

	// function setup(id) {
  	// let options = {
	// 	thumbnailHeight: 80,
	// 	thumbnailWidth: 80,
	// 	maxFilesize: 50 / 1024,
	// 	maxFiles: 1,
	// 	dictResponseError: "Server not Configured",
	// 	dictFileTooBig: "File too big ({{filesize}}MB). Must be less than {{maxFilesize}}MB.",
	// 	dictCancelUpload: "",
	// 	acceptedFiles: ".png,.jpg,.jpeg",
   
    
    // previewTemplate: `
	// 	<div class="dz-preview dz-file-preview">
	// 	<div class="dz-image user-img flex-center"><img data-dz-thumbnail /></div>

	// 	<div class="dz-filename"><span data-dz-name></span></div>
	// 	<div class="dz-progress">
	// 		<span class="dz-upload" data-dz-uploadprogress></span>
	// 	</div>
	// 	<div class="dz-remove">
	// 		<a href="javascript:undefined;" data-dz-remove=""><i class="fa fa-trash-o"></i>&nbsp;<span>Remove</span></div>
	// 	</div>
	// 	`
	// 	};

	// 		var myDropzone = new Dropzone(`#${id}`, options);
	// 	}

	// 	setup("my-awesome-dropzone");

	// Dropzone.options.myAwesomeDropzone = { // The camelized version of the ID of the form element

	// 	// The configuration we've talked about above
	// 	autoProcessQueue: false,
	// 	uploadMultiple: true,
	// 	parallelUploads: 1,
	// 	maxFiles: 1,
	// 	thumbnailHeight: 80,
	// 	thumbnailWidth: 80,
	  
	// 	// The setting up of the dropzone
	// 	init: function() {
	// 	  var myDropzone = this;
	  
	// 	  // First change the button to actually tell Dropzone to process the queue.
	// 	  this.element.querySelector("button[type=submit]").addEventListener("click", function(e) {
	// 		// Make sure that the form isn't actually being sent.
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		myDropzone.processQueue();
	// 	  });
	  
	// 	  // Listen to the sendingmultiple event. In this case, it's the sendingmultiple event instead
	// 	  // of the sending event because uploadMultiple is set to true.
	// 	  this.on("sendingmultiple", function() {
	// 		// Gets triggered when the form is actually being sent.
	// 		// Hide the success button or the complete form.
	// 	  });
	// 	  this.on("successmultiple", function(files, response) {
	// 		// Gets triggered when the files have successfully been sent.
	// 		// Redirect user or notify of success.
	// 	  });
	// 	  this.on("errormultiple", function(files, response) {
	// 		// Gets triggered when there was an error sending the files.
	// 		// Maybe show form again, and notify user of error
	// 	  });
	// 	}
		
	//   }

	//dropzone
})