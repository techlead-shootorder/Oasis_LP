// app/api/owntracks/route.js
import { NextResponse } from 'next/server';

// In-memory storage for location updates (use a database in production)
let locationUpdates = {};

export async function POST(request) {
  try {
    const data = await request.json();
    
    // OwnTracks sends data in a specific format
    // Store the location data with the user's device ID as the key
    const deviceId = data._type === 'location' ? data.tid || data.device : 'unknown';
    
    locationUpdates[deviceId] = {
      lat: data.lat,
      lon: data.lon,
      timestamp: data.tst || Date.now()/1000,
      accuracy: data.acc || 0,
      battery: data.batt || 0,
      speed: data.vel || 0,
      lastUpdated: new Date().toISOString()
    };
    
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error processing OwnTracks data:', error);
    return NextResponse.json({ error: 'Failed to process location data' }, { status: 500 });
  }
}

export async function GET() {
  // Return all stored location updates
  return NextResponse.json(locationUpdates);
}