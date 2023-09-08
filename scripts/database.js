const database = {
venues:[
    {
      id: 1,
      name: "The Grand Ballroom",
      address: "123 Main St",
      squareFootage: 5000,
      maxCapacity: 200
    },
    {
      id: 2,
      name: "Harmony Hall",
      address: "456 Elm St",
      squareFootage: 6000,
      maxCapacity: 250
    },
    {
      id: 3,
      name: "Majestic Gardens",
      address: "789 Oak St",
      squareFootage: 7000,
      maxCapacity: 300
    },
    {
      id: 4,
      name: "Crystal Palace",
      address: "101 Pine St",
      squareFootage: 5500,
      maxCapacity: 220
    },
    {
      id: 5,
      name: "The Starlight Pavilion",
      address: "222 Maple St",
      squareFootage: 8000,
      maxCapacity: 350
    },
    {
      id: 6,
      name: "Golden Gate Plaza",
      address: "333 Cedar St",
      squareFootage: 4500,
      maxCapacity: 180
    },
    {
      id: 7,
      name: "Elegant Oasis",
      address: "444 Birch St",
      squareFootage: 7200,
      maxCapacity: 280
    },
    {
      id: 8,
      name: "Enchanted Manor",
      address: "555 Walnut St",
      squareFootage: 6700,
      maxCapacity: 270
    },
    {
      id: 9,
      name: "Sapphire Springs",
      address: "666 Redwood St",
      squareFootage: 5900,
      maxCapacity: 240
    },
    {
      id: 10,
      name: "Prestige Palace",
      address: "777 Spruce St",
      squareFootage: 5200,
      maxCapacity: 210
    }
  ],
  
  bands:[
    {
      id:1,
      name: "The Rockin' Rebels",
      memberAmount: 4,
      genre: "Rock 'n' Roll",
      yearFormed: 1957
    },
    {
      id:2,
      name: "Funky Fusion",
      memberAmount: 6,
      genre: "Funk",
      yearFormed: 1975
    },
    {
      id:3,
      name: "Electric Echo",
      memberAmount: 5,
      genre: "Alternative Rock",
      yearFormed: 1992
    },
    {
      id:4,
      name: "Groove Groove",
      memberAmount: 7,
      genre: "R&B",
      yearFormed: 1983
    },
    {
      id:5,
      name: "Jazz Junction",
      memberAmount: 3,
      genre: "Jazz",
      yearFormed: 1960
    },
    {
      id:6,
      name: "Metal Mayhem",
      memberAmount: 4,
      genre: "Heavy Metal",
      yearFormed: 1980
    },
    {
      id:7,
      name: "Country Crew",
      memberAmount: 5,
      genre: "Country",
      yearFormed: 1998
    },
    {
      id:8,
      name: "Pop Pioneers",
      memberAmount: 3,
      genre: "Pop",
      yearFormed: 2005
    },
    {
      id:9,
      name: "Hip-Hop Heroes",
      memberAmount: 4,
      genre: "Hip-Hop",
      yearFormed: 1990
    },
    {
      id:10,
      name: "Indie Innovators",
      memberAmount: 2,
      genre: "Indie",
      yearFormed: 2008
    }
  ],

  bookings: [
    {
        id: 1,
        bandsId:1,
        venuesId: 1,
        bookingDate: "2023-09-10"
    },
    {
        id: 2,
        bandsId: 2,
        venuesId: 2,
        bookingDate: "2023-09-15"
    },
    {
        id: 3,
        bandsId: 3,
        venuesId: 3,
        bookingDate: "2023-09-20"
    },
    {
        id: 4,
        bandsId: 4,
        venuesId: 4,
        bookingDate: "2023-09-25"
    },
    {
        id: 5,
        bandsId: 5,
        venuesId: 5,
        bookingDate: "2023-10-05"
    },
    {
        id: 6,
        bandsId: 6,
        venuesId: 6,
        bookingDate: "2023-10-10"
    },
    {
        id: 7,
        bandsId: 7,
        venuesId:7,
        bookingDate: "2023-10-15"
    },
    {
        id: 8,
        bandsId: 8,
        venuesId: 8,
        bookingDate: "2023-10-20"
    },
    {
        id: 9,
        bandsId: 9,
        venuesId:9,
        bookingDate: "2023-10-25"
    },
    {
        id: 10,
        bandsId: 10,
        venuesId: 10,
        bookingDate: "2023-11-05"
    }
]

  
}

export const getVenues = () => {
return database.venues.map(venue=>({...venue}))

}

export const getBands = () => {
    return database.bands.map(band=>({...band}))
    
}

 export const getBookings = () => {
        return database.bookings.map(booking=>({...booking}))
        
 }

    