import { sectionnavigationFilter } from '../_config';

export interface StoreSections {
  sections: Section[]
  init: () => void
  append: () => void
  visible: () => void
  remove: (arg1: privacyConfiguration) => privacySetting
  only: () => void
}

export default (Alpine) => Alpine.store('sections', {
  sections: [],
  append(id, el, text, tag) {
    const index = this.sections.findIndex(
      // eslint-disable-next-line no-bitwise
      (item) => el.compareDocumentPosition(item.el) & Node.DOCUMENT_POSITION_FOLLOWING,
    );
    if (index >= 0) {
      this.sections.splice(index, 0, {
        id, el, text, tag,
      });
    } else {
      this.sections.push({
        id, el, text, tag,
      });
    }
  },
  visible() {
    return this.only().length >= 2;
  },
  remove(id) {
    this.sections = this.sections.filter((item) => item.id !== id);
  },
  only(tags = sectionnavigationFilter) {
    return this.sections.filter((item) => tags.includes(item.tag));
  },
});
