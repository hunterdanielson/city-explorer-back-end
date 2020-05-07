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

        return transformedData.slice(0, 8);
    } catch (e) {
        return [{}];
    }
}
function mungeTrails(trailData) {
    try {
        const transformedData = trailData.trails.map((trails) => {
            
            return {
                name: trails.name,
                summary: trails.summary,
                url: trails.url,
                location: trails.location,
                length: trails.length,
                conditionStatus: trails.conditionStatus,
                stars: trails.stars,
                starVotes: trails.starVotes,
                difficulty: trails.difficulty,
                picture: trails.imgMedium,
                conditionDetails: trails.conditionDetails,
                conditionDate: trails.conditionDate
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