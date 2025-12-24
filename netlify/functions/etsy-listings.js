// Netlify Serverless Function to fetch Etsy shop listings
// Environment variable ETSY_API_KEY must be set in Netlify dashboard

export default async (req, context) => {
  // CORS headers for browser requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  const ETSY_API_KEY = Netlify.env.get('ETSY_API_KEY');
  const SHOP_ID = 'WildFacesStudio';

  if (!ETSY_API_KEY) {
    return new Response(
      JSON.stringify({ 
        error: 'Etsy API key not configured',
        message: 'Please add ETSY_API_KEY to your Netlify environment variables'
      }),
      { status: 500, headers }
    );
  }

  try {
    // Fetch active listings from Etsy API v3
    const response = await fetch(
      `https://openapi.etsy.com/v3/application/shops/${SHOP_ID}/listings/active?includes=Images`,
      {
        headers: {
          'x-api-key': ETSY_API_KEY
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Etsy API error:', response.status, errorText);
      
      return new Response(
        JSON.stringify({ 
          error: 'Failed to fetch from Etsy',
          status: response.status,
          message: errorText
        }),
        { status: response.status, headers }
      );
    }

    const data = await response.json();

    // Transform the data to only include what we need
    const listings = data.results?.map(listing => ({
      id: listing.listing_id,
      title: listing.title,
      description: listing.description?.substring(0, 200) + '...',
      price: {
        amount: listing.price.amount,
        divisor: listing.price.divisor,
        currency: listing.price.currency_code
      },
      url: listing.url,
      images: listing.images?.map(img => ({
        url_75x75: img.url_75x75,
        url_170x135: img.url_170x135,
        url_570xN: img.url_570xN,
        url_fullxfull: img.url_fullxfull
      })) || []
    })) || [];

    return new Response(
      JSON.stringify({ 
        success: true,
        count: listings.length,
        results: listings 
      }),
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Function error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
      { status: 500, headers }
    );
  }
};
