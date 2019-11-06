import '../styles/main.scss';
import Keyboard from './Keyboard';

const keyboardTemplate = [
  [
    { key: { ru: 'ё', en: '`' }, code: 'Backquote' },
    { key: '1', shiftKey: '!', code: 'Digit1' },
    { key: '2', shiftKey: { ru: '"', en: '@' }, code: 'Digit2' },
    { key: '3', shiftKey: { ru: '№', en: '#' }, code: 'Digit3' },
    { key: '4', shiftKey: { ru: ';', en: '$' }, code: 'Digit4' },
    { key: '5', shiftKey: '%', code: 'Digit5' },
    { key: '6', shiftKey: { ru: ':', en: '^' }, code: 'Digit6' },
    { key: '7', shiftKey: { ru: '?', en: '&' }, code: 'Digit7' },
    { key: '8', shiftKey: '*', code: 'Digit8' },
    { key: '9', shiftKey: '(', code: 'Digit9' },
    { key: '0', shiftKey: ')', code: 'Digit0' },
    { key: '-', shiftKey: '_', code: 'Minus' },
    { key: '=', shiftKey: '+', code: 'Equal' },
    {
      key: 'Backspace', code: 'Backspace', size: 2, isControlKey: true,
    },
  ],
  [
    { key: 'Tab', code: 'Tab', isControlKey: true },
    { key: { ru: 'й', en: 'q' }, code: 'KeyQ' },
    { key: { ru: 'ц', en: 'w' }, code: 'KeyW' },
    { key: { ru: 'у', en: 'e' }, code: 'KeyE' },
    { key: { ru: 'к', en: 'r' }, code: 'KeyR' },
    { key: { ru: 'е', en: 't' }, code: 'KeyT' },
    { key: { ru: 'н', en: 'y' }, code: 'KeyY' },
    { key: { ru: 'г', en: 'u' }, code: 'KeyU' },
    { key: { ru: 'ш', en: 'i' }, code: 'KeyI' },
    { key: { ru: 'щ', en: 'o' }, code: 'KeyO' },
    { key: { ru: 'з', en: 'p' }, code: 'KeyP' },
    { key: { ru: 'х', en: '[' }, code: 'BracketLeft' },
    { key: { ru: 'ъ', en: ']' }, code: 'BracketRight' },
    { key: '\\', shiftKey: '/', code: 'Backslash' },
    { key: 'Del', code: 'Delete', isControlKey: true },
  ],
  [
    {
      key: 'CapsLock', code: 'CapsLock', size: 2, isControlKey: true,
    },
    { key: { ru: 'ф', en: 'a' }, code: 'KeyA' },
    { key: { ru: 'ы', en: 's' }, code: 'KeyS' },
    { key: { ru: 'в', en: 'd' }, code: 'KeyD' },
    { key: { ru: 'а', en: 'f' }, code: 'KeyF' },
    { key: { ru: 'п', en: 'g' }, code: 'KeyG' },
    { key: { ru: 'р', en: 'h' }, code: 'KeyH' },
    { key: { ru: 'о', en: 'j' }, code: 'KeyJ' },
    { key: { ru: 'л', en: 'k' }, code: 'KeyK' },
    { key: { ru: 'д', en: 'l' }, code: 'KeyL' },
    { key: { ru: 'ж', en: ';' }, code: 'Semicolon' },
    { key: { ru: 'э', en: '\'' }, code: 'Quote' },
    {
      key: 'Enter', code: 'Enter', size: 2, isControlKey: true,
    },
  ],
  [
    {
      key: 'Shift', code: 'ShiftLeft', size: '2-half', isControlKey: true,
    },
    { key: { ru: 'я', en: 'z' }, code: 'KeyZ' },
    { key: { ru: 'ч', en: 'x' }, code: 'KeyX' },
    { key: { ru: 'с', en: 'c' }, code: 'KeyC' },
    { key: { ru: 'м', en: 'v' }, code: 'KeyV' },
    { key: { ru: 'и', en: 'b' }, code: 'KeyB' },
    { key: { ru: 'т', en: 'n' }, code: 'KeyN' },
    { key: { ru: 'ь', en: 'm' }, code: 'KeyM' },
    { key: { ru: 'б', en: ',' }, code: 'Comma' },
    { key: { ru: 'ю', en: '.' }, code: 'Period' },
    { key: { ru: '.', en: '/' }, code: 'Slash' },
    {
      key: 'Shift', code: 'ShiftRight', size: '2-half', isControlKey: true,
    },
  ],
  [
    {
      key: 'Ctrl', code: 'ControlLeft', size: '1-half', isControlKey: true,
    },
    {
      key: 'Win', code: 'MetaLeft', size: '1-half', isControlKey: true,
    },
    {
      key: 'Alt', code: 'AltLeft', size: '1-half', isControlKey: true,
    },
    { key: '', code: 'Space', size: 6 },
    {
      key: 'Alt', code: 'AltRight', size: '1-half', isControlKey: true,
    },
    {
      key: 'Win', code: 'MetaRight', size: '1-half', isControlKey: true,
    },
    {
      key: 'Ctrl', code: 'ControlRight', size: '1-half', isControlKey: true,
    },
  ],
];

document.addEventListener('DOMContentLoaded', () => {
  new Keyboard(keyboardTemplate).init();
});
