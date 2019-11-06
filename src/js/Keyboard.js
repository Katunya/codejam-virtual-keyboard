import Key from './Key';

export default class Keyboard {
  constructor(keyboardTemplate) {
    this.language = 'ru';
    this.altKeyClicked = false;
    this.shiftKeyClicked = false;
    this.keyboardTemplate = keyboardTemplate;
    this.el = null;
    this.field = null;
    this.keys = [];
  }

  init() {
    // Load language from localstorage or save default language
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language');
    } else {
      localStorage.setItem('language', this.language);
    }

    this.render();

    // On click virtual key
    document.addEventListener('click', (e) => {
      const key = this.keys.find((item) => item.el === e.target);
      if (key) {
        if (key.key === 'Shift') {
          // Change language on click on virtual keyboard
          if (this.altKeyClicked) {
            this.changeLanguage();
          }

          // Change letter case on click 'Shift' key
          this.shiftKeyClicked = !this.shiftKeyClicked;
          this.toggleCapsLock();
        }

        this.triggerKey(key, e);

        if (key.key !== 'Alt' && this.altKeyClicked) {
          this.altKeyClicked = false;
        }

        if (key.key !== 'Shift' && this.shiftKeyClicked) {
          this.shiftKeyClicked = false;
          this.toggleCapsLock();
        }
      }
    });

    // On press device key
    document.addEventListener('keyup', (e) => {
      const key = this.keys.find((item) => item.code === e.code);
      if (key) {
        this.triggerKey(key, e);
      }
    });
  }

  render() {
    // Create field
    this.field = document.createElement('textarea');
    this.field.className = 'field';
    this.field.disabled = 'disabled';
    document.body.append(this.field);

    // Create keyboard
    this.el = document.createElement('div');
    this.el.className = 'keyboard';

    // Create keyboard keys
    this.keyboardTemplate.forEach((row, rowIndex) => {
      row.forEach((item) => {
        const key = new Key(item, this.language);
        key.el.classList.add(`key_row_${rowIndex + 1}`);

        this.el.append(key.el);
        this.keys.push(key);
      });
    });

    document.body.append(this.el);
  }

  changeLanguage() {
    this.language = (this.language === 'ru') ? 'en' : 'ru';
    localStorage.setItem('language', this.language);
    this.keys.forEach((item) => item.setLanguage(this.language));
  }

  toggleCapsLock() {
    this.keys.forEach((item) => item.toggleCase());
  }

  triggerKey(key, e = null) {
    this.field.blur();
    key.setActive();

    switch (key.code) {
      case 'Backspace':
        this.field.value = this.field.value.slice(0, -1);
        break;

      case 'CapsLock':
        this.toggleCapsLock();
        break;

      case 'Enter':
        this.field.value += '\n';
        break;

      case 'Space':
        this.field.value += ' ';
        break;

      case 'AltLeft':
      case 'AltRight':
        if (e.shiftKey) {
          this.changeLanguage();
        } else {
          this.altKeyClicked = true;
        }
        break;

      // Unused keys
      case 'Tab':
      case 'Delete':
      case 'MetaLeft':
      case 'MetaRight':
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'ControlLeft':
      case 'ControlRight':
        break;

      default: {
        // If key has shiftKey - like a '1' when shift pressed be '!', 2 - @, etc
        const hasShiftKey = (e.shiftKey || this.shiftKeyClicked) && key.shiftKey;
        const label = (hasShiftKey) ? key.shiftKeyLabel : key.el.innerText;

        // If pressed 'Shift' key on physical keyboard
        if (e.shiftKey) {
          this.field.value += label.toUpperCase();
        } else {
          this.field.value += label;
        }

        break;
      }
    }
  }
}
