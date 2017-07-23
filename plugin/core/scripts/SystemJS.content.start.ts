console.log("Imported core *content* system start !");

SystemJS.import('core/scripts/Content.js').then(null, console.error.bind(console));