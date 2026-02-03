// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Naem Jaraiseh",
        title: "DJ",
        bio: "DJ Naeem Jaraiseh is a Palestinian DJ, Remix maker and DJ for parties and events",
        image: "https://palqum.com/nfclogos/djnaem.jfif"
    },

    // ==================== MAIN LINKS ====================
    // Set enabled: false to hide any link
    links: [
        {
            enabled: true,
            icon: "whatsapp",
            text: "WhatsApp",
            url: "https://wa.me/972595328993"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+972595328993"
        },
        {
            enabled: false,
            icon: "email",
            text: "Email",
            url: "mailto:support@palqum.com"
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
            enabled: true,
            url: "https://www.facebook.com/djnaeem2021"
        },
        instagram: {
            enabled: true,
            url: "https://www.instagram.com/dj_naeem_jaraiseh?igsh=MWlkNXBubmtsdnI4bA%3D%3D&utm_source=qr"
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
        primaryColor: "#8FABD4",
        secondaryColor: "#4A70A9",
        accentColor: "#000000"
    }
};

console.log('config.js loaded successfully!');
console.log('CONFIG:', CONFIG);
