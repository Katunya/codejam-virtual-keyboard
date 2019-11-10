export default class Key {
  constructor({
    key, code, shiftKey = null, size = null, isControlKey = false,
  }, language) {
    this.el = null;
    this.key = key;
    this.code = code;
    this.shiftKey = shiftKey;
    this.size = size;
    this.isControlKey = isControlKey;
    this.language = language;
    this.isUpperCase = false;

    this.init();
  }

  get label() {
    const label = (this.key.ru && this.key.en) ? this.key[this.language] : this.key;
    return (this.isUpperCase && !this.isControlKey) ? label.toUpperCase() : label;
  }

  get shiftKeyLabel() {
    return (this.shiftKey.ru && this.shiftKey.en) ? this.shiftKey[this.language] : this.shiftKey;
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'key';

    if (this.size) {
      this.el.classList.add(`key_size_${this.size}`);
    }

    this.el.dataset.code = this.code;

    this.render();
  }

  render() {
    if (this.shiftKey) {
      this.el.dataset.shiftKey = this.shiftKeyLabel;
    }
    this.el.innerText = this.label;
  }

  setActive() {
    this.el.classList.add('key_active');
    setTimeout(() => {
      this.el.classList.remove('key_active');
    }, 300);
  }

  setLanguage(lang) {
    this.language = lang;
    this.render();
  }

  toggleCase() {
    this.isUpperCase = !this.isUpperCase;
    this.render();
  }
}
