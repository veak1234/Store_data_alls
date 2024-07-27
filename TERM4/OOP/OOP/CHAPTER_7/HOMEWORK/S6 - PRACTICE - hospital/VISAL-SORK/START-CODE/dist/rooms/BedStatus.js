"use strict";
exports.__esModule = true;
exports.BedStatus = void 0;
/**
 * The different status of a bed
 */
var BedStatus;
(function (BedStatus) {
    BedStatus[BedStatus["GOOD"] = 0] = "GOOD";
    BedStatus[BedStatus["OPERATIONAL"] = 1] = "OPERATIONAL";
    BedStatus[BedStatus["BROKEN"] = 2] = "BROKEN";
})(BedStatus = exports.BedStatus || (exports.BedStatus = {}));
