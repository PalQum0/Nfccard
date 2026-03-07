// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Q Beauty Center",
        title: "لمسة جمال احترافية",
        bio: "Q Beauty Center",
        image: "https://palqum.com/nfclogos/qbeautycenter.png"
    },

    // ==================== CONTACT INFO FOR vCard ====================
    // Used for "Add to Contacts" button
    contact: {
        enabled: true,  // Set to false to hide the button
        phone: "+972597980577",
        email: "",  // Optional
        website: "",  // Optional
        address: "",  // Optional: "123 Street, City, Country"
        organization: "Q Beauty Center",  // Optional
        notes: ""  // Optional
    },

    // ==================== MAIN LINKS ====================
    // Set enabled: false to hide any link
    links: [
        {
            enabled: true,
            icon: "whatsapp",
            text: "WhatsApp",
            url: "https://wa.me/972597980577"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+972597980577"
        },
        {
            enabled: true,
            icon: "email",
            text: "Email",
            url: "mailto:qbeautycenter@icloud.com"
        },
        {
            enabled: false,
            icon: "website",
            text: "Website",
            url: ""
        },
        {
            enabled: true,
            icon: "location",
            text: "Location",
            url: "https://maps.app.goo.gl/HQGfDfHEPGpeAJrS7"
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
            icon: "",
            text: "Our Prochure",
            url: "https://palqum.com/nfclogos/Brochure.pdf"
        }
    ],

    // ==================== SOCIAL MEDIA ====================
    // Set enabled: false to hide any social media
    social: {
        facebook: {
            enabled: true,
            url: "https://www.facebook.com/QBeautyCenter1"
        },
        instagram: {
            enabled: true,
            url: "https://www.instagram.com/q.beauty.center/"
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
            url: ""
        },
        snapchat: {
            enabled: false,
            url: ""
        }
    },

    // ==================== THEME SETTINGS ====================
    // Customize all colors of your profile card
theme: {
    primaryColor: "#bc8797",
    primaryGlowColor: "#c39fcc",
    secondaryColor: "#c39fcc",
    accentColor: "#b07a8d",

    bgDark: "#f8eef1",
    bgCard: "rgba(255, 255, 255)",
    cardBorder: "rgba(195, 159, 204, 0.18)",

    textPrimary: "#2d1f26",
    textSecondary: "#6b4d5a",
    textMuted: "#9a7d88"
}
};

console.log('config.js loaded successfully!');
console.log('CONFIG:', CONFIG);
