
module.exports = {
    presets: [
        "@swissquote/crafty-preset-postcss",
        "@swissquote/crafty-runner-gulp"
    ],
    destination_css: 'theme/swissquote/css',
    css: {
        theme: {
            source: 'css/theme.scss',
            watch: ['css/**/*.scss']
        }
    },
    stylelint: {
        rules: {
            "indentation": null,
            "swissquote/no-type-outside-scope": null
        }
    }
}