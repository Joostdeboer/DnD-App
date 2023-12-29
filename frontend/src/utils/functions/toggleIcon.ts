'use client';

let _clipPathSupported: boolean | null = null;

// Check if clip-path is supported. From http://stackoverflow.com/a/30041538.
// Taken from https://mui.wertarbyte.com/#material-ui-toggle-icon and adapted for React 18
export function clipPathSupported() {
    if (_clipPathSupported !== null) {
        return _clipPathSupported;
    }
    if (typeof document === 'undefined') {
        _clipPathSupported = false;
        return false;
    }

    const base = 'clipPath';
    const prefixes = ['Webkit'];
    const properties = [base, ...prefixes.map((prefix) => prefix + base.charAt(0).toUpperCase() + base.slice(1))];
    const testElement = document.createElement('testelement');
    const attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

    // Iterate over the properties and see if they pass two tests.
    for (const property of properties) {
        let elementProperty = testElement.style[property as never];
        // First, they need to even support clip-path (IE <= 11 does not)...
        if (elementProperty === '') {
            // Second, we need to see what happens when we try to create a CSS shape...
            elementProperty = attribute;
            if (elementProperty !== '') {
                _clipPathSupported = true;
                return true;
            }
        }
    }
    _clipPathSupported = false;
    return false;
}
