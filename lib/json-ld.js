// /lib/json-ld.js
export function getPersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gabriel Gazal",
        "url": "https://gabrielgazal.com",
        "sameAs": [
            "https://twitter.com/gabrielgazal",
            "https://github.com/gabrielgazal",
            "https://linkedin.com/in/gabrielgazal"
        ]
    };
}
