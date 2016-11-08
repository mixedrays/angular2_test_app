"use strict";
var Point = (function () {
    function Point(lat, lng, address, rating, avg_price, color, working_hours, products_list, delivery_availability, personnel_languages) {
        this.lat = lat;
        this.lng = lng;
        this.address = address;
        this.rating = rating;
        this.avg_price = avg_price;
        this.color = color;
        this.working_hours = working_hours;
        this.products_list = products_list;
        this.delivery_availability = delivery_availability;
        this.personnel_languages = personnel_languages;
    }
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=point.class.js.map