// variables
var height;
var width;
var asset;
var title;


var littleContainer = '<div id="banner-container" class="hide"><p id="closer">Close X</p><div id="banner-preview"></div></div><div id="stage" class="hide"></div>';


$(document).ready(function(){
	 $('body').append(littleContainer);
	 
	 $('a[rel*=little_box]').click(function() {
		 
		var fileName = $(this).attr("href");
			if (fileName.match(/\.gif$/i)) {
			alert('yeah whoo, its a gif');
		}
		 
		var relContent = $(this).attr("rel");
		var substr = relContent.split(';');
		heightParts = substr[1].split('=');
		height = (heightParts[1]);
		widthParts = substr[2].split('=');
		width = (widthParts[1]);
		asset = $(this).attr("href");
		title = $(this).attr("title");
		
		showBanner();
		
		return false;	 
	 });
	 

});

function showBanner() {
			
			var windowWidth = $(window).width();
			
			
			var posLeft = Math.max(windowWidth - width, 0) / 2 + $(window).scrollLeft();
			var posTop = $(window).scrollTop() + 50;
			var imageString = '<img src="' + asset + '" width="' + width + '" height="'+ height + '" title="' + title + '" />';
			
			$('#banner-preview').append(imageString);
			$('#banner-container').css({'width': width, 'left' : posLeft, 'top' : posTop}).fadeIn('slow');
			
			var stageHeight = $(document).height();
			$('#stage').css({'height': stageHeight}).show();
			
	
	
	$('#closer').click(function() {
			$('#banner-container').hide();
			$('#banner-preview').empty();
			$('#stage').hide();
	});
			
			
	
	};