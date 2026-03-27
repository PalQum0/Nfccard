// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: " د. فادي ابو فضة",
        title: "طب وجراحة الأنف والأذن والحنجرة",
        bio: "",
        image: "https://palqum.com/nfclogos/drfadilogo.png"
    },

    // ==================== CONTACT INFO FOR vCard ====================
    // Used for "Add to Contacts" button
    contact: {
        enabled: true,  // Set to false to hide the button
        phone: "‪+972599041233‬",
        email: "",  // Optional
        website: "",  // Optional
        address: "بيت لحم، السينما، عمارة فريج الطابق الثاني، مقابل شركة الكهرباء",  // Optional: "123 Street, City, Country"
        organization: "عيادة الدكتور فادي ابو فضة",  // Optional
        notes: ""  // Optional
    },

    // ==================== MAIN LINKS ====================
    // Set enabled: false to hide any link
    links: [
        {
            enabled: true,
            icon: "whatsapp",
            text: "WhatsApp",
            url: "https://wa.me/972599041233"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+972599041233"
        },
        {
            enabled: true,
            icon: "phone",
            text: "العيادة",
            url: "tel:+022749887"
        },
        {
            enabled: true,
            icon: "website",
            text: "Website",
            url: "https://clinic.atharalfarasha.com/"
        },
        {
            enabled: true,
            icon: "location",
            text: "Location",
            url: "https://maps.app.goo.gl/u3MZsPs92aygqSY48?g_st=ic"
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
            url: "https://www.facebook.com/share/1AjSRSPQ6A/?mibextid=wwXIfr"
        },
        instagram: {
            enabled: false,
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
        
        bgCard: "rgba(30, 30, 30, 0.35)",
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
