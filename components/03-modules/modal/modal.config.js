module.exports = {
  context: {
    modalContent: {
      class: '',
    },
    modal: {
      class: '',
      id: 'myDialog',
      // read README.md when implementing modal
      attributes: 'aria-labelledby="myTitle" aria-describedby="myDesc"'
    },
    trigger: true,
    modalTrigger: {
      buttonModalTrigger: {
        tag: 'button',
        class: 'modal-trigger',
        text: 'Modal trigger button',
        attributes: 'data-modaltrigger="myDialog" type="button"'
      }
    },
    main: {
      html: '<h3 id="myTitle">Save "untitled" document?</h3><div id="myDesc">You have made changes to "untitled.txt" that have not been saved. What do you want to do?</div>'
    },
    buttonClose: {
      tag: 'button',
      text: '',
      class: 'button--icon modal__js-close-button modal__close-button',
      iconId: 'close',
      iconClass: 'button__icon modal__close-button-icon',
      attributes: 'type="button" aria-label="close modal button, click to close the modal"'
    },
    script: true
  },
};
