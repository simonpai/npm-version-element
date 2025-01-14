# npm-version-element

Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/npm-version-element/latest/dist/npm-version-element.min.js"></script>
```

Then you can use the `npm-version` element in your HTML:

```html
<npm-version package="npm-version-element"></npm-version>
```

The element will display the latest version of the specified package.

## More options

Specify a tag:

```html
<npm-version package="npm-version-element" tag="beta"></npm-version>
```

Provide a fallback value:

```html
<npm-version package="npm-version-element">latest</npm-version>
```

Specify a format:

```html
<npm-version package="npm-version-element" format="v$"></npm-version>
<!-- will be v1.0.0 -->
```
