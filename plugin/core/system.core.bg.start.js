console.log("Imported core background system start !");

SystemJS.import('core/scripts/Background.js').then(null, console.error.bind(console));