$(document).ready(function () {
	$('#alt-keyboard-container').hide();
	$('#caps-keyboard-container').hide();

	let fadaMode=false;
	let capsMode=false;

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
	toggleKeyboard = ()=>{
if (fadaMode===false){
	$('#keyboard-container').hide();
	$('#alt-keyboard-container').show();
	// $('#keyboard-container').show();
	// $('#alt-keyboard-container').hide();
	fadaMode=true;	
}
	else{
		$('#keyboard-container').show();
	$('#alt-keyboard-container').hide();
	fadaMode=false;
	}
}

	let keyPressed;
		$('.btn').click(function(){
			var id = this.id
			keyPressed = (this.innerHTML);
			if (keyPressed=== "Ᵹ"){
				toggleKeyboard();
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
			// if (id === 'undo'){
			// 	let temp = document.getElementById('#output');
			// 	alert(temp)
			// }
		});
















});