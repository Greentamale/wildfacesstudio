# Wild Faces Studio Website

A magical, cosmic-themed landing page for the Wild Faces Studio Etsy shop - handcrafted animal masks & wearable art.

## 🌟 Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Cosmic Aesthetic**: Matches the ethereal blue/purple/pink brand colors with gold stardust accents
- **Live Etsy Integration**: Automatically displays current listings via serverless function
- **Past Creations Gallery**: Showcase of 15 sold masks as marketing/portfolio
- **FAQ Section**: Accordion-style frequently asked questions
- **Smooth Animations**: Floating logo, twinkling stars, hover effects

## 📁 File Structure

```
wildfacesstudio/
├── index.html              # Main website file
├── logo.png                # Cosmic cat logo
├── about-photo.jpg         # Photo of the artist (add this!)
├── netlify.toml            # Netlify configuration
├── netlify/
│   └── functions/
│       └── etsy-listings.js  # Serverless function for Etsy API
├── gallery/                # 15 mask images
│   ├── cosmic-black-cat.jpg
│   ├── fantasy-wildcat.jpg
│   ├── ice-feline.jpg
│   └── ... (12 more)
└── README.md
```

## 🚀 Deployment to Netlify (Recommended)

### Step 1: Push to GitHub

1. Create a new GitHub repository called `wildfacesstudio`
2. Upload all these files to the repository

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select the `wildfacesstudio` repo
4. Leave build settings as default (Netlify auto-detects from `netlify.toml`)
5. Click "Deploy site"

### Step 3: Get Your Etsy API Key

1. Go to [etsy.com/developers](https://www.etsy.com/developers/)
2. Click "Create a new app"
3. Fill in:
   - **App Name**: Wild Faces Studio Website
   - **Description**: Display shop listings on website
4. Copy your **Keystring** (this is your API key)

### Step 4: Add API Key to Netlify

1. In Netlify dashboard, go to **Site settings** → **Environment variables**
2. Click "Add a variable"
3. Set:
   - **Key**: `ETSY_API_KEY`
   - **Value**: *(paste your Etsy Keystring)*
4. Click "Save"
5. Go to **Deploys** → **Trigger deploy** → **Deploy site**

### Step 5: Add Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Click "Add custom domain"
3. Enter `wildfacesstudio.com`
4. Follow instructions to update your DNS settings

🎉 **Done!** Your site will now automatically show current Etsy listings.

## 🔧 How the Etsy Integration Works

```
[Visitor loads page]
        ↓
[Browser calls /api/etsy-listings]
        ↓
[Netlify serverless function runs]
        ↓
[Function fetches from Etsy API using your secret key]
        ↓
[Returns listing data to browser]
        ↓
[Page displays current masks for sale]
```

**Security**: Your Etsy API key stays secret in Netlify's environment variables - it's never exposed in your code or to visitors.

## 🖼️ Adding/Updating Gallery Images

The gallery shows past creations (sold masks). To update:

1. Add new images to the `gallery/` folder
2. Edit the `galleryData` array in `index.html`:

```javascript
const galleryData = [
    {
        title: "Your Mask Name",
        description: "Short poetic description",
        image: "gallery/your-mask.jpg",
        status: "Sold"
    },
    // ... more items
];
```

3. Commit and push to GitHub - Netlify auto-deploys!

## ✏️ Customization

### Changing Colors
Edit the CSS variables at the top of `index.html`:

```css
:root {
    --cosmic-deep: #2D2A6E;      /* Dark purple-blue background */
    --nebula-pink: #E891B9;       /* Pink accents */
    --ethereal-blue: #7EB6FF;     /* Light blue */
    --stardust-gold: #D4AF37;     /* Gold accents */
}
```

### Updating the About Section
Find the `.about-text` section in HTML and edit the paragraphs. Add `about-photo.jpg` to the root folder.

### Social Links
Update the YouTube URL in the footer (already set to the correct channel).

## 🛠️ Local Development

To test locally before deploying:

1. Install [Netlify CLI](https://docs.netlify.com/cli/get-started/):
   ```bash
   npm install -g netlify-cli
   ```

2. Run local dev server:
   ```bash
   netlify dev
   ```

3. Open http://localhost:8888

Note: Etsy API calls won't work locally unless you set up a `.env` file with your API key.

## 📊 Monitoring

Netlify provides:
- **Analytics**: See visitor counts (paid feature, but basic stats are free)
- **Function logs**: Site settings → Functions → View function logs
- **Deploy notifications**: Get notified when deploys succeed/fail

## 🔄 Updating the Site

After initial setup, updating is easy:

1. Edit files locally or in GitHub
2. Commit and push
3. Netlify automatically rebuilds and deploys (usually takes ~30 seconds)

## 💡 Future Enhancements

Ideas for later:
- [ ] Email newsletter signup (Mailchimp integration)
- [ ] Instagram feed integration  
- [ ] Blog/process updates section
- [ ] Customer reviews carousel
- [ ] Commission request form

---

Made with ✨ magic ✨ for Wild Faces Studio
