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

function sortedSentences(content, n, cached) {
  if ((typeof n === 'undefined' ? 'undefined' : _typeof(n)) === 'object') {
    cached = n;
    n = 0;
  }

  var dict = (0, _summarizer.getSentencesRanks)(content, cached);
  var sentences = (0, _summarizer.getSortedSentences)(content, dict, n);
  return { sentences: sentences, cached: dict };
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuanMiXSwibmFtZXMiOlsic3VtbWFyaXplSHRtbCIsInN1bW1hcml6ZSIsInNvcnRlZFNlbnRlbmNlcyIsImh0bWwiLCJsYW5nIiwiZGF0YSIsInRleHQiLCJzdW1tYXJ5IiwiY2FjaGVkIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udGVudCIsImRpY3QiLCJwYXJhZ3JhcGhzIiwibWFwIiwicCIsImZpbHRlciIsInMiLCJqb2luIiwibiIsInNlbnRlbmNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFRZ0JBLGEsR0FBQUEsYTtRQU9BQyxTLEdBQUFBLFM7UUFXQUMsZSxHQUFBQSxlOztBQTFCaEI7Ozs7QUFDQTs7OztBQU9PLFNBQVNGLGFBQVQsQ0FBd0JHLElBQXhCLEVBQTJDO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixJQUFNOztBQUNoRCxNQUFNQyxPQUFPLHVCQUFRRixJQUFSLEVBQWNDLElBQWQsQ0FBYjtBQURnRCxNQUV4Q0UsSUFGd0MsR0FFL0JELElBRitCLENBRXhDQyxJQUZ3Qzs7QUFBQSxtQkFHcEJMLFVBQVVLLElBQVYsQ0FIb0I7QUFBQSxNQUd4Q0MsT0FId0MsY0FHeENBLE9BSHdDO0FBQUEsTUFHL0JDLE1BSCtCLGNBRy9CQSxNQUgrQjs7QUFJaEQsU0FBT0MsT0FBT0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CLEVBQUVFLGdCQUFGLEVBQVdDLGNBQVgsRUFBcEIsQ0FBUDtBQUNEOztBQUVNLFNBQVNQLFNBQVQsQ0FBb0JVLE9BQXBCLEVBQTZCSCxNQUE3QixFQUFxQztBQUMxQyxNQUFNSSxPQUFPLG1DQUFrQkQsT0FBbEIsRUFBMkJILE1BQTNCLENBQWI7QUFDQSxNQUFNSyxhQUFhLDBDQUF5QkYsT0FBekIsQ0FBbkI7QUFDQSxNQUFNSixVQUFVTSxXQUNiQyxHQURhLENBQ1QsVUFBQ0MsQ0FBRDtBQUFBLFdBQU8saUNBQWdCQSxDQUFoQixFQUFtQkgsSUFBbkIsQ0FBUDtBQUFBLEdBRFMsRUFFYkksTUFGYSxDQUVOO0FBQUEsV0FBS0MsQ0FBTDtBQUFBLEdBRk0sRUFHYkMsSUFIYSxDQUdSLE1BSFEsQ0FBaEI7O0FBS0EsU0FBTyxFQUFFWCxnQkFBRixFQUFXQyxRQUFRSSxJQUFuQixFQUFQO0FBQ0Q7O0FBRU0sU0FBU1YsZUFBVCxDQUEwQlMsT0FBMUIsRUFBbUNRLENBQW5DLEVBQXNDWCxNQUF0QyxFQUE4QztBQUNuRCxNQUFJLFFBQU9XLENBQVAseUNBQU9BLENBQVAsT0FBYSxRQUFqQixFQUEyQjtBQUN6QlgsYUFBU1csQ0FBVDtBQUNBQSxRQUFJLENBQUo7QUFDRDs7QUFFRCxNQUFNUCxPQUFPLG1DQUFrQkQsT0FBbEIsRUFBMkJILE1BQTNCLENBQWI7QUFDQSxNQUFNWSxZQUFZLG9DQUFtQlQsT0FBbkIsRUFBNEJDLElBQTVCLEVBQWtDTyxDQUFsQyxDQUFsQjtBQUNBLFNBQU8sRUFBRUMsb0JBQUYsRUFBYVosUUFBUUksSUFBckIsRUFBUDtBQUNEIiwiZmlsZSI6InN1bW1hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5mbHVmZiBmcm9tICd1bmZsdWZmJ1xuaW1wb3J0IHtcbiAgc3BsaXRDb250ZW50VG9QYXJhZ3JhcGhzLFxuICBnZXRCZXN0U2VudGVuY2UsXG4gIGdldFNvcnRlZFNlbnRlbmNlcyxcbiAgZ2V0U2VudGVuY2VzUmFua3Ncbn0gZnJvbSAnLi9oZWxwZXJzL3N1bW1hcml6ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1tYXJpemVIdG1sIChodG1sLCBsYW5nID0gJ2VuJykge1xuICBjb25zdCBkYXRhID0gdW5mbHVmZihodG1sLCBsYW5nKVxuICBjb25zdCB7IHRleHQgfSA9IGRhdGFcbiAgY29uc3QgeyBzdW1tYXJ5LCBjYWNoZWQgfSA9IHN1bW1hcml6ZSh0ZXh0KVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihkYXRhLCB7IHN1bW1hcnksIGNhY2hlZCB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtbWFyaXplIChjb250ZW50LCBjYWNoZWQpIHtcbiAgY29uc3QgZGljdCA9IGdldFNlbnRlbmNlc1JhbmtzKGNvbnRlbnQsIGNhY2hlZClcbiAgY29uc3QgcGFyYWdyYXBocyA9IHNwbGl0Q29udGVudFRvUGFyYWdyYXBocyhjb250ZW50KVxuICBjb25zdCBzdW1tYXJ5ID0gcGFyYWdyYXBoc1xuICAgIC5tYXAoKHApID0+IGdldEJlc3RTZW50ZW5jZShwLCBkaWN0KSlcbiAgICAuZmlsdGVyKHMgPT4gcylcbiAgICAuam9pbignXFxuXFxuJylcblxuICByZXR1cm4geyBzdW1tYXJ5LCBjYWNoZWQ6IGRpY3QgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydGVkU2VudGVuY2VzIChjb250ZW50LCBuLCBjYWNoZWQpIHtcbiAgaWYgKHR5cGVvZiBuID09PSAnb2JqZWN0Jykge1xuICAgIGNhY2hlZCA9IG5cbiAgICBuID0gMFxuICB9XG5cbiAgY29uc3QgZGljdCA9IGdldFNlbnRlbmNlc1JhbmtzKGNvbnRlbnQsIGNhY2hlZClcbiAgY29uc3Qgc2VudGVuY2VzID0gZ2V0U29ydGVkU2VudGVuY2VzKGNvbnRlbnQsIGRpY3QsIG4pXG4gIHJldHVybiB7IHNlbnRlbmNlcywgY2FjaGVkOiBkaWN0IH1cbn1cbiJdfQ==
