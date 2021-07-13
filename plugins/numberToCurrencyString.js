'use strict';
export default function () {
  Number.prototype.toCurrencyString = function() {
    return this.valueOf().toLocaleString(undefined, {
      maximumFractionDigits:
        0
    })
  }
}
