// variables
var height;
var width;
var asset;

$(document).ready(function(){
	 
	 
	 $('a[rel*=little_box]').click(function() {
		var relContent = $(this).attr("rel");
		var substr = relContent.split(';');
		heightParts = substr[1].split('=');
		height = (heightParts[1]);
		widthParts = substr[2].split('=');
		width = (widthParts[1]);
		
		// alert('width:' + width + ' height: '+height);
		
		asset = $(this).html();
		// alert (asset);
		
		
		
		
		showBanner();
		
		
		return false;	 
	 });
	 

});



function showBanner() {
			var windowWidth = $(window).width();
			var stageHeight = $(window).height() + $(window).scrollTop() ;
			var posLeft = Math.max(windowWidth - width, 0) / 2 + $(window).scrollLeft();
			var posTop = $(window).scrollTop() + 50;
			
			$('#banner-preview').append(asset);
			
			
			
			$('#banner-container').css({'width': width, 'left' : posLeft, 'top' : posTop}).show();
			$('#stage').css({'height': stageHeight}).show();
	// });
	
	$('#closer').click(function() {
			$('#banner-container').hide();
			$('#banner-preview').empty();
			$('#stage').hide();
	});
			
			
	
	};





