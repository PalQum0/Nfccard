// ==================== CONFIGURATION FILE ====================
// Edit this file to customize your profile card
// Set enabled: false to hide any link or social media

console.log('config.js is loading...');

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Ibrahim Qumsieh",
        title: "",
        bio: "-",
        image: "https://palqum.com/nfclogos/ibrahimqum.jpeg"
    },

    // ==================== CONTACT INFO FOR vCard ====================
    // Used for "Add to Contacts" button
    contact: {
        enabled: true,  // Set to false to hide the button
        phone: "+970598591755",
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
            url: "https://wa.me/970598591755"
        },
        {
            enabled: true,
            icon: "phone",
            text: "Call Me",
            url: "tel:+970598591755"
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
            url: ""
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
            url: ""
        },
        instagram: {
            enabled: false,
            url: ""
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
        // ========== PRIMARY COLORS ==========
        primaryColor: "#5B23FF",
        // What it changes:
        // - Profile image border glow
        // - Background top gradient
        // - Footer "PalQum" link color
        // - Floating shape 1 (top)
        
        primaryGlowColor: "#A8C1E8",  // Auto-calculated if not provided
        // What it changes:
        // - Lighter version of primary for hover effects
        // - Profile image hover glow (brighter)
        
        secondaryColor: "#E4FF30",
        // What it changes:
        // - Floating shape 3 (left side)
        // - Secondary accent elements
        
        accentColor: "#75B23FF",
        // What it changes:
        // - Background bottom gradient
        // - Floating shape 2 (bottom right)
        
        // ========== BACKGROUND COLORS ==========
        bgDark: "#5B23FF",
        // What it changes:
        // - Main page background color
        
        bgCard: "#362F4F",
        // What it changes:
        // - Profile card background
        // - Main container background
        
        cardBorder: "rgba(255, 255, 255, 0.05)",
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
