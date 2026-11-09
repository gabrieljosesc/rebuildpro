import type { ServiceGroup } from "./service-types";

// Navigation grouping, dropdown hints and the before/after photo pair for
// each service. Photos live in /public/images/services/<slug>-before.jpg and
// <slug>-after.jpg.
//
// PHOTO NOTE: the current photos are licensed stock photography (Pexels
// licence, free for commercial use, no attribution required) chosen to
// represent each trade. They are NOT photos of Rebuild Pro jobs and the site
// labels them "Representative photos". Swap in real project photos from Joe,
// keep the same file names, and set `stockPhotos` to false.
export const stockPhotos = true;

type Meta = {
  group: ServiceGroup;
  hint: string;
  featured?: boolean;
  before: string;
  after: string;
};

export const serviceMeta: Record<string, Meta> = {
  framing: {
    group: "Interior",
    hint: "Walls, bulkheads, structural repairs",
    featured: true,
    before: "Gutted room with water-damaged studs and old insulation exposed",
    after: "Carpenter standing inside newly framed interior walls",
  },
  insulation: {
    group: "Interior",
    hint: "Batts, spray foam, vapour barrier",
    before: "Bare wall studs in a room stripped back for renovation",
    after: "Installer fitting pink fibreglass batt insulation between studs",
  },
  "drywall-and-taping": {
    group: "Interior",
    hint: "Board, tape, Level 4 finish",
    featured: true,
    before: "Room with new drywall hung but not yet taped or painted",
    after: "Finished empty room with smooth white walls and hardwood floor",
  },
  electrical: {
    group: "Interior",
    hint: "Licensed electricians, panels, rewiring",
    featured: true,
    before: "Old electrical box with aged wiring on a weathered wall",
    after: "New electrical panel with labelled breakers",
  },
  plumbing: {
    group: "Interior",
    hint: "Supply lines, drains, fixtures",
    featured: true,
    before: "Corroded pipe joint leaking water",
    after: "Plumber connecting new supply pipes under a sink",
  },
  flooring: {
    group: "Interior",
    hint: "Hardwood, vinyl plank, tile, subfloor",
    featured: true,
    before: "Worn and weathered wood floorboards",
    after: "Living room with newly installed hardwood flooring",
  },
  "painting-and-trim": {
    group: "Interior",
    hint: "Interior painting, baseboards, casing",
    featured: true,
    before: "Painter rolling a first coat onto a wall",
    after: "Bright finished living room with fresh white walls and trim",
  },
  tiling: {
    group: "Interior",
    hint: "Bathrooms, showers, backsplashes, floors",
    before: "Old wall tiles partly removed down to the substrate",
    after: "Finished bathroom with new grey porcelain tile and vanity",
  },
  "basement-finishing": {
    group: "Interior",
    hint: "Full basements, suites, permits",
    featured: true,
    before: "Unfinished basement with block walls and exposed joists",
    after: "Finished basement family room with carpet and pot lights",
  },
  "kitchens-and-bathrooms": {
    group: "Interior",
    hint: "Full renovations, insurance rebuilds",
    featured: true,
    before: "Kitchen mid-renovation with cabinets removed and ladder",
    after: "Renovated white kitchen with stone counters",
  },
  hvac: {
    group: "Interior",
    hint: "Furnaces, heat pumps, AC, ductwork",
    before: "Old cast-iron boiler in a basement",
    after: "New heat pump unit installed on an exterior wall",
  },
  roofing: {
    group: "Exterior & property",
    hint: "Shingles, flat roofs, repairs",
    featured: true,
    before: "Old roof with damaged and missing tiles",
    after: "House with a new shingle roof and dormer",
  },
  waterproofing: {
    group: "Exterior & property",
    hint: "Foundation cracks, weeping tile, sumps",
    featured: true,
    before: "Crack running through a basement foundation wall",
    after: "Waterproofing membrane being applied to a foundation",
  },
  "siding-and-exterior": {
    group: "Exterior & property",
    hint: "Siding, soffit, fascia, eavestroughs",
    before: "Old house with peeling paint and worn wood siding",
    after: "House with new siding, trim and gutters",
  },
  "windows-and-doors": {
    group: "Exterior & property",
    hint: "Replacement windows, entry doors, egress",
    before: "Old weathered wooden windows in a brick wall",
    after: "New vinyl window units ready for installation",
  },
  "decks-and-fences": {
    group: "Exterior & property",
    hint: "Decks, porches, privacy fences",
    before: "Old grey weathered deck boards",
    after: "Backyard with a new wood privacy fence",
  },
  "concrete-and-masonry": {
    group: "Exterior & property",
    hint: "Steps, walkways, parging, repointing",
    before: "Cracked concrete steps with weeds growing through",
    after: "House with a new concrete driveway and walkway",
  },
  "interlock-and-landscaping": {
    group: "Exterior & property",
    hint: "Interlock, retaining walls, grading",
    before: "Weeds growing between old patio pavers",
    after: "Backyard patio with new interlock pavers and garden beds",
  },
  "home-additions": {
    group: "Exterior & property",
    hint: "Rear, second-storey, garden suites",
    featured: true,
    before: "Rear addition under construction with scaffolding",
    after: "Completed brick house exterior with new roofline",
  },
  demolition: {
    group: "Exterior & property",
    hint: "Interior tear-out, garages, structures",
    before: "Excavator demolishing a masonry wall",
    after: "Interior stripped to bare walls and ready for rebuilding",
  },
  "snow-removal": {
    group: "Exterior & property",
    hint: "Seasonal contracts, salting, commercial",
    featured: true,
    before: "Car and driveway buried under deep snow after a storm",
    after: "Walkway shovelled clear between snowbanks after a storm",
  },
};
