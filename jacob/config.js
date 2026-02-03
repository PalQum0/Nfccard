// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Jacob Qumsieh",
        title: "FreeLance Web Designer & Developer",
        bio: "FreeLance Web Designer & Developer",
        image: "https://palqum.com/nfclogos/jacob.jfif"
    },

    // ==================== MAIN LINKS ====================
    // Set enabled: false to hide any link
    links: [
        {
            enabled: true,
            icon: "whatsapp",
            text: "WhatsApp",
            url: "https://wa.me/972597298205"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+972597298205"
        },
        {
            enabled: true,
            icon: "email",
            text: "Email",
            url: "mailto:qumsiyeh37@gmail.com"
        },
        {
            enabled: false,
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
            enabled: false,
            url: "https://www.facebook.com/djnaeem2021"
        },
        instagram: {
            enabled: true,
            url: "https://www.instagram.com/jacob1q11/"
        },
        twitter: {
            enabled: false,
            url: ""
        },
        linkedin: {
            enabled: true,
            url: "https://www.linkedin.com/in/yacoub-qumseya-9227a2132/"
        },
        github: {
            enabled: true,
            url: "https://github.com/Jacob11Q1"
        },
        youtube: {
            enabled: false,
            url: ""
        },
        tiktok: {
            enabled: false,
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
