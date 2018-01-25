$(document).ready(function(){
	$('.logoblock').hover(
	function(){
		$('#'+$(this).attr('id')+'_0').css({display: 'none'});
		$('#'+$(this).attr('id')+'_1').css({display: 'block'});
		console.log($(this).attr('id'));
	},
	function(){
		$('#'+$(this).attr('id')+'_0').css({display: 'block'});
		$('#'+$(this).attr('id')+'_1').css({display: 'none'})
	});
	$('.1_0').each(function() {
		$(this).css({background: '#776221'});
	});
	$('.1_1').each(function() {
		$(this).css({background: '#4E3C14'});
	});
	$('.1_2').each(function() {
		$(this).css({background: '#776221'});	
	});
});