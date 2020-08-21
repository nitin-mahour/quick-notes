module.exports = {

    content: ['**/*.jsx', '**/*.js'], // content
    css: ['src/css/tailwind.dev.css'], // css
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    output: 'src/css/tailwind.css'
    
}

// usage: npx purgecss -c tailwind.config.js  &&  css o -i src/css/tailwind.css -o src/css/tailwind.min.css