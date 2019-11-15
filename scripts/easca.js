$(document).ready(function () {
	$('#fada-mode').hide();
	$('#caps-keyboard-container').hide();
capsMode=false;


toggleCapsMode = ()=>{
if (capsMode===true){
	$('#keyboard-container').show();
	$('#caps-keyboard-container').hide();
	capsMode=false;
}
else{
		$('#keyboard-container').hide();
		$('#alt-keyboard-container').hide();
	$('#caps-keyboard-container').show();

	capsMode=true;

}
;


}
	fadaMode = ()=>{

		$('#keyboard-container').hide();
		$('#fada-mode').show();

		$('.btn').on( 'click' , function(e) {
			if (keyPressed != "Ᵹ"){
			$('#keyboard-container').show();
			$('#fada-mode').hide();}
		})
}
// 	else{
// 		$('#keyboard-container').show();
// 	$('#alt-keyboard-container').hide();
// 	fadaMode=false;
// 	}
// }

	let keyPressed;
	
		$('.btn').on( 'touchend' , function(e) {
			
				var id = this.id
				keyPressed = (this.innerHTML);
				if (keyPressed=== "Ᵹ"){
					fadaMode();
					// alert('alt')
				}
				else if(
					
					(this.id === "caps")
				){
					toggleCapsMode()
	
				}
				else
				$('#output').append(keyPressed)
				if (id ==='undo'){
					$('#output').empty();
				
				}
		});
			// if (id === 'undo'){
			// 	let temp = document.getElementById('#output');
			// 	alert(temp)
			// }
		});















