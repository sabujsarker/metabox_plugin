/*
* @Author: Sabuj
* @Date:   2019-09-29 16:46:35
* @Last Modified by:   Sabuj
* @Last Modified time: 2019-09-30 18:27:49
*/
var frame;
;(function ($) {
	$(document).ready(function(){
		
	$("#meta_box_dp").datepicker({
		changeMonth: true,
      changeYear: true
	});
	$("#meta_box_img").on("click",function(){
		frame = wp.media({
			title:"Upload Image	",
			button : {
				text:"select Image"
			},
			multiple:false
		});
		frame.on('select',function(){
			var attachment = frame.state().get('selection').first().toJSON();
			// $('#omb_img_id') .val(attachment.id);
			console.log(attachment);
			$('#omb_img_url') .val(attachment.url);
						$('#float_c').html(`<img src='${attachment.url}'/>`);
		})
		frame.open();
		return false;
	});
	});
})(jQuery);