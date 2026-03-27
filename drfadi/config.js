// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Jiries Musleh",
        title: "",
        bio: "",
        image: "https://palqum.com/nfclogos/jeries.jfif"
    },

    // ==================== CONTACT INFO FOR vCard ====================
    // Used for "Add to Contacts" button
    contact: {
        enabled: true,  // Set to false to hide the button
        phone: "+970599342096",
        email: "",  // Optional
        website: "",  // Optional
        address: "",  // Optional: "123 Street, City, Country"
        organization: "",  // Optional
        notes: ""  // Optional
    },

    // ==================== MAIN LINKS ====================
    // Set enabled: false to hide any link
    links: [
        {
            enabled: true,
            icon: "whatsapp",
            text: "WhatsApp",
            url: "https://wa.me/970599342096"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+970599342096"
        },
        {
            enabled: true,
            icon: "email",
            text: "Email",
            url: "mailto:jiriesmusleh199@gmail.com"
        },
        {
            enabled: true,
            icon: "website",
            text: "Gloria's Catalog",
            url: "https://www.catalogmachine.com/GloriaInvestment/catalogs/Gloria.html"
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
            url: "https://www.facebook.com/jiries.i.musleh?mibextid=wwXIfr&rdid=l0lTL2T1TcExa9n2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1752Pr9qif%2F%3Fmibextid%3DwwXIfr#"
        },
        instagram: {
            enabled: true,
            url: "https://www.instagram.com/jiries_i_musleh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
            url: "https://www.tiktok.com/@samer.khair6?_r=1&_t=ZS-943i9DR0P5h "
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
        primaryColor: "#FFFFF0",
        // What it changes:
        // - Profile image border glow
        // - Background top gradient
        // - Footer "PalQum" link color
        // - Floating shape 1 (top)
        
        primaryGlowColor: "#FFFFF0",  // Auto-calculated if not provided
        // What it changes:
        // - Lighter version of primary for hover effects
        // - Profile image hover glow (brighter)
        
        secondaryColor: "#252525",
        // What it changes:
        // - Floating shape 3 (left side)
        // - Secondary accent elements
        
        accentColor: "#75B23FF",
        // What it changes:
        // - Background bottom gradient
        // - Floating shape 2 (bottom right)
        
        // ========== BACKGROUND COLORS ==========
        bgDark: "#252525",
        // What it changes:
        // - Main page background color
        
        bgCard: "#3D3D3D",
        // What it changes:
        // - Profile card background
        // - Main container background
        
        cardBorder: "#FFFFF0",
        // What it changes:
        // - Profile card border
        // - Link button borders
        // - Social link borders
        
        // ========== BUTTON COLORS ==========
        buttonBg: "rgba(255, 255, 255, 0.05)",
        // What it changes:
        // - Link buttons background (default state)
        // - Social buttons background (default state)
        
        buttonHover: "rgba(255, 255, 255, 0.1)",
        // What it changes:
        // - Link buttons background (on hover)
        // - Social buttons background (on hover)
        
        // ========== TEXT COLORS ==========
        textPrimary: "#ffffff",
        // What it changes:
        // - Profile name (heading)
        // - Link button text
        // - Main text content
        
        textSecondary: "#a5b4fc",
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
