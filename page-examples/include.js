const include = {
    routes: [],

    includeHTML: (elements, params) => { // params incl: allowSpecialCharacters, and dynamicHTML
        const totalElements = elements.length;
    
        for (let i = 0; i < totalElements; i++) {
            const element = elements[i];
            
            const url = element.getAttribute('data-include');
        
            // !! rewrite as pure function to get HTML
            // make modular and usable without relying on calling element
            fetch(url)
            .then(function(data) {
                data.text().then(function(html) {
                    element.innerHTML = html;
                    // add method to check if new html contains an include attribute, and if so call itself recursivly
                    
                    element.removeAttribute('data-include');
                })
            })
            .catch(function(error) {
                console.error(`[include.js error getting '${url}']`, error);
            });
        };
    },

    onClickHTML: (url) => {
        fetch(url)
        .then(function(data) {
            data.text().then(function(html) {
                document.getElementById('app').innerHTML = html;
                // add method to check if new html contains an include attribute, and if so call itself recursivly 
            })
        })
        .catch(function(error) {
            console.error(`[include.js error getting '${url}']`, error);
        });
    },

    getJSON: () => {

    },

    loaded: () => {
        // const path = window.location.pathname;
        const path = window.location.hash.substr(1);

        // if (typeof include.routes['path'] != undefined) {
        //     include.onClickHTML( include.routes[path].file );
        // }
    },
}

include.includeHTML( document.querySelectorAll('[data-include]') );

window.onload = include.loaded;