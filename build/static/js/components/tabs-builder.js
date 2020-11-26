"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
    tab class js-tab
    set rel dataName for pages
*/
var tabsBuilder =
/*#__PURE__*/
function () {
  function tabsBuilder(tabDataName) {
    _classCallCheck(this, tabsBuilder);

    this.tabs = document.querySelectorAll('[data-tab]');
    this.init();
  }

  _createClass(tabsBuilder, [{
    key: "init",
    value: function init() {
      this.addTabs();
    }
  }, {
    key: "removeActiveClass",
    value: function removeActiveClass(list, activeClass) {
      list.forEach(function (el) {
        el.classList.remove(activeClass);
      });
    }
  }, {
    key: "setTabEvent",
    value: function setTabEvent(tab) {
      var self = this;
      tab.addEventListener('click', function () {
        var tabActiveClass = 'active-tab';
        var pageActiveClass = 'active-page';
        var pageNumber = this.dataset.pageRel;
        var tabNumber = this.dataset.tab;
        var innerTabs = this.closest('.js-tab-wrap').querySelectorAll('[data-tab]');
        var pageList = document.querySelectorAll(".tabs__page[data-page-rel=\"".concat(pageNumber, "\"]"));
        var currPage = document.querySelector(".tabs__page[data-page=\"".concat(tabNumber, "\"]"));
        self.removeActiveClass(innerTabs, tabActiveClass);
        this.classList.add(tabActiveClass);
        self.removeActiveClass(pageList, pageActiveClass);
        currPage.classList.add(pageActiveClass);
      });
    }
  }, {
    key: "addTabs",
    value: function addTabs() {
      var _this = this;

      this.tabs.forEach(function (el) {
        _this.setTabEvent(el);
      });
    }
  }]);

  return tabsBuilder;
}();