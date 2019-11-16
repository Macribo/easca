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

		$('.btn').on( 'touchend' , function(e) {
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
function myFunction() {
	alert("Hello");
  }
	let keyPressed;
	$('.btn').on('touchstart', function(){
		myVar = setTimeout(myFunction, 3000)
	
	})
		$('.btn').on( 'touchend' , function(e) {
			clearTimeout(myVar)
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















