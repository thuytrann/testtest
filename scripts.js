import Highway from '@dogstudio/highway';
import Fade from './fade.js';

const H = new Highway.Core( {
    transitions: {
        default: Fade
    }
} );

// Get menu links
const links = document.querySelectorAll( 'nav a' );

// Listen to the `NAVIGATE_IN` event
H.on( 'NAVIGATE_IN', ( { to, location } ) => {
	links.forEach( link => {
		// Clean class
		link.classList.remove( 'active' );

		// Active link
		if ( link.href === location.href ) {
			link.classList.add( 'active' );
		}
	} );
} );