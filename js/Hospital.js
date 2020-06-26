class Address{
    constructor(label, countryCode, countryName, state, county, city, district, postalCode){
        this.label = label;
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.state = state;
        this.county = county;
        this.city = city;
        this.district = district;
        this.postalCode = postalCode;
    }
}

class Position{
    constructor(lat, lng){
        this.lat = lat;
        this.lng = lng;
    }
}

class Hospital{
    constructor(title, id, resultType, label, countryCode, countryName, state, county, city, district, postalCode, lat, lng, distance){
        this.title = title;
        this.id = id;
        this.resultType = resultType;
        this.address = new Address(label, countryCode, countryName, state, county, city, district, postalCode);
        this.position = new Position(lat, lng);
        this.distance = distance;
    }
}

module.exports = Hospital;