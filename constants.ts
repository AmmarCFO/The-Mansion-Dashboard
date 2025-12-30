
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
            revenue: 1734000, 
            mabaatShare: 1734000 * 0.15, 
            netIncome: 1734000 * 0.85, 
            roi: 11.6 // Derived or placeholder
        },
        base: {
            revenue: 1942500,
            mabaatShare: 1942500 * 0.15, 
            netIncome: 1942500 * 0.85, 
            roi: 12.9
        },
        best: {
            revenue: 2150700,
            mabaatShare: 2150700 * 0.15, 
            netIncome: 2150700 * 0.85, 
            roi: 14.3
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
            avgPrice: 77700, // 6,475 * 12
            priceRange: { min: 69360, avg: 77700, max: 86028 }, // 5,780*12 to 7,169*12
        },
        { 
            name: '2 Bedroom Apartment', 
            count: 3, 
            avgPrice: 77700, // Same as 1Bd per CSV
            priceRange: { min: 69360, avg: 77700, max: 86028 },
        }
    ],
  },
  {
    id: 'study_b',
    type: ScenarioType.LONG_TERM,
    name: 'Study B: Co-living',
    color: '#8A6E99', // Purple
    description: 'Co-living model analysis for 49 Townhouses. Each townhouse contains 3 Master Bedrooms rented individually. Total inventory: 147 Master Rooms. Pricing is per room. Monthly Rates: Conservative (3,200 SAR), Realistic (3,500 SAR), Optimistic (3,900 SAR).',
    
    financials: {
        worst: {
            // Conservative: 470,400 Monthly * 12
            revenue: 5644800, 
            mabaatShare: 5644800 * 0.15,
            netIncome: 5644800 * 0.85, 
            roi: 9.6
        },
        base: {
            // Realistic: 514,500 Monthly * 12
            revenue: 6174000, 
            mabaatShare: 6174000 * 0.15,
            netIncome: 6174000 * 0.85,
            roi: 10.5
        },
        best: {
            // Optimistic: 573,300 Monthly * 12
            revenue: 6879600, 
            mabaatShare: 6879600 * 0.15,
            netIncome: 6879600 * 0.85,
            roi: 11.7
        }
    },

    propertyValue: 50000000, // Placeholder
    
    unitCount: 147, // 49 Townhouses * 3 Rooms
    unitLabel: 'Master Rooms',
    occupancyDurationLabel: 'Annual Contracts',
    
    unitMix: [
        { 
            name: 'Master Room (Co-living)', 
            count: 147, 
            avgPrice: 42000, // 3,500 * 12
            priceRange: { min: 38400, avg: 42000, max: 46800 }, // 3200*12 to 3900*12
        }
    ],
  },
  {
    id: 'study_c',
    type: ScenarioType.LONG_TERM,
    name: 'Study C: Co-living Plus',
    color: '#C98B8B', // Muted Red/Terra Cotta
    description: 'Enhanced Co-living model maximizing density. 49 Townhouses converted to 4-bedroom units (3 Master + 1 Single). Total inventory: 196 Rooms. Single rooms priced at fixed SAR 2,900/mo across all cases.',
    
    financials: {
        worst: {
            // Master: 3200*147*12 = 5,644,800 | Single: 2900*49*12 = 1,705,200
            revenue: 7350000, 
            mabaatShare: 7350000 * 0.15,
            netIncome: 7350000 * 0.85, 
            roi: 12.5
        },
        base: {
            // Master: 3500*147*12 = 6,174,000 | Single: 2900*49*12 = 1,705,200
            revenue: 7879200, 
            mabaatShare: 7879200 * 0.15,
            netIncome: 7879200 * 0.85,
            roi: 13.4
        },
        best: {
            // Master: 3900*147*12 = 6,879,600 | Single: 2900*49*12 = 1,705,200
            revenue: 8584800, 
            mabaatShare: 8584800 * 0.15,
            netIncome: 8584800 * 0.85,
            roi: 14.6
        }
    },

    propertyValue: 50000000, 
    
    unitCount: 196, // 147 Master + 49 Single
    unitLabel: 'Rooms',
    occupancyDurationLabel: 'Annual Contracts',
    
    unitMix: [
        { 
            name: 'Master Room', 
            count: 147, 
            avgPrice: 42000, // 3500 * 12
            priceRange: { min: 38400, avg: 42000, max: 46800 }, // Same as Study B
        },
        { 
            name: 'Single Room', 
            count: 49, 
            avgPrice: 34800, // 2900 * 12
            priceRange: { min: 34800, avg: 34800, max: 34800 }, // Fixed
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
    {
        platform: 'Azure Compound',
        type: '1 Bedroom Apartment',
        title: '1 Bedroom Apartment in Al Rabwa',
        location: 'Al Rabwa',
        area: '117 sqm',
        price: 94864,
        url: 'https://rightcompound.com/green-diamond-compound',
        photosUrl: 'https://www.canva.com/design/DAG8309BRgE/2V4p8Fmz0oOuQa-AMXBNow/edit?utm_content=DAG8309BRgE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Azure Compound',
        type: '1 Bedroom Fully Furnished',
        title: '1 Bedroom Furnished in Al Reem',
        location: 'Al Reem',
        area: '83 sqm',
        price: 99000,
        url: 'https://rightcompound.com/al-reem-residences-compound',
        photosUrl: 'https://www.canva.com/design/DAG84DVDdtU/oWQm9eq2ZwKCDxdi3QPgIw/edit?utm_content=DAG84DVDdtU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Azure Compound',
        type: '1 Bedroom Fully Furnished + Terrace',
        title: '1 Bedroom Furnished + Terrace in Hittin',
        location: 'Al Hittin',
        area: '100 sqm',
        price: 132825,
        url: 'https://rightcompound.com/hittin-residential-compound-riyadh',
        photosUrl: 'https://www.canva.com/design/DAG84DmPBK4/ndxj8ASiUXX9SSpUr353YA/edit?utm_content=DAG84DmPBK4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'Azure Compound',
        type: '1 Bedroom Fully Furnished',
        title: '1 Bedroom Furnished in Hittin',
        location: 'Al Hittin',
        area: '98 sqm',
        price: 121275,
        url: 'https://rightcompound.com/hittin-residential-compound-riyadh',
        photosUrl: 'https://www.canva.com/design/DAG84DmPBK4/ndxj8ASiUXX9SSpUr353YA/edit?utm_content=DAG84DmPBK4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    },
    {
        platform: 'La Cordia Suites',
        type: 'Studio with Balcony',
        title: 'Studio with Balcony in Al Takhassousi',
        location: 'Al Takhassousi',
        area: '34 sqm',
        price: 70000,
        url: 'https://rightcompound.com/satel-at-la-cordia-complex-583',
        photosUrl: 'https://www.canva.com/design/DAG84DB8azc/_yyvJWBkuRqpAczQ99PhqQ/edit?utm_content=DAG84DB8azc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    }
  ],
  study_b: [
     // Bayut Listings
     { 
        platform: 'Bayut', 
        type: 'Townhouse',
        title: 'Townhouse for Rent in North Riyadh', 
        location: 'North Riyadh',
        area: 'Unknown',
        price: 7250,
        period: '/mo',
        url: 'https://www.bayut.sa/ar/property/details-87828091.html' 
     },
     { 
        platform: 'Bayut', 
        type: '3 Bedroom',
        title: 'Furnished 3BR in Al Arid', 
        location: 'Al Arid',
        area: 'Unknown',
        price: 7500,
        period: '/mo',
        url: 'https://www.bayut.sa/ar/property/details-87842870.html' 
     },
     { 
        platform: 'Bayut', 
        type: '3 Bedroom',
        title: 'Al Majdiah Residence 3BR', 
        location: 'Al Majdiah',
        area: 'Unknown',
        price: 7333,
        period: '/mo',
        url: 'https://www.bayut.sa/ar/property/details-87748182.html' 
     },
     { 
        platform: 'Bayut', 
        type: '3 Bedroom',
        title: 'Makeen Compound 3BR', 
        location: 'Al Narjis',
        area: 'Unknown',
        price: 9583,
        period: '/mo',
        url: 'https://www.bayut.sa/ar/property/details-87690281.html' 
     },
     { 
        platform: 'Bayut', 
        type: '3 Bedroom',
        title: 'Luxury 3BR North Riyadh', 
        location: 'North Riyadh',
        area: 'Unknown',
        price: 11667,
        period: '/mo',
        url: 'https://www.bayut.sa/ar/property/details-87832185.html' 
     },
     
     // Airbnb Listings
     { 
        platform: 'Airbnb', 
        type: '3 Bedroom',
        title: 'Spacious Miemar Residence', 
        location: 'Riyadh',
        area: 'Unknown',
        price: 20109,
        period: '/mo',
        url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' 
     },
     { 
        platform: 'Airbnb', 
        type: '3 Bedroom',
        title: 'Luxury 3BR w/ Terrace', 
        location: 'Riyadh',
        area: 'Unknown',
        price: 17965,
        period: '/mo',
        url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' 
     },
     { 
        platform: 'Airbnb', 
        type: '3 Bedroom',
        title: 'Luxury Ground Floor 3BR', 
        location: 'Riyadh',
        area: 'Unknown',
        price: 20030,
        period: '/mo',
        url: 'https://www.airbnb.com/s/Riyadh--Saudi-Arabia/homes' 
     },
     
     // Compound Listings
     { 
        platform: 'Compound', 
        type: '3BR Duplex',
        title: 'Azure Rabwah 3BR Duplex', 
        location: 'Al Rabwah',
        area: 'Unknown',
        price: 142296,
        period: '/yr',
        url: 'https://azurerabwah.com' 
     },
     { 
        platform: 'Compound', 
        type: 'Townhouse',
        title: 'Azure Asala Townhouse', 
        location: 'Al Asala',
        area: 'Unknown',
        price: 135000,
        period: '/yr',
        url: 'https://www.google.com/search?q=Azure+Asala+Compound+Riyadh' 
     },
     { 
        platform: 'Compound', 
        type: '3 Bedroom',
        title: 'Azure Narjis 3BR', 
        location: 'Al Narjis',
        area: 'Unknown',
        price: 165000,
        period: '/yr',
        url: 'https://www.google.com/search?q=Azure+Narjis+Residential+Complex' 
     },
  ],
  study_c: [] // Uses Study B context
};

export const MABAAT_SHARE_PERCENTAGE = 0.15; // Updated to 15% as per CSV
export const BRANCHES: Branch[] = [];
