import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetailPage() {
  const { productId } = useParams();

  // This would typically come from an API or database
  // For now, we'll create a mock product based on the ID
  const getProductDetails = (id) => {
    const products = {
      // Solar Panels
      'rec-375w': {
        name: "REC Solar 375W TwinPeak 2S Mono 72 Series",
        model: "REC375TP2SM72",
        wattage: "375W",
        cells: "144",
        voltage: "48.0V",
        availability: "in-stock",
        image: "/images/products/solar-panels/REC_375.webp",
        brand: "REC Solar",
        type: "Monocrystalline",
        description: "High-efficiency REC Solar 375W panel featuring 72 half-cut monocrystalline PERC cells with up to 18.9% efficiency. Built for durability with snow load of 5500 Pa and wind load of 2400 Pa. Features MC4 compatible connectors and operates in temperature range of -40°C to 85°C.",
        specifications: {
          "Power Output": "375W",
          "Cell Type": "72 half-cut monocrystalline PERC cells",
          "Efficiency": "Up to 18.9%",
          "Durability": "Snow load of 5500 Pa, wind load of 2400 Pa",
          "Dimensions": "78.9 x 39.4 x 1.18 inches",
          "Weight": "48.5 lbs.",
          "Temperature Range": "-40°C to 85°C",
          "Product Warranty": "20 years",
          "Performance Warranty": "25 years with guaranteed 86% power output after 25 years",
          "Connectors": "MC4 compatible"
        },
        features: [
          "72 half-cut monocrystalline PERC cells for optimal performance",
          "Up to 18.9% module efficiency",
          "Exceptional durability with 5500 Pa snow load and 2400 Pa wind load",
          "Wide temperature range operation (-40°C to 85°C)",
          "MC4 compatible connectors for easy installation",
          "20-year product warranty for peace of mind",
          "25-year performance warranty with 86% power output guarantee",
          "Advanced PERC technology for higher efficiency",
          "Anti-reflective coating for improved light absorption",
          "PID-resistant for long-term reliability"
        ]
      },
      'jinko-385w': {
        name: "Jinko 385W JKM385M-72HBL-V PERC Diamond Cell",
        model: "JKM385M-72HBL-V",
        wattage: "385W",
        cells: "144",
        voltage: "48.4V",
        availability: "in-stock",
        image: "/images/products/solar-panels/Jinko_385.webp",
        brand: "Jinko",
        type: "Monocrystalline PERC",
        description: "Premium Jinko solar panel featuring Diamond Cell technology for exceptional performance and durability in various environmental conditions.",
        specifications: {
          "Type": "Monocrystalline",
          "Dimensions": "79.06\" x 39.45\" x 1.57\"",
          "Weight": "49.6 lbs",
          "Frame": "Anodized Aluminum Alloy",
          "Connector": "Junction Box (IP68 Rated) w/ 4' 7\" MC4 leads on 12 AWG Cable",
          "Watts (Pmax)": "385 W",
          "Max Power Voltage (VMPP)": "39.37 V",
          "Max Power Current (IMPP)": "9.78 A",
          "Open Circuit Voltage (VOC)": "48.4 V",
          "Short Circuit Current (ISC)": "10.38 A",
          "Max System Voltage": "DC 1500 VDC"
        },
        features: [
          "Diamond Cell technology for enhanced performance",
          "PERC cell structure for higher efficiency",
          "Half-cut cell design for reduced shading losses",
          "Anti-PID technology for long-term stability",
          "30-year linear power warranty",
          "15-year product warranty"
        ]
      },
      'qcells-340w': {
        name: "QCELLS 340W Q.PEAK DUO BLK-G6+ All Black",
        model: "Q.PEAK DUO BLK-G6+ 340",
        wattage: "340W",
        cells: "120",
        voltage: "40.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/QCELLS_340.webp",
        brand: "QCELLS",
        type: "Monocrystalline",
        description: "Premium all-black solar panel with Q.ANTUM DUO technology, perfect for residential installations requiring aesthetic appeal and high performance.",
        specifications: {
          "Model Number": "Q.PEAK DUO BLK-G6+ 340",
          "Power Output (Pmax)": "340W",
          "Maximum Efficiency": "19.0%",
          "Power Tolerance": "0~+5W",
          "Open Circuit Voltage (Voc)": "40.66V",
          "Short Circuit Current (Isc)": "10.52A",
          "Maximum Power Voltage (Vmp)": "33.94V",
          "Maximum Power Current (Imp)": "10.02A",
          "Module Dimensions (L x W x H)": "68.50\" × 40.55\" × 1.57\"",
          "Weight": "47.4 lbs",
          "Cell Type": "Monocrystalline (120 Half-Cell)",
          "Glass": "3.2mm Anti-Reflective Tempered Glass",
          "Frame Material": "Black Anodized Aluminum",
          "Junction Box": "IP67, 3 Bypass Diodes",
          "Connector Type": "Stäubli MC4",
          "Cable Length": "1100mm (+) / 1100mm (-)",
          "Maximum System Voltage": "1000V DC",
          "Maximum Fuse Rating": "20A",
          "Operating Temperature": "-40°C to +85°C",
          "Certifications": "UL 61730, IEC 61215, IEC 61730, ISO 9001, ISO 14001"
        },
        features: [
          "Q.ANTUM DUO technology for superior performance",
          "All-black design for aesthetic appeal",
          "Half-cut cell technology for better efficiency",
          "Anti-reflective coating for improved light capture",
          "25-year linear power warranty",
          "12-year product warranty"
        ]
      },
      'canadian-330w': {
        name: "Canadian Solar 330W HiDM CS1H-330MS",
        model: "CS1H-330MS",
        wattage: "330W",
        cells: "72",
        voltage: "39.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/CS_330.webp",
        brand: "Canadian Solar",
        type: "Polycrystalline",
        description: "Reliable polycrystalline solar panel with HiDM technology, offering excellent performance and durability for commercial and residential applications.",
        specifications: {
          "Maximum Power (Pmax)": "330W",
          "Open-Circuit Voltage (Voc)": "39.8V",
          "Short-Circuit Current (Isc)": "10.8A",
          "Maximum Power Voltage (Vmp)": "33.8V",
          "Maximum Power Current (Imp)": "9.8A",
          "Module Efficiency": "19.5%",
          "Power Tolerance": "0 ~ +5W",
          "NMOT Maximum Power (Pmax)": "~245W",
          "NMOT Open-Circuit Voltage (Voc)": "~37.5V",
          "NMOT Short-Circuit Current (Isc)": "~8.7A",
          "Temperature Coefficient of Pmax": "-0.37%/°C",
          "Temperature Coefficient of Voc": "-0.29%/°C",
          "Temperature Coefficient of Isc": "+0.05%/°C",
          "Cell Type": "Monocrystalline PERC",
          "Number of Cells": "120 (6x20)",
          "Module Dimensions": "1689 x 996 x 35mm",
          "Weight": "19kg",
          "Front Cover": "3.2mm Tempered Glass",
          "Frame Material": "Anodized Aluminum Alloy",
          "Junction Box": "IP68",
          "Output Cables": "4.0 mm²",
          "Connector Type": "MC4 Compatible",
          "Maximum System Voltage": "1500V",
          "Operating Temperature": "-40°C to +85°C",
          "Maximum Surface Load (Snow/Wind)": "5400 Pa / 2400 Pa",
          "Product Warranty": "12 Years",
          "Linear Power Output Warranty": "25 Years"
        },
        features: [
          "HiDM technology for enhanced performance",
          "Polycrystalline cells for cost-effectiveness",
          "Anti-reflective coating for improved efficiency",
          "PID-resistant for long-term reliability",
          "25-year linear power warranty",
          "10-year product warranty"
        ]
      },
      'hyundai-390w': {
        name: "Hyundai 390W HiS-S390PI Bifacial",
        model: "HiS-S390PI",
        wattage: "390W",
        cells: "144",
        voltage: "48.4V",
        availability: "in-stock",
        image: "/images/products/solar-panels/HYUNDAI_390.webp",
        brand: "Hyundai",
        type: "Mono-crystalline",
        description: "Advanced bifacial solar panel with HiS technology, capturing light from both sides for maximum energy production in optimal installations.",
        specifications: {
          "Model Number": "HiS-S390PI",
          "Nominal Power Output": "390W",
          "Module Efficiency": "19.1%",
          "Cell Type": "Mono-crystalline, 9-busbar, bifacial",
          "Open Circuit Voltage (Voc)": "48.5V",
          "Short Circuit Current (Isc)": "10.18A",
          "Voltage at Pmax (Vmpp)": "40.2V",
          "Current at Pmax (Impp)": "9.72A",
          "Maximum System Voltage": "1500V",
          "Weight": "48.9 lbs",
          "Dimensions (L×W×H)": "80.3\" x 39.4\" x 1.6\"",
          "Frame Material": "Anodized Aluminum Alloy",
          "Junction Box": "IP68 Rated, Weatherproof",
          "Operating Temperature": "-40°F to +185°F (-40°C to +85°C)",
          "Certifications": "UL, IEC, VDE, PID Resistance"
        },
        features: [
          "Bifacial technology for dual-side light capture",
          "HiS technology for enhanced performance",
          "Half-cut cell design for better efficiency",
          "Anti-reflective coating on both sides",
          "30-year linear power warranty",
          "15-year product warranty"
        ]
      },
      'sinotec-410w': {
        name: "Sinotec 410W STS-410P-54BB",
        model: "STS-410P-54BB",
        wattage: "410W",
        cells: "108",
        voltage: "37.6V",
        availability: "in-stock",
        image: "/images/products/solar-panels/SINOTEC_410.webp",
        brand: "Sinotec",
        type: "Monocrystalline PERC",
        description: "High-efficiency Sinotec solar panel with 21% module efficiency, featuring 108 half-cut monocrystalline PERC cells for optimal performance in residential and commercial installations.",
        specifications: {
          "Model": "STS-410P-54BB",
          "Cell Type": "Monocrystalline PERC 182×91mm",
          "Number of Cells": "108 (6×18) Half-Cut",
          "Max Power (Pmax)": "410W",
          "Open Circuit Voltage (Voc)": "37.6V",
          "Short Circuit Current (Isc)": "13.82A",
          "Voltage at Max Power (Vmp)": "31.4V",
          "Current at Max Power (Imp)": "13.06A",
          "Module Efficiency": "21.00%",
          "Temperature Coefficient (Pmax)": "-0.36%/°C",
          "Operating Temperature": "-40°F to +185°F (-40°C to +85°C)",
          "Nominal Operating Cell Temp (NOCT)": "43 ± 2°C",
          "Max System Voltage": "1000V / 1500V DC",
          "Fire Resistance Rating": "Type 1 (UL 1703), Class C (IEC 61730)",
          "Max Series Fuse Rating": "25A",
          "Front Glass": "3.2mm AR-coated tempered glass",
          "Frame": "Anodized aluminum alloy",
          "Junction Box": "IP68, 3 bypass diodes",
          "Cable Length (Portrait)": "47.24 in (1200 mm)",
          "Connector": "MC4 or compatible",
          "Dimensions (L × W × H)": "67.80 × 44.65 × 1.18 in",
          "Weight": "47.4 lbs",
          "Packaging": "31 pcs/pallet, 806 pcs/40' container",
          "Certifications": "UL, IEC 61215 / 61730",
          "Warranty": "25 Years Product, Workmanship & Linear Output"
        },
        features: [
          "21% module efficiency for maximum power output",
          "108 half-cut monocrystalline PERC cells",
          "Advanced cell technology for enhanced performance",
          "IP68 rated junction box with 3 bypass diodes",
          "Fire resistance rating Type 1 (UL 1703), Class C (IEC 61730)",
          "25-year product, workmanship & linear output warranty",
          "MC4 compatible connectors for easy installation",
          "AR-coated tempered glass for improved light capture"
        ]
      },
      'exiom-410w': {
        name: "Exiom 410W EX410-108BMH",
        model: "EX410-108BMH",
        wattage: "410W",
        cells: "108",
        voltage: "37.52V",
        availability: "in-stock",
        image: "/images/products/solar-panels/EXIOM_410.webp",
        brand: "Exiom",
        type: "Monocrystalline Half-Cut",
        description: "High-performance Exiom solar panel with 20.99% module efficiency, featuring 108 half-cut monocrystalline cells for optimal performance in residential and commercial installations.",
        specifications: {
          "Model": "EX410-108BMH",
          "Rated Power (Pmax)": "410W",
          "Module Efficiency": "20.99%",
          "Open-Circuit Voltage (Voc)": "37.52V",
          "Short-Circuit Current (Isc)": "13.88A",
          "Voltage at Pmax (Vmp)": "31.54V",
          "Current at Pmax (Imp)": "13.00A",
          "Power Tolerance": "0 to +5W",
          "Cell Type": "Monocrystalline Half-Cut",
          "Cell Count": "108 (12×9)",
          "Operating Temperature": "-40°C to +85°C",
          "Max System Voltage": "1500V",
          "Max Series Fuse": "30A",
          "Temperature Coeff. (Pmax)": "-0.32%/°C",
          "Temperature Coeff. (Voc)": "-0.27%/°C",
          "Temperature Coeff. (Isc)": "+0.048%/°C",
          "NOCT": "45 ± 2°C",
          "Dimensions (L × W × H)": "67.8 × 44.6 × 1.18 in",
          "Weight": "47.2 lbs",
          "Front Glass": "3.2 mm AR-coated tempered glass",
          "Backsheet": "Transparent black mesh",
          "Junction Box": "IP68, 3 bypass diodes",
          "Connector": "MC4 Compatible",
          "Mechanical Load": "5400 Pa"
        },
        features: [
          "20.99% module efficiency for maximum power output",
          "108 half-cut monocrystalline cells (12×9 configuration)",
          "Advanced cell technology for enhanced performance",
          "IP68 rated junction box with 3 bypass diodes",
          "MC4 compatible connectors for easy installation",
          "AR-coated tempered glass for improved light capture",
          "Transparent black mesh backsheet for aesthetic appeal",
          "5400 Pa mechanical load rating for durability",
          "Wide operating temperature range (-40°C to +85°C)",
          "High system voltage compatibility (1500V)"
        ]
      },
      'znshine-400w': {
        name: "ZNShine 400W ZXM7-SH108-400/M",
        model: "ZXM7-SH108-400/M",
        wattage: "400W",
        cells: "108",
        voltage: "40.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/ZNSHINE_400.webp",
        brand: "ZNshine",
        type: "Monocrystalline",
        description: "High-performance ZNShine solar panel with up to 20.03% module efficiency, featuring 108 half-cut monocrystalline cells for optimal performance in residential and commercial installations.",
        specifications: {
          "Model Name": "ZXM7-SH108-400/M",
          "Manufacturer": "ZNshine",
          "Power Output": "400W",
          "Module Efficiency": "Up to 20.03%",
          "Dimensions": "67.80 x 44.65 x 1.18 inches",
          "Weight": "45.19lbs",
          "Cell Type": "Monocrystalline",
          "Number of Cells": "108 (Half-cut)",
          "Maximum System Voltage": "1500V DC",
          "Connector Type": "MC4 Compatible",
          "Operating Temperature Range": "-40°C to +85°C",
          "Warranty": "12-year product warranty, 25-year linear power warranty",
          "Frame Material": "Anodized Aluminum Alloy",
          "Glass": "High Transmittance Low Iron Tempered Glass",
          "Certifications": "IEC 61215, IEC 61730, ISO9001:2015, ISO14001:2015"
        },
        features: [
          "Up to 20.03% module efficiency for maximum power output",
          "108 half-cut monocrystalline cells for enhanced performance",
          "High transmittance low iron tempered glass for optimal light capture",
          "MC4 compatible connectors for easy installation",
          "Anodized aluminum alloy frame for durability",
          "Wide operating temperature range (-40°C to +85°C)",
          "High system voltage compatibility (1500V DC)",
          "12-year product warranty and 25-year linear power warranty",
          "International certifications for quality assurance"
        ]
      },
      'hyperion-405w': {
        name: "Hyperion Solar 405W HY-DH108P8B",
        model: "HY-DH108P8B-405",
        wattage: "405W",
        cells: "108",
        voltage: "37.23V",
        availability: "in-stock",
        image: "/images/products/solar-panels/HYPERION_405.webp",
        brand: "Hyperion Solar Energy (Runergy)",
        type: "Monocrystalline P-Type PERC",
        description: "High-performance Hyperion solar panel with 20.7% module efficiency, featuring 108 half-cut monocrystalline P-Type PERC cells for optimal performance in residential and commercial installations.",
        specifications: {
          "Manufacturer": "Hyperion Solar Energy (Runergy)",
          "Model": "HY-DH108P8B-405",
          "Rated Power Output (Pmax)": "405W",
          "Module Efficiency": "20.7%",
          "Cell Type": "Monocrystalline P-Type PERC",
          "Number of Cells": "108 (Half-Cell)",
          "Dimensions (L x W x D)": "1722 x 1134 x 30 mm (67.79 x 44.64 x 1.18 in)",
          "Weight": "22.6 kg (49.8 lbs)",
          "Frame Color": "Black",
          "Backsheet Color": "Black",
          "Open Circuit Voltage (Voc)": "37.23V",
          "Short Circuit Current (Isc)": "13.87A",
          "Maximum System Voltage": "1500V DC",
          "Operating Temperature": "-40°C to +85°C (-40°F to +185°F)",
          "Front Load Durability": "5400 Pa (Snow Load)",
          "Rear Load Durability": "2400 Pa (Wind Load)",
          "Connector Type": "MC4-Evo2 or RY01",
          "Product Warranty": "15 Years",
          "Performance Warranty": "30 Years (84.95% of original output after 30 yrs)",
          "Certifications": "PID, Salt Mist, Ammonia Resistant"
        },
        features: [
          "20.7% module efficiency for maximum power output",
          "108 half-cut monocrystalline P-Type PERC cells",
          "Advanced cell technology for enhanced performance",
          "Black frame and backsheet for aesthetic appeal",
          "MC4-Evo2 or RY01 connectors for easy installation",
          "Exceptional durability with 5400 Pa snow load and 2400 Pa wind load",
          "Wide operating temperature range (-40°C to +85°C)",
          "High system voltage compatibility (1500V DC)",
          "15-year product warranty for peace of mind",
          "30-year performance warranty with 84.95% output guarantee",
          "PID, Salt Mist, and Ammonia resistance for harsh environments"
        ]
      },
      'phonosolartwinplus-550w': {
        name: "PhonoSolar TwinPlus 550W PS550M6H-24/TH",
        model: "PS550M6H-24/TH",
        wattage: "550W",
        cells: "144",
        voltage: "40.8V",
        availability: "in-stock",
        image: "/images/products/solar-panels/PHONOSOLARTWINPLUS_550.webp",
        brand: "PhonoSolar",
        type: "Monocrystalline",
        description: "High-performance PhonoSolar TwinPlus panel with 21.3% efficiency, featuring 144 half-cut monocrystalline cells for maximum power output in commercial and large residential installations.",
        specifications: {
          "Model": "PS550M6H-24/TH",
          "Power Output": "550W",
          "Cell Type": "Monocrystalline",
          "Number of Cells": "144 Half-Cells",
          "Efficiency": "~21.3%",
          "Dimensions": "2279 x 1134 x 35 mm",
          "Weight": "28.6 kg (63 lbs)",
          "Frame": "Silver Anodized Aluminum",
          "Glass": "3.2mm Tempered Glass",
          "Operating Temperature": "-40°C to +85°C",
          "Warranty": "12-year product, 30-year performance warranty"
        },
        features: [
          "21.3% efficiency for maximum power output",
          "144 half-cut monocrystalline cells for enhanced performance",
          "Large format design for commercial installations",
          "Silver anodized aluminum frame for durability",
          "3.2mm tempered glass for optimal light transmission",
          "Wide operating temperature range (-40°C to +85°C)",
          "12-year product warranty for peace of mind",
          "30-year performance warranty for long-term reliability",
          "High power density for space-efficient installations",
          "Advanced cell technology for superior performance"
        ]
      },
      'philadelphia-solar-580w': {
        name: "Philadelphia Solar 580W Bifacial 144 Cells",
        model: "PS580-BF-144",
        wattage: "580W",
        cells: "144",
        voltage: "43.15V",
        availability: "in-stock",
        image: "/images/products/solar-panels/PHILADELPHIASOLAR_580.webp",
        brand: "Philadelphia Solar",
        type: "Bifacial N-Type Monocrystalline",
        description: "High-performance Philadelphia Solar bifacial panel with 22.06% efficiency, featuring 144 half-cut N-Type monocrystalline cells for maximum energy production from both front and rear sides.",
        specifications: {
          "Power Output (Pmax)": "580W",
          "Efficiency": "22.06%",
          "Voltage (Vmp)": "43.15V",
          "Current (Imp)": "13.25A",
          "Open Circuit Voltage (Voc)": "51.37V",
          "Short Circuit Current (Isc)": "14.02A",
          "Bifaciality Ratio": "80%",
          "Dimensions (L×W×D)": "89.65 × 44.61 × 1.38 in",
          "Weight": "63.93 lbs",
          "Cell Configuration": "144 half-cut N-Type monocrystalline cells",
          "Frame": "Anodized aluminum (black or silver options)",
          "Glass": "3.2 mm tempered with AR coating",
          "Junction Box": "IP68, 3 bypass diodes",
          "Operating Temp": "-40°C to +85°C",
          "Max System Voltage": "1500V",
          "Test Load (Front/Rear)": "5400 Pa / 2400 Pa",
          "Product Warranty": "12 years",
          "Power Warranty": "30 years (87.4% power retention at year 30)"
        },
        features: [
          "22.06% efficiency for maximum power output",
          "Bifacial technology with 80% bifaciality ratio",
          "144 half-cut N-Type monocrystalline cells",
          "Dual-side energy production for increased yield",
          "Anodized aluminum frame with black or silver options",
          "3.2 mm tempered glass with AR coating",
          "IP68 rated junction box with 3 bypass diodes",
          "Exceptional durability with 5400 Pa front load and 2400 Pa rear load",
          "Wide operating temperature range (-40°C to +85°C)",
          "High system voltage compatibility (1500V)",
          "12-year product warranty for peace of mind",
          "30-year power warranty with 87.4% retention guarantee"
        ]
      },
      'phono-590w-draco': {
        name: "Phono 590W Draco N-TOPCON PS590M8GF-24/TNH Solar Panel",
        model: "PS590M8GF-24/TNH",
        wattage: "590W",
        cells: "144",
        voltage: "43.58V",
        availability: "in-stock",
        image: "/images/products/solar-panels/PHONO_590.webp",
        brand: "Phono",
        type: "N-Type TOPCon Monocrystalline Bifacial",
        description: "High-performance Phono Draco N-TOPCON solar panel with 22.84% efficiency, featuring 144 half-cut N-Type TOPCon cells with bifacial technology for maximum energy production in commercial and utility-scale installations.",
        specifications: {
          "Model Number": "PS590M8GF-24/TNH",
          "Solar Cell Type": "N-Type TOPCon Monocrystalline Bifacial",
          "Number of Cells": "144 Half-Cut Cells (12 × 12 Layout)",
          "Nominal Power Output (Pmax)": "590W",
          "Module Efficiency": "22.84%",
          "Voltage at Pmax (Vmpp)": "43.58V",
          "Current at Pmax (Impp)": "13.54A",
          "Open Circuit Voltage (Voc)": "52.68V",
          "Short Circuit Current (Isc)": "14.25A",
          "Temperature Coefficient (Pmax)": "-0.30%/K",
          "Maximum System Voltage": "1500V DC",
          "Power Tolerance": "0 to +5W",
          "Bifaciality Factor": "80% ± 5%",
          "Mechanical Load Capacity": "5400Pa (Front), 2400Pa (Rear)",
          "Dimensions (L × W × H)": "89.69 × 44.65 × 1.18 in",
          "Weight": "71.65 lbs",
          "Glass (Front & Rear)": "2.0mm Tempered Dual Glass",
          "Frame": "Anodized Aluminum Alloy",
          "Cable & Connector": "4mm² (IEC), 450mm (+) / 250mm (-), MC4 Compatible",
          "Operating Temperature": "-40°C to +85°C",
          "Maximum Hail Impact": "25mm at 80km/h",
          "Fire Rating": "Type 29",
          "Certifications": "IEC 61215, IEC 61730, UL 61730",
          "Management Standards": "ISO 9001, ISO 14001, ISO 45001"
        },
        features: [
          "22.84% efficiency for maximum power output",
          "N-Type TOPCon technology for superior performance",
          "144 half-cut cells in 12 × 12 layout",
          "Bifacial technology with 80% ± 5% bifaciality factor",
          "Dual glass construction for enhanced durability",
          "Anodized aluminum alloy frame for corrosion resistance",
          "MC4 compatible connectors for easy installation",
          "Exceptional mechanical load capacity (5400Pa front, 2400Pa rear)",
          "Wide operating temperature range (-40°C to +85°C)",
          "High system voltage compatibility (1500V DC)",
          "Maximum hail impact resistance (25mm at 80km/h)",
          "Fire rating Type 29 for safety compliance",
          "International certifications (IEC 61215, IEC 61730, UL 61730)",
          "Management standards compliance (ISO 9001, ISO 14001, ISO 45001)",
          "Power tolerance of 0 to +5W for consistent performance"
        ]
      },
      'ja-solar-615w-bifacial': {
        name: "JA Solar 615W Bifacial Mono PERC Silver Frame Solar Panel",
        model: "JAM66-D45-615LB",
        wattage: "615W",
        cells: "132",
        voltage: "43.58V",
        availability: "in-stock",
        image: "/images/products/solar-panels/JASOLAR_615.webp",
        brand: "JA Solar",
        type: "Monocrystalline PERC Bifacial",
        description: "High-performance JA Solar bifacial panel with 21.3% efficiency, featuring 132 half-cut monocrystalline PERC cells with 11BB technology for maximum energy production in commercial and utility-scale installations.",
        specifications: {
          "Model": "JAM66-D45-615LB",
          "Rated Power (Pmax)": "615W",
          "Module Efficiency": "21.3%",
          "Power Tolerance": "0 ~ +5W",
          "Cell Type": "Monocrystalline PERC, 11BB Half-Cell",
          "Number of Cells": "132 (6 × 22)",
          "Glass": "2.0 mm + 2.0 mm tempered glass",
          "Frame": "Anodized aluminum alloy",
          "Junction Box": "IP68 rated, 3 diodes",
          "Connector": "MC4 or MC4-compatible",
          "Dimensions (L × W × H)": "93.78 × 44.65 × 1.38 in",
          "Weight": "73.19 lbs",
          "Maximum System Voltage": "1500V DC",
          "Maximum Series Fuse Rating": "30A",
          "Operating Temperature": "-40°F to +185°F (-40°C to +85°C)",
          "Snow Load": "5400 Pa",
          "Wind Load": "2400 Pa",
          "Fire Rating": "Class C",
          "Warranty": "12-Year Product / 30-Year Linear Output"
        },
        features: [
          "21.3% efficiency for maximum power output",
          "132 half-cut monocrystalline PERC cells with 11BB technology",
          "Bifacial technology for dual-side energy production",
          "Dual glass construction (2.0 mm + 2.0 mm tempered glass)",
          "Anodized aluminum alloy frame for durability",
          "IP68 rated junction box with 3 diodes",
          "MC4 or MC4-compatible connectors for easy installation",
          "Exceptional mechanical load capacity (5400 Pa snow, 2400 Pa wind)",
          "Wide operating temperature range (-40°C to +85°C)",
          "High system voltage compatibility (1500V DC)",
          "Maximum series fuse rating of 30A",
          "Fire rating Class C for safety compliance",
          "12-year product warranty for peace of mind",
          "30-year linear output warranty for long-term reliability",
          "Power tolerance of 0 ~ +5W for consistent performance"
        ]
      },
      'thornova-620w-tangra': {
        name: "Thornova 620W (Pallet of 31) Tangra L Pro HD N-Type Bifacial Solar Panel",
        model: "TS-BGT66(620)-G11",
        wattage: "620W",
        cells: "132",
        voltage: "44.6V",
        availability: "in-stock",
        image: "/images/products/solar-panels/THORNOVA_620.webp",
        brand: "Thornova",
        type: "N-Type Monocrystalline Bifacial",
        description: "High-performance Thornova Tangra L Pro HD N-Type bifacial panel with 22.8% efficiency, featuring 132 half-cut N-Type monocrystalline cells with bifacial technology for maximum energy production in commercial and utility-scale installations.",
        specifications: {
          "Model": "TS-BGT66(620)-G11",
          "Cell Type": "N-Type Monocrystalline, Half-Cut",
          "Number of Cells": "132 (66×2) Bifacial",
          "Max Power (Pmax)": "620W",
          "Open Circuit Voltage (Voc)": "~53.0V",
          "Short Circuit Current (Isc)": "~15.4A",
          "Voltage at Max Power (Vmp)": "~44.6V",
          "Current at Max Power (Imp)": "~13.9A",
          "Module Efficiency": "~22.8%",
          "Temperature Coefficient (Pmax)": "-0.29%/°C",
          "Operating Temperature": "-40°C to +85°C",
          "Nominal Operating Cell Temp (NOCT)": "45 ± 2°C",
          "Max System Voltage": "1500V DC",
          "Max Series Fuse Rating": "30A",
          "Bifaciality": "80% ± 5%",
          "Front Glass": "2.0 mm AR-coated tempered glass",
          "Back Glass": "2.0 mm heat-strengthened glass",
          "Frame": "Anodized aluminum alloy",
          "Junction Box": "IP68, 3 bypass diodes",
          "Cable Length": "Customizable (standard 300 mm / 1200 mm)",
          "Connector": "MC4 or compatible",
          "Dimensions (L × W × H)": "93.78 × 44.65 × 1.18 in",
          "Weight": "71.65 lbs",
          "Mechanical Load": "5400 Pa (front) / 2400 Pa (rear)",
          "Certifications": "IEC 61215 / 61730, ISO 9001, ISO 14001, ISO 45001",
          "Warranty": "30 Years Linear Output, 15 Years Product"
        },
        features: [
          "22.8% efficiency for maximum power output",
          "132 half-cut N-Type monocrystalline cells (66×2) bifacial",
          "N-Type technology for superior performance and reliability",
          "Bifacial technology with 80% ± 5% bifaciality",
          "Dual glass construction with AR-coated front and heat-strengthened back",
          "Anodized aluminum alloy frame for corrosion resistance",
          "IP68 rated junction box with 3 bypass diodes",
          "MC4 or compatible connectors for easy installation",
          "Customizable cable length options",
          "Exceptional mechanical load capacity (5400 Pa front, 2400 Pa rear)",
          "Wide operating temperature range (-40°C to +85°C)",
          "High system voltage compatibility (1500V DC)",
          "Maximum series fuse rating of 30A",
          "International certifications (IEC 61215 / 61730, ISO 9001, ISO 14001, ISO 45001)",
          "30-year linear output warranty for long-term reliability",
          "15-year product warranty for peace of mind",
          "Pallet configuration of 31 panels for bulk installations"
        ]
      },
      'hyundai-640w-nj': {
        name: "Hyundai 640W (504 per Container) NJ Series N Type TOPCon Solar Panel",
        model: "HiN-T640NJ",
        wattage: "640W",
        cells: "156",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/solar-panels/HYUNDAI_640.webp",
        brand: "Hyundai",
        type: "N-Type TOPCon Bifacial",
        description: "High-performance Hyundai NJ Series N-Type TOPCon bifacial panel with 22.90% efficiency, featuring 156 half-cell N-Type TOPCon technology for maximum energy production in commercial and utility-scale installations.",
        specifications: {
          "Model": "HiN-T640NJ",
          "Rated Power Output": "640W",
          "Cell Technology": "N-Type TOPCon, Half-Cell, Bifacial",
          "Number of Cells": "156",
          "Module Efficiency": "22.90%",
          "Dimensions (L x W x H)": "2465 mm × 1134 mm × 30 mm",
          "Weight": "34.7 kg",
          "Product Warranty": "12 Years",
          "Performance Warranty": "30 Years Linear Power Output",
          "Max. Snow Load": "5400 Pa"
        },
        features: [
          "22.90% efficiency for maximum power output",
          "156 half-cell N-Type TOPCon technology",
          "Bifacial design for enhanced energy production",
          "N-Type TOPCon cell technology for superior performance",
          "High power output of 640W per panel",
          "Large format design for commercial installations",
          "Durable construction for long-term reliability",
          "12-year product warranty for peace of mind",
          "30-year linear power output warranty",
          "High snow load capacity of 5400 Pa",
          "Optimized for utility-scale and commercial projects",
          "Container configuration of 504 panels for bulk shipments",
          "Advanced cell technology for improved efficiency",
          "Bifacial capability for additional rear-side energy generation",
          "Robust frame design for harsh environmental conditions"
        ]
      },

      // Inverters
      'enphase-iq8hc': {
        name: "Enphase IQ8HC Microinverter IQ8HC-72-M-DOM-US Made in the USA",
        model: "IQ8HC-72-M-DOM-US",
        power: "384VA",
        type: "Microinverter",
        availability: "in-stock",
        image: "/images/products/inverters/ENPHASE_240v.webp",
        brand: "Enphase",
        description: "High-capacity microinverter designed for larger solar modules with advanced grid support features and made in the USA for superior quality and reliability.",
        specifications: {
          "Model": "IQ8HC-72-M-DOM-US",
          "Module Compatibility": "440W – 540W 72-cell or equivalent",
          "AC Output Power (Peak)": "384VA",
          "Nominal AC Voltage": "240V Split-Phase",
          "MPPT Operating Range": "38 – 45V",
          "DC Input Voltage Range": "16 – 60V",
          "CEC Weighted Efficiency": "97.0%",
          "Grid Support Features": "Volt/VAR, Freq/Watt, Ride-Through (IEEE 1547)",
          "Monitoring": "Via Enphase App and IQ Gateway",
          "Communication": "Power Line Communication (PLC)",
          "Enclosure Rating": "NEMA 6 (Outdoor Rated)",
          "Dimensions (L × W × H)": "8.3 x 6.9 x 1.2 inches",
          "Weight": "~2.71 lbs",
          "Certifications": "UL 1741 SA, IEEE 1547, NEC 690.12",
          "Warranty": "25-Year Limited Warranty"
        },
        features: [
          "97.0% CEC weighted efficiency for maximum energy production",
          "High-capacity 384VA output for larger solar modules",
          "Compatible with 440W – 540W 72-cell modules",
          "Advanced grid support features (Volt/VAR, Freq/Watt, Ride-Through)",
          "IEEE 1547 compliant grid-forming capability",
          "Real-time monitoring via Enphase App and IQ Gateway",
          "Power Line Communication (PLC) for reliable data transmission",
          "NEMA 6 outdoor rated enclosure for harsh environments",
          "Made in the USA for superior quality and reliability",
          "25-year limited warranty for long-term peace of mind",
          "Easy installation and maintenance",
          "Split-phase 240V output for residential applications",
          "Wide DC input voltage range (16 – 60V) for flexibility",
          "Optimized MPPT operating range (38 – 45V)",
          "UL 1741 SA, IEEE 1547, and NEC 690.12 certified"
        ]
      },
      'solaredge-u650-optimizer': {
        name: "SolarEdge Power Optimizer 650W 15A 60V U650-1GM4MRMU Domestic Content",
        model: "SolarEdge U650",
        power: "650W",
        type: "Power Optimizer",
        availability: "in-stock",
        image: "/images/products/inverters/SOLAREDGE.webp",
        brand: "SolarEdge",
        description: "High-performance power optimizer with 99.5% maximum efficiency, designed to maximize energy production from individual solar panels with advanced monitoring and safety features.",
        specifications: {
          "Model": "SolarEdge U650",
          "Rated Input DC Power": "650W",
          "Maximum Input Voltage (Voc)": "60V",
          "MPPT Operating Range": "8–60V",
          "Maximum Input Current (Isc)": "15A",
          "Maximum Input Short Circuit Current": "18.75A",
          "Maximum Efficiency": "99.5%",
          "Weighted Efficiency": "98.6%",
          "Maximum Output Voltage": "60V",
          "Maximum Output Current": "15A",
          "Dimensions": "5.07 × 6.10 × 1.18 in",
          "Weight": "1.6 lbs",
          "Operating Temperature": "-40°C to +85°C",
          "Protection Rating": "IP68 / NEMA6P",
          "Connector Type": "MC4",
          "Warranty": "25 years"
        },
        features: [
          "99.5% maximum efficiency for optimal energy production",
          "98.6% weighted efficiency for consistent performance",
          "High power handling capacity of 650W",
          "Wide MPPT operating range (8–60V) for flexibility",
          "Maximum input current of 15A for high-power panels",
          "Advanced monitoring and diagnostics capabilities",
          "SafeDC technology for rapid shutdown compliance",
          "IP68 / NEMA6P protection rating for harsh environments",
          "MC4 connector compatibility for easy installation",
          "Wide operating temperature range (-40°C to +85°C)",
          "25-year warranty for long-term reliability",
          "Domestic content compliance for project requirements",
          "Individual panel optimization for maximum system yield",
          "Real-time monitoring and performance tracking",
          "Lightweight and compact design for easy installation"
        ]
      },
      'solaredge-homehub-7kw': {
        name: "SolarEdge 7KW Home Hub Inverter SE5700H-USMNBE78",
        model: "SE5700H-USMNBE78",
        power: "7kW",
        type: "Hybrid Inverter",
        availability: "in-stock",
        image: "/images/products/inverters/SOLAREDGEHOMEHUB.webp",
        brand: "SolarEdge",
        description: "Advanced hybrid inverter with integrated battery backup capabilities, featuring high efficiency and comprehensive monitoring for residential solar + storage systems.",
        specifications: {
          "Model": "SE5700H-USMNBE78",
          "AC Output Power (Grid)": "5760W @ 240V / 5000W @ 208V",
          "Max Efficiency": "99.2%",
          "CEC Weighted Efficiency": "99% @ 240V / 98.5% @ 208V",
          "Max Input Voltage / Nominal": "480VDC / 380VDC",
          "Max Input Power": "11,520W @ 240V / 10,000W @ 208V",
          "Max Input Current": "30A @ 240V / 26A @ 208V",
          "Input Ports": "3 PV, 2 Battery (40A per port)",
          "Battery Support": "SolarEdge Home Battery 400V (up to 3 units)",
          "Backup Output Power": "Up to 12,500W (11,400W above 86°F)",
          "Max Output Current (Backup)": "52A",
          "LRA Support (Backup)": "Up to 106A",
          "AC Output Voltage Range": "183 – 264VAC",
          "AC Frequency": "59.3 – 60 – 60.5Hz",
          "Cooling": "Natural Convection",
          "Noise": "< 50 dBA",
          "Dimensions (H × W × D)": "21.06 × 14.6 × 8.2 in",
          "Weight": "44.9 lbs",
          "Protection Rating": "NEMA 4X",
          "Operating Temp Range": "−40°F to 140°F (−40°C to 60°C)",
          "Supported Communication": "RS485, Ethernet, Wi-Fi (opt.), Cellular (opt.), SolarEdge Home Network",
          "Certifications": "UL 1741, UL 9540, IEEE 1547, NEC 690.11/12, ANSI C12.20"
        },
        features: [
          "99.2% maximum efficiency for optimal energy production",
          "99% CEC weighted efficiency at 240V for superior performance",
          "High power output of 5760W @ 240V / 5000W @ 208V",
          "Integrated battery backup with up to 12,500W backup power",
          "Support for up to 3 SolarEdge Home Battery 400V units",
          "Multiple input ports: 3 PV and 2 Battery (40A per port)",
          "Advanced monitoring via SolarEdge Home Network",
          "Comprehensive communication options (RS485, Ethernet, Wi-Fi, Cellular)",
          "NEMA 4X protection rating for outdoor installation",
          "Wide operating temperature range (−40°C to 60°C)",
          "Low noise operation (< 50 dBA) for residential use",
          "Natural convection cooling for reliable operation",
          "High surge current support (up to 106A LRA)",
          "UL 1741, UL 9540, IEEE 1547 certified for safety compliance",
          "NEC 690.11/12 and ANSI C12.20 compliant for code requirements"
        ]
      },
      'enphase-iq7hs': {
        name: "Enphase IQ7HS Microinverter IQ7HS-66-M-US",
        model: "EN-IQ7HS-66-M-US",
        power: "384VA",
        type: "Microinverter",
        availability: "in-stock",
        image: "/images/products/inverters/ENPHASEIQ7HS.webp",
        brand: "Enphase",
        description: "High-performance Enphase IQ7HS microinverter with 97.0% CEC efficiency, designed for larger solar modules with advanced grid support and monitoring capabilities.",
        specifications: {
          "Model": "EN-IQ7HS-66-M-US",
          "Output Power": "384VA",
          "Nominal Voltage": "240V AC Split-Phase",
          "Recommended Module Power": "420W – 500W",
          "MPPT Operating Voltage": "38 – 45V",
          "DC Voltage Range": "16 – 60V",
          "CEC Efficiency": "97.0%",
          "Grid Compliance": "UL 1741 SA, IEEE 1547",
          "Rapid Shutdown": "Yes (NEC 690.12 Compliant)",
          "Monitoring": "Enphase Enlighten (via IQ Gateway)",
          "Communication": "PLC (Power Line Communication)",
          "Enclosure Rating": "NEMA 6 (Outdoor Rated)",
          "Dimensions (L × W × H)": "8.3 × 6.9 × 1.2 in",
          "Weight": "~2.71 lbs",
          "Warranty": "25-Year Limited Warranty"
        },
        features: [
          "97.0% CEC efficiency for maximum energy production",
          "High-capacity 384VA output for larger solar modules",
          "Compatible with 420W – 500W modules",
          "Advanced MPPT operating voltage range (38 – 45V)",
          "Wide DC voltage range (16 – 60V) for flexibility",
          "UL 1741 SA and IEEE 1547 grid compliance",
          "NEC 690.12 compliant rapid shutdown for safety",
          "Real-time monitoring via Enphase Enlighten",
          "Power Line Communication (PLC) for reliable data transmission",
          "NEMA 6 outdoor rated enclosure for harsh environments",
          "Split-phase 240V AC output for residential applications",
          "25-year limited warranty for long-term reliability",
          "Easy installation and maintenance",
          "Advanced grid-forming capability",
          "Comprehensive monitoring and diagnostics"
        ]
      },

      // Storage Solutions
      'enphase-5kwh-battery': {
        name: "Enphase 5.0 kWh IQ Battery 5P for IQ Battery 10C Unit B05-C01-US00-1-3 (Standalone)",
        model: "B05-C01-US00-1-3",
        capacity: "5.0kWh",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/storage-solutions/ENPHASE_5.0KWh.webp",
        brand: "Enphase",
        description: "High-performance Enphase 5.0 kWh IQ Battery unit designed for residential energy storage, featuring advanced monitoring and seamless integration with Enphase solar systems.",
        specifications: {
          "Model": "B05-C01-US00-1-3",
          "Battery Capacity": "5.0 kWh",
          "Battery Units": "1",
          "Mounting Brackets": "1",
          "Seismic Screws": "2",
          "Mounting Bracket Fasteners": "6 M8 hexagonal Phillips screws with washers",
          "Drill Templates": "1",
          "System Integration": "IQ Battery 10C compatible",
          "Cover Required": "Not included (IQ 10C Cover needed)",
          "Additional Requirements": "IQ Combiner 6C, IQ Meter Collar (REQUIRED for whole home backup)",
          "Certification": "Enphase certification required for system commissioning",
          "Installation": "Wall-mounted with included mounting bracket",
          "Compatibility": "Enphase IQ whole home backup systems",
          "Warranty": "Enphase standard warranty"
        },
        features: [
          "5.0 kWh battery capacity for residential energy storage",
          "Complete mounting solution with bracket and hardware",
          "Seismic-rated mounting for safety and stability",
          "Compatible with IQ Battery 10C systems (requires 2 units + cover)",
          "Advanced monitoring and diagnostics via Enphase Enlighten",
          "Seamless integration with Enphase solar systems",
          "Professional installation with included drill templates",
          "Wall-mounted design for space efficiency",
          "Enphase certification ensures proper system commissioning",
          "IQ Meter Collar compatibility for whole home backup",
          "Modular design for easy system expansion",
          "Comprehensive mounting hardware included",
          "Professional-grade installation support",
          "Enphase University training available for certification"
        ]
      },
      'midnite-16kwh-powerflo': {
        name: "MidNite 16 kWh MNPowerflo16 51.2V Nominal Wall Mount Battery",
        model: "MNPowerflo16",
        capacity: "16.076kWh",
        voltage: "51.2V",
        availability: "in-stock",
        image: "/images/products/storage-solutions/MIDNITE16kwh.webp",
        brand: "MidNite",
        description: "High-capacity 16 kWh lithium battery system with advanced BMS, designed for residential and commercial energy storage applications with wall or floor mounting options.",
        specifications: {
          "Model": "MNPowerflo16",
          "Nominal Voltage": "51.2V",
          "Nominal Capacity": "314Ah",
          "Energy Capacity": "16,076 Wh",
          "Cycle Life": "8,000 cycles at 77°F (25°C)",
          "Operating Voltage Range": "46.4V–57.6V",
          "Max. Discharging Current": "210A",
          "Nominal Charging Current": "160A",
          "Dimensions (L x W x D)": "31.50\" x 19.69\" x 8.94\"",
          "Weight": "284 lbs",
          "IP Rating": "IP65",
          "Operating Temperature": "-4°F to 122°F (-20°C to 50°C)",
          "Installation": "Wall or floor mount",
          "Communication Interfaces": "CAN, RS485, RS232",
          "Certifications": "UL 1973, UL 9540A, UL 9540"
        },
        features: [
          "16,076 Wh energy capacity for large-scale energy storage",
          "High cycle life of 8,000 cycles for long-term reliability",
          "Advanced BMS with comprehensive protection features",
          "High discharge current capability (210A max)",
          "Efficient charging with 160A nominal charging current",
          "Wide operating voltage range (46.4V–57.6V)",
          "IP65 protection rating for harsh environments",
          "Flexible installation options (wall or floor mount)",
          "Multiple communication interfaces (CAN, RS485, RS232)",
          "Wide operating temperature range (-20°C to 50°C)",
          "UL 1973, UL 9540A, UL 9540 certified for safety compliance",
          "Professional-grade construction for commercial applications",
          "Advanced monitoring and control capabilities",
          "Scalable design for system expansion",
          "Comprehensive warranty and support"
        ]
      },
      'schneider-10kwh-battery': {
        name: "Schneider 10kWh Electric Boost LFP Battery BAT10K1",
        model: "BAT10K1",
        capacity: "10.56kWh",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/storage-solutions/SCHNEIDER10kwh.webp",
        brand: "Schneider",
        description: "High-performance Schneider 10kWh LFP battery system with 96% roundtrip efficiency, designed for residential energy storage with advanced backup capabilities and comprehensive monitoring.",
        specifications: {
          "Model": "BAT10K1",
          "Nameplate Capacity": "10.56 kWh",
          "Usable Energy": "10 kWh",
          "Max Continuous Discharge Power": "8.1 kW",
          "Max Continuous Charge Power": "5.2 kW",
          "Charge/Discharge Voltage Range": "370 – 472 V",
          "Nominal Discharge Current": "20 A",
          "Nominal Charge Current": "14 A",
          "Peak Output Power (Backup)": "13.4 kW (5 seconds)",
          "Continuous Output (Backup)": "7.68 kW",
          "LRA Load Start Support": "100 A",
          "Roundtrip DC Efficiency": "96%",
          "Chemistry": "Lithium Iron Phosphate (LFP)",
          "Battery Installation": "Wall or floor mount",
          "Battery Dimensions (W × H × D)": "25.6 × 51.2 × 5.1 in",
          "Battery Weight": "279 lbs",
          "Enclosure Rating": "Type 4X (Indoor/Outdoor)",
          "Max Operating Temp": "5°F to 131°F (-15°C to 55°C)",
          "Storage Temp": "14°F to 104°F (-10°C to 40°C)",
          "Operating Humidity": "0% to 100% (non-condensing)",
          "Max Altitude": "13,100 ft (4,000 m)",
          "Required Inverter": "Schneider Inverter 7.7 (HY8K1NA1)",
          "Required for Backup": "Pulse CSED or Pulse Backup Controller",
          "Certifications": "UL 9540, UL 9540A, UL 1973, FCC Part 15 Class B",
          "Warranty": "10 Years or 30 MWh throughput"
        },
        features: [
          "10.56 kWh nameplate capacity with 10 kWh usable energy",
          "96% roundtrip DC efficiency for maximum energy savings",
          "High power output: 8.1 kW continuous discharge, 13.4 kW peak backup",
          "Advanced LFP chemistry for safety and long cycle life",
          "Flexible installation options (wall or floor mount)",
          "Type 4X enclosure rating for indoor/outdoor installation",
          "Wide operating temperature range (-15°C to 55°C)",
          "High altitude operation up to 13,100 ft (4,000 m)",
          "100% humidity tolerance (non-condensing)",
          "LRA load start support up to 100A for motor loads",
          "Comprehensive monitoring and control capabilities",
          "Seamless integration with Schneider Inverter 7.7",
          "Backup power capabilities with Pulse CSED/Backup Controller",
          "UL 9540, UL 9540A, UL 1973 certified for safety compliance",
          "FCC Part 15 Class B certified for electromagnetic compatibility",
          "10-year warranty or 30 MWh throughput guarantee",
          "Professional-grade construction for residential applications"
        ]
      },
      'fortress-power-18.5kwh': {
        name: "Fortress Power eVault Max 18.5 kWh 48V Lithium Iron Phosphate Battery",
        model: "eVault Max 18.5",
        capacity: "18.5kWh",
        voltage: "51.2V",
        availability: "in-stock",
        image: "/images/products/storage-solutions/FORTRESS18.5kwh.webp",
        brand: "Fortress Power",
        description: "High-performance Fortress Power eVault Max 18.5 kWh LFP battery with 98% round-trip efficiency, designed for residential and commercial energy storage with advanced monitoring and scalability.",
        specifications: {
          "Model": "eVault Max 18.5",
          "Usable Capacity": "18.5 kWh",
          "Nominal Voltage": "51.2V",
          "Battery Chemistry": "LiFePO₄ (Lithium Iron Phosphate)",
          "Cycle Life": "8,000 cycles @ 80% DoD",
          "Depth of Discharge (DoD)": "Up to 100%",
          "Round-Trip Efficiency": "98%",
          "Communication Protocols": "CAN, RS485",
          "Peak Discharge Rate": "230A (12kW for 30 min)",
          "Surge Power Output": "250A (12.8kW for 5 sec)",
          "Recommended Charge Current": "150A",
          "Maximum Charge Current": "180A",
          "Charge Voltage": "54.4V (Absorb), 54V (Float)",
          "Enclosure Rating": "IP55 (Indoor/Outdoor rated)",
          "Certifications": "UL 9540, UL 9540A, UL 1973, UL 1642, UN 38.3, CEC",
          "Operating Temp (Discharge)": "-20°C to 60°C (-4°F to 140°F)",
          "Operating Temp (Charge)": "0°C to 49°C (32°F to 120°F)",
          "Storage Temp": "Up to 6 months: -10°C to 25°C (14°F to 77°F)",
          "Scalability": "Up to 20 units (370 kWh total)",
          "Mounting": "Floor-standing",
          "Display": "Touchscreen LCD",
          "Dimensions (L x W x H)": "20.3\" x 20.3\" x 42.2\" (515 x 515 x 1073 mm)",
          "Weight": "520 lbs (236 kg)",
          "Warranty": "10 years",
          "Shipping Classification": "UN 3480, Class 9 (UN 38.3 certified)"
        },
        features: [
          "18.5 kWh usable capacity for large-scale energy storage",
          "98% round-trip efficiency for maximum energy savings",
          "8,000 cycle life at 80% depth of discharge for long-term reliability",
          "Advanced LiFePO₄ chemistry for safety and performance",
          "High power output: 12kW peak discharge, 12.8kW surge power",
          "Flexible depth of discharge up to 100%",
          "Multiple communication protocols (CAN, RS485) for system integration",
          "IP55 enclosure rating for indoor/outdoor installation",
          "Wide operating temperature range (-20°C to 60°C discharge)",
          "Scalable design supporting up to 20 units (370 kWh total)",
          "Floor-standing mounting for easy installation",
          "Touchscreen LCD display for user-friendly monitoring",
          "Comprehensive certifications (UL 9540, UL 9540A, UL 1973, UL 1642)",
          "UN 38.3 certified for safe shipping and handling",
          "CEC certified for California energy compliance",
          "10-year warranty for long-term peace of mind",
          "Professional-grade construction for commercial applications",
          "Advanced BMS with comprehensive protection features"
        ]
      },

      // Charge Controllers
      'enphase-iq-load-controller': {
        name: "Enphase EP-NA-LK02-040 Accessory IQ Load Controller",
        model: "EP-NA-LK02-040",
        current: "N/A",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/charge-controllers/ENPHASELOADCONTROLLER.webp",
        brand: "Enphase",
        description: "Intelligent load controller accessory designed to enhance Enphase solar PV systems with advanced load management capabilities for optimizing energy consumption and maximizing system efficiency.",
        specifications: {
          "Model": "EP-NA-LK02-040",
          "Compatibility": "Enphase IQ series microinverters",
          "Communication": "Enphase Envoy communications gateway",
          "Monitoring": "Real-time load monitoring and control",
          "Installation": "Certified installer required",
          "Integration": "Seamless integration with existing Enphase systems",
          "Applications": "Residential, commercial, and industrial",
          "Load Management": "Intelligent load control for energy optimization",
          "Demand Response": "Compatible with demand response programs",
          "Self-Consumption": "Optimization for self-consumption scenarios",
          "Grid Stability": "Enhanced grid stability through load management",
          "User Interface": "User-friendly interface for easy configuration",
          "Design": "Compact design for easy installation",
          "Technology": "Advanced load management technology"
        },
        features: [
          "Intelligent load control for optimizing energy consumption",
          "Compatible with Enphase IQ series microinverters",
          "Supports integration with Enphase Envoy communications gateway",
          "Provides real-time monitoring and control of connected loads",
          "Helps reduce electricity bills and maximize energy savings",
          "Seamless communication with Enphase microinverters",
          "Advanced technology for intelligent load management",
          "Real-time monitoring and control capabilities",
          "Straightforward installation by certified installers",
          "Compact design with user-friendly interface",
          "Easy configuration for optimal performance",
          "Increased energy efficiency and reduced electricity bills",
          "Improved grid stability through load management",
          "Suitable for residential, commercial, and industrial applications",
          "Demand response program compatibility",
          "Self-consumption optimization capabilities",
          "Enhanced solar PV system efficiency",
          "Professional-grade load management solution"
        ]
      },
      'schneider-conext-100a': {
        name: "Schneider Conext 865-1034 100A 600VDC MPPT Charge Controller",
        model: "XW-MPPT100-600",
        current: "100A",
        voltage: "600V",
        availability: "in-stock",
        image: "/images/products/charge-controllers/SCHNEIDERCONTROLLER.webp",
        brand: "Schneider Electric",
        description: "High-performance MPPT charge controller designed for off-grid and grid-tied solar systems with advanced Maximum Power Point Tracking technology for optimal solar energy harvesting.",
        specifications: {
          "Model": "XW-MPPT100-600",
          "Part Number": "865-1034 (RNW8651034)",
          "Maximum Charging Current": "100A",
          "Maximum PV Voltage": "600V",
          "Battery Voltage": "24V or 48VDC",
          "Technology": "Advanced Maximum Power Point Tracking (MPPT)",
          "System Compatibility": "Off-grid and grid-tied solar systems",
          "Certifications": "UL/CSA",
          "Installation": "Easy integration into new or existing solar installations",
          "Performance": "Reliable performance in challenging conditions",
          "Applications": "Residential, commercial, and industrial solar applications",
          "Energy Management": "Efficient and reliable energy management",
          "Battery Compatibility": "Wide range of battery systems",
          "Safety Standards": "Compliance with safety and performance standards",
          "Charging Capacity": "High charging capacity for various installations",
          "MPPT Technology": "Advanced MPPT technology for optimal energy harvesting"
        },
        features: [
          "Maximum charging current of 100A for high-capacity systems",
          "Maximum PV voltage of 600V for large solar arrays",
          "Compatible with 24V or 48VDC battery systems",
          "Advanced Maximum Power Point Tracking (MPPT) technology",
          "Designed for off-grid and grid-tied solar systems",
          "UL/CSA certifications for safety and performance compliance",
          "Easy integration into new or existing solar installations",
          "Reliable performance even in challenging conditions",
          "High charging capacity for various solar applications",
          "Advanced MPPT technology to optimize solar energy harvesting",
          "Compatible with a wide range of battery systems",
          "Suitable for residential, commercial, and industrial applications",
          "Efficient and reliable energy management capabilities",
          "Compliance with safety and performance standards",
          "Optimized for maximum solar energy harvesting",
          "Professional-grade charge controller for demanding applications",
          "Comprehensive battery management and charging optimization",
          "Robust design for long-term reliability and performance"
        ]
      },
      'midnite-classic-250': {
        name: "Midnite Solar CLASSIC250 63A 250VDC MPPT Charge Controller",
        model: "CLASSIC 250",
        current: "63A",
        voltage: "250V",
        availability: "in-stock",
        image: "/images/products/charge-controllers/MIDNITECONTROLLER.webp",
        brand: "MidNite Solar",
        description: "Versatile MPPT charge controller designed for solar, hydro, and wind systems with advanced Arc Fault and Ground Fault protection, free web monitoring, and graphics panel for comprehensive system management.",
        specifications: {
          "Model": "CLASSIC 250",
          "Maximum Output Current": "63 Amps",
          "Operating Voltage": "250 volts",
          "Battery Systems": "12 to 72 volts",
          "Technology": "Maximum Power Point Tracking (MPPT)",
          "Energy Sources": "Solar, hydro, and wind energy sources",
          "Protection Features": "Arc Fault and Ground Fault protection",
          "Monitoring": "Free web monitoring for remote system management",
          "Display": "Graphics panel for easy monitoring and control",
          "MPPT Technology": "Maximum power point tracking optimization",
          "System Compatibility": "Off-grid and grid-tied renewable energy systems",
          "Installation": "User-friendly design for simplified installation",
          "Safety Features": "Enhanced system safety with protection features",
          "Applications": "Wide range of renewable energy applications",
          "Performance": "Reliable performance and protection for entire energy system",
          "Maintenance": "Reduced system downtime and maintenance costs",
          "Flexibility": "Compatible with various battery system voltages",
          "Energy Harvesting": "Optimized energy harvest from multiple sources"
        },
        features: [
          "Arc Fault and Ground Fault protection for enhanced safety",
          "Free web monitoring for remote system management",
          "Graphics panel for easy monitoring and control",
          "Supports solar, hydro, and wind energy sources",
          "MPPT technology for maximum power point tracking",
          "Compatible with battery systems ranging from 12 to 72 volts",
          "User-friendly design for simplified installation",
          "Advanced features ensure reliable performance",
          "Protection for the entire energy system",
          "High maximum output current of 63 Amps",
          "Wide operating voltage range of 250 volts",
          "Suitable for off-grid and grid-tied renewable energy systems",
          "Reduced system downtime and maintenance costs",
          "Ideal choice for renewable energy enthusiasts",
          "Versatile MPPT charge controller for multiple applications",
          "Maximum Power Point Tracking technology optimization",
          "Comprehensive system management capabilities",
          "Enhanced system safety with protection features",
          "Flexible compatibility with various battery systems",
          "Optimized energy harvesting from multiple renewable sources"
        ]
      },
      'enphase-iq-system-controller-2': {
        name: "Enphase EN-EP200G101-M240US01 IQ System Controller 2 w/ Neutral-Forming Transformer, Microgrid Interconnect Device & Breakers",
        model: "EN-EP200G101-M240US01",
        current: "N/A",
        voltage: "N/A",
        availability: "in-stock",
        image: "/images/products/charge-controllers/ENPHASE_M24.webp",
        brand: "Enphase",
        description: "State-of-the-art energy management device designed to enhance the functionality and efficiency of Enphase IQ systems with integrated Neutral-Forming Transformer, Microgrid Interconnect Device, and Breakers for comprehensive control and optimization.",
        specifications: {
          "Model": "EN-EP200G101-M240US01",
          "Product Name": "IQ System Controller 2",
          "Components": "Neutral-Forming Transformer, Microgrid Interconnect Device, Breakers",
          "Compatibility": "Enphase IQ systems",
          "Technology": "Cutting-edge energy management technology",
          "Functionality": "Comprehensive control and optimization of solar energy systems",
          "System Integration": "Seamless integration with Enphase IQ systems",
          "Installation": "Straightforward installation by certified installers",
          "Design": "Compact design with user-friendly interface",
          "Performance": "Enhanced functionality and reliability",
          "Energy Management": "Advanced energy management capabilities",
          "Grid Stability": "Enhanced grid stability and system reliability",
          "Applications": "Residential, commercial, and industrial applications",
          "Energy Flow": "Central hub for managing energy flow",
          "System Monitoring": "Comprehensive system performance monitoring",
          "Grid Independence": "Microgrid Interconnect Device enables grid independence",
          "Backup Power": "Backup power functionality during outages",
          "Safety Features": "Equipped with breakers for added safety and protection",
          "Self-Consumption": "Optimization for self-consumption scenarios",
          "System Optimization": "Maximizes benefits of solar energy systems"
        },
        features: [
          "Advanced energy management capabilities for comprehensive system control",
          "Integration with Enphase IQ systems for seamless operation",
          "Includes Neutral-Forming Transformer for improved system performance",
          "Microgrid Interconnect Device enables grid independence and backup power functionality",
          "Equipped with breakers for added safety and protection",
          "Cutting-edge technology for comprehensive control and optimization",
          "Serves as central hub for managing energy flow and monitoring system performance",
          "Enhanced functionality and reliability with integrated components",
          "Straightforward installation by certified installers",
          "Compatible with Enphase IQ systems and existing solar PV installations",
          "Compact design with user-friendly interface for easy configuration",
          "Increased energy efficiency and enhanced grid stability",
          "Improved system reliability for demanding applications",
          "Suitable for residential, commercial, and industrial applications",
          "Advanced energy management capabilities for essential system operations",
          "Optimization for self-consumption scenarios",
          "Backup power functionality during grid outages",
          "Maximizes benefits of solar energy systems",
          "Comprehensive system performance monitoring capabilities",
          "Enhanced grid stability through advanced control features",
          "Professional-grade energy management solution",
          "Integrated safety features with breaker protection",
          "Seamless integration with existing Enphase infrastructure",
          "Optimized energy flow management and control"
        ]
      },

      // Racking
      'k2-crossrail-44x': {
        name: "K2 Systems SPO CrossRail 44-X 86'' Mill 4000143",
        model: "4000143",
        material: "6000 Series Aluminum",
        length: "86\"",
        availability: "in-stock",
        image: "/images/products/racking/K2_RAIL.webp",
        brand: "K2 Systems",
        description: "Compact and lightweight rail profile designed for both flat and pitched roof installations, offering excellent corrosion resistance and UL 2703 certification for safety compliance.",
        specifications: {
          "Model": "4000143",
          "Length": "86 inches (2184 mm)",
          "Height": "44 mm",
          "Weight": "0.47 lbs",
          "Material": "6000 series aluminum",
          "Design": "Compact and lightweight rail profile",
          "Strength": "Maintains strength and durability of larger profiles",
          "Corrosion Resistance": "Excellent corrosion resistance and longevity",
          "Environmental Conditions": "Suitable for various environmental conditions",
          "Application": "Suitable for both flat and pitched roof installations",
          "Installation Types": "Residential and commercial PV mounting scenarios",
          "Certification": "UL 2703 Listed for fire and bonding",
          "Safety Standards": "Compliance with safety standards and building codes",
          "Installation": "Straightforward installation reducing labor time and costs",
          "Compatibility": "Seamless integration with K2 Systems' mounting solutions",
          "Roof Types": "Compatible with various roof types",
          "Structural Integrity": "Reliable choice for securing PV modules",
          "Installation Scenarios": "Diverse installation scenarios supported"
        },
        features: [
          "Compact and lightweight design for easier handling and installation",
          "K2's smallest and lightest rail profile",
          "Maintains strength and durability of larger profiles",
          "High-quality 6000 series aluminum construction",
          "Excellent corrosion resistance and longevity",
          "Suitable for various environmental conditions",
          "Versatile application for flat and pitched roof installations",
          "Accommodates wide range of residential and commercial PV mounting scenarios",
          "UL 2703 Listed for fire and bonding certification",
          "Compliance with safety standards and building codes",
          "Engineered for seamless integration with K2 Systems' mounting solutions",
          "Straightforward installation reducing labor time and costs",
          "Compatible with various roof types",
          "Structural integrity for reliable PV module securing",
          "Suitable for diverse installation scenarios",
          "Facilitates easier handling during installation",
          "Professional-grade mounting solution",
          "Certified safety and performance standards",
          "Optimized for residential and commercial applications",
          "Enhanced installation efficiency and cost-effectiveness"
        ]
      },
      'ironridge-xr-rail-132a': {
        name: "IronRidge XR RAIL XR-1000-132A 132\" (11') Clear Rail",
        model: "XR-1000-132A",
        material: "Durable Materials",
        type: "Clear Rail",
        availability: "in-stock",
        image: "/images/products/racking/IRONRIDGERAIL.webp",
        brand: "IronRidge",
        description: "Durable and versatile mounting solution designed for solar panel installations with clear finish for a sleek and modern look, offering durability, ease of installation, and compatibility with various solar panel configurations.",
        specifications: {
          "Model": "XR-1000-132A",
          "Construction": "Durable materials",
          "Length": "132 inches (11 feet)",
          "Finish": "Clear",
          "Compatibility": "Various solar panel sizes and configurations",
          "Installation Type": "Rail installation",
          "Manufacturer": "IronRidge",
          "Technology": "Advanced engineering for secure and efficient mounting",
          "Appearance": "Sleek and modern appearance",
          "Performance": "Optimal performance with sturdy construction",
          "Installation": "Easy installation process for quick and hassle-free mounting",
          "Versatility": "Versatility and flexibility in installation",
          "Applications": "Residential, commercial, and utility-scale solar projects",
          "Reliability": "Reliable and cost-effective solution for solar panel mounting",
          "Stability": "Ensures stability and longevity of solar panel installation",
          "Professional Look": "Clean and professional appearance",
          "Trusted Brand": "IronRidge trusted leader in solar mounting systems",
          "Long-term Reliability": "Durable construction ensures long-term reliability"
        },
        features: [
          "Durable construction ensures long-term reliability",
          "Clear finish for a sleek and modern look",
          "11-foot length provides ample support for solar panels",
          "Compatible with a wide range of solar panel sizes",
          "Easy installation process for quick and hassle-free mounting",
          "Advanced engineering for secure and efficient mounting solution",
          "Sturdy construction with optimal performance",
          "Sleek and modern appearance maintenance",
          "Versatility and flexibility in installation",
          "Compatible with various solar panel configurations",
          "Suitable for residential, commercial, and utility-scale solar projects",
          "Reliable and cost-effective solution for solar panel mounting",
          "Ensures stability and longevity of solar panel installation",
          "Clean and professional appearance",
          "IronRidge trusted leader in solar mounting systems",
          "Quick and hassle-free mounting process",
          "Advanced engineering technology",
          "Secure mounting solution for solar panels",
          "Efficient mounting system design",
          "Professional-grade mounting solution"
        ]
      },
      'ironridge-xr-100-168m': {
        name: "IronRidge Mounting Rail 168 inches (14 ft) XR-100-168M-US",
        model: "XR-100-168M-US",
        material: "6000-series Aluminum Alloy",
        length: "168\"",
        availability: "in-stock",
        image: "/images/products/racking/IRONRIDGE168.webp",
        brand: "IronRidge",
        description: "High-performance mounting rail built for residential and commercial solar installations with curved structural profile supporting spans up to 10 feet, designed to endure demanding wind and snow loads with lasting strength and corrosion resistance.",
        specifications: {
          "Model": "XR-100-168M-US",
          "Rail Type": "XR100 Series",
          "Length": "168 inches (14 ft)",
          "Material": "6000-series aluminum alloy",
          "Finish": "Mill (non-anodized)",
          "Spanning Capability": "Up to 10 feet",
          "Load Rating": "Heavy load (residential and light commercial)",
          "Profile Features": "Curved shape resists bending and torsion",
          "Compatible Mounts": "FlashFoot, UFO, Tilt Legs",
          "Estimated Weight": "~4.2 lbs per rail",
          "Certifications": "UL 2703 Listed",
          "Technology": "Force-Stabilizing Curve engineered rail profile",
          "Structural Strength": "Increases structural strength and resists torsional forces",
          "Internal Splices": "Available for clean connections and fast expansion",
          "Warranty": "25-year structural product warranty",
          "Installation": "Reduces number of roof attachments and installation time",
          "Climate Resistance": "Durability in all climates",
          "Application": "Compatible with pitched and flat roof mounting systems",
          "System Design": "Works with various IronRidge attachments for flexible system design",
          "Wind Load": "Withstands strong wind loads for long-term system stability",
          "Snow Load": "Endures demanding snow loads for system reliability",
          "Corrosion Resistance": "Mill-finish 6000-series aluminum alloy for durability"
        },
        features: [
          "Heavy load support withstands strong wind and snow loads for long-term system stability",
          "Extended spanning capability spans up to 10 feet, reducing roof attachments and installation time",
          "Corrosion resistant construction from mill-finish 6000-series aluminum alloy for durability in all climates",
          "Versatile application compatible with pitched and flat roof mounting systems",
          "Force-Stabilizing Curve engineered rail profile increases structural strength",
          "Resists torsional forces under load with curved structural profile",
          "Internal splices available for clean connections and fast expansion for long rail runs",
          "Covered by IronRidge's 25-year structural product warranty when installed per guidelines",
          "Ideal for residential rooftop installations with flush mount systems",
          "Performs in higher wind/snow load zones with reduced attachment count for commercial projects",
          "Works with various IronRidge attachments for flexible system design",
          "High-performance mounting rail built for demanding applications",
          "Curved structural profile designed to endure demanding loads",
          "Lasting strength and corrosion resistance for long-term performance",
          "Compatible with IronRidge FlashFoot and tilt legs",
          "UL 2703 Listed for safety and performance compliance",
          "Reduces installation time through extended spanning capability",
          "Professional-grade mounting solution for residential and commercial applications",
          "Engineered for optimal performance in challenging environmental conditions",
          "Flexible system design with versatile mounting compatibility"
        ]
      },
      'prosolar-rooftrac-r-172xd': {
        name: "Prosolar RoofTrac R-172XD 172\" (14') Clear Extra Deep Support Rail",
        model: "R-172XD",
        material: "Aluminum",
        length: "172\"",
        availability: "in-stock",
        image: "/images/products/racking/PROSOLAR172.webp",
        brand: "ProSolar",
        description: "Built for excellence, engineered to elevate solar panel installation experience with extra deep design for enhanced stability, clear finish for aesthetic appeal, and robust construction for durability.",
        specifications: {
          "Model": "R-172XD",
          "Material": "Aluminum",
          "Length": "172 inches (14 feet)",
          "Color": "Clear",
          "Design": "Extra Deep Design for enhanced stability",
          "Finish": "Clear finish for aesthetic appeal",
          "Construction": "Robust construction for durability",
          "Installation": "Easy installation process",
          "Compatibility": "Compatible with various mounting systems",
          "Technology": "Cutting-edge technology for sturdy and reliable foundation",
          "Performance": "Optimal performance and longevity",
          "Applications": "Residential, commercial, and industrial installations",
          "Weight Capacity": "Dependent on mounting system",
          "Warranty": "10 years",
          "Usage": "Residential, commercial, industrial",
          "Innovation": "Innovative design ensures optimal performance",
          "Integration": "Seamlessly integrates into solar setup",
          "Retrofitting": "Suitable for retrofitting existing structures",
          "New Installations": "Perfect for starting from scratch",
          "User-Friendly": "User-friendly design for easy installation",
          "Cost Savings": "Cost-saving benefits and minimized environmental impact",
          "Energy Production": "Efficient design maximizes energy production",
          "Installation Time": "Reduces installation time and labor costs",
          "Environmental Impact": "Minimizes environmental impact",
          "Full Potential": "Unlocks the full potential of solar energy"
        },
        features: [
          "Extra Deep Design for enhanced stability and structural integrity",
          "Clear finish for aesthetic appeal and modern appearance",
          "Robust construction for durability and long-term performance",
          "Easy installation process for quick and efficient setup",
          "Compatible with various mounting systems for flexibility",
          "Cutting-edge technology provides sturdy and reliable foundation",
          "Innovative design ensures optimal performance and longevity",
          "Ideal choice for residential, commercial, and industrial installations",
          "User-friendly design for seamless integration into solar setup",
          "Suitable for retrofitting existing structures or starting from scratch",
          "Wide range of mounting system compatibility",
          "Cost-saving benefits and minimized environmental impact",
          "Efficient design maximizes energy production",
          "Reduces installation time and labor costs",
          "Perfect for residential, commercial, and industrial applications",
          "Unlocks the full potential of solar energy",
          "Built for excellence with precision and durability",
          "Engineered to elevate solar panel installation experience",
          "Crafted with precision and durability in mind",
          "Unparalleled performance and reliability for solar projects",
          "Sturdy and reliable foundation for solar panels",
          "Optimal performance and longevity for sustainable energy",
          "Seamless integration into various solar setups",
          "Professional-grade mounting solution for demanding applications"
        ]
      },
      'k2-crossrail-44x-185': {
        name: "K2 Systems CrossRail 44-X 185'' Mill 4000721",
        model: "4000721",
        material: "6000 Series Aluminum",
        length: "185\"",
        availability: "in-stock",
        image: "/images/products/racking/K2_185.webp",
        brand: "K2 Systems",
        description: "High-performance rail profile with exceptional strength-to-weight ratio, manufactured from 6000 series aluminum for excellent corrosion resistance and longevity in various environmental conditions.",
        specifications: {
          "Model": "4000721",
          "Length": "185 inches (4,699 mm)",
          "Height": "44 mm",
          "Weight": "Approximately 0.47 lbs",
          "Material": "6000 series aluminum",
          "Design": "K2's smallest and lightest rail profile",
          "Strength Ratio": "High strength-to-weight ratio",
          "Comparable Strength": "Comparable strength to larger profiles like the 48-X",
          "Reliable Support": "Reliable support for solar modules",
          "Durable Construction": "Manufactured from 6000 series aluminum",
          "Corrosion Resistance": "Excellent corrosion resistance and longevity",
          "Environmental Conditions": "Suitable for various environmental conditions",
          "Application": "Suitable for both flat and pitched roof installations",
          "Installation Types": "Wide range of residential and commercial PV mounting scenarios",
          "Certification": "UL 2703 Listed for fire and bonding",
          "Safety Standards": "Compliance with safety standards and building codes",
          "Integration": "Seamless integration with K2 Systems' mounting solutions",
          "Installation": "Straightforward installation reducing labor time and costs",
          "Roof Types": "Compatible with various roof types",
          "Structural Integrity": "Reliable choice for securing PV modules",
          "Installation Scenarios": "Diverse installation scenarios supported",
          "Performance": "High-performance rail profile for demanding applications",
          "Longevity": "Long-term durability and performance"
        },
        features: [
          "High strength-to-weight ratio despite being K2's smallest and lightest rail profile",
          "Comparable strength to larger profiles like the 48-X for reliable support",
          "Reliable support for solar modules with exceptional performance",
          "Durable construction manufactured from 6000 series aluminum",
          "Excellent corrosion resistance and longevity in various environmental conditions",
          "Suitable for both flat and pitched roof installations",
          "Accommodates wide range of residential and commercial PV mounting scenarios",
          "UL 2703 Listed for fire and bonding certification",
          "Compliance with safety standards and building codes",
          "Engineered for seamless integration with K2 Systems' mounting solutions",
          "Straightforward installation reducing labor time and costs",
          "Compatible with various roof types for versatile applications",
          "Structural integrity makes it a reliable choice for securing PV modules",
          "Suitable for diverse installation scenarios",
          "High-performance rail profile for demanding applications",
          "Long-term durability and performance in challenging environments",
          "Lightweight design for easier handling and installation",
          "Professional-grade mounting solution for residential and commercial projects",
          "Certified safety and performance standards",
          "Optimized for efficiency and cost-effectiveness",
          "Enhanced installation efficiency through streamlined design",
          "Comprehensive compatibility with K2 Systems' mounting ecosystem",
          "Proven reliability in various environmental conditions",
          "Advanced engineering for optimal solar module support"
        ]
      },
      'ironridge-xr1000-210m': {
        name: "IronRidge XR1000 210\" 17.5ft Anodized Rail Mill XR-1000-210M",
        model: "XR-1000-210M",
        material: "6000-series Aluminum Alloy",
        length: "210\"",
        availability: "in-stock",
        image: "/images/products/racking//IRONRIDGE_210.webp",
        brand: "IronRidge",
        description: "Heavyweight solar mounting rail built to handle extreme climates with 12' spanning capability, extreme load capability, clear anodized finish, and internal splices available for commercial applications.",
        specifications: {
          "Model": "XR-1000-210M",
          "Length": "210 inches (17.5 feet)",
          "Material": "6000-series aluminum alloy",
          "Finish": "Mill",
          "Rail Type": "XR1000 Series",
          "Spanning Capability": "Supports spans up to 8 feet, reducing roof attachments required",
          "Commercial Spanning": "12' spanning capability for commercial applications",
          "Load Capability": "Engineered to handle heavy wind and snow loads",
          "Environmental Durability": "Durability in various environmental conditions",
          "Compatibility": "Integrates seamlessly with IronRidge's mounting hardware and accessories",
          "Extreme Load Capability": "Extreme load capability for demanding applications",
          "Clear Anodized Finish": "Clear anodized finish for aesthetic appeal",
          "Internal Splices": "Internal splices available for clean connections",
          "Commercial Applications": "Built for commercial applications and extreme climates",
          "Heavyweight Design": "Heavyweight among solar mounting rails",
          "Climate Resistance": "Built to handle extreme climates",
          "Mounting Hardware": "Seamless integration with IronRidge mounting hardware",
          "Accessories": "Compatible with IronRidge accessories",
          "Installation": "Reduces number of roof attachments required",
          "Performance": "High-performance mounting solution for demanding environments",
          "Structural Integrity": "Robust structural design for long-term reliability"
        },
        features: [
          "210 inches (17.5 feet) length for extended coverage and reduced connections",
          "6000-series aluminum alloy construction for durability and corrosion resistance",
          "Mill finish for clean, professional appearance",
          "Supports spans up to 8 feet, reducing the number of roof attachments required",
          "12' spanning capability for commercial applications",
          "Engineered to handle heavy wind and snow loads for extreme weather conditions",
          "Durability in various environmental conditions for long-term performance",
          "Integrates seamlessly with IronRidge's mounting hardware and accessories",
          "Extreme load capability for demanding commercial applications",
          "Clear anodized finish for aesthetic appeal and modern appearance",
          "Internal splices available for clean connections and fast expansion",
          "Built for commercial applications and extreme climates",
          "Heavyweight among solar mounting rails for maximum strength",
          "Built to handle extreme climates with superior weather resistance",
          "Seamless integration with IronRidge mounting hardware ecosystem",
          "Compatible with comprehensive range of IronRidge accessories",
          "Reduces installation time and costs through extended spanning capability",
          "High-performance mounting solution for demanding environments",
          "Robust structural design for long-term reliability and performance",
          "Professional-grade mounting rail for commercial and industrial applications",
          "Superior load handling capacity for challenging installation scenarios",
          "Optimized for efficiency and cost-effectiveness in large-scale projects",
          "Enhanced installation efficiency through reduced attachment requirements",
          "Comprehensive compatibility with IronRidge mounting ecosystem",
          "Proven reliability in extreme weather and environmental conditions"
        ]
      },

      // Solar Equipment
      'titan-pv-wire-10awg-red': {
        name: "Titan 01-PV-1019X-SJ-RD-2N 10AWG 1,000' Red PV Wire",
        model: "01-PV-1019X-SJ-RD-2N",
        material: "19 Strand Copper",
        size: "10AWG",
        availability: "in-stock",
        image: "/images/products/solar-equipment/TITAN.webp",
        brand: "Titan",
        description: "UL4703 certified PV wire with 19 strand copper conductor for flexibility, rated for 1000VDC-2000VDC, featuring red single jacket for easy identification and 1000' spool for convenient installation.",
        specifications: {
          "Model": "01-PV-1019X-SJ-RD-2N",
          "Wire Gauge": "10AWG",
          "UL Certification": "UL4703",
          "Voltage Rating": "1000VDC-2000VDC",
          "Conductor Material": "19 Strand Copper",
          "Jacket Color": "Red",
          "Outer Diameter": "0.26\" (6.6mm)",
          "Spool Length": "1000'",
          "Part Number": "01-PV-1019X-SJ-RD-2N",
          "Safety": "UL4703 Certified for Safety",
          "Flexibility": "19 Strand Copper Conductor for Flexibility",
          "Identification": "Red Single Jacket for Easy Identification",
          "Installation": "1000' Spool for Convenient Installation",
          "Electrical Connection": "Secure and efficient electrical connection",
          "Solar Energy System": "Designed for solar energy system applications",
          "Durability": "Designed for durability in solar installations",
          "Certification": "UL certified for safety compliance",
          "Performance": "Excellent choice for solar installation needs",
          "Quality": "High-quality construction for reliable performance",
          "Compatibility": "Compatible with standard solar installations"
        },
        features: [
          "10AWG wire gauge for optimal current carrying capacity",
          "UL4703 certified for safety and compliance standards",
          "Rated for 1000VDC-2000VDC voltage applications",
          "19 strand copper conductor for enhanced flexibility",
          "Red single jacket for easy identification and organization",
          "0.26\" (6.6mm) outer diameter for standard compatibility",
          "1000' spool for convenient installation and reduced waste",
          "Secure and efficient electrical connection in solar energy systems",
          "Designed for durability in challenging solar installation environments",
          "UL certified for safety and peace of mind",
          "Excellent choice for comprehensive solar installation needs",
          "High-quality construction for reliable long-term performance",
          "Compatible with standard solar installation practices",
          "Flexible conductor design for easier routing and installation",
          "Color-coded jacket for simplified system identification",
          "Professional-grade wire for commercial and residential applications",
          "Optimized for solar energy system electrical connections",
          "Durable construction for extended service life",
          "Comprehensive safety certification for professional installations",
          "Convenient spool length for efficient project completion"
        ]
      },
      'mc4-solar-connector-kit': {
        name: "MC4 Solar Connector Kit",
        model: "MC4-KIT",
        type: "Connector Kit",
        quantity: "10 pairs",
        availability: "in-stock",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
        brand: "Generic",
        description: "Complete MC4 connector kit with crimping tools, essential for professional solar panel wiring and system connections.",
        specifications: {
          "Connector Type": "MC4",
          "Quantity": "10 pairs (20 connectors)",
          "Cable Size": "2.5-6mm²",
          "Voltage Rating": "1000V DC",
          "Current Rating": "30A",
          "IP Rating": "IP67",
          "Material": "UV-resistant plastic",
          "Included Tools": "Crimping tool, wire stripper",
          "Warranty": "1 year"
        },
        features: [
          "Professional-grade MC4 connectors",
          "Complete crimping tool set",
          "UV-resistant materials",
          "High voltage and current ratings",
          "1-year warranty",
          "Easy-to-use crimping system"
        ]
      },

      // Accessories
      'tesla-wall-connector-ev-charger': {
        name: "Tesla Wall Connector EV Charger",
        model: "TW-01",
        power: "11.5kW",
        type: "Level 2",
        availability: "in-stock",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        brand: "Tesla",
        description: "High-power Level 2 EV charger with smart connectivity, perfect for home charging of electric vehicles with solar integration.",
        specifications: {
          "Maximum Power": "11.5kW",
          "Output Voltage": "240V AC",
          "Output Current": "48A",
          "Charging Speed": "Up to 44 miles/hour",
          "Connector Type": "Tesla proprietary",
          "Connectivity": "WiFi, Bluetooth",
          "Installation": "Hardwired",
          "Weather Rating": "NEMA 3R",
          "Warranty": "4 years",
          "Dimensions": "400×300×100mm",
          "Weight": "5.5kg"
        },
        features: [
          "High-power Level 2 charging",
          "Smart connectivity features",
          "Tesla vehicle optimization",
          "Weather-resistant design",
          "4-year warranty",
          "Easy installation and setup"
        ]
      },
      'solar-monitoring-system': {
        name: "Solar Monitoring System",
        model: "MONITOR-PRO",
        type: "Monitoring",
        availability: "in-stock",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        brand: "SolarEdge",
        description: "Advanced solar monitoring system with real-time data tracking, mobile app control, and comprehensive system analytics.",
        specifications: {
          "Connectivity": "WiFi, Ethernet",
          "Mobile App": "iOS, Android",
          "Data Resolution": "5-minute intervals",
          "Storage": "Cloud-based",
          "Monitoring Points": "Panel-level, string-level",
          "Alerts": "Email, SMS, Push",
          "Reporting": "Daily, monthly, yearly",
          "Warranty": "2 years",
          "Power Supply": "12V DC",
          "Dimensions": "150×100×50mm",
          "Weight": "0.5kg"
        },
        features: [
          "Real-time system monitoring",
          "Mobile app control",
          "Comprehensive analytics",
          "Automated alerts",
          "2-year warranty",
          "Easy installation and setup"
        ]
      }
    };
    
    return products[id] || null;
  };

  const product = getProductDetails(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-700 hover:bg-orange-800"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-orange-700">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-orange-700">Products</Link></li>
            <li>/</li>
            <li><Link to="/products#solar-panels" className="hover:text-orange-700">Solar Panels</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-orange-300 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-contain bg-gray-50"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop";
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.availability === 'in-stock' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {product.availability === 'in-stock' ? 'In Stock' : 'Out of Stock'}
              </div>
              <div className="text-sm text-gray-600">
                Model: {product.model}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span><strong>Brand:</strong> {product.brand}</span>
                <span><strong>Type:</strong> {product.type}</span>
                <span><strong>Power:</strong> {product.wattage}</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl border border-orange-300 p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-700 mb-2">Call for Price</div>
                <p className="text-gray-600 mb-4">Contact us for competitive pricing and bulk discounts</p>
                <div className="flex gap-3">
                  <Link 
                    to="/contact" 
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-orange-700 hover:bg-orange-800 transition-colors"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    to="/quote" 
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-orange-300 text-base font-medium rounded-xl text-orange-700 bg-white hover:bg-orange-50 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl border border-orange-300 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 bg-white rounded-2xl border border-orange-300 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Products</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['rec-375w', 'jinko-385w', 'qcells-340w'].filter(id => id !== productId).map(id => {
              const relatedProduct = getProductDetails(id);
              if (!relatedProduct) return null;
              
              return (
                <Link 
                  key={id}
                  to={`/product/${id}`}
                  className="bg-white rounded-2xl border border-orange-300 p-6 hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-32 object-contain bg-gray-50 rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{relatedProduct.wattage} • {relatedProduct.brand}</p>
                  <div className="text-orange-700 font-medium">View Details →</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
