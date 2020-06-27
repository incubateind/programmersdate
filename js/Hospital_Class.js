getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

var max_beds = 11;

class Hospital{
    constructor(title, id, resultType, label, countryCode, countryName, state, county, city, district, postalCode, lat, lng, distance){
        this.title = title;
        this.hospital_id = id;
        this.resultType = resultType;
        this.label = label;
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.state = state;
        this.county = county;
        this.city = city;
        this.district = district;
        this.postalCode = postalCode;
        this.lat = lat;
        this.lng = lng;
        this.distance = distance;
        this.icu = getRandomInt(max_beds);
        this.covid = getRandomInt(max_beds);
        this.cardiology = getRandomInt(max_beds);
        this.neurology = getRandomInt(max_beds);
        this.xray = getRandomInt(max_beds);
        this.mri = getRandomInt(max_beds);
    }
}

module.exports = Hospital;