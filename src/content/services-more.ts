import type { ServiceDraft } from "./service-types";

// Exterior, structural and property services added November 2026, plus two
// interior trades (tiling, HVAC) that round out the list. Cost ranges are
// typical 2026 GTA figures for planning only. Joe to review before launch;
// every job is priced by written quote.
export const moreServices: ServiceDraft[] = [
  {
    slug: "roofing",
    name: "Roofing",
    short:
      "Asphalt shingle replacement, flat roof membranes, leak repairs and storm damage claims.",
    metaTitle: "Roofing Contractor in Toronto & the GTA: Shingles, Flat Roofs, Repairs",
    metaDescription:
      "Roof replacement and repair in Toronto and the GTA: asphalt shingles, flat roof membranes, ice and water shield, ventilation and wind or hail insurance claims.",
    h1: "Roofing in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting replaces and repairs sloped and flat roofs across Toronto and the GTA. A typical detached-house re-roof with architectural asphalt shingles runs $7,000 to $15,000, and most are finished in one to two days.",
    includes: [
      "Full tear-off and replacement with architectural asphalt shingles",
      "Flat and low-slope roofs in modified bitumen or TPO membrane",
      "Ice and water shield at eaves, valleys and penetrations as the Ontario Building Code requires",
      "Leak repairs, flashing, chimney and skylight resealing",
      "Attic ventilation: ridge vents, roof vents and baffles",
      "Wind, hail and ice-dam damage documented for insurance claims",
    ],
    sections: [
      {
        heading: "How do you know a roof needs replacing rather than repairing?",
        body: [
          "Curling or cupped shingles, bald patches where the granules have washed into the eavestroughs, and shingles lifting in wind are signs the roof is at the end of its life. One missing shingle or a leak at a chimney or vent is a repair. Most GTA roofs installed with basic three-tab shingles last 15 to 20 years; architectural shingles last 25 to 30.",
          "We inspect from the roof and from inside the attic, where staining on the sheathing shows where water is actually getting in, and give you a written recommendation with photos.",
        ],
      },
      {
        heading: "Do I need a permit to replace a roof in Toronto?",
        body: [
          "Replacing shingles on an existing roof does not need a building permit in Toronto or most GTA municipalities. A permit is required when the work changes the structure, for example replacing rafters, adding a dormer or changing the roof slope. Flat-to-sloped conversions always need one.",
        ],
      },
      {
        heading: "Why do flat roofs on Toronto semis and row houses fail?",
        body: [
          "Ponding water, blistered membranes and poorly sealed drains are the usual causes on the flat and low-slope roofs common across older Toronto neighbourhoods. We replace the membrane with two-ply modified bitumen or a single-ply TPO system, add tapered insulation where water pools, and rebuild the drain and scupper details so water leaves the roof.",
        ],
      },
      {
        heading: "Can a roof be replaced in winter?",
        body: [
          "Yes, with conditions. Asphalt shingles seal with heat, so in cold weather we hand-seal and schedule around snow. Ice dams in January are a common reason we get called, and a proper fix means ice and water shield extended at least 900 mm up from the eave, air sealing the attic floor and adding insulation, not just clearing the ice.",
        ],
      },
    ],
    cost: {
      range: "$7,000 to $15,000 per house",
      note: "Typical for a tear-off and re-shingle of a GTA detached house with architectural shingles, including disposal. Flat roofs run $12 to $20 per square foot. Repairs typically $450 to $1,500.",
    },
    timeline:
      "A standard re-roof takes 1 to 2 days once materials are on site, usually within 2 to 3 weeks of signing. Repairs are typically completed on the first visit.",
    faqs: [
      {
        q: "Will insurance pay for a new roof?",
        a: "Home insurance covers sudden damage such as wind lifting shingles, hail or a fallen tree, not wear and tear. We document the damage with photos and a report your adjuster can use. If the roof was already past its life, insurers often pay only the depreciated value.",
      },
      {
        q: "What warranty comes with a new roof?",
        a: "Architectural shingles carry a manufacturer warranty of 25 years to limited lifetime, which depends on correct installation and ventilation. Our workmanship warranty covers the installation itself. Terms are stated in your written quote.",
      },
      {
        q: "Do you replace the plywood under the shingles?",
        a: "Only where it is soft or delaminated. We price a small allowance for sheathing replacement and show you any boards we replace. Most roofs need a few sheets at most.",
      },
    ],
    related: ["siding-and-exterior", "insulation", "home-additions"],
    updated: "2026-11-10",
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    short:
      "Basement waterproofing: crack injection, interior and exterior systems, sump pumps and backwater valves.",
    metaTitle: "Basement Waterproofing in Toronto & the GTA: Interior & Exterior Systems",
    metaDescription:
      "Basement waterproofing in Toronto and the GTA: foundation crack injection, interior weeping tile and sump pumps, exterior membrane systems and backwater valves. Toronto subsidy eligible.",
    h1: "Basement waterproofing in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting stops basement leaks across Toronto and the GTA with crack injection, interior drainage systems and exterior membrane waterproofing. Crack injection runs $450 to $900 per crack, and full interior or exterior systems $125 to $400 per linear foot.",
    includes: [
      "Polyurethane injection of poured-concrete foundation cracks",
      "Interior weeping tile, drainage membrane and sump pump systems",
      "Exterior excavation, membrane, dimple board and new weeping tile",
      "Backwater valves and sump pumps eligible for the City of Toronto subsidy",
      "Window well drains and covers, grading and downspout extensions",
      "Repairing the finished basement afterwards with our own crew",
    ],
    sections: [
      {
        heading: "Interior or exterior waterproofing: which one do I need?",
        body: [
          "Exterior waterproofing fixes the problem from the outside: we excavate to the footing, clean and patch the wall, apply a membrane and dimple board, and replace the weeping tile. It is the most complete fix but costs more and needs access along the wall. Interior systems manage the water that gets in: a drainage channel under the slab edge carries it to a sump pump. They work well on semis and row houses where the neighbour's house or a driveway blocks digging.",
          "A single leaking crack in a poured foundation usually needs neither. Polyurethane injection fills the crack from inside, expands with the water and stays flexible. Block foundations cannot be injected and need one of the system approaches.",
        ],
      },
      {
        heading: "What is the Toronto Basement Flooding Protection Subsidy?",
        body: [
          "The City of Toronto offers homeowners a subsidy of up to $3,400 in total toward a backwater valve, a sump pump and disconnecting a foundation drain from the sewer. The work must be done by a licensed contractor with a plumbing permit, and you apply after the work is complete with the permit and receipts. We handle the permit and give you the paperwork for the claim. Other GTA municipalities, including Mississauga and Markham, run similar programs.",
        ],
      },
      {
        heading: "How is this different from DryFort Waterproofing?",
        body: [
          "DryFort is our sister company and does nothing but waterproofing. Larger exterior projects and specialist drainage work are done by their crews. The advantage of calling us is one contract: we waterproof, then our own trades rebuild the finished basement, so nobody argues about where one company's work ends and the other's begins.",
        ],
      },
    ],
    cost: {
      range: "$450 to $900 per crack; $125 to $400 per linear foot for systems",
      note: "Interior drainage systems with a sump run about $125 to $200 per linear foot. Exterior excavation and membrane runs $200 to $400 per foot depending on depth and access. Backwater valve installation $2,000 to $3,500 before subsidy.",
    },
    timeline:
      "Crack injection is a half-day visit. Interior systems take 2 to 4 days for a typical basement. Exterior waterproofing of one or two walls takes 3 to 5 days, weather permitting.",
    faqs: [
      {
        q: "Does home insurance cover basement waterproofing?",
        a: "No. Insurance may cover the damage from a sudden flood or sewer backup if you carry that coverage, but the repair to the foundation that caused seepage is maintenance and is paid by the homeowner. That is why the Toronto subsidy exists.",
      },
      {
        q: "How long does waterproofing last?",
        a: "Exterior membrane systems last the life of the house when installed correctly. Interior systems last decades, with the sump pump itself replaced every 7 to 10 years. Crack injection is permanent on that crack, though new cracks can form elsewhere.",
      },
      {
        q: "Should I waterproof before finishing my basement?",
        a: "Yes. Any sign of past water, efflorescence or a damp smell should be fixed first. Finishing over a wall that leaks hides the problem until the drywall and flooring are ruined.",
      },
    ],
    related: ["basement-finishing", "framing", "interlock-and-landscaping"],
    updated: "2026-11-10",
  },
  {
    slug: "snow-removal",
    name: "Snow removal",
    short:
      "Seasonal snow clearing and salting for homes, commercial lots and condo properties across the GTA.",
    metaTitle: "Snow Removal & Salting in Toronto & the GTA: Residential and Commercial Contracts",
    metaDescription:
      "Seasonal snow removal in Toronto and the GTA: driveway and walkway clearing, commercial plowing, salting and ice control with documented service logs for liability protection.",
    h1: "Snow removal and ice control in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting clears and salts driveways, walkways and commercial lots across Toronto and the GTA on seasonal contracts from November to April. Residential driveway contracts run $450 to $900 per season, and commercial properties are quoted per site.",
    includes: [
      "Seasonal residential contracts: driveway, walkway and front steps",
      "Commercial plowing, salting and sidewalk clearing for plazas, offices and condos",
      "Automatic dispatch at a set accumulation, typically 5 cm, with no call needed",
      "Rock salt, treated salt and calcium chloride for sub-minus-15 conditions",
      "Time-stamped service logs and photos for slip-and-fall liability defence",
      "Spring cleanup of salt, gravel and plow damage to lawns and interlock",
    ],
    sections: [
      {
        heading: "How quickly do sidewalks have to be cleared in the GTA?",
        body: [
          "Most GTA municipalities require property owners to clear the public sidewalk in front of their property within 12 to 24 hours after a snowfall ends. Toronto's standard is 12 hours, and while the City now plows most residential sidewalks mechanically, owners remain responsible for their own walkways, steps and anything the plow misses. Fines apply, and a fall on an uncleared sidewalk can become a liability claim.",
        ],
      },
      {
        heading: "Why do commercial properties need documented snow service?",
        body: [
          "Under Ontario's Occupiers' Liability Act, the owner or occupier of a property is responsible for keeping it reasonably safe. Since 2021 a person injured by snow or ice has 60 days to give written notice of a claim, which means records matter. Every visit we make is logged with time, conditions, what was cleared and what was applied, and that log is available to you and your insurer.",
        ],
      },
      {
        heading: "What does a seasonal contract include?",
        body: [
          "A fixed price for the season regardless of how many storms there are. Clearing starts automatically once accumulation reaches the trigger depth in your contract, and we return after the City plow fills the end of the driveway. Salting is included on commercial contracts and offered as an add-on for residential ones. Per-visit pricing is available for properties that only need occasional service.",
        ],
      },
    ],
    cost: {
      range: "$450 to $900 per season for a residential driveway",
      note: "Two-car driveway with walkway and steps, season-long. Salting adds $150 to $300. Commercial lots are quoted per site based on area, trigger depth and salting; most small plazas fall between $4,000 and $12,000 per season.",
    },
    timeline:
      "Contracts run from November 15 to April 15. Clearing begins once the trigger depth is reached and residential routes are typically completed within 8 hours of the snowfall ending.",
    faqs: [
      {
        q: "Do you clear during the storm or after?",
        a: "Residential routes run once accumulation reaches the trigger depth and again after the snowfall ends if needed. Commercial sites with early-morning opening hours are cleared on a schedule set in the contract, often overnight so the lot is open for staff.",
      },
      {
        q: "What happens to my lawn and interlock?",
        a: "Driveway markers go in before the first snow so the plow stays on the pavement. Minor sod damage along the edge is repaired as part of our spring cleanup at no charge.",
      },
      {
        q: "Can I get snow removal for a single storm?",
        a: "We take on-call work when routes have room, at a per-visit rate, but seasonal contract customers are served first in a major storm.",
      },
    ],
    related: ["interlock-and-landscaping", "concrete-and-masonry", "decks-and-fences"],
    updated: "2026-11-10",
  },
  {
    slug: "siding-and-exterior",
    name: "Siding and exterior",
    short:
      "Vinyl, aluminum and fibre cement siding, soffit, fascia, eavestroughs and exterior trim.",
    metaTitle: "Siding, Soffit, Fascia & Eavestroughs in Toronto & the GTA",
    metaDescription:
      "Siding replacement in Toronto and the GTA: vinyl, aluminum and fibre cement siding, soffit and fascia, 5-inch aluminum eavestroughs and downspouts, with house wrap and exterior insulation options.",
    h1: "Siding, soffit, fascia and eavestroughs in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting replaces siding, soffit, fascia and eavestroughs on houses across Toronto and the GTA. Installed vinyl siding runs $7 to $12 per square foot and fibre cement $14 to $22, with most houses completed in one to two weeks.",
    includes: [
      "Vinyl, aluminum and fibre cement siding with house wrap and flashing",
      "Aluminum soffit and fascia, including venting for attic airflow",
      "Seamless 5-inch and 6-inch aluminum eavestroughs, downspouts and leaf guards",
      "Exterior rigid insulation under new siding for a warmer house",
      "Rot repair to sheathing, rim boards and window trim found behind old cladding",
      "Siding repairs after wind damage or fire, documented for insurance",
    ],
    sections: [
      {
        heading: "Which siding lasts longest in a Toronto winter?",
        body: [
          "Fibre cement board holds up best to freeze-thaw cycles, hail and sun, and does not dent or fade the way vinyl can. It costs about twice as much installed. Good-quality vinyl is still the most common choice because it is affordable, never needs painting and handles cold well when it is installed with room to expand. Aluminum is rarely used for siding now but remains the standard for soffit and fascia.",
        ],
      },
      {
        heading: "Can I add insulation when I replace siding?",
        body: [
          "Yes, and it is the cheapest time to do it. A layer of rigid foam or mineral wool board over the sheathing, under the new siding, cuts heat loss through the studs and makes an older house noticeably warmer. We extend the window and door trim to suit the extra thickness and keep the drainage plane continuous so water that gets behind the siding can escape.",
        ],
      },
      {
        heading: "Do eavestroughs matter for the basement?",
        body: [
          "More than people expect. Undersized or clogged eavestroughs and downspouts that end at the foundation are a leading cause of basement leaks in the GTA. We size eavestroughs to the roof area, slope them to the downspouts and run extensions at least six feet from the house, which solves a surprising number of damp-basement complaints without any waterproofing.",
        ],
      },
    ],
    cost: {
      range: "$7 to $12 per square foot for vinyl; $14 to $22 for fibre cement",
      note: "Installed, including removal of old siding and house wrap. Soffit and fascia $12 to $20 per linear foot. Seamless aluminum eavestroughs $12 to $18 per linear foot. A full siding job on a GTA detached house usually lands between $18,000 and $40,000.",
    },
    timeline:
      "Eavestroughs are a 1-day job. Siding a detached house takes 1 to 2 weeks; soffit and fascia alone 2 to 4 days.",
    faqs: [
      {
        q: "Do I need a permit to replace siding?",
        a: "No permit is needed to replace cladding like for like in Toronto or the surrounding municipalities. Adding exterior insulation that changes wall thickness does not normally require one either, though heritage-designated properties have their own rules.",
      },
      {
        q: "Can siding be installed in winter?",
        a: "Vinyl becomes brittle below about minus 10 and is best installed in milder weather. Fibre cement, aluminum and eavestroughs can be installed year-round.",
      },
      {
        q: "Will you fix rotten wood behind the old siding?",
        a: "Yes. We include an allowance for sheathing and trim repair, photograph what we find and only charge for what is replaced.",
      },
    ],
    related: ["roofing", "windows-and-doors", "insulation"],
    updated: "2026-11-10",
  },
  {
    slug: "windows-and-doors",
    name: "Windows and doors",
    short:
      "Energy-efficient replacement windows, entry and patio doors, and basement egress windows.",
    metaTitle: "Window & Door Replacement in Toronto & the GTA",
    metaDescription:
      "Replacement windows and doors in Toronto and the GTA: vinyl casement and slider windows, fibreglass and steel entry doors, patio doors and basement egress windows with permits.",
    h1: "Window and door replacement in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting supplies and installs replacement windows, entry doors, patio doors and basement egress windows across Toronto and the GTA. Installed vinyl windows run $900 to $2,200 each, and a whole-house replacement is typically finished in two to three days.",
    includes: [
      "Vinyl casement, awning, slider and picture windows with low-E, argon-filled glass",
      "Fibreglass and steel insulated entry doors with new frames and hardware",
      "Sliding and garden patio doors",
      "Basement egress windows, including cutting the foundation and the window well",
      "Full-frame or retrofit installation, insulated and sealed, with new capping and trim",
      "Lintel and rough-opening repair where frames have rotted",
    ],
    sections: [
      {
        heading: "Retrofit or full-frame replacement?",
        body: [
          "A retrofit window fits inside the existing frame, costs less and is quicker, but keeps whatever rot or air leaks are in the old frame. Full-frame replacement removes everything to the rough opening so we can insulate and seal properly and fix damaged wood. For houses built before the 1980s, or any window with visible rot or drafts around the frame, full-frame is worth the difference.",
        ],
      },
      {
        heading: "Does a basement bedroom need an egress window in Ontario?",
        body: [
          "Yes. The Ontario Building Code requires every bedroom to have a window that can be used to escape in a fire unless the room has a door directly outside. The opening must be at least 0.35 square metres with no dimension under 380 mm, and it must open without tools. Cutting a new or larger opening in the foundation needs a building permit, and we file it as part of the job.",
        ],
      },
      {
        heading: "Are there rebates for new windows?",
        body: [
          "Programs change from year to year. The federal Canada Greener Homes Loan offers interest-free financing for eligible upgrades, including Energy Star windows, and Enbridge and the province have run rebate programs that come and go. We confirm what is open when we quote and supply the product documentation an application needs.",
        ],
      },
    ],
    cost: {
      range: "$900 to $2,200 per window installed",
      note: "Standard vinyl casement or slider, full-frame installation. Entry doors $2,500 to $6,000 installed. Patio doors $3,000 to $6,500. Egress windows including concrete cutting and window well $4,500 to $8,000.",
    },
    timeline:
      "Windows are made to order and arrive in 4 to 8 weeks. Installation of a whole house takes 2 to 3 days; a single door or window is done in a day. Egress windows take 2 to 3 days including permit inspection.",
    faqs: [
      {
        q: "Do I need a permit to replace windows?",
        a: "Not when the new window is the same size as the old one. A permit is required when the opening is enlarged, when a new opening is cut, or when the window is part of a basement bedroom or secondary suite.",
      },
      {
        q: "Can windows be installed in winter?",
        a: "Yes. Each opening is exposed for under an hour and we work one window at a time, so the house stays warm. Sealant and foam rated for cold weather are used.",
      },
      {
        q: "Will insurance cover a broken window or door?",
        a: "Break-ins, storm damage and accidental breakage are usually covered, less your deductible. We board up the opening the same day and supply the quote your adjuster needs.",
      },
    ],
    related: ["siding-and-exterior", "basement-finishing", "insulation"],
    updated: "2026-11-10",
  },
  {
    slug: "decks-and-fences",
    name: "Decks and fences",
    short:
      "Pressure-treated, cedar and composite decks, porches, railings and privacy fences, with permits.",
    metaTitle: "Deck & Fence Builders in Toronto & the GTA",
    metaDescription:
      "Deck and fence construction in Toronto and the GTA: pressure-treated, cedar and composite decks, porch rebuilds, glass and aluminum railings, privacy fences and gates. Permits and footings handled.",
    h1: "Deck and fence construction in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting builds decks, porches and fences across Toronto and the GTA. Pressure-treated decks run $40 to $60 per square foot and composite $70 to $100, and most backyard decks are built in one to two weeks including footings and inspection.",
    includes: [
      "Pressure-treated, cedar and composite decks on concrete footings below frost depth",
      "Front porch rebuilds, steps and columns",
      "Aluminum, glass and wood railings that meet the Ontario Building Code",
      "Privacy fences, board-on-board and horizontal fences, and gates",
      "Deck repairs: replacing rotted joists, ledgers and boards",
      "Building permits, drawings and inspections where required",
    ],
    sections: [
      {
        heading: "Do I need a permit for a deck in Toronto?",
        body: [
          "A permit is required for any deck more than 600 mm (24 inches) above grade, any deck attached to the house that serves a door, and any roofed porch. Low platform decks under 600 mm with no roof generally do not need one, but zoning setbacks and lot coverage still apply. Most GTA municipalities follow similar rules. We prepare the drawings and apply on your behalf.",
        ],
      },
      {
        heading: "Why do footings matter so much in Ontario?",
        body: [
          "Frost pushes shallow footings up and down every winter, which is why older decks heave and pull away from the house. We dig footings to at least 1.2 metres (4 feet), the frost depth across the GTA, and attach the ledger to the house with through-bolts and proper flashing so water does not rot the rim joist behind it, a common and expensive hidden failure.",
        ],
      },
      {
        heading: "How tall can a fence be in Toronto?",
        body: [
          "Toronto's fence bylaw allows up to 2 metres in rear and side yards and 1.2 metres in the front yard, with lower limits near driveways for sightlines. Pool enclosures have their own stricter rules. Fences on the property line are normally shared with the neighbour, and we recommend agreeing on the line and the cost in writing before we start.",
        ],
      },
    ],
    cost: {
      range: "$40 to $60 per square foot for pressure-treated; $70 to $100 for composite",
      note: "Includes footings, framing, decking and a standard railing. Aluminum and glass railings add $120 to $250 per linear foot. Pressure-treated privacy fence $45 to $75 per linear foot; cedar $70 to $110.",
    },
    timeline:
      "A typical 200 to 300 square foot deck takes 1 to 2 weeks including footing inspection. Fences take 2 to 4 days. Permit approval adds 2 to 4 weeks before work starts.",
    faqs: [
      {
        q: "Pressure-treated, cedar or composite?",
        a: "Pressure-treated is the budget choice and lasts 15 to 20 years with staining every few years. Cedar looks better and resists rot naturally but needs the same care. Composite costs the most up front and needs only washing; most of our clients who plan to stay in the house choose it.",
      },
      {
        q: "Can you rebuild a deck that was damaged by a fallen tree or fire?",
        a: "Yes. That is a covered loss on most policies, and we document the damage and rebuild to the same footprint as part of an insurance claim, or upgrade it at your cost.",
      },
      {
        q: "How long before I can stain a new deck?",
        a: "Pressure-treated lumber needs to dry for several weeks to a few months before stain will absorb. Composite needs no finishing.",
      },
    ],
    related: ["interlock-and-landscaping", "concrete-and-masonry", "siding-and-exterior"],
    updated: "2026-11-10",
  },
  {
    slug: "concrete-and-masonry",
    name: "Concrete and masonry",
    short:
      "Concrete steps, walkways and pads, brick repointing, parging, chimney repair and porch restoration.",
    metaTitle: "Concrete & Masonry Contractor in Toronto & the GTA",
    metaDescription:
      "Concrete and masonry in Toronto and the GTA: poured concrete steps, walkways and pads, brick repointing and replacement, parging, chimney rebuilds and porch restoration.",
    h1: "Concrete and masonry in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting pours and repairs concrete and restores brick and block across Toronto and the GTA, from front steps and walkways to repointing and chimney rebuilds. Concrete flatwork runs $14 to $22 per square foot and repointing $18 to $35 per square foot.",
    includes: [
      "Poured concrete steps, walkways, pads, curbs and garage floors",
      "Brick repointing, replacing spalled bricks and rebuilding bowed sections",
      "Parging foundation walls and repairing cracked parging",
      "Chimney rebuilds above the roofline, caps and flashing",
      "Porch and stone step restoration, including heritage brick matching",
      "Removing and replacing heaved or sunken concrete",
    ],
    sections: [
      {
        heading: "Why does concrete in the GTA crack and heave?",
        body: [
          "Freeze-thaw cycles and road salt. Water gets into the surface, freezes, expands and spalls the top layer; poorly compacted base lets slabs sink and tilt. We pour over a compacted granular base at least 150 mm deep, use air-entrained 32 MPa concrete that tolerates freezing, cut control joints so the slab cracks where we want it to, and seal the surface. Salt alternatives in the first winter help a new pour cure properly.",
        ],
      },
      {
        heading: "When does brick need repointing?",
        body: [
          "When mortar joints are recessed more than about 6 mm, crumbling to the touch or letting water in behind the brick. Older Toronto houses with soft clay brick need a lime-based mortar that is softer than the brick; hard modern mortar on soft brick causes the brick faces to pop off within a few winters. We match the mortar colour and joint profile so repointed areas blend in.",
        ],
      },
      {
        heading: "How much of a chimney needs rebuilding?",
        body: [
          "Usually the section above the roofline, which takes the most weather. Spalled brick, a cracked crown and missing mortar let water into the chimney and down into the house. We take the chimney down to sound brick, rebuild it, pour a new concrete crown with a drip edge and install a stainless cap. If the chimney is no longer used we can remove it below the roof and close the roof over, which is cheaper than rebuilding.",
        ],
      },
    ],
    cost: {
      range: "$14 to $22 per square foot for concrete flatwork; $18 to $35 for repointing",
      note: "Concrete steps $2,500 to $6,000 depending on size. Parging $8 to $14 per square foot. Chimney rebuild above the roofline $3,000 to $7,000. Minimum charges apply to small repairs.",
    },
    timeline:
      "Most concrete pours are formed and poured in 1 to 2 days and cured enough to walk on in 48 hours. Repointing a house wall takes 3 to 5 days. Chimney rebuilds take 2 to 3 days.",
    faqs: [
      {
        q: "Can concrete be poured in winter?",
        a: "Below about 5 degrees it needs heated enclosures and blankets, which adds cost. We schedule exterior concrete from April to November and do interior work, such as garage floors, year-round.",
      },
      {
        q: "Do you do interlock as well as concrete?",
        a: "Yes. Interlock pavers are covered on our interlock and landscaping page. We often recommend interlock for driveways and patios in the GTA because individual pavers can be lifted and re-levelled after frost movement.",
      },
      {
        q: "Does a cracked foundation wall need a mason or waterproofing?",
        a: "If the crack leaks, it needs waterproofing. If it is cosmetic parging or a step crack in block above grade, masonry repair is enough. We look at it and tell you which.",
      },
    ],
    related: ["interlock-and-landscaping", "waterproofing", "decks-and-fences"],
    updated: "2026-11-10",
  },
  {
    slug: "interlock-and-landscaping",
    name: "Interlock and landscaping",
    short:
      "Interlock driveways, patios and walkways, retaining walls, grading, sod and garden beds.",
    metaTitle: "Interlock & Landscaping in Toronto & the GTA: Driveways, Patios, Retaining Walls",
    metaDescription:
      "Interlock and landscaping in Toronto and the GTA: interlocking stone driveways, patios and walkways on a proper granular base, retaining walls, grading away from the foundation, sod and planting.",
    h1: "Interlock and landscaping in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting installs interlock driveways, patios, walkways and retaining walls and handles grading and sod across Toronto and the GTA. Interlock runs $20 to $38 per square foot installed, and a typical patio or walkway is finished within a week.",
    includes: [
      "Interlock driveways, patios, walkways and steps on a 200 to 300 mm compacted base",
      "Lifting and re-levelling heaved interlock and replacing broken pavers",
      "Armour stone and segmental block retaining walls",
      "Regrading so water drains away from the foundation",
      "Sod, garden beds, mulch and planting",
      "Front yard parking pads with the permits and permeable surfaces Toronto requires",
    ],
    sections: [
      {
        heading: "Why does interlock in the GTA sink and heave?",
        body: [
          "A thin base. Pavers need 200 mm of compacted granular A under a patio and 300 mm or more under a driveway so frost cannot move them. Edge restraint stops the field from spreading and polymeric sand in the joints keeps water and weeds out. Interlock laid on a few inches of sand looks fine for two summers and then rolls.",
          "If you have existing interlock that has shifted, re-levelling is often possible: we lift the pavers, rebuild the base and relay them, which costs about half of new.",
        ],
      },
      {
        heading: "Can I add a front yard parking pad in Toronto?",
        body: [
          "Only in some neighbourhoods, and only with a permit. Toronto's front yard parking rules limit pad size, require a minimum amount of soft landscaping and usually require a permeable surface such as permeable pavers. We confirm whether your street is eligible before quoting and handle the application.",
        ],
      },
      {
        heading: "How does grading affect my basement?",
        body: [
          "Soil should slope away from the house at least 150 mm over the first two metres. On many GTA lots the soil has settled toward the foundation over the years, so rain pools against the wall and finds its way in. Regrading, extending downspouts and swapping flower beds against the wall for a gravel strip are low-cost fixes we often do alongside waterproofing or on their own.",
        ],
      },
    ],
    cost: {
      range: "$20 to $38 per square foot installed",
      note: "Standard concrete pavers on a full-depth base; natural stone and large-format slabs run higher. Re-levelling existing interlock $10 to $16 per square foot. Retaining walls $60 to $120 per square face foot. Sod $2.50 to $4 per square foot installed.",
    },
    timeline:
      "A patio or walkway of 200 to 400 square feet takes 3 to 5 days. Driveways take about a week. Spring and fall book early; we work April to November.",
    faqs: [
      {
        q: "Interlock or poured concrete for a driveway?",
        a: "Interlock costs more but individual pavers can be lifted after utility work or frost movement and relaid. Concrete is cheaper and cracks eventually. Both last decades when the base is right.",
      },
      {
        q: "Do you offer snow removal for the driveways you build?",
        a: "Yes, on seasonal contracts. Our crews know to use markers and plastic-edged blades on interlock.",
      },
      {
        q: "Is a permit needed for a retaining wall?",
        a: "In Toronto a permit is required for retaining walls over 1 metre high that are near a property line or public way. Lower garden walls do not need one. Walls over 1.2 metres usually need an engineer's design.",
      },
    ],
    related: ["concrete-and-masonry", "decks-and-fences", "waterproofing"],
    updated: "2026-11-10",
  },
  {
    slug: "demolition",
    name: "Demolition",
    short:
      "Interior selective demolition, garage and shed removal, structure tear-downs, bins and disposal.",
    metaTitle: "Demolition Contractor in Toronto & the GTA: Interior Tear-Out & Garage Removal",
    metaDescription:
      "Demolition in Toronto and the GTA: selective interior demolition for renovations, kitchen and bathroom tear-outs, garage and shed demolition, permits, designated substance surveys and disposal.",
    h1: "Demolition and tear-out in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting handles selective interior demolition and small-structure demolition across Toronto and the GTA, including permits and disposal. Interior tear-out runs $4 to $9 per square foot and detached garage demolition $3,500 to $8,000.",
    includes: [
      "Gutting kitchens, bathrooms and basements back to the framing",
      "Removing non-load-bearing walls, ceilings, flooring and tile",
      "Detached garage, shed and deck demolition with demolition permits",
      "Designated substance surveys and licensed asbestos abatement coordination",
      "Protecting the rest of the house: dust barriers, floor protection, negative air",
      "Bins, hauling and recycling of metal, wood and clean fill",
    ],
    sections: [
      {
        heading: "Is an asbestos survey required before demolition in Ontario?",
        body: [
          "Yes, for most houses built before 1990. Ontario Regulation 278/05 requires the owner to identify designated substances such as asbestos, lead and silica before demolition or renovation work begins, and to give the report to the contractor. Asbestos is common in GTA houses of that era in drywall compound, vinyl floor tile, duct wrap and vermiculite insulation. We arrange the survey and, where asbestos is found, have it removed by a licensed abatement contractor before our crew starts.",
        ],
      },
      {
        heading: "Do I need a permit to demolish a garage in Toronto?",
        body: [
          "A demolition permit is required to take down any detached structure larger than 10 square metres, which includes almost every garage. The application needs a site plan and confirmation that utilities are disconnected. Removing interior non-load-bearing walls in a house does not need a permit; removing a load-bearing wall or any part of the structure does, together with engineered drawings for what replaces it.",
        ],
      },
      {
        heading: "What is selective demolition?",
        body: [
          "Taking out only what is being replaced and protecting everything else. On a kitchen renovation that means removing cabinets, counters, flooring and the affected drywall while the hardwood in the next room stays covered and the HVAC is sealed against dust. Doing it carefully is slower than swinging a sledgehammer, and it is what keeps the rebuild on budget, because nothing has to be repaired that did not need to be touched.",
        ],
      },
    ],
    cost: {
      range: "$4 to $9 per square foot for interior tear-out",
      note: "Includes labour, protection, bin and disposal fees. A full kitchen gut typically $2,500 to $5,000, a finished basement $4,000 to $9,000. Detached garage demolition $3,500 to $8,000 including permit and slab removal. Asbestos abatement is quoted separately by the licensed abatement contractor.",
    },
    timeline:
      "A kitchen or bathroom tear-out takes 1 to 2 days, a basement 2 to 4 days. Garage demolition is 1 to 2 days on site after a permit, which takes 2 to 3 weeks.",
    faqs: [
      {
        q: "What happens to the debris?",
        a: "Metal, clean wood and concrete are separated for recycling; the rest goes to a licensed transfer station. Disposal fees in the GTA are a significant part of demolition cost and are itemized on the quote.",
      },
      {
        q: "Can you demolish and rebuild under one contract?",
        a: "Yes, that is the point of hiring a general contractor for it. The same crew that tears out does the framing, and the schedule has no gap between trades.",
      },
      {
        q: "Does insurance cover demolition after water or fire damage?",
        a: "Removing damaged materials is part of restoring the home and is covered on a valid claim. Our sister company RapidDry Restoration handles emergency tear-out and drying; we take over for the rebuild.",
      },
    ],
    related: ["framing", "kitchens-and-bathrooms", "home-additions"],
    updated: "2026-11-10",
  },
  {
    slug: "tiling",
    name: "Tiling",
    short:
      "Porcelain, ceramic and stone tile for bathrooms, showers, kitchens, backsplashes and floors.",
    metaTitle: "Tile Installation in Toronto & the GTA: Bathrooms, Showers, Floors, Backsplashes",
    metaDescription:
      "Tile installation in Toronto and the GTA: porcelain, ceramic and natural stone for shower walls and floors, bathroom floors, kitchen backsplashes and heated tile floors, with proper waterproofing.",
    h1: "Tile installation in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting installs porcelain, ceramic and stone tile across Toronto and the GTA, from shower surrounds and heated bathroom floors to kitchen backsplashes. Tile installation runs $14 to $28 per square foot in labour, and a bathroom is tiled in three to five days.",
    includes: [
      "Shower walls, floors and niches over a bonded waterproofing membrane",
      "Bathroom and kitchen floor tile, including in-floor electric heating",
      "Kitchen backsplashes, fireplace surrounds and feature walls",
      "Large-format and mosaic tile, natural stone and marble",
      "Removing old tile and preparing the substrate: cement board, uncoupling membrane, levelling",
      "Regrouting, recaulking and replacing cracked tiles",
    ],
    sections: [
      {
        heading: "Why do tiled showers leak?",
        body: [
          "Because tile and grout are not waterproof. The waterproofing has to be behind them: a bonded sheet or liquid membrane over the backer board, a sloped and sealed shower pan, and sealed corners and penetrations. Most leaks we repair come from showers tiled directly over drywall or green board with no membrane. We build every shower with a continuous membrane system and test the pan before tiling.",
        ],
      },
      {
        heading: "What does a heated tile floor cost to add?",
        body: [
          "Electric in-floor heating adds about $12 to $20 per square foot installed, including the thermostat, and a typical bathroom floor runs $700 to $1,500 extra. The cable or mat goes under the tile and is connected by a licensed electrician on its own circuit. It is the single most requested upgrade in our bathroom renovations and costs little to run on a programmable thermostat.",
        ],
      },
      {
        heading: "Can tile go over my existing floor?",
        body: [
          "Over a sound concrete slab, yes. Over wood subfloor the structure has to be stiff enough, which usually means a second layer of plywood or an uncoupling membrane so the tile does not crack when the floor flexes. Tiling over existing tile is possible in some cases but raises the floor and is rarely worth the trade-offs.",
        ],
      },
    ],
    cost: {
      range: "$14 to $28 per square foot in labour",
      note: "Standard porcelain and ceramic, including substrate prep. Mosaic, herringbone, large-format and natural stone run higher. Tile itself is $3 to $15 per square foot for most selections. A full bathroom tile job, walls and floor, typically $4,500 to $9,000 in labour.",
    },
    timeline:
      "A shower surround takes 3 to 4 days including waterproofing and cure times. A bathroom floor is 1 to 2 days, a backsplash 1 day. Grout needs 24 to 72 hours before the shower is used.",
    faqs: [
      {
        q: "Porcelain or ceramic?",
        a: "Porcelain is denser, more water-resistant and harder to chip, and is the right choice for floors and showers. Ceramic is fine for backsplashes and dry walls and costs less.",
      },
      {
        q: "Do you supply the tile or do I?",
        a: "Either. Many clients choose from tile showrooms across the GTA and we install what you pick. We advise on suitability, order quantities with waste allowance and handle the setting materials.",
      },
      {
        q: "Will insurance cover retiling after a leak?",
        a: "If a sudden leak damaged the floor or walls, replacing the tile is part of the covered rebuild. Gradual seepage through failed grout is maintenance and is not covered.",
      },
    ],
    related: ["kitchens-and-bathrooms", "flooring", "plumbing"],
    updated: "2026-11-10",
  },
  {
    slug: "hvac",
    name: "HVAC",
    short:
      "Furnaces, heat pumps, air conditioning, ductwork and ventilation, installed by licensed technicians.",
    metaTitle: "HVAC Installation in Toronto & the GTA: Furnaces, Heat Pumps, AC, Ductwork",
    metaDescription:
      "HVAC in Toronto and the GTA: high-efficiency furnace and heat pump installation, central air conditioning, ductwork for basements and additions, HRVs and bathroom venting. TSSA-licensed gas work.",
    h1: "Heating, cooling and ventilation in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting installs furnaces, heat pumps, air conditioners and ductwork across Toronto and the GTA as part of renovations and as standalone replacements. A high-efficiency gas furnace runs $5,500 to $9,000 installed, a cold-climate heat pump $9,000 to $18,000, and most swaps are done in a day.",
    includes: [
      "High-efficiency gas furnace replacement with TSSA-licensed gas fitting",
      "Cold-climate air-source heat pumps and ductless mini-splits",
      "Central air conditioning replacement and new installations",
      "Ductwork for finished basements, additions and rooms that never heat properly",
      "Heat recovery ventilators, bathroom and kitchen exhaust, dryer venting",
      "Relocating ducts, gas lines and equipment to open up a basement layout",
    ],
    sections: [
      {
        heading: "Heat pump or furnace for a Toronto house?",
        body: [
          "Cold-climate heat pumps now heat efficiently well below minus 20 and cool in summer, replacing both the furnace and the air conditioner. Most GTA installs pair a heat pump with the existing gas furnace as backup, which keeps bills low without betting the house on one system. A straight furnace replacement is still the cheapest option up front. We size either with a heat-loss calculation, not a rule of thumb, because oversized equipment short-cycles and wears out early.",
        ],
      },
      {
        heading: "Who is allowed to install a furnace in Ontario?",
        body: [
          "Any work on natural gas, including connecting a furnace, must be done by a technician licensed by the Technical Standards and Safety Authority (TSSA). Refrigerant work requires an ozone depletion prevention certificate. Our HVAC work is carried out by licensed technicians who pull the required permits, and the installation is inspected where the municipality requires it.",
        ],
      },
      {
        heading: "Why is one room always cold?",
        body: [
          "Usually a duct problem rather than a furnace problem: a long run with too many bends, a crushed flex duct, a supply register but no return, or an addition that was tied into the nearest duct without checking capacity. During a renovation we can rework the ductwork properly. For a single stubborn room, a ductless mini-split is often the practical answer.",
        ],
      },
    ],
    cost: {
      range: "$5,500 to $9,000 for a furnace; $9,000 to $18,000 for a heat pump system",
      note: "Installed, including removal of the old unit and permits. Central AC $4,500 to $8,000. Ductless mini-split $4,000 to $7,000 per zone. Ductwork for a finished basement $2,500 to $6,000. Rebates for heat pumps change frequently; we confirm current programs at quote time.",
    },
    timeline:
      "Furnace, AC and heat pump swaps are completed in a day. Ductwork for a basement takes 2 to 4 days and is scheduled after framing, before drywall.",
    faqs: [
      {
        q: "Are there rebates for heat pumps in Ontario?",
        a: "Federal and provincial programs have come and gone over the past few years, and some utilities offer their own. Eligibility often depends on an energy audit before and after. We tell you what is open when we quote and supply the equipment documentation the application needs.",
      },
      {
        q: "Does a finished basement need its own heating?",
        a: "The Ontario Building Code requires every habitable room to be heated. Most basements can be served by extending the existing ductwork with supply and return registers; some need a small additional zone.",
      },
      {
        q: "Will insurance replace a furnace damaged by a flood?",
        a: "A furnace sitting in floodwater is usually written off and replaced under the claim, because water in the burner and controls is a safety issue. We document it for the adjuster.",
      },
    ],
    related: ["basement-finishing", "electrical", "insulation"],
    updated: "2026-11-10",
  },
  {
    slug: "home-additions",
    name: "Home additions",
    short:
      "Rear and second-storey additions, garden suites and laneway suites, from permits to final finishes.",
    metaTitle: "Home Additions in Toronto & the GTA: Rear, Second-Storey, Garden & Laneway Suites",
    metaDescription:
      "Home additions in Toronto and the GTA: rear and second-storey additions, garden suites and laneway suites. Design, zoning review, permits, structure and finishing under one contract.",
    h1: "Home additions, garden suites and laneway suites in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting designs and builds rear additions, second-storey additions, garden suites and laneway suites across Toronto and the GTA. Additions run $350 to $550 per square foot finished, and a typical project takes four to eight months from permit application to move-in.",
    includes: [
      "Rear and side additions on new foundations",
      "Second-storey additions over bungalows and garages",
      "Garden suites and laneway suites under Toronto's as-of-right rules",
      "Architectural and structural drawings, zoning review and Committee of Adjustment applications",
      "Building permits, inspections and utility connections",
      "Every trade through to finished kitchens, bathrooms and flooring",
    ],
    sections: [
      {
        heading: "What is the difference between a garden suite and a laneway suite?",
        body: [
          "Both are self-contained homes in the backyard of an existing house. A laneway suite faces a public laneway and has been permitted across Toronto since 2018; a garden suite is on a lot without a laneway and has been allowed as of right since 2022. Both have limits on height, footprint, setbacks and distance from the main house, and both need a building permit but not a rezoning when they meet the rules. Many GTA municipalities now allow similar additional residential units.",
        ],
      },
      {
        heading: "How long does an addition take in Toronto?",
        body: [
          "Design and drawings take 4 to 8 weeks. A permit for a project that meets zoning takes 4 to 10 weeks; if a minor variance is needed, the Committee of Adjustment adds 3 to 5 months. Construction of a rear addition runs 3 to 5 months and a second storey 4 to 7 months, during which you may need to move out for part of the time. We give you a schedule with each stage before you commit.",
        ],
      },
      {
        heading: "What does an addition cost per square foot?",
        body: [
          "Expect $350 to $550 per square foot for a finished addition in 2026, with second storeys at the higher end because of the structural work, new roof and stairs. Kitchens and bathrooms inside the addition push the number up; simple bedroom and family room space pulls it down. Garden and laneway suites typically total $350,000 to $550,000 because they are complete small houses with their own services.",
        ],
      },
    ],
    cost: {
      range: "$350 to $550 per square foot finished",
      note: "Includes design, permits, foundation, structure, mechanical, electrical and standard finishes. Garden and laneway suites $350,000 to $550,000 all-in. Soft costs such as surveys, engineering and Committee of Adjustment fees are itemized separately.",
    },
    timeline:
      "4 to 8 months from permit application to completion for most additions; longer when a variance is needed. We provide a staged schedule and update it at each inspection.",
    faqs: [
      {
        q: "Can I stay in the house during an addition?",
        a: "Usually yes for a rear addition, which is sealed off from the house until the final connection. Second-storey additions remove the roof and most families move out for 2 to 4 months.",
      },
      {
        q: "Does a garden suite need its own utilities?",
        a: "It needs water, sewer, electrical and heating. Water and sewer usually branch from the main house, electrical from a sub-panel or a separate meter. Gas is optional; most suites use electric heat pumps.",
      },
      {
        q: "Is Tarion warranty included?",
        a: "Tarion covers newly built homes sold by registered builders and does not apply to additions to an existing house. Our written workmanship warranty and the manufacturers' warranties cover the work instead.",
      },
    ],
    related: ["framing", "roofing", "kitchens-and-bathrooms"],
    updated: "2026-11-10",
  },
];
