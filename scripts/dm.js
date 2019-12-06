$(document).ready(function () {


    /*update keyboard appearance
    according to dm is speaking or not.
    


    player-can-type = false;

    listen for green keypress

    */


   let dmAgCainnt = true;
   let justListen = true;
let deirDM = [
    `"Do what is beyond your strength even should you fail sometimes."
    <br>Charles Stewart Parnell`,
    `According to <a href="https://storyarchaeology.com/">this</a> the Irish are Brits.
    And the Brits are Celts.`,``,``,``,``,``,``,``

]

let keyPressedInDMmode;

   if(dmAgCainnt){

    $('#output').fadeOut();
    if(justListen){
    $('.btn').addClass('most-btns-during-dm-mode');
    $('#saighead-deas').addClass('special-btns-during-dm-mode');
    
}
    $('.btn').on('touchstart', function(){
		keyPressedInDMmode = (this.innerHTML);
	// alert(keyPressedInDMmode)
;	})

$('.dm-says').html(deirDM[0]);


   };

});