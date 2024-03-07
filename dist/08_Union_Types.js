"use strict";
function KgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 1.3;
    else
        return parseInt(weight) * 1.3;
}
KgToLbs(13);
KgToLbs("13");
//# sourceMappingURL=08_Union_Types.js.map