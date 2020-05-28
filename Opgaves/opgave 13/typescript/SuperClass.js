var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperClass = /** @class */ (function () {
    function SuperClass(voornaam) {
        this.achternaam = "Delar";
        this.creditcard = "Visa";
        this.voornaam = voornaam;
    }
    SuperClass.prototype.getAchternaam = function () {
        return this.achternaam;
    };
    return SuperClass;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass(voornaam) {
        var _this = _super.call(this, voornaam) || this;
        _this.voornaam = voornaam;
        return _this;
    }
    return SubClass;
}(SuperClass));
var shireen = new SubClass("Shireen");
console.log("Shireens geerfde achternaam: " + shireen.getAchternaam());
