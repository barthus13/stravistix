console.log("Imported core *strava.com* system start !");

SystemJS.import('core/scripts/Main.js').then(null, console.error.bind(console));