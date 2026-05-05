// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "دكتور هيثم سعد السرابطة",
        title: "اخصائي مسالك بولية",
        bio: "",
        image: "https://palqum.com/nfclogos/drhaitham.png"
    },

    // ==================== CONTACT INFO FOR vCard ====================
    // Used for "Add to Contacts" button
    contact: {
        enabled: true,  // Set to false to hide the button
        phone: "+972568611645",
        email: "",  // Optional
        website: "",  // Optional
        address: "",  // Optional: "123 Street, City, Country"
        organization: "اخصائي مسالك بولية",  // Optional
        notes: ""  // Optional
    },

    // ==================== MAIN LINKS ====================
    // Set enabled: false to hide any link
    links: [
        {
            enabled: true,
            icon: "whatsapp",
            text: "WhatsApp",
            url: "https://wa.me/972598494719"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+972568611645"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me(2)",
            url: "tel:+97222727048"
        },
        {
            enabled: false,
            icon: "website",
            text: "Website",
            url: ""
        },
        {
            enabled: false,
            icon: "location",
            text: "Location",
            url: ""
        },
        {
            enabled: false,
            icon: "portfolio",
            text: "Portfolio",
            url: ""
        },
        {
            enabled: false,
            icon: "calendar",
            text: "Book a Meeting",
            url: ""
        },
        {
            enabled: false,
            icon: "download",
            text: "Download CV",
            url: ""
        }
    ],

    // ==================== SOCIAL MEDIA ====================
    // Set enabled: false to hide any social media
    social: {
        facebook: {
            enabled: true,
            url: "https://www.facebook.com/DrHaithamBethlehem"
        },
        instagram: {
            enabled: true,
            url: "https://www.instagram.com/dr.haythamsarabta/"
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
            url: "https://www.tiktok.com/@dr_haytham9"
        },
        snapchat: {
            enabled: false,
            url: ""
        }
    },

    // ==================== THEME SETTINGS ====================
    // Customize all colors of your profile card
    theme: {
        // ========== PRIMARY COLORS ==========
        primaryColor: "#1A6BAC",
        // What it changes:
        // - Profile image border glow
        // - Background top gradient
        // - Footer "PalQum" link color
        // - Floating shape 1 (top)

        primaryGlowColor: "#4A9BD4",  // Auto-calculated if not provided
        // What it changes:
        // - Lighter version of primary for hover effects
        // - Profile image hover glow (brighter)

        secondaryColor: "#0D4C7A",
        // What it changes:
        // - Floating shape 3 (left side)
        // - Secondary accent elements

        accentColor: "#2196F3",
        // What it changes:
        // - Background bottom gradient
        // - Floating shape 2 (bottom right)

        // ========== BACKGROUND COLORS ==========
        bgDark: "#071525",
        // What it changes:
        // - Main page background color

        bgCard: "#0F2240",
        // What it changes:
        // - Profile card background
        // - Main container background

        cardBorder: "#1A6BAC",
        // What it changes:
        // - Profile card border
        // - Link button borders
        // - Social link borders

        // ========== BUTTON COLORS ==========
        buttonBg: "rgba(26, 107, 172, 0.1)",
        // What it changes:
        // - Link buttons background (default state)
        // - Social buttons background (default state)

        buttonHover: "rgba(26, 107, 172, 0.25)",
        // What it changes:
        // - Link buttons background (on hover)
        // - Social buttons background (on hover)

        // ========== TEXT COLORS ==========
        textPrimary: "#ffffff",
        // What it changes:
        // - Profile name (heading)
        // - Link button text
        // - Main text content

        textSecondary: "#7EC8E3",
        // What it changes:
        // - Profile title (subtitle under name)
        // - Secondary text elements

        textMuted: "#6b7280",
        // What it changes:
        // - Profile bio text
        // - Footer text
        // - Subtle text elements
    }
};

console.log('config.js loaded successfully!');
console.log('CONFIG:', CONFIG);
