// import React from 'react';
// ...other imported stuff

const Machines = [
  {
    id: 1,
    pageurl: '/machine1' ,
    title: 'Digital Packaging Printer - MVZ ',
    Subtitle: ' MVZ 1000 printer is a digital, wide-web, single-pass inkjet printer designed for flexible packaging applications. ',
      MainDescription: 'MVZ 1000 printer is a digital, wide-web, single-pass inkjet printer designed for flexible packaging applications. \n' +
      'This new, low entry cost solution enables users to produce the colourful, short-to-middle-run lengths of customized flexible packaging that are in demand in today’s market.',
      Title2: 'On-demand digital' ,
      Text2:
      'Single pass printing with 1600dpi resolution at a speed of 9 or 18 meters/minute. \n' +
      'Up to 42’’ (1067mm) printing width achieved through 5 fixed Memjet printheads with a total of 352,000 nozzles\n' +
      'Continuous media runs of up to1000+ metres*  (no need to cut the media web to maintain inkjets).\n' +
      'Inline- the MVZ 1000 continuous printing capability means it can be directly connected to external finishing devices such as packaging, laminating, cutting units and so on, in-line.\n' +
      'The MVZ 1000 is a unique, low entry cost, solution that provides the ultimate flexibility to produce cost-effective short-to-medium run and individual packaging.\n' +
      'Inks are water-based dye and are completely odourless\n' +
      'The ink is delivered by 5 Memjet printheads each with five colour channels (CMYKK) \n' +
      'A 1.2 picoliter drop size means instant drying time and a wide colour gamut\n' +
      'Printheads can be filled from 2L cartridges or10L bulk tanks\n' +
      'The MVZ addresses the demands of customer choice and the fast moving nature of shortening product lifecycles that has resulted in the massive increase in the number of SKUs. Which, in turn, has made the older analog technologies difficult to manage efficiently and effectively.',
    MainImage: ('/Machines/photo_MVZ.png'),
    thumb: ('./placeholder2.jpg'),
  },
  // {
  //   id: 2,
  //   pageurl: '/machine2' ,
  //   title: 'Aluminium Digital Printing Solution ',
  //   Subtitle: 'Iinkjet system that prints near photographic quality images and designs on to anodised aluminium.',
  //     MainDescription: 9,
  //     Title2: 'Technical Overview' ,
  //     Text2: 'second descripton',
  //   MainImage: ('/Machines/Kornit.png'),
  //   thumb: ('./placeholder2.jpg'),
  // },
  {
    id: 3,
    pageurl: '/machine3' ,
    title: 'Maglev  6 colour Flatbed UV Printer',
    Subtitle: 'The IQDEMY Maglev is a powerful industrial flatbed solution for your business. Designed in Switzerland, the Maglev uses the latest technical innovation to deliver a high quality inkjet flatbed printer at a competitive price. ',
    MainDescription: 'The IQDEMY Maglev is a powerful industrial flatbed solution for your business. Designed in Switzerland, the Maglev uses the latest technical innovation to deliver a high quality inkjet flatbed printer at a competitive price.\n' +
    'Using the latest Ricoh Gen5 printhead the system has up to 6 colour printing ( CYMK Lc Lm) plus options of white, Varnish and Quantum Dot inks. Giving class- leading print quality.\n' +
    '8 channels in every machine CYMK + Lc Lm + Wh + Varnish (Quantum Dot option)\n' +
    'White ink recirculation \n' +
    '5 Year warranty for control electronics and UV-LED system \n' +
    'Innovative “magnetic levitation” carriage motion system produces high speed accurate printing at maximum capacity',
    Title2: 'Advanced System Build' ,
    Text2: 'The advanced grey-scale with a propriety improved waveform system means the Maglev can print dots of different sizes in a single cycle increasing the smoothness of the image without speed loss.\n' +
    'The printer is also equipped with a powerful linear motor which eliminates the negative vibrations and “noise” that affects the print quality of many printers. These innovations build on each other to provide greater\n' +
    'Consistency \n' +
    'Precision \n' +
    'Machine durability\n' +
    'Media Handling\n' +
    '4 vacuum zones operate independently enabling flexibility and reducing power consumption. Reverse vacuum is standard to give easy movement of heavy media. The Maglev is able to handle media up to 400kg thanks to its solid all-metal welded frame construction \n',
    MainImage: ('/Machines/Kornit.png'),
    thumb: ('/placeholder2.jpg'),
  },
  {
    id: 4,
    pageurl: '/machine4' ,
    title: 'Quantum dot high security ink',
    Subtitle: ' Nano  ink  technology  brings  a  new  standard  in  the  fight  against  counterfeiting  and  fraud ',
      MainDescription:
    ' Our Quantum Dot ink technology brings a new era in the fight against counterfeiting and fraud.\n' +
    'Quantum Dot ink is invisible to the eye but under specific wavelengths UV light become visible. They can be digitally printed so each asset, from credit cards to aircraft parts, can be invisibly marked. \n' +
    'Unlike existing solutions each Dot is engineered and can be tailored to emit a specific wavelength opening up a wide gamut of fluorescing colours. Adding another layer of complexity and validation. '
      ,
      Title2: 'Technical Overview' ,
      Text2: 'Quantum Dots (QD) are metal-based nano-particles possessing semi-conductive properties; they absorb light in the UV spectrum and emit it in a visible range. They are composed of non-organic  elements such as Cadmium, Indium, Graphene, or Perovskite etc., which range between 2-10 nM in size. \n' +
      'Quantum Dots are incorporated into our inks to provide you with the next generation of fluorescent inks for security printing.\n' +
      'Why Quantum Dot technology?\n' +
      'It  addresses the major problems associated with existing LUMINOPHORES solutions:\n' +
      'Organic Luminophores\n' +
      'Fluorescence quickly degrades\n' +
      'Very limited set of colours\n' +
      'Inorganic Luminophores \n' +
      'Need to be big to be bright – too big for inkjet\n' +
      'Good for traditional technologies\n' +
      'Limited (set) colours\n' +
      'Quantum Dot \n' +
      'Small enough to inkjet – digital security\n' +
      'Long fluorescence life expectancy – time is a security feature\n' +
      'All colours possible – including spot and bespoke brand colours',
    MainImage: ('/Machines/Kornit.png'),
    thumb: ('/placeholder2.jpg'),
  },

    // {
    //     id: 5,
    //     pageurl: '/machine4' ,
    //     title: 'Al  Printin',
    //     Subtitle: 'Print  near-photographic  quality  images  and  designs  under  the  protective  skin  of  anodised  aluminium  sheet ',
    //     MainDescription:
    //         'Quantum  Dots  (QD)  are  metal-based  nano-particles  possessing  semiconductive  properties;  they  absorb  light  in  the  UV  spectrum  and  emit  it  in  a  visible  range.  They  are  composed  of  non-organic    elements  such  as  Cadmium,  Indium,  Graphene,  or  Perovskite  etc.,  which  range  between  2-10  nM  in  size.  They  provide  the  next  level  generation  of  fluorescent  inks  for  security  printing.  Our  Quantum  Dot  technology  addresses  the  major  problems  associated  with  LUMINOPHORES  :  Organic  Luminophores  Fluorescence  quickly  degrades  Limited  (set)  colours  Inorganic  Luminophores    Need  to  be  big  to  be  bright  –  too  big  for  inkjet  Good  for  traditional  technologies  Limited  (set)  colours  Quantum  Dot    Small  enough  to  inkjet  –  digital  security  Long  fluorescence  life  expectancy  –  time  is  a  security  feature  All  colours  possible  –  including  spot  and  bespoke  brand  colours  '
    //     ,
    //     Title2: 'Technical Overview' ,
    //     Text2: 'second descripton',
    //     MainImage: ('/Machines/Kornit.png'),
    //     thumb: ('/placeholder2.jpg'),
    // },

    {
        id: 5,
        pageurl: '/machine5' ,
        title: 'Special Projects',
        Subtitle: 'Consultancy  and  project  management  to  transform  your  idea  into  your  next  competitive  advantage ',
        MainDescription: 'Reprocad also undertake consultancy services under NDA (non-disclosure) for selected clients. \n' +
        'Working, over the last 15 years, with our proven network of partners and technical experts we help clients in the following disciplines:\n' +
        'Research and marketing\n' +
        'System Development\n' +
        'Printer innovation\n' +
        'Ink development\n' +
        'Software services\n' +
        'Please contact us for a confidential discussion',
        Title2: '' ,
        Text2: '',
        MainImage: ('/Machines/Kornit.png'),
        thumb: ('/placeholder2.jpg'),
    },



];

export default Machines;
