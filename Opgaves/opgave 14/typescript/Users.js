"use strict";
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
exports.__esModule = true;
var Persoon_1 = require("./Persoon");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(naam, leeftijd, geslacht, e_email, wachtwoord, rol) {
        var _this = _super.call(this, naam, leeftijd, geslacht) || this;
        _this.e_email = e_email;
        _this.wachtwoord = wachtwoord;
        _this.rol = rol;
        console.log('Nieuw User Nummer:  ${User.usernummer++} extends Persoon');
        return _this;
    }
    User.prototype.setEmail = function (e_email) {
        this.e_email = e_email;
    };
    User.prototype.setWachtwoord = function (wachtwoord) {
        this.wachtwoord = wachtwoord;
    };
    User.prototype.setRol = function (rol) {
        this.rol = rol;
    };
    User.prototype.getEmail = function () {
        return this.e_email;
    };
    User.prototype.getWachtwoord = function () {
        return this.wachtwoord;
    };
    User.prototype.getRol = function () {
        return this.rol;
    };
    User.prototype.toString = function () {
        return (_super.prototype.toString.call(this) +
            "E_email: " + this.e_email + "\n" +
            "Wachtwoord: " + this.wachtwoord + "\n" +
            "Rol:" + this.rol + "\n");
    };
    User.usernummer = 1;
    return User;
}(Persoon_1.Persoon));
exports.User = User;
