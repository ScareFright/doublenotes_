
/**
 * Custom blocks
 */
//% weight=100 color=#9f0fbc icon="+"
namespace Doublenotes {
    /**
     * Play 2 different notes at once!
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: ""
     * @param e describe parameter here, eg: ""
     */
    //% block
    export function PlayTwoTones(s: Note, e: Note): void {
        // Add code here
        let myTempo = music.tempo()
        music.setTempo(myTempo * 10)
        music.playTone(s, music.beat());
        music.playTone(e, music.beat())
        music.setTempo(myTempo)
    }
}

