# MedAutoinsert
Auto insert Field For Fast Appoinent Reserve
# MedAutoinsert - Firefox Extension

This is a Firefox extension designed to automatically fill out forms on the `app06.ivmis.com` website. It helps users save time by pre-populating test data into form fields across multiple pages.

## Features
- Automatically fills form fields with predefined test data.
- Supports three pages of the form with specific field values.
- Easy to install and use with a single click via the browser action button.

## Installation
1. Clone or download this repository to your local machine.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click on "Load Temporary Add-on" and select the folder containing the extension files (`manifest.json`, `background.js`, `content.js`).
4. The extension will be loaded, and a button will appear in the Firefox toolbar.

## Usage
- Visit `app06.ivmis.com` and navigate to the form pages.
- Click the extension button in the Firefox toolbar to automatically fill the form fields with test data.
- The extension will populate fields based on the predefined values in the code.

## Files
- `manifest.json`: Configuration file for the Firefox extension.
- `background.js`: Handles the browser action button click event.
- `content.js`: Contains the logic to fill the form fields with test data.

## Prerequisites
- Firefox browser (latest version recommended).
- No additional dependencies required.

## Contributing
Feel free to fork this repository, make improvements, or report issues. Pull requests are welcome!

## License
This project is open-source. Feel free to use and modify it as needed. (Consider adding a license like MIT or Apache if you want to specify terms.)

## Contact
For questions or support, you can reach out via [your GitHub profile](https://github.com/ashkan261) or open an issue in this repository.

---
