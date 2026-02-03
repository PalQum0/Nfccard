// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Ibrahem Qumsieh",
        title: "Founder of PalQum",
        bio: "Smart Digital Solutions for Modern Businesses",
        image: "https://palqum.com/nfclogos/palqum.jpeg"
    },

    // ==================== MAIN LINKS ====================
    // Set enabled: false to hide any link
    links: [
        {
            enabled: true,
            icon: "whatsapp",
            text: "WhatsApp",
            url: "https://wa.me/972569214745"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+972569214745"
        },
        {
            enabled: true,
            icon: "email",
            text: "Email",
            url: "mailto:support@palqum.com"
        },
        {
            enabled: true,
            icon: "website",
            text: "Website",
            url: "https://www.palqum.com"
        },
        {
            enabled: false,
            icon: "location",
            text: "Location",
            url: "https://maps.google.com/?q=Bethlehem,Palestine"
        },
        {
            enabled: false,
            icon: "portfolio",
            text: "Portfolio",
            url: "https://www.yourportfolio.com"
        },
        {
            enabled: false,
            icon: "calendar",
            text: "Book a Meeting",
            url: "https://calendly.com/yourusername"
        },
        {
            enabled: false,
            icon: "download",
            text: "Download CV",
            url: "https://example.com/cv.pdf"
        }
    ],

    // ==================== SOCIAL MEDIA ====================
    // Set enabled: false to hide any social media
    social: {
        facebook: {
            enabled: true,
            url: "https://facebook.com/palqum"
        },
        instagram: {
            enabled: true,
            url: "https://instagram.com/palqum23"
        },
        twitter: {
            enabled: false,
            url: ""
        },
        linkedin: {
            enabled: false,
            url: ""
        },
        github: {
            enabled: false,
            url: ""
        },
        youtube: {
            enabled: false,
            url: ""
        },
        tiktok: {
            enabled: true,
            url: "https://www.tiktok.com/@palqum"
        },
        snapchat: {
            enabled: false,
            url: ""
        }
    },

    // ==================== THEME SETTINGS ====================
    theme: {
        primaryColor: "#6366f1",
        secondaryColor: "#7c3aed",
        accentColor: "#818cf8"
    }
};

console.log('config.js loaded successfully!');
console.log('CONFIG:', CONFIG);
