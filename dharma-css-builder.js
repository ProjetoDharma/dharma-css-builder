var pageGrids = [];

function dharmaMuseTextArea(itemUID, inputID, width, height, Color, BorderWidth, BorderColor, BorderStyle, BorderRadius) {
    var arrObject = [];
    arrObject.push('"width": "' + width + 'px"');
    arrObject.push('"height": "' + height + 'px"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-container",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);

    //////////////////////////////////////////////////

    arrObject.length = 0;
    arrObject.push('"background-color": "' + Color + '"');
    arrObject.push('"border-width": "' + BorderWidth + 'px"');
    arrObject.push('"border-color": "' + BorderColor + '"');
    arrObject.push('"border-style": "' + BorderStyle + '"');
    arrObject.push('"border-radius": "' + BorderRadius + 'px"');
    arrObject.push('"width": "100%"');
    arrObject.push('"height": "100%"');
    arrObject.push('"resize": "none"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-text",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);
}

function dharmaMuseEspecialInput(itemUID, inputID, width, height, Color, Padding, BorderWidth, BorderColor, BorderStyle, BorderRadius, Symbol, SymbolColor, SymbolWeight, Decimal, Inteiro, TextAlign) {
    var arrObject = [];
    arrObject.push('"width": "' + (width - (BorderWidth * 2)) + 'px"');
    arrObject.push('"height": "' + (height - (BorderWidth * 2)) + 'px"');
    arrObject.push('"display": "flex"');
    arrObject.push('"flex-flow": "row"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-container",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);

    //////////////////////////////////////////////////

    arrObject.length = 0;
    arrObject.push('"height": "' + height + 'px"');
    arrObject.push('"flex": "0 0 ' + height + 'px"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-icon-container",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);

    //////////////////////////////////////////////////

    arrObject.length = 0;
    arrObject.push('"border-width": "' + BorderWidth + 'px"');
    arrObject.push('"border-color": "' + BorderColor + '"');
    arrObject.push('"border-style": "' + BorderStyle + '"');
    arrObject.push('"border-top-left-radius": "' + BorderRadius + 'px"');
    arrObject.push('"border-bottom-left-radius": "' + BorderRadius + 'px"');
    arrObject.push('"width": "100%"');
    arrObject.push('"height": "100%"');
    arrObject.push('"display": "table"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-icon-container-table",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);

    //////////////////////////////////////////////////

    arrObject.length = 0;
    arrObject.push('"font-weight": "' + SymbolWeight + 'px"');
    arrObject.push('"color": "' + SymbolColor + '"');
    arrObject.push('"display": "table-cell"');
    arrObject.push('"vertical-align": "middle"');
    arrObject.push('"text-align": "center"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-icon-container-cell",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);

    //////////////////////////////////////////////////

    arrObject.length = 0;
    arrObject.push('"height": "100%"');
    arrObject.push('"flex": "1 1 100%"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-input-container",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);

    //////////////////////////////////////////////////

    arrObject.length = 0;
    arrObject.push('"border-width": "' + BorderWidth + 'px"');
    arrObject.push('"border-color": "' + BorderColor + '"');
    arrObject.push('"border-style": "' + BorderStyle + '"');
    arrObject.push('"border-top-right-radius": "' + BorderRadius + 'px"');
    arrObject.push('"border-bottom-right-radius": "' + BorderRadius + 'px"');
    arrObject.push('"padding-left": "' + Padding + 'px"');
    arrObject.push('"padding-right": "' + Padding + 'px"');
    arrObject.push('"width": "100%"');
    arrObject.push('"height": "' + (height - (BorderWidth * 2)) + 'px"');
    arrObject.push('"text-align": "' + TextAlign + '"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-input",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);

    //////////////////////////////////////////////////
}

function dharmaMuseTextInput(itemUID, inputID, width, height, Color, Padding, BorderWidth, BorderColor, BorderStyle, BorderRadius) {
    //////////////////////////////////////////////////////////
    ///  Button Config

    var arrObject = [];
    arrObject.push('"width": "' + (width -(BorderWidth * 2) - (Padding * 2)) + 'px"');
    arrObject.push('"height": "' + (height - (BorderWidth * 2)) + 'px"');
    arrObject.push('"padding-left": "' + Padding + 'px"');
    arrObject.push('"padding-right": "' + Padding + 'px"');
    arrObject.push('"background-color": "' + Color + '"');
    arrObject.push('"border-width": "' + BorderWidth + 'px"');
    arrObject.push('"border-color": "' + BorderColor + '"');
    arrObject.push('"border-style": "' + BorderStyle + '"');
    arrObject.push('"border-radius": "' + BorderRadius + 'px"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;

    style = {
        name: "." + itemUID + "-text-input",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);
}

function dharmaMuseInputImage(pPrefix, pID, pWidth, pHeight, pColor, pText) {
    style = {
        name: "#" + pPrefix + '-base-container',
        base: {
            'width': pWidth + 'px',
            'height': pHeight + 'px'
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + pPrefix + '-image-main',
        base: {
            'width': pWidth + 'px',
            'height': pHeight + 'px'
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + pID + '-container',
        base: {
            'width': pWidth + 'px',
            'height': pHeight + 'px',
            'background-color': "#" + pColor,
            'overflow': "hidden"
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + pPrefix + '-text-container-table',
        base: {
            'width': pWidth + 'px',
            'height': pHeight + 'px',
            'display': 'table',
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + pPrefix + '-text-container-cell',
        base: {
            'display': 'table-cell',
            'vertical-align': 'middle',
            'text-align': 'center'
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + pID + '-image',
        base: {
            'width': pWidth + 'px',
            'height': pHeight + 'px',
            'position': 'relative',
            'top': '-' + pHeight + 'px',
            'cursor': 'wait',
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + pPrefix + '-input-container',
        base: {
            'width': pWidth + 'px',
            'height': pHeight + 'px',
            'position': 'relative',
            'top': '-' + pHeight + 'px',
            'left': '0'
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + pID,
        base: {
            'width': pWidth + 'px',
            'height': pHeight + 'px',
            'background': '#4444AA',
            'opacity': '0',
            'filter': 'alpha(opacity: 0)',
            'position': 'relative',
            'top': '0',
            'left': '0',
            'cursor': 'pointer'
        }
    }

    dharma.css.createCSSRule(style);
}

function dharmaButton(itemUID, inputID, width, height, Color, ColorHover, BorderWidth, BorderColor, BorderStyle, BorderRadius, useShadow, ShadowH, ShadowV, ShadowBlur, ShadowRadius, ShadowColor) {
    //////////////////////////////////////////////////////////
    ///  Button Config

    var arrObject = [];
    arrObject.push('"width": "' + width + 'px"');
    arrObject.push('"height": "' + height + 'px"');
    arrObject.push('"background-color": "' + Color + '"');
    arrObject.push('"border-width": "' + BorderWidth + 'px"');
    arrObject.push('"border-color": "' + BorderColor + '"');
    arrObject.push('"border-style": "' + BorderStyle + '"');
    arrObject.push('"border-radius": "' + BorderRadius + 'px"');

    if (useShadow) {
        arrObject.push('"-webkit-box-shadow": "' + ShadowH + 'px ' + ShadowV + 'px ' + ShadowBlur + 'px ' + ShadowRadius + 'px ' + ShadowColor + '"');
        arrObject.push('"box-shadow": "' + ShadowH + 'px ' + ShadowV + 'px ' + ShadowBlur + 'px ' + ShadowRadius + 'px ' + ShadowColor + '"');
    }

    arrObject.push('"cursor": "pointer"');

    var strObject = '{ ' + arrObject.join(', ') + ' }';

    var styleBase = JSON.parse(strObject);

    var styleHover;
    arrObject.length = 0;

    arrObject.push('"background-color": "' + ColorHover + '"');

    if (arrObject.length > 0) {
        strObject = '{ ' + arrObject.join(', ') + ' }';
        styleHover = JSON.parse(strObject);
    }

    style = {
        name: "." + itemUID + "-button",
        base: styleBase,
        hover: styleHover
    }

    dharma.css.createCSSRule(style);
    style = {
        name: "#" + itemUID + '-text-table',
        base: {
            'width': (width - (BorderWidth * 2)) + 'px',
            'height': (height - (BorderWidth * 2)) + 'px',
            'display': 'table',
        }
    }

    dharma.css.createCSSRule(style);

    style = {
        name: "#" + itemUID + '-text-cell',
        base: {
            'display': 'table-cell',
            'vertical-align': 'middle',
            'text-align': 'center'
        }
    }

    dharma.css.createCSSRule(style);
}