// variables
var bannerSize;
var bannerDimensions;
var bannerPath;
var bannerURL;
var bannerHeadline;
var retailerID;
var bannercontainerWidth = 800;
var height;
var width;




$(document).ready(function(){
	 
	 
	 $('a[rel*=little_box]').click(function() {
		var relContent = $(this).attr("rel");
		var substr = relContent.split(';');
		heightParts = substr[1].split('=');
		height = (heightParts[1]);
		widthParts = substr[2].split('=');
		width = (widthParts[1]);
		
		// alert('width:' + width + ' height: '+height);
		
		showBanner();
		
		
		return false;	 
	 });
	 

});



function showBanner() {
			var windowWidth = $(window).width();
			var stageHeight = $(window).height() + $(window).scrollTop() ;
			var posLeft = Math.max(windowWidth - bannercontainerWidth, 0) / 2 + $(window).scrollLeft();
			var posTop = $(window).scrollTop() + 50;
			
			$('#banner-container').css({'width': bannercontainerWidth, 'left' : posLeft, 'top' : posTop}).show();
			$('#stage').css({'height': stageHeight}).show();
	// });
	
	$('#closer').click(function() {
			$('#banner-container').hide();
			$('#stage').hide();
	});
			
			
	
	};





