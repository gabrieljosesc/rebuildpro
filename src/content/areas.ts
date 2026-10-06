import type { Faq } from "./services";

export type Area = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  /** Answer-first opening, 1-2 sentences */
  answer: string;
  neighbourhoods: string[];
  /** Question-led sections unique to this area */
  sections: { heading: string; body: string[] }[];
  /** Services most often needed here, with a local reason */
  commonWork: { service: string; note: string }[];
  permitOffice: string;
  faqs: Faq[];
  updated: string;
};

export const areas: Area[] = [
  {
    slug: "toronto",
    name: "Toronto",
    metaTitle: "General Contractor in Toronto | Insurance Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in Toronto for insurance rebuilds and renovations. Experienced with plaster, knob-and-tube and semi-detached homes. Permits handled.",
    answer:
      "Rebuild Pro Contracting is an interior general contractor serving the City of Toronto, rebuilding homes after water damage and completing renovations from Leslieville to High Park. We work in century homes, semis and condos, and handle Toronto Building permits and ESA inspections.",
    neighbourhoods: [
      "The Annex",
      "Leslieville",
      "Riverdale",
      "High Park",
      "The Junction",
      "Danforth",
      "Davisville",
      "Cabbagetown",
      "Roncesvalles",
      "The Beaches",
    ],
    sections: [
      {
        heading: "What makes rebuilding an older Toronto home different?",
        body: [
          "Much of the housing in the old city was built before 1950. Walls are plaster on wood lath rather than drywall, framing is true-dimension lumber that modern studs do not match, and wiring may still include knob-and-tube. A rebuild here means blending new drywall into plaster, shimming new framing to old, and dealing with what is found behind the walls.",
          "Plaster, joint compound, floor tiles and pipe wrap in homes of this age can contain asbestos, so suspect materials are tested before demolition as Ontario regulations require.",
        ],
      },
      {
        heading: "How do repairs work in a semi-detached or row house?",
        body: [
          "Water does not respect a party wall. When a leak affects both sides of a semi, each owner claims through their own insurer, and the repair on each side is scoped separately. The party wall is also a fire separation, so any drywall we replace on it is fire-rated and sealed to restore that protection.",
        ],
      },
    ],
    commonWork: [
      {
        service: "electrical",
        note: "Replacing knob-and-tube found when walls are opened, which many insurers require before renewing a policy.",
      },
      {
        service: "plumbing",
        note: "Swapping galvanized and lead supply lines in pre-1950s houses while access is open.",
      },
      {
        service: "drywall-and-taping",
        note: "Tying new board into plaster-and-lath walls so the patch does not show.",
      },
      {
        service: "basement-finishing",
        note: "Low-ceiling basements, often with underpinning or bench footings already done.",
      },
    ],
    permitOffice:
      "Permits are issued by Toronto Building. Homes in heritage conservation districts such as Cabbagetown also need heritage approval for exterior changes; interior rebuilds usually do not.",
    faqs: [
      {
        q: "Do you work in Toronto condos?",
        a: "Yes. We coordinate with property management for elevator bookings, work hours and certificate of insurance requirements, and use non-combustible steel stud framing where the building requires it.",
      },
      {
        q: "Is street parking and access a problem for a rebuild?",
        a: "We plan for it. On narrow downtown streets we arrange temporary parking permits and bin permits from the City when a disposal bin is needed.",
      },
      {
        q: "Does Toronto offer help with basement flooding protection?",
        a: "Yes. The City's Basement Flooding Protection Subsidy Program offers eligible homeowners money toward a backwater valve and sump pump. It pairs well with a basement rebuild.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "north-york",
    name: "North York",
    metaTitle: "General Contractor in North York | Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in North York for water damage rebuilds, basement finishing and renovations in bungalows, custom homes and Yonge corridor condos.",
    answer:
      "Rebuild Pro Contracting rebuilds and renovates home interiors throughout North York, from 1950s bungalows in Bathurst Manor to custom homes in Willowdale and condos along the Yonge and Sheppard corridors. We manage insurance rebuilds, permits and every trade from framing to paint.",
    neighbourhoods: [
      "Willowdale",
      "Don Mills",
      "Bayview Village",
      "Bathurst Manor",
      "Lansing",
      "York Mills",
      "Downsview",
      "Newtonbrook",
    ],
    sections: [
      {
        heading: "What kinds of homes do you rebuild in North York?",
        body: [
          "North York has three very different building types. The original post-war bungalows and side-splits have block foundations, original copper or galvanized plumbing and basements that were finished decades ago with wood panelling over bare block. The custom homes that replaced many of them have large finished basements with theatres, bars and bathrooms, where a single sump failure can mean a six-figure rebuild. The condo towers along Yonge and Sheppard have their own rules.",
        ],
      },
      {
        heading: "Who pays when a condo leak damages my unit?",
        body: [
          "In an Ontario condo, the corporation's insurance generally covers the building and the standard unit as defined in its by-laws, while your own policy covers improvements and betterments, your contents, and often the corporation's deductible if the leak started in your unit. We prepare separate scopes for the standard unit and for upgrades so each insurer receives only its portion.",
        ],
      },
    ],
    commonWork: [
      {
        service: "basement-finishing",
        note: "Rebuilding high-end finished basements in newer custom homes after sump or drain failures.",
      },
      {
        service: "flooring",
        note: "Replacing engineered hardwood in condos, with the acoustic underlay the building's rules call for.",
      },
      {
        service: "insulation",
        note: "Properly insulating bungalow basements that were originally panelled straight over block.",
      },
      {
        service: "kitchens-and-bathrooms",
        note: "Condo kitchen and bathroom rebuilds after leaks from the unit above.",
      },
    ],
    permitOffice:
      "North York is part of the City of Toronto, so permits go through Toronto Building, with the North York district office at the North York Civic Centre.",
    faqs: [
      {
        q: "Can you work within condo renovation rules?",
        a: "Yes. We submit the renovation application to your property manager, provide proof of insurance, book the service elevator and keep to permitted work hours.",
      },
      {
        q: "My bungalow basement has wood panelling over block. Can you rebuild it properly?",
        a: "Yes. We remove the panelling, check the block for leaks, then rebuild with foam insulation, a framed wall and mould-resistant drywall so the wall can handle basement humidity.",
      },
      {
        q: "How quickly can you start an insurance rebuild in North York?",
        a: "We can usually visit within a few business days to write the scope. Start dates depend on your insurer's approval and the drying being complete.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    metaTitle: "General Contractor in Vaughan | Rebuilds & Basement Finishing",
    metaDescription:
      "Interior general contractor in Vaughan, Woodbridge, Maple and Kleinburg. Insurance rebuilds, basement finishing, Kitec replacement and renovations.",
    answer:
      "Rebuild Pro Contracting serves Vaughan, including Woodbridge, Maple, Kleinburg and Concord, with insurance rebuilds, basement finishing and interior renovations. Most Vaughan homes we work in were built between the late 1980s and the 2010s and have large basements that are finished or ready to finish.",
    neighbourhoods: [
      "Woodbridge",
      "Maple",
      "Kleinburg",
      "Concord",
      "Vellore Village",
      "Sonoma Heights",
      "Patterson",
    ],
    sections: [
      {
        heading: "What causes most interior rebuilds in Vaughan?",
        body: [
          "In subdivision homes of this age, the usual sources are failed supply lines to second-floor laundry rooms and bathrooms, sump pump failures during heavy rain, and plumbing fittings reaching the end of their life. A second-floor leak can run through two storeys of ceilings and hardwood before anyone notices.",
          "Homes built roughly between 1995 and 2007 may have Kitec plumbing, recognizable by its orange and blue pipe. Kitec fittings corrode and fail, and a rebuild with open walls and ceilings is the practical time to replace it.",
        ],
      },
      {
        heading: "Is it worth finishing a builder basement in Vaughan?",
        body: [
          "Many Vaughan homes still have unfinished basements with 8 to 9 foot ceilings and a bathroom rough-in left by the builder. That makes them among the most straightforward basements in the GTA to finish: ceiling height is not a constraint and the drain is already in the floor. A typical project adds a recreation room, bedroom or office and a three-piece bathroom.",
        ],
      },
    ],
    commonWork: [
      {
        service: "plumbing",
        note: "Replacing Kitec supply piping in homes built from about 1995 to 2007.",
      },
      {
        service: "basement-finishing",
        note: "Finishing tall builder basements that already have a bathroom rough-in.",
      },
      {
        service: "flooring",
        note: "Replacing main-floor hardwood damaged by second-floor leaks.",
      },
      {
        service: "drywall-and-taping",
        note: "Ceiling replacement below leaking bathrooms and laundry rooms.",
      },
    ],
    permitOffice:
      "Building permits are issued by the City of Vaughan Building Standards Department. Electrical work is filed separately with the ESA.",
    faqs: [
      {
        q: "How do I know if my Vaughan home has Kitec?",
        a: "Look at the pipes near the water heater or under sinks. Kitec is flexible pipe, usually bright orange for hot and blue for cold, with brass fittings stamped Kitec or KTC. We can confirm during a site visit.",
      },
      {
        q: "Do I need a permit to finish my basement in Vaughan?",
        a: "Yes. The City of Vaughan requires a building permit to finish a basement. We prepare the drawings and handle the application and inspections.",
      },
      {
        q: "Do you serve Kleinburg and the rural parts of Vaughan?",
        a: "Yes. Homes on wells and septic systems need a few extra checks before plumbing changes, and we account for those in the scope.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "thornhill",
    name: "Thornhill",
    metaTitle: "General Contractor in Thornhill | Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in Thornhill, on both the Vaughan and Markham sides. Insurance rebuilds, aluminum wiring remediation and renovations.",
    answer:
      "Rebuild Pro Contracting rebuilds and renovates home interiors across Thornhill, on both the Vaughan and Markham sides of Yonge Street. Much of Thornhill was built in the 1970s and 1980s, so our rebuilds here often include updating aluminum wiring, original plumbing and dated basements.",
    neighbourhoods: [
      "Thornhill Woods",
      "Uplands",
      "Old Thornhill",
      "German Mills",
      "Royal Orchard",
      "Bayview Glen",
      "Beverley Glen",
    ],
    sections: [
      {
        heading: "Which city do I get a permit from in Thornhill?",
        body: [
          "Thornhill is split between two municipalities. Homes west of Yonge Street are in the City of Vaughan and homes east of Yonge are in the City of Markham. Each has its own building department, application process and review times. We check your address, apply to the correct office and book inspections with that city's inspectors.",
        ],
      },
      {
        heading: "What should I know about a 1970s or 1980s Thornhill home?",
        body: [
          "Homes built from the mid-1960s to the late 1970s often have aluminum branch wiring. It is safe when every connection uses devices and connectors rated for aluminum, but many insurers ask for an ESA inspection. Homes from the late 1970s through the mid-1990s may have grey polybutylene (Poly-B) supply pipe, which becomes brittle with age.",
          "When a rebuild opens walls in a home of this era, we show you what is there and price the update as a separate option, so you can decide while access is easy.",
        ],
      },
    ],
    commonWork: [
      {
        service: "electrical",
        note: "Aluminum wiring remediation with approved connectors and an ESA inspection.",
      },
      {
        service: "plumbing",
        note: "Replacing grey Poly-B supply lines when walls and ceilings are open.",
      },
      {
        service: "kitchens-and-bathrooms",
        note: "Renovating original 1980s bathrooms, often after a shower leak.",
      },
      {
        service: "painting-and-trim",
        note: "Removing stained stipple ceilings and finishing them smooth.",
      },
    ],
    permitOffice:
      "West of Yonge Street: City of Vaughan Building Standards. East of Yonge Street: City of Markham Building Standards. The Thornhill heritage districts on both sides have additional review for exterior work.",
    faqs: [
      {
        q: "Is aluminum wiring a reason an insurer could deny coverage?",
        a: "Some insurers will not write or renew a policy on a home with aluminum wiring unless an electrician has inspected it. We can arrange the inspection and any remediation as part of the rebuild.",
      },
      {
        q: "Can you remove a popcorn ceiling during a rebuild?",
        a: "Yes. Stipple applied before about 1990 is tested for asbestos first. Once cleared, it is scraped or covered and the ceiling is finished smooth.",
      },
      {
        q: "Do you work in Thornhill townhouse complexes?",
        a: "Yes. We coordinate with the condominium corporation where the townhouse is part of one, the same way we do for high-rise units.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    metaTitle: "General Contractor in Richmond Hill | Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in Richmond Hill and Oak Ridges. Insurance rebuilds after sump failures and leaks, basement finishing and renovations.",
    answer:
      "Rebuild Pro Contracting serves Richmond Hill from Bayview Hill to Oak Ridges with insurance rebuilds, basement finishing and interior renovations. Sump pump failures and second-floor plumbing leaks are the most common reasons we are called to rebuild here.",
    neighbourhoods: [
      "Oak Ridges",
      "Bayview Hill",
      "Mill Pond",
      "Jefferson",
      "Richvale",
      "Westbrook",
      "Lake Wilcox",
    ],
    sections: [
      {
        heading: "Why do so many Richmond Hill basements depend on a sump pump?",
        body: [
          "The northern part of Richmond Hill sits on the Oak Ridges Moraine, and neighbourhoods around Oak Ridges and Lake Wilcox have a high water table. Sump pumps in these homes can run through much of the spring. When a pump fails or the power goes out in a storm, a finished basement can take on several inches of water within hours.",
          "When we rebuild a basement in these areas we recommend a battery backup pump and a high-water alarm before finishes go back in, and we use flooring and wall assemblies that tolerate getting wet. DryFort Waterproofing, our sister company, installs the pump systems.",
        ],
      },
      {
        heading: "What does a typical Richmond Hill rebuild involve?",
        body: [
          "Most homes here are detached houses built from the 1980s through the 2000s with finished basements. After a sump failure the usual scope is a two-foot flood cut around the perimeter, new insulation and drywall, baseboards, doors and casings, flooring, and repainting. That is typically 3 to 5 weeks of work once drying is complete and the insurer has approved the estimate.",
        ],
      },
    ],
    commonWork: [
      {
        service: "basement-finishing",
        note: "Post-flood basement rebuilds in high water table areas around Oak Ridges.",
      },
      {
        service: "flooring",
        note: "Switching basement carpet and laminate to waterproof vinyl plank.",
      },
      {
        service: "drywall-and-taping",
        note: "Perimeter flood cuts replaced and blended into existing walls.",
      },
      {
        service: "plumbing",
        note: "Kitec replacement in homes built in the late 1990s and early 2000s.",
      },
    ],
    permitOffice:
      "Building permits are issued by the City of Richmond Hill Building Services Division.",
    faqs: [
      {
        q: "Does insurance cover a sump pump failure?",
        a: "Only if your policy includes sewer backup or sump overflow coverage, which is usually an optional endorsement in Ontario. Check your policy or ask your broker; limits on this coverage can be lower than the main policy limit.",
      },
      {
        q: "Can I change my basement layout during an insurance rebuild?",
        a: "Yes. The insurer pays for restoring what existed and you pay the difference for changes. Layout changes may need a building permit from the City of Richmond Hill, which we handle.",
      },
      {
        q: "Do you serve Oak Ridges and Lake Wilcox?",
        a: "Yes, we cover all of Richmond Hill up to Bloomington Road.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "markham",
    name: "Markham",
    metaTitle: "General Contractor in Markham | Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in Markham, Unionville and Cornell. Insurance rebuilds, heritage-sensitive repairs, basement finishing and renovations.",
    answer:
      "Rebuild Pro Contracting rebuilds and renovates home interiors across Markham, including Unionville, Cornell, Milliken and Markham Village. Our work ranges from heritage-area houses that need careful matching to 2000s subdivision homes with finished basements.",
    neighbourhoods: [
      "Unionville",
      "Markham Village",
      "Cornell",
      "Milliken",
      "Berczy Village",
      "Greensborough",
      "Wismer Commons",
      "Angus Glen",
    ],
    sections: [
      {
        heading: "Are there special rules for homes in Unionville or Markham Village?",
        body: [
          "Unionville, Markham Village, Thornhill and Buttonville each have a heritage conservation district. Exterior changes to homes in those districts need a heritage permit from the City of Markham. Interior rebuilds generally do not, but the houses themselves call for more care: plaster walls, wide baseboards and deep casings that are not stocked anywhere, and framing that has settled over a century.",
          "We have trim profiles custom-milled where needed and repair plaster rather than replacing whole walls with drywall when the original can be kept.",
        ],
      },
      {
        heading: "What is different about rebuilding in Cornell and newer Markham communities?",
        body: [
          "Cornell and the communities built since the late 1990s have many townhouses and laneway homes with detached garages and finished basements. Shared walls between townhouses are fire separations and sound barriers, so any drywall we remove on them is replaced with the same fire-rated assembly. Homes from 1995 to 2007 may also have Kitec plumbing.",
        ],
      },
    ],
    commonWork: [
      {
        service: "painting-and-trim",
        note: "Custom-milled baseboards and casings to match heritage homes in Unionville.",
      },
      {
        service: "drywall-and-taping",
        note: "Fire-rated party wall assemblies in townhouses, restored to code.",
      },
      {
        service: "basement-finishing",
        note: "Basement finishing and secondary suites in newer subdivisions.",
      },
      {
        service: "kitchens-and-bathrooms",
        note: "Kitchen rebuilds after dishwasher and fridge-line leaks.",
      },
    ],
    permitOffice:
      "Building permits are issued by the City of Markham Building Standards Department. Heritage permits are reviewed by Heritage Section staff.",
    faqs: [
      {
        q: "Can I add a legal basement apartment in Markham?",
        a: "Markham permits additional residential units in most detached, semi-detached and townhouse dwellings, subject to a building permit and registration with the City. We design and build to those requirements.",
      },
      {
        q: "Do interior repairs in a heritage district need a heritage permit?",
        a: "Usually not, when the work is inside and does not change the exterior. We confirm with the City before starting.",
      },
      {
        q: "A fridge water line leaked under my hardwood. What gets replaced?",
        a: "Typically the affected hardwood and subfloor, the base cabinets that got wet, and the basement ceiling below. Because hardwood runs continuously, insurers often approve replacing or refinishing the connected area.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    metaTitle: "General Contractor in Mississauga | Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in Mississauga for insurance rebuilds, basement finishing, condo repairs and renovations from Port Credit to Meadowvale.",
    answer:
      "Rebuild Pro Contracting serves Mississauga from Port Credit to Meadowvale with insurance rebuilds, basement finishing and interior renovations. We work in 1970s and 1980s subdivision homes, lakeside houses and the condo towers around Square One.",
    neighbourhoods: [
      "Port Credit",
      "Streetsville",
      "Erin Mills",
      "Meadowvale",
      "Clarkson",
      "Lorne Park",
      "Cooksville",
      "Churchill Meadows",
    ],
    sections: [
      {
        heading: "What causes basement rebuilds in Mississauga?",
        body: [
          "Mississauga has seen several severe summer storms, including the July 8, 2013 storm that dropped more than 120 mm of rain in a few hours and flooded thousands of basements across Mississauga and Etobicoke. Neighbourhoods near Cooksville Creek and other creek systems are the most exposed to sewer surcharge during storms like that.",
          "Because repeat events are a real possibility in those areas, we rebuild lower levels with water-tolerant materials and recommend a backwater valve before finishes go in.",
        ],
      },
      {
        heading: "What should I expect in a 1970s Mississauga home?",
        body: [
          "A large share of Mississauga was built between the late 1960s and the 1980s. Homes from that period often have aluminum wiring, original cast iron or ABS drains, and Poly-B supply lines in the later years. Semi-detached and townhouse layouts are common in Meadowvale and Erin Mills, where shared walls need fire-rated repairs.",
        ],
      },
    ],
    commonWork: [
      {
        service: "basement-finishing",
        note: "Flood-resilient basement rebuilds in creek-side neighbourhoods.",
      },
      {
        service: "electrical",
        note: "Aluminum wiring remediation in 1970s homes.",
      },
      {
        service: "flooring",
        note: "Condo flooring replacement with required acoustic underlay near Square One.",
      },
      {
        service: "kitchens-and-bathrooms",
        note: "Updating original kitchens and bathrooms in Erin Mills and Meadowvale.",
      },
    ],
    permitOffice:
      "Building permits are issued by the City of Mississauga Building Division. Mississauga also offers a Basement Flooding Prevention Rebate for sump pumps and backwater valves.",
    faqs: [
      {
        q: "Do you work in Square One area condos?",
        a: "Yes. We handle property management approvals, elevator bookings and insurance certificates, and prepare separate scopes for the corporation's insurer and yours when both are involved.",
      },
      {
        q: "Is there a rebate for flood protection in Mississauga?",
        a: "Yes. The City of Mississauga's Basement Flooding Prevention Rebate Program covers part of the cost of eligible sump pump and backwater valve installations.",
      },
      {
        q: "Do you serve Port Credit and Lorne Park?",
        a: "Yes, including older lakeside homes with crawl spaces and partial basements.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    metaTitle: "General Contractor in Etobicoke | Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in Etobicoke for insurance rebuilds, basement rebuilds and renovations in Mimico, The Kingsway, Islington and Rexdale.",
    answer:
      "Rebuild Pro Contracting rebuilds and renovates home interiors across Etobicoke, from lakeshore houses in Mimico and Long Branch to bungalows in Alderwood and Rexdale and the larger homes of The Kingsway. Basement rebuilds after sewer backup and storm flooding are a large part of our work here.",
    neighbourhoods: [
      "Mimico",
      "New Toronto",
      "Long Branch",
      "The Kingsway",
      "Islington",
      "Alderwood",
      "Markland Wood",
      "Rexdale",
    ],
    sections: [
      {
        heading: "Why is sewer backup a common cause of rebuilds in Etobicoke?",
        body: [
          "Many Etobicoke neighbourhoods were built in the 1940s through 1960s, and parts of the older south end are served by aging sewers that can surcharge in intense rain. The July 2013 storm flooded basements across central and south Etobicoke, and the City has been upgrading sewers under its Basement Flooding Protection Program since.",
          "Sewer backup is treated differently from clean water. Porous materials it touched, including drywall, insulation, carpet and baseboards, are removed rather than dried. The rebuild that follows is therefore more extensive, and coverage depends on having a sewer backup endorsement on your policy.",
        ],
      },
      {
        heading: "What is involved in rebuilding a post-war bungalow basement?",
        body: [
          "Bungalows in Alderwood, Islington and Rexdale typically have concrete block foundations and basements about 6.5 to 7 feet high. Block walls are porous, so we check them for moisture and efflorescence before framing, use foam insulation against the block, and keep finished ceilings as high as possible by routing ducts and wiring carefully.",
        ],
      },
    ],
    commonWork: [
      {
        service: "basement-finishing",
        note: "Complete basement rebuilds after sewer backup tear-outs.",
      },
      {
        service: "plumbing",
        note: "Backwater valve coordination and replacing original drains and galvanized supply.",
      },
      {
        service: "insulation",
        note: "Foam insulation on porous concrete block foundation walls.",
      },
      {
        service: "painting-and-trim",
        note: "Matching original trim and plaster finishes in Kingsway homes.",
      },
    ],
    permitOffice:
      "Etobicoke is part of the City of Toronto. Permits go through Toronto Building, with the Etobicoke York district office at the Etobicoke Civic Centre.",
    faqs: [
      {
        q: "Is sewer backup covered by home insurance?",
        a: "Only with a sewer backup endorsement, which is optional on most Ontario policies and may have its own limit and deductible. Confirm with your broker.",
      },
      {
        q: "Can I get money from the City toward flood protection?",
        a: "Yes. Toronto's Basement Flooding Protection Subsidy Program offers eligible owners a subsidy for backwater valves, sump pumps and downspout disconnection.",
      },
      {
        q: "Do you rebuild basement apartments?",
        a: "Yes. If the unit is a registered secondary suite we rebuild its fire separations and alarms to code. If it is not, we can explain what legalizing it would involve.",
      },
    ],
    updated: "2026-10-05",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    metaTitle: "General Contractor in Scarborough | Rebuilds & Renovations",
    metaDescription:
      "Interior general contractor in Scarborough for insurance rebuilds, basement apartments, bungalow renovations and repairs from Agincourt to the Bluffs.",
    answer:
      "Rebuild Pro Contracting serves Scarborough from the Bluffs to Agincourt and Malvern with insurance rebuilds, basement finishing and interior renovations. Most of our Scarborough work is in bungalows, side-splits and back-splits built from the 1950s to the 1970s, many with basement apartments.",
    neighbourhoods: [
      "Agincourt",
      "Scarborough Village",
      "Cliffside",
      "Birch Cliff",
      "Guildwood",
      "Malvern",
      "West Hill",
      "Wexford",
    ],
    sections: [
      {
        heading: "How does a rebuild work when there is a basement apartment?",
        body: [
          "Basement apartments are common across Scarborough. A water loss in one raises questions a single-family rebuild does not: whether the suite is a legal secondary unit, whether a tenant needs to move out during the work, and whether your insurer was told about the unit. A legal suite must be rebuilt with its fire separation between units, proper egress, and interconnected smoke and carbon monoxide alarms.",
          "We document the existing condition for your adjuster and rebuild to the building code requirements that apply to the suite.",
        ],
      },
      {
        heading: "What is different about side-split and back-split homes?",
        body: [
          "Split-level homes have several short levels connected by half-flights of stairs, and the lowest level is often only partly below grade. Water tends to travel between levels through the shared walls and stair openings, so damage can show up in two or three levels from a single source. We trace the full path with moisture readings before writing the scope so nothing wet is closed in.",
        ],
      },
    ],
    commonWork: [
      {
        service: "basement-finishing",
        note: "Rebuilding basement apartments with code-compliant fire separation.",
      },
      {
        service: "electrical",
        note: "Aluminum wiring remediation and panel upgrades from 100 A service.",
      },
      {
        service: "drywall-and-taping",
        note: "Fire-rated ceilings between main-floor and basement units.",
      },
      {
        service: "flooring",
        note: "Refinishing original oak strip hardwood rather than replacing it.",
      },
    ],
    permitOffice:
      "Scarborough is part of the City of Toronto. Permits go through Toronto Building, with the Scarborough district office at the Scarborough Civic Centre.",
    faqs: [
      {
        q: "Can original oak hardwood be saved after a leak?",
        a: "Often, yes. Solid oak strip flooring from the 1950s and 60s is thick enough to dry, sand and refinish several times. We replace individual boards that have split or stained and refinish the room.",
      },
      {
        q: "Do I need to tell my insurer about a basement tenant?",
        a: "Yes. An undisclosed rental unit can affect coverage. If you are unsure what your policy says, ask your broker before a claim arises.",
      },
      {
        q: "Do you serve all of Scarborough?",
        a: "Yes, from Victoria Park Avenue east to the Rouge and from the lake north to Steeles Avenue.",
      },
    ],
    updated: "2026-10-05",
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
