module.exports = {
    // ...
    plugins: [
        // ...
        require('@tailwindcss/aspect-ratio'),
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
        },
    },
}