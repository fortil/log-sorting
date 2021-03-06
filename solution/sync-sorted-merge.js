"use strict";
const _ = require("lodash");
// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  logSources.map(i => i.pop()).sort((object1, object2) => {
    const t1 = new Date(object1.date).getTime();
    const t2 = new Date(object2.date).getTime();

    if (t1 === t2) {
      return 0;
    }
    return t1 > t2 ? 1 : -1;
  }).forEach((obj) => {
    printer.print(obj);
  });
  
  printer.done();
  return console.log("Sync sort complete.");
};
