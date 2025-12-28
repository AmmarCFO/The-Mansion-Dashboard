import { Scenario, ScenarioType, MarketingVideo, Branch, ComparisonLink } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'study_a',
    type: ScenarioType.LONG_TERM,
    name: 'Study A: Apartments',
    color: '#2A5B64', // Teal
    description: 'Analysis for 25 units comprising 22 One-Bedroom and 3 Two-Bedroom apartments. Prices reflect annual leasing rates. Model Strategy: High End Executive Living - Minimum 6 months to 12 months contracts - Monthly payments allowed.',
    
    financials: {
        worst: {
            revenue: 1942355, 
            mabaatShare: 1942355 * 0.15, 
            netIncome: 1942355 * 0.85, 
            roi: 11.6 // Derived or placeholder
        },
        base: {
            revenue: 2631528,
            mabaatShare: 2631528 * 0.15, 
            netIncome: 2631528 * 0.85, 
            roi: 15.8
        },
        best: {
            revenue: 3320700,
            mabaatShare: 3320700 * 0.15, 
            netIncome: 3320700 * 0.85, 
            roi: 19.9
        }
    },

    propertyValue: 15000000, // Placeholder
    
    unitCount: 25,
    unitLabel: 'Units',
    occupancyDurationLabel: 'Annual Leasing',
    
    unitMix: [
        { 
            name: '1 Bedroom Apartment', 
            count: 22, 
            avgPrice: 105264, // 8,772 * 12
            priceRange: { min: 77700, avg: 105264, max: 132828 }, // Monthly * 12
        },
        { 
            name: '2 Bedroom Apartment', 
            count: 3, 
            avgPrice: 105264, // Based on CSV data (same as 1Bd)
            priceRange: { min: 77700, avg: 105264, max: 132828 },
        }
    ],
  },
  {
    id: 'study_b',
    type: ScenarioType.LONG_TERM,
    name: 'Study B: Townhouses',
    color: '#8A6E99', // Purple
    description: 'Analysis for 49 Three-Bedroom Townhouses. Model strategy: Women-only co-living - each bedroom will be rented out as a Master room. Price per Master room: Conservative case: SAR 3,590 per room | Realistic Case: SAR 4,286 per room | Best case: SAR 4,974 per room',
    
    financials: {
        worst: {
            revenue: 6332760, // CSV Value
            mabaatShare: 6332760 * 0.15,
            netIncome: 6332760 * 0.85, 
            roi: 10.8
        },
        base: {
            revenue: 7559916, // CSV Value
            mabaatShare: 7559916 * 0.15,
            netIncome: 7559916 * 0.85,
            roi: 12.9
        },
        best: {
            revenue: 8774217, // CSV Value
            mabaatShare: 8774217 * 0.15,
            netIncome: 8774217 * 0.85,
            roi: 14.9
        }
    },

    propertyValue: 50000000, // Placeholder
    
    unitCount: 49,
    unitLabel: 'Townhouses',
    occupancyDurationLabel: 'Annual Leasing',
    
    unitMix: [
        { 
            name: '3BR Townhouse', 
            count: 49, 
            avgPrice: 154284, // 12,857 * 12
            priceRange: { min: 129240, avg: 154284, max: 179064 },
        }
    ],
  }
];

export const MARKETING_VIDEOS: MarketingVideo[] = [
    {
        id: 'v1',
        title: 'Community Overview',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        videoUrl: '#',
    },
    {
        id: 'v2',
        title: 'Townhouse Interior',
        thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        videoUrl: '#',
    }
];

export const COMPARISON_LINKS: Record<string, ComparisonLink[]> = {
  study_a: [
    // Bayut Listings
    { platform: 'Bayut', title: '1Bd in Al Arid - 5,000 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87755689.html' },
    { platform: 'Bayut', title: '1Bd in Al Arid (North) - 6,000 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87623201.html' },
    { platform: 'Bayut', title: 'Luxury Units - 6,250 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87786764.html' },
    { platform: 'Bayut', title: 'Furnished Apt - 5,200 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87748923.html' },
    { platform: 'Bayut', title: 'North Riyadh Apt - 4,500 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87693363.html' },
    { platform: 'Bayut', title: 'Modern Apt B999 - 6,250 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87845269.html' },
    
    // Aqar Listings
    { platform: 'Aqar', title: 'Unfurnished Al Katib St - 6,667 SAR/mo', url: 'https://sa.aqar.fm/ad/6405378' },
    
    // Airbnb Listings (Monthly Estimates)
    { platform: 'Airbnb', title: 'Hotel-style furnishings - 6,455 SAR/mo', url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' },
    { platform: 'Airbnb', title: 'Modern 1BR 4K TV - 9,716 SAR/mo', url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' },
    { platform: 'Airbnb', title: 'Cozy Stay CS-1 - 9,468 SAR/mo', url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' },
    { platform: 'Airbnb', title: 'Elegant Apt 101 - 7,972 SAR/mo', url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' },
    
    // Compounds
    { platform: 'Compound', title: 'Azure Rabwah 1BR - 94,864 SAR/yr', url: 'https://azurerabwah.com' },
    { platform: 'Compound', title: 'Azure AlReem 1BR - 99,000 SAR/yr', url: 'https://www.google.com/search?q=Azure+AlReem+Compound+Riyadh' },
    { platform: 'Compound', title: 'Azure Hittin 1BR - 132,825 SAR/yr', url: 'https://www.google.com/search?q=Azure+Hittin+Residential+Compound' },
  ],
  study_b: [
     // Bayut Listings
     { platform: 'Bayut', title: 'Townhouse for Rent - 7,250 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87828091.html' },
     { platform: 'Bayut', title: 'Furnished 3BR Al Arid - 7,500 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87842870.html' },
     { platform: 'Bayut', title: 'Al Majdiah Residence 3BR - 7,333 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87748182.html' },
     { platform: 'Bayut', title: 'Makeen Compound 3BR - 9,583 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87690281.html' },
     { platform: 'Bayut', title: 'Luxury 3BR North Riyadh - 11,667 SAR/mo', url: 'https://www.bayut.sa/ar/property/details-87832185.html' },
     
     // Airbnb Listings
     { platform: 'Airbnb', title: 'Spacious Miemar Residence - 20,109 SAR/mo', url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' },
     { platform: 'Airbnb', title: 'Luxury 3BR w/ Terrace - 17,965 SAR/mo', url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' },
     { platform: 'Airbnb', title: 'Luxury Ground Floor 3BR - 20,030 SAR/mo', url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' },
     
     // Compound Listings
     { platform: 'Compound', title: 'Azure Rabwah 3BR Duplex - 142,296 SAR/yr', url: 'https://azurerabwah.com' },
     { platform: 'Compound', title: 'Azure Asala Townhouse - 135,000 SAR/yr', url: 'https://www.google.com/search?q=Azure+Asala+Compound+Riyadh' },
     { platform: 'Compound', title: 'Azure Narjis 3BR - 165,000 SAR/yr', url: 'https://www.google.com/search?q=Azure+Narjis+Residential+Complex' },
  ]
};

export const MABAAT_SHARE_PERCENTAGE = 0.15; // Updated to 15% as per CSV
export const BRANCHES: Branch[] = [];