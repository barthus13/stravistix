console.log("Imported core system start !");

SystemJS.import('core/scripts/Main.js').then(null, console.error.bind(console));