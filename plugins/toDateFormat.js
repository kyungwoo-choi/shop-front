'use strict';
import moment from 'moment';

export default function() {
  String.prototype.toDateFormat = function() {
    return moment(this.valueOf()).format('YYYY-MM-DD HH:mm:ss');
  };

  Number.prototype.toDateFormat = function() {
    return moment(this.valueOf()).format('YYYY-MM-DD HH:mm:ss');
  };
}

