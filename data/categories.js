const categories = [
  {
    id: 1,
    title: "Streetwear",
    items: [
      {
        id: 2,
        title: "Jackets",
        picture: "data/images/categories/streetwear-jackets.jpg",
        items: [
          { id: 3, title: "Winter Coats" },
          { id: 4, title: "Down Jackets" },
          { id: 5, title: "Parka Coats" },
          { id: 6, title: "Lightweight Jackets" },
          { id: 7, title: "Functional Jackets" },
          { id: 8, title: "Waterproof Jackets" },
          { id: 9, title: "Fleece Jackets" },
          { id: 10, title: "Soft Shell Jackets" },
          { id: 11, title: "Windbreaker" },
          { id: 12, title: "Denim Jackets" },
          { id: 13, title: "Tracksuit Tops" },
          { id: 14, title: "Vests" },
          { id: 15, title: "Leather Jackets" }
        ]
      },
      {
        title: "Jumpers",
        picture: "data/images/categories/streetwear-jumpers.jpg",
        items: [
          { title: "Hoodies" },
          { title: "Zip Up Hoodies" },
          { title: "Sweatshirts" },
          { title: "Fleece Jumpers" },
          { title: "Fleece Jackets" },
          { title: "Tracksuit Tops" }
        ]
      },
      {
        title: "Trousers",
        picture: "data/images/categories/streetwear-trousers.jpg",
        items: [
          { title: "Chinos" },
          { title: "Cargo Trousers" },
          { title: "Sweatpants" },
          { title: "Leggings" },
          { title: "Slim Fit Pants" },
          { title: "Yoga Leggings" },
          { title: "Jumpsuits" },
          { title: "Cuffed Trousers" },
          { title: "Harem Trousers" },
          { title: "7/8 Trousers" },
          { title: "Running Pants" }
        ]
      },
      {
        title: "Jeans",
        picture: "data/images/categories/streetwear-jeans.jpg",
        items: [
          { title: "Skinny Jeans" },
          { title: "Destroyed Jeans" },
          { title: "Boyfriend Jeans" },
          { title: "Jogger Jeans" },
          { title: "Slim Fit Jeans" },
          { title: "Tapered Jeans" },
          { title: "Bootcut Jeans" },
          { title: "Loose Fit Jeans" },
          { title: "Straight Leg Jeans" },
          { title: "Cuffed Jeans" },
          { title: "Jumpsuits" }
        ]
      },
      {
        title: "Shirts",
        picture: "data/images/categories/streetwear-shirts.jpg",
        items: [
          { title: "Flannel Shirts" },
          { title: "Slim Fit Shirts" },
          { title: "Denim Shirt" },
          { title: "Regular Fit Shirts" }
        ]
      },
      {
        title: "Knitwear",
        picture: "data/images/categories/streetwear-knitwear.jpg",
        items: [{ title: "Knitted Jumpers" }, { title: "Cardigans" }]
      },
      {
        title: "Dresses",
        picture: "data/images/categories/streetwear-dresses.jpg",
        items: [
          { title: "Long Sleeve Dresses" },
          { title: "Maxi Dresses" },
          { title: "Jumpsuits" },
          { title: "Bandeau Dresses" },
          { title: "Mini Dresses" },
          { title: "Summer Dresses" }
        ]
      },
      {
        title: "Skirts",
        picture: "data/images/categories/streetwear-skirts.jpg",
        items: [{ title: "Mini Skirts" }, { title: "Maxi Skirts" }, { title: "Denim Skirts" }, { title: "Midi Skirts" }]
      },
      {
        title: "T-Shirts",
        picture: "data/images/categories/streetwear-t-shirts.jpg",
        items: [
          { title: "T-Shirts" },
          { title: "Long Sleeve Tops" },
          { title: "Tank Tops" },
          { title: "Polo Shirts" },
          { title: "Bandeau Tops" },
          { title: "Thermal Tops" },
          { title: "Spaghetti Strap Tops" }
        ]
      },
      {
        title: "Shorts",
        picture: "data/images/categories/streetwear-shorts.jpg",
        items: [
          { title: "Hot Pants" },
          { title: "Denim Shorts" },
          { title: "Cargo Shorts" },
          { title: "Chino Shorts" },
          { title: "Sports Shorts" }
        ]
      },
      {
        title: "Underwear",
        picture: "data/images/categories/streetwear-underwear.jpg",
        items: [{ title: "Boxer Shorts" }, { title: "Sports Bra" }, { title: "Knickers" }, { title: "Undershirts" }]
      },
      {
        title: "Blouse-Tunics",
        picture: "data/images/categories/streetwear-blouse-tunics.jpg",
        items: [{ title: "Blouse" }, { title: "Tunics" }]
      }
    ]
  },
  {
    title: "Shoes",
    items: [
      {
        title: "Trainers",
        picture: "data/images/categories/shoes-trainers.jpg",
        items: [{ title: "Low-top Trainers" }, { title: "High-top Trainers" }, { title: "Slip-ons" }]
      },
      {
        title: "Winter Shoes",
        picture: "data/images/categories/shoes-winter-shoes.jpg",
        items: [{ title: "Winter Boots" }]
      },
      {
        title: "Boots",
        picture: "data/images/categories/shoes-boots.jpg",
        items: [{ title: "Fashion Boots" }, { title: "Ankle Boots" }]
      },
      {
        title: "Skate Shoes",
        picture: "data/images/categories/shoes-skate-shoes.jpg",
        items: [{ title: "Skate Shoes Low" }, { title: "Skate Shoes High" }]
      },
      {
        title: "Ballet Pumps",
        picture: "data/images/categories/shoes-ballet-pumps.jpg",
        items: []
      },
      {
        title: "Sandals",
        picture: "data/images/categories/shoes-sandals.jpg",
        items: [{ title: "Toe Separator" }, { title: "Sandals" }]
      },
      {
        title: "Shoes Accessories",
        picture: "data/images/categories/shoes-shoes-accessories.jpg",
        items: [{ title: "Shoelaces" }, { title: "Shoe Care" }, { title: "Insoles" }]
      }
    ]
  },
  {
    title: "Accessories",
    items: [
      {
        title: "Backpacks",
        picture: "data/images/categories/accessories-backpacks.jpg",
        items: [
          { title: "Canvas Backpacks" },
          { title: "Everyday Backpacks" },
          { title: "Bike Backpacks" },
          { title: "Camera Backpack" },
          { title: "Laptop Backpack" },
          { title: "Skateboard Backpack" },
          { title: "Vintage Backpacks" },
          { title: "Snowboard Backpack" }
        ]
      },
      {
        title: "Caps",
        picture: "data/images/categories/accessories-caps.jpg",
        items: [
          { title: "Snapback Caps" },
          { title: "Trucker Caps" },
          { title: "Flexfit Caps" },
          { title: "Fitted Caps" },
          { title: "5 Panel Cap" }
        ]
      },
      {
        title: "Beanies",
        picture: "data/images/categories/accessories-beanies.jpg",
        items: [
          { title: "Beanies" },
          { title: "Knitted Hats" },
          { title: "Bobble Hats" },
          { title: "Slouchy Beanies" },
          { title: "Headbands" },
          { title: "Flat Caps" },
          { title: "Peaked Caps" }
        ]
      },
      {
        title: "Scarves",
        picture: "data/images/categories/accessories-scarves.jpg",
        items: [
          { title: "Neck Warmers" },
          { title: "Knitted Scarves" },
          { title: "Infinity Scarves" },
          { title: "Shawls" },
          { title: "Bandanas" }
        ]
      },
      {
        title: "Gloves",
        picture: "data/images/categories/accessories-gloves.jpg",
        items: [{ title: "Fingerless Gloves" }, { title: "Knitted Gloves" }, { title: "Mittens" }]
      },
      {
        title: "Socks",
        picture: "data/images/categories/accessories-socks.jpg",
        items: [{ title: "Long Socks" }, { title: "Ankle Socks" }, { title: "Sports Socks" }]
      },
      {
        title: "Belts",
        picture: "data/images/categories/accessories-belts.jpg",
        items: [
          { title: "Fabric Belts" },
          { title: "Leather Belts" },
          { title: "Faux Leather Belts" },
          { title: "Studded Belts" }
        ]
      },
      {
        title: "Bags",
        picture: "data/images/categories/accessories-bags.jpg",
        items: [
          { title: "Purses" },
          { title: "Sports Bags" },
          { title: "Shoulder Bags" },
          { title: "Bum Bag" },
          { title: "Gym Sacks" },
          { title: "Laptop Bags" },
          { title: "Beach Bags" },
          { title: "Other Bags" }
        ]
      },
      {
        title: "Wallets",
        picture: "data/images/categories/accessories-wallets.jpg",
        items: [{ title: "Leather Wallets" }, { title: "Faux Leather Wallets" }, { title: "Cloth Wallet" }]
      },
      {
        title: "Sunglasses",
        picture: "data/images/categories/accessories-sunglasses.jpg",
        items: [{ title: "Fashion Glasses" }, { title: "Sports Glasses" }]
      },
      {
        title: "Watches",
        picture: "data/images/categories/accessories-watches.jpg",
        items: [{ title: "Analog Watches" }, { title: "Digital Watches" }, { title: "Chronographs" }]
      }
    ]
  },
  {
    title: "Water Sports",
    items: [
      {
        title: "Swimwear",
        picture: "data/images/categories/water-sports-swimwear.jpg",
        items: [
          { title: "Bikinis" },
          { title: "Swim Shorts" },
          { title: "Bandeau Bikinis" },
          { title: "Triangle Bikini" },
          { title: "Bikini Bottoms" },
          { title: "Board Shorts" },
          { title: "Bikini Tops" },
          { title: "Swimsuits" },
          { title: "Halter Neck Bikinis" }
        ]
      },
      {
        title: "Wetsuits",
        picture: "data/images/categories/water-sports-wetsuits.jpg",
        items: [
          { title: "Wetsuits" },
          { title: "Wetsuit Boots" },
          { title: "Wetsuit Gloves" },
          { title: "Wetsuit Tops" },
          { title: "Wetsuit Hoods" },
          { title: "Wetsuit Pants" }
        ]
      },
      {
        title: "Wakeboarding",
        picture: "data/images/categories/water-sports-wakeboarding.jpg",
        items: [
          { title: "Wakeboards" },
          { title: "Wakeboard Bindings" },
          { title: "Wakeboard Helmets" },
          { title: "Wakeboard Impact Vests" },
          { title: "Wakeboard Accessories" }
        ]
      },
      {
        title: "Surfboards",
        picture: "data/images/categories/water-sports-surfboard.jpg",
        items: [
          { title: "Shortboard Surf" },
          { title: "River Surfboard" },
          { title: "Longboard Surf" },
          { title: "Fish Surfboard" }
        ]
      },
      {
        title: "Stand Up Paddling",
        picture: "data/images/categories/water-sports-stand-up-paddling.jpg",
        items: [{ title: "SUP Boards" }, { title: "SUP Paddles" }, { title: "SUP Accessories" }]
      },
      {
        title: "Rash Vests",
        picture: "data/images/categories/water-sports-rash-vests.jpg",
        items: []
      },
      {
        title: "Surfing Accessories",
        picture: "data/images/categories/water-sports-surfing-accessories.jpg",
        items: [
          { title: "Surfboard Bag" },
          { title: "Surfboard Leashes" },
          { title: "Surfboard Tail Pad" },
          { title: "Surfboard Fins" },
          { title: "Surf Wax" },
          { title: "Surfing Others" }
        ]
      }
    ]
  },
  {
    title: "Skate",
    items: [
      {
        title: "Skateboards",
        picture: "data/images/categories/skate-skateboards.jpg",
        items: [
          { title: "Complete Boards" },
          { title: "Skateboard Decks" },
          { title: "Skateboard Wheels" },
          { title: "Skateboard Grip Tape" },
          { title: "Skateboard Bearings" },
          { title: "Skateboard Trucks" },
          { title: "Skateboard Set Up" },
          { title: "Skateboard Bushings" },
          { title: "Skateboard Others" }
        ]
      },
      {
        title: "Longboards",
        picture: "data/images/categories/skate-longboards.jpg",
        items: [
          { title: "Longboard Complete" },
          { title: "Longboard Trucks" },
          { title: "Longboard Wheels" },
          { title: "Longboard Accessories" }
        ]
      },
      {
        title: "Cruiser Skateboards",
        picture: "data/images/categories/skate-cruiser-skateboards.jpg",
        items: [
          { title: "Complete Cruisers" },
          { title: "Cruiser Decks" },
          { title: "Cruiser Skateboard Accessories" },
          { title: "Cruiser Wheels" }
        ]
      },
      {
        title: "Skate Protector",
        picture: "data/images/categories/skate-skate-protector.jpg",
        items: [{ title: "Skate Gloves" }, { title: "Skate Helmets" }, { title: "Skate Protector Others" }]
      }
    ]
  },
  {
    title: "Snowboard",
    items: [
      {
        title: "Snowboards",
        picture: "data/images/categories/snowboard-shop-snowboards.jpg",
        items: [
          { title: "Freeride Snowboards" },
          { title: "Freestyle Snowboards" },
          { title: "All Mountain Snowboards" },
          { title: "Splitboards" }
        ]
      },
      {
        title: "Snowboard Clothing",
        picture: "data/images/categories/snowboard-shop-snowboard-clothing.jpg",
        items: [
          { title: "Snowboard Jackets" },
          { title: "Snowboard Pants" },
          { title: "Snowboard Hats" },
          { title: "Snowboard Socks" },
          { title: "Snowboard Gloves" },
          { title: "Snowboard Neckwarmer" },
          { title: "Snowboard Thermal Underwear" }
        ]
      },
      {
        title: "Snowboard Bindings",
        picture: "data/images/categories/snowboard-shop-snowboard-bindings.jpg",
        items: [
          { title: "Soft Bindings" },
          { title: "Splitboard Bindings" },
          { title: "Snowboard Bindings Accessories" }
        ]
      },
      {
        title: "Snowboard Boots",
        picture: "data/images/categories/snowboard-shop-snowboard-boots.jpg",
        items: [
          { title: "Freestyle Snowboard Boots" },
          { title: "Freeride Snowboard Boots" },
          { title: "All Mountain Snowboard Boots" }
        ]
      },
      {
        title: "Snowboard Helmets",
        picture: "data/images/categories/snowboard-shop-snowboard-helmets.jpg",
        items: [{ title: "Snowboard Helmets" }, { title: "Snowboard Helmet Accessories" }]
      },
      {
        title: "Snowboard Goggles",
        picture: "data/images/categories/snowboard-shop-snowboard-goggles.jpg",
        items: [{ title: "Snowboard Goggles" }, { title: "Snowboard Goggles Spare Lense" }]
      },
      {
        title: "Snowboard Backpacks",
        picture: "data/images/categories/snowboard-shop-snowboard-backpacks.jpg",
        items: [{ title: "Avalanche Backpacks" }, { title: "Protector Backpacks" }]
      },
      {
        title: "Snowboard Protectors",
        picture: "data/images/categories/snowboard-shop-snowboard-protectors.jpg",
        items: []
      },
      {
        title: "Snowboard Bags",
        picture: "data/images/categories/snowboard-shop-snowboard-bags.jpg",
        items: []
      },
      {
        title: "Snowboard Boot Bags",
        picture: "data/images/categories/snowboard-shop-snowboard-boot-bags.jpg",
        items: []
      },
      {
        title: "Snowboarding Safety",
        picture: "data/images/categories/snowboard-shop-snowboarding-safety.jpg",
        items: [
          { title: "Avalanche Transceiver" },
          { title: "Avalanche Shovel" },
          { title: "Avalanche Probe" },
          { title: "Safety Accessories" },
          { title: "Tuning" }
        ]
      },
      {
        title: "Snowboarding Accessories",
        picture: "data/images/categories/snowboard-shop-snowboarding-accessories.jpg",
        items: [{ title: "Snowboard Crampons" }, { title: "Splitboard Skins" }, { title: "Snowboard Tuning" }]
      }
    ]
  },
  {
    title: "Ski",
    items: [
      {
        title: "Ski Clothing",
        picture: "data/images/categories/ski-shop-ski-clothing.jpg",
        items: [
          { title: "Ski Jackets" },
          { title: "Ski Pants" },
          { title: "Ski Gloves" },
          { title: "Ski Hats" },
          { title: "Ski Neckwarmer" },
          { title: "Ski Socks" },
          { title: "Ski Touring Clothing" },
          { title: "Thermal Underwear" }
        ]
      },
      {
        title: "Ski Goggles",
        picture: "data/images/categories/ski-shop-ski-goggles.jpg",
        items: [{ title: "Ski Goggles" }, { title: "Spare Lenses" }]
      },
      {
        title: "Ski Helmets",
        picture: "data/images/categories/ski-shop-ski-helmets.jpg",
        items: []
      },
      {
        title: "Ski Poles",
        picture: "data/images/categories/ski-shop-ski-poles.jpg",
        items: [{ title: "Ski Poles" }, { title: "Ski Touring Poles" }]
      },
      {
        title: "Ski Boots",
        picture: "data/images/categories/ski-shop-ski-boots.jpg",
        items: [{ title: "Freeride Ski Boots" }, { title: "Freestyle Ski Boots" }]
      },
      {
        title: "Ski Bindings",
        picture: "data/images/categories/ski-shop-ski-bindings.jpg",
        items: [{ title: "Freeride Ski Bindings" }, { title: "Touring Bindings" }]
      },
      {
        title: "Ski Backpacks",
        picture: "data/images/categories/ski-shop-ski-backpacks.jpg",
        items: [{ title: "Protector Backpacks" }, { title: "Avalanche Backpacks" }]
      },
      {
        title: "Ski Protector",
        picture: "data/images/categories/ski-shop-ski-protector.jpg",
        items: []
      },
      {
        title: "Ski Bootbags",
        picture: "data/images/categories/ski-shop-ski-bootbags.jpg",
        items: []
      },
      {
        title: "Ski Safety",
        picture: "data/images/categories/ski-shop-ski-safety.jpg",
        items: [
          { title: "Avalanche Transceiver" },
          { title: "Avalanche Shovel" },
          { title: "Avalanche Probe" },
          { title: "Safety Accessories" }
        ]
      },
      {
        title: "Ski Accessories",
        picture: "data/images/categories/ski-shop-ski-accessories.jpg",
        items: [{ title: "Ski Skins" }, { title: "Ski Tuning" }, { title: "Ski Tuning" }]
      }
    ]
  },
  {
    title: "Outdoor",
    items: [
      {
        title: "Outdoor Clothing",
        picture: "data/images/categories/outdoor-outdoor-clothing.jpg",
        items: [
          { title: "Outdoor Jackets" },
          { title: "Outdoor Pants" },
          { title: "Outdoor Shirts" },
          { title: "Outdoor Jumpers" },
          { title: "Thermal Underwear" },
          { title: "Fleece Jackets" },
          { title: "Outdoor Socks" },
          { title: "Headwear" }
        ]
      },
      {
        title: "Outdoorshoes",
        picture: "data/images/categories/outdoor-outdoorshoes.jpg",
        items: [{ title: "Trekking Shoes" }, { title: "Slippers" }, { title: "Hiking Shoes" }]
      },
      {
        title: "Outdoor Equipment",
        picture: "data/images/categories/outdoor-outdoor-equipment.jpg",
        items: [
          { title: "Backpacks" },
          { title: "Action Cameras" },
          { title: "Bags" },
          { title: "Belts" },
          { title: "Gloves" },
          { title: "Drinking Bottles" },
          { title: "Other Equipment" }
        ]
      }
    ]
  }
];

export default categories;
