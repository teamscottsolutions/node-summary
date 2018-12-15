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
  var sentences = (0, _summarizer.getSortedSentences)(content, dict, n);
  return { sentences: sentences, cached: dict };
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuanMiXSwibmFtZXMiOlsic3VtbWFyaXplSHRtbCIsInN1bW1hcml6ZSIsInNvcnRlZFNlbnRlbmNlcyIsImh0bWwiLCJsYW5nIiwiZGF0YSIsInRleHQiLCJzdW1tYXJ5IiwiY2FjaGVkIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udGVudCIsImRpY3QiLCJwYXJhZ3JhcGhzIiwibWFwIiwicCIsImZpbHRlciIsInMiLCJqb2luIiwibiIsInNlbnRlbmNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFRZ0JBLGEsR0FBQUEsYTtRQU9BQyxTLEdBQUFBLFM7UUFXQUMsZSxHQUFBQSxlOztBQTFCaEI7Ozs7QUFDQTs7OztBQU9PLFNBQVNGLGFBQVQsQ0FBd0JHLElBQXhCLEVBQTJDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixJQUFNOztBQUNoRCxNQUFNQyxPQUFPLHVCQUFRRixJQUFSLEVBQWNDLElBQWQsQ0FBYjtBQURnRCxNQUV4Q0UsSUFGd0MsR0FFL0JELElBRitCLENBRXhDQyxJQUZ3Qzs7QUFBQSxtQkFHcEJMLFVBQVVLLElBQVYsQ0FIb0I7QUFBQSxNQUd4Q0MsT0FId0MsY0FHeENBLE9BSHdDO0FBQUEsTUFHL0JDLE1BSCtCLGNBRy9CQSxNQUgrQjs7QUFJaEQsU0FBT0MsT0FBT0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CLEVBQUVFLGdCQUFGLEVBQVdDLGNBQVgsRUFBcEIsQ0FBUDtBQUNEOztBQUVNLFNBQVNQLFNBQVQsQ0FBb0JVLE9BQXBCLEVBQTZCSCxNQUE3QixFQUFxQztBQUMxQyxNQUFNSSxPQUFPLG1DQUFrQkQsT0FBbEIsRUFBMkJILE1BQTNCLENBQWI7QUFDQSxNQUFNSyxhQUFhLDBDQUF5QkYsT0FBekIsQ0FBbkI7QUFDQSxNQUFNSixVQUFVTSxXQUNiQyxHQURhLENBQ1QsVUFBQ0MsQ0FBRDtBQUFBLFdBQU8saUNBQWdCQSxDQUFoQixFQUFtQkgsSUFBbkIsQ0FBUDtBQUFBLEdBRFMsRUFFYkksTUFGYSxDQUVOO0FBQUEsV0FBS0MsQ0FBTDtBQUFBLEdBRk0sRUFHYkMsSUFIYSxDQUdSLE1BSFEsQ0FBaEI7O0FBS0EsU0FBTyxFQUFFWCxnQkFBRixFQUFXQyxRQUFRSSxJQUFuQixFQUFQO0FBQ0Q7O0FBRU0sU0FBU1YsZUFBVCxDQUEwQlMsT0FBMUIsRUFBbUNRLENBQW5DLEVBQXNDWCxNQUF0QyxFQUE4Q1EsTUFBOUMsRUFBc0Q7QUFDM0QsTUFBSSxRQUFPRyxDQUFQLHlDQUFPQSxDQUFQLE9BQWEsUUFBakIsRUFBMkI7QUFDekJYLGFBQVNXLENBQVQ7QUFDQUgsYUFBU1IsTUFBVDtBQUNBVyxRQUFJLENBQUo7QUFDRDs7QUFFRCxNQUFNUCxPQUFPLG1DQUFrQkQsT0FBbEIsRUFBMkJILE1BQTNCLEVBQW1DUSxNQUFuQyxDQUFiO0FBQ0EsTUFBTUksWUFBWSxvQ0FBbUJULE9BQW5CLEVBQTRCQyxJQUE1QixFQUFrQ08sQ0FBbEMsQ0FBbEI7QUFDQSxTQUFPLEVBQUVDLG9CQUFGLEVBQWFaLFFBQVFJLElBQXJCLEVBQVA7QUFDRCIsImZpbGUiOiJzdW1tYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuZmx1ZmYgZnJvbSAndW5mbHVmZidcbmltcG9ydCB7XG4gIHNwbGl0Q29udGVudFRvUGFyYWdyYXBocyxcbiAgZ2V0QmVzdFNlbnRlbmNlLFxuICBnZXRTb3J0ZWRTZW50ZW5jZXMsXG4gIGdldFNlbnRlbmNlc1JhbmtzXG59IGZyb20gJy4vaGVscGVycy9zdW1tYXJpemVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gc3VtbWFyaXplSHRtbCAoaHRtbCwgbGFuZyA9ICdlbicpIHtcbiAgY29uc3QgZGF0YSA9IHVuZmx1ZmYoaHRtbCwgbGFuZylcbiAgY29uc3QgeyB0ZXh0IH0gPSBkYXRhXG4gIGNvbnN0IHsgc3VtbWFyeSwgY2FjaGVkIH0gPSBzdW1tYXJpemUodGV4dClcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGF0YSwgeyBzdW1tYXJ5LCBjYWNoZWQgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bW1hcml6ZSAoY29udGVudCwgY2FjaGVkKSB7XG4gIGNvbnN0IGRpY3QgPSBnZXRTZW50ZW5jZXNSYW5rcyhjb250ZW50LCBjYWNoZWQpXG4gIGNvbnN0IHBhcmFncmFwaHMgPSBzcGxpdENvbnRlbnRUb1BhcmFncmFwaHMoY29udGVudClcbiAgY29uc3Qgc3VtbWFyeSA9IHBhcmFncmFwaHNcbiAgICAubWFwKChwKSA9PiBnZXRCZXN0U2VudGVuY2UocCwgZGljdCkpXG4gICAgLmZpbHRlcihzID0+IHMpXG4gICAgLmpvaW4oJ1xcblxcbicpXG5cbiAgcmV0dXJuIHsgc3VtbWFyeSwgY2FjaGVkOiBkaWN0IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRlZFNlbnRlbmNlcyAoY29udGVudCwgbiwgY2FjaGVkLCBmaWx0ZXIpIHtcbiAgaWYgKHR5cGVvZiBuID09PSAnb2JqZWN0Jykge1xuICAgIGNhY2hlZCA9IG5cbiAgICBmaWx0ZXIgPSBjYWNoZWRcbiAgICBuID0gMFxuICB9XG5cbiAgY29uc3QgZGljdCA9IGdldFNlbnRlbmNlc1JhbmtzKGNvbnRlbnQsIGNhY2hlZCwgZmlsdGVyKVxuICBjb25zdCBzZW50ZW5jZXMgPSBnZXRTb3J0ZWRTZW50ZW5jZXMoY29udGVudCwgZGljdCwgbilcbiAgcmV0dXJuIHsgc2VudGVuY2VzLCBjYWNoZWQ6IGRpY3QgfVxufVxuIl19
