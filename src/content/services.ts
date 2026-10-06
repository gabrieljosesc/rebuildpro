export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Card blurb */
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer-first opening, 1-2 sentences */
  answer: string;
  includes: string[];
  sections: { heading: string; body: string[] }[];
  cost: { range: string; note: string };
  timeline: string;
  faqs: Faq[];
  related: string[];
  updated: string;
};

// Cost ranges are typical 2026 GTA figures for planning only. Joe to review
// before launch; every job is priced by written quote.
export const services: Service[] = [
  {
    slug: "framing",
    name: "Framing",
    short:
      "Wood and steel-stud framing for rebuilt walls, basements, bulkheads and new room layouts.",
    metaTitle: "Interior Framing Contractor in Toronto & the GTA",
    metaDescription:
      "Interior wood and steel-stud framing in Toronto and the GTA: basement walls, partitions, bulkheads and structural repairs after water damage. Permits handled.",
    h1: "Interior framing in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting frames and reframes home interiors across Toronto and the GTA, including basement perimeter walls, partition walls, bulkheads and water-damaged framing that has to be replaced. Typical interior partition framing runs $25 to $45 per linear foot.",
    includes: [
      "Basement perimeter and partition walls in wood or steel stud",
      "Replacing rotted or mould-affected studs, plates and subfloor",
      "Bulkheads and chases around ducts, beams and drains",
      "Door openings, closets and new room layouts",
      "Load-bearing wall changes with engineered drawings and a building permit",
      "Blocking for cabinets, grab bars, TVs and handrails",
    ],
    sections: [
      {
        heading: "When does framing need to be replaced after water damage?",
        body: [
          "Framing that dried quickly and reads under about 16% moisture content can usually stay. Studs and bottom plates need to come out when they have sat wet long enough to rot, when mould has grown into the wood rather than on its surface, or when the lumber has warped enough that new drywall will not sit flat.",
          "Bottom plates on basement floors are the usual casualty. We cut out the damaged sections, replace them with pressure-treated plates on a sill gasket so they are isolated from the concrete, and sister or replace the studs above.",
        ],
      },
      {
        heading: "Do I need a permit to frame a wall in Ontario?",
        body: [
          "A non-load-bearing partition inside an existing finished space generally does not need a building permit on its own. A permit is required when the work removes or alters a load-bearing wall, is part of finishing a basement, or adds a bedroom or secondary suite. We confirm the requirement with your municipality and file the application when one is needed.",
        ],
      },
      {
        heading: "Wood studs or steel studs?",
        body: [
          "Wood 2x4 framing is the default in houses because it is easy to fasten trim, cabinets and fixtures to. Steel stud does not rot, warp or feed mould, which makes it a good choice for basement walls in homes that have flooded before, and it is standard in condos where non-combustible construction is required.",
        ],
      },
    ],
    cost: {
      range: "$25 to $45 per linear foot",
      note: "Typical for 8-foot interior partition walls, materials and labour. Framing a full basement usually lands between $3,500 and $8,000 depending on size and bulkheads. Structural changes are quoted separately with engineering.",
    },
    timeline:
      "Most basements are framed in 2 to 4 working days. Replacing water-damaged sections of framing in one or two rooms is typically a 1-day job.",
    faqs: [
      {
        q: "Can you frame over a basement wall that has leaked?",
        a: "Not until the leak is fixed. Framing and insulating over an active leak traps water and guarantees mould. Our sister company DryFort Waterproofing repairs the foundation first, then we frame.",
      },
      {
        q: "How far should basement framing sit from the foundation wall?",
        a: "We leave a gap of about one inch between the studs and the concrete, or install rigid foam against the concrete first, so wood never touches the foundation and the insulation stays continuous.",
      },
      {
        q: "Will insurance pay to replace damaged framing?",
        a: "When framing was damaged by a covered loss such as a burst pipe, replacing it is part of restoring the home to pre-loss condition and is normally included in the claim. Moving walls or changing the layout is an upgrade you pay for separately.",
      },
    ],
    related: ["insulation", "drywall-and-taping", "basement-finishing"],
    updated: "2026-10-05",
  },
  {
    slug: "insulation",
    name: "Insulation",
    short:
      "Batt, rigid foam and spray foam insulation with proper vapour control for walls, basements and attics.",
    metaTitle: "Insulation Contractor in Toronto & the GTA",
    metaDescription:
      "Batt, rigid foam and spray foam insulation for basements, walls and attics in Toronto and the GTA. Wet insulation replaced after water damage.",
    h1: "Insulation installation and replacement in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting installs and replaces batt, rigid foam and spray foam insulation in homes across Toronto and the GTA, including insulation removed after a flood or leak. Batt insulation typically costs $1.50 to $3.50 per square foot installed, and closed-cell spray foam $4 to $7.50.",
    includes: [
      "Replacing wet or contaminated insulation after tear-out",
      "Basement wall insulation with rigid foam, batts or closed-cell spray foam",
      "Exterior wall and rim joist insulation",
      "Attic top-ups with blown-in insulation",
      "Sound insulation between floors and around bathrooms and bedrooms",
      "Vapour barrier, air sealing and acoustic sealant",
    ],
    sections: [
      {
        heading: "Can wet insulation be dried and reused?",
        body: [
          "Almost never. Fibreglass and mineral wool batts hold water against the framing, lose their loft and R-value, and can grow mould on the paper facing and the dust trapped in them. Cellulose turns to a wet mat. Wet insulation is removed during tear-out so the wall cavity can dry, and new insulation goes in once moisture readings are back to normal.",
          "Closed-cell spray foam and rigid foam board are the exceptions. They do not absorb water, so they can usually be cleaned, dried and left in place.",
        ],
      },
      {
        heading: "What insulation is best for a basement in Ontario?",
        body: [
          "Basement walls need an assembly that keeps warm, humid indoor air from reaching cold concrete. The two assemblies we recommend are rigid foam board against the foundation with a framed wall and batts in front of it, or two to three inches of closed-cell spray foam applied directly to the concrete. Both control condensation without relying on a sheet of polyethylene that traps moisture in the wall.",
          "The Ontario Building Code sets minimum insulation levels for newly finished basement walls, typically R-20 or an equivalent continuous value. We build to code or better and the inspector verifies it before drywall goes on.",
        ],
      },
    ],
    cost: {
      range: "$1.50 to $7.50 per square foot",
      note: "Batt insulation with vapour barrier is typically $1.50 to $3.50 per square foot of wall. Two inches of closed-cell spray foam is typically $4 to $7.50. Attic top-ups to R-60 usually cost $1.50 to $3 per square foot of attic.",
    },
    timeline:
      "Insulating a framed basement takes 1 to 2 days. Spray foam is applied in a single day, and the home should be vacated for about 24 hours while it cures.",
    faqs: [
      {
        q: "Do you need a vapour barrier in a basement?",
        a: "It depends on the wall assembly. Batt-insulated walls need a vapour retarder on the warm side. Walls insulated with two or more inches of closed-cell spray foam do not need a separate sheet because the foam is the vapour barrier.",
      },
      {
        q: "Is replacing insulation covered by home insurance?",
        a: "If the insulation was soaked by a covered water loss, removal and replacement with the same type and R-value is part of the claim. Upgrading from batts to spray foam is usually an out-of-pocket difference.",
      },
      {
        q: "Does old insulation contain asbestos?",
        a: "Vermiculite attic insulation, common in Ontario homes built before the 1990s, can contain asbestos. If we find it, work stops and it is tested before anything is disturbed.",
      },
    ],
    related: ["framing", "drywall-and-taping", "basement-finishing"],
    updated: "2026-10-05",
  },
  {
    slug: "drywall-and-taping",
    name: "Drywall and taping",
    short:
      "Boarding, taping, mudding and sanding to a paint-ready Level 4 or Level 5 finish.",
    metaTitle: "Drywall & Taping Contractor in Toronto & the GTA",
    metaDescription:
      "Drywall installation, taping and repair in Toronto and the GTA. Flood cuts, ceilings and full rooms finished paint-ready. Typical cost $2.50 to $4.50 per sq ft.",
    h1: "Drywall installation and taping in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting hangs, tapes and finishes drywall across Toronto and the GTA, from two-foot flood cuts to full basements and ceilings. Installed and finished drywall typically costs $2.50 to $4.50 per square foot of board.",
    includes: [
      "Replacing drywall removed in flood cuts and ceiling tear-outs",
      "New board for basements, additions and renovated rooms",
      "Moisture- and mould-resistant board in bathrooms and basements",
      "Fire-rated Type X board where the building code requires it",
      "Three-coat taping to a Level 4 finish, or Level 5 skim coat",
      "Texture matching and blending patches into existing walls",
    ],
    sections: [
      {
        heading: "Does water-damaged drywall always need to be replaced?",
        body: [
          "Drywall that got wet from clean water and was dried within a day or two can sometimes be saved. It has to come out when it has swollen, sagged or crumbled, when the paper face has mould on it, or when the water came from a sewer backup or other contaminated source.",
          "After a basement flood the standard approach is a flood cut: drywall is removed from the floor up to 2 or 4 feet, above the highest point water wicked to. That opens the wall cavity for drying and lets us replace only the lower section, so new board meets old at a clean horizontal seam that tapes out invisibly.",
        ],
      },
      {
        heading: "What is the difference between a Level 4 and Level 5 finish?",
        body: [
          "Level 4 is the standard for painted walls: tape embedded in compound, two further coats over joints and three over screw heads, sanded smooth. Level 5 adds a thin skim coat over the entire surface. It is worth the extra cost on ceilings and walls that catch low-angle light from large windows or that will be painted in a gloss or dark colour.",
        ],
      },
    ],
    cost: {
      range: "$2.50 to $4.50 per square foot",
      note: "Per square foot of drywall surface, supplied, hung, taped and sanded to Level 4. Small patches and single flood-cut walls usually run $250 to $900. Level 5 finishing adds roughly $1 per square foot.",
    },
    timeline:
      "Taping needs three coats with drying time between each, so even a small repair takes 3 days. A full basement is typically boarded and taped in 5 to 8 working days.",
    faqs: [
      {
        q: "Can you match my existing wall or ceiling texture?",
        a: "Yes. We match smooth walls, orange peel, knockdown and stipple ceilings. Where a stippled ceiling was partly removed, re-texturing the whole ceiling in that room gives the most uniform result.",
      },
      {
        q: "Should basements use regular or mould-resistant drywall?",
        a: "We use mould-resistant board on basement exterior walls and in bathrooms and laundry rooms. It costs slightly more per sheet and gives the wall a much better chance if it ever gets damp again.",
      },
      {
        q: "Do old walls contain asbestos?",
        a: "Drywall joint compound and plaster in homes built before about 1990 can contain asbestos. Ontario rules require suspect material to be tested before it is disturbed, so we arrange a test before cutting into older walls.",
      },
    ],
    related: ["painting-and-trim", "insulation", "framing"],
    updated: "2026-10-05",
  },
  {
    slug: "electrical",
    name: "Electrical",
    short:
      "Licensed electricians for rewiring after water damage, new circuits, pot lights and panel upgrades.",
    metaTitle: "Licensed Electricians for Renovations in Toronto & the GTA",
    metaDescription:
      "Licensed electricians for rebuilds and renovations in Toronto and the GTA: flood-damaged wiring, new circuits, pot lights and panel upgrades, with ESA inspection.",
    h1: "Electrical work by licensed electricians in Toronto and the GTA",
    answer:
      "Electrical work on Rebuild Pro Contracting projects is carried out by licensed electricians, filed with the Electrical Safety Authority (ESA) and inspected before walls are closed. We replace water-damaged wiring and devices, add circuits, install lighting and upgrade panels across Toronto and the GTA.",
    includes: [
      "Replacing outlets, switches and wiring that were submerged or soaked",
      "Rough-in wiring for finished basements, kitchens and bathrooms",
      "Pot lights, under-cabinet lighting and fixture installation",
      "Dedicated circuits for appliances, sump pumps and EV chargers",
      "Panel replacements and 100 A to 200 A service upgrades",
      "GFCI and AFCI protection, hardwired smoke and CO alarms",
    ],
    sections: [
      {
        heading: "Is wiring safe to use after a flood?",
        body: [
          "Not until it has been checked. Outlets, switches, breakers and any junction that was under water must be replaced because corrosion continues inside them long after they dry. Standard house cable that was submerged is also replaced, since water wicks along the paper filler inside the jacket.",
          "If water reached outlets or the electrical panel, the power to those circuits should stay off until an electrician has inspected them. On insurance rebuilds this replacement is documented and included in the scope sent to the adjuster.",
        ],
      },
      {
        heading: "Who is allowed to do electrical work in Ontario?",
        body: [
          "In Ontario, a business that is paid to do electrical work must be a Licensed Electrical Contractor holding an ECRA/ESA licence, and the work must be filed with the ESA as a notification. An ESA inspector reviews the rough-in before insulation and drywall, and again at completion. You receive the ESA certificate of acceptance for your records, which insurers and home buyers often ask for.",
        ],
      },
      {
        heading: "What about knob-and-tube or aluminum wiring?",
        body: [
          "Homes built before about 1950 may still have knob-and-tube wiring, and many built from the mid-1960s to the late 1970s have aluminum branch wiring. Both can be made safe, but many insurers require an inspection or remediation. When a rebuild opens up walls, it is the least expensive moment to replace or properly terminate that wiring.",
        ],
      },
    ],
    cost: {
      range: "$100 to $200 per pot light; $2,500 to $4,500 for a panel upgrade",
      note: "Wiring a finished basement typically costs $4,000 to $9,000 including the ESA permit. Replacing flood-damaged devices on one level usually runs $800 to $2,500.",
    },
    timeline:
      "Rough-in for a basement or kitchen takes 1 to 3 days, followed by the ESA rough-in inspection. Devices and fixtures are installed in 1 to 2 days after painting.",
    faqs: [
      {
        q: "Do I get an ESA certificate?",
        a: "Yes. Every job that requires an ESA notification is inspected, and you receive the certificate of acceptance when the work passes.",
      },
      {
        q: "Can you upgrade my panel while the walls are open?",
        a: "Yes, and it is the most cost-effective time to do it. A service upgrade is coordinated with your utility, such as Toronto Hydro or Alectra, and usually means a power shutoff of 4 to 8 hours.",
      },
      {
        q: "Will insurance cover rewiring?",
        a: "Insurance covers replacing wiring and devices damaged by the covered loss. Bringing undamaged old wiring up to current code is only covered if your policy includes a by-law or code-upgrade endorsement.",
      },
    ],
    related: ["plumbing", "basement-finishing", "kitchens-and-bathrooms"],
    updated: "2026-10-05",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    short:
      "Supply and drain repairs, rough-ins and fixture installation for rebuilds, basements, kitchens and baths.",
    metaTitle: "Renovation Plumbing in Toronto & the GTA",
    metaDescription:
      "Plumbing for rebuilds and renovations in Toronto and the GTA: burst pipe repairs, Kitec and Poly-B replacement, bathroom rough-ins and fixture installation.",
    h1: "Renovation and rebuild plumbing in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting handles the plumbing side of rebuilds and renovations across Toronto and the GTA: repairing the pipe that failed, replacing ageing supply lines while walls are open, roughing in bathrooms and kitchens, and installing fixtures. A basement bathroom rough-in typically costs $2,500 to $5,500.",
    includes: [
      "Permanent repair of burst, frozen and leaking supply lines",
      "Replacing Kitec, polybutylene (Poly-B), galvanized and lead supply piping",
      "Drain, waste and vent rough-ins for bathrooms, kitchens and laundry",
      "Basement bathroom rough-ins, including breaking and repouring concrete",
      "Shower valves, tubs, toilets, vanities, sinks and faucets",
      "Shut-off valves, water hammer arrestors and leak detectors",
    ],
    sections: [
      {
        heading: "Should I replace old pipes during a rebuild?",
        body: [
          "If the walls are already open, yes, at least for the piping you can reach. Three materials found in GTA homes are known for failing: Kitec (orange and blue pipe, installed roughly 1995 to 2007), polybutylene or Poly-B (grey pipe, late 1970s to mid-1990s), and galvanized steel in pre-1950s houses. Some insurers charge more or decline coverage when they are present.",
          "Replacing a run of pipe in an open wall costs a fraction of opening and repairing a finished wall later. We replace with PEX or copper and pressure test before insulation goes in.",
        ],
      },
      {
        heading: "Does insurance pay to fix the pipe that burst?",
        body: [
          "Most home policies cover the resulting water damage from a sudden, accidental burst but not the cost of repairing the failed pipe or fitting itself. In practice the plumbing repair is a small line on a large claim. We itemize it separately on the estimate so your adjuster can apply the policy correctly.",
        ],
      },
    ],
    cost: {
      range: "$2,500 to $5,500 for a bathroom rough-in",
      note: "Fixture swaps such as a toilet, faucet or vanity usually cost $200 to $500 each in labour. Re-piping a whole house from Kitec or Poly-B to PEX typically runs $6,000 to $15,000 depending on size and access.",
    },
    timeline:
      "Supply repairs are done in a few hours. A bathroom rough-in takes 2 to 3 days including the plumbing inspection, and fixtures are set in 1 day at the end of the job.",
    faqs: [
      {
        q: "Do plumbing changes need a permit?",
        a: "Replacing fixtures in the same location does not. Adding or relocating drains, such as a new basement bathroom, needs a plumbing permit and inspection from your municipality. We handle both.",
      },
      {
        q: "Can you add a bathroom in a basement with no rough-in?",
        a: "Yes. We cut the concrete floor, tie into the building drain, install a backwater valve where required, and repour. If the drain is too high for gravity flow, a sewage ejector pump is installed.",
      },
      {
        q: "Should I add a backwater valve?",
        a: "If your basement is finished, it is strongly recommended. Toronto and several GTA municipalities offer subsidies toward backwater valves and sump pumps, and some insurers give a discount for having one.",
      },
    ],
    related: ["electrical", "kitchens-and-bathrooms", "basement-finishing"],
    updated: "2026-10-05",
  },
  {
    slug: "flooring",
    name: "Flooring",
    short:
      "Vinyl plank, engineered hardwood, laminate, tile and subfloor repair, matched to what was there or upgraded.",
    metaTitle: "Flooring Installation in Toronto & the GTA",
    metaDescription:
      "Flooring replacement and installation in Toronto and the GTA: luxury vinyl plank, engineered hardwood, tile and subfloors after water damage or renovation.",
    h1: "Flooring installation and replacement in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting replaces and installs flooring across Toronto and the GTA, including luxury vinyl plank, engineered hardwood, laminate, tile and the subfloor underneath. Luxury vinyl plank typically costs $5 to $10 per square foot installed.",
    includes: [
      "Removing water-damaged flooring, underlay and subfloor",
      "Moisture testing concrete and wood subfloors before installation",
      "Luxury vinyl plank and tile (LVP/LVT)",
      "Engineered and solid hardwood, including refinishing",
      "Porcelain and ceramic floor tile with proper underlayment",
      "Insulated basement subfloor panels, levelling and transitions",
    ],
    sections: [
      {
        heading: "Which floors can be saved after water damage?",
        body: [
          "Laminate swells at the seams within hours and is always replaced. Carpet soaked by clean water can sometimes be dried, but the underpad is discarded, and anything touched by sewage is removed. Solid hardwood that has cupped can often be dried slowly and then sanded flat. Engineered hardwood usually delaminates and needs replacing. Porcelain tile generally survives, though the subfloor beneath it may not.",
        ],
      },
      {
        heading: "What is the best flooring for a basement?",
        body: [
          "Luxury vinyl plank is our most common basement recommendation. It is fully waterproof, comfortable underfoot, and if the basement ever takes on water it can often be lifted, dried and reinstalled. Porcelain tile is equally waterproof and works well with in-floor heating. We avoid solid hardwood and standard laminate below grade.",
          "Before any basement floor goes down we test the slab for moisture. A slab that reads high needs a vapour barrier or an insulated subfloor panel system, or the source of the moisture needs to be fixed first.",
        ],
      },
      {
        heading: "What if only part of my floor was damaged?",
        body: [
          "When damaged flooring runs continuously into undamaged rooms and an exact match is no longer available, insurers will often pay to replace the whole continuous area so it looks uniform. We document the layout and product with photos so the adjuster can make that decision.",
        ],
      },
    ],
    cost: {
      range: "$5 to $25 per square foot installed",
      note: "Luxury vinyl plank is typically $5 to $10, engineered hardwood $10 to $18, and porcelain tile $12 to $25 per square foot including materials and labour. Subfloor replacement adds $3 to $6 per square foot.",
    },
    timeline:
      "Vinyl plank for a typical basement is installed in 1 to 2 days. Hardwood needs several days to acclimatize on site before a 2 to 4 day installation. Tile takes 3 to 5 days including setting and grout cure.",
    faqs: [
      {
        q: "How long after a flood can new flooring be installed?",
        a: "Once the subfloor or slab is confirmed dry with a moisture meter. After professional drying that is usually within a week of the loss; installing sooner risks trapped moisture and failed flooring.",
      },
      {
        q: "Can I upgrade my flooring on an insurance claim?",
        a: "Yes. The insurer pays what it would cost to replace what you had, and you pay the difference for the upgrade. We show both numbers on the quote.",
      },
      {
        q: "Do you move furniture and remove old flooring?",
        a: "Yes. Removal, disposal and moving standard furniture are included in our flooring quotes unless you ask us to leave them out.",
      },
    ],
    related: ["painting-and-trim", "basement-finishing", "drywall-and-taping"],
    updated: "2026-10-05",
  },
  {
    slug: "painting-and-trim",
    name: "Painting and trim",
    short:
      "Priming, painting, baseboards, casings and doors. The last step that makes a rebuild disappear.",
    metaTitle: "Interior Painting & Trim Carpentry in Toronto & the GTA",
    metaDescription:
      "Interior painting, baseboards, casings and door installation in Toronto and the GTA. Stain-blocking primers and colour matching after water damage.",
    h1: "Interior painting and trim carpentry in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting finishes rebuilds and renovations across Toronto and the GTA with interior painting and trim carpentry: primer, two finish coats, baseboards, door and window casings, and interior doors. Interior painting typically costs $2.50 to $5 per square foot of floor area.",
    includes: [
      "Stain- and odour-blocking primer over water-marked surfaces",
      "Walls, ceilings, doors and trim in two finish coats",
      "Colour and sheen matching to existing rooms",
      "Baseboards, casings, crown moulding and window stools",
      "Interior door replacement and hardware",
      "Caulking, filling and a final touch-up walkthrough",
    ],
    sections: [
      {
        heading: "Can you just paint over a water stain?",
        body: [
          "Only after the source is fixed and the material is dry, and only with the right primer. Water stains bleed through ordinary latex paint no matter how many coats go on. We seal them with a shellac- or oil-based stain-blocking primer first, then repaint the whole wall or ceiling plane so the sheen is even.",
        ],
      },
      {
        heading: "Why does one repaired wall often mean repainting the room?",
        body: [
          "Paint fades and changes sheen as it ages, so fresh paint from the same can rarely matches a wall painted five years ago. A patch is painted corner to corner at minimum. When the repaired wall meets others in an open space, repainting the connected walls is the only way to avoid a visible difference, and insurers generally accept this for continuous surfaces.",
        ],
      },
      {
        heading: "Can you match my existing baseboards and casings?",
        body: [
          "Usually. Current profiles are stocked by local suppliers. Older or custom profiles in pre-war Toronto homes can be matched by a millwork shop that cuts a custom knife, which adds lead time and cost. Where a match is not practical, replacing the trim in the whole room keeps it consistent.",
        ],
      },
    ],
    cost: {
      range: "$2.50 to $5 per square foot of floor area",
      note: "For walls and ceilings with primer and two coats. Baseboards and casings typically cost $5 to $10 per linear foot supplied and installed, and a pre-hung interior door $350 to $700.",
    },
    timeline:
      "Painting a typical basement or main floor takes 3 to 5 days including primer and cure time between coats. Trim is installed in 1 to 2 days before the final coat.",
    faqs: [
      {
        q: "What paint do you use?",
        a: "Low-VOC acrylic paints from professional lines, with moisture-resistant formulas in bathrooms and kitchens. The product and sheen are listed on your quote, and you are welcome to specify your own.",
      },
      {
        q: "Do you paint ceilings as well?",
        a: "Yes. Ceilings are primed and painted flat white unless you specify otherwise. Stained stipple ceilings are sealed and resprayed.",
      },
      {
        q: "Will you protect floors and furniture?",
        a: "Yes. Floors are covered, furniture is moved and wrapped, and the space is cleaned at the end of each phase.",
      },
    ],
    related: ["drywall-and-taping", "flooring", "kitchens-and-bathrooms"],
    updated: "2026-10-05",
  },
  {
    slug: "basement-finishing",
    name: "Basement finishing",
    short:
      "Full basement builds and post-flood rebuilds with moisture-smart assemblies, permits and inspections.",
    metaTitle: "Basement Finishing & Rebuilds in Toronto & the GTA",
    metaDescription:
      "Basement finishing and post-flood basement rebuilds in Toronto and the GTA. Framing to final paint by one team, permits handled. Typically $45 to $85 per sq ft.",
    h1: "Basement finishing and rebuilds in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting finishes new basements and rebuilds flooded ones across Toronto and the GTA, handling framing, insulation, electrical, plumbing, drywall, flooring and paint with one team. Finishing a basement typically costs $45 to $85 per square foot, or about $40,000 to $70,000 for 800 square feet.",
    includes: [
      "Design, layout and building permit drawings",
      "Framing, insulation and vapour control built for below-grade walls",
      "Electrical, lighting, plumbing and HVAC rough-ins",
      "Bathrooms, wet bars, laundry rooms and bedrooms with egress windows",
      "Drywall, flooring, doors, trim and paint",
      "Municipal and ESA inspections through to final sign-off",
    ],
    sections: [
      {
        heading: "How do you rebuild a basement so the next flood does less damage?",
        body: [
          "A rebuild is the chance to choose materials that tolerate water. We use pressure-treated bottom plates on a gasket or steel stud framing, rigid foam or closed-cell spray foam instead of batts against the foundation, mould-resistant drywall held half an inch off the floor, PVC or composite baseboards, and vinyl plank or tile flooring.",
          "Materials only limit the damage. If water came through the foundation, a floor drain or the sewer line, that source needs to be fixed before anything is rebuilt. Our sister company DryFort Waterproofing handles foundation waterproofing, sump pumps and backwater valves, and we schedule the rebuild behind them.",
        ],
      },
      {
        heading: "Do I need a permit to finish a basement in Toronto?",
        body: [
          "In most cases, yes. Toronto and the surrounding GTA municipalities require a building permit to finish a basement when the work includes new or altered plumbing, structural changes, new HVAC runs, or creating a bedroom or second suite. Electrical work is permitted separately through the ESA. We prepare the drawings, submit the application and book every inspection.",
          "Restoring a previously finished basement to the same layout after a flood is usually treated as a repair, but new plumbing or layout changes bring it back under permit.",
        ],
      },
      {
        heading: "How long does it take to finish a basement?",
        body: [
          "Construction takes 6 to 10 weeks for a typical 700 to 1,000 square foot basement with one bathroom. Permit review adds 2 to 6 weeks at the start depending on the municipality. A like-for-like insurance rebuild is often faster, around 3 to 6 weeks, because the layout and rough-ins already exist.",
        ],
      },
    ],
    cost: {
      range: "$45 to $85 per square foot",
      note: "An 800 square foot basement with a three-piece bathroom typically costs $40,000 to $70,000. Legal secondary suites cost more because of fire separation, egress and separate services. Post-flood rebuilds are priced line by line against the insurer's scope.",
    },
    timeline:
      "6 to 10 weeks of construction for a full finish; 3 to 6 weeks for a like-for-like rebuild after water damage.",
    faqs: [
      {
        q: "What ceiling height do I need?",
        a: "The Ontario Building Code generally requires about 6 feet 5 inches (1.95 m) of clear height over most of the required floor area in a finished basement, with lower clearances allowed under beams and ducts. We measure and confirm before design.",
      },
      {
        q: "Can I upgrade my basement during an insurance rebuild?",
        a: "Yes, and many homeowners do. The insurer pays the cost to restore what was there, and you pay only the difference for upgrades such as a new bathroom, better flooring or pot lights.",
      },
      {
        q: "Do you build legal basement apartments?",
        a: "Yes. Secondary suites need a permit, fire separations, proper egress, and interconnected smoke and CO alarms. We design to the code requirements for your municipality.",
      },
    ],
    related: ["framing", "insulation", "flooring"],
    updated: "2026-10-05",
  },
  {
    slug: "kitchens-and-bathrooms",
    name: "Kitchens and bathrooms",
    short:
      "Kitchen and bathroom rebuilds and renovations: waterproofing, tile, cabinets, counters and fixtures.",
    metaTitle: "Kitchen & Bathroom Renovations in Toronto & the GTA",
    metaDescription:
      "Kitchen and bathroom renovations and insurance rebuilds in Toronto and the GTA. Waterproofed showers, tile, cabinets and counters by one team.",
    h1: "Kitchen and bathroom renovations in Toronto and the GTA",
    answer:
      "Rebuild Pro Contracting rebuilds and renovates kitchens and bathrooms across Toronto and the GTA, covering demolition, plumbing, electrical, waterproofing, tile, cabinets, counters and paint under one contract. Bathroom renovations typically cost $15,000 to $35,000 and kitchens $30,000 to $75,000.",
    includes: [
      "Rebuilding kitchens and bathrooms damaged by leaks from above or within",
      "Full gut renovations and layout changes",
      "Waterproofed shower systems with flood testing before tile",
      "Floor and wall tile, including heated floors",
      "Cabinet supply and installation, quartz and stone counters",
      "Plumbing fixtures, exhaust fans, lighting and GFCI outlets",
    ],
    sections: [
      {
        heading: "What happens when a leak damages kitchen cabinets?",
        body: [
          "Most cabinets are built from particleboard or MDF, which swells permanently when it gets wet. Damaged boxes have to be replaced. If the same door style and finish is no longer made, matching new cabinets to the remaining ones is not possible, and insurers will often pay to replace the full run so the kitchen is uniform.",
          "Countertops usually have to be lifted to replace base cabinets. Laminate rarely survives removal, and stone tops can crack at sink cut-outs, so we flag that risk in the estimate up front.",
        ],
      },
      {
        heading: "How do you waterproof a shower?",
        body: [
          "Tile and grout are not waterproof. Every shower we build gets a continuous membrane behind the tile, either a sheet system such as Schluter Kerdi or a liquid-applied membrane, lapped into the drain and up the walls. We plug the drain and flood test the pan for 24 hours before any tile is set.",
          "Most bathroom leaks we are called to repair trace back to a shower that was tiled directly over cement board or drywall with no membrane.",
        ],
      },
    ],
    cost: {
      range: "$15,000 to $35,000 for a bathroom; $30,000 to $75,000 for a kitchen",
      note: "Ranges cover a full renovation of a typical five-by-eight bathroom or a mid-size kitchen with new cabinets and quartz counters. Layout changes, custom millwork and premium stone add to the cost.",
    },
    timeline:
      "A bathroom takes 2 to 4 weeks on site. A kitchen takes 4 to 8 weeks, with cabinet and countertop lead times usually setting the schedule.",
    faqs: [
      {
        q: "Can I use my kitchen during the renovation?",
        a: "Not the room itself. We set up a temporary kitchen area with your fridge and a utility sink where possible, and schedule the work to keep the downtime as short as cabinet lead times allow.",
      },
      {
        q: "Do you supply cabinets and counters or can I buy my own?",
        a: "Either. We supply through our trade suppliers or install cabinets you purchase. Our workmanship warranty covers the installation in both cases.",
      },
      {
        q: "Does insurance cover a bathroom damaged by a slow leak?",
        a: "Usually not. Policies cover sudden and accidental water escape, not gradual seepage or failed caulking over time. We document what we find so your adjuster can decide.",
      },
    ],
    related: ["plumbing", "electrical", "flooring"],
    updated: "2026-10-05",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const projectTypes = [
  "Insurance rebuild after water damage",
  ...services.map((s) => s.name),
  "Other renovation",
];
