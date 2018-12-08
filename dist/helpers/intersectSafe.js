"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Original code from http://stackoverflow.com/a/1885660/394013
 */
var intersectSafe = exports.intersectSafe = function intersectSafe(a, b) {
  var ai = 0;
  var bi = 0;
  var result = [];

  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) {
      ai++;
    } else if (a[ai] > b[bi]) {
      bi++;
    } else {
      /* they're equal */
      result.push(a[ai]);
      ai++;
      bi++;
    }
  }

  return result;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvaW50ZXJzZWN0U2FmZS5qcyJdLCJuYW1lcyI6WyJpbnRlcnNlY3RTYWZlIiwiYSIsImIiLCJhaSIsImJpIiwicmVzdWx0IiwibGVuZ3RoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBR08sSUFBTUEsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNyQyxNQUFJQyxLQUFLLENBQVQ7QUFDQSxNQUFJQyxLQUFLLENBQVQ7QUFDQSxNQUFJQyxTQUFTLEVBQWI7O0FBRUEsU0FBT0YsS0FBS0YsRUFBRUssTUFBUCxJQUFpQkYsS0FBS0YsRUFBRUksTUFBL0IsRUFBdUM7QUFDckMsUUFBSUwsRUFBRUUsRUFBRixJQUFRRCxFQUFFRSxFQUFGLENBQVosRUFBbUI7QUFDakJEO0FBQ0QsS0FGRCxNQUVPLElBQUlGLEVBQUVFLEVBQUYsSUFBUUQsRUFBRUUsRUFBRixDQUFaLEVBQW1CO0FBQ3hCQTtBQUNELEtBRk0sTUFFQTtBQUNMO0FBQ0FDLGFBQU9FLElBQVAsQ0FBWU4sRUFBRUUsRUFBRixDQUFaO0FBQ0FBO0FBQ0FDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQyxNQUFQO0FBQ0QsQ0FuQk0iLCJmaWxlIjoiaGVscGVycy9pbnRlcnNlY3RTYWZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBPcmlnaW5hbCBjb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg4NTY2MC8zOTQwMTNcbiAqL1xuZXhwb3J0IGNvbnN0IGludGVyc2VjdFNhZmUgPSAoYSwgYikgPT4ge1xuICBsZXQgYWkgPSAwXG4gIGxldCBiaSA9IDBcbiAgbGV0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGFpIDwgYS5sZW5ndGggJiYgYmkgPCBiLmxlbmd0aCkge1xuICAgIGlmIChhW2FpXSA8IGJbYmldKSB7XG4gICAgICBhaSsrXG4gICAgfSBlbHNlIGlmIChhW2FpXSA+IGJbYmldKSB7XG4gICAgICBiaSsrXG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIHRoZXkncmUgZXF1YWwgKi9cbiAgICAgIHJlc3VsdC5wdXNoKGFbYWldKVxuICAgICAgYWkrK1xuICAgICAgYmkrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiJdfQ==
