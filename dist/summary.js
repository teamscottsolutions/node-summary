'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.summarizeHtml = summarizeHtml;
exports.summarize = summarize;
exports.sortedSentences = sortedSentences;

var _unfluff = require('unfluff');

var _unfluff2 = _interopRequireDefault(_unfluff);

var _summarizer = require('./helpers/summarizer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function summarizeHtml(html) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  var data = (0, _unfluff2.default)(html, lang);
  var text = data.text;

  var _summarize = summarize(text),
      summary = _summarize.summary,
      cached = _summarize.cached;

  return Object.assign(data, { summary: summary, cached: cached });
}

function summarize(content, cached) {
  var dict = (0, _summarizer.getSentencesRanks)(content, cached);
  var paragraphs = (0, _summarizer.splitContentToParagraphs)(content);
  var summary = paragraphs.map(function (p) {
    return (0, _summarizer.getBestSentence)(p, dict);
  }).filter(function (s) {
    return s;
  }).join('\n\n');

  return { summary: summary, cached: dict };
}

function sortedSentences(content, n, cached, filter) {
  if ((typeof n === 'undefined' ? 'undefined' : _typeof(n)) === 'object') {
    cached = n;
    filter = cached;
    n = 0;
  }

  var dict = (0, _summarizer.getSentencesRanks)(content, cached, filter);
  var sentences = (0, _summarizer.getSortedSentences)(content, dict, n, filter);
  return { sentences: sentences, cached: dict };
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuanMiXSwibmFtZXMiOlsic3VtbWFyaXplSHRtbCIsInN1bW1hcml6ZSIsInNvcnRlZFNlbnRlbmNlcyIsImh0bWwiLCJsYW5nIiwiZGF0YSIsInRleHQiLCJzdW1tYXJ5IiwiY2FjaGVkIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udGVudCIsImRpY3QiLCJwYXJhZ3JhcGhzIiwibWFwIiwicCIsImZpbHRlciIsInMiLCJqb2luIiwibiIsInNlbnRlbmNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFRZ0JBLGEsR0FBQUEsYTtRQU9BQyxTLEdBQUFBLFM7UUFXQUMsZSxHQUFBQSxlOztBQTFCaEI7Ozs7QUFDQTs7OztBQU9PLFNBQVNGLGFBQVQsQ0FBd0JHLElBQXhCLEVBQTJDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixJQUFNOztBQUNoRCxNQUFNQyxPQUFPLHVCQUFRRixJQUFSLEVBQWNDLElBQWQsQ0FBYjtBQURnRCxNQUV4Q0UsSUFGd0MsR0FFL0JELElBRitCLENBRXhDQyxJQUZ3Qzs7QUFBQSxtQkFHcEJMLFVBQVVLLElBQVYsQ0FIb0I7QUFBQSxNQUd4Q0MsT0FId0MsY0FHeENBLE9BSHdDO0FBQUEsTUFHL0JDLE1BSCtCLGNBRy9CQSxNQUgrQjs7QUFJaEQsU0FBT0MsT0FBT0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CLEVBQUVFLGdCQUFGLEVBQVdDLGNBQVgsRUFBcEIsQ0FBUDtBQUNEOztBQUVNLFNBQVNQLFNBQVQsQ0FBb0JVLE9BQXBCLEVBQTZCSCxNQUE3QixFQUFxQztBQUMxQyxNQUFNSSxPQUFPLG1DQUFrQkQsT0FBbEIsRUFBMkJILE1BQTNCLENBQWI7QUFDQSxNQUFNSyxhQUFhLDBDQUF5QkYsT0FBekIsQ0FBbkI7QUFDQSxNQUFNSixVQUFVTSxXQUNiQyxHQURhLENBQ1QsVUFBQ0MsQ0FBRDtBQUFBLFdBQU8saUNBQWdCQSxDQUFoQixFQUFtQkgsSUFBbkIsQ0FBUDtBQUFBLEdBRFMsRUFFYkksTUFGYSxDQUVOO0FBQUEsV0FBS0MsQ0FBTDtBQUFBLEdBRk0sRUFHYkMsSUFIYSxDQUdSLE1BSFEsQ0FBaEI7O0FBS0EsU0FBTyxFQUFFWCxnQkFBRixFQUFXQyxRQUFRSSxJQUFuQixFQUFQO0FBQ0Q7O0FBRU0sU0FBU1YsZUFBVCxDQUEwQlMsT0FBMUIsRUFBbUNRLENBQW5DLEVBQXNDWCxNQUF0QyxFQUE4Q1EsTUFBOUMsRUFBc0Q7QUFDM0QsTUFBSSxRQUFPRyxDQUFQLHlDQUFPQSxDQUFQLE9BQWEsUUFBakIsRUFBMkI7QUFDekJYLGFBQVNXLENBQVQ7QUFDQUgsYUFBU1IsTUFBVDtBQUNBVyxRQUFJLENBQUo7QUFDRDs7QUFFRCxNQUFNUCxPQUFPLG1DQUFrQkQsT0FBbEIsRUFBMkJILE1BQTNCLEVBQW1DUSxNQUFuQyxDQUFiO0FBQ0EsTUFBTUksWUFBWSxvQ0FBbUJULE9BQW5CLEVBQTRCQyxJQUE1QixFQUFrQ08sQ0FBbEMsRUFBcUNILE1BQXJDLENBQWxCO0FBQ0EsU0FBTyxFQUFFSSxvQkFBRixFQUFhWixRQUFRSSxJQUFyQixFQUFQO0FBQ0QiLCJmaWxlIjoic3VtbWFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bmZsdWZmIGZyb20gJ3VuZmx1ZmYnXG5pbXBvcnQge1xuICBzcGxpdENvbnRlbnRUb1BhcmFncmFwaHMsXG4gIGdldEJlc3RTZW50ZW5jZSxcbiAgZ2V0U29ydGVkU2VudGVuY2VzLFxuICBnZXRTZW50ZW5jZXNSYW5rc1xufSBmcm9tICcuL2hlbHBlcnMvc3VtbWFyaXplcidcblxuZXhwb3J0IGZ1bmN0aW9uIHN1bW1hcml6ZUh0bWwgKGh0bWwsIGxhbmcgPSAnZW4nKSB7XG4gIGNvbnN0IGRhdGEgPSB1bmZsdWZmKGh0bWwsIGxhbmcpXG4gIGNvbnN0IHsgdGV4dCB9ID0gZGF0YVxuICBjb25zdCB7IHN1bW1hcnksIGNhY2hlZCB9ID0gc3VtbWFyaXplKHRleHQpXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGRhdGEsIHsgc3VtbWFyeSwgY2FjaGVkIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1tYXJpemUgKGNvbnRlbnQsIGNhY2hlZCkge1xuICBjb25zdCBkaWN0ID0gZ2V0U2VudGVuY2VzUmFua3MoY29udGVudCwgY2FjaGVkKVxuICBjb25zdCBwYXJhZ3JhcGhzID0gc3BsaXRDb250ZW50VG9QYXJhZ3JhcGhzKGNvbnRlbnQpXG4gIGNvbnN0IHN1bW1hcnkgPSBwYXJhZ3JhcGhzXG4gICAgLm1hcCgocCkgPT4gZ2V0QmVzdFNlbnRlbmNlKHAsIGRpY3QpKVxuICAgIC5maWx0ZXIocyA9PiBzKVxuICAgIC5qb2luKCdcXG5cXG4nKVxuXG4gIHJldHVybiB7IHN1bW1hcnksIGNhY2hlZDogZGljdCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0ZWRTZW50ZW5jZXMgKGNvbnRlbnQsIG4sIGNhY2hlZCwgZmlsdGVyKSB7XG4gIGlmICh0eXBlb2YgbiA9PT0gJ29iamVjdCcpIHtcbiAgICBjYWNoZWQgPSBuXG4gICAgZmlsdGVyID0gY2FjaGVkXG4gICAgbiA9IDBcbiAgfVxuXG4gIGNvbnN0IGRpY3QgPSBnZXRTZW50ZW5jZXNSYW5rcyhjb250ZW50LCBjYWNoZWQsIGZpbHRlcilcbiAgY29uc3Qgc2VudGVuY2VzID0gZ2V0U29ydGVkU2VudGVuY2VzKGNvbnRlbnQsIGRpY3QsIG4sIGZpbHRlcilcbiAgcmV0dXJuIHsgc2VudGVuY2VzLCBjYWNoZWQ6IGRpY3QgfVxufVxuIl19
