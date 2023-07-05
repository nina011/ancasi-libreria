import bcrypt from 'bcryptjs';

interface SeedBook {
    description: string;
    image: string;
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    author: string;
    gender: 
    'drama' 
    |'ficción'
    |'novela'
    |'terror'
    |'autoayuda'
    |'acción'
    |'poesía'
    |'romance'
    |'manga'
    |'leyendas'
    |'cocina'
    |'científico'
    |'educacional'
    |'niños'
    |'física'
    |'informática'
}

interface SeedUser {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'client'
}


interface SeedData {
    books: SeedBook[],
    users: SeedUser[]
}


export const initialData: SeedData = {
    users: [
        {
            name: 'Javiera',
            email: 'javiera@gmail.com',
            password: bcrypt.hashSync('1234567'),
            role: 'admin'
        },
        {
            name: 'Eduardo',
            email: 'eduardo@gmail.com',
            password: bcrypt.hashSync('123456'),
            role: 'client'
        }
    ],
    books: [
        {
            description: "habla de una sociedad en la que se adultera la historia de acuerdo a la conveniencia del partido único gobernante. Las tiranías intentan hacer imposible entender el mundo real y buscan sustituirlo con fantasmas y mentiras.",
            image: '1984.jpg',
            inStock: 7,
            price: 5000,            
            slug: '1984',
            tags: ['sweatshirt'],
            title: "1984",
            gender: 'ficción',
            author: 'George Orwell'
        },
        {
            description: "El libro que todo novato en linux debería leer",
            image: 'aprender-linux.jpg',
            inStock: 5,
            price: 10000,
            slug: "men_quilted_shirt_jacket",
            tags: ['jacket'],
            title: "Aprender Linux, linux para principiantes",
            gender: 'informática',
            author:'Andy Vickler'
        },
        {
            description: "Para poder crecer como persona hay que ser, ante todo, libre interiormente; es decir, pensar, sentir y actuar según los propios valores y principios, asumir que sobre ti solo tú decides y mandas. En la era de los likes, sin embargo, cada vez es más frecuente vivir pendientes de la aprobación ajena y con miedo a mostrarnos tal cual somos."+
                        "Este libro es una guía para que trabajes activamente en el desarrollo de tu libre personalidad, sin sentirte intimidado y respetando los derechos ajenos. Se trata de sacar toda la información basura que te han inculcado desde la infancia para desarrollar el verdadero potencial que posees." +
                        "Si a veces te sientes desesperanzado porque no encuentras tu lugar en esta vida, no te preocupes, con este libro descubrirás que tu lugar en el mundo está en ti. No necesitas que nadie te cuelgue medallas ni que te elogien desaforadamente, sino solo estar bien contigo mismo. Nada más y nada menos.",
            image: 'atrevete-a-ser.jpg',
            inStock: 10,
            price: 7000,
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            tags: ['shirt'],
            title: "Atrévete a ser quien eres (aunque no gustes)",
            gender: 'autoayuda',
            author: 'Walter Riso'
        },

        {
            description: "This practical, tutorial-style book uses the Kali Linux distribution to teach Linux basics with a focus on how hackers would use them. Topics include Linux command line basics, filesystems, networking, BASH basics, package management, logging, and the Linux kernel and drivers.",
            image: 'linux-for-hackers.jpg',
            inStock: 50,
            price: 45,
            slug: "men_turbine_long_sleeve_tee",
            tags: ['shirt'],
            title: "Linux Basics for Hackers",
            gender: 'informática',
            author: 'OccupyTheWeb'
        },
        {
            description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more.",
            image:'command-line.jpg',
            inStock: 50,
            price: 8000,
            slug: "men_turbine_short_sleeve_tee",
            tags: ['shirt'],
            title: "The Linux Command Line: A Complete Introduction",
            gender: 'informática',
            author: 'William E. Shotts, Jr.'
        },
        {
            description: "Crimen y castigo - Detalle de la obra - Enciclopedia de la ..."+
            "Crimen y castigo explora zonas oscuras de la psique humana, y logra conmover al lector porque los temas que aborda (la injusticia social, la necesidad extrema, el problema de decidir entre el bien o el mal, las adicciones que enturbian la mente de los individuos, etc.) no le son ajenos.",
            image:'crimen-y-castigo.jpg',
            inStock: 0,
            price: 35,
            slug: "men_cybertruck_owl_tee",
            tags: ['shirt'],
            title: "Crimen y castigo",
            gender: 'novela',
            author: 'Fiódor Dostoyevski'
        },
        {
            description: "La obra trata la historia de Fausto, doctor en teología, que en su búsqueda del conocimiento decide vender su alma al Diablo para conseguir los favores de uno de sus siervos, el demonio Mefistófeles. Consta de un prólogo, trece escenas y un epílogo.",
            image: 'fausto.jpg',
            inStock: 15,
            price: 8000,
            slug: "men_solar_roof_tee",
            tags: ['shirt'],
            title: "Fausto",
            gender: 'ficción',
            author: 'Johann Wolfgang Von Goethe'
        },
        {
            description: "Hamlet es una tragedia de venganza. El espíritu de su padre le pide al joven príncipe de Dinamarca que vengue el asesinato que su propio hermano perpetró contra él. Sin embargo, en la obra de Shakespeare, no destaca la realización de la venganza, sino que el conflicto interno del héroe tiene prioridad.",
            image: 'hamlet.jpg',
            inStock: 17,
            price: 6000,
            slug: "men_let_the_sun_shine_tee",
            tags: ['shirt'],
            title: "Hamlet",
            gender: 'drama',
            author: 'Shakespeare'
        },
        {
            description: "Situada entre 1805 y 1813, en la Rusia convulsionada por la amenaza napoleónica, el presente libro es una de las cumbres indiscutidas de la literatura universal. ",
            image: 'guerra-y-paz.jpg',
            inStock: 12,
            price: 12000,
            slug: "men_3d_large_wordmark_tee",
            tags: ['shirt'],
            title: "Guerra y Paz",
            gender: 'ficción',
            author: 'Lev Tolstòi'
        },
        {
            description: "La vida de la robotpsicóloga Susan Calvin acompaña los avances de la industria robótica desde sus primeros intentos -los rudimentarios robots áfonos y los autómatas obreros- hasta sus logros más sofisticados: las máquinas que auxilian al hombre en el gobierno planetario.",
            image: 'yo-robot.jpg',
            inStock: 5,
            price: 15000,
            slug: "men_3d_t_logo_tee",
            tags: ['shirt'],
            title: "Yo, Robot",
            gender: 'ficción',
            author: 'Isaac Asimov'
        },
        {
            description: "La metamorfosis es una novela de Franz Kafka, publicada en 1915. Cuenta la historia de la transformación de Gregorio Samsa en un monstruoso insecto, y del drama familiar que se desata a raíz de este acontecimiento.",
            image:'metamorfosis.jpg',
            inStock: 2,
            price: 6500,
            slug: "men_3d_small_wordmark_tee",
            tags: ['shirt'],
            title: "La metamorfosis",
            gender: 'drama',
            author: 'Franz Kafka'
        },
        {
            description: "La adversidad es una situación compleja y estresante que pone a prueba nuestra capacidad de adaptación. El sufrimiento que provoca, si lo sabemos procesar, nos enseña a ser resistentes ante los embates de la vida..",
            image:'mas-fuerte.jpg',
            inStock: 82,
            price: 11000,
            slug: "men_plaid_mode_tee",
            tags: ['shirt'],
            title: "Más fuerte que la adversidad",
            gender: 'autoayuda',
            author: 'Walter Riso'
        },
        {
            description: "La historia del nadsat-adolescente Alex y sus tres drugos-amigos en un mundo de crueldad y destrucción. Alex tiene, según Burgess, los principales atributos humanos; amor a la agresión, amor al lenguaje, amor a la belleza. Pero es joven y no ha entendido aún la verdadera importancia de la libertad, la que disfruta de un modo tan violento. En cierto sentido vive en el Edén, y sólo cuando cae (como en verdad le ocurre, desde una ventana) parece capaz de llegar a transformase en un verdadero ser humano.",
            image: 'naranjamecanica.jpg',
            inStock: 24,
            price: 15000,
            slug: "men_powerwall_tee",
            tags: ['shirt'],
            title: "La Naranja Mecánica",
            gender: 'drama',
            author: 'Anthony Burgess'
        },
        {
            description: "Orgullo y prejuicio narra las aventuras y desventuras amorosas de las hermanas Bennet, centrándose en el personaje de Elizabeth, a través de las cuales la autora nos presenta con comicidad la sociedad de su tiempo y coloca a la mujer en un lugar más notorio que el que le correspondía en su época con la figura de la",
            image:'orgullo-prejuicio.jpg',
            inStock: 5,
            price: 30,
            slug: "men_battery_day_tee",
            tags: ['shirt'],
            title: "Orgullo y prejuicio",
            gender: 'drama',
            author: 'Jane Austen'
        },
        {
            description: "Fue considerada por Aristóteles en su obra Poética como la más perfecta de las tragedias griegas. Edipo rey es un drama de revelación que propone la búsqueda de lo que se esconde tras las apariencias, la indagación en la esencia de lo que uno es y la constante lucha del individuo contra el destino.",
            image: 'edipo-rey.jpg',
            inStock: 5000,
            price: 30,
            slug: "men_cybertruck_bulletproof_tee",
            tags: ['shirt'],
            title: "Edipo Rey",
            gender: 'novela',
            author: 'Sófocles'
        },
        {
            description: "En esta obra, como en ninguna otra, Robert Louis Stevenson (1850-1894) expresa la intención de adentrarse en las zonas más oscuras de la naturaleza humana. En ellas va colocando una serie de elementos contradictorios, diabólicos, desconocidos. Nada es transparente porque en el interior del hombre están instaladas las tinieblas a las que apenas se puede acceder a través de una neblina débilmente iluminada. La identidad misma es un misterio tan oscuro como las noches en las que Jekyll se transforma en Mr, Hyde. Libro publicado en 1886, R. L. Stevenson presenta, como nunca se ha hecho, la dualidad del alma humana escindida entre el bien y el mal.",
            image: 'drjeckyl.jpg',
            inStock: 8000,
            price: 35,
            slug: "men_haha_yes_tee",
            tags: ['shirt'],
            title: "El Dr. Jekyll y Mr. Hyde",
            gender: 'ficción',
            author:'Robert Louis Stevenson'
        },
        {
            description: "La novela, escrita de forma epistolar a modo de diarios y con pequeños saltos en el tiempo narra la desmesurada ambición de poder de Drácula, un hombre solitario, cultivado, aristocrático y terriblemente terrorífico que vive aislado en un castillo decadente y que se traslada a Londres para conseguir sus fines.",
            image:'dracula.jpg',
            inStock: 34,
            price: 4000,
            slug: "men_s3xy_tee",
            tags: ['shirt'],
            title: "Drácula",
            gender: 'terror',
            author: 'Bram Stocker'
        },
        // {
        //     description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
        //     image: '8764813-00-A_0_2000.jpg',
        //     inStock: 15,
        //     price: 40,
        //     slug: "men_3d_wordmark_long_sleeve_tee",
        //     tags: ['shirt'],
        //     title: "Men's 3D Wordmark Long Sleeve Tee",
        //     gender: 'terror'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
        //     image: '8529198-00-A_0_2000.jpg',
        //     inStock: 12,
        //     price: 40,
        //     slug: "men_3d_t_logo_long_sleeve_tee",
        //     tags: ['shirt'],
        //     title: "Men's 3D T Logo Long Sleeve Tee",
        //     gender: 'terror'
        // },
        // {
        //     description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
        //     image: '1740245-00-A_0_2000.jpg',
        //     inStock: 10,
        //     price: 115,
        //     slug: "men_raven_lightweight_hoodie",
        //     tags: ['hoodie'],
        //     title: "Men's Raven Lightweight Hoodie",
        //     gender: 'drama'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
        //     image: '1740051-00-A_0_2000.jpg',
        //     inStock: 10,
        //     price: 130,
        //     slug: "chill_pullover_hoodie",
        //     tags: ['hoodie'],
        //     title: "Chill Pullover Hoodie",
        //     gender: 'drama'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
        //     image: '1741111-00-A_0_2000.jpg',
        //     inStock: 100,
        //     price: 85,
        //     slug: "men_chill_full_zip_hoodie",
        //     tags: ['shirt'],
        //     title: "Men's Chill Full Zip Hoodie",
        //     gender: 'drama'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
        //     image: '1740140-00-A_0_2000.jpg',
        //     inStock: 7,
        //     price: 85,
        //     slug: "men_chill_quarter_zip_pullover_-_gray",
        //     tags: ['shirt'],
        //     title: "Men's Chill Quarter Zip Pullover - Gray",
        //     gender: 'niños'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
        //     image: '1740145-00-A_2_2000.jpg',
        //     inStock: 15,
        //     price: 85,
        //     slug: "men_chill_quarter_zip_pullover_-_white",
        //     tags: ['shirt'],
        //     title: "Men's Chill Quarter Zip Pullover - White",
        //     gender: 'drama'
        // },
        // {
        //     description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
        //     image:'8529107-00-A_0_2000.jpg',
        //     inStock: 15,
        //     price: 70,
        //     slug: "3d_large_wordmark_pullover_hoodie",
        //     tags: ['hoodie'],
        //     title: "3D Large Wordmark Pullover Hoodie",
        //     gender: 'drama'
        // },
        // {
        //     description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
        //     image:'7654420-00-A_0_2000.jpg',
        //     inStock: 13,
        //     price: 60,
        //     slug: "cybertruck_graffiti_hoodie",
        //     tags: ['hoodie'],
        //     title: "Cybertruck Graffiti Hoodie",
        //     gender: 'científico'
        // },
        // {
        //     description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
        //     image: '1657932-00-A_0_2000.jpg',
        //     inStock: 11,
        //     price: 30,
        //     slug: "relaxed_t_logo_hat",
        //     tags: ['hats'],
        //     title: "Relaxed T Logo Hat",
        //     gender: 'terror'
        // },
        // {
        //     description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
        //     image:'1740417-00-A_0_2000.jpg',
        //     inStock: 13,
        //     price: 35,
        //     slug: "thermal_cuffed_beanie",
        //     tags: ['hats'],
        //     title: "Thermal Cuffed Beanie",
        //     gender: 'niños'
        // },
        // {
        //     description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
        //     image:'1740535-00-A_0_2000.jpg',
        //     inStock: 85,
        //     price: 225,
        //     slug: "women_cropped_puffer_jacket",
        //     tags: ['hoodie'],
        //     title: "Women's Cropped Puffer Jacket",
        //     gender: 'informática'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
        //     image:'1740226-00-A_0_2000.jpg',
        //     inStock: 10,
        //     price: 130,
        //     slug: "women_chill_half_zip_cropped_hoodie",
        //     tags: ['hoodie'],
        //     title: "Women's Chill Half Zip Cropped Hoodie",
        //     gender: 'niños'
        // },
        // {
        //     description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
        //     image: '1740260-00-A_0_2000.jpg',
        //     inStock: 9,
        //     price: 110,
        //     slug: "women_raven_slouchy_crew_sweatshirt",
        //     tags: ['hoodie'],
        //     title: "Women's Raven Slouchy Crew Sweatshirt",
        //     gender: 'drama'
        // },
        // {
        //     description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
        //     image:'1740290-00-A_0_2000.jpg',
        //     inStock: 10,
        //     price: 45,
        //     slug: "women_turbine_cropped_long_sleeve_tee",
        //     tags: ['shirt'],
        //     title: "Women's Turbine Cropped Long Sleeve Tee",
        //     gender: 'educacional'
        // },
        // {
        //     description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
        //     image:'1741441-00-A_0_2000.jpg',
        //     inStock: 0,
        //     price: 40,
        //     slug: "women_turbine_cropped_short_sleeve_tee",
        //     tags: ['shirt'],
        //     title: "Women's Turbine Cropped Short Sleeve Tee",
        //     gender: 'educacional'
        // },
//         {
//             description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
//             images: [
//                 '8765090-00-A_0_2000.jpg',
//                 '8765090-00-A_1.jpg',
//             ],
//             inStock: 30,
//             price: 35,
//             sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//             slug: "women_t_logo_short_sleeve_scoop_neck_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women's T Logo Short Sleeve Scoop Neck Tee",
//             gender: 'women'
//         },
//         {
//             description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
//             images: [
//                 '8765100-00-A_0_2000.jpg',
//                 '8765100-00-A_1.jpg',
//             ],
//             inStock: 16,
//             price: 40,
//             sizes: ['XS', 'S', 'L', 'XL', 'XXL'],
//             slug: "women_t_logo_long_sleeve_scoop_neck_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women's T Logo Long Sleeve Scoop Neck Tee",
//             gender: 'women'
//         },
//         {
//             description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
//             images: [
//                 '8765120-00-A_0_2000.jpg',
//                 '8765120-00-A_1.jpg',
//             ],
//             inStock: 18,
//             price: 35,
//             sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//             slug: "women_small_wordmark_short_sleeve_v-neck_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
//             gender: 'women'
//         },
//         {
//             description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
//             images: [
//                 '8765115-00-A_0_2000.jpg',
//                 '8765115-00-A_1.jpg',
//             ],
//             inStock: 5,
//             price: 35,
//             sizes: ['XL', 'XXL'],
//             slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
//             gender: 'women'
//         },
//         {
//             description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
//             images: [
//                 '1549275-00-A_0_2000.jpg',
//                 '1549275-00-A_1.jpg',
//             ],
//             inStock: 16,
//             price: 35,
//             sizes: ['S', 'M'],
//             slug: "women_plaid_mode_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women's Plaid Mode Tee",
//             gender: 'women'
//         },
//         {
//             description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
//             images: [
//                 '9877040-00-A_0_2000.jpg',
//                 '9877040-00-A_1.jpg',
//             ],
//             inStock: 10,
//             price: 130,
//             sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//             slug: "women_powerwall_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women’s Powerwall Tee",
//             gender: 'women'
//         },
//         {
//             description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
//             images: [
//                 '5645680-00-A_0_2000.jpg',
//                 '5645680-00-A_3.jpg',
//             ],
//             inStock: 3,
//             price: 90,
//             sizes: ['M', 'L', 'XL', 'XXL'],
//             slug: "women_corp_jacket",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women's Corp Jacket",
//             gender: 'women'
//         },
//         {
//             description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
//             images: [
//                 '1740270-00-A_0_2000.jpg',
//                 '1740270-00-A_1.jpg',
//             ],
//             inStock: 162,
//             price: 100,
//             sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
//             slug: "women_raven_joggers",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Women's Raven Joggers",
//             gender: 'women'
//         },
//         {
//             description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
//             images: [
//                 '1742694-00-A_1_2000.jpg',
//                 '1742694-00-A_3.jpg',
//             ],
//             inStock: 10,
//             price: 30,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_cybertruck_long_sleeve_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids Cybertruck Long Sleeve Tee",
//             gender: 'kid'
//         },
//         {
//             description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
//             images: [
//                 '8529312-00-A_0_2000.jpg',
//                 '8529312-00-A_1.jpg',
//             ],
//             inStock: 0,
//             price: 25,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_scribble_t_logo_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids Scribble T Logo Tee",
//             gender: 'kid'
//         },
//         {
//             description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
//             images: [
//                 '8529342-00-A_0_2000.jpg',
//                 '8529342-00-A_1.jpg',
//             ],
//             inStock: 10,
//             price: 25,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_cybertruck_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids Cybertruck Tee",
//             gender: 'kid'
//         },
//         {
//             description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
//             images: [
//                 '8529354-00-A_0_2000.jpg',
//                 '8529354-00-A_1.jpg',
//             ],
//             inStock: 10,
//             price: 30,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_racing_stripe_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids Racing Stripe Tee",
//             gender: 'kid'
//         },
//         {
//             description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
//             images: [
//                 '7652465-00-A_0_2000.jpg',
//                 '7652465-00-A_1.jpg',
//             ],
//             inStock: 10,
//             price: 30,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_3d_t_logo_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids 3D T Logo Tee",
//             gender: 'kid'
//         },
//         {
//             description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
//             images: [
//                 '100042307_0_2000.jpg',
//                 '100042307_alt_2000.jpg',
//             ],
//             inStock: 10,
//             price: 30,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_checkered_tee",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids Checkered Tee",
//             gender: 'kid'
//         },
//         {
//             description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
//             images: [
//                 '1473809-00-A_1_2000.jpg',
//                 '1473809-00-A_alt.jpg',
//             ],
//             inStock: 16,
//             price: 25,
//             sizes: ['XS', 'S'],
//             slug: "made_on_earth_by_humans_onesie",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Made on Earth by Humans Onesie",
//             gender: 'kid'
//         },
//         {
//             description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
//             images: [
//                 '8529387-00-A_0_2000.jpg',
//                 '8529387-00-A_1.jpg',
//             ],
//             inStock: 0,
//             price: 30,
//             sizes: ['XS', 'S'],
//             slug: "scribble_t_logo_onesie",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Scribble T Logo Onesie",
//             gender: 'kid'
//         },
//         {
//             description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
//             images: [
//                 '1473834-00-A_2_2000.jpg',
//                 '1473829-00-A_2_2000.jpg',
//             ],
//             inStock: 10,
//             price: 30,
//             sizes: ['XS', 'S'],
//             slug: "zero_emissions_(almost)_onesie",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Zero Emissions (Almost) Onesie",
//             gender: 'kid'
//         },
//         {
//             description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
//             images: [
//                 '1742702-00-A_0_2000.jpg',
//                 '1742702-00-A_1.jpg',
//             ],
//             inStock: 10,
//             price: 65,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_cyberquad_bomber_jacket",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids Cyberquad Bomber Jacket",
//             gender: 'kid'
//         },
//         {
//             description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
//             images: [
//                 '1506211-00-A_0_2000.jpg',
//                 '1506211-00-A_1_2000.jpg',
//             ],
//             inStock: 10,
//             price: 30,
//             sizes: ['XS', 'S', 'M'],
//             slug: "kids_corp_jacket",
//             type: 'shirts',
//             tags: ['shirt'],
//             title: "Kids Corp Jacket",
//             gender: 'kid'
//         },
    ]
}