const availableElements = ['search', 'mainmenu', 'internalmenu', 'languagemenu', 'accessibilitymenu', 'generalmenu', 'sectionmenu'];

export default (Alpine) => Alpine.store('sidebar', {
  visible: false,
  show() {
    this.visible = true;
  },
  hide() {
    this.visible = false;
  },
  toggle() {
    return this.visible ? this.hide() : this.show();
  },
  content: {
    showThese(elements = []) {
      availableElements.forEach((name) => {
        if (elements.includes(name)) {
          this[name].show();
        } else {
          this[name].hide();
        }
      });
    },
  },
  init() {
    availableElements.forEach((name) => {
      this.content[name] = {
        visible: false,
        show() {
          this.visible = true;
        },
        hide() {
          this.visible = false;
        },
        toggle() {
          return this.visible ? this.hide() : this.show();
        },
      };
    });
  },
});
