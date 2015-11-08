$(function(){
	
	$("#search").on("click",function(){
				var year = $("#year").val();			
				openYear(year);
				
			});

	$("#year").on("keyup",function(e){
				var year = $("#year").val();	
				if(e.which==13)
				{
					openYear(year);
				}
			});
			
	function openYear(year)
	{
		window.open("/data/"+year, '_self');
	}
	
	$('[id*="population"]').each(function(index) {
  		var value = $(this).text();
		value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(this).text(value)
	});
	
	
});