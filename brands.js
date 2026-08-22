// brands.js
// ---------------------------------------------------------
// Brand collaborations showcase
// ---------------------------------------------------------

const brands = [
    {
        name: "Fashion Factory",
        image: "fashion-factory.jpg",
        icon: "fas fa-tshirt"
    },
    {
        name: "Decathlon",
        image: "decathlon.jpg",
        icon: "fas fa-running"
    },
    {
        name: "Highlander",
        image: "highlander.jpg",
        icon: "fas fa-mountain"
    },
    {
        name: "Ranka Jewellers",
        image: "ranka.jpg",
        icon: "fas fa-gem"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const marqueeContainer = document.getElementById("marquee-brands-container");
    
    if (!marqueeContainer) return;

    let brandHTML = '';
    
    brands.forEach(brand => {
        brandHTML += `
            <div class="flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-white border border-gray-200/20 rounded-2xl w-[200px] h-[100px] md:w-[240px] md:h-[110px] p-4 shadow-lg hover:shadow-brand-yellow/20 flex-shrink-0">
                <img src="${brand.image}" alt="${brand.name || 'Brand Logo'}" class="max-h-full max-w-full object-contain">
            </div>
        `;
    });

    // Inject repeated sets for seamless infinite scrolling effect
    marqueeContainer.innerHTML = brandHTML + brandHTML + brandHTML + brandHTML;
});

