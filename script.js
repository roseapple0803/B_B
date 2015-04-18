/* copy from responsve folder */

$('.display_toggle').on('click',function(){
    $('nav').toggleClass('active');
});




/* the piece of codes here could be re-used for all the general cases!! */


$('.work_btn').on('click',function()
	{
		// display something on the work session
		$('body').attr('class', 'work_state'); //which is to set 'body' --> its attribute 'class' to the value 'work_state'
	}
);

$('.about_btn').on('click',function()
	{
		// display something on the work session
		$('body').attr('class', 'about_state'); //which is to set 'body' --> its attribute 'class' to the value 'work_state'
	}
);

$('.contact_btn').on('click',function()
	{
		// display something on the work session
		$('body').attr('class', 'contact_state'); //which is to set 'body' --> its attribute 'class' to the value 'work_state'
	}
);

/* when someone clicks on close button, we want NO information to be displayed */
$('.closeNow').on('click',function()
	{
		$('body').attr('class', ''); //which is to set 'body' --> its attribute 'class' to the value 'work_state'
	}
);

$('.future_btn').on('click',function()
	{
		$('body').attr('class', 'future_state'); //which is to set 'body' --> its attribute 'class' to the value 'work_state'
	}
);





