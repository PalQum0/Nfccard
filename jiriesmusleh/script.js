// ==================== ICONS LIBRARY ====================
const ICONS = {
    whatsapp: `<svg viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/></svg>`,

    phone: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="#000000"/></svg>`,

    email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#D44638"/></svg>`,

    website: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#1A73E8"/></svg>`,

    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#69C9D0"/></svg>`,

    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#E4405F"/></svg>`,
    
    contact: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="#4CAF50"/></svg>`,
    
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/></svg>`
};


// Social Media Icons
const SOCIAL_ICONS = {
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/></svg>`,

    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#E4405F"/></svg>`,

    twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#1DA1F2"/></svg>`,

    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/></svg>`,

    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#181717"/></svg>`,

    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000"/></svg>`,

    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="#69C9D0"/></svg>`,
    
    snapchat: `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="#dfff00" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.959.324 2.589.24 3.898l-.002.047c-.011.146-.018.278-.024.41a.6.6 0 0 0 .322.072c.241-.013.53-.096.831-.241a.8.8 0 0 1 .373-.084c.146 0 .289.023.409.072.361.12.59.385.59.674q.019.542-.975.939c-.071.023-.169.061-.276.096-.363.109-.917.289-1.073.651-.072.181-.049.421.098.697l.012.013c.048.109 1.228 2.795 3.854 3.229a.4.4 0 0 1 .337.409q0 .089-.036.181c-.193.457-1.023.795-2.53 1.021-.047.073-.096.302-.132.459-.022.144-.06.289-.107.444-.061.218-.217.325-.446.325h-.024a2.5 2.5 0 0 1-.433-.059 4.8 4.8 0 0 0-1.024-.108c-.24 0-.48.012-.732.06-.483.084-.904.373-1.386.71-.687.481-1.469 1.036-2.649 1.036-.048 0-.096-.012-.146-.012h-.119c-1.181 0-1.951-.543-2.637-1.036-.481-.338-.89-.626-1.373-.711a5.5 5.5 0 0 0-.745-.06c-.435 0-.771.072-1.023.12-.17.035-.314.059-.435.059a.45.45 0 0 1-.47-.337c-.048-.154-.071-.313-.107-.456-.038-.146-.085-.396-.133-.458-1.543-.179-2.373-.517-2.565-.986a.5.5 0 0 1-.044-.181.4.4 0 0 1 .337-.409c2.625-.434 3.805-3.119 3.854-3.232l.013-.023c.145-.277.18-.52.096-.699-.156-.349-.711-.529-1.07-.65a2 2 0 0 1-.279-.096c-.89-.35-1.011-.748-.962-1.024.072-.384.541-.637.939-.637.117 0 .217.023.308.06.337.155.635.241.888.241a.74.74 0 0 0 .373-.085l-.041-.458c-.08-1.307-.182-2.935.247-3.889 1.236-2.836 3.929-3.054 4.724-3.054L12.117 3z"/>
</svg>`
};

// ==================== MAIN INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    console.log('CONFIG object:', CONFIG);
    
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG is not defined! Make sure config.js is loaded before script.js');
        return;
    }
    
    initializeProfile();
    initializeLinks();
    initializeAddToContactsButton();
    initializeSocialLinks();
    applyTheme();
});

// ==================== PROFILE INITIALIZATION ====================
function initializeProfile() {
    console.log('Initializing profile...');
    const { name, title, bio, image } = CONFIG.profile;
    
    console.log('Profile data:', { name, title, bio, image });
    
    // Set profile information
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileTitle').textContent = title;
    document.getElementById('profileBio').textContent = bio;
    
    // Set profile image
    const profileImage = document.getElementById('profileImage');
    profileImage.src = image;
    profileImage.alt = name;
    
    // Update page title
    document.title = `${name} - Profile Card`;
    
    console.log('Profile initialized successfully');
}

// ==================== LINKS INITIALIZATION ====================
function initializeLinks() {
    const linksContainer = document.getElementById('linksContainer');
    linksContainer.innerHTML = ''; // Clear existing links
    
    // Filter only enabled links
    const enabledLinks = CONFIG.links.filter(link => link.enabled === true);
    
    // Create each link
    enabledLinks.forEach((link, index) => {
        const linkElement = createLinkElement(link);
        linksContainer.appendChild(linkElement);
    });
    
    // If no links are enabled, show a message
    if (enabledLinks.length === 0) {
        linksContainer.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No links available</p>';
    }
}

// ==================== CREATE LINK ELEMENT ====================
function createLinkElement(link) {
    const a = document.createElement('a');
    a.className = 'link-item';
    
    // Check if this is the vCard link
    if (link.isVCard) {
        a.href = '#';
        a.addEventListener('click', function(e) {
            e.preventDefault();
            downloadVCard();
        });
    } else {
        a.href = link.url;
        // Open external links in new tab
        if (link.url.startsWith('http')) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        
        // Add click tracking (optional)
        a.addEventListener('click', function() {
            console.log('Link clicked:', link.text, link.url);
        });
    }
    
    // Get icon
    const iconSVG = ICONS[link.icon] || ICONS.link;
    
    // Create link content
    a.innerHTML = `
        <span class="link-icon">${iconSVG}</span>
        <span class="link-text">${link.text}</span>
    `;
    
    return a;
}

// ==================== SOCIAL LINKS INITIALIZATION ====================
function initializeSocialLinks() {
    const socialContainer = document.getElementById('socialLinks');
    socialContainer.innerHTML = ''; // Clear existing social links
    
    // Filter only enabled social links
    const enabledSocial = Object.entries(CONFIG.social)
        .filter(([platform, data]) => data.enabled === true);
    
    // Create each social link
    enabledSocial.forEach(([platform, data]) => {
        const socialElement = createSocialElement(platform, data);
        socialContainer.appendChild(socialElement);
    });
    
    // Hide social section if no links are enabled
    if (enabledSocial.length === 0) {
        socialContainer.style.display = 'none';
    }
}

// ==================== ADD TO CONTACTS BUTTON ====================
function initializeAddToContactsButton() {
    // Check if contact feature is enabled
    if (!CONFIG.contact || !CONFIG.contact.enabled) {
        return;
    }
    
    const linksContainer = document.getElementById('linksContainer');
    
    // Create "Add to Contacts" button as a special link
    const contactLink = {
        enabled: true,
        icon: 'contact',
        text: 'Add to Contacts',
        url: '#',
        isVCard: true
    };
    
    const contactElement = createLinkElement(contactLink);
    
    // Add to the beginning of links
    linksContainer.insertBefore(contactElement, linksContainer.firstChild);
}

// ==================== GENERATE vCard ====================
function generateVCard() {
    const { name, title } = CONFIG.profile;
    const { phone, email, website, address, organization, notes } = CONFIG.contact;
    
    // Format name (Last name, First name)
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    // Build vCard (version 3.0 for best compatibility)
    let vcard = 'BEGIN:VCARD\n';
    vcard += 'VERSION:3.0\n';
    vcard += `FN:${name}\n`;
    vcard += `N:${lastName};${firstName};;;\n`;
    
    if (title) {
        vcard += `TITLE:${title}\n`;
    }
    
    if (organization) {
        vcard += `ORG:${organization}\n`;
    }
    
    if (phone) {
        // Remove spaces and format phone number
        const cleanPhone = phone.replace(/\s+/g, '');
        vcard += `TEL;TYPE=CELL:${cleanPhone}\n`;
    }
    
    if (email) {
        vcard += `EMAIL:${email}\n`;
    }
    
    if (website) {
        vcard += `URL:${website}\n`;
    }
    
    if (address) {
        vcard += `ADR;TYPE=WORK:;;${address};;;;\n`;
    }
    
    if (notes) {
        vcard += `NOTE:${notes}\n`;
    }
    
    vcard += 'END:VCARD';
    
    return vcard;
}

// ==================== DOWNLOAD vCard ====================
function downloadVCard() {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    
    // Create filename from name
    const fileName = CONFIG.profile.name.replace(/\s+/g, '_') + '.vcf';
    
    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    console.log('vCard downloaded:', fileName);
}

// ==================== CREATE SOCIAL ELEMENT ====================
function createSocialElement(platform, data) {
    const a = document.createElement('a');
    a.href = data.url;
    a.className = 'social-link';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.title = capitalizeFirstLetter(platform);
    
    // Get icon
    const iconSVG = SOCIAL_ICONS[platform] || SOCIAL_ICONS.link;
    
    // Create social link content
    a.innerHTML = `<span class="social-icon">${iconSVG}</span>`;
    
    // Add click tracking (optional)
    a.addEventListener('click', function() {
        console.log('Social link clicked:', platform, data.url);
        // You can add analytics tracking here
    });
    
    return a;
}

// ==================== THEME APPLICATION ====================
function applyTheme() {
    console.log('Applying theme...', CONFIG.theme);
    
    if (CONFIG.theme) {
        const root = document.documentElement;
        
        // ========== PRIMARY COLORS ==========
        if (CONFIG.theme.primaryColor) {
            const primary = CONFIG.theme.primaryColor;
            console.log('Setting primary color:', primary);
            root.style.setProperty('--primary', primary);
            
            // Use custom primaryGlowColor or calculate it
            const primaryGlow = CONFIG.theme.primaryGlowColor || lightenColor(primary, 20);
            console.log('Setting primary-glow:', primaryGlow);
            root.style.setProperty('--primary-glow', primaryGlow);
            
            // Update glow effect with primary color
            const primaryRGB = hexToRgb(primary);
            if (primaryRGB) {
                const glowValue = `0 0 60px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.4)`;
                console.log('Setting glow:', glowValue);
                root.style.setProperty('--glow', glowValue);
            }
        }
        
        if (CONFIG.theme.secondaryColor) {
            console.log('Setting secondary color:', CONFIG.theme.secondaryColor);
            root.style.setProperty('--secondary', CONFIG.theme.secondaryColor);
        }
        
        if (CONFIG.theme.accentColor) {
            console.log('Setting accent color:', CONFIG.theme.accentColor);
            root.style.setProperty('--accent', CONFIG.theme.accentColor);
        }
        
        // ========== BACKGROUND COLORS ==========
        if (CONFIG.theme.bgDark) {
            console.log('Setting bg-dark:', CONFIG.theme.bgDark);
            root.style.setProperty('--bg-dark', CONFIG.theme.bgDark);
        }
        
        if (CONFIG.theme.bgCard) {
            console.log('Setting bg-card:', CONFIG.theme.bgCard);
            root.style.setProperty('--bg-card', CONFIG.theme.bgCard);
        }
        
        if (CONFIG.theme.cardBorder) {
            console.log('Setting card-border:', CONFIG.theme.cardBorder);
            root.style.setProperty('--card-border', CONFIG.theme.cardBorder);
        }
        
        // ========== BUTTON COLORS ==========
        if (CONFIG.theme.buttonBg) {
            console.log('Setting button-bg:', CONFIG.theme.buttonBg);
            root.style.setProperty('--button-bg', CONFIG.theme.buttonBg);
        }
        
        if (CONFIG.theme.buttonHover) {
            console.log('Setting button-hover:', CONFIG.theme.buttonHover);
            root.style.setProperty('--button-hover', CONFIG.theme.buttonHover);
        }
        
        // ========== TEXT COLORS ==========
        if (CONFIG.theme.textPrimary) {
            console.log('Setting text-primary:', CONFIG.theme.textPrimary);
            root.style.setProperty('--text-primary', CONFIG.theme.textPrimary);
        }
        
        if (CONFIG.theme.textSecondary) {
            console.log('Setting text-secondary:', CONFIG.theme.textSecondary);
            root.style.setProperty('--text-secondary', CONFIG.theme.textSecondary);
        }
        
        if (CONFIG.theme.textMuted) {
            console.log('Setting text-muted:', CONFIG.theme.textMuted);
            root.style.setProperty('--text-muted', CONFIG.theme.textMuted);
        }
        
        console.log('Theme applied successfully!');
    }
}

// ==================== COLOR UTILITY FUNCTIONS ====================
function hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
}

function lightenColor(hex, percent) {
    const rgb = hexToRgb(hex);
    
    // Increase each color component
    const r = Math.min(255, Math.floor(rgb.r + (255 - rgb.r) * (percent / 100)));
    const g = Math.min(255, Math.floor(rgb.g + (255 - rgb.g) * (percent / 100)));
    const b = Math.min(255, Math.floor(rgb.b + (255 - rgb.b) * (percent / 100)));
    
    // Convert back to hex
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// ==================== HELPER FUNCTIONS ====================
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ==================== ANALYTICS (OPTIONAL) ====================
// You can add Google Analytics, Facebook Pixel, or other tracking here
// Example:
/*
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}
*/
