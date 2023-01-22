# Word Counter

A simple chrome extension that counts the number of words in a highlighted paragraph. 

![Retrieve Data From Firestore - Google Chrome 2023-01-21 19-23-06](https://user-images.githubusercontent.com/59801139/213910346-812e9974-c3cf-427e-9396-cc024924e5bd.gif)

## Technologies Used

- JavaScript
- Chrome Extension API

## How to use

1. Download and install the extension from the [Chrome Web Store](link-to-webstore).
2. Browse to any website.
3. Highlight a paragraph of text.
4. The number of words in the highlighted text will be displayed in an alert box.

## How it works

The extension uses a content script that listens for a "mouseup" event on the document, which is fired when the user releases the mouse button after highlighting text. The content script then gets the selected text using `window.getSelection().toString()` and counts the number of words in the selected text using `split(/\s+/)` and counting the number of items in the resulting array.

## Installation

1. Clone the repository
```sh
git clone https://github.com/mo-root/Word_counter_extesnsion.git
```

2. Go to chrome://extensions/ and check the box for Developer mode in the top right.
3. Click the "Load unpacked" button and select the cloned folder
## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

# Enjoy!



