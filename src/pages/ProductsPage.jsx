import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [availability, setAvailability] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { 
      id: 'all', 
      name: 'All Products', 
      icon: <AllIcon />,
      description: 'Browse our complete selection of solar equipment'
    },
    { 
      id: 'solar-panels', 
      name: 'Solar Panels', 
      icon: <PanelIcon />,
      description: 'High-efficiency solar panels from top manufacturers',
      subcategories: ['300W', '400W', '500W', '600W', 'Bifacial', 'Made in USA', 'N Type', 'P Type', 'All Black', 'HJT', 'Mono PERC', 'TOPCon', 'Polycrystalline', 'Half-Cut', 'Silver Frame']
    },
    { 
      id: 'inverters', 
      name: 'Inverters', 
      icon: <InverterIcon />,
      description: 'Grid-tie, hybrid, and off-grid inverters',
      subcategories: ['Micro Inverters', 'Power Optimizers', 'String Inverters', 'Home Hub Systems']
    },
    { 
      id: 'storage-solutions', 
      name: 'Storage Solutions', 
      icon: <BatteryIcon />,
      description: 'Battery storage systems and accessories',
      subcategories: ['5kWh', '10kWh', '16kWh', '18.5kWh']
    },
    { 
      id: 'charge-controllers', 
      name: 'Charge Controllers', 
      icon: <ControllerIcon />,
      description: 'MPPT and PWM charge controllers',
      subcategories: ['Load Controllers', 'MPPT Controllers', 'Classic Controllers', 'IQ System Controllers']
    },
    { 
      id: 'racking', 
      name: 'Racking', 
      icon: <RackingIcon />,
      description: 'Solar mounting and racking systems',
      subcategories: ['86" Rail', '132" Rail', '168" Rail', '172" Rail', '185" Rail', '210" Rail']
    },
    { 
      id: 'mounting', 
      name: 'Mounting', 
      icon: <MountingIcon />,
      description: 'Solar panel mounting hardware and systems',
      subcategories: ['L-Foot', 'Ballast Base', 'Metal Roof', 'Bonding Hardware', 'Rail Mount', 'Roof Mount', 'T-Bolt', 'Serrated', 'Clear']
    },
    { 
      id: 'solar-equipment', 
      name: 'Solar Equipment', 
      icon: <EquipmentIcon />,
      description: 'Essential solar installation equipment',
      subcategories: ['PV Wire', 'DC Connectors', 'Bus End Caps', 'Inline Disconnect']
    },
    { 
      id: 'accessories', 
      name: 'Accessories', 
      icon: <AccessoriesIcon />,
      description: 'Tools, communication, and EV charging',
      subcategories: ['AC Breakers', 'DC-DC Converters', 'Smart Controllers', 'MC4 Cables', 'Adapter Cables', 'AC Connectors', 'Combiner Boxes', 'Rapid Shutdown Kits', 'DC Disconnects', 'Mini Disconnects', 'Extender Cables', 'Female Connectors']
    }
  ];

  const products = {
    'solar-panels': [
      {
        id: 'rec-375w',
        name: "REC Solar 375W TwinPeak 2S Mono 72 Series",
        model: "REC375TP2SM72",
        wattage: "375W",
        cells: "144",
        voltage: "48.0V",
        availability: "in-stock",
        image: "/images/products/solar-panels/REC_375.webp",
        brand: "REC Solar",
        type: "Monocrystalline"
      },
      {
        id: 'jinko-385w',
        name: "Jinko 385W JKM385M-72HBL-V PERC Diamond Cell",
        model: "JKM385M-72HBL-V",
        wattage: "385W",
        cells: "144",
        voltage: "48.4V",
        availability: "in-stock",
        image: "/images/products/solar-panels/Jinko_385.webp",
        brand: "Jinko",
        type: "Monocrystalline PERC"
      },
      {
        id: 'qcells-340w',
        name: "QCELLS 340W Q.PEAK DUO BLK-G6+ All Black",
        model: "Q.PEAK DUO BLK-G6+ 340",
        wattage: "340W",
        cells: "120",
        voltage: "40.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/QCELLS_340.webp",
        brand: "QCELLS",
        type: "Monocrystalline"
      },
      {
        id: 'canadian-330w',
        name: "Canadian Solar 330W HiDM CS1H-330MS",
        model: "CS1H-330MS",
        wattage: "330W",
        cells: "72",
        voltage: "39.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/CS_330.webp",
        brand: "Canadian Solar",
        type: "Polycrystalline"
      },
      {
        id: 'hyundai-390w',
        name: "Hyundai 390W HiS-S390PI Bifacial",
        model: "HiS-S390PI",
        wattage: "390W",
        cells: "144",
        voltage: "48.4V",
        availability: "in-stock",
        image: "/images/products/solar-panels/HYUNDAI_390.webp",
        brand: "Hyundai",
        type: "Mono-crystalline"
      },
      {
        id: 'sinotec-410w',
        name: "Sinotec 410W STS-410P-54BB",
        model: "STS-410P-54BB",
        wattage: "410W",
        cells: "108",
        voltage: "37.6V",
        availability: "in-stock",
        image: "/images/products/solar-panels/SINOTEC_410.webp",
        brand: "Sinotec",
        type: "Monocrystalline PERC"
      },
      {
        id: 'exiom-410w',
        name: "Exiom 410W EX410-108BMH",
        model: "EX410-108BMH",
        wattage: "410W",
        cells: "108",
        voltage: "37.52V",
        availability: "in-stock",
        image: "/images/products/solar-panels/EXIOM_410.webp",
        brand: "Exiom",
        type: "Monocrystalline Half-Cut"
      },
      {
        id: 'znshine-400w',
        name: "ZNShine 400W ZXM7-SH108-400/M",
        model: "ZXM7-SH108-400/M",
        wattage: "400W",
        cells: "108",
        voltage: "40.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/ZNSHINE_400.webp",
        brand: "ZNshine",
        type: "Monocrystalline"
      },
      {
        id: 'hyperion-405w',
        name: "Hyperion Solar 405W HY-DH108P8B",
        model: "HY-DH108P8B-405",
        wattage: "405W",
        cells: "108",
        voltage: "37.23V",
        availability: "in-stock",
        image: "/images/products/solar-panels/HYPERION_405.webp",
        brand: "Hyperion Solar Energy (Runergy)",
        type: "Monocrystalline P-Type PERC"
      },
      {
        id: 'phonosolartwinplus-550w',
        name: "PhonoSolar TwinPlus 550W PS550M6H-24/TH",
        model: "PS550M6H-24/TH",
        wattage: "550W",
        cells: "144",
        voltage: "40.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/PHONOSOLARTWINPLUS_550.webp",
        brand: "PhonoSolar",
        type: "Monocrystalline"
      },
      {
        id: 'philadelphia-solar-580w',
        name: "Philadelphia Solar 580W Bifacial 144 Cells",
        model: "PS580-BF-144",
        wattage: "580W",
        cells: "144",
        voltage: "43.15V",
        availability: "in-stock",
        image: "/images/products/solar-panels/PHILADELPHIASOLAR_580.webp",
        brand: "Philadelphia Solar",
        type: "Bifacial N-Type Monocrystalline"
      },
      {
        id: 'phono-590w-draco',
        name: "Phono 590W Draco N-TOPCON PS590M8GF-24/TNH Solar Panel",
        model: "PS590M8GF-24/TNH",
        wattage: "590W",
        cells: "144",
        voltage: "43.58V",
        availability: "in-stock",
        image: "/images/products/solar-panels/PHONO_590.webp",
        brand: "Phono",
        type: "N-Type TOPCon Monocrystalline Bifacial"
      },
      {
        id: 'ja-solar-615w-bifacial',
        name: "JA Solar 615W Bifacial Mono PERC Silver Frame Solar Panel",
        model: "JAM66-D45-615LB",
        wattage: "615W",
        cells: "132",
        voltage: "43.58V",
        availability: "in-stock",
        image: "/images/products/solar-panels/JASOLAR_615.webp",
        brand: "JA Solar",
        type: "Monocrystalline PERC Bifacial"
      },
      {
        id: 'thornova-620w-tangra',
        name: "Thornova 620W (Pallet of 31) Tangra L Pro HD N-Type Bifacial Solar Panel",
        model: "TS-BGT66(620)-G11",
        wattage: "620W",
        cells: "132",
        voltage: "44.6V",
        availability: "in-stock",
        image: "/images/products/solar-panels/THORNOVA_620.webp",
        brand: "Thornova",
        type: "N-Type Monocrystalline Bifacial"
      },
      {
        id: 'hyundai-640w-nj',
        name: "Hyundai 640W (504 per Container) NJ Series N Type TOPCon Solar Panel",
        model: "HiN-T640NJ",
        wattage: "640W",
        cells: "156",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/solar-panels/HYUNDAI_640.webp",
        brand: "Hyundai",
        type: "N-Type TOPCon Bifacial"
      }
    ],
    'inverters': [
      {
        id: 'enphase-iq8hc',
        name: "Enphase IQ8HC Microinverter IQ8HC-72-M-DOM-US Made in the USA",
        model: "IQ8HC-72-M-DOM-US",
        power: "384VA",
        type: "Microinverter",
        availability: "in-stock",
        image: "/images/products/inverters/ENPHASE_240v.webp",
        brand: "Enphase"
      },
      {
        id: 'solaredge-u650-optimizer',
        name: "SolarEdge Power Optimizer 650W 15A 60V U650-1GM4MRMU Domestic Content",
        model: "SolarEdge U650",
        power: "650W",
        type: "Power Optimizer",
        availability: "in-stock",
        image: "/images/products/inverters/SOLAREDGE.webp",
        brand: "SolarEdge"
      },
      {
        id: 'solaredge-homehub-7kw',
        name: "SolarEdge 7KW Home Hub Inverter SE5700H-USMNBE78",
        model: "SE5700H-USMNBE78",
        power: "7kW",
        type: "Hybrid Inverter",
        availability: "in-stock",
        image: "/images/products/inverters/SOLAREDGEHOMEHUB.webp",
        brand: "SolarEdge"
      },
      {
        id: 'enphase-iq7hs',
        name: "Enphase IQ7HS Microinverter IQ7HS-66-M-US",
        model: "EN-IQ7HS-66-M-US",
        power: "384VA",
        type: "Microinverter",
        availability: "in-stock",
        image: "/images/products/inverters/ENPHASEIQ7HS.webp",
        brand: "Enphase"
      }
    ],
    'storage-solutions': [
      {
        id: 'enphase-5kwh-battery',
        name: "Enphase 5.0 kWh IQ Battery 5P for IQ Battery 10C Unit B05-C01-US00-1-3 (Standalone)",
        model: "B05-C01-US00-1-3",
        capacity: "5.0kWh",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/storage-solutions/ENPHASE_5.0KWh.webp",
        brand: "Enphase"
      },
      {
        id: 'midnite-16kwh-powerflo',
        name: "MidNite 16 kWh MNPowerflo16 51.2V Nominal Wall Mount Battery",
        model: "MNPowerflo16",
        capacity: "16.076kWh",
        voltage: "51.2V",
        availability: "in-stock",
        image: "/images/products/storage-solutions/MIDNITE16kwh.webp",
        brand: "MidNite"
      },
      {
        id: 'schneider-10kwh-battery',
        name: "Schneider 10kWh Electric Boost LFP Battery BAT10K1",
        model: "BAT10K1",
        capacity: "10.56kWh",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/storage-solutions/SCHNEIDER10kwh.webp",
        brand: "Schneider"
      },
      {
        id: 'fortress-power-18.5kwh',
        name: "Fortress Power eVault Max 18.5 kWh 48V Lithium Iron Phosphate Battery",
        model: "eVault Max 18.5",
        capacity: "18.5kWh",
        voltage: "51.2V",
        availability: "in-stock",
        image: "/images/products/storage-solutions/FORTRESS18.5kwh.webp",
        brand: "Fortress Power"
      }
    ],
    'charge-controllers': [
      {
        id: 'enphase-iq-load-controller',
        name: "Enphase EP-NA-LK02-040 Accessory IQ Load Controller",
        model: "EP-NA-LK02-040",
        current: "N/A",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/charge-controllers/ENPHASELOADCONTROLLER.webp",
        brand: "Enphase"
      },
      {
        id: 'schneider-conext-100a',
        name: "Schneider Conext 865-1034 100A 600VDC MPPT Charge Controller",
        model: "XW-MPPT100-600",
        current: "100A",
        voltage: "600V",
        availability: "in-stock",
        image: "/images/products/charge-controllers/SCHNEIDERCONTROLLER.webp",
        brand: "Schneider Electric"
      },
      {
        id: 'midnite-classic-250',
        name: "Midnite Solar CLASSIC250 63A 250VDC MPPT Charge Controller",
        model: "CLASSIC 250",
        current: "63A",
        voltage: "250V",
        availability: "in-stock",
        image: "/images/products/charge-controllers/MIDNITECONTROLLER.webp",
        brand: "MidNite Solar"
      },
      {
        id: 'enphase-iq-system-controller-2',
        name: "Enphase EN-EP200G101-M240US01 IQ System Controller 2 w/ Neutral-Forming Transformer, Microgrid Interconnect Device & Breakers",
        model: "EN-EP200G101-M240US01",
        current: "N/A",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/charge-controllers/ENPHASE_M24.webp",
        brand: "Enphase"
      }
    ],
    'racking': [
      {
        id: 'k2-crossrail-44x',
        name: "K2 Systems SPO CrossRail 44-X 86'' Mill 4000143",
        model: "4000143",
        material: "6000 Series Aluminum",
        length: "86\"",
        availability: "in-stock",
        image: "/images/products/racking/K2_RAIL.webp",
        brand: "K2 Systems"
      },
      {
        id: 'ironridge-xr-rail-132a',
        name: "IronRidge XR RAIL XR-1000-132A 132\" (11') Clear Rail",
        model: "XR-1000-132A",
        material: "Durable Materials",
        type: "Clear Rail",
        availability: "in-stock",
        image: "/images/products/racking/IRONRIDGERAIL.webp",
        brand: "IronRidge"
      },
      {
        id: 'ironridge-xr-100-168m',
        name: "IronRidge Mounting Rail 168 inches (14 ft) XR-100-168M-US",
        model: "XR-100-168M-US",
        material: "6000-series Aluminum Alloy",
        length: "168\"",
        availability: "in-stock",
        image: "/images/products/racking/IRONRIDGE168.webp",
        brand: "IronRidge"
      },
      {
        id: 'prosolar-rooftrac-r-172xd',
        name: "Prosolar RoofTrac R-172XD 172\" (14') Clear Extra Deep Support Rail",
        model: "R-172XD",
        material: "Aluminum",
        length: "172\"",
        availability: "in-stock",
        image: "/images/products/racking/PROSOLAR172.webp",
        brand: "ProSolar"
      },
      {
        id: 'k2-crossrail-44x-185',
        name: "K2 Systems CrossRail 44-X 185'' Mill 4000721",
        model: "4000721",
        material: "6000 Series Aluminum",
        length: "185\"",
        availability: "in-stock",
        image: "/images/products/racking/K2_185.webp",
        brand: "K2 Systems"
      },
      {
        id: 'ironridge-xr1000-210m',
        name: "IronRidge XR1000 210\" 17.5ft Anodized Rail Mill XR-1000-210M",
        model: "XR-1000-210M",
        material: "6000-series Aluminum Alloy",
        length: "210\"",
        availability: "in-stock",
        image: "/images/products/racking//IRONRIDGE_210.webp",
        brand: "IronRidge"
      }
    ],
    'mounting': [
      {
        id: 'ironridge-ufo-lft-03-m1',
        name: "IronRidge UFO LFT-03-M1 Mill Slotted L-foot",
        model: "LFT-03-M1",
        material: "Aluminum",
        finish: "Mill",
        compatibility: "UFO Series",
        availability: "in-stock",
        image: "/images/products/mounting/IRONRIDGELFOOT.webp",
        brand: "IronRidge",
        type: "L-Foot"
      },
      {
        id: 'unirac-solarmount-304001c',
        name: "Unirac Solarmount 304001C Clear Serrated L-foot",
        model: "304001C",
        material: "Clear",
        mounting: "Serrated with T-Bolt",
        compatibility: "Various solar panel systems",
        availability: "in-stock",
        image: "/images/products/mounting/UNIRACLFOOT.webp",
        brand: "Unirac",
        type: "L-Foot"
      },
      {
        id: 'unirac-solarmount-304001d',
        name: "Unirac Solarmount 304001D Dark Serrated L-foot",
        model: "304001D",
        material: "Aluminum",
        finish: "Dark",
        design: "Serrated",
        compatibility: "Unirac Solarmount",
        availability: "in-stock",
        image: "/images/products/mounting/UNIRACDLFOOT.webp",
        brand: "Unirac",
        type: "L-Foot"
      },
      {
        id: 'unirac-ecolibrium-ecofoot2-es20207',
        name: "UNIRAC ECOLIBRIUM ECOFOOT2 ES20207 BALLAST BASE",
        model: "ES20207",
        material: "Durable Metal Alloy",
        installation: "Ballast Base",
        compatibility: "Various Solar Setups",
        availability: "in-stock",
        image: "/images/products/mounting/UNIRACBASE.webp",
        brand: "Unirac",
        type: "Ballast Base"
      },
      {
        id: 's5-versagard-metal-roof-lfoot',
        name: "S-5-Versagard METAL ROOF L-FOOT",
        model: "VersaGard",
        type: "Metal Roof L-Foot",
        design: "VersaGard",
        compatibility: "Various Metal Roofs",
        availability: "in-stock",
        image: "/images/products/mounting/VERSAGARDLFOOT.webp",
        brand: "S-5!",
        use: "Solar Panel Installations, Snow Retention"
      },
      {
        id: 'snapnrack-ultra-rail-242-01223',
        name: "Snapnrack Ultra Rail 242-01223 Silver L-foot",
        model: "242-01223",
        material: "Aluminum",
        color: "Silver",
        compatibility: "Universal",
        installation: "Roof Mount",
        availability: "in-stock",
        image: "/images/products/mounting/SNAPNRACKLFOOT.webp",
        brand: "Snapnrack",
        type: "L-Foot"
      },
      {
        id: 'unirac-roofmount-310800',
        name: "UNIRAC ROOFMOUNT 310800 BALLAST BAY",
        model: "310800",
        type: "Rooftop Mount",
        tilt: "5 degrees",
        compatibility: "Various roof types",
        material: "Durable steel/aluminum construction",
        availability: "in-stock",
        image: "/images/products/mounting/UNIRACROOFMOUNT.webp",
        brand: "UniRac",
        installation: "Pre-assembled components"
      },
      {
        id: 'ironridge-ufo-bhw-tb-02-a1',
        name: "Ironridge Ufo BHW-TB-02-A1 Mill T-bolt L-foot Bonding Hardware",
        model: "BHW-TB-02-A1",
        material: "Aluminum",
        compatibility: "FF2, L-feet, UFO series",
        attachment: "Bonding",
        installation: "T-Bolt",
        availability: "in-stock",
        image: "/images/products/mounting/IRONRIDGETBOLT.webp",
        brand: "IronRidge",
        type: "Bonding Hardware"
      },
      {
        id: 'ecofasten-lfoot-scl-101-blk',
        name: "EcoFasten L-Foot SCL-101 BLK 3″ 3011018",
        model: "3011018",
        material: "Aluminum (foot); Stainless steel (hardware)",
        finish: "Black (BLK)",
        height: "3.00 in",
        compatibility: "Rail-based PV racking",
        availability: "in-stock",
        image: "/images/products/mounting/ECOFASTENLFOOT.webp",
        brand: "EcoFasten",
        type: "L-Foot"
      }
    ],
    'solar-equipment': [
      {
        id: 'titan-pv-wire-10awg-red',
        name: "Titan 01-PV-1019X-SJ-RD-2N 10AWG 1,000' Red PV Wire",
        model: "01-PV-1019X-SJ-RD-2N",
        material: "19 Strand Copper",
        size: "10AWG",
        availability: "in-stock",
        image: "/images/products/solar-equipment/TITAN.webp",
        brand: "Titan"
      },
      {
        id: 'fronius-dc-connector-kit-part-a',
        name: "FRONIUS 4,202,014,479 DC CONNECTOR KIT PART A",
        model: "42,0201,4479",
        type: "Positive Bus Bar",
        availability: "in-stock",
        image: "/images/products/solar-equipment/FRONIUS.webp",
        brand: "Fronius"
      },
      {
        id: 'apsystems-bus-end-cap',
        name: "APsystems 2060700007 Bus End Cap",
        model: "2060700007",
        type: "AC Bus Cable End Cap",
        features: "YC600 & QS1 Compatible",
        availability: "in-stock",
        image: "/images/products/solar-equipment/APSYSTEMS.webp",
        brand: "APsystems"
      },
      {
        id: 'generac-snaprs-apke00011',
        name: "Generac SnapRS APKE00011 Inline Disconnect Switch For Rapid Shut Down",
        model: "APKE00011",
        type: "Inline Disconnect Switch",
        features: "NEC 690.12 Compliant",
        availability: "in-stock",
        image: "/images/products/solar-equipment/GENERAC.webp",
        brand: "Generac"
      }
    ],
    'accessories': [
      {
        id: 'midnite-solar-mneac30-breaker',
        name: "Midnite Solar MNEAC30 30AMP Ac Din Rail Mount Breaker",
        model: "MNEAC30",
        type: "AC Din Rail Mount Breaker",
        features: "30A Capacity, Din Rail Mount",
        availability: "in-stock",
        image: "/images/products/accessories/MIDNITEBREAKER.webp",
        brand: "MidNite Solar"
      },
      {
        id: 'midnite-solar-mneac10-breaker',
        name: "MidNite Solar MNEAC10 10A 120VAC Din Rail Mount Circuit Breaker",
        model: "MNEAC10",
        type: "Din Rail Mount Circuit Breaker",
        features: "10A, 120VAC, DIN Rail Mount",
        availability: "in-stock",
        image: "/images/products/accessories/MIDNITE10a.webp",
        brand: "MidNite Solar"
      },
              {
          id: 'victron-orion-tr-smart-24-12-30a',
          name: "Victron ORI241236140 Orion-Tr Smart 24/12-30A (360W) Non-isolated DC-DC",
          model: "ORI241236140",
          type: "DC-DC Converter",
          features: "360W, 30A, 24V to 12V",
          availability: "in-stock",
          image: "/images/products/accessories/VICTRON30a.webp",
          brand: "Victron Energy"
        },
        {
          id: 'iota-engineering-agm-smart-controller',
          name: "Iota Engineering AGM 14.7VDC/29.4VDC 2-Stage IOTA-AGM Smart Controller",
          model: "IOTA-AGM",
          type: "Smart Controller",
          features: "4-Stage Charging, AGM Optimized",
          availability: "in-stock",
          image: "/images/products/accessories/IOTA-AGM.webp",
          brand: "Iota Engineering"
        },
        {
          id: 'sma-rsc-1x-us-10-rapid-shutdown-controller',
          name: "SMA, RSC-1X-US-10, Rapid Shutdown Controller",
          model: "RSC-1X-US-10",
          type: "Rapid Shutdown Controller",
          features: "600VDC, UL Certified, NEC 690.12",
          availability: "in-stock",
          image: "/images/products/accessories/SMA_CONTROLLER.webp",
          brand: "SMA"
        },
        {
          id: 'midnite-solar-mndc175plus-mini-dc-disconnect',
          name: "MidNite Solar MNDC175PLUS Mini DC Disconnect PC Plus",
          model: "MNDC175PLUS",
          type: "Mini DC Disconnect",
          features: "175V, 175A, 2-Pole, NEMA 3R",
          availability: "in-stock",
          image: "/images/products/accessories/MIDNITE_DC.webp",
          brand: "MidNite Solar"
        },
        {
          id: 'midnite-solar-mndc125plus-mini-dc-disconnect',
          name: "MidNite Solar MNDC125PLUS Mini DC Disconnect PC Plus",
          model: "MNDC125PLUS",
          type: "Mini DC Disconnect PC Plus",
          features: "125VDC, 125A, Steel Enclosure, IP20",
          availability: "in-stock",
          image: "/images/products/accessories/MIDNITE125.webp",
          brand: "MidNite Solar"
        },
        {
          id: 'staubli-3-foot-mc4-extender-cable',
          name: "Staubli 3 Foot MC4 Extender Cable UL Certified 59014726-0098UL",
          model: "59014726-0098UL",
          type: "MC4 Extender Cable",
          features: "3ft, 10AWG, UL Certified, MC4 Male-Female",
          availability: "in-stock",
          image: "/images/products/accessories/STAUBLI3.webp",
          brand: "Staubli"
        },
        {
          id: 'enphase-en4-to-mc4-adapter-cable',
          name: "Enphase EN4 to MC4 Adapter Cable 1000 mm ECA-EN4-S22-10-12",
          model: "ECA-EN4-S22-10-12",
          type: "Adapter Cable",
          features: "1000mm, EN4 to MC4, UL 9703, 12AWG",
          availability: "in-stock",
          image: "/images/products/accessories/ENPHASEADAPTER.webp",
          brand: "Enphase"
        },
        {
          id: 'apsystems-ac-cable-connector-female-40a',
          name: "APSystems AC Cable Connector - Female - 40A rated 10 AWG 2301512002",
          model: "2301512002",
          type: "AC Connector (Female)",
          features: "600V, 40A, IP67, 10AWG, ≤50mΩ",
          availability: "in-stock",
          image: "/images/products/accessories/APSYS_FEMALE.webp",
          brand: "APSystems"
        },
        {
          id: 'midnite-solar-mnpv4-mc4-combiner-box',
          name: "Midnite Solar MNPV4-MC4 Combiner Box",
          model: "MNPV4-MC4",
          type: "3R Aluminum Pre-Wired Combiner",
          features: "4 Strings, MC4 Compatible, Type 3R, Wall Mount",
          availability: "in-stock",
          image: "/images/products/accessories/MIDNITECOMBINER.webp",
          brand: "MidNite Solar"
        },
        {
          id: 'solaredge-se1000-rsd-s3-b-rapid-shutdown-kit',
          name: "SolarEdge SE1000-RSD-S3-B (SRE - SolarEdge Rapid Shutdown Kit",
          model: "SE1000-RSD-S3-B",
          type: "Rapid Shutdown Kit",
          features: "NEC 690.12 Compliant, 1000VDC, <30V in 30s",
          availability: "in-stock",
          image: "/images/products/accessories/SOLAREDGEKIT.webp",
        brand: "SolarEdge"
      }
    ]
  };

  const getFilteredProducts = () => {
    let filtered = [];
    
    if (activeCategory === 'all') {
      filtered = Object.values(products).flat();
    } else {
      filtered = products[activeCategory] || [];
    }

    // Filter by availability
    if (availability !== 'all') {
      filtered = filtered.filter(product => product.availability === availability);
    }

    return filtered;
  };

  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Solar Products & Equipment
          </h1>
          <p className="text-lg text-slate-600">
            Premium solar panels, inverters, batteries, and complete kits. 
            All equipment is UL-listed and backed by manufacturer warranties.
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-orange-300 hover:bg-orange-50 transition-colors"
          >
            <span className="font-semibold text-slate-900">Filters & Categories</span>
            <svg 
              className={`w-5 h-5 text-slate-500 transition-transform ${showFilters ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories & Filters */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-2xl border border-orange-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Categories</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden p-1 hover:bg-orange-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setShowFilters(false); // Close filters on mobile after selection
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-colors ${
                        activeCategory === category.id
                          ? 'bg-orange-100 text-orange-700 border border-orange-300'
                          : 'hover:bg-orange-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {category.icon}
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{category.name}</div>
                          {category.subcategories && (
                            <div className="text-xs text-slate-500 mt-1">
                              {category.subcategories.length} subcategories
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-2xl border border-orange-300 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Filters</h3>
                
                {/* Availability */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                  >
                    <option value="all">All Products</option>
                    <option value="in-stock">In Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setAvailability('all');
                  }}
                  className="w-full px-4 py-2 rounded-lg border border-orange-300 text-orange-700 hover:bg-orange-50 transition-colors text-sm"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            {currentCategory && (
              <div className="bg-white rounded-2xl border border-orange-300 p-4 sm:p-6 mb-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  {currentCategory.icon}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{currentCategory.name}</h2>
                    <p className="text-sm sm:text-base text-slate-600">{currentCategory.description}</p>
                  </div>
                </div>
                
              </div>
            )}

            {/* Products Grid */}
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {getFilteredProducts().map((product, index) => (
                <div key={product.id} className="bg-white rounded-2xl border border-orange-300 overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain bg-gray-50"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop";
                      }}
                    />
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
                      product.availability === 'in-stock' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.availability === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 line-clamp-2">{product.name}</h3>
                    
                    <div className="space-y-1 sm:space-y-2 mb-4 text-xs sm:text-sm text-slate-600">
                      {product.model && <p><span className="font-medium">Model:</span> {product.model}</p>}
                      {product.wattage && <p><span className="font-medium">Power:</span> {product.wattage}</p>}
                      {product.cells && <p><span className="font-medium">Cells:</span> {product.cells}</p>}
                      {product.voltage && <p><span className="font-medium">Voltage:</span> {product.voltage}</p>}
                      {product.capacity && <p><span className="font-medium">Capacity:</span> {product.capacity}</p>}
                      {product.current && <p><span className="font-medium">Current:</span> {product.current}</p>}
                      {product.material && <p><span className="font-medium">Material:</span> {product.material}</p>}
                      {product.type && <p><span className="font-medium">Type:</span> {product.type}</p>}
                      {product.brand && <p><span className="font-medium">Brand:</span> {product.brand}</p>}
                    </div>
                    
                    {/* Price */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div className="text-lg sm:text-xl font-bold text-orange-700">Call for Price</div>
                      <div className="text-xs sm:text-sm text-slate-500">
                        {product.wattage && `${product.wattage} Power`}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Link 
                          to="/contact" 
                          className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-xl bg-orange-700 text-white hover:bg-orange-800 transition-colors text-xs sm:text-sm font-medium"
                        >
                          Call for Price
                        </Link>
                        <Link 
                          to={`/product/${product.id}`} 
                          className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition-colors text-xs sm:text-sm"
                        >
                          Details
                        </Link>
                      </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {getFilteredProducts().length === 0 && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600 mb-4">Try adjusting your filters or browse a different category.</p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setAvailability('all');
                  }}
                  className="px-6 py-2 rounded-xl bg-orange-700 text-white hover:bg-orange-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Results Count */}
            {getFilteredProducts().length > 0 && (
              <div className="mt-6 text-center text-sm text-slate-600">
                Showing {getFilteredProducts().length} products
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AllIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
      <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2" />
      <line x1="9" y1="12" x2="15" y2="12" strokeWidth="2" />
      <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2" />
    </svg>
  );
}

function InverterIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
      <path d="M9 9h6v6H9z" strokeWidth="2" />
      <path d="M12 6v3M12 15v3" strokeWidth="2" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2" strokeWidth="2" />
      <line x1="22" y1="11" x2="22" y2="13" strokeWidth="2" />
      <line x1="6" y1="11" x2="6" y2="13" strokeWidth="2" />
    </svg>
  );
}

function ControllerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" strokeWidth="2" />
      <path d="M12 1v3M12 21v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M21 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeWidth="2" />
    </svg>
  );
}

function RackingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4 9-4" strokeWidth="2" />
    </svg>
  );
}

function MountingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4 9-4" strokeWidth="2" />
      <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeWidth="2" />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeWidth="2" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" />
    </svg>
  );
}

function AccessoriesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeWidth="2" />
    </svg>
  );
}
