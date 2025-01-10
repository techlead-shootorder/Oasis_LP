const nearByAreas = [
    {
      id: "1",
      center_name: "hyderabad",
      center_name_heading: "Hyderabad", 
      near_by_areas: ['Banjara Hills', 'Jubilee Hills', 'Somajiguda', 'Punjagutta', 'Yousufguda', 'Gachibowli', 'Manikonda', 'Kondapur', 'Nanakramguda', 'Tolichowki', 'Shaikpet', 'Hakimpet', 'Manikonda', 'Miyapur', 'Madhapur', 'Hafeezpet', 'Chanda Nagar', 'Dilshuk Nagar', 'Kothapet', 'Chaitanyapuri', 'Malakpet', 'Moosarambagh', 'Kompally', 'Boduppal', 'Bachupally', 'Qutubullapur', 'Secunderabad', 'Parade Grounds', 'West Marredpally', 'East Marredpally', 'Uppal', 'Habsiguda', 'Ramanthapur', 'Nagaram']
    },
    {
      id: "2",
      center_name: "banjara-hills",
      center_name_heading: "Banjara Hills",
      near_by_areas: ['Jubilee Hills', 'Somajiguda', 'Punjagutta', 'Yousufguda']
    },
    {
      id: "3",
      center_name: "gachibowli",
      center_name_heading: "Gachibowli",
      near_by_areas: ['Manikonda', 'Kondapur', 'Nanakramguda']
    },
    {
      id: "4",
      center_name: "dilshuknagar",
      center_name_heading: "Dilshuknagar",
      near_by_areas: ['Kothapet', 'Chaitanyapuri', 'Malakpet', 'Moosarambagh']
    },
    {
      id: "5",
      center_name: "secunderabad",
      center_name_heading: "Secunderabad",
      near_by_areas: ['Parade Grounds', 'West Marredpally', 'East Marredpally']
    },
    {
      id: "6",
      center_name: "miyapur",
      center_name_heading: "Miyapur",
      near_by_areas: ['Madhapur', 'Hafeezpet', 'Chanda Nagar']
    },
    {
      id: "7",
      center_name: "kompally",
      center_name_heading: "Kompally",
      near_by_areas: ['Boduppal', 'Bachupally', 'Qutubullapur']
    },
    {
      id: "8",
      center_name: "uppal",
      center_name_heading: "Uppal",
      near_by_areas: ['Habsiguda', 'Ramanthapur', 'Nagaram']
    },
    {
      id: "10",
      center_name: "hanamkonda",
      center_name_heading: "Hanamkonda",
      near_by_areas: ['Warangal', 'Kakatiya University', 'Subedari']
    },
    {
      id: "11",
      center_name: "karimnagar",
      center_name_heading: "Karimnagar",
      near_by_areas: ['Shantinagar', 'Mukarampura', 'Subash Nagar']
    },
    {
      id: "12",
      center_name: "vijayawada",
      center_name_heading: "Vijayawada",
      near_by_areas: ['Governorpet', 'Benz Circle', 'Gandhinagar']
    },
    {
      id: "13",
      center_name: "visakhapatnam",
      center_name_heading: "Visakhapatnam",
      near_by_areas: ['Seethammadara', 'Marripalem', 'Gajuwaka']
    },
    {
      id: "14",
      center_name: "guntur",
      center_name_heading: "Guntur",
      near_by_areas: ['Governorpet', 'Brodipet', 'Vidya Nagar']
    },
    {
      id: "15",
      center_name: "ongole",
      center_name_heading: "Ongole",
      near_by_areas: ['Santhapet', 'Mangamoor Road', 'Kurnool Road']
    },
    {
      id: "16",
      center_name: "tirupati",
      center_name_heading: "Tirupati",
      near_by_areas: ['Sri Krishna Nagar', 'T.P. Area', 'Reddy & Reddy Colony']
    },
    {
      id: "17",
      center_name: "kurnool",
      center_name_heading: "Kurnool",
      near_by_areas: ['Nandyal Road', 'SBI Colony', 'Gandhinagar']
    },
    {
      id: "18",
      center_name: "bengaluru",
      center_name_heading: "Bengaluru",
      near_by_areas: ['Koramangala', 'BTM Layout', 'JP Nagar']
    },
    {
      id: "19",
      center_name: "hsr",
      center_name_heading: "HSR Layout",
      near_by_areas: ['Koramangala', 'BTM Layout', 'JP Nagar']
    },
    {
      id: "20",
      center_name: "banashankari",
      center_name_heading: "Banashankari",
      near_by_areas: ['Jayanagar', 'Kumaraswamy Layout', 'Padmanabhanagar']
    },
    {
      id: "21",
      center_name: "hebbal",
      center_name_heading: "Hebbal",
      near_by_areas: ['RT Nagar', 'Ganganagar', 'Jalahalli']
    },
    {
      id: "22",
      center_name: "belagavi",
      center_name_heading: "Belagavi",
      near_by_areas: ['Khanapur Road', 'Mahantesh Nagar', 'Goaves']
    },
    {
      id: "23",
      center_name: "chennai",
      center_name_heading: "Chennai",
      near_by_areas: ['Thirumangalam', 'Kolathur', 'Ambattur']
    },
    {
      id: "24",
      center_name: "pune",
      center_name_heading: "Pune",
      near_by_areas: ['Wakad', 'Viman Nagar', 'Somnath Nagar', 'Raghavendra Nagar', 'Kharadi', 'Chandan Nagar', 'Mundhwa', 'Kalyani Nagar']
    },
    {
      id: "25",
      center_name: "wakad",
      center_name_heading: "Wakad",
      near_by_areas: ['Viman Nagar', 'Somnath Nagar', 'Raghavendra Nagar']
    },
    {
      id: "26",
      center_name: "kharadi",
      center_name_heading: "Kharadi",
      near_by_areas: ['Chandan Nagar', 'Mundhwa', 'Kalyani Nagar']
    },
    {
      id: "27",
      center_name: "nashik",
      center_name_heading: "Nashik",
      near_by_areas: ['Mahatma Nagar', 'Shalimar', 'Panchavati']
    },
    {
      id: "28",
      center_name: "raipur",
      center_name_heading: "Raipur",
      near_by_areas: ['Sundar Nagar', 'Shankar Nagar', 'Gudhiyari']
    },
    {
      id: "29",
      center_name: "vadodara",
      center_name_heading: "Vadodara",
      near_by_areas: ['Alkapuri', 'Vadodara Central', 'Sayajiguni', 'Akota']
    },
    {
      id: "30",
      center_name: "ranchi",
      center_name_heading: "Ranchi",
      near_by_areas: ['Ashok Nagar', 'Bariatu', 'Doranda', 'Kadru']
    },
    {
      id: "31",
      center_name: "bhubaneswar",
      center_name_heading: "Bhubaneswar",
      near_by_areas: ['Jaydev Vihar', 'Laxmisagar', 'Bapuji Nagar']
    },
    {
      id: "32",
      center_name: "suryaraopeta",
      center_name_heading: "Suryaraopeta",
      near_by_areas: ['Labbipet', 'Mogalrajapuram', 'Patamata']
    },
    {
      id: "33",
      center_name: "tolichowki",
      center_name_heading: "Tolichowki",
      near_by_areas: ['Shaikpet', 'Hakimpet', 'Manikonda']
    },
    {
      id: "34",
      center_name: "india",
      center_name_heading: "India",
      near_by_areas: []
    },
    {
      id: "35",
      center_name: "karnataka",
      center_name_heading: "Karnataka",
      near_by_areas: []
    },
    {
      id: "36",
      center_name: "andhrapradesh",
      center_name_heading: "Andhrapradesh",
      near_by_areas: []
    },
    {
      id: "37",
      center_name: "kakinada",
      center_name_heading: "Kakinada",
      near_by_areas: ['Bhanugudi Junction', 'Sarpavaram Junction', 'Nagamalli thota Junction']
    },
    {
      id: "38",
      center_name: "madhurawada",
      center_name_heading: "Madhurawada",
      near_by_areas: ['P.M. Palem', 'Rushikonda', 'Malkapuram']
    },
    {
      id: "39",
      center_name: "meta",
      center_name_heading: "India",
      near_by_areas: []
    },
    {
      id: "40",
      center_name: "google",
      center_name_heading: "India",
      near_by_areas: []
    }
];

export default nearByAreas;