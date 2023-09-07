self.addEventListener('message', (event) => {
    if (event.data === 'start') {
        getLocation();
    }
});

function getLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            self.postMessage({
                type: 'locationUpdate',
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        });
    }
}