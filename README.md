# PHP Console for Chrome DevTools

A simple Chrome extension to iframe a PHP console. This package utilizes [Spaties Laravel Web Tinker](https://github.com/spatie/laravel-web-tinker) package, and iframes it in the devtools panel, making it accessible from anywhere in the panel.

## Installation

1. Download and unzip this project.
2. Navigate to `chrome://extensions/` in your browser.
3. Enable "Developer mode" in the top right corner (if not already enabled).
4. Click "Load unpacked" and select the `php-ext` folder.
5. Within any Laravel project, install the Spatie Laravel Web Tinker package: `composer require spatie/laravel-web-tinker`

## Run Tinker in DevTools

Now, you'll see a PHP tab in the console. Click on this to open PHP console and run your Laravel/PHP code.

![PHP Extension screenshot](https://cdn.devdojo.com/images/january2025/php-ext.png)