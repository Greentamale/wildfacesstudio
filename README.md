# Wild Faces Studio Website

A magical, cosmic-themed landing page for the Wild Faces Studio Etsy shop - handcrafted animal masks & wearable art.

## 🌟 Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Cosmic Aesthetic**: Matches the ethereal blue/purple/pink brand colors with gold stardust accents
- **Dynamic Etsy Integration**: Can pull current listings directly from Etsy (requires API setup)
- **Past Creations Gallery**: Showcase sold masks as marketing/portfolio
- **FAQ Section**: Accordion-style frequently asked questions
- **Smooth Animations**: Floating logo, twinkling stars, hover effects

## 📁 File Structure

```
wildfacesstudio/
├── index.html          # Main website file
├── logo.png            # Your cosmic cat logo
├── about-photo.jpg     # Photo of the artist (add this!)
├── gallery/            # Folder for past creation images
│   ├── arctic-wolf.jpg
│   ├── rustic-fox.jpg
│   ├── fennec-fox.jpg
│   ├── snow-leopard.jpg
│   ├── winter-wolf.jpg
│   └── tabby-lynx.jpg
└── README.md           # This file
```

## 🚀 Quick Start (No API)

1. Add your images to the `gallery/` folder
2. Update the `galleryData` array in index.html with your mask info
3. Add an `about-photo.jpg` for the About section
4. Upload everything to your web hosting
5. Point wildfacesstudio.com to your hosting

The site works perfectly without the Etsy API - it will show a nice "Visit our Etsy shop" button instead of live listings.

## 🔧 Setting Up Etsy API Integration

For live listings to appear automatically:

### Step 1: Get Etsy API Access

1. Go to https://www.etsy.com/developers/
2. Click "Create a new app"
3. Fill in the app details:
   - App Name: "Wild Faces Studio Website"
   - Description: "Display shop listings on our website"
4. Note your **API Key** (also called Keystring)

### Step 2: Backend Setup Required

Etsy API v3 requires OAuth 2.0 and **server-side requests** (it won't work directly from browser JavaScript for security reasons). You'll need one of these options:

#### Option A: Serverless Function (Recommended)
Use Vercel, Netlify, or Cloudflare Workers to create a simple API endpoint:

```javascript
// Example: /api/etsy-listings.js (Vercel)
export default async function handler(req, res) {
  const response = await fetch(
    `https://openapi.etsy.com/v3/application/shops/WildFacesStudio/listings/active`,
    {
      headers: {
        'x-api-key': process.env.ETSY_API_KEY
      }
    }
  );
  const data = await response.json();
  res.json(data);
}
```

#### Option B: Simple Backend
Use a small Node.js/Express server or similar.

### Step 3: Update the Website

In `index.html`, find the `ETSY_CONFIG` section and set:

```javascript
const ETSY_CONFIG = {
    API_KEY: 'your-api-key', // Only needed if calling directly
    SHOP_ID: 'WildFacesStudio',
    ENABLED: true  // Set to true
};
```

Update the `loadEtsyListings()` function to call your backend endpoint.

## 🖼️ Adding Gallery Images

1. Take photos of your masks (good lighting, clean background)
2. Resize to approximately 800x1000 pixels (4:5 ratio works well)
3. Name them to match the `galleryData` array entries
4. Place in the `gallery/` folder

To add new gallery items, edit the `galleryData` array:

```javascript
const galleryData = [
    {
        title: "Your Mask Name",
        description: "Short poetic description",
        image: "gallery/your-mask.jpg",
        status: "Sold"  // or "Available" or "Commission"
    },
    // ... more items
];
```

## ✏️ Customization

### Changing Colors
Edit the CSS variables at the top of the `<style>` section:

```css
:root {
    --cosmic-deep: #2D2A6E;      /* Dark purple-blue background */
    --nebula-pink: #E891B9;       /* Pink accents */
    --ethereal-blue: #7EB6FF;     /* Light blue */
    --stardust-gold: #D4AF37;     /* Gold accents */
}
```

### Updating the About Section
Find the `.about-text` section in the HTML and edit the paragraphs. Add your daughter's story!

### Adding Social Links
Find the YouTube link in the footer and update the `href`:

```html
<a href="https://youtube.com/@YourChannel" target="_blank" ...>
```

### Tagline Ideas
The current tagline is:
> "Handcrafted animal masks that transform you into the creature you were always meant to be"

Other options to consider:
- "Where imagination takes form"
- "Unleash your wild side"
- "Become the creature within"
- "Handcrafted magic, one mask at a time"
- "Your transformation awaits"

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Use a custom domain (wildfacesstudio.com)

### Netlify (Free tier available)
1. Drag and drop your folder to netlify.com
2. Get instant deployment
3. Add custom domain

### Vercel (Free tier available)
1. Connect GitHub repo
2. Automatic deployments on push
3. Good for adding serverless API routes

## 📱 Mobile Testing

The site is fully responsive. Test on:
- iPhone (Safari)
- Android (Chrome)
- Tablet sizes
- Desktop (various widths)

## 💡 Future Enhancements

Ideas for later:
- [ ] Email newsletter signup (Mailchimp integration)
- [ ] Instagram feed integration
- [ ] Blog/process updates section
- [ ] Customer reviews carousel
- [ ] 360° mask viewer
- [ ] Commission request form

---

Made with ✨ magic ✨ for Wild Faces Studio
