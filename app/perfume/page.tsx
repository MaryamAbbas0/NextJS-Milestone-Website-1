import Image from 'next/image';  

const Perfumes = () => {
    const perfumesData = [
        { id: 1, name: 'Clive Ckristian', price: 2987.30, description: "Luxury Perfume", image: '/perfume2.jpg' },
        { id: 2, name: 'Fragrance', price: 39.99, description: "Luxury Perfume", image: '/p565665.jpg' },
        { id: 3, name: 'Chanel Paris', price: 11.69, description: "Luxury Perfume", image: '/p1111.jpg' },
        { id: 4, name: 'Black Gold', price: 307.66, description: "Luxury Perfume", image: '/p8888.jpg' },
        { id: 5, name: 'Nautica Voyage', price: 32.10, description: "Luxury Perfume", image: '/p7777.jpg' },
        { id: 6, name: 'Rose Fragrance', price: 13339.20, description: "Luxury Perfume", image: '/p07.webp' },
        { id: 7, name: 'Lalique Lalique Le', price: 63.51, description: "Luxury Perfume", image: '/p9999.webp' },
        { id: 8, name: 'Femme Capital', price: 5.40, description: "Luxury Perfume", image: '/p19.jpg' },
        { id: 9, name: 'Floral Boom', price: 85.00, description: "Luxury Perfume", image: '/p15.jpg' },
        { id: 10, name: 'Blush Me Up', price: 11.51, description: "Luxury Perfume", image: '/p14.webp' },
        { id: 11, name: 'Yves Saint Laurent Libre Eau De', price: 198.81, description: "Luxury Perfume", image: '/p12.jpg' },
        { id: 12, name: 'GORGEOUS', price: 11.69, description: "Luxury Perfume", image: '/p11.webp' },
        { id: 13, name: 'Rivaj Cosmopolitan', price: 12.95, description: "Luxury Perfume", image: '/p8.webp' },
        { id: 14, name: 'Club De Nuit', price: 32.39, description: "Luxury Perfume", image: '/p45.webp' },
        { id: 15, name: 'Passion Charming', price: 7.90, description: "Luxury Perfume", image: '/p56.webp' },
        { id: 16, name: 'Innocens', price: 23.35, description: "Luxury Perfume", image: '/p5.webp' },
        { id: 17, name: 'Coco Mademoiselle', price: 266.28, description: "Luxury Perfume", image: '/p67.webp' },
        { id: 18, name: 'Allure', price: 10.76, description: "Luxury Perfume", image: '/p18.webp' },
    ];

    return (
        <div>
            <div className='perfumes'>
                {perfumesData.map((perfume) => (
                    <div key={perfume.id} className='perfume-card'>
                        {/* Use the Image component here */}
                        <Image 
                            src={perfume.image} 
                            alt={perfume.name} 
                            width={300} // Add width to Image component
                            height={400} // Add height to Image component
                        />
                        <h3>{perfume.name}</h3>
                        <p>{perfume.description}</p>
                        <div className='price'>${perfume.price}</div>
                        <button>Buy Now</button>
                        <br />
                        <button>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Perfumes;
