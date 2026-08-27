export const profile = {
  name: 'Chi-Seng Lam',
  chineseName: '林智聲',
  title: 'Full Professor',
  email: 'cslam@um.edu.mo',
  affiliations: [
    'State Key Laboratory of Analog and Mixed-Signal VLSI',
    'Institute of Microelectronics',
    'Department of Electrical and Computer Engineering, Faculty of Science and Technology',
    'University of Macau'
  ],
  officialProfile: 'https://ime.um.edu.mo/people/cslam/',
  googleScholar: 'https://scholar.google.com/citations?user=DMeEBMIAAAAJ&hl=en',
  ieeeXplore: 'https://ieeexplore.ieee.org/author/37415720700',
  orcid: 'https://orcid.org/0000-0003-3669-6743',
  portraitSource: 'https://ime.um.edu.mo/wp-content/uploads/2019/01/71e651a1840b66ed83ac54d1024b1275.jpg'
};

export const scholarlyMetrics = {
  retrieved: '26 August 2026',
  scholar: {
    citations: '4,988',
    citationsSince2021: '3,261',
    hIndex: '38',
    i10Index: '107'
  },
  ieee: {
    publications: '175',
    citations: '3,270',
    journals: '90',
    conferences: '77'
  }
};

export const nav = [
  { href: '', label: 'Home' },
  { href: 'research/', label: 'Research' },
  { href: 'people/', label: 'People' },
  { href: 'publications/', label: 'Publications' },
  { href: 'teaching/', label: 'Teaching' },
  { href: 'awards-service/', label: 'Awards & Service' },
  { href: 'openings-contact/', label: 'Openings / Contact' }
];

export const researchAreas = [
  {
    number: '01',
    title: 'Power Quality & Grid-Connected Conversion',
    text: 'Power quality compensators, hybrid active power filters, STATCOMs, grid-connected inverters, and control techniques for reliable electric power systems.',
    tags: ['Power quality', 'STATCOM', 'Smart grid']
  },
  {
    number: '02',
    title: 'Power Management Integrated Circuits',
    text: 'High-efficiency DC–DC converters, voltage reference circuits, and power-electronics controllers spanning low-power IoT to demanding energy systems.',
    tags: ['DC–DC converters', 'Voltage references', 'PMIC']
  },
  {
    number: '03',
    title: 'Renewable Energy & Wireless Power',
    text: 'Photovoltaic generation, inductive and wireless power transfer, and compact conversion architectures for electrification and sustainable energy.',
    tags: ['Photovoltaics', 'Wireless charging', 'Energy conversion']
  }
];

export const selectedPublications = [
  {
    year: '2025',
    title: 'A Dual-Inductor Quad-Path Hybrid Buck Converter (2L4PHB) With Reduced Inductor Current',
    authors: 'W.-L. Zeng, G. Cai, Y. Lu, S.-W. Sin, R. P. Martins, and C.-S. Lam',
    venue: 'IEEE Journal of Solid-State Circuits, vol. 60, no. 9, pp. 3366–3378',
    type: 'Journal'
  },
  {
    year: '2025',
    title: 'A 2-Channel Time-Interleaved Noise-Shaping SAR ADC Directly Powered by a DC–DC Converter',
    authors: 'H. Gong, K. Li, W.-L. Zeng, M. Guo, C.-S. Lam, et al.',
    venue: 'IEEE Transactions on Circuits and Systems I: Regular Papers',
    type: 'Journal'
  },
  {
    year: '2024',
    title: 'Model Predictive Robust Control for a Capacitive-Coupling Grid-Connected Inverter in Power Quality Compensation',
    authors: 'P.-I. Chan, W.-K. Sou, and C.-S. Lam',
    venue: '50th Annual Conference of the IEEE Industrial Electronics Society (IECON)',
    type: 'Conference'
  },
  {
    year: '2024',
    title: 'A Wireless Charging System with Bipolar Partial Power Conversion for 400V/800V EV Battery',
    authors: 'M. Wu, I.-W. Iam, C. Gong, and C.-S. Lam',
    venue: '50th Annual Conference of the IEEE Industrial Electronics Society (IECON)',
    type: 'Conference'
  },
  {
    year: '2023',
    title: 'A 95% Peak Efficiency Modified KY Converter With Improved Flying Capacitor Charging in DCM for IoT Applications',
    authors: 'C. Pan, W.-L. Zeng, C.-S. Lam, S.-W. Sin, C. Zhan, and R. P. Martins',
    venue: 'IEEE Journal of Solid-State Circuits, vol. 58, no. 11, pp. 3219–3230',
    type: 'Journal'
  },
  {
    year: '2023',
    title: 'Reinforcement Learning Based Sliding Mode Control for a Hybrid STATCOM',
    authors: 'C. Gong, W.-K. Sou, and C.-S. Lam',
    venue: 'IEEE Transactions on Power Electronics, vol. 38, no. 6, pp. 6795–6800',
    type: 'Journal'
  },
  {
    year: '2021',
    title: 'The Role of Renewable Energy System in Reshaping the Electrical Grid Scenario',
    authors: 'G. Buticchi, C.-S. Lam, X. Ruan, M. Liserre, et al.',
    venue: 'IEEE Open Journal of the Industrial Electronics Society, vol. 2, pp. 451–468',
    type: 'Journal'
  },
  {
    year: '2020',
    title: 'A Single-Stage Inductive-Power-Transfer Converter for Constant-Power and Maximum-Efficiency Battery Charging',
    authors: 'Z. Huang, C.-S. Lam, P.-I. Mak, R. P. Martins, S.-C. Wong, and C. K. Tse',
    venue: 'IEEE Transactions on Power Electronics, vol. 35, no. 9, pp. 8973–8984',
    type: 'Journal'
  }
];

