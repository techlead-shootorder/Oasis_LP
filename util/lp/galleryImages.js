// utils/galleryImages.js
export const galleryImages = {
    Nashik: [
      [
        "/images/lp/gallery/Nashik/01.webp", 
        "/images/lp/gallery/Nashik/02.webp"
      ],
      [
        "/images/lp/gallery/Nashik/03.webp", 
        "/images/lp/gallery/Nashik/04.webp"
      ],
      [
        "/images/lp/gallery/Nashik/05.webp", 
        "/images/lp/gallery/Nashik/06.webp"
      ],
      [
        "/images/lp/gallery/Nashik/07.webp", 
        "/images/lp/gallery/Nashik/08.webp"
      ],
      [
        "/images/lp/gallery/Nashik/09.webp", 
        "/images/lp/gallery/Nashik/10.webp"
      ]
    ],
    Hyderabad: [
      [
        "/images/lp/gallery/Hyderabad/01.webp", 
        "/images/lp/gallery/Hyderabad/02.webp"
      ],
      [
        "/images/lp/gallery/Hyderabad/03.webp", 
        "/images/lp/gallery/Hyderabad/04.webp"
      ],
      [
        "/images/lp/gallery/Hyderabad/05.webp", 
        "/images/lp/gallery/Hyderabad/06.webp"
      ],
      [
        "/images/lp/gallery/Hyderabad/07.webp", 
        "/images/lp/gallery/Hyderabad/08.webp"
      ],
      [
        "/images/lp/gallery/Hyderabad/09.webp", 
        "/images/lp/gallery/Hyderabad/10.webp"
      ],
      [
        "/images/lp/gallery/Hyderabad/11.webp", 
        "/images/lp/gallery/Hyderabad/12.webp"
      ]
    ],
    // Add more cities as needed
    default: [
      ["/images/home/gallery/1.webp", "/images/home/gallery/2.webp"],
      ["/images/home/gallery/3.webp", "/images/home/gallery/4.webp"],
      ["/images/home/gallery/5.webp", "/images/home/gallery/6.webp"],
      ["/images/home/gallery/7.webp", "/images/home/gallery/8.webp"],
      ["/images/home/gallery/9.webp", "/images/home/gallery/10.webp"],
      ["/images/home/gallery/11.webp", "/images/home/gallery/12.webp"]
    ]
  };
  
  // Helper function to get images for a specific center
  export const getGalleryImages = (center) => {
    // Normalize center name (capitalize first letter, rest lowercase)
    const normalizedCenter = center 
      ? center.charAt(0).toUpperCase() + center.slice(1).toLowerCase() 
      : null;
    
    // Return center-specific images or default images
    return galleryImages[normalizedCenter] || galleryImages.default;
  };