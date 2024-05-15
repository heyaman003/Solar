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

];

// Function to filter products based on category and render them
function renderProducts(category) {
    const productContainer = document.getElementById('relative-products-parent');
    // Clear existing content
    console.log("hii",productContainer)
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
