function mungeLocation(locationData) {
    try {
        const firstItem = locationData[0];

        return {
            formatted_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };
    } catch (e) {
        return {};
    }
}
function mungeWeather(weatherData) {
    try {
        const transformedData = weatherData.data.map((forecast) => {
            
            return {
                forecast: forecast.weather.description,
                time: forecast.valid_date
            };
        });

        return transformedData.slice(0, 3);
    } catch (e) {
        return [{}];
    }
}
function mungeTrails(trailData) {
    try {
        const transformedData = trailData.trails.map((hike) => {
            
            return {
                name: hike.name,
                summary: hike.summary,
                difficulty: hike.difficulty,
                picture: hike.imgMedium
            };
        });

        return transformedData.slice(0, 5);
    } catch (e) {
        return [{}];
    }
}

module.exports = {
    mungeLocation,
    mungeWeather,
    mungeTrails
};