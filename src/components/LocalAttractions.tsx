
import React from 'react';

const LocalAttractions = () => {
  const attractions = [
    {
      name: "Silaka Nature Reserve",
      image: "/lovable-uploads/93841446-e910-4c84-a51f-0661fcaf9e6f.png",
      description: "Silaka Nature Reserve covers a total of 400ha, featuring grassland and magnificent indigenous coastal forests along a dramatic piece of coastline. Trails lead through the evergreen forest and provide the opportunity to view elusive birds such as Knysna Loerie, Cinnamon Dove and Grey Cuckooshrike. The Gxwaleni River flows through the forest and you should look out for Halfcollared Kingfisher and Longtailed Wagtail at fast flowing stretches. Giant forest trees are clad in mosses, lichens and epiphytic orchids, while lilies bloom on the forest floor. Blue Duiker and Bushbuck are indigenous to the forest but are secretive and seldom seen. Facing the sea are grassy hills where the stately Aloe ferox blooms in winter. The Natal Red Rock Rabbit lives among boulders and introduced Blesbuck, Blue Wildebeest and Burchell's Zebra graze the palatable grasses. The shoreline is very rugged, with a small sandy beach at the mouth of the Gxwaleni River, below the rest camp. Thickbilled Weaver and Yellowthroated Longclaw breed in the marsh, from where Cape Clawless Otters may venture onto the beach. A huge rocky outcrop, Bird Island, is just offshore and provides a resting place for Whitebreasted Cormorants and other birds. Interesting rock pools occur on the shore surrounding the island, which may be reached at low tide. At the estuary opposite Bird Island, an attractive pebble beach is surrounded by driftwood and aloes, which grow almost to the sea. Large stands of banana-like Strelitzia nicolai blanket some of the sea-facing slopes, where red-hot pokers and Flame Lilies bloom."
    },
    {
      name: "Magwa Falls",
      image: "/lovable-uploads/2eed7e43-9357-4c3e-aad3-f5fb37d7f98c.png",
      description: "The Magwa Waterfall lies in the middle of the 1 800 hectare Magwa tea plantation, South Africa's last remaining tea estate just outside Lusikisiki, a short 40km drive from PSJ. The Magwa waterfall is pretty impressive. It is one of few waterfalls on the rugged Wild Coast that is accessible – others entail such effort to reach that they're seldom seen by any but the most intrepid travellers. The curtain of water falls 144 metres and drops into a narrow canyon formed by seismic movement - a past sudden movement of the earth's crust along geologic faults, or volcanic activity. Although on a much smaller scale, obviously, the Magwa falls have been said to resemble the Victoria Falls in Zimbabwe."
    },
    {
      name: "Isinuka Sulphur Spring and Mud Pools",
      image: "/lovable-uploads/64625042-e20b-43e5-8ac8-9045f42adefd.png",
      description: "Isinuka, a traditional spa near Port St. Johns in South Africa, is a natural spring and bathing area revered by the AmaMpondo people for its spiritual and healing properties. It's known for its sulphur-rich water, which is believed to cure various ailments and is often used in traditional healing practices. The area is a popular destination for those seeking both recreational bathing and spiritual experiences."
    },
    {
      name: "Dining Options",
      image: "/lovable-uploads/f86d295e-3dd8-40b7-9778-9f48e4ff7494.png",
      description: "Local restaurants just a short drive away"
    }
  ];

  return (
    <section id="local-attractions" className="py-12 bg-coastal-cream">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-coastal-green">
          Local Attractions
        </h2>
        
        <div className="space-y-12">
          {attractions.map((attraction, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="text-2xl font-subheading font-semibold text-coastal-green mb-4">
                  {attraction.name}
                </h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalAttractions;
