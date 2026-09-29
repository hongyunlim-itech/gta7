// World layout constants. The city is a GRID x GRID lattice of square blocks separated by roads.
export const GRID = 12;          // blocks per side
export const ROAD = 20;          // road width (m)
export const BLOCK = 80;         // block edge length (m)
export const PITCH = ROAD + BLOCK; // distance between road centre lines
export const SIDEWALK = 4;       // sidewalk ring width inside a block
export const HALF = (GRID * PITCH) / 2; // world half extent of the road lattice
export const LAND = HALF + 70;   // land extends this far from origin, water beyond
export const CURB = 0.16;        // sidewalk height above road

export const LANE = 5;           // lane centre offset from road centre line
export const PARK_OFFSET = 8;    // parked-car offset from road centre line

export const roadCenter = (i) => (i - GRID / 2) * PITCH;       // i in 0..GRID
export const blockCenter = (i) => (i - GRID / 2 + 0.5) * PITCH; // i in 0..GRID-1

// Day length: real seconds per in-game hour
export const SECONDS_PER_HOUR = 40;

export const STREETS_X = ['Vine St', 'Palm Ave', 'Ocean Blvd', 'Mission Rd', 'Sunset Blvd', 'Grand Ave', 'Rodeo Dr', 'Harbor Way', 'Canyon Rd', 'Bay St', 'Market St', 'Lincoln Ave', 'Coast Hwy'];
export const STREETS_Z = ['1st St', '2nd St', '3rd St', 'Elm St', 'Cedar Ave', 'Maple Dr', 'Broadway', 'Olive St', 'Pine St', 'Willow Rd', 'Sierra Blvd', 'Aurora Ave', 'Pier Rd'];
