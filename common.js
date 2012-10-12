$( function () {
	$( '.section' ).hide();
	$( '<button>show</button>' ).appendTo( 'h2.toggle' );
	$( 'h2' ).click( function( ev ) {
		var $section = $( this ).next( '.section' );
		$section.toggle();
		if( $section.is( ':visible' ) ) {
			$( 'button', this ).text( 'hide' );
		} else {
			$( 'button', this ).text( 'show' );
		}
	} );
	
} )