// Import Highway
import Highway from '@dogstudio/highway';

// Import GSAP
import Tween from 'gsap';

// Fade
class Fade extends Highway.Transition {
    in( { from, to, done } ) {
        // Remove old content
        from.remove();

        // Animation
        Tween.fromTo( to, 0.5, { opacity: 0 }, { opacity: 1, onComplete: done } );
    }

    out( { from, done } ) {
        // Animation
		Tween.fromTo( from, 0.5, { opacity: 1 }, { opacity: 0, onComplete: done } );
    }
}

// Export Fade class
export default Fade;