export const highlyCitedPublications = [
  {
    year: '2016',
    citations: '227',
    title: 'Analysis, Design, and Implementation of a Quasi-Proportional-Resonant Controller for a Multifunctional Capacitive-Coupling Grid-Connected Inverter',
    authors: 'T. Ye, N.-Y. Dai, C.-S. Lam, M.-C. Wong, and J. M. Guerrero',
    venue: 'IEEE Transactions on Industry Applications, vol. 52, no. 5, pp. 4269–4280'
  },
  {
    year: '2012',
    citations: '223',
    title: 'Adaptive DC-Link Voltage-Controlled Hybrid Active Power Filters for Reactive Power Compensation',
    authors: 'C.-S. Lam, W.-H. Choi, M.-C. Wong, and Y.-D. Han',
    venue: 'IEEE Transactions on Power Electronics, vol. 27, no. 4, pp. 1758–1772'
  },
  {
    year: '2020',
    citations: '155',
    title: 'A Single-Stage Inductive-Power-Transfer Converter for Constant-Power and Maximum-Efficiency Battery Charging',
    authors: 'Z. Huang, C.-S. Lam, P.-I. Mak, R. P. Martins, S.-C. Wong, and C. K. Tse',
    venue: 'IEEE Transactions on Power Electronics, vol. 35, no. 9, pp. 8973–8984'
  },
  {
    year: '2012',
    citations: '149',
    title: 'Hysteresis Current Control of Hybrid Active Power Filters',
    authors: 'C.-S. Lam, M.-C. Wong, and Y.-D. Han',
    venue: 'IET Power Electronics, vol. 5, no. 7, pp. 1175–1187'
  },
  {
    year: '2013',
    citations: '145',
    title: 'Analysis of DC-Link Voltage Controls in Three-Phase Four-Wire Hybrid Active Power Filters',
    authors: 'W.-H. Choi, C.-S. Lam, M.-C. Wong, and Y.-D. Han',
    venue: 'IEEE Transactions on Power Electronics, vol. 28, no. 5, pp. 2180–2191'
  }
];

export const awards = [
  ['2024', 'Macao Science and Technology Invention Award, Third Class'],
  ['2023', 'Gold Medal, 48th International Exhibition of Inventions Geneva'],
  ['2018', 'Macao Science and Technology Invention Award, Second Class'],
  ['2016', 'IEEE PES Chapter Outstanding Engineer Award'],
  ['2014', 'Macao Science and Technology Invention Award, Third Class'],
  ['2012', 'Macao Science and Technology R&D Award for Postgraduates (PhD)']
];

export const reviewerAwards = [
  '2024 IEEE Transactions on Power Electronics Outstanding Reviewer',
  '2024 IEEE Transactions on Industrial Electronics Distinguished Reviewer',
  '2024 IEEE Solid-State Circuits Society Outstanding Reviewer',
  '2022 IEEE Transactions on Industrial Electronics Distinguished Reviewer',
  '2021 IEEE Access Outstanding Associate Editor'
];

export const editorialRoles = [
  'IEEE Transactions on Power Electronics',
  'IEEE Transactions on Industrial Electronics',
  'IEEE Journal of Emerging and Selected Topics in Power Electronics',
  'IEEE Open Journal of the Industrial Electronics Society',
  'IEEE Access'
];
