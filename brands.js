// brands.js
// ---------------------------------------------------------
// HOW TO USE:
// Simply add your brand logos to the 'brands' array below.
// - name: The text to display below the logo
// - image: The exact file name of your uploaded PNG/JPEG (e.g., 'image.png', 'Untitled design.png')
// - icon: (Optional) A FontAwesome icon class to use if no image is provided.
// ---------------------------------------------------------

const brands = [
    {
        name: "",
        image: "fashion factory.PNG", // Insert your file name here, e.g., "Untitled design.png"
        icon: "fas fa-tshirt"
    },
    {
        name: "",
        image: "decathlon.PNG", // Insert your file name here
        icon: "fas fa-running"
    },
    {
        name: "",
        image: "Highlander.PNG", // Insert your file name here
        icon: "fas fa-mountain"
    },
    {
        name: "",
        image: "Ranka.jpeg", // Insert your file name here
        icon: "fas fa-gem"
    },
   // {
   //     name: "Skyline Realty",
   //     image: "", // Insert your file name here
   //     icon: "fas fa-building"
   // },
   // {
   //     name: "AuraSpa",
   //     image: "", // Insert your file name here
   //     icon: "fas fa-leaf"
   // }
];

document.addEventListener("DOMContentLoaded", () => {
    const marqueeContainer = document.getElementById("marquee-brands-container");
    
    if (!marqueeContainer) return;

    let brandHTML = '';
    
    brands.forEach(brand => {
        const nameHtml = brand.name ? `<span class="font-headline font-bold text-sm md:text-base tracking-wider text-gray-300 group-hover:text-brand-yellow transition-colors text-center w-full truncate mt-3">${brand.name}</span>` : '';

        if (brand.image) {
            // Render Image
            brandHTML += `
                <div class="flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group bg-[#1a1a1a] border border-gray-800 rounded-2xl w-[160px] h-[160px] md:w-[200px] md:h-[200px] p-5 hover:bg-[#222222] hover:border-brand-yellow/40 hover:shadow-xl hover:shadow-brand-yellow/10">
                    <div class="w-full h-full flex items-center justify-center">
                        <img src="${brand.image}" alt="${brand.name || 'Brand Logo'}" class="max-h-full max-w-full object-contain drop-shadow-md rounded">
                    </div>
                    ${nameHtml}
                </div>
            `;
        } else {
            // Render Fallback Icon
            brandHTML += `
                <div class="flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group bg-[#1a1a1a] border border-gray-800 rounded-2xl w-[160px] h-[160px] md:w-[200px] md:h-[200px] p-5 hover:bg-[#222222] hover:border-brand-yellow/40 hover:shadow-xl hover:shadow-brand-yellow/10">
                    <div class="w-full h-full flex items-center justify-center">
                        <i class="${brand.icon} text-5xl md:text-6xl text-brand-yellow/80 group-hover:text-brand-yellow drop-shadow-md transition-colors duration-300"></i>
                    </div>
                    ${nameHtml}
                </div>
            `;
        }
    });

    // Inject two identical sets for the seamless infinite scrolling effect
    marqueeContainer.innerHTML = brandHTML + brandHTML;
});
