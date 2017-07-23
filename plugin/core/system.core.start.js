console.log("Imported core system start !");

SystemJS.import('core/main.js').then(null, console.error.bind(console));