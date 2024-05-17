
// *******************************************
// BTN HEADING TARGET TEXT CHANGE START
// *******************************************
// Get reference to the target element
const targetElement = document.getElementById('target-btn-heading');

// Get references to all buttons with class 'change-text-btn'
const buttons = document.querySelectorAll('.src-btn');

// Function to handle button click
function handleButtonClick(button) {
    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' class to the clicked button
    button.classList.add('active');
    // Update the text content of the target element with the text content of the clicked button
    targetElement.textContent = button.textContent;
}

// Initialize the first button as active and set its text to the target element
handleButtonClick(buttons[0]);

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Call the handleButtonClick function when a button is clicked
        handleButtonClick(button);
    });
});

// *******************************************
// BTN HEADING TARGET TEXT CHANGE END
// *******************************************

// *******************************************
// DATA POPULATE JS START
// *******************************************
// Product data (Replace with your actual data)
const products = [
    { 
        category: 'non-permitted', 
        title: 'Superpower 90', 
        description: ["Superpower 90 packaged emulsion explosive is a robust, high strength, detonator sensitive explosive. The explosive is having a firm putty-like consistency. Products are sensitized through chemical gassing / micro-spheres / combination of both. It is a water resistant packaged explosive.",

        "Superpower 90 is designed for priming applications and as a column explosive in surface and underground mining and general blasting. The high detonation velocity and the robust nature of Superpower 90 make it an ideal primer for the initiation of column charge."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/pro-tab1-img1.png' 
    },
    { 
        category: 'non-permitted', 
        title: 'Superpower 80', 
        description: ["Superpower 80 packaged emulsion explosive is a robust, high strength, detonator sensitive explosive. The explosive is having a firm putty-like consistency. Products are sensitized through chemical gassing / micro-spheres / combination of both. It is a water resistant packaged explosive.",

        "Superpower 80 is designed for priming applications and as a column explosive in surface and underground mining and general blasting. The high detonation velocity and the robust nature of Superpower 80 make it an ideal primer for the initiation of column charge."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/SuperPower-801.png' 
    },
    { 
        category: 'non-permitted', 
        title: 'Solar Prime', 
        description: ["Solarprime is a high strength cap sensitive packaged slurry explosives suitable for use in most types of blasting applications using small, medium and large diameter holes and represent the latest development in slurry explosives technology.",

        "The product is chemically gassed and then cross-linked and is specifically designed for blasts in open cut mines, quarries and construction. Superior rigid gel also ensures good handling."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/Solar-Prime1.png' 
    },
    { 
        category: 'non-permitted', 
        title: 'Solargel', 
        description: ["Solar Gel is a high strength booster sensitive packaged emulsion explosives suitable for use in most types of blasting applications using small, medium and large diameter holes and represent the latest development in slurry explosives technology.",

        "The product is chemically gassed and is specifically designed for blasts in open cut mines, quarries and construction. Superior rigid gel also ensures good handling."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/Solar-Gel1.png' 
    },
    { 
        category: 'non-permitted', 
        title: 'Solargel-E', 
        description: ["Solar Gel-E is a high strength booster sensitive packaged explosives suitable for use in most types of blasting applications using small, medium and large diameter holes and represent the latest development in slurry explosives technology.",

        "The product is chemically gassed and is specifically designed for blasts in open cut mines, quarries and construction. Superior rigid gel also ensures good handling."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/s1-011.png' 
    },
    { 
        category: 'non-permitted', 
        title: 'Solar Prime-E', 
        description: ["Solar Prime-E is a high strength cap sensitive packaged slurry explosives suitable for use in most types of blasting applications using small, medium and large diameter holes and represent the latest development in slurry explosives technology.",

        "The product is chemically gassed and is specifically designed for blasts in open cut mines, quarries and construction. Superior rigid gel also ensures good handling."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/s2-011.png' 
    },
    { 
        category: 'non-permitted', 
        title: 'Superpower Gold', 
        description: ["Superpower Gold packaged emulsion explosive is a robust, high strength, detonator sensitive explosive. The explosive is having a firm putty-like consistency. Products are sensitized through chemical gassing / micro-spheres / combination of both. It is a water resistant packaged explosive.",

        "Superpower Gold is designed for priming applications and as a column explosive in surface and underground mining and general blasting. The high detonation velocity and the robust nature of Superpower Gold make it an ideal primer for the initiation of column charge."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/s3-011.png' 
    },
    { 
        category: 'non-permitted', 
        title: 'Solarprime MaxX', 
        description: ["Solarprime MaxX is a high strength cap sensitive packaged slurry explosives suitable for use in mosttypes of blasting applications using small, medium and large diameter holes and represent the latest development in slurry explosives technology.",

        "The product is chemically gassed and then cross-linked and is specifically designed for blasts in open cut mines, quarries and construction. Superior rigid gel also Insures good handling."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/non-permitted-explosives/SPM-011-2.png' 
    },
    { 
        category: 'permitted', 
        title: 'Supercoal 1', 
        description: ["Supercoal 1 is a detonator sensitive packaged emulsion explosive. The Director General of Mines safety (DGMS) has approved Supercoal 1 as a P1 type permitted explosive for use in Degree I gassy coal mines/seams. The emulsion has firm putty like consistency. It is plastic wrapped with steel wire end clips. Cartridges are identified individually as P1 Permitted explosive with a product name, cartridge dimensions and name of manufacturer printed on each cartridge.",

        "Supercoal 1 is a water resistant packaged explosive for use in all applications that require the use of a P1 classified explosive."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/permitted-explosives/Supercoal-11.png' 
    },
    {
        category: 'permitted', 
        title: 'Supercoal 3', 
        description: ["Packaged SUPERCOAL 3 is a detonator sensitive emulsion explosive. The Director General of Mines safety (DGMS) has approved SUPERCOAL 3 as a P3 type permitted explosive for use in Degree I and II gassy coal mines/seams. The emulsion has firm putty like consistency. It is plastic wrapped with steel wire end clips. Cartridges are identified individually as P3 Permitted explosive with a product name, cartridge dimensions and name of manufacturer printed on each cartridge.",

        "SUPERCOAL 3 is a water resistance packaged explosive for use in all applications that require the use of a P3 classified explosive."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/permitted-explosives/Supercoal-31.png' 
    },
    {
        category: 'permitted', 
        title: 'Supercoal 5', 
        description: ["Supercoal 5 is a detonator sensitive packaged emulsion explosive. The Director General of Mines safety (DGMS) has approved Supercoal 5 as a P5 type permitted explosive for use in Degree I, II and III gassy coal mines /seams.",

        "The emulsion has firm putty like consistency. It is plastic wrapped with steel wire end clips. Cartridges are identified individually as P5 Permitted explosive with product name, cartridge dimensions and name of manufacturer printed on each cartridge."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/permitted-explosives/Supercoal-51.png' 
    },
    {
        category: 'seismic', 
        title: 'Superpower Seismic 63/76mm', 
        description: ["Superpower Seismic is a robust packaged emulsion explosive, specifically designed for seismic exploration. It is detonator sensitive, has high strength, high velocity of detonation and excellent water resistance.",

        "The explosives are packed in rigid plastic couplable tubes. The rigid plastic cartridges with positive screw coupling give flexibility of charge size at the shot hole."], 
        imageUrl: 'solar-products/industrial-explosives/packaged-explosives/seismic-explosives/seismic1.jpg' 
    },
    {
        category: 'bulk', 
        title: 'Solar BE-201', 
        description: ["Low post Detonation fumes.", "Excellent water resistance.","Easy handling and loading of holes.","Saves valuable time and manpower","High VOD for better fragmentation","Enhanced safety against impact and friction","Product made of suit strata"],
        imageUrl: 'solar-products/industrial-explosives/bulk-explosives/solar_be_1011-1.png' 
    },
    {
        category: 'bulk', 
        title: 'Solar BE-101', 
        description: ["Low post Detonation fumes.", "Excellent water resistance.","Easy handling and loading of holes.","Saves valuable time and manpower","High VOD for better fragmentation","Enhanced safety against impact and friction","Product made of suit strata"], 
        imageUrl: 'solar-products/industrial-explosives/bulk-explosives/solar_be_1011-1.png' 
    },
    {
        category: 'bulk', 
        title: 'Solar BE-909', 
        description: ["Low post Detonation fumes.", "Excellent water resistance.","Easy handling and loading of holes.","Saves valuable time and manpower","High VOD for better fragmentation","Enhanced safety against impact and friction","Product made of suit strata"], 
        imageUrl: 'solar-products/industrial-explosives/bulk-explosives/solar_be_9091.png' 
    },
    {
        category: 'electronic', 
        title: 'Microdet-1 Electronic Detonator', 
        description: ["High Accuracy", "Programmable at Site.","Enhanced Safety."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/electronic-detonator/micro_det_electronic_detonator1.png' 
    },
    {
        category: 'non-electric', 
        title: 'SUPREME DET-S Down The Hole', 
        description: ["SUPREME DET-S Down The Hole assemblies provide short delay in the non-electric initiation system. Used in conjunction with detonating cord trunk lines or other Non-Electric delay systems to provide flexibility in blast design and ease of use. These can be used in surface or underground mines, at quarries or at construction projects.", 
        "The SUPREME DET-S Down The Hole is developed to be used in a wide range of temperature conditions."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S1.png' 
    },
    {
        category: 'non-electric', 
        title: 'SOLAR DET Down The Hole', 
        description: ["SOLAR DET Down The Hole assemblies provide short delay in the non-electric initiation system. Used in conjunction with detonating cord trunk lines or other Non-Electric delay systems to provide flexibility in blast design and ease of use. These can be used in surface or underground mines, at quarries or at construction projects.", 
        "The SOLAR DET Down The Hole is developed to be used in a wide range of temperature conditions."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Solar-Det1.png' 
    },
    {
        category: 'non-electric', 
        title: 'SUPREME DET-S Long Delay', 
        description: ["SUPREME DET-S Long Period Detonator assemblies provide Long delay, non-electric initiation of underground blast patterns. Used in conjunction with detonating cord trunlines, SUPREME DET-S Long Period Detonator in 18 delay periods, provide flexibility in blast design and ease of use. These can be used in surface or underground mines, at quarries or at construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S-Long-Delay1.jpg' 
    },
    {
        category: 'non-electric', 
        title: 'SOLAR DET Long Delay', 
        description: ["SOLAR DET Long Period Detonator assemblies provide Long delay, non-electric initiation of underground blast patterns. Used in conjunction with detonating cord trunlines, SOLAR DET Long Period Detonator in 18 delay periods, provide flexibility in blast design and ease of use. These can be used in surface or underground mines, at quarries or at construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S-Long-Delay1.jpg' 
    },
    {
        category: 'non-electric', 
        title: 'SUPREME DET-S Short Delay', 
        description: ["SUPREME DET-S Short Period Detonator assemblies provide short delay, non-electric initiation of underground blast patterns. Used in conjunction with detonating cord trunk lines, SUPREME DET-S Short Period Detonator in 20 delay periods, provide flexibility in blast design and ease of use. These can be used in surface or underground mines, at quarries or at construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S-Long-Delay1.jpg' 
    },
    {
        category: 'non-electric', 
        title: 'SOLAR DET Short Delay', 
        description: ["SOLAR DET Short Period Detonator assemblies provide short delay, non-electric initiation of underground blast patterns. Used in conjunction with detonating cord trunk lines, SOLAR DET Short Period Detonator in 20 delay periods, provide flexibility in blast design and ease of use. These can be used in surface or underground mines, at quarries or at construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S-Long-Delay1.jpg' 
    },
    {
        category: 'non-electric', 
        title: 'SUPREME DET-S Surface', 
        description: ["SUPREME DET-S Surface Detonator is a non-electric surface delay unit consisting of low energy millisecond delay detonator housed in plastic connector block.",
        "SUPREME DET-S Surface Detonator is designed to provide surface delay in a non-electric blast pattern in quarries, surface coal operations, open pit mines and construction projects. These are used in conjunction with detonating cord down lines or other non-electric delay systems to provide flexibility in blast design and ease of use."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S-Surface1.jpg' 
    },
    {
        category: 'non-electric', 
        title: 'SOLAR DET Surface Detonator', 
        description: ["SOLAR DET Surface Trunk Line detonator consists of 3-Layered shocktube having internal coating of HMX compound & Detonator assembly which provides Surfce non-electric delay initiation of surface and underground blast patterns.Used in conjunction with detonating cord trunk lines or other Non-Electric delay systems provide flexibiity in blast design and ease of use. These can be used in surface or underground mines, at quarries or at construction projects.",
        "The SOLAR DET Surface Trunk Line detonator is developed to be used in a wide range of temperature conditions. The product may be used in areas encountering high temperatures and cold conditions."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S-Surface1.jpg' 
    },
    {
        category: 'non-electric', 
        title: 'SUPREME Combi Det ', 
        description: ["SUPREME DET-S Combidet detonator are signal tube based detonator, combining In-hole delay with a Surface delay detonator. It consists of 3-Layered shocktube, having internal coating of HMX compound & delay detonator crimped to each end which provides non-electric delay initiation of surface and underground blast patterns.",
        "The SUPREME DET-S Combidet detonator is developed to be used in a wide range of temperature conditions. The product may be used in areas encountering high temperatures and cold conditions."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/non-electric-detonator/Supreme-Det-S-Surface1.jpg' 
    },
    {
        category: 'electric', 
        title: 'Electric Seismic Det', 
        description: ["The Electric Seismic detonator is an initiator system of explosive charge that can convert an electric into a detonation.",
        "The special configuration of the metallic filament used to manufacture the Seismic Electric Detonator results in low resistance which assures effective high initiation energy. The property of the filament makes it safer in terms of its functionality when compared to other detonators available in the market.",
        "The electric detonator has an electro-pyrotechnical element that can react in less than 1.0 millisecond between the moment required current is applied and detonation takes place. The electro-pyrotechnical element is hosted in an antistatic device. The interior design of the detonator that includes the insensitive electro-pyrotechnical set and the antistatic plug was specially developed to prevent accidental detonation associated with static or erratic electricity."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Electric Detonator/Supreme-Seismic1.png' 
    },
    {
        category: 'electric', 
        title: 'Supreme Copper Detonators', 
        description: ["Supreme Copper Electric detonators meant for use in underground coal mines.",
        "Supreme CED and Supreme CSDD detonators have primary charge of Lead Azide / Lead Styphnate in case of CED and Lead Azide / Aluminium Powder in case of CSDD, and base charge in both is PETN. In CSDD, the detonation is pyrotechnically delayed at a predetermined time after the firing pulse is applied."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Electric Detonator/Supreme-Copper-Electric-Detonator1.png' 
    },
    {
        category: 'electric', 
        title: 'Supreme AED-Ultra Safe Detonators', 
        description: ["Supreme AED-Ultra Safe is designed to enhance safety in handling as compared to conventional Aluminium Instantaneous Electric Detonators by removal of most hazardous and sensitive lead styphnate and also makes the product environment friendly.",
        "It provides instantaneous detonation of explosive or detonating cord in quarries, surface operations, open pit mines and construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Electric Detonator/Supreme-Ultra-Safe-Detonators1-1.png' 
    },
    {
        category: 'electric', 
        title: 'Solar Copper Detonators', 
        description: ["Solar Copper Electric detonators meant for use in underground coal mines.",
        "Solar CED and Solar CSDD detonators have primary charge of Lead Azide / Lead Styphnate in case of CED and Lead Azide / Aluminium Powder in case of CSDD, and base charge in both is PETN.",
        "In CSDD, the detonation is pyrotechnically delayed at a predetermined time after the firing pulse is applied. Solar CSDD provide delay flexibility in short period blast design, the accurate delay timing allows for a wider variety of blast design possibilities."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Electric Detonator/Solar-Instantaneous-Copper-Detonator1.png' 
    },
    {
        category: 'electric', 
        title: 'Solar Aluminium Detonators', 
        description: ["The Aluminium Instantaneous Electric Detonator is an initiating system of explosives charge that can convert an electric impulse into a detonation. The Aluminium detonator shell contains a base charge of PETN and Primary Charge of Lead Azide, Lead Styphnate & Aluminium powder.",
        "The Aluminium Instantaneous Electric Detonator is designed to provide instantaneous detonation of explosive or detonating cord in quarries, surface operations, open pit mines and construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Electric Detonator/aed1.png' 
    },
    {
        category: 'electric', 
        title: 'Supreme Aluminium Electric Detonators', 
        description: ["The Aluminium Instantaneous Electric Detonator is an initiating system of explosives charge that can convert an electric impulse into a detonation. The Aluminium detonator shell contains a base charge of PETN and Primary Charge of Lead Azide, Lead Styphnate & Aluminium powder.",
        "The Aluminium Instantaneous Electric Detonator is designed to provide instantaneous detonation of explosive or detonating cord in quarries, surface operations, open pit mines and construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Electric Detonator/Supreme-Aluminium-Electric-Detonator1.png' 
    },
    {
        category: 'electric', 
        title: 'Solar Ultra Safe Detonators', 
        description: ["Solar AED-Ultra Safe is designed to enhance safety in handling as compared to conventional Aluminium Instantaneous Electric Detonators by removal of most hazardous and sensitive lead styphnate and also makes the product environment friendly.",
        "It provides instantaneous detonation of explosive or detonating cord in quarries, surface operations, open pit mines and construction projects."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Electric Detonator/Supreme-Ultra-Safe-Detonators1.png' 
    },
    {
        category: 'plain', 
        title: 'Plain Detonators', 
        description: ["Supreme Plain Detonator is used with Safety Fuse. These detonators are of No. 8 strength and are used for blasting in quarries, opencast mines, surface excava-tions, well sinking, road construction, civil works etc.",
        "Supreme Plain Detonators are non-electric in nature. These are initiated by a strand of safety fuse that is inserted into the cap and crimped with a crimping tool to prevent the fuse from slipping out of the cap and to prevent water or other foreign material entering the cap. The safety fuse should be cut squarely so that it comes into contact with igniting charge of the cap."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Plain Detonator/Supreme-Plain-Detonator1.png' 
    },
    {
        category: 'cord-relay', 
        title: 'Supreme Cord Relay', 
        description: ["Supreme Cord Relay consist of 2 nos. of millisecond delay detonators of the same delay interval crimped in specially designed plastic housing, which makes the product bi-directional. The plastic housing has a provision for hooking up detonating cord at either end. The delay interval is printed on the plastic housing.",
        "Supreme Cord relays are used in conjunction with detonating cord trunklines in opencast, metal and coal mines, quarrying, civil construction and in underground metal mines. They provide an accurate delay between blastholes in a row or between the rows. Cord Relay can be used for developing various delay patterns."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Cord Relay/Cord-Relay1.png' 
    },
    {
        category: 'cast-booster', 
        title: 'Solarcast-P (Castbooster)', 
        description: ["Booster is made of a high explosive composition cast into a cardboard/plastic shell. Two longitudinal tunnels in the booster accommodate either a signal tube detonator or detonating cord. One tunnel has straight walls while the other is blocked at the top of the booster to provide a stop for the detonator. Detonating cord or signal tube are protected from damage by a recessed well at the base of the booster.",
        "Cast Boosters have a high density and a high velocity of detonation (VOD) to maximize performance.",
        "Cast boosters are reliably initiated by detonators or by detonating cords containing at least 5.0 g/m PETN. These boosters have been specifically designed to provide reliable initiation of pumped, augered and packaged explosives. The main intended application for Cast boosters is for use with ANFO and Bulk explosives."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Cast Boosters/solar-cast1.png' 
    },
    {
        category: 'detonating-cords', 
        title: 'Solar Cords', 
        description: ["Solar Cord comprises an explosive core of PETN encapsulated in a tape winded with a natural or synthetic fibres and finally coated with plastic which makes the product strong, flexible and waterproof. It provides quick, safe and convenient means of simultaneously initiating any number of independent or inter-related charges.",
        "Solar Cord is available with a variety of PETN charge weights designed for different applications.",

        "Solar Cord can be initiated by a No. 6 or No. 8 plain detonator, electric or nonelectric detonator.",
        
        "Solar Cord with PETN core loads of 10 g/m is most frequently used as downlines in blast-holes either for directly initiating charges or detonator sensitive NG explosives, watergels and emulsions or indirectly initiating columns and decks of detonator insensitive ANFO and non-cap sensitive watergels and emulsions by means of special primers or boosters."], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Detonating Cords/Detonating-Cords1.png' 
    },
    {
        category: 'aluminium', 
        title: 'Supreme Elemented Det', 
        description: ["SUPREME ELEMENTED DET series are aluminium delay detonators meant to be used after assembling with shock tube of required length along with a rubber sleeve. There are basically four types of Elemented detonators, namely Type A, Type B,Type C & Type D. The first two i.e. Type A & Type B are meant for use as surface trunkline. Whilst Type C & Type D are to be used for down the hole applications.",
        "Solar Cord is available with a variety of PETN charge weights designed for different applications.",

        "Detonators belonging to Type A and Type B consist of low energy millisecond delay detonator housed in plastic connector block. They are designed to provide surface delay in a non electric blast pattern in Quarries, Surface coal mines, Open pit mines and Construction projects. They are used in conjunction with detonating cord downlines or other non electric delay systems to provide flexibility in blast design and ease of use.",], 
        imageUrl: 'solar-products/industrial-explosives/initiating-systems/Aluminium Elemented Det/aluminium_elemented_det1.png' 
    },
    {
        category: 'uas&drones', 
        title: 'Warheads for Weaponization of Drones', 
        description: ["developing fragmentation cum blast warheads weighing 01- 10 kg that can be dropped from individual Drones or Swarms of Drones. These warheads can neutralise enemy or anti national personnel in open and also neutralise hostile soft skinned targets within a lethal radius of 8-30 m.",
        "The said warheads are being developed with electronic fuzes to ensure effective air burst or detonation on impact. EEL is also developing hexa-copter drones with single or multiple explosive payloads that can be dropped from a height of 300-500 m with an accuracy of 3-5 m at the target end. EEL has developed the competency to develop other variants of warheads to neutralise armoured vehicles, civil or field fortifications employed against us or any other target specified by the users. ",

        "EEL developed warheads can be integrated with drones manufactured by other manufacturers also. Thus we can look at weaponizing drones already held in the inventory or those already in the supply pipeline, of course based on the platform suitability and legal provisions of upgrading the equipment.",], 
        imageUrl: 'solar-products/defence/UAS & Drones/Warheads-for-Weaponization-of-Drones-copy.jpg' 
    },
    {
        category: 'uas&drones', 
        title: 'Loiter Munition (LM-0)', 
        description: ["Hand launched Loiter Munition (LM-0) that can carry a 1.5 kg explosive warhead to a range of 15 This is an ideal choice for the Tactical Battle Area and it can establish firepower supremacy of our troops in contact.",], 
        imageUrl: 'solar-products/defence/UAS & Drones/LM-0.jpg' 
    },
    {
        category: 'uas&drones', 
        title: 'Loiter Munition (LM-1)', 
        description: ["Tube or a catapult launched Loiter Munition (LM-1) that can deliver a 4 kg explosive warhead up to a range up to 25 km. It will be a man-portable system (in backpacks) with a total all-up-weight of only 20 kg which includes communication control, payload and launch mechanisms. This variant will be extremely useful in the Tactical Battle Area and can be effectively employed by troops in contact as well as by the Special Forces.",], 
        imageUrl: 'solar-products/defence/UAS & Drones/LM-1.jpg' 
    },
    {
        category: 'uas&drones', 
        title: 'Loiter Munition (LM-2)', 
        description: ["Vehicle mounted tube / cassette launched Loiter Munition (LM-2) that can carry 5-10 kg warheads to a range of 40-100 This will be a rugged and mobile system where in six LM2, launcher, generator, UPS, and other support equipment can be accommodated in a 1 T class of vehicle. This variant can be gainfully utilised by the Operational Commanders to shape the battlefield and can be a game changer.",], 
        imageUrl: 'solar-products/defence/UAS & Drones/LM-2.jpg' 
    },
    {
        category: 'ammunitions', 
        title: 'Multi Mode Hand Grenades', 
        description: ["Economic Explosives Limited, a subsidiary of Solar Industries India Ltd., Nagpur, has successfully established production of Multi Mode Hand Grenade as per TOT obtained from TBRL (DRDO).",
        "Multi Mode Hand Grenade as a replacement of the vintage Hand Grenade M 36, offers numerous advantages to the Soldier in terms of Safety, Dual Mode capability and Lethality."], 
        imageUrl: 'solar-products/defence/Ammunitions/FPDM.png' 
    },
    {
        category: 'ammunitions', 
        title: 'Medium Caliber', 
        description: [""], 
        imageUrl: 'solar-products/defence/Ammunitions/Medium20Caliber20Projectiles1.jpg' 
    },
    {
        category: 'ammunitions', 
        title: 'Large Caliber', 
        description: [""], 
        imageUrl: 'solar-products/defence/Ammunitions/Small-Caliber-Projectiles-new1.jpg' 
    },
    {
        category: 'military-exp', 
        title: 'HMX*', 
        description: ["Solar provides a complete range of High Performance Explosives and its compositions from its “State-of-TheArt” manufacturing plants. Solar has facilities to produce HMX and HMX Compounds with high purity and fineness.",
        "Solar also produces HMX compounds coated with high melting waxes and synthetic polymers such as Viton for pressing applications providing an enhanced phlegmatization effect resulting in less sensitivity.",
        "The modern production facility has well defined and documented Quality Management System. Laboratory having latest comprehensive testing facilities with NABL accreditation ISO/IEC-17025-2017."], 
        imageUrl: 'solar-products/defence/Military Explosives/HMX-new1.png' 
    },
    {
        category: 'military-exp', 
        title: 'TNT*', 
        description: ["Solar provides a complete range of High Performance Explosives and its compositions from its “State-of-TheArt” manufacturing plants. Solar produces flaked TNT, Type I required for Ammunition and Warhead production.",
        "The modern production facility has well defined and documented Quality Management System. Laboratory having latest comprehensive testing facilities with NABL accreditation ISO/IEC-17025-2017.",], 
        imageUrl: 'solar-products/defence/Military Explosives/TNT-new1.png' 
    },
    {
        category: 'military-exp', 
        title: 'RDX*', 
        description: ["Solar provides a complete range of High Performance Explosives and its compositions from its “State-of-TheArt” manufacturing plants. Solar also produces latest insensitive RDX which offers significant advantage by reducing shock sensitivity level of RDX based compositions.",
        "Solar also manufactures RDX coated with high melting waxes and synthetic polymers such as Viton for pressing applications providing an enhanced phlegmatization effect resulting in less sensitivity. The modern production facility has well defined and documented Quality Management System. Laboratory having latest comprehensive testing facilities with NABL accreditation ISO/IEC-17025-2017.",], 
        imageUrl: 'solar-products/defence/Military Explosives/TDS-new1.png' 
    },
    {
        category: 'bombs', 
        title: 'Air Bombs', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Bombs & Warheads/Air-Bombs-new1.jpg' 
    },
    {
        category: 'bombs', 
        title: 'Rockets', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Bombs & Warheads/Rockets-new1.jpg' 
    },
    {
        category: 'bombs', 
        title: 'Torpedos', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Bombs & Warheads/Torpedos-new1.jpg' 
    },
    {
        category: 'bombs', 
        title: 'War Heads for Rockets and Missiles', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Bombs & Warheads/Warhead-Invar-new1.jpg' 
    },
    {
        category: 'int-of-rockets', 
        title: 'Composite Propellants', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Integration of Rockets/Composite-Propellants1.jpg' 
    },
    {
        category: 'r&d', 
        title: 'R&D CENTRE', 
        description: ["",], 
        imageUrl: 'solar-products/defence/R&D Centre/Life-Assessment.jpg' 
    },
    {
        category: 'ini-pyros', 
        title: 'Fuzes', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Initiating Systems and Pyros/Fuzes1.jpg' 
    },
    {
        category: 'ini-pyros', 
        title: 'Detonators', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Initiating Systems and Pyros/Detonators1.jpg' 
    },
    {
        category: 'ini-pyros', 
        title: 'Ignitors', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Initiating Systems and Pyros/Igniters1-1.jpg' 
    },
    {
        category: 'ini-pyros', 
        title: 'Decoys & Flare', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Initiating Systems and Pyros/DECOYSFlare1.jpg' 
    },
    {
        category: 'ini-pyros', 
        title: 'Riot Control Devices', 
        description: ["",], 
        imageUrl: 'solar-products/defence/Initiating Systems and Pyros/Riot-Control-Devices1.jpg' 
    },
    {
        category: 'cds', 
        title: 'Counter Drone System (CDS)', 
        description: ["Countering the threat caused by disruptive drones is now an issue of concern for everyone as hostile countries and non-state actors will try to use drones for surveillance of vital installations and for targeting military assets. Even non-state actors are adept at use of unmanned aerial systems (UAS) for malicious purpose such as for terrorism, violent extremism, espionage, sabotage, propoganda and smuggling of arms, ammunition, drugs, fake currency and other disruptive material.. Keeping in view of the futuristic requirements of armed forces, EEL is developing a Micro-missile based Counter-Drone System(CDS) with both soft kill and hard kill capability.",
        "The proposed system under development contains a large number of 2 kg micro-missiles which can effectively engage hostile drones up to a range of 2 km. Designed for rapid operational deployment on a highly mobile system, a micro-missile cassette/pod containing 24 / 36 / 48 missiles achieve a heavy and sustained volume of fire and can be seamlessly integrated with a Radar and a Jammer on a 4x4, 2.5 Ton Vehicle or any other vehicle as deemed appropriate like an All Terrain Vehicle."], 
        imageUrl: 'solar-products/defence/Counter Drone System (CDS)/Counter_Drone_Systems.jpg' 
    },
    {
        category: 'drones-armed-with-guided-missile', 
        title: 'Drones Armed with Guided Missile', 
        description: ["Drones carrying small missiles can be a game changer solution as it can neutralise adversary targets by firing short range air to ground missiles.",
        "The system under development at EEL is having a drone armed with missiles weighing 2-10 kg with a range of 2-3 km.",
        "These missiles will be guided precisely to the target and will carry warheads to neutralise tanks, bunkers, radar sites and other valuable military targets."], 
        imageUrl: 'solar-products/defence/Drones Armed with Guided Missile/Drones-Armed-Micro-Missile.jpg' 
    },

];

// Function to filter products based on category and render them
function renderProducts(category) {
    const productContainer = document.getElementById('relative-products-parent');
    // Clear existing content

    productContainer.innerHTML = '';

    // Filter products based on category
    const filteredProducts = products.filter(product => product.category === category);

    // Render each product
    filteredProducts.forEach(product => {
        // Create the relative-products-container element
        const relativeProducts = document.createElement('div');
        relativeProducts.classList.add('relative-products-container');
    
        // Create the product image element
        const productImage = document.createElement('div');
        productImage.classList.add('rel-prod-img');
        productImage.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
        `;
        // Append the product image to the relative-products-container
        relativeProducts.appendChild(productImage);
    
        // Create the product content element
        const productContent = document.createElement('div');
        productContent.classList.add('rel-prod-content');
        productContent.innerHTML = `
            <h6>${product.title}</h6>
            ${product.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
        `;
        // Append the product content to the relative-products-container
        relativeProducts.appendChild(productContent);
    
        // Append the relative-products-container to the main container
        productContainer.appendChild(relativeProducts);
    });
}    

// Add click event listeners to category buttons
const categoryButtons = document.querySelectorAll('.src-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        renderProducts(category);
    });
});

// Initial rendering with the first category
renderProducts(categoryButtons[0].getAttribute('data-category'));

// *******************************************
// DATA POPULATE JS END
// *******************************************
