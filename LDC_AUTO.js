/*
	LDC_AUTO.js Source Code
 	Written by @Lofimit
  
 	Made for https://longdogechallenge.com/
*/

const timer0 = ms => new Promise(res => setTimeout(res, ms))

async function load () {
	while(true) {
  	injectWow(100);
  	await timer0(0.25);
  }
}

load();
