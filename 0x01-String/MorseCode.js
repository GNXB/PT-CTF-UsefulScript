/*
Author: GNXB (Apiwith Potisuk)
Note: I did not intend to optimise the performance/speed.
Note2: I may not the first one who wrote morse code transformation like this. Apologies if my code look like someone's.
Note3: I intendly use hand-made basic obfuscation. To try to understand is not too hard.

Usage: 0=Padding 1=Short 2=Long
Example: .from('2211 12222') //A1
*/

const t='$,__,_,_,__,.,\x05,C,F,\x16,\x01,+,\x19,(,\x04,5,\x17,1,\b,\x07,\x1A,4,M,\x10,\r,\x02,\x0E,),\x11,D,G,L,ò,¡,\x86,},z,y,Ê,å,î,ñ'.split(',');

const o={
	from(str){return str.split(" ").map((x,y)=>String.fromCharCode((y=t.indexOf(String.fromCharCode(parseInt(x,3))))>>0o5?y+0x10:y+0x3b)).join('');}
}

module.exports = o;