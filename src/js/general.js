/**
 * Created by tomyum on 29.06.15.
 */


//;(function(window,document){


tyPopup = function (options) {
    this.settings = {};
    return this.init(options);
    //return  tyPopup.prototype.init( options );
};

tyPopup.prototype.defaults = {

    overlay: true,
    animation: 'css', // css or js
    overlayTrigger: true
};

tyPopup.prototype._storage = {overlay: false, popup: false, closeBtn: false};

/**
 * Copied from jQuery. Thanks.
 * @returns {*|{}}
 * @private
 */
tyPopup.prototype._extends = function () {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length;

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object") {
        target = {};
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }

                if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    // Return the modified object
    return target;
};


tyPopup.prototype.init = function (options) {
    if (options && options instanceof  Object) {
        this.settings = this._extends({}, this.defaults, options);
    }
    console.log(this.settings);

    if (!this._storage.overlay) this._createOverlay();
    if (!this._storage.popup) this._createPopup();
    return this;
};
tyPopup.prototype.show = function () {
    this._storage.overlay.className = 'show';
    this._storage.popup.className = 'show';
};
tyPopup.prototype.hide = function () {
    this._storage.overlay.className = '';
    this._storage.popup.className = '';
};
tyPopup.prototype.setContent = function () {
};
tyPopup.prototype._createOverlay = function () {
    //return false;
    var overlay = document.createElement('div');
    overlay.id = 'ty-overlay';
    document.body.appendChild(overlay);
    this._storage.overlay = overlay;
    return overlay;
};
tyPopup.prototype._createPopup = function () {

    var popup = document.createElement('div'),
        btnClose = document.createElement('span'),
        popupHeader = document.createElement('div'),
        popupContent = document.createElement('div'),
        popupFooter = document.createElement('div');

    popup.id = 'ty-popup';
    popup.className = 'ty-popup';
    btnClose.className = 'ty-popup-close-btn';
    popupHeader.className = 'ty-popup-header';
    popupFooter.className = 'ty-popup-footer';
    popupContent.className = 'ty-popup-content';

    popup.appendChild(btnClose);
    popup.appendChild(popupHeader);
    popup.appendChild(popupContent);
    popup.appendChild(popupFooter);

    document.body.appendChild(popup);

    this._storage.popup = popup;
    this._storage.closeBtn = btnClose;
    this._storage.contentBlock = popupContent;

    return popup;
};

tyPopup.prototype._animate = function () {
};



//})(window,document);
