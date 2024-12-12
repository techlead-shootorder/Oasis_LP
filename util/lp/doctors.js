const doctors = [
    {
      "id": "1",
      "name": "Dr. Durga Rao Gedela",
      "designation": "Medical Director",
      "experience": "30 Yrs",
      "image": "Dr. Durga G. Rao_.jpg",
      "master_id": "1"
    },
    {
      "id": "2",
      "name": "Dr. Aaishwari Durge",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Aaishwari Durge - BH.jpg",
      "master_id": "1"
    },
    {
      "id": "3",
      "name": "Dr. Vellala Avanthi",
      "designation": "Consultant",
      "experience": "3 Yrs",
      "image": "Dr. Avanthi Vellala.jpg",
      "master_id": "1"
    },
    {
      "id": "4",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "1"
    },
    {
      "id": "5",
      "name": "Dr. Srinivasa Varalakshmi Yakasiri",
      "designation": "Clinical Head",
      "experience": "30 Yrs",
      "image": "Dr. Y.S.Varalakshmi.jpg",
      "master_id": "1"
    },
    {
      "id": "6",
      "name": "Dr. Raghuveer Karne",
      "designation": "Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Raghuveer.jpg",
      "master_id": "1"
    },
    {
      "id": "7",
      "name": "Dr. Durga Rao Gedela",
      "designation": "Medical Director",
      "experience": "30 Yrs",
      "image": "Dr. Durga G. Rao_.jpg",
      "master_id": "2"
    },
    {
      "id": "8",
      "name": "Dr. Aaishwari Durge",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Aaishwari Durge - BH.jpg",
      "master_id": "2"
    },
    {
      "id": "9",
      "name": "Dr. Ramineedi Deepthi Priyadarshini",
      "designation": "Junior Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Ramineedi Deepthi Priyadarshini.jpg",
      "master_id": "2"
    },
    {
      "id": "10",
      "name": "Dr. Lakshmi Lalitya Mannava",
      "designation": "Junior Consultant",
      "experience": "4 Yrs",
      "image": "Dr. Lalithya.jpg",
      "master_id": "2"
    },
    {
      "id": "11",
      "name": "Dr. Jampana Pallavi",
      "designation": "Junior Consultant",
      "experience": "2 Yrs",
      "image": "Dr Jampana Pallavi.jpg",
      "master_id": "2"
    },
    {
      "id": "12",
      "name": "Dr. Vellala Avanthi",
      "designation": "Consultant",
      "experience": "3 Yrs",
      "image": "Dr. Avanthi Vellala.jpg",
      "master_id": "3"
    },
    {
      "id": "13",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "3"
    },
    {
      "id": "14",
      "name": "Dr. Srinivasa Varalakshmi Yakasiri",
      "designation": "Clinical Head",
      "experience": "30 Yrs",
      "image": "Dr. Y.S.Varalakshmi.jpg",
      "master_id": "3"
    },
    {
      "id": "15",
      "name": "Dr. Sai Manasa Darla",
      "designation": "Consultant",
      "experience": "7 Yrs",
      "image": "Dr. Sai Manasa.jpg",
      "master_id": "4"
    },
    {
      "id": "16",
      "name": "Dr. A Tejashree",
      "designation": "Junior Consultant",
      "experience": "12 Yrs",
      "image": "Dr. Tajeshsree.jpg",
      "master_id": "4"
    },
    {
      "id": "17",
      "name": "Dr. Bogi Reddy Mounika",
      "designation": "Junior Consultant",
      "experience": "2 Yrs",
      "image": "Dr. Bogi Reddy Mounika.jpg",
      "master_id": "4"
    },
    {
      "id": "18",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "5"
    },
    {
      "id": "19",
      "name": "Dr. Raghuveer Karne",
      "designation": "Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Raghuveer.jpg",
      "master_id": "5"
    },
    {
      "id": "20",
      "name": "Dr. Sujana Dhatraku",
      "designation": "Junior Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Sujana Dhatraku.jpg",
      "master_id": "5"
    },
    {
      "id": "21",
      "name": "Dr. Syeda Aiman Akram",
      "designation": "Junior Consultant",
      "experience": "4 Yrs",
      "image": "Dr Aiman Akram .jpg",
      "master_id": "5"
    },
    {
      "id": "22",
      "name": "Dr. Srinivasa Varalakshmi Yakasiri",
      "designation": "Clinical Head",
      "experience": "30 Yrs",
      "image": "Dr. Y.S.Varalakshmi.jpg",
      "master_id": "6"
    },
    {
      "id": "23",
      "name": "Dr. Sarabjeet Kaur",
      "designation": "Junior Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Sarabjeet Kaur.jpg",
      "master_id": "6"
    },
    {
      "id": "24",
      "name": "Dr. Nalla Kavya",
      "designation": "Junior Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Nalla Kavya.jpg",
      "master_id": "6"
    },
    {
      "id": "25",
      "name": "Dr. Nuthakki Spandana",
      "designation": "Junior Consultant",
      "experience": "7 Yrs",
      "image": "Dr. Spandana.jpg",
      "master_id": "6"
    },
    {
      "id": "26",
      "name": "Dr. Vallabhareddy Devi Syamala",
      "designation": "Junior Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Vallabhareddy Devi Syamala.jpg",
      "master_id": "6"
    },
    {
      "id": "27",
      "name": "Dr. Meera Jindal",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Meera Jindal.jpg",
      "master_id": "7"
    },
    {
      "id": "28",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "7"
    },
    {
      "id": "29",
      "name": "Dr. Srinivasa Varalakshmi Yakasiri",
      "designation": "Clinical Head",
      "experience": "30 Yrs",
      "image": "Dr. Y.S.Varalakshmi.jpg",
      "master_id": "7"
    },
    {
      "id": "30",
      "name": "Dr. M V D Aruna",
      "designation": "Consultant",
      "experience": "25 Yrs",
      "image": "Dr. M.V.D. Aruna - MYPR.jpg",
      "master_id": "8"
    },
    {
      "id": "31",
      "name": "Dr. Sane Prathyusha",
      "designation": "Junior Consultant",
      "experience": "3 Yrs",
      "image": "Dr. Sane Prathyusha.jpg",
      "master_id": "8"
    },
    {
      "id": "32",
      "name": "Dr. Sai Manasa Darla",
      "designation": "Consultant",
      "experience": "7 Yrs",
      "image": "Dr. Sai Manasa.jpg",
      "master_id": "8"
    },
    {
      "id": "33",
      "name": "Dr. Keerthana V",
      "designation": "Junior Consultant",
      "experience": "12 Yrs",
      "image": "Dr. Keerthana Vemula- TLCK.jpg",
      "master_id": "9"
    },
    {
      "id": "34",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "9"
    },
    {
      "id": "35",
      "name": "Dr. Srinivasa Varalakshmi Yakasiri",
      "designation": "Clinical Head",
      "experience": "30 Yrs",
      "image": "Dr. Y.S.Varalakshmi.jpg",
      "master_id": "9"
    },
    {
      "id": "36",
      "name": "Dr. Jalagam Kavya Rao",
      "designation": "Clinical Head \n",
      "experience": "10 Yrs",
      "image": "Dr. Jalagam Kavya Rao 1.jpg",
      "master_id": "10"
    },
    {
      "id": "37",
      "name": "Dr. B S Bhavya",
      "designation": "Junior Consultant",
      "experience": "2 Yrs",
      "image": "Dr Bhavya.jpg",
      "master_id": "10"
    },
    {
      "id": "38",
      "name": "Dr. M V D Aruna",
      "designation": "Consultant",
      "experience": "25 Yrs",
      "image": "Dr. M.V.D. Aruna - MYPR.jpg",
      "master_id": "10"
    },
    {
      "id": "39",
      "name": "Dr. Meera Jindal",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Meera Jindal.jpg",
      "master_id": "10"
    },
    {
      "id": "40",
      "name": "Dr. Jigna Tamagond",
      "designation": "Consultant",
      "experience": "14 Yrs",
      "image": "Dr. Jigna Tamagond - Karimnagar.jpg",
      "master_id": "11"
    },
    {
      "id": "41",
      "name": "Dr. R Samyuktha",
      "designation": "Junior Consultant",
      "experience": "5 Yrs",
      "image": "Dr. R. Samyuktha.jpg",
      "master_id": "11"
    },
    {
      "id": "42",
      "name": "Dr. Mathi Harika",
      "designation": "Consultant",
      "experience": "11 Yrs",
      "image": "Dr Harika Mathi - 1.jpg",
      "master_id": "12"
    },
    {
      "id": "43",
      "name": "Dr. Ramya Vicharapu",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Ramya.jpg",
      "master_id": "12"
    },
    {
      "id": "44",
      "name": "Dr. Radhika Potluri",
      "designation": "Clinical Head",
      "experience": "12 Yrs",
      "image": "Dr. Radhika Potluri.jpg",
      "master_id": "12"
    },
    {
      "id": "45",
      "name": "Dr. Radhika Potluri",
      "designation": "Clinical Head",
      "experience": "12 Yrs",
      "image": "Dr. Radhika Potluri.jpg",
      "master_id": "13"
    },
    {
      "id": "46",
      "name": "Dr. Boddu Padma",
      "designation": "Junior Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Boddu Padma.jpg",
      "master_id": "13"
    },
    {
      "id": "47",
      "name": "Dr. Tenali Vijaya Lakshmi",
      "designation": "Junior Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Tenali Vijaya Lakshm.jpg",
      "master_id": "13"
    },
    {
      "id": "49",
      "name": "Dr. Ramya Vicharapu",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Ramya.jpg",
      "master_id": "14"
    },
    {
      "id": "50",
      "name": "Dr. Nadikattu Saranya Lakshmi",
      "designation": "Junior Consultant",
      "experience": "5 yrs",
      "image": "Dr. Nadikattu Saranya Lakshmi.jpg",
      "master_id": "14"
    },
    {
      "id": "51",
      "name": "Dr. Deepika Kakani",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Deepika Kakani_.jpg",
      "master_id": "15"
    },
    {
      "id": "52",
      "name": "Dr. Vijayalakshmi D",
      "designation": "Clinical Head",
      "experience": "11 Yrs",
      "image": "Dr. Vijaya Lakshmi D.jpg",
      "master_id": "15"
    },
    {
      "id": "53",
      "name": "Dr. E Jahnavi",
      "designation": "Consultant",
      "experience": "11 Yrs",
      "image": "Dr. Jahanavi.jpg",
      "master_id": "15"
    },
    {
      "id": "54",
      "name": "Dr. E Jahnavi",
      "designation": "Consultant",
      "experience": "11 Yrs",
      "image": "Dr. Jahanavi.jpg",
      "master_id": "16"
    },
    {
      "id": "55",
      "name": "Dr. Pallavi Tapala",
      "designation": "Junior Consultant",
      "experience": "11 Yrs",
      "image": "Dr.Pallavi.jpg",
      "master_id": "16"
    },
    {
      "id": "56",
      "name": "Dr. Vijayalakshmi D",
      "designation": "Clinical Head",
      "experience": "11 Yrs",
      "image": "Dr. Vijaya Lakshmi D.jpg",
      "master_id": "17"
    },
    {
      "id": "57",
      "name": "Dr. L Divya Bharathi Reddy",
      "designation": "Junior Consultant",
      "experience": "6 Yrs",
      "image": "Dr. Divya Bharathi.jpg",
      "master_id": "17"
    },
    {
      "id": "58",
      "name": "Meghana Nyapathi",
      "designation": "Clinical Head",
      "experience": "17 Yrs",
      "image": "Dr. Meghana Nyapathi.jpg",
      "master_id": "18"
    },
    {
      "id": "59",
      "name": "Dr. Rekha Viswanath",
      "designation": "Junior Consultant",
      "experience": "9 Yrs",
      "image": "Dr. Rekha Vishwanath.jpg",
      "master_id": "18"
    },
    {
      "id": "60",
      "name": "Dr. Prinka Bajaj",
      "designation": "Consultant",
      "experience": "16 Yrs",
      "image": "Dr. Prinka Bajaj.jpg",
      "master_id": "18"
    },
    {
      "id": "61",
      "name": "Dr. Sushma B R",
      "designation": "Senior Consultant",
      "experience": "12 Yrs",
      "image": "Dr_Sushma_b_r.jpeg",
      "master_id": "18"
    },
    {
      "id": "62",
      "name": "Dr. Shalini M A",
      "designation": "Consultant",
      "experience": "9 Yrs",
      "image": "Dr Shalini b.jpg",
      "master_id": "18"
    },
    {
      "id": "63",
      "name": "Dr. Shweta .G. Sonwalkar",
      "designation": "Consultant",
      "experience": "15 Yrs",
      "image": "Dr. Swetha.jpg",
      "master_id": "18"
    },
    {
      "id": "64",
      "name": "Meghana Nyapathi",
      "designation": "Clinical Head",
      "experience": "17 Yrs",
      "image": "Dr. Meghana Nyapathi.jpg",
      "master_id": "19"
    },
    {
      "id": "65",
      "name": "Dr. Rekha Viswanath",
      "designation": "Junior Consultant",
      "experience": "9 Yrs",
      "image": "Dr. Rekha Vishwanath.jpg",
      "master_id": "19"
    },
    {
      "id": "67",
      "name": "Dr. Prinka Bajaj",
      "designation": "Consultant",
      "experience": "16 Yrs",
      "image": "Dr. Prinka Bajaj.jpg",
      "master_id": "20"
    },
    {
      "id": "68",
      "name": "Dr. Sushma B R",
      "designation": "Senior Consultant",
      "experience": "12 Yrs",
      "image": "Dr_Sushma_b_r.jpeg",
      "master_id": "20"
    },
    {
      "id": "69",
      "name": "Meghana Nyapathi",
      "designation": "Clinical Head",
      "experience": "17 Yrs",
      "image": "Dr. Meghana Nyapathi.jpg",
      "master_id": "20"
    },
    {
      "id": "70",
      "name": "Dr. Shalini M A",
      "designation": "Consultant",
      "experience": "9 Yrs",
      "image": "Dr Shalini b.jpg",
      "master_id": "21"
    },
    {
      "id": "71",
      "name": "Dr. Shweta .G. Sonwalkar",
      "designation": "Consultant",
      "experience": "15 Yrs",
      "image": "Dr. Swetha.jpg",
      "master_id": "21"
    },
    {
      "id": "72",
      "name": "Meghana Nyapathi",
      "designation": "Clinical Head",
      "experience": "17 Yrs",
      "image": "Dr. Meghana Nyapathi.jpg",
      "master_id": "21"
    },
    {
      "id": "73",
      "name": "Dr. Shweta .G. Sonwalkar",
      "designation": "Consultant",
      "experience": "15 Yrs",
      "image": "Dr. Swetha.jpg",
      "master_id": "22"
    },
    {
      "id": "74",
      "name": "Meghana Nyapathi",
      "designation": "Clinical Head",
      "experience": "17 Yrs",
      "image": "Dr. Meghana Nyapathi.jpg",
      "master_id": "22"
    },
    {
      "id": "75",
      "name": "Dr. Prinka Bajaj",
      "designation": "Consultant",
      "experience": "16 Yrs",
      "image": "Dr. Prinka Bajaj.jpg",
      "master_id": "22"
    },
    {
      "id": "76",
      "name": "Dr. Maheswari D",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Maheshwari.jpg",
      "master_id": "23"
    },
    // {
    //   "id": "77",
    //   "name": "Dr. Aparna Vishwakiran",
    //   "designation": "Senior Consultant",
    //   "experience": "21 yrs",
    //   "image": "Dr. Aparna Vishwakiran.jpg",
    //   "master_id": "23"
    // },
    {
      "id": "78",
      "name": "Dr. Hema",
      "designation": "Senior Consultant",
      "experience": "18 Yrs",
      "image": "Dr. Hema.jpg",
      "master_id": "23"
    },
    {
      "id": "79",
      "name": "Dr. Nilesh Unmesh Balkawade",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Nilesh Unmesh Balkawade.jpg",
      "master_id": "24"
    },
    {
      "id": "80",
      "name": "Dr. Ashwini Vikram Wagh",
      "designation": "Consultant",
      "experience": "6 Yrs",
      "image": "Dr Ashwini Rathod_.jpg",
      "master_id": "24"
    },
    // {
    //   "id": "81",
    //   "name": "Dr. Sayali Chavan",
    //   "designation": "Junior Consultant",
    //   "experience": "7 Yrs",
    //   "image": "Dr. Sayali Chavan.jpg",
    //   "master_id": "24"
    // },
    {
      "id": "82",
      "name": "Dr. Sneha Govind Balki",
      "designation": "Senior Consultant",
      "experience": "10 Yrs",
      "image": "Dr. Sneha Govind Balki.jpg",
      "master_id": "24"
    },
    {
      "id": "83",
      "name": "Dr. Nilesh Unmesh Balkawade",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Nilesh Unmesh Balkawade.jpg",
      "master_id": "25"
    },
    {
      "id": "84",
      "name": "Dr. Ashwini Vikram Wagh",
      "designation": "Consultant",
      "experience": "6 Yrs",
      "image": "Dr Ashwini Rathod_.jpg",
      "master_id": "25"
    },
    // {
    //   "id": "85",
    //   "name": "Dr. Sayali Chavan",
    //   "designation": "Junior Consultant",
    //   "experience": "7 Yrs",
    //   "image": "Dr. Sayali Chavan.jpg",
    //   "master_id": "26"
    // },
    {
      "id": "86",
      "name": "Dr. Sneha Govind Balki",
      "designation": "Senior Consultant",
      "experience": "10 Yrs",
      "image": "Dr. Sneha Govind Balki.jpg",
      "master_id": "26"
    },
    {
      "id": "87",
      "name": "Dr. Pallavi Yuvraj Untwal",
      "designation": "Consultant",
      "experience": "14 Yrs",
      "image": "Dr. Pallavi Final 1.jpg",
      "master_id": "27"
    },
    {
      "id": "88",
      "name": "Dr. Nilesh Unmesh Balkawade",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Nilesh Unmesh Balkawade.jpg",
      "master_id": "27"
    },
    {
      "id": "89",
      "name": "Dr. Sneha Govind Balki",
      "designation": "Senior Consultant",
      "experience": "10 Yrs",
      "image": "Dr. Sneha Govind Balki.jpg",
      "master_id": "27"
    },
    {
      "id": "90",
      "name": "Dr. Pratibha Tiwary",
      "designation": "Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Pratibha - Raipur.jpg",
      "master_id": "28"
    },
    {
      "id": "91",
      "name": "Dr. Baxi Sushma",
      "designation": "Clinical Head",
      "experience": "35 Yrs",
      "image": "Dr. Sushma Baxi.jpg",
      "master_id": "29"
    },
    {
      "id": "92",
      "name": "Dr. Poornima Mathur",
      "designation": "Consultant",
      "experience": "9 Yrs",
      "image": "Dr. Poornima M.jpg",
      "master_id": "29"
    },
    {
      "id": "93",
      "name": "Dr. Aishwarya Ishan Pandya",
      "designation": "Junior Consultant",
      "experience": "5 Yrs",
      "image": "Dr Aishwariya.jpg",
      "master_id": "29"
    },
    {
      "id": "94",
      "name": "Dr. Shruti Singh",
      "designation": "Senior Consultant",
      "experience": "12 Yrs",
      "image": "Dr. Shruti Singh - RH.jpg",
      "master_id": "30"
    },
    {
      "id": "95",
      "name": "Dr. Prasanta Kumar Nayak",
      "designation": "Consultant",
      "experience": "20 Yrs",
      "image": "Dr. Prasanta Kumar Nayak.jpg",
      "master_id": "31"
    },
    {
      "id": "96",
      "name": "Dr. Gayatri Satpathy",
      "designation": "Consultant",
      "experience": "14 Yrs",
      "image": "Dr.Gayathri_.jpg",
      "master_id": "31"
    },
    {
      "id": "97",
      "name": "Dr. Suprava Jena",
      "designation": "Consultant",
      "experience": "7 Yrs",
      "image": "Dr Suprava Jena.jpg",
      "master_id": "31"
    },
    {
      "id": "98",
      "name": "Dr. Mathi Harika",
      "designation": "Consultant",
      "experience": "11 Yrs",
      "image": "Dr Harika Mathi - 1.jpg",
      "master_id": "32"
    },
    {
      "id": "99",
      "name": "Dr. Venkata Sujatha Vellanki",
      "designation": "Clinical Head",
      "experience": "24 Yrs",
      "image": "Dr. Sujatha V_.jpg",
      "master_id": "32"
    },
    {
      "id": "100",
      "name": "Dr. Ramya Vicharapu",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Ramya.jpg",
      "master_id": "32"
    },
    {
      "id": "101",
      "name": "Dr. Aaishwari Durge",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "isMaleFertilityDr": false,
      "image": "Dr. Aaishwari Durge - BH.jpg",
      "master_id": "33"
    },
    {
      "id": "102",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "isMaleFertilityDr": true,
      "gender": "female",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "33"
    },
    {
      "id": "103",
      "name": "Dr. Maheswari D",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "isMaleFertilityDr": false,
      "gender": "female",
      "image": "Dr. Maheshwari.jpg",
      "master_id": "33"
    },
    // {
    //   "id": "104",
    //   "name": "Dr. Aparna Vishwakiran",
    //   "designation": "Senior Consultant",
    //   "experience": "21 yrs",
    //   "image": "Dr. Aparna Vishwakiran.jpg",
    //   "master_id": "33"
    // },
    {
      "id": "105",
      "name": "Dr. Nilesh Unmesh Balkawade",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "isMaleFertilityDr": true,
      "gender": "male",
      "image": "Dr. Nilesh Unmesh Balkawade.jpg",
      "master_id": "33"
    },
    {
      "id": "106",
      "name": "Dr. Sneha Govind Balki",
      "designation": "Senior Consultant",
      "experience": "10 Yrs",
      "isMaleFertilityDr": false,
      "image": "Dr. Sneha Govind Balki.jpg",
      "master_id": "33"
    },
    {
      "id": "107",
      "name": "Dr. Prinka Bajaj",
      "designation": "Consultant",
      "experience": "16 Yrs",
      "isMaleFertilityDr": true,
      "gender": "female",
      "image": "Dr. Prinka Bajaj.jpg",
      "master_id": "33"
    },
    {
      "id": "108",
      "name": "Dr. Sushma B R",
      "designation": "Senior Consultant",
      "experience": "12 Yrs",
      "isMaleFertilityDr": false,
      "image": "Dr_Sushma_b_r.jpeg",
      "master_id": "33"
    },
    {
      "id": "109",
      "name": "Dr. Radhika Potluri",
      "designation": "Clinical Head",
      "experience": "12 Yrs",
      "isMaleFertilityDr": true,
      "gender": "female",
      "image": "Dr. Radhika Potluri.jpg",
      "master_id": "33"
    },
    {
      "id": "110",
      "name": "Dr. Pratibha Tiwary",
      "designation": "Consultant",
      "experience": "8 Yrs",
      "isMaleFertilityDr": true,
      "gender": "female",
      "image": "Dr. Pratibha - Raipur.jpg",
      "master_id": "33"
    },
    {
      "id": "111",
      "name": "Dr. Prasanta Kumar Nayak",
      "designation": "Consultant",
      "experience": "20 Yrs",
      "isMaleFertilityDr": true,
      "gender": "male",
      "image": "Dr. Prasanta Kumar Nayak.jpg",
      "master_id": "33"
    },
    {
      "id": "112",
      "name": "Dr. Durga Rao Gedela",
      "designation": "Medical Director",
      "experience": "30 Yrs",
      "image": "Dr. Durga G. Rao_.jpg",
      "master_id": "34"
    },
    {
      "id": "113",
      "name": "Dr. Aaishwari Durge",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Aaishwari Durge - BH.jpg",
      "master_id": "34"
    },
    {
      "id": "114",
      "name": "Dr. Vellala Avanthi",
      "designation": "Consultant",
      "experience": "3 Yrs",
      "image": "Dr. Avanthi Vellala.jpg",
      "master_id": "34"
    },
    {
      "id": "115",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "34"
    },
    {
      "id": "116",
      "name": "Dr. Raghuveer Karne",
      "designation": "Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Raghuveer.jpg",
      "master_id": "34"
    },
    {
      "id": "117",
      "name": "Dr. Srinivasa Varalakshmi Yakasiri",
      "designation": "Clinical Head",
      "experience": "30 Yrs",
      "image": "Dr. Y.S.Varalakshmi.jpg",
      "master_id": "34"
    },
    {
      "id": "118",
      "name": "Dr. Sai Manasa Darla",
      "designation": "Consultant",
      "experience": "7 Yrs",
      "image": "Dr. Sai Manasa.jpg",
      "master_id": "34"
    },
    {
      "id": "119",
      "name": "Dr. Meera Jindal",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Meera Jindal.jpg",
      "master_id": "34"
    },
    {
      "id": "120",
      "name": "Dr. Jalagam Kavya Rao",
      "designation": "Clinical Head \n",
      "experience": "10 Yrs",
      "image": "Dr. Jalagam Kavya Rao 1.jpg",
      "master_id": "34"
    },
    {
      "id": "121",
      "name": "Dr. Jigna Tamagond",
      "designation": "Consultant",
      "experience": "14 Yrs",
      "image": "Dr. Jigna Tamagond - Karimnagar.jpg",
      "master_id": "34"
    },
    {
      "id": "122",
      "name": "Dr. Venkata Sujatha Vellanki",
      "designation": "Clinical Head",
      "experience": "24 Yrs",
      "image": "Dr. Sujatha V_.jpg",
      "master_id": "35"
    },
    {
      "id": "123",
      "name": "Dr. Mathi Harika",
      "designation": "Consultant",
      "experience": "11 Yrs",
      "image": "Dr Harika Mathi - 1.jpg",
      "master_id": "35"
    },
    {
      "id": "124",
      "name": "Dr. Radhika Potluri",
      "designation": "Clinical Head",
      "experience": "12 Yrs",
      "image": "Dr. Radhika Potluri.jpg",
      "master_id": "35"
    },
    {
      "id": "125",
      "name": "Dr. Deepika Kakani",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Deepika Kakani_.jpg",
      "master_id": "35"
    },
    {
      "id": "126",
      "name": "Dr. E Jahnavi",
      "designation": "Consultant",
      "experience": "11 Yrs",
      "image": "Dr. Jahanavi.jpg",
      "master_id": "35"
    },
    {
      "id": "127",
      "name": "Dr. Vijayalakshmi D",
      "designation": "Clinical Head",
      "experience": "11 Yrs",
      "image": "Dr. Vijaya Lakshmi D.jpg",
      "master_id": "35"
    },
    {
      "id": "128",
      "name": "Meghana Nyapathi",
      "designation": "Clinical Head",
      "experience": "17 Yrs",
      "image": "Dr. Meghana Nyapathi.jpg",
      "master_id": "36"
    },
    {
      "id": "129",
      "name": "Dr. Prinka Bajaj",
      "designation": "Consultant",
      "experience": "16 Yrs",
      "image": "Dr. Prinka Bajaj.jpg",
      "master_id": "36"
    },
    {
      "id": "130",
      "name": "Dr. Sushma B R",
      "designation": "Senior Consultant",
      "experience": "12 Yrs",
      "image": "Dr_Sushma_b_r.jpeg",
      "master_id": "36"
    },
    {
      "id": "131",
      "name": "Dr. Shalini M A",
      "designation": "Consultant",
      "experience": "9 Yrs",
      "image": "Dr Shalini b.jpg",
      "master_id": "36"
    },
    {
      "id": "132",
      "name": "Dr. Shweta .G. Sonwalkar",
      "designation": "Consultant",
      "experience": "15 Yrs",
      "image": "Dr. Swetha.jpg",
      "master_id": "36"
    },
    {
      "id": "133",
      "name": "Dr. Aaishwari Durge",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Aaishwari Durge - BH.jpg",
      "master_id": "37"
    },
    {
      "id": "134",
      "name": "Dr. Parinaaz Parhar",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Parinaaz Parhar.jpg",
      "master_id": "37"
    },
    {
      "id": "135",
      "name": "Dr. Maheswari D",
      "designation": "Consultant",
      "experience": "13 Yrs",
      "image": "Dr. Maheshwari.jpg",
      "master_id": "37"
    },
    // {
    //   "id": "136",
    //   "name": "Dr. Aparna Vishwakiran",
    //   "designation": "Senior Consultant",
    //   "experience": "21 yrs",
    //   "image": "Dr. Aparna Vishwakiran.jpg",
    //   "master_id": "37"
    // },
    {
      "id": "137",
      "name": "Dr. Nilesh Unmesh Balkawade",
      "designation": "Clinical Head",
      "experience": "16 Yrs",
      "image": "Dr. Nilesh Unmesh Balkawade.jpg",
      "master_id": "37"
    },
    {
      "id": "138",
      "name": "Dr. Sneha Govind Balki",
      "designation": "Senior Consultant",
      "experience": "10 Yrs",
      "image": "Dr. Sneha Govind Balki.jpg",
      "master_id": "37"
    },
    {
      "id": "139",
      "name": "Dr. Mathi Harika",
      "designation": "Consultant",
      "experience": "11 Yrs",
      "image": "Dr Harika Mathi - 1.jpg",
      "master_id": "38"
    },
    {
      "id": "140",
      "name": "Dr. Venkata Sujatha Vellanki",
      "designation": "Clinical Head",
      "experience": "24 Yrs",
      "image": "Dr. Sujatha V_.jpg",
      "master_id": "38"
    },
    {
      "id": "141",
      "name": "Dr. Ramya Vicharapu",
      "designation": "Consultant",
      "experience": "5 Yrs",
      "image": "Dr. Ramya.jpg",
      "master_id": "38"
    },
    {
      "id": "142",
      "name": "Dr. Ramineedi Deepthi Priyadarshini",
      "designation": "Junior Consultant",
      "experience": "8 Yrs",
      "image": "Dr. Ramineedi Deepthi Priyadarshini.jpg",
      "master_id": "38"
    },
    {
      "id": "143",
      "name": "Dr. Raghuveer Karne",
      "designation": "Consultant",
      "experience": "8 Yrs",
      "isMaleFertilityDr": true,
      "gender": "male",
      "image": "Dr. Raghuveer.jpg",
      "master_id": "33"
    },
  ]
  
  export default doctors;