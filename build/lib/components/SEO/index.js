'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var react_helmet_1 = require('react-helmet');
var gatsby_1 = require('gatsby');
var SEO = function(_a) {
  var title = _a.title,
    description = _a.description,
    _b = _a.lang,
    lang = _b === void 0 ? 'fr' : _b,
    _c = _a.meta,
    meta = _c === void 0 ? [] : _c,
    _d = _a.keywords,
    keywords = _d === void 0 ? [] : _d;
  var site = gatsby_1.useStaticQuery(
    gatsby_1.graphql(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          [
            '\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    ',
          ],
          [
            '\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            author\n          }\n        }\n      }\n    ',
          ]
        ))
    )
  ).site;
  var metaDescription = description || site.siteMetadata.description;
  return react_1.default.createElement(react_helmet_1.default, {
    htmlAttributes: {
      lang: lang,
    },
    title: title,
    titleTemplate: '%s | ' + site.siteMetadata.title,
    meta: [
      {
        name: 'description',
        content: metaDescription,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: metaDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: site.siteMetadata.author,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: metaDescription,
      },
    ]
      .concat(
        keywords.length > 0
          ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
          : []
      )
      .concat(meta),
  });
};
exports.default = SEO;
var templateObject_1;
//# sourceMappingURL=index.js.map
