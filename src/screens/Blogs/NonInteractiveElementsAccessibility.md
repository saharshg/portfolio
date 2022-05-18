# Accessibility for non-interactive HTML elements in React

---

## To get rid of this warning:

> Visible, non-interactive elements with click handlers must have at least one keyboard listener jsx-a11y/click-events-have-key-events

## Use

../utils.js

```
const filterKeyEnter = (handler) => (e) => {
    if (e.keyCode === 13) {
      handler(e);
    }
}

export const makeAccessible = (onClick, tabIndex) => ({
    role: 'button',
    tabIndex: tabIndex || 0,
    onKeyDown: filterKeyEnter(onClick),
    onClick,
})
```

../Component.jsx

```
<span ...{makeAccessible(onClickHandler, 1)}>
    ...
    ...
</span>
```
