export default class Navigator {
  _activePath = [];
  _navigatorPath = [];
  state = {
    before: {
      visible: false,
      page: undefined,
    },
    actual: {
      visible: true,
      page: undefined,
    },
    after: {
      visible: false,
      page: undefined,
    },
  };
  menu = [];
  active = false;

  init(menu = []) {
    this.menu = menu;
    this._identifyActivePath();
    return this;
  }

  _identifyActivePath(path = [], menuLevel = this.menu) {
    let item;
    if (item = menuLevel.find((item) => (item.active))) {
      if (item.hasSubpages && item.children) {
        path.push(item);
        return this._identifyActivePath(path, item.children)
      }
    }
    this._activePath = [...path];
    if (path.length > 0) this.active = true;
    return this;
  }

  navigate() {
    return this._navigateToActive();
  }

  _navigateToActive() {
    this._navigatorPath = [...this._activePath];
    this.state.actual.page = this._navigatorPath.at(-1);
    return this;
  }

  navigateUp(level = 1) {
    this._navigatorPath = this._navigatorPath.slice(0, -level);
    let before = this.state.before;
    let actual = this.state.actual;
    before.visible = true;
    before.page = this._navigatorPath.at(-1);
    actual.visible = false;
    actual.page = undefined;
    setTimeout(() => {
      before.visible = false;
      before.page = undefined;
      actual.visible = true;
      actual.page = this._navigatorPath.at(-1);
    }, 300);
    return this;
  }

  navigateDown(uid) {
    let currentPage = this._navigatorPath.at(-1);
    let newPage;
    if (
      currentPage &&
      currentPage.hasSubpages &&
      currentPage.children &&
      (newPage = currentPage.children.find((item) => (item.data.uid === uid)))
    ) {
      this._navigatorPath.push(newPage);
      let actual = this.state.actual;
      let after = this.state.after;
      after.visible = true;
      after.page = this._navigatorPath.at(-1);
      actual.visible = false;
      actual.page = undefined;
      setTimeout(() => {
        after.visible = false;
        after.page = undefined;
        actual.visible = true;
        actual.page = this._navigatorPath.at(-1);
      }, 300);
    }
    return this;
  }

  path() {
    return this._navigatorPath;
  }

  identifier({ back = false } = { back: false }) {
    let currentPage = this._navigatorPath.at(-1);
    return (back && this._navigatorPath.length !== 1)
      ? `back.${currentPage.data.uid}`
      : `page.${currentPage.data.uid}`;
  }
}
