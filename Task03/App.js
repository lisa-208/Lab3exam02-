import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const mosqueData= [{
        "Mosque Name": "Masjid Al-Islam",
        "Address": "903 Columbus Rd.",
        "City": "Aliceville",
        "State": "AL",
        "Zip": "35442",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid An Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Anniston Islamic Center ",
        "Address": "1821 Mccall Dr.",
        "City": "Anniston",
        "State": "AL",
        "Zip": "36207",
        "Contact": "256-238-8613"
    },
    {
        "Mosque Name": "Auburn Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Community Association ",
        "Address": "338 Armstrong St.",
        "City": "Auburn",
        "State": "AL",
        "Zip": "36830",
        "Contact": "334-821-8307"
    },
    {
        "Mosque Name": "Al-Masjidul Al-Kaa Bah",
        "Address": "691 Idlewild Circle No.H",
        "City": "Birmingham",
        "State": "AL",
        "Zip": "35205",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al Quran",
        "Address": "3424 26th St. N",
        "City": "Birmingham",
        "State": "AL",
        "Zip": "35207",
        "Contact": "205-324-0212"
    },
    {
        "Mosque Name": "Homewood Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Birmingham Islamic Society ",
        "Address": "1810 25Th Ct. S",
        "City": "Birmingham",
        "State": "AL",
        "Zip": "35209",
        "Contact": "205-879-4247"
    },
    {
        "Mosque Name": "Birmingham Islamic Center",
        "Address": "2834 Bessemer Rd.",
        "City": "Birmingham",
        "State": "AL",
        "Zip": "35208",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Dotham",
        "Address": "211 Jeff St.",
        "City": "Dotham",
        "State": "AL",
        "Zip": "36303",
        "Contact": "334-792-9186"
    },
    {
        "Mosque Name": "Muslim Community of the Wiregrass",
        "Address": "4500 Napier Fields Rd.",
        "City": "Dothan",
        "State": "AL",
        "Zip": "36303",
        "Contact": "334-655-4050"
    },
    {
        "Mosque Name": "Bis West Side Masjid",
        "Address": "4506 Gary Ave.",
        "City": "Fairfield",
        "State": "AL",
        "Zip": "35064",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Gadsden",
        "Address": "108  9th St. S",
        "City": "Gadsden",
        "State": "AL",
        "Zip": "35903",
        "Contact": ""
    },
    {
        "Mosque Name": "Hartford Islamic Center",
        "Address": "503 N. 6th Ave.",
        "City": "Hartford",
        "State": "AL",
        "Zip": "36344",
        "Contact": ""
    },
    {
        "Mosque Name": "Alabama Islamic Education Center Aiec of Fatima Zahra ",
        "Address": "1736 28th Ave. S",
        "City": "Homewood",
        "State": "AL",
        "Zip": "35209",
        "Contact": ""
    },
    {
        "Mosque Name": "Birmingham Islamic Society ",
        "Address": "2524 Hackberry Lane",
        "City": "Hoover",
        "State": "AL",
        "Zip": "35226",
        "Contact": "205-879-4247"
    },
    {
        "Mosque Name": "Alabama Islamic Educational Center of Fatemeh Al-Z",
        "Address": "8200 Memorial Pkwy Sw",
        "City": "Huntsville",
        "State": "AL",
        "Zip": "35802",
        "Contact": "256-489-2907"
    },
    {
        "Mosque Name": "Huntsville Islamic Center",
        "Address": "1645 Sparkman Dr.",
        "City": "Huntsville",
        "State": "AL",
        "Zip": "35816",
        "Contact": "256-721-1712"
    },
    {
        "Mosque Name": "Masjid Sajdullah",
        "Address": "4421 Bonnell Dr. No.2",
        "City": "Huntsville",
        "State": "AL",
        "Zip": "35816",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid As-Salaam",
        "Address": "313 B Houston St.",
        "City": "Mobile",
        "State": "AL",
        "Zip": "36606",
        "Contact": "251-391-3461"
    },
    {
        "Mosque Name": "The American Islamic Center of Mobile",
        "Address": "6207 Old Shell Rd.",
        "City": "Mobile",
        "State": "AL",
        "Zip": "36608",
        "Contact": "251-345-7300"
    },
    {
        "Mosque Name": "Masjid Baitul Haqq",
        "Address": "509 Aurelie St.",
        "City": "Mobile",
        "State": "AL",
        "Zip": "36604",
        "Contact": ""
    },
    {
        "Mosque Name": "Mobile Masjid of Al Islam",
        "Address": "1559 Duval St",
        "City": "Mobile",
        "State": "AL",
        "Zip": "36605",
        "Contact": "251-473-4100"
    },
    {
        "Mosque Name": "Islamic Society of Mobile",
        "Address": "63 East Dr.",
        "City": "Mobile",
        "State": "AL",
        "Zip": "36608",
        "Contact": "251-343-4695"
    },
    {
        "Mosque Name": "East Montgomery Islamic Center",
        "Address": "3430 Kessinger Dr.",
        "City": "Montgomery",
        "State": "AL",
        "Zip": "36116",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Center of Montgomery",
        "Address": "4340 S. Court St.",
        "City": "Montgomery",
        "State": "AL",
        "Zip": "36105",
        "Contact": "334-288-2128"
    },
    {
        "Mosque Name": "Masjid Qasim Bilal Elamin",
        "Address": "2425 Lark Dr.",
        "City": "Montgomery",
        "State": "AL",
        "Zip": "36108",
        "Contact": "334-281-8474"
    },
    {
        "Mosque Name": "Masjid Al-Qubbatu Al-Khadra",
        "Address": "1009 Cr 332",
        "City": "Pelham",
        "State": "AL",
        "Zip": "35124",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Huda Center",
        "Address": "3413-C Rainbow Pkwy",
        "City": "Rainbow City",
        "State": "AL",
        "Zip": "35906",
        "Contact": "256-886-0434"
    },
    {
        "Mosque Name": "Selma Islamic Center",
        "Address": "2820 Citizens Pkwy",
        "City": "Selma",
        "State": "AL",
        "Zip": "36703",
        "Contact": "334-872-5116"
    },
    {
        "Mosque Name": "Islamic Society of Tuscaloosa ",
        "Address": "1416 Paul W. Bryant Dr.",
        "City": "Tuscaloosa",
        "State": "AL",
        "Zip": "35401",
        "Contact": "205-758-3382"
    },
    {
        "Mosque Name": "Islamic Community of Tuskegee",
        "Address": "1103 S. Main St.",
        "City": "Tuskegee",
        "State": "AL",
        "Zip": "36083",
        "Contact": "916-317-5140"
    },
    {
        "Mosque Name": "Masjid Ash-Shura",
        "Address": "1902 Franklin Rd.",
        "City": "Tuskegee",
        "State": "AL",
        "Zip": "36088",
        "Contact": "334-724-9827"
    },
    {
        "Mosque Name": "Islamic Center ",
        "Address": "5841 Arctic Blvd Suite 202",
        "City": "Anchorage",
        "State": "AK",
        "Zip": "99518",
        "Contact": "907-868-7868"
    },
    {
        "Mosque Name": "Islamic Center of Alaska",
        "Address": "4141 Ingra No. 202",
        "City": "Anchorage",
        "State": "AK",
        "Zip": "99503",
        "Contact": "907-562-4241"
    },
    {
        "Mosque Name": "Masjid Alaska Islamic Community Center ",
        "Address": "501 W. International Rd. Suite 26",
        "City": "Anchorage",
        "State": "AK",
        "Zip": "99518",
        "Contact": "907-248-7333"
    },
    {
        "Mosque Name": "Bullhead Islamic Center ",
        "Address": "1715 Wolf Ct.",
        "City": "Bullhead City",
        "State": "AZ",
        "Zip": "86442",
        "Contact": "928-758-9234"
    },
    {
        "Mosque Name": "Masjid Sajda",
        "Address": "540 N. Cacheris Ct.",
        "City": "Casa Grande",
        "State": "AZ",
        "Zip": "85222",
        "Contact": "480-332-8618"
    },
    {
        "Mosque Name": "Islamic Center of East Valley",
        "Address": "425 N. Alma School Road",
        "City": "Chandler",
        "State": "AZ",
        "Zip": "85224",
        "Contact": "480-966-6115"
    },
    {
        "Mosque Name": "Muslim American Society ",
        "Address": "1071 N. Alma School Rd.",
        "City": "Chandler",
        "State": "AZ",
        "Zip": "85224",
        "Contact": "480-784-4627"
    },
    {
        "Mosque Name": "Flagstaff Community Masjid",
        "Address": "30-269 S. Family Housing",
        "City": "Flagstaff",
        "State": "AZ",
        "Zip": "86001",
        "Contact": "928-523-7993"
    },
    {
        "Mosque Name": "Al Sadiq Mosque",
        "Address": "6017 W. Glendale Ave.",
        "City": "Glendale",
        "State": "AZ",
        "Zip": "85301",
        "Contact": "623-939-8121"
    },
    {
        "Mosque Name": "Masjid Ibrahim",
        "Address": "2075 Airway Ave",
        "City": "Kingman",
        "State": "AZ",
        "Zip": "86401",
        "Contact": "928-757-8822"
    },
    {
        "Mosque Name": "Islamic Center of Lavern",
        "Address": "P.O. Box 1107",
        "City": "Laveen",
        "State": "AZ",
        "Zip": "85339",
        "Contact": "602-361-4401"
    },
    {
        "Mosque Name": "Masjid Bilal Bin Rabah",
        "Address": "44370 W. Arizona",
        "City": "Maricopa",
        "State": "AZ",
        "Zip": "85138",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Noor",
        "Address": "55 N. Matlock St.",
        "City": "Mesa",
        "State": "AZ",
        "Zip": "85203",
        "Contact": "480-644-0074"
    },
    {
        "Mosque Name": "Albanian-American Islamic Center of Arizona",
        "Address": "6724 W. Greenway Rd.",
        "City": "Peoria",
        "State": "AZ",
        "Zip": "85381",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Rasool MosqueIslamic Education Center ",
        "Address": "5302 N. 35th Ave.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85017",
        "Contact": "602-617-5106"
    },
    {
        "Mosque Name": "Islamic Center of Arizona",
        "Address": "9032 N. 9th St.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85020",
        "Contact": "602-643-9973"
    },
    {
        "Mosque Name": "Masjid Jauharatul Islam",
        "Address": "102 W. South Mountain Ave",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85041",
        "Contact": "602-268-6151"
    },
    {
        "Mosque Name": "Masjid Al-Rahma",
        "Address": "2426 E. Mcdowell Rd.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85008",
        "Contact": "602-463-2569"
    },
    {
        "Mosque Name": "Masjid Al-Bashir Mohammed",
        "Address": "3131 N. 35th Ave.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85017",
        "Contact": "623-934-4496"
    },
    {
        "Mosque Name": "Al Kauthar",
        "Address": "I 17 and Glendale Ave.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85017",
        "Contact": "623-330-2833"
    },
    {
        "Mosque Name": "Islamic Community Center of Phoenix",
        "Address": "7516 N Black Canyon Hwy",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85051",
        "Contact": "602-249-0496"
    },
    {
        "Mosque Name": "Muslim Community Mosque",
        "Address": "1818  N. 32Nd St.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85008",
        "Contact": "602-306-4959"
    },
    {
        "Mosque Name": "Arizona Cultural Academy Masjid",
        "Address": "7810 S. 42Rd St.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85042",
        "Contact": "602-454-1222"
    },
    {
        "Mosque Name": "Masjid Muhammad Ibn Abdullah",
        "Address": "5648 N. 15th Ave.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85015",
        "Contact": "602-413-5279"
    },
    {
        "Mosque Name": "Islamic Center of North Phoenix",
        "Address": "13246 N. 23Rd Ave.",
        "City": "Phoenix",
        "State": "AZ",
        "Zip": "85020",
        "Contact": "602-371-3440"
    },
    {
        "Mosque Name": "Islamic Center of North East Valley",
        "Address": "12125 E. Via Linda",
        "City": "Scottsdale",
        "State": "AZ",
        "Zip": "85259",
        "Contact": "602-456-0199"
    },
    {
        "Mosque Name": "Al-Mahdi Center",
        "Address": "1016 S. River Dr.",
        "City": "Tempe",
        "State": "AZ",
        "Zip": "85281",
        "Contact": "480-557-9699"
    },
    {
        "Mosque Name": "Masjid Omar Bin Al-Khattab",
        "Address": "6225 S. Mcclintock Dr.",
        "City": "Tempe",
        "State": "AZ",
        "Zip": "85283",
        "Contact": "480-775-6627"
    },
    {
        "Mosque Name": "Islamic Community Center of Tempe",
        "Address": "131 E. 6th St.",
        "City": "Tempe",
        "State": "AZ",
        "Zip": "85281",
        "Contact": "480-894-6070"
    },
    {
        "Mosque Name": "Community Mosque",
        "Address": "1797 W. University Dr. No.167",
        "City": "Tempe",
        "State": "AZ",
        "Zip": "85281",
        "Contact": "480-829-9465"
    },
    {
        "Mosque Name": "Islamic Center of Tucson",
        "Address": "901 E. 1 St.",
        "City": "Tucson",
        "State": "AZ",
        "Zip": "85719",
        "Contact": "520-624-3233"
    },
    {
        "Mosque Name": "Islamic Center of Yuma",
        "Address": "200 W. 24th St.",
        "City": "Yuma",
        "State": "AZ",
        "Zip": "85364",
        "Contact": "928-783-4919"
    },
    {
        "Mosque Name": "Islamic Center of Nw Arkansas ",
        "Address": "104 Se 6th St.",
        "City": "Bentonville",
        "State": "AR",
        "Zip": "72712",
        "Contact": "502-345-8756"
    },
    {
        "Mosque Name": "Blytheville Masjid",
        "Address": "1111 S. Division St.",
        "City": "Blytheville",
        "State": "AR",
        "Zip": "72315",
        "Contact": "870-780-6222"
    },
    {
        "Mosque Name": "Mosque of High Intelligence Learning For Muslims",
        "Address": "9 Fortson Dr.",
        "City": "Cabot",
        "State": "AR",
        "Zip": "72023",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Khaliq",
        "Address": "",
        "City": "Clarksville",
        "State": "AR",
        "Zip": "72830",
        "Contact": ""
    },
    {
        "Mosque Name": "Conway Islamic Center",
        "Address": "1715 South Blvd",
        "City": "Conway",
        "State": "AR",
        "Zip": "72034",
        "Contact": "501-470-5866"
    },
    {
        "Mosque Name": "Islamic Center of Northwest Arkansas ",
        "Address": "1420 W. Center St.",
        "City": "Fayetteville",
        "State": "AR",
        "Zip": "72701",
        "Contact": "479-442-4155"
    },
    {
        "Mosque Name": "Fort Smith Islamic Center ",
        "Address": "1800 S. Albert Pike",
        "City": "Fort Smith",
        "State": "AR",
        "Zip": "72901",
        "Contact": "501-783-2914"
    },
    {
        "Mosque Name": "Masjid Al Salam",
        "Address": "8501 S. 28th St.",
        "City": "Fort Smith",
        "State": "AR",
        "Zip": "72908",
        "Contact": "479-434-4009"
    },
    {
        "Mosque Name": "Islamic Center of Jonesboro",
        "Address": "118 Rogers St.",
        "City": "Jonesboro",
        "State": "AR",
        "Zip": "72401",
        "Contact": "870-935-2658"
    },
    {
        "Mosque Name": "Islamic Center of Little Rock",
        "Address": "3224 Anna St.",
        "City": "Little Rock",
        "State": "AR",
        "Zip": "72204",
        "Contact": "501-565-4930"
    },
    {
        "Mosque Name": "Islamic Center For Human Excellence ",
        "Address": "1717 Wright Ave.",
        "City": "Little Rock",
        "State": "AR",
        "Zip": "72203",
        "Contact": "501-372-1942"
    },
    {
        "Mosque Name": "Muslim Association of Arkansas ",
        "Address": "3707 W. Hepburn St.",
        "City": "Pine Bluff",
        "State": "AR",
        "Zip": "71603",
        "Contact": "870-536-8413"
    },
    {
        "Mosque Name": "Muslim Students of Russellville",
        "Address": "514 West K St.",
        "City": "Russellville",
        "State": "AR",
        "Zip": "72801",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Alameda",
        "Address": "901 Santa Clara Ave.",
        "City": "Alameda",
        "State": "CA",
        "Zip": "94501",
        "Contact": "510-748-9052"
    },
    {
        "Mosque Name": "Afghan Community ",
        "Address": "707 Haight St.",
        "City": "Alameda",
        "State": "CA",
        "Zip": "94501",
        "Contact": "510-337-1277"
    },
    {
        "Mosque Name": "Masjid Al-Taqwa",
        "Address": "2181 North Lake Ave.",
        "City": "Altadena",
        "State": "CA",
        "Zip": "91001",
        "Contact": "626-398-8392"
    },
    {
        "Mosque Name": "Musallah Darul Arqum",
        "Address": "3853 1/2 Broadway St.",
        "City": "American Canyon",
        "State": "CA",
        "Zip": "94503",
        "Contact": ""
    },
    {
        "Mosque Name": "Association of Islamic Charitable Projects ",
        "Address": "1136 N. Brockhurst St.",
        "City": "Anaheim",
        "State": "CA",
        "Zip": "92801",
        "Contact": "714-999-2800"
    },
    {
        "Mosque Name": "Islamic Institute of Orange County ",
        "Address": "1220 N. State College Blvd",
        "City": "Anaheim",
        "State": "CA",
        "Zip": "92806",
        "Contact": "714-533-6271"
    },
    {
        "Mosque Name": "West Coast Islamic Society ",
        "Address": "1717 S. Brookhurst St.",
        "City": "Anaheim",
        "State": "CA",
        "Zip": "92804",
        "Contact": "714-535-1100"
    },
    {
        "Mosque Name": "Islamic Center of East Bay",
        "Address": "314 W. 19th St.",
        "City": "Antioch",
        "State": "CA",
        "Zip": "94509",
        "Contact": "925-756-1652"
    },
    {
        "Mosque Name": "Al-Fatiha Islamic Center",
        "Address": "210 N. Citrus Ave",
        "City": "Azusa",
        "State": "CA",
        "Zip": "91702",
        "Contact": "626-815-8679"
    },
    {
        "Mosque Name": "Islamic Shura Council of Bakersfield ",
        "Address": "701 Ming Ave",
        "City": "Bakersfield",
        "State": "CA",
        "Zip": "93307",
        "Contact": "661-836-9055"
    },
    {
        "Mosque Name": "Masjid As-Sabireen",
        "Address": "3931 S. Chester Ave.",
        "City": "Bakersfield",
        "State": "CA",
        "Zip": "93309",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Shura Council of Bakersfield ",
        "Address": "615 Kentucky St.",
        "City": "Bakersfield",
        "State": "CA",
        "Zip": "93305",
        "Contact": "661-324-1380"
    },
    {
        "Mosque Name": "Iqra Islamic Center of Barstow",
        "Address": "305 N 3Rd Ave.",
        "City": "Barstow",
        "State": "CA",
        "Zip": "92311",
        "Contact": "951-203-6334"
    },
    {
        "Mosque Name": "Bell Islamic And Cultural Center ",
        "Address": "4313 Gage Ave.",
        "City": "Bell",
        "State": "CA",
        "Zip": "90201",
        "Contact": "323-562-8087"
    },
    {
        "Mosque Name": "El-Hussein Community Center",
        "Address": "6840 Otis Ave.",
        "City": "Bell",
        "State": "CA",
        "Zip": "90201",
        "Contact": "323-773-3778"
    },
    {
        "Mosque Name": "Yaseen Foundation",
        "Address": "621 Masonic Way",
        "City": "Belmont",
        "State": "CA",
        "Zip": "94002",
        "Contact": "650-591-3690"
    },
    {
        "Mosque Name": "Berkeley Masjid",
        "Address": "2716 Derby St.",
        "City": "Berkeley",
        "State": "CA",
        "Zip": "94705",
        "Contact": "510-549-9465"
    },
    {
        "Mosque Name": "Islamic Center of Beverly Hills",
        "Address": "264 S. La Ciennega Blvd",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Pmb1070",
        "Address": "Beverly Hills",
        "City": "CA",
        "State": "90211",
        "Zip": "310-859-0404",
        "Contact": ""
    },
    {
        "Mosque Name": "Squaw Valley Islamic Settlement",
        "Address": "2684 San Pablo Way",
        "City": "Bradbury",
        "State": "CA",
        "Zip": "91010",
        "Contact": "559-338-9181"
    },
    {
        "Mosque Name": "Brentwood Muslim Community Center",
        "Address": "181 Sand Creek Rd. Suite G",
        "City": "Brentwood",
        "State": "CA",
        "Zip": "94513",
        "Contact": "925-497-2400"
    },
    {
        "Mosque Name": "Masjid Al Rasool",
        "Address": "400 Budd Ave.",
        "City": "Campbell",
        "State": "CA",
        "Zip": "95008",
        "Contact": "408-364-0999"
    },
    {
        "Mosque Name": "Fatima Islamic Society",
        "Address": "7252 Remmet Ave. Suite 101",
        "City": "Canoga Park",
        "State": "CA",
        "Zip": "91303",
        "Contact": "818-347-8889"
    },
    {
        "Mosque Name": "Islamic Center of Santa Cruz",
        "Address": "4401 Capitola Rd. No.2",
        "City": "Capitola",
        "State": "CA",
        "Zip": "95010",
        "Contact": "831-479-8982"
    },
    {
        "Mosque Name": "Imam Ali Islamic Center",
        "Address": "9875 Dublin Canyon Rd.",
        "City": "Castro Valley",
        "State": "CA",
        "Zip": "94552",
        "Contact": "408-401-8188"
    },
    {
        "Mosque Name": "Islamic Center of Castroville",
        "Address": "11080 Cooper St.",
        "City": "Castroville",
        "State": "CA",
        "Zip": "95012",
        "Contact": "831-210-3537"
    },
    {
        "Mosque Name": "Islamic Center of Chico",
        "Address": "1316 Nord Ave",
        "City": "Chico",
        "State": "CA",
        "Zip": "95927",
        "Contact": "530-342-5889"
    },
    {
        "Mosque Name": "Chino Valley Islamic Center",
        "Address": "5565 Daniels St.",
        "City": "Chino",
        "State": "CA",
        "Zip": "91710",
        "Contact": ""
    },
    {
        "Mosque Name": "Chino Musalla",
        "Address": "3873 Schaefer Ave. Unit L",
        "City": "Chino",
        "State": "CA",
        "Zip": "91710",
        "Contact": "09-993-7362"
    },
    {
        "Mosque Name": "Islamic Society of Coachella Valley",
        "Address": "84650 Avenue 49",
        "City": "Coachella",
        "State": "CA",
        "Zip": "92236",
        "Contact": "760-398-7609"
    },
    {
        "Mosque Name": "Al Rashid Islamic Center",
        "Address": "2226 E. Compton",
        "City": "Compton",
        "State": "CA",
        "Zip": "90223",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Cultural Center",
        "Address": "106 N. Alameda Blvd",
        "City": "Compton",
        "State": "CA",
        "Zip": "90221",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Contra Costa ",
        "Address": "2836 Clayton Rd",
        "City": "Concord",
        "State": "CA",
        "Zip": "94519",
        "Contact": "925-825-2533"
    },
    {
        "Mosque Name": "Concord Afghani Mosque",
        "Address": "1545 Monument Blvd. 2Nd Foor",
        "City": "Concord",
        "State": "CA",
        "Zip": "94520",
        "Contact": "925-825-2533"
    },
    {
        "Mosque Name": "Darul Islam Masjid",
        "Address": "2449 Buena Vista Ave.",
        "City": "Concord",
        "State": "CA",
        "Zip": "94597",
        "Contact": "925-798-5558"
    },
    {
        "Mosque Name": "Islamic Center of Corona & Norco",
        "Address": "465 Santana Way",
        "City": "Corona",
        "State": "CA",
        "Zip": "92881",
        "Contact": "909-736-8155"
    },
    {
        "Mosque Name": "Islamic Educational Center of Orange County",
        "Address": "3194-B Airport Loop Dr.",
        "City": "Costa Mesa",
        "State": "CA",
        "Zip": "92626",
        "Contact": "714-432-0060"
    },
    {
        "Mosque Name": "King Fahad Mosque",
        "Address": "11004 Washington Blvd",
        "City": "Culver City",
        "State": "CA",
        "Zip": "90323",
        "Contact": "310-202-0432"
    },
    {
        "Mosque Name": "Islamic Society of West Los Angeles ",
        "Address": "4117 Overland Ave.",
        "City": "Culver City",
        "State": "CA",
        "Zip": "90230",
        "Contact": "310-253-9148"
    },
    {
        "Mosque Name": "Islamic Center of Cypress",
        "Address": "5900 Ball Road",
        "City": "Cypress",
        "State": "CA",
        "Zip": "90630",
        "Contact": "714-220-1786"
    },
    {
        "Mosque Name": "Islamic Center of Davis",
        "Address": "539 Russel Blvd",
        "City": "Davis",
        "State": "CA",
        "Zip": "95616",
        "Contact": "530-756-5216"
    },
    {
        "Mosque Name": "Delano Islamic Society ",
        "Address": "1130 Kensington St.",
        "City": "Delano",
        "State": "CA",
        "Zip": "93215",
        "Contact": "661-725-2966"
    },
    {
        "Mosque Name": "Islamic Center of Mid Cities",
        "Address": "12428 S Benedict Ave",
        "City": "Downey",
        "State": "CA",
        "Zip": "90242",
        "Contact": "562-803-0582"
    },
    {
        "Mosque Name": "Kurdish Community Islamic Center ",
        "Address": "1357 Broadway",
        "City": "El Cajon",
        "State": "CA",
        "Zip": "92021",
        "Contact": "619-442-4435"
    },
    {
        "Mosque Name": "Imperial Valley Islamic Center",
        "Address": "1195 Park Ave.",
        "City": "El Centro",
        "State": "CA",
        "Zip": "92243",
        "Contact": "760-370-5880"
    },
    {
        "Mosque Name": "Islamic Society of El Dorado Hills",
        "Address": "995 Governor Dr. Suite 102",
        "City": "El Dorado Hills",
        "State": "CA",
        "Zip": "95762",
        "Contact": "916-698-2179"
    },
    {
        "Mosque Name": "Elk Grove American Muslim Community Center ",
        "Address": "9011 Elk Grove Florin Rd.",
        "City": "Elk Grove",
        "State": "CA",
        "Zip": "95624",
        "Contact": "916-686-9519"
    },
    {
        "Mosque Name": "Masjid Abu Bakr",
        "Address": "948 62Nd St.",
        "City": "Emeryville",
        "State": "CA",
        "Zip": "94608",
        "Contact": "510-652-7716"
    },
    {
        "Mosque Name": "Islamic Society of North Valley",
        "Address": "751 N. Rose St.",
        "City": "Escondido",
        "State": "CA",
        "Zip": "92027",
        "Contact": "619-770-0021"
    },
    {
        "Mosque Name": "Masjid Alnoor",
        "Address": "902 Union Ave",
        "City": "Fairfield",
        "State": "CA",
        "Zip": "94533",
        "Contact": "707-426-5768"
    },
    {
        "Mosque Name": "Islamic Society of Folsom ",
        "Address": "1143 Sibley St.",
        "City": "Folsom",
        "State": "CA",
        "Zip": "95630",
        "Contact": "916-984-7422"
    },
    {
        "Mosque Name": "Islamic Center of Rialto",
        "Address": "18053 Arrow Blvd",
        "City": "Fontana",
        "State": "CA",
        "Zip": "92335",
        "Contact": "909-357-4773"
    },
    {
        "Mosque Name": "Ar-Rahman Islamic Center",
        "Address": "7641 Sierra Ave.",
        "City": "Fontana",
        "State": "CA",
        "Zip": "92336",
        "Contact": "909-355-4900"
    },
    {
        "Mosque Name": "Al-Medina Education Center",
        "Address": "4673 Thornton Ave. Suite 6",
        "City": "Fremont",
        "State": "CA",
        "Zip": "94536",
        "Contact": "510-258-1986"
    },
    {
        "Mosque Name": "Afghan Islamic Center",
        "Address": "37416 Joseph St.",
        "City": "Fremont",
        "State": "CA",
        "Zip": "94536",
        "Contact": "510-794-1050"
    },
    {
        "Mosque Name": "Islamic Society of East Bay",
        "Address": "33330 Peace Terrace",
        "City": "Fremont",
        "State": "CA",
        "Zip": "94555",
        "Contact": "510-429-4732"
    },
    {
        "Mosque Name": "Ibrahim Khalilullah Islamic Center",
        "Address": "43140 Osgood Rd.",
        "City": "Fremont",
        "State": "CA",
        "Zip": "94539",
        "Contact": "510-651-0122"
    },
    {
        "Mosque Name": "Masjid-E-Mohammedi",
        "Address": "1121 Old Canyon Rd.",
        "City": "Fremont",
        "State": "CA",
        "Zip": "94536",
        "Contact": "510-794-7091"
    },
    {
        "Mosque Name": "Islamic Center of Fremont",
        "Address": "4039 Irvington Ave.",
        "City": "Fremont",
        "State": "CA",
        "Zip": "94538",
        "Contact": "510-661-0352"
    },
    {
        "Mosque Name": "Islamic Center of Central California ",
        "Address": "2111 S. Shaw Ave",
        "City": "Fresno",
        "State": "CA",
        "Zip": "93710",
        "Contact": "559-222-6686"
    },
    {
        "Mosque Name": "Masjid Al-Aqaba",
        "Address": "1528 Kern St.",
        "City": "Fresno",
        "State": "CA",
        "Zip": "93706",
        "Contact": "559-495-1606"
    },
    {
        "Mosque Name": "Islamic Cultural Center of Fresno",
        "Address": "2111 E. Nees Ave.",
        "City": "Fresno",
        "State": "CA",
        "Zip": "93720",
        "Contact": "559-297-9535"
    },
    {
        "Mosque Name": "Badr Islamic Center",
        "Address": "4222 W. Alamos Ave. Suite 102",
        "City": "Fresno",
        "State": "CA",
        "Zip": "93722",
        "Contact": "559-274-3745"
    },
    {
        "Mosque Name": "Fullerton Mosque",
        "Address": "515 W. Valencia Dr. Suite H",
        "City": "Fullerton",
        "State": "CA",
        "Zip": "92832",
        "Contact": "714-525-0135"
    },
    {
        "Mosque Name": "Islamic Society of Orange County",
        "Address": "9752 W. 13th St.",
        "City": "Garden Grove",
        "State": "CA",
        "Zip": "92644",
        "Contact": "714-531-1722"
    },
    {
        "Mosque Name": "Islamic Center of Glendale",
        "Address": "2711 Kennington Dr.",
        "City": "Glendale",
        "State": "CA",
        "Zip": "91206",
        "Contact": "818-402-6204"
    },
    {
        "Mosque Name": "Islamic Center of Northridge ",
        "Address": "11439 Encino Ave",
        "City": "Granada Hills",
        "State": "CA",
        "Zip": "91344",
        "Contact": "818-360-3500"
    },
    {
        "Mosque Name": "Hanford Islamic Center ",
        "Address": "308 S. 10th Ave.",
        "City": "Hanford",
        "State": "CA",
        "Zip": "93230",
        "Contact": "559-583-1448"
    },
    {
        "Mosque Name": "Islamic Center of Hawthorne",
        "Address": "12209 Hawthorne Way",
        "City": "Hawthorne",
        "State": "CA",
        "Zip": "90250",
        "Contact": "310-973-8000"
    },
    {
        "Mosque Name": "Hayward Islamic Center",
        "Address": "26320 Gading Rd.",
        "City": "Hayward",
        "State": "CA",
        "Zip": "94544",
        "Contact": "510-786-2662"
    },
    {
        "Mosque Name": "Masjid Muhajireen",
        "Address": "185 Folsom Ave.",
        "City": "Hayward",
        "State": "CA",
        "Zip": "94544",
        "Contact": "510-786-0313"
    },
    {
        "Mosque Name": "Fatimiyya Islamic Center",
        "Address": "25176 Mission Blvd",
        "City": "Hayward",
        "State": "CA",
        "Zip": "94544",
        "Contact": "510-885-1454"
    },
    {
        "Mosque Name": "Masjid Abu Bakr Al-Siddiq",
        "Address": "29414 Mission Blvd",
        "City": "Hayward",
        "State": "CA",
        "Zip": "94544",
        "Contact": "510-582-2730"
    },
    {
        "Mosque Name": "Islamic Center of Hemet",
        "Address": "44212 Florida Ave.",
        "City": "Hemet",
        "State": "CA",
        "Zip": "92544",
        "Contact": "951-312-0372"
    },
    {
        "Mosque Name": "Jamat-E-Masjidul Islam",
        "Address": "820 Java St.",
        "City": "Inglewood",
        "State": "CA",
        "Zip": "90301",
        "Contact": "310-672-0773"
    },
    {
        "Mosque Name": "Islamic Center of Irvine",
        "Address": "2 Truman St.",
        "City": "Irvine",
        "State": "CA",
        "Zip": "92620",
        "Contact": "949-786-4264"
    },
    {
        "Mosque Name": "Alrahma Islamic Center",
        "Address": "7520 El Cajon Blvd.  Suite 108",
        "City": "La Mesa",
        "State": "CA",
        "Zip": "91941",
        "Contact": "619-697-7873"
    },
    {
        "Mosque Name": "Muslim Community Services",
        "Address": "15077 Imperial Hwy",
        "City": "La Mirada",
        "State": "CA",
        "Zip": "90638",
        "Contact": "562-902-5999"
    },
    {
        "Mosque Name": "Islamic Center of Lakeside ",
        "Address": "10390 Mountain View Ln",
        "City": "Lakeside",
        "State": "CA",
        "Zip": "92040",
        "Contact": "619-596-0020"
    },
    {
        "Mosque Name": "Baitul Mukarram",
        "Address": "12225 Centralia St.",
        "City": "Lakewood",
        "State": "CA",
        "Zip": "90623",
        "Contact": "562-402-7443"
    },
    {
        "Mosque Name": "Islamic Center of North Valley",
        "Address": "42554 4th St. E",
        "City": "Lancaster",
        "State": "CA",
        "Zip": "93535",
        "Contact": "661-726-4749"
    },
    {
        "Mosque Name": "Center For Religious Tolerance ",
        "Address": "7126 Westview Pl",
        "City": "Lemon Grove",
        "State": "CA",
        "Zip": "91945",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Community Initiative ",
        "Address": "65 Trevarno Rd.",
        "City": "Livermore",
        "State": "CA",
        "Zip": "94551",
        "Contact": "925-339-0617"
    },
    {
        "Mosque Name": "Islamic Center of Livermore",
        "Address": "379 A S. Livermore Ave",
        "City": "Livermore",
        "State": "CA",
        "Zip": "94550",
        "Contact": "925-443-1826"
    },
    {
        "Mosque Name": "Lodi Muslim Mosque",
        "Address": "210 Poplar Ave",
        "City": "Lodi",
        "State": "CA",
        "Zip": "95240",
        "Contact": "209-333-9619"
    },
    {
        "Mosque Name": "California Islamic Center",
        "Address": "12828 N Lower Sacramento Rd.",
        "City": "Lodi",
        "State": "CA",
        "Zip": "95242",
        "Contact": "209-333-2946"
    },
    {
        "Mosque Name": "Islamic Community Center of Redlands",
        "Address": "24769 Redlands Blvd  Suite A B C",
        "City": "Loma Linda",
        "State": "CA",
        "Zip": "92354",
        "Contact": "909-915-5920"
    },
    {
        "Mosque Name": "Islamic Center of South Bay ",
        "Address": "28516 Walnut St.",
        "City": "Lomita",
        "State": "CA",
        "Zip": "90717",
        "Contact": "310-534-1363"
    },
    {
        "Mosque Name": "Long Beach Islamic Center",
        "Address": "2340 Long Beach Blvd",
        "City": "Long Beach",
        "State": "CA",
        "Zip": "90806",
        "Contact": "562-989-8100"
    },
    {
        "Mosque Name": "Masjid Al-Shareef",
        "Address": "2104 Orange Ave",
        "City": "Long Beach",
        "State": "CA",
        "Zip": "90806",
        "Contact": "562-591-5320"
    },
    {
        "Mosque Name": "Masjid Ibadullah",
        "Address": "2310 W. Jefferson Blvd",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90018",
        "Contact": "323-734-9940"
    },
    {
        "Mosque Name": "Islamic Center of Southern California",
        "Address": "434 S. Vermont Ave",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90020",
        "Contact": "213-382-9200"
    },
    {
        "Mosque Name": "Bilal Islamic Center",
        "Address": "4016 S. Central Ave",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90011",
        "Contact": "213-233-7274"
    },
    {
        "Mosque Name": "Masjid Al Salam",
        "Address": "2900 Florence Ave",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90043",
        "Contact": "323-758-4033"
    },
    {
        "Mosque Name": "Masjid Abu Bakr As Siddiq",
        "Address": "3611 Crenshaw Blvd",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90016",
        "Contact": "323-732-4249"
    },
    {
        "Mosque Name": "Dar Al Quran",
        "Address": "10887 Venice Blvd  2Nd Fl.",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90034",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Umar Ibn Khattab",
        "Address": "1025 Exposition Blvd",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90007",
        "Contact": "213-733-9838"
    },
    {
        "Mosque Name": "Iranian American Muslim Association",
        "Address": "3376 Motor Ave.",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90034",
        "Contact": "310-202-8181"
    },
    {
        "Mosque Name": "Masjid Bilal Ibn Rabah",
        "Address": "5450 Crenshaw Blvd",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90043",
        "Contact": "323-291-0105"
    },
    {
        "Mosque Name": "Islamic Center of Watts ",
        "Address": "11211 S. Central Ave",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90059",
        "Contact": "323-567-7114"
    },
    {
        "Mosque Name": "Al-Quddus Mosque",
        "Address": "5524 West Pico Blvd",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90019",
        "Contact": "323-930-1345"
    },
    {
        "Mosque Name": "Masjid Al Mumin",
        "Address": "1635 S. St. Andrews Place",
        "City": "Los Angeles",
        "State": "CA",
        "Zip": "90019",
        "Contact": ""
    },
    {
        "Mosque Name": "Madera Islamic Center",
        "Address": "16643 Road 26",
        "City": "Madera",
        "State": "CA",
        "Zip": "93638",
        "Contact": "209-725-8167"
    },
    {
        "Mosque Name": "Manteca Islamic Center",
        "Address": "415 N. Main St.  Suite 4B",
        "City": "Manteca",
        "State": "CA",
        "Zip": "95336",
        "Contact": ""
    },
    {
        "Mosque Name": "Bab-Ul-Ilm Islamic Center",
        "Address": "5950 Heliotrope Cir",
        "City": "Maywood",
        "State": "CA",
        "Zip": "90270",
        "Contact": "323-771-6339"
    },
    {
        "Mosque Name": "Islamic Center of Merced",
        "Address": "2322 Ashby Rd",
        "City": "Merced",
        "State": "CA",
        "Zip": "95348",
        "Contact": "209-725-8167"
    },
    {
        "Mosque Name": "Islamic Center of Mill Valley",
        "Address": "62 Shell Rd",
        "City": "Mill Valley",
        "State": "CA",
        "Zip": "94941",
        "Contact": "415-383-0617"
    },
    {
        "Mosque Name": "Islamic Center of Zahra",
        "Address": "473 Los Coches St.",
        "City": "Milpitas",
        "State": "CA",
        "Zip": "95035",
        "Contact": "408-946-4464"
    },
    {
        "Mosque Name": "Dar Us Salam Masjid",
        "Address": "90 Dempsey Rd",
        "City": "Milpitas",
        "State": "CA",
        "Zip": "95050",
        "Contact": "408-719-9010"
    },
    {
        "Mosque Name": "Orange County Islamic Foundation",
        "Address": "23581 Madero Dr.",
        "City": "Mission Viejo",
        "State": "CA",
        "Zip": "92691",
        "Contact": "949-595-0480"
    },
    {
        "Mosque Name": "Islamic Center of Modesto",
        "Address": "1445 N. Carpenter Rd",
        "City": "Modesto",
        "State": "CA",
        "Zip": "95353",
        "Contact": "209-576-8149"
    },
    {
        "Mosque Name": "Masjid Qurtabah",
        "Address": "1121 E. Huntington Dr",
        "City": "Monrovia",
        "State": "CA",
        "Zip": "91016",
        "Contact": "626-305-0077"
    },
    {
        "Mosque Name": "Al Nur Islamic Center",
        "Address": "4959 Palo Verde St.  Suite 205-C",
        "City": "Montclair",
        "State": "CA",
        "Zip": "91763",
        "Contact": "626-378-8156"
    },
    {
        "Mosque Name": "Masjid Alrahma",
        "Address": "12125 Day St.  Suite R-101",
        "City": "Moreno Valley",
        "State": "CA",
        "Zip": "92557",
        "Contact": "951-286-0983"
    },
    {
        "Mosque Name": "Islamic Development Center",
        "Address": "24436 Webster Ave.",
        "City": "Moreno Valley",
        "State": "CA",
        "Zip": "92557",
        "Contact": ""
    },
    {
        "Mosque Name": "Peninsula Muslim Association ",
        "Address": "361 Villa St.",
        "City": "Mountain View",
        "State": "CA",
        "Zip": "94041",
        "Contact": ""
    },
    {
        "Mosque Name": "American Muslim Society ",
        "Address": "3149 California Blvd Suite A",
        "City": "Napa",
        "State": "CA",
        "Zip": "94558",
        "Contact": "707-259-1760"
    },
    {
        "Mosque Name": "Islamic Society of Solano County",
        "Address": "P.O. Box 6153",
        "City": "Napa",
        "State": "CA",
        "Zip": "94581",
        "Contact": "707-294-9521"
    },
    {
        "Mosque Name": "Islamic Center of Conejo Valley",
        "Address": "2700 Borchard Rd",
        "City": "Newbury Park",
        "State": "CA",
        "Zip": "91320",
        "Contact": "805-499-2106"
    },
    {
        "Mosque Name": "Islamic Center of North Hollywood",
        "Address": "6140 Vineland Blvd",
        "City": "North Hollywood",
        "State": "CA",
        "Zip": "91601",
        "Contact": "818-980-9325"
    },
    {
        "Mosque Name": "Islamic Center of Northeridge ",
        "Address": "8424 Tampa Ave",
        "City": "Northridge",
        "State": "CA",
        "Zip": "91324",
        "Contact": "818-360-3500"
    },
    {
        "Mosque Name": "Madinah Islamic Center",
        "Address": "12500 Firestone Blvd",
        "City": "Norwalk",
        "State": "CA",
        "Zip": "90650",
        "Contact": "562-676-7351"
    },
    {
        "Mosque Name": "Masjid As-Salam",
        "Address": "1005 7th St",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94607",
        "Contact": ""
    },
    {
        "Mosque Name": "Oakland Islamic Center",
        "Address": "515  31St St",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94609",
        "Contact": "510-654-4306"
    },
    {
        "Mosque Name": "Masjid Al Islam",
        "Address": "8210 Macarthur",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94605",
        "Contact": "510-638-9541"
    },
    {
        "Mosque Name": "Jammatus Salam",
        "Address": "1515 Macarthur Blvd",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94602",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Waritheen",
        "Address": "1652 47th Ave",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94601",
        "Contact": "510-436-7755"
    },
    {
        "Mosque Name": "Islamic Cultural Center of Northern California",
        "Address": "1433 Madison St",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94601",
        "Contact": "510-832-7600"
    },
    {
        "Mosque Name": "Masjid Al-Iman",
        "Address": "5625 Shattuck Ave.",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94609",
        "Contact": "510-654-7542"
    },
    {
        "Mosque Name": "Lighthouse Mosque",
        "Address": "4606 Martin Luther King Way",
        "City": "Oakland",
        "State": "CA",
        "Zip": "94609",
        "Contact": ""
    },
    {
        "Mosque Name": "Syed Jamaluddin Afgahni Islamic Center",
        "Address": "546 W. Ketella",
        "City": "Orange",
        "State": "CA",
        "Zip": "92861",
        "Contact": "714-288-9655"
    },
    {
        "Mosque Name": "Islamic Jafaria Association",
        "Address": "8149 Hazel Ave.",
        "City": "Orangevale",
        "State": "CA",
        "Zip": "95662",
        "Contact": "916-358-9395"
    },
    {
        "Mosque Name": "Islamic Center of Ventura County",
        "Address": "525 South A St.",
        "City": "Oxnard",
        "State": "CA",
        "Zip": "93030",
        "Contact": "805-486-8886"
    },
    {
        "Mosque Name": "American Islamic Institute of Antelope Valley ",
        "Address": "1125 E. Palmdale Blvd",
        "City": "Palmdale",
        "State": "CA",
        "Zip": "93550",
        "Contact": "661-224-1111"
    },
    {
        "Mosque Name": "Jamil Islamic Center",
        "Address": "427 S. California Ave.",
        "City": "Palo Alto",
        "State": "CA",
        "Zip": "94306",
        "Contact": "650-321-1819"
    },
    {
        "Mosque Name": "Practical Islamic Center",
        "Address": "27957 Ridge Bluff Ct.",
        "City": "Palos Verdes Estates",
        "State": "CA",
        "Zip": "90275",
        "Contact": "213-544-9618"
    },
    {
        "Mosque Name": "Islamic Center of Van Nuys ",
        "Address": "8741 Van Nuys Suite 209",
        "City": "Panorama City",
        "State": "CA",
        "Zip": "91402",
        "Contact": "818-894-3025"
    },
    {
        "Mosque Name": "Perris Islamic Center",
        "Address": "3895 N. Perris Blvd",
        "City": "Perris",
        "State": "CA",
        "Zip": "92571",
        "Contact": "951-443-3929"
    },
    {
        "Mosque Name": "Islamic Center of Petaluma",
        "Address": "222 Bassett St.",
        "City": "Petaluma",
        "State": "CA",
        "Zip": "94952",
        "Contact": "707-773-1576"
    },
    {
        "Mosque Name": "Shia Ithna-Asheri Islamic Jamaat ",
        "Address": "7925 Serapis Ave",
        "City": "Pico Rivera",
        "State": "CA",
        "Zip": "90660",
        "Contact": "562-942-7442"
    },
    {
        "Mosque Name": "Pittsburg Islamic Center",
        "Address": "300 E. 10th St.",
        "City": "Pittsburg",
        "State": "CA",
        "Zip": "94565",
        "Contact": "925-473-0384"
    },
    {
        "Mosque Name": "Islamic Center of Pleasanton-Dublin",
        "Address": "1279 Quarry Ln",
        "City": "Pleasanton",
        "State": "CA",
        "Zip": "94566",
        "Contact": "510-673-2369"
    },
    {
        "Mosque Name": "Muslim Community Center of East Bay",
        "Address": "5724 W. Las Positas Blvd Suite 300",
        "City": "Pleasanton",
        "State": "CA",
        "Zip": "94588",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Inland Valley",
        "Address": "1555 E. 3Rd St.",
        "City": "Pomona",
        "State": "CA",
        "Zip": "91766",
        "Contact": "909-868-8811"
    },
    {
        "Mosque Name": "Cham American Muslim Community ",
        "Address": "805 S. Garey Ave.",
        "City": "Pomona",
        "State": "CA",
        "Zip": "91766",
        "Contact": "909-865-7833"
    },
    {
        "Mosque Name": "Islamic Center of Claremont",
        "Address": "3641 N. Garey Ave",
        "City": "Pomona",
        "State": "CA",
        "Zip": "91767",
        "Contact": "909-593-1865"
    },
    {
        "Mosque Name": "Zainabia Islamic Society",
        "Address": "575 N. Towne Ave.",
        "City": "Pomona",
        "State": "CA",
        "Zip": "91767",
        "Contact": "909-981-5492"
    },
    {
        "Mosque Name": "Ahlul-Byet Mosque",
        "Address": "2155 Murchison Ave.",
        "City": "Pomona",
        "State": "CA",
        "Zip": "91768",
        "Contact": "909-622-9158"
    },
    {
        "Mosque Name": "Masjid Porterville",
        "Address": "289 N. 3Rd St.",
        "City": "Porterville",
        "State": "CA",
        "Zip": "93257",
        "Contact": "559-783-2483"
    },
    {
        "Mosque Name": "Islamic Center of North County",
        "Address": "13495 Poway Rd.",
        "City": "Poway",
        "State": "CA",
        "Zip": "92064",
        "Contact": "858-513-2733"
    },
    {
        "Mosque Name": "Islamic Society of Rancho Cordova",
        "Address": "3333 Sunrise Blvd Suite A",
        "City": "Rancho Cordova",
        "State": "CA",
        "Zip": "95742",
        "Contact": "916-769-3570"
    },
    {
        "Mosque Name": "Islamic Center of Inland Empire",
        "Address": "9212 Base Line Rd.",
        "City": "Rancho Cucamonga",
        "State": "CA",
        "Zip": "91701",
        "Contact": "909-944-1836"
    },
    {
        "Mosque Name": "Islamic Center of Redding",
        "Address": "12319 Lake Blvd",
        "City": "Redding",
        "State": "CA",
        "Zip": "96003",
        "Contact": "530-243-4137"
    },
    {
        "Mosque Name": "Islamic Society of California",
        "Address": "627 Brookside",
        "City": "Redlands",
        "State": "CA",
        "Zip": "92373",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Redlands",
        "Address": "11210 Alabama St.",
        "City": "Redlands",
        "State": "CA",
        "Zip": "92373",
        "Contact": "909-792-0882"
    },
    {
        "Mosque Name": "Jerrahi Mosque",
        "Address": "3644 Hoover St.",
        "City": "Redwood City",
        "State": "CA",
        "Zip": "94063",
        "Contact": "650-364-1699"
    },
    {
        "Mosque Name": "Islamic Center of Reseda",
        "Address": "18206 Victory Blvd",
        "City": "Reseda",
        "State": "CA",
        "Zip": "91335",
        "Contact": "818-996-9116"
    },
    {
        "Mosque Name": "Maktab Tarighat Oveyssi Shahmaghsoudi",
        "Address": "18011 Sherman Way",
        "City": "Reseda",
        "State": "CA",
        "Zip": "91335",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Noor",
        "Address": "1330 Cutting Blvd",
        "City": "Richmond",
        "State": "CA",
        "Zip": "94801",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of West Contra Costa County",
        "Address": "1110 36th St",
        "City": "Richmond",
        "State": "CA",
        "Zip": "94804",
        "Contact": "510-236-8130"
    },
    {
        "Mosque Name": "Islamic Center of Riverside",
        "Address": "1038 W. Linden St",
        "City": "Riverside",
        "State": "CA",
        "Zip": "92507",
        "Contact": "951-684-5466"
    },
    {
        "Mosque Name": "Islamic Center of San Gabriel Valley",
        "Address": "19164 E. Walnut Dr.",
        "City": "Rowland Heights",
        "State": "CA",
        "Zip": "91748",
        "Contact": "626-964-3596"
    },
    {
        "Mosque Name": "Islamic Center of Sacramento",
        "Address": "2011 4th St.",
        "City": "Sacramento",
        "State": "CA",
        "Zip": "95818",
        "Contact": "916-444-6323"
    },
    {
        "Mosque Name": "Muslim Mosque Assocation ",
        "Address": "411 V St.",
        "City": "Sacramento",
        "State": "CA",
        "Zip": "95818",
        "Contact": "916-443-5167"
    },
    {
        "Mosque Name": "Sacramento Area League of Associated Muslims ",
        "Address": "4541 College Oak Dr.",
        "City": "Sacramento",
        "State": "CA",
        "Zip": "95841",
        "Contact": "916-979-1933"
    },
    {
        "Mosque Name": "Darul Uloom Al-Islamia ",
        "Address": "7285 25th St",
        "City": "Sacramento",
        "State": "CA",
        "Zip": "95822",
        "Contact": "916-424-4770"
    },
    {
        "Mosque Name": "Masjid As-Sabur",
        "Address": "4920 15th Ave.",
        "City": "Sacramento",
        "State": "CA",
        "Zip": "95820",
        "Contact": "916-451-7744"
    },
    {
        "Mosque Name": "Masjid Ibrahim",
        "Address": "3449 Rio Linda Blvd",
        "City": "Sacramento",
        "State": "CA",
        "Zip": "95838",
        "Contact": "916-925-4651"
    },
    {
        "Mosque Name": "Masjid Annur",
        "Address": "6990 65th St.",
        "City": "Sacramento",
        "State": "CA",
        "Zip": "95823",
        "Contact": "916-392-6687"
    },
    {
        "Mosque Name": "Islamic Community of Salinas",
        "Address": "333 Capitol St.",
        "City": "Salinas",
        "State": "CA",
        "Zip": "93901",
        "Contact": "831-422-0900"
    },
    {
        "Mosque Name": "Nasantar Muslim California",
        "Address": "1018 S. Lincoln Ave.",
        "City": "San Bernardino",
        "State": "CA",
        "Zip": "92408",
        "Contact": "909-239-3524"
    },
    {
        "Mosque Name": "Dar Al Uloom Al Islamiyah of America",
        "Address": "2012 Mallory St.",
        "City": "San Bernardino",
        "State": "CA",
        "Zip": "92405",
        "Contact": "909-880-0201"
    },
    {
        "Mosque Name": "Makki Masjid",
        "Address": "1959 Macy St",
        "City": "San Bernardino",
        "State": "CA",
        "Zip": "92411",
        "Contact": "951-285-0052"
    },
    {
        "Mosque Name": "Al-Madinah Academy",
        "Address": "714 Fourth Ave.",
        "City": "San Bruno",
        "State": "CA",
        "Zip": "74030",
        "Contact": "650-742-0496"
    },
    {
        "Mosque Name": "Islamic Center of Mira Mesa ",
        "Address": "9235 Activity Rd. Suite 112",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92126",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of North County",
        "Address": "7151 Primrose Ln",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92129",
        "Contact": "619-770-0021"
    },
    {
        "Mosque Name": "Masjid Al Noor",
        "Address": "3872  50th St",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92105",
        "Contact": "619-282-0037"
    },
    {
        "Mosque Name": "Ar Rribat Islamic Center",
        "Address": "7173 Saranac St. No. 204",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92115",
        "Contact": "619-589-6200"
    },
    {
        "Mosque Name": "Masjid Al-Ansar",
        "Address": "4014 Winona Ave.",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92105",
        "Contact": "619-282-4407"
    },
    {
        "Mosque Name": "Masjid E Tauhid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Afghan Community Islamic Center ",
        "Address": "3333 Sandrock Rd.",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92123",
        "Contact": "858-560-9191"
    },
    {
        "Mosque Name": "Islamic Education Center of San Diego",
        "Address": "8977 Activity Rd. Suite 103",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92126",
        "Contact": "858-689-8888"
    },
    {
        "Mosque Name": "Masjidul Taqwa",
        "Address": "2575 Imperial Ave",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92102",
        "Contact": "619-239-6738"
    },
    {
        "Mosque Name": "Muslim Community Center of Greater San Diego",
        "Address": "14698 Via Fiesta",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92127",
        "Contact": "858-756-5100"
    },
    {
        "Mosque Name": "Islamic Center of San Diego",
        "Address": "7050 Eckstorm Ave",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92111",
        "Contact": "858-278-5240"
    },
    {
        "Mosque Name": "Mas-San Diego",
        "Address": "11347 Zapata Ave.",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92126",
        "Contact": "858-603-9221"
    },
    {
        "Mosque Name": "Logan Islamic Community Center",
        "Address": "5077 Logan Ave.",
        "City": "San Diego",
        "State": "CA",
        "Zip": "92113",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of San Francisco ",
        "Address": "20 Jones St. 3Rd Floor",
        "City": "San Francisco",
        "State": "CA",
        "Zip": "94102",
        "Contact": "415-863-7997"
    },
    {
        "Mosque Name": "Al-Sabeel Masjid",
        "Address": "48 Golden Gate Ave.",
        "City": "San Francisco",
        "State": "CA",
        "Zip": "94102",
        "Contact": "415-292-9709"
    },
    {
        "Mosque Name": "Masjid Al Tawheed",
        "Address": "1227 Sutter St.",
        "City": "San Francisco",
        "State": "CA",
        "Zip": "94109",
        "Contact": "415-776-8088"
    },
    {
        "Mosque Name": "Bayview Islamic Unity Center",
        "Address": "1411 Thomas Ave.",
        "City": "San Francisco",
        "State": "CA",
        "Zip": "94124",
        "Contact": "415-822-6400"
    },
    {
        "Mosque Name": "Islamic Center of San Francisco",
        "Address": "400 Crescent Ave.",
        "City": "San Francisco",
        "State": "CA",
        "Zip": "94110",
        "Contact": "415-641-9596"
    },
    {
        "Mosque Name": "Muslim Community Center",
        "Address": "850 Divisadro St.",
        "City": "San Francisco",
        "State": "CA",
        "Zip": "94117",
        "Contact": "415-583-9397"
    },
    {
        "Mosque Name": "Masjid Gibrael",
        "Address": "1301 E. Las Tunas Dr.",
        "City": "San Gabriel",
        "State": "CA",
        "Zip": "91776",
        "Contact": "626-285-2573"
    },
    {
        "Mosque Name": "South Bay Islamic Association (Sbia) ",
        "Address": "325 N. Third St",
        "City": "San Jose",
        "State": "CA",
        "Zip": "95112",
        "Contact": "408-947-9389"
    },
    {
        "Mosque Name": "Shia Association of Bay Area ",
        "Address": "4415 Fortran Ct.",
        "City": "San Jose",
        "State": "CA",
        "Zip": "95134",
        "Contact": "408-946-5700"
    },
    {
        "Mosque Name": "Islamic Community of Bay Area Bosniaks",
        "Address": "1445 Koll Circle Suite 103",
        "City": "San Jose",
        "State": "CA",
        "Zip": "95112",
        "Contact": "408-441-0540"
    },
    {
        "Mosque Name": "Blossom Valley Muslim Community Center",
        "Address": "5885 Santa Teresa Blvd Suite 113",
        "City": "San Jose",
        "State": "CA",
        "Zip": "95123",
        "Contact": "408-362-0903"
    },
    {
        "Mosque Name": "South Bay Islamic Association ",
        "Address": "2486 Ruby Ave.",
        "City": "San Jose",
        "State": "CA",
        "Zip": "95148",
        "Contact": "408-239-6668"
    },
    {
        "Mosque Name": "Masjid Al Rasool",
        "Address": "552 S. Bascan Ave.",
        "City": "San Jose",
        "State": "CA",
        "Zip": "95128",
        "Contact": "408-364-0666"
    },
    {
        "Mosque Name": "Islamic Society of The Central Coast",
        "Address": "679 Santa Rosa St.",
        "City": "San Luis Obispo",
        "State": "CA",
        "Zip": "93401",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Central Coast ",
        "Address": "1136 Walnut St.",
        "City": "San Luis Obispo",
        "State": "CA",
        "Zip": "93401",
        "Contact": "805-787-0383"
    },
    {
        "Mosque Name": "South Valley Islamic Community",
        "Address": "14770 Columbet Ave.",
        "City": "San Martin",
        "State": "CA",
        "Zip": "95046",
        "Contact": "408-535-0112"
    },
    {
        "Mosque Name": "Masjid Al Haq",
        "Address": "228 N. Ellsworth St.",
        "City": "San Mateo",
        "State": "CA",
        "Zip": "94401",
        "Contact": "650-678-7893"
    },
    {
        "Mosque Name": "San Ramon Valley Islamic Center",
        "Address": "2232 B Camino Ramon",
        "City": "San Ramon",
        "State": "CA",
        "Zip": "94583",
        "Contact": "925-866-7088"
    },
    {
        "Mosque Name": "Masjid Ali Murtada",
        "Address": "1800 E. Garry Ave. Suite 101",
        "City": "Santa Ana",
        "State": "CA",
        "Zip": "92705",
        "Contact": "949-394-6090"
    },
    {
        "Mosque Name": "Masjid Al-Hedaye and Kavkaz Cultural Center",
        "Address": "5109 W. 5th St.",
        "City": "Santa Ana",
        "State": "CA",
        "Zip": "92703",
        "Contact": "714-554-8190"
    },
    {
        "Mosque Name": "Indo Chinese Refugee Association ",
        "Address": "1001 Grant St. Suite No. B2",
        "City": "Santa Ana",
        "State": "CA",
        "Zip": "92701",
        "Contact": "714-285-1494"
    },
    {
        "Mosque Name": "Imamia Education Center",
        "Address": "2110 E 1St St. Suite 120",
        "City": "Santa Ana",
        "State": "CA",
        "Zip": "92705",
        "Contact": "714-524-5580"
    },
    {
        "Mosque Name": "Islamic Society of Santa Barbara",
        "Address": "650 Ward Dr. Suite H",
        "City": "Santa Barbara",
        "State": "CA",
        "Zip": "93111",
        "Contact": "805-681-1333"
    },
    {
        "Mosque Name": "Muslim Community Association ",
        "Address": "1755 Catherine St.",
        "City": "Santa Clara",
        "State": "CA",
        "Zip": "95050",
        "Contact": "408-727-7277"
    },
    {
        "Mosque Name": "Mas Educational Center",
        "Address": "2116 Walsh Ave. Suite B",
        "City": "Santa Clara",
        "State": "CA",
        "Zip": "95050",
        "Contact": "408-657-8627"
    },
    {
        "Mosque Name": "Muslim Community Association of San Fran and Bay ",
        "Address": "3003 Scott Blvd.",
        "City": "Santa Clara",
        "State": "CA",
        "Zip": "95050",
        "Contact": "408-970-0647"
    },
    {
        "Mosque Name": "Unity Center of Santa Clarita",
        "Address": "24352 Walnut St.",
        "City": "Santa Clarita",
        "State": "CA",
        "Zip": "91321",
        "Contact": "661-259-9008"
    },
    {
        "Mosque Name": "Islamic Center of Santa Clarita Valley",
        "Address": "26477 Ruether Ave",
        "City": "Santa Clarita",
        "State": "CA",
        "Zip": "91355",
        "Contact": "661-295-5626"
    },
    {
        "Mosque Name": "Islamic Center of Santa Maria",
        "Address": "325 E. Plaza Dr. Suite 5",
        "City": "Santa Maria",
        "State": "CA",
        "Zip": "93454",
        "Contact": "805-352-1922"
    },
    {
        "Mosque Name": "Islamic Society of Santa Rosa",
        "Address": "545 Mendocino Ave.",
        "City": "Santa Rosa",
        "State": "CA",
        "Zip": "95401",
        "Contact": "707-525-1144"
    },
    {
        "Mosque Name": "West Valley Muslim Association",
        "Address": "12370 Saratoga Sunnyvale Rd.",
        "City": "Saratoga",
        "State": "CA",
        "Zip": "95070",
        "Contact": "408-805-4560"
    },
    {
        "Mosque Name": "Islamic Society of Monterey County ",
        "Address": "405 Elm Ave.",
        "City": "Seaside",
        "State": "CA",
        "Zip": "93955",
        "Contact": "831-899-2969"
    },
    {
        "Mosque Name": "Islamic Center of Simi Valley ",
        "Address": "1756 Erringer Rd. Suite 110",
        "City": "Simi Valley",
        "State": "CA",
        "Zip": "93065",
        "Contact": ""
    },
    {
        "Mosque Name": "Al Zahra Islamic Center",
        "Address": "8152 Seville Ave",
        "City": "South Gate",
        "State": "CA",
        "Zip": "90280",
        "Contact": "323-835-0633"
    },
    {
        "Mosque Name": "Fiji Jam Atul Islam of America ",
        "Address": "373 Alta Vista Dr.",
        "City": "South San Francisco",
        "State": "CA",
        "Zip": "94080",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Emaan",
        "Address": "4212 N. Pershing Ave. Suite B21",
        "City": "Stockton",
        "State": "CA",
        "Zip": "95207",
        "Contact": "209-688-2594"
    },
    {
        "Mosque Name": "Islamic Center of Stockton",
        "Address": "1130 S. Pilgrim St.",
        "City": "Stockton",
        "State": "CA",
        "Zip": "95205",
        "Contact": "209-466-9101"
    },
    {
        "Mosque Name": "Masjid As Sadiq",
        "Address": "2065 E. 8th St.",
        "City": "Stockton",
        "State": "CA",
        "Zip": "95206",
        "Contact": "209-941-4915"
    },
    {
        "Mosque Name": "Stockton Student Mosque",
        "Address": "1219 El Monte St.",
        "City": "Stockton",
        "State": "CA",
        "Zip": "95207",
        "Contact": "209-474-3184"
    },
    {
        "Mosque Name": "Taha Education ",
        "Address": "1260 Persian Dr. Suite A1",
        "City": "Sunnyvale",
        "State": "CA",
        "Zip": "94089",
        "Contact": "408-274-5514"
    },
    {
        "Mosque Name": "Islamic Center of Temecula Valley",
        "Address": "42188 Rio Nedo Suite A",
        "City": "Temecula",
        "State": "CA",
        "Zip": "92590",
        "Contact": "951-296-6601"
    },
    {
        "Mosque Name": "Darul Ulum",
        "Address": "18093 Prairie Ave. No.F",
        "City": "Torrance",
        "State": "CA",
        "Zip": "90504",
        "Contact": "310-540-5740"
    },
    {
        "Mosque Name": "Momin Lodge",
        "Address": "1918 W. Artesia Blvd",
        "City": "Torrance",
        "State": "CA",
        "Zip": "90504",
        "Contact": "310-532-7755"
    },
    {
        "Mosque Name": "Tracy Islamic Center",
        "Address": "11299 W. Larch Rd.",
        "City": "Tracy",
        "State": "CA",
        "Zip": "95304",
        "Contact": "209-830-6286"
    },
    {
        "Mosque Name": "Islamic Society of Tracy ",
        "Address": "350 N. Corral Hollow Rd.",
        "City": "Tracy",
        "State": "CA",
        "Zip": "95376",
        "Contact": "209-839-2275"
    },
    {
        "Mosque Name": "Jafaria Islamic Society",
        "Address": "642 South B St.",
        "City": "Tustin",
        "State": "CA",
        "Zip": "92780",
        "Contact": "323-560-8002"
    },
    {
        "Mosque Name": "Darul Falah",
        "Address": "14712 Bentley Cir",
        "City": "Tustin",
        "State": "CA",
        "Zip": "92780",
        "Contact": "949-466-2740"
    },
    {
        "Mosque Name": "Islamic Center of Vacaville",
        "Address": "131 Bush St.",
        "City": "Vacaville",
        "State": "CA",
        "Zip": "95688",
        "Contact": "707-446-6281"
    },
    {
        "Mosque Name": "Islamic Center of Vallejo",
        "Address": "727 Sonoma Blvd",
        "City": "Vallejo",
        "State": "CA",
        "Zip": "94590",
        "Contact": "707-558-8229"
    },
    {
        "Mosque Name": "High Desert Islamic Society",
        "Address": "16793 Merrill St.",
        "City": "Victorville",
        "State": "CA",
        "Zip": "92392",
        "Contact": "760-245-6656"
    },
    {
        "Mosque Name": "Masjid Visalia",
        "Address": "1317 S. Divisadero St.",
        "City": "Visalia",
        "State": "CA",
        "Zip": "93277",
        "Contact": "559-732-9973"
    },
    {
        "Mosque Name": "Islamic Movement of North America ",
        "Address": "925 Anza Ave",
        "City": "Vista",
        "State": "CA",
        "Zip": "92084",
        "Contact": "760-954-9544"
    },
    {
        "Mosque Name": "Islamic Education Center ",
        "Address": "659 Brea Canyon Rd. Suite 2-3",
        "City": "Walnut",
        "State": "CA",
        "Zip": "91789",
        "Contact": "909-594-1310"
    },
    {
        "Mosque Name": "Hejrat Foundation ",
        "Address": "1505 W. Garvey Ave. N",
        "City": "West Covina",
        "State": "CA",
        "Zip": "91790",
        "Contact": "626-480-7878"
    },
    {
        "Mosque Name": "Jamia Sheikhul Islam Hifiz Ul Quran",
        "Address": "217 5th St.",
        "City": "West Sacramento",
        "State": "CA",
        "Zip": "95605",
        "Contact": ""
    },
    {
        "Mosque Name": "West Sacramento Islamic Center",
        "Address": "700 Glide Ave.",
        "City": "West Sacramento",
        "State": "CA",
        "Zip": "95691",
        "Contact": "916-372-9031"
    },
    {
        "Mosque Name": "Bosphorus Mosque",
        "Address": "13701 Beach Blvd",
        "City": "Westminster",
        "State": "CA",
        "Zip": "92683",
        "Contact": "714-927-8062"
    },
    {
        "Mosque Name": "Islamic Center of Whittier",
        "Address": "6706 S. Friends Ave.  2Nd Fl Ballroom",
        "City": "Whittier",
        "State": "CA",
        "Zip": "90601",
        "Contact": "626-818-0855"
    },
    {
        "Mosque Name": "Muslim Mosque and Islamic Center of Woodland",
        "Address": "1023 North St.",
        "City": "Woodland",
        "State": "CA",
        "Zip": "95695",
        "Contact": "530-666-4706"
    },
    {
        "Mosque Name": "Islamic Center of Yorba Linda",
        "Address": "22605 La Palma No.501",
        "City": "Yorba Linda",
        "State": "CA",
        "Zip": "92887",
        "Contact": "714-692-6900"
    },
    {
        "Mosque Name": "Islamic Center of Yuba City",
        "Address": "3636 Tierra Buena Rd",
        "City": "Yuba City",
        "State": "CA",
        "Zip": "95992",
        "Contact": "530-674-9587"
    },
    {
        "Mosque Name": "Masjid Al-Salaam",
        "Address": "16742 E. Iliff Ave.",
        "City": "Aurora",
        "State": "CO",
        "Zip": "80013",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Boulder",
        "Address": "1530 Culver St",
        "City": "Boulder",
        "State": "CO",
        "Zip": "80303",
        "Contact": "303-444-6345"
    },
    {
        "Mosque Name": "Islamic Society of Colorado Springs ",
        "Address": "2125 N. Chestnut St.",
        "City": "Colorado Springs",
        "State": "CO",
        "Zip": "80907",
        "Contact": "719-632-3364"
    },
    {
        "Mosque Name": "Rocky Mountain Islamic Center",
        "Address": "8054 W. Jewel Ave.",
        "City": "Denver",
        "State": "CO",
        "Zip": "80232",
        "Contact": "720-989-1463"
    },
    {
        "Mosque Name": "Deven Islamic Society ",
        "Address": "2124 S. Birch",
        "City": "Denver",
        "State": "CO",
        "Zip": "80222",
        "Contact": "303-759-1985"
    },
    {
        "Mosque Name": "Colorodo Muslim Society ",
        "Address": "2071 S. Parker Rd",
        "City": "Denver",
        "State": "CO",
        "Zip": "80231",
        "Contact": "303-696-9800"
    },
    {
        "Mosque Name": "Masjid Ahl-Al-Bait",
        "Address": "201 S. Lowell Blvd",
        "City": "Denver",
        "State": "CO",
        "Zip": "80219",
        "Contact": "303-936-5855"
    },
    {
        "Mosque Name": "Colorado Dawah ",
        "Address": "2958 Downing St.",
        "City": "Denver",
        "State": "CO",
        "Zip": "80205",
        "Contact": "303-293-0047"
    },
    {
        "Mosque Name": "Northeast Denver Islamic Center ",
        "Address": "2505 E. Bruce Randolph Av.E",
        "City": "Denver",
        "State": "CO",
        "Zip": "80205",
        "Contact": ""
    },
    {
        "Mosque Name": "Divide Islamic Center",
        "Address": "159 Valley Rd.",
        "City": "Divide",
        "State": "CO",
        "Zip": "80814",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Fort Collins",
        "Address": "900 Peterson St.",
        "City": "Fort Collins",
        "State": "CO",
        "Zip": "80524",
        "Contact": "970-493-2428"
    },
    {
        "Mosque Name": "Islamic Center of Golden",
        "Address": "619 19th St.",
        "City": "Golden",
        "State": "CO",
        "Zip": "80401",
        "Contact": "303-279-0589"
    },
    {
        "Mosque Name": "Islamic Center of Greeley",
        "Address": "1600 8th Ave",
        "City": "Greeley",
        "State": "CO",
        "Zip": "80631",
        "Contact": "970-352-4713"
    },
    {
        "Mosque Name": "South Denver Islamic Center ",
        "Address": "7007 S Clinton St",
        "City": "Greenwood Village",
        "State": "CO",
        "Zip": "80112",
        "Contact": "720-772-7342"
    },
    {
        "Mosque Name": "Metropolitan Denver North Islamic Center ",
        "Address": "1141 Irma Dr.",
        "City": "Northglenn",
        "State": "CO",
        "Zip": "80233",
        "Contact": "303-920-0252"
    },
    {
        "Mosque Name": "Pueblo Islamic Society",
        "Address": "32 Martha Ln",
        "City": "Pueblo",
        "State": "CO",
        "Zip": "81001",
        "Contact": ""
    },
    {
        "Mosque Name": "Bosnian Educational And Cultural Center",
        "Address": "7280 Irving St. B206",
        "City": "Westminister",
        "State": "CO",
        "Zip": "80030",
        "Contact": "303-283-6004"
    },
    {
        "Mosque Name": "Farmington Valley American Muslim Center Inc",
        "Address": "35 Harris Road",
        "City": "Avon",
        "State": "CT",
        "Zip": "6001",
        "Contact": "860-673-9630"
    },
    {
        "Mosque Name": "Islamic Association of Greater Hartford",
        "Address": "1781 Wilbur Cross Hwy.",
        "City": "Berlin",
        "State": "CT",
        "Zip": "6037",
        "Contact": "860-829-6411"
    },
    {
        "Mosque Name": "Al-Aziz Islamic Center",
        "Address": "679 Fairfield Ave",
        "City": "Bridgeport",
        "State": "CT",
        "Zip": "6604",
        "Contact": "203-333-9244"
    },
    {
        "Mosque Name": "Bridgeport Islamic Community Center",
        "Address": "525 Clinton Ave.",
        "City": "Bridgeport",
        "State": "CT",
        "Zip": "6605",
        "Contact": "203-362-2527"
    },
    {
        "Mosque Name": "Bridgeport Isalmic Society ",
        "Address": "1300 Fairfield Ave.",
        "City": "Bridgeport",
        "State": "CT",
        "Zip": "6605",
        "Contact": "203-579-2211"
    },
    {
        "Mosque Name": "University of Bridgeport Masjid",
        "Address": "170 Lafayette St.",
        "City": "Bridgeport",
        "State": "CT",
        "Zip": "6604",
        "Contact": "203-526-1239"
    },
    {
        "Mosque Name": "Daar-Ul-Ehsaan",
        "Address": "739 Terryville Ave.",
        "City": "Bristol",
        "State": "CT",
        "Zip": "6010",
        "Contact": "860-585-9742"
    },
    {
        "Mosque Name": "Islamic Society of Western Ct",
        "Address": "388 Main St",
        "City": "Danbury",
        "State": "CT",
        "Zip": "6810",
        "Contact": "203-744-1328"
    },
    {
        "Mosque Name": "Baitul Mukarram Masjid",
        "Address": "339 Main St.",
        "City": "Danbury",
        "State": "CT",
        "Zip": "6810",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Society of Greater Danbury ",
        "Address": "18 Great Plain Rd.",
        "City": "Danbury",
        "State": "CT",
        "Zip": "6810",
        "Contact": "203-300-9326"
    },
    {
        "Mosque Name": "Islamic Institute of Ahl Al-Bait",
        "Address": "994 Tolland St.",
        "City": "East Hartford",
        "State": "CT",
        "Zip": "6108",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center",
        "Address": "20 Church St.",
        "City": "East Hartford",
        "State": "CT",
        "Zip": "6108",
        "Contact": "860-282-0786"
    },
    {
        "Mosque Name": "Islamic Center of New London",
        "Address": "16 Fort St.",
        "City": "Groton",
        "State": "CT",
        "Zip": "6340",
        "Contact": "860-405-8006"
    },
    {
        "Mosque Name": "Islamic Center of Hamden",
        "Address": "60 Connolly Pkwy Suite 17-212",
        "City": "Hamden",
        "State": "CT",
        "Zip": "6514",
        "Contact": "203-562-2757"
    },
    {
        "Mosque Name": "Muhammad Islamic Center",
        "Address": "870 Dixwell Ave.",
        "City": "Hamden",
        "State": "CT",
        "Zip": "6514",
        "Contact": "203-562-0594"
    },
    {
        "Mosque Name": "Muhammad Islamic Center of Hartford",
        "Address": "155 Hungerford St.",
        "City": "Hartford",
        "State": "CT",
        "Zip": "6106",
        "Contact": "860-728-8646"
    },
    {
        "Mosque Name": "Bosnian-American Islamic Center",
        "Address": "595 Franklin Ave.",
        "City": "Hartford",
        "State": "CT",
        "Zip": "6114",
        "Contact": "860-218-4864"
    },
    {
        "Mosque Name": "Islamic Center of Connecticut ",
        "Address": "140 White Rock Dr.",
        "City": "Hartford",
        "State": "CT",
        "Zip": "6115",
        "Contact": "860-249-0112"
    },
    {
        "Mosque Name": "Zahir Mannan ",
        "Address": "410 Main Street",
        "City": "Meriden",
        "State": "CT",
        "Zip": "6451",
        "Contact": "860-670-6402"
    },
    {
        "Mosque Name": "Islamic Community of Fairfield County ",
        "Address": "57 Pepper St",
        "City": "Monroe",
        "State": "CT",
        "Zip": "6468",
        "Contact": "203-261-6222"
    },
    {
        "Mosque Name": "Masjid Al Taqwa",
        "Address": "47 Saint Clair Ave.",
        "City": "New Britain",
        "State": "CT",
        "Zip": "6051",
        "Contact": "860-223-9131"
    },
    {
        "Mosque Name": "Turkish Islamic Culture Associatino ",
        "Address": "560 Middletown Ave.",
        "City": "New Haven",
        "State": "CT",
        "Zip": "6513",
        "Contact": "203-786-4795"
    },
    {
        "Mosque Name": "Masjid Al Islam",
        "Address": "624 George St",
        "City": "New Haven",
        "State": "CT",
        "Zip": "6511",
        "Contact": "203-777-8004"
    },
    {
        "Mosque Name": "Islamic Center of Newington",
        "Address": "372 Cypress Rd.",
        "City": "Newington",
        "State": "CT",
        "Zip": "6111",
        "Contact": ""
    },
    {
        "Mosque Name": "Al Madany Islamic Center of Norwalk",
        "Address": "4 Elton Ct.",
        "City": "Norwalk",
        "State": "CT",
        "Zip": "6551",
        "Contact": "203-852-0847"
    },
    {
        "Mosque Name": "Jafaria Association of Connecticut",
        "Address": "1 Meriden",
        "City": "Rockfall",
        "State": "CT",
        "Zip": "6481",
        "Contact": "203-468-2961"
    },
    {
        "Mosque Name": "Islamic Community of Fairfield County",
        "Address": "93 Greenleaf Dr",
        "City": "Stamford",
        "State": "CT",
        "Zip": "6902",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Stamford",
        "Address": "82 Harbor Dr.",
        "City": "Stamford",
        "State": "CT",
        "Zip": "6902",
        "Contact": "203-255-4327"
    },
    {
        "Mosque Name": "Stamford Islamic Center",
        "Address": "10 Outlook St",
        "City": "Stamford",
        "State": "CT",
        "Zip": "6902",
        "Contact": "203-975-2642"
    },
    {
        "Mosque Name": "Masjid Esa Bin Mariam",
        "Address": "390 E. Main St.",
        "City": "Stratford",
        "State": "CT",
        "Zip": "6614",
        "Contact": "203-386-8368"
    },
    {
        "Mosque Name": "Islamic Center of Vernon",
        "Address": "27 Naek Rd.",
        "City": "Vernon Rockville",
        "State": "CT",
        "Zip": "6066",
        "Contact": "860-648-2844"
    },
    {
        "Mosque Name": "Islamic Center of Wallingford",
        "Address": "950 Yale Ave. Unit 10",
        "City": "Wallingford",
        "State": "CT",
        "Zip": "6492",
        "Contact": "203-315-0411"
    },
    {
        "Mosque Name": "United Muslim Masjid",
        "Address": "132 Prospect St.",
        "City": "Waterbury",
        "State": "CT",
        "Zip": "6710",
        "Contact": "203-756-6365"
    },
    {
        "Mosque Name": "Islamic American Society of Connecticut ",
        "Address": "120 Schraffts Dr.",
        "City": "Waterbury",
        "State": "CT",
        "Zip": "6705",
        "Contact": "203-597-7676"
    },
    {
        "Mosque Name": "Albanian American Culture & Islamic Center",
        "Address": "106 Columbia Blvd",
        "City": "Waterbury",
        "State": "CT",
        "Zip": "6710",
        "Contact": "203-755-0687"
    },
    {
        "Mosque Name": "New Haven Islamic Center",
        "Address": "2 Prudden St.",
        "City": "West Haven",
        "State": "CT",
        "Zip": "6516",
        "Contact": "203-937-5799"
    },
    {
        "Mosque Name": "Turkish Islamic Cultural Association ",
        "Address": "546 Ocean Ave.",
        "City": "West Haven",
        "State": "CT",
        "Zip": "6516",
        "Contact": "203-931-0913"
    },
    {
        "Mosque Name": "Ahl Al-Sunnah Center",
        "Address": "5 National Dr.",
        "City": "Windsor Locks",
        "State": "CT",
        "Zip": "6096",
        "Contact": ""
    },
    {
        "Mosque Name": "First Hijrah Muslim Community Center",
        "Address": "4324 Georgia Ave. Nw",
        "City": "Washington",
        "State": "DC",
        "Zip": "20011",
        "Contact": "703-933-0501"
    },
    {
        "Mosque Name": "Islamic Center of Greater Southeast ",
        "Address": "3109 Martin Luther King Ave. Se",
        "City": "Washington",
        "State": "DC",
        "Zip": "20032",
        "Contact": "202-487-1024"
    },
    {
        "Mosque Name": "Ivy City Masjid",
        "Address": "2001 Gallaudet St.  Ne",
        "City": "Washington",
        "State": "DC",
        "Zip": "20002",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al Islam",
        "Address": "4603 Benning Road",
        "City": "Washington",
        "State": "DC",
        "Zip": "20019",
        "Contact": ""
    },
    {
        "Mosque Name": "The Islamic Center",
        "Address": "2551 Massachesetts Ave Nw",
        "City": "Washington",
        "State": "DC",
        "Zip": "20008",
        "Contact": "202-332-8343"
    },
    {
        "Mosque Name": "Masjid Muhammad",
        "Address": "1519 Islamic Way  Nw",
        "City": "Washington",
        "State": "DC",
        "Zip": "20001",
        "Contact": "202-483-8832"
    },
    {
        "Mosque Name": "Masjid Ahlul Quran Wal Hadeeth",
        "Address": "3415 18th St. Ne",
        "City": "Washington",
        "State": "DC",
        "Zip": "20018",
        "Contact": "202-506-3176"
    },
    {
        "Mosque Name": "Islamic Society of Central Delaware",
        "Address": "7953 S. Dupont Hwy",
        "City": "Felton",
        "State": "DE",
        "Zip": "19943",
        "Contact": "302-382-2977"
    },
    {
        "Mosque Name": "Islamic Society of Delaware ",
        "Address": "28 Salem Church Rd.",
        "City": "Newark",
        "State": "DE",
        "Zip": "19713",
        "Contact": "302-733-0273"
    },
    {
        "Mosque Name": "Masjid Isa ibn-e-Maryam Foundation",
        "Address": "706 S Old Baltimore Pike",
        "City": "Newark",
        "State": "DE",
        "Zip": "19702",
        "Contact": "302-786-5202"
    },
    {
        "Mosque Name": "Masjid El-Amaanah",
        "Address": "1522 W. 4th St.",
        "City": "Wilmington",
        "State": "DE",
        "Zip": "19805",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Center of Wilmington ",
        "Address": "2102 Northeast Blvd",
        "City": "Wilmington",
        "State": "DE",
        "Zip": "19802",
        "Contact": "302-571-0532"
    },
    {
        "Mosque Name": "Masjid Ar-Razzaaq",
        "Address": "1000 W. 7th St.",
        "City": "Wilmington",
        "State": "DE",
        "Zip": "19805",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Iman Mosque",
        "Address": "500 Se 9th St.",
        "City": "Belle Glade",
        "State": "FL",
        "Zip": "33430",
        "Contact": "561-996-6411"
    },
    {
        "Mosque Name": "Masjid Al-Hidaya",
        "Address": "320 Charley E. Johns St.",
        "City": "Blountstown",
        "State": "FL",
        "Zip": "32424",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Boca Raton",
        "Address": "3100 Nw 5th Ave.",
        "City": "Boca Raton",
        "State": "FL",
        "Zip": "33431",
        "Contact": "561-395-7221"
    },
    {
        "Mosque Name": "Florida Islamic Educational Center ",
        "Address": "831 E. Palmetto Park Rd.",
        "City": "Boca Raton",
        "State": "FL",
        "Zip": "33432",
        "Contact": "561-361-7033"
    },
    {
        "Mosque Name": "American Islamic Center of Florida",
        "Address": "807 N. Federal Hwy",
        "City": "Boca Raton",
        "State": "FL",
        "Zip": "33432",
        "Contact": "561-900-4330"
    },
    {
        "Mosque Name": "Assalam Center of Boca Raton",
        "Address": "1499 Nw 4th Ave.",
        "City": "Boca Raton",
        "State": "FL",
        "Zip": "33432",
        "Contact": "561-391-8285"
    },
    {
        "Mosque Name": "Bonita Springs Islamic Center",
        "Address": "25221 Bernwood Dr. Unit 8",
        "City": "Bonita Springs",
        "State": "FL",
        "Zip": "34135",
        "Contact": "239-821-3969"
    },
    {
        "Mosque Name": "Al-Amin Center of Florida",
        "Address": "8101 South Military Trail",
        "City": "Boynton Beach",
        "State": "FL",
        "Zip": "33436",
        "Contact": "551-859-2296"
    },
    {
        "Mosque Name": "Islamic Center of Brandon",
        "Address": "613 E. Morgan St.",
        "City": "Brandon",
        "State": "FL",
        "Zip": "33510",
        "Contact": "321-243-0693"
    },
    {
        "Mosque Name": "Albanian Islamic Cultural Center",
        "Address": "225 N. Fort Harrison Ave.",
        "City": "Clearwater",
        "State": "FL",
        "Zip": "33755",
        "Contact": ""
    },
    {
        "Mosque Name": "Bosnian Muslim Association",
        "Address": "120 N. Main Ave.",
        "City": "Clearwater",
        "State": "FL",
        "Zip": "33765",
        "Contact": "727-466-6215"
    },
    {
        "Mosque Name": "Islamic Center of Clermont",
        "Address": "15128 Lost Lake Rd.",
        "City": "Clermont",
        "State": "FL",
        "Zip": "34711",
        "Contact": "407-267-8320"
    },
    {
        "Mosque Name": "Islamic Center of South Lake County",
        "Address": "1208 Bowman St.  Sunnyside Plaza",
        "City": "Clermont",
        "State": "FL",
        "Zip": "34711",
        "Contact": ""
    },
    {
        "Mosque Name": "Nur Ul Islam of South Florida ",
        "Address": "10600 Sw 59th St.",
        "City": "Cooper City",
        "State": "FL",
        "Zip": "33328",
        "Contact": "954-434-3855"
    },
    {
        "Mosque Name": "Islamic Center of Daytona",
        "Address": "347 S. Keach St.",
        "City": "Daytona Beach",
        "State": "FL",
        "Zip": "32114",
        "Contact": "386-252-3501"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "1350 Gilpin Ct.",
        "City": "Deltona",
        "State": "FL",
        "Zip": "32725",
        "Contact": "386-860-9663"
    },
    {
        "Mosque Name": "Masjid Al Salam",
        "Address": "1218 New York Ave.",
        "City": "Dunedin",
        "State": "FL",
        "Zip": "34698",
        "Contact": "727-733-5090"
    },
    {
        "Mosque Name": "Dar-E-Panjetan Center",
        "Address": "5541 N. State Rd. 7",
        "City": "Fort Lauderdale",
        "State": "FL",
        "Zip": "33319",
        "Contact": "954-328-3841"
    },
    {
        "Mosque Name": "Association of Islamic Charitable Projects ",
        "Address": "2820 Griffin Rd.",
        "City": "Fort Lauderdale",
        "State": "FL",
        "Zip": "33312",
        "Contact": "954-986-1373"
    },
    {
        "Mosque Name": "Masjid Al Iman",
        "Address": "2542 Franklin Park Dr. Nw",
        "City": "Fort Lauderdale",
        "State": "FL",
        "Zip": "33311",
        "Contact": "954-581-6295"
    },
    {
        "Mosque Name": "Islamic Center of Broward",
        "Address": "8658 Nw 44th St.",
        "City": "Fort Lauderdale",
        "State": "FL",
        "Zip": "33351",
        "Contact": "954-741-4214"
    },
    {
        "Mosque Name": "Islamic Center for Peace",
        "Address": "2056 Linhart Ave.",
        "City": "Fort Myers",
        "State": "FL",
        "Zip": "33901",
        "Contact": "239-671-1761"
    },
    {
        "Mosque Name": "Islamic Center of Sw Florida ",
        "Address": "3337 Broadway St",
        "City": "Fort Myers",
        "State": "FL",
        "Zip": "33901",
        "Contact": "239-939-0292"
    },
    {
        "Mosque Name": "Center for Islamic Culture Awareness",
        "Address": "2371 Crawford St.",
        "City": "Fort Myers",
        "State": "FL",
        "Zip": "33901",
        "Contact": "941-332-7833"
    },
    {
        "Mosque Name": "Islamic Center of Fort Pierce",
        "Address": "1104 West Midway Rd",
        "City": "Fort Pierce",
        "State": "Fl",
        "Zip": "34982",
        "Contact": "772-465-9200"
    },
    {
        "Mosque Name": "Islamic Center of Fort Walton Beach",
        "Address": "6-A Hollywood Blvd. Sw",
        "City": "Fort Walton Beach",
        "State": "FL",
        "Zip": "32548",
        "Contact": "850-664-0373"
    },
    {
        "Mosque Name": "Masjid Tawhid",
        "Address": "1557 Nw 5th St.",
        "City": "Ft. Lauderdale",
        "State": "FL",
        "Zip": "33311",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Friends of Florida ",
        "Address": "2181 N. Bridge Plaza",
        "City": "Ft. Pierce",
        "State": "FL",
        "Zip": "34950",
        "Contact": "772-462-0242"
    },
    {
        "Mosque Name": "Hoda Center",
        "Address": "5220 Sw 13th St.",
        "City": "Gainesville",
        "State": "FL",
        "Zip": "32608",
        "Contact": "352-377-8080"
    },
    {
        "Mosque Name": "Islamic Center of Gainesville",
        "Address": "1010 W. University Ave",
        "City": "Gainesville",
        "State": "FL",
        "Zip": "32601",
        "Contact": "352-372-1980"
    },
    {
        "Mosque Name": "Islamic Jaffaria Association",
        "Address": "10554 Nw 132Nd St.",
        "City": "Hialeah Gardens",
        "State": "FL",
        "Zip": "33018",
        "Contact": "305-557-6835"
    },
    {
        "Mosque Name": "Islamic Movement of Florida",
        "Address": "3201 Nw 74th Ave.",
        "City": "Hollywood",
        "State": "FL",
        "Zip": "33024",
        "Contact": "954-894-9110"
    },
    {
        "Mosque Name": "Masjid Al-Muttaqeen",
        "Address": "1010 Sw 196 Ave.",
        "City": "Hollywood",
        "State": "FL",
        "Zip": "33029",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ul Mumineen",
        "Address": "12850 Sw 268 St.",
        "City": "Homestead",
        "State": "FL",
        "Zip": "33032",
        "Contact": "305-246-5814"
    },
    {
        "Mosque Name": "Islamic Community of Bosnaks",
        "Address": "2131 Art Museum Dr.",
        "City": "Jacksonville",
        "State": "FL",
        "Zip": "32207",
        "Contact": "904-683-8427"
    },
    {
        "Mosque Name": "Masjid Al-Ansar",
        "Address": "9801 Old Baymeadows Rd. Bldg 2 Apt. 17",
        "City": "Jacksonville",
        "State": "FL",
        "Zip": "32256",
        "Contact": "904-997-9487"
    },
    {
        "Mosque Name": "Masjid Al-Salaam",
        "Address": "1625 N Pearl St.",
        "City": "Jacksonville",
        "State": "FL",
        "Zip": "32206",
        "Contact": "904-359-0980"
    },
    {
        "Mosque Name": "Islamic Center of Ne Florida",
        "Address": "2333 St. Johns Bluff Rd. S",
        "City": "Jacksonville",
        "State": "FL",
        "Zip": "32211",
        "Contact": "904-646-3462"
    },
    {
        "Mosque Name": "Jacksonville Masjid of Al-Islam",
        "Address": "2242 Commonwealth Ave",
        "City": "Jacksonville",
        "State": "FL",
        "Zip": "32209",
        "Contact": "904-387-6910"
    },
    {
        "Mosque Name": "Masjid Al-Maalik",
        "Address": "800 Emma St.",
        "City": "Key West",
        "State": "FL",
        "Zip": "33040",
        "Contact": "305-295-8350"
    },
    {
        "Mosque Name": "Al Bir Islamic Association ",
        "Address": "3496 Polynesian Isle Blvd",
        "City": "Kissimmee",
        "State": "FL",
        "Zip": "34746",
        "Contact": "407-879-0807"
    },
    {
        "Mosque Name": "Islamic Center of Osceola County ",
        "Address": "2417 N. Central Ave.",
        "City": "Kissimmee",
        "State": "FL",
        "Zip": "34741",
        "Contact": "407-944-4353"
    },
    {
        "Mosque Name": "Masjid Assunah",
        "Address": "1535 Pleasant Hill Rd.",
        "City": "Kissimmee",
        "State": "FL",
        "Zip": "34746",
        "Contact": "407-935-0337"
    },
    {
        "Mosque Name": "Jaffaria Islamic Center",
        "Address": "1500 Old Vineland Rd.",
        "City": "Kissimmee",
        "State": "FL",
        "Zip": "34746",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Bir Islamic Association ",
        "Address": "4870 Old Tampa Hwy",
        "City": "Kissimmee",
        "State": "FL",
        "Zip": "34758",
        "Contact": "407-879-0807"
    },
    {
        "Mosque Name": "Islamic Center of Kissimmee ",
        "Address": "2350 Old Vineland Rd",
        "City": "Kissimmee",
        "State": "FL",
        "Zip": "34746",
        "Contact": "407-390-1100"
    },
    {
        "Mosque Name": "Islamic Center of Lake City",
        "Address": " 7876 West US Highway 90",
        "City": "Lake City",
        "State": "FL",
        "Zip": "32055",
        "Contact": "386-755-0260"
    },
    {
        "Mosque Name": "Islamic Center of Lakeland ",
        "Address": "1161 Blossom Cir S",
        "City": "Lakeland",
        "State": "FL",
        "Zip": "33805",
        "Contact": "863-686-4713"
    },
    {
        "Mosque Name": "Masjid Al-Hamza Clearwater Dawah Center ",
        "Address": "560 Clearwater Largo Rd. N",
        "City": "Largo",
        "State": "FL",
        "Zip": "33770",
        "Contact": "727-585-9737"
    },
    {
        "Mosque Name": "Leesburg Islamic Center",
        "Address": "2201 Montclair St.",
        "City": "Leesburg",
        "State": "FL",
        "Zip": "34748",
        "Contact": "352-255-4708"
    },
    {
        "Mosque Name": "Masjid Jamaat Al-Mumineen",
        "Address": "3222 Holiday Springs Blvd",
        "City": "Margate",
        "State": "FL",
        "Zip": "33063",
        "Contact": "954-575-3872"
    },
    {
        "Mosque Name": "Islamic Society of Brevard County",
        "Address": "550 East Florida Ave.",
        "City": "Melbourne",
        "State": "FL",
        "Zip": "32901",
        "Contact": "321-984-4129"
    },
    {
        "Mosque Name": "Islamic Center of Central Brevard ",
        "Address": "190 Grant Rd.",
        "City": "Merritt Island",
        "State": "FL",
        "Zip": "32953",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Ansar",
        "Address": "5245 Nw 7th Ave",
        "City": "Miami",
        "State": "FL",
        "Zip": "33127",
        "Contact": "305-757-8741"
    },
    {
        "Mosque Name": "Nigerian Islamic Society",
        "Address": "2410 Nw 93Rd St.",
        "City": "Miami",
        "State": "FL",
        "Zip": "33147",
        "Contact": ""
    },
    {
        "Mosque Name": "American Muslim Assoc of North America",
        "Address": "183 Ne 166th St.",
        "City": "Miami",
        "State": "FL",
        "Zip": "33162",
        "Contact": "305-945-0414"
    },
    {
        "Mosque Name": "Ershad Center",
        "Address": "6669 Sw 59Th Place",
        "City": "Miami",
        "State": "FL",
        "Zip": "33025",
        "Contact": "305-661-2822"
    },
    {
        "Mosque Name": "Masjid Al-Fayza",
        "Address": "36 Ne 3Rd Ave.",
        "City": "Miami",
        "State": "FL",
        "Zip": "33132",
        "Contact": "305-358-1268"
    },
    {
        "Mosque Name": "Masjid An-Nour",
        "Address": "11699 Sw 147th Ave.",
        "City": "Miami",
        "State": "FL",
        "Zip": "33196",
        "Contact": "305-408-0400"
    },
    {
        "Mosque Name": "Masjid Al-Ihsaan",
        "Address": "10180 Sw 168th St.",
        "City": "Miami",
        "State": "FL",
        "Zip": "33157",
        "Contact": "305-259-0042"
    },
    {
        "Mosque Name": "Masjid Ibrahim",
        "Address": "6301 Nw 6th Ave.",
        "City": "Miami",
        "State": "FL",
        "Zip": "33150",
        "Contact": ""
    },
    {
        "Mosque Name": "Shamsuddin Masjid And Library",
        "Address": "365 Ne 167th St.",
        "City": "Miami",
        "State": "FL",
        "Zip": "33162",
        "Contact": "786-428-0005"
    },
    {
        "Mosque Name": "Muslim Communities Assoc of South Florida ",
        "Address": "7350 Nw 3Rd St",
        "City": "Miami",
        "State": "FL",
        "Zip": "33126",
        "Contact": "305-261-7622"
    },
    {
        "Mosque Name": "Ummah of Miami",
        "Address": "7904 West Dr. Unit 6",
        "City": "Miami Beach",
        "State": "FL",
        "Zip": "33141",
        "Contact": ""
    },
    {
        "Mosque Name": "Caribbean-American Islamic Association ",
        "Address": "6128 Sw 27th St.",
        "City": "Miramar",
        "State": "FL",
        "Zip": "33023",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Naples",
        "Address": "2520 Davel Blvd. 2Nd Fl. Unit E",
        "City": "Naples",
        "State": "FL",
        "Zip": "34104",
        "Contact": "239-732-7136"
    },
    {
        "Mosque Name": "Islamic Center of New Port Richey",
        "Address": "4715 Grand Blvd",
        "City": "New Port Richey",
        "State": "FL",
        "Zip": "34652",
        "Contact": "727-834-9200"
    },
    {
        "Mosque Name": "Isalmic Center of Palm Beach",
        "Address": "101 Castlewood Dr.",
        "City": "North Palm Beach",
        "State": "FL",
        "Zip": "33408",
        "Contact": "561-630-6899"
    },
    {
        "Mosque Name": "Masjid Darul-Islam of Ocala",
        "Address": "6915 Sr 40",
        "City": "Ocala",
        "State": "FL",
        "Zip": "34482",
        "Contact": "352-873-9959"
    },
    {
        "Mosque Name": "Foundation of Lights ",
        "Address": "120 Floral St.",
        "City": "Ocoee",
        "State": "FL",
        "Zip": "34761",
        "Contact": "407-592-5457"
    },
    {
        "Mosque Name": "Muslim Communities Association of South Florida ",
        "Address": "4305 Nw 183Rd St.",
        "City": "Opa Locka",
        "State": "FL",
        "Zip": "33055",
        "Contact": "305-624-5555"
    },
    {
        "Mosque Name": "Islamic Center of Orange Park",
        "Address": "116 Foxridge Rd.",
        "City": "Orange Park",
        "State": "FL",
        "Zip": "32065",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society Fo Central Florida ",
        "Address": "312 S. Paramore Ave",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32807",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Orlando ",
        "Address": "11543 Ruby Lake Rd.",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32836",
        "Contact": "407-238-2700"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "4962 Old Winter Garden Rd.",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32811",
        "Contact": "407-523-7882"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "2018 Rouse Rd.",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32817",
        "Contact": "407-277-0133"
    },
    {
        "Mosque Name": "Islamic Education Center of Florida",
        "Address": "2221 Harrell Rd.",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32817",
        "Contact": "407-325-3647"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "1089 N. Goldenrod Road",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32807",
        "Contact": "407-273-7750"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "545 W. Central Blvd.",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32801",
        "Contact": "407-835-9600"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "9501 Satellite Blvd. Suite 110",
        "City": "Orlando",
        "State": "FL",
        "Zip": "32837",
        "Contact": ""
    },
    {
        "Mosque Name": "Bay County Islamic Society",
        "Address": "3312 Token Rd.",
        "City": "Panama City",
        "State": "FL",
        "Zip": "32405",
        "Contact": "850-785-8085"
    },
    {
        "Mosque Name": "Darul Uloom Masjid",
        "Address": "7050 Pines Blvd",
        "City": "Pembroke Pines",
        "State": "FL",
        "Zip": "33024",
        "Contact": "954-963-9514"
    },
    {
        "Mosque Name": "Al-Islam Dawah Center",
        "Address": "1550 W. Barrancas Ave.",
        "City": "Pensacola",
        "State": "FL",
        "Zip": "32504",
        "Contact": "850-435-7238"
    },
    {
        "Mosque Name": "Islamic Center of Northwest Florida",
        "Address": "3445 E. Johnson Ave.",
        "City": "Pensacola",
        "State": "FL",
        "Zip": "32514",
        "Contact": ""
    },
    {
        "Mosque Name": "American Islamic Center",
        "Address": "7400 62Nd Terrace North",
        "City": "Pinellas Park",
        "State": "FL",
        "Zip": "33781",
        "Contact": "727-520-6615"
    },
    {
        "Mosque Name": "Bosnian Islamic Center",
        "Address": "4255 73Rd Ave. N",
        "City": "Pinellas Park",
        "State": "FL",
        "Zip": "33781",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Pinellas ",
        "Address": "9400 67th St. N",
        "City": "Pinellas Park",
        "State": "FL",
        "Zip": "33782",
        "Contact": "727-546-3162"
    },
    {
        "Mosque Name": "Islamic Prayer Center ",
        "Address": "1834-A N. University Dr.",
        "City": "Plantation",
        "State": "FL",
        "Zip": "33322",
        "Contact": "954-472-4499"
    },
    {
        "Mosque Name": "Islamic Center of South Florida",
        "Address": "507 Ne 6th St.",
        "City": "Pompano Beach",
        "State": "FL",
        "Zip": "33030",
        "Contact": "954-946-2723"
    },
    {
        "Mosque Name": "Islamic Community of Sw Florida",
        "Address": "25148 Harborview Rd.",
        "City": "Port Charlotte",
        "State": "FL",
        "Zip": "33980",
        "Contact": "941-625-8855"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "2917 S. Orlando Dr.",
        "City": "Sanford",
        "State": "FL",
        "Zip": "32773",
        "Contact": ""
    },
    {
        "Mosque Name": "Husseini Islamic Center",
        "Address": "5211 Hester Ave.",
        "City": "Sanford",
        "State": "FL",
        "Zip": "32773",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Sarasota & Bradenton",
        "Address": "4350 N. Lockwood Ridge Rd.",
        "City": "Sarasota",
        "State": "FL",
        "Zip": "34234",
        "Contact": "941-351-3393"
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "5186 Shumacher Rd.",
        "City": "Sebring",
        "State": "FL",
        "Zip": "33872",
        "Contact": "386-860-9663"
    },
    {
        "Mosque Name": "Islamic Center of Hernando County",
        "Address": "6307 Barclay Ave.",
        "City": "Spring Hill",
        "State": "FL",
        "Zip": "34609",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of St. Augustine",
        "Address": "1760 Sr-207",
        "City": "St. Augustine",
        "State": "FL",
        "Zip": "32084",
        "Contact": "904-826-1991"
    },
    {
        "Mosque Name": "Masjid Al-Muminin",
        "Address": "3762 18th Ave. South",
        "City": "St. Petersburg",
        "State": "FL",
        "Zip": "33707",
        "Contact": "727-327-8483"
    },
    {
        "Mosque Name": "Islamic Society of St. Petersburg ",
        "Address": "2401 6th St. S",
        "City": "St. Petersburg",
        "State": "FL",
        "Zip": "33705",
        "Contact": ""
    },
    {
        "Mosque Name": "Stuart Masjid",
        "Address": "2981 Se Dominica Terrace",
        "City": "Stuart",
        "State": "FL",
        "Zip": "34997",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Foundation of South Florida",
        "Address": "5457 Nw 108th Ave.",
        "City": "Sunrise",
        "State": "FL",
        "Zip": "33351",
        "Contact": "954-741-8130"
    },
    {
        "Mosque Name": "Masjid Al Nahal",
        "Address": "115 Bragg Dr.",
        "City": "Tallahasse",
        "State": "FL",
        "Zip": "32304",
        "Contact": "850-576-6555"
    },
    {
        "Mosque Name": "Islamic Center of Tallahasse ",
        "Address": "1020 W. Pensacola Ave",
        "City": "Tallahasse",
        "State": "FL",
        "Zip": "32304",
        "Contact": "850-681-9022"
    },
    {
        "Mosque Name": "Islamic Center of Tallahassee ",
        "Address": "3617 Old Bainbridge Rd.",
        "City": "Tallahassee",
        "State": "FL",
        "Zip": "32303",
        "Contact": "850-514-0100"
    },
    {
        "Mosque Name": "Islamic Community of Tampa ",
        "Address": "5910 E. 130th Ave.",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33617",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Ansar",
        "Address": "4334 W. Waters Ave.",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33614",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Education Center of Tampa",
        "Address": "6350 Rockpointe Dr.",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33634",
        "Contact": "813-884-0847"
    },
    {
        "Mosque Name": "Masjid Omar Al Mokhtar",
        "Address": "1307 W. North St. B",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33606",
        "Contact": "813-217-5531"
    },
    {
        "Mosque Name": "Muslim American Society ",
        "Address": "12226 N. 56th St.",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33617",
        "Contact": "813-899-2267"
    },
    {
        "Mosque Name": "Islamic Society of Tampa Bay Area",
        "Address": "7326 E. Sligh Ave",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33610",
        "Contact": "813-628-0007"
    },
    {
        "Mosque Name": "Madinatul Ilm Islamic Center",
        "Address": "5013 Garden Lane",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33610",
        "Contact": "813-368-1717"
    },
    {
        "Mosque Name": "Islamic Center of Gunn Hwy",
        "Address": "4119 Gunn Hwy",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33618",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Abu Bakr Al-Siddiq",
        "Address": "11130 N. 30th St.",
        "City": "Tampa",
        "State": "FL",
        "Zip": "33612",
        "Contact": "813-495-5436"
    },
    {
        "Mosque Name": "Islamic Society of New Tampa ",
        "Address": "15830 Morris Bridge Rd.",
        "City": "Thonotosassa",
        "State": "FL",
        "Zip": "33592",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Central Florida ",
        "Address": "1011 S. Washington (Us 1)",
        "City": "Titusville",
        "State": "FL",
        "Zip": "32780",
        "Contact": "321-268-1833"
    },
    {
        "Mosque Name": "Indian River Islamic Center",
        "Address": "2015 E. 9th St. Sw",
        "City": "Vero Beach",
        "State": "FL",
        "Zip": "32962",
        "Contact": "954-732-6667"
    },
    {
        "Mosque Name": "Muslim Community of Palm Beach ",
        "Address": "4883 Purdy Lane",
        "City": "West Palm Beach",
        "State": "FL",
        "Zip": "33416",
        "Contact": "561-969-1584"
    },
    {
        "Mosque Name": "New Africa Muslim Community Center",
        "Address": "3100 El Camino Real",
        "City": "West Palm Beach",
        "State": "FL",
        "Zip": "33409",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Polk County",
        "Address": "1763 Unity Way Ne",
        "City": "Winter Haven",
        "State": "FL",
        "Zip": "33881",
        "Contact": "863-299-6840"
    },
    {
        "Mosque Name": "Islamic Center of Albany",
        "Address": "1214 Eager Dr.",
        "City": "Albany",
        "State": "GA",
        "Zip": "31707",
        "Contact": "229-431-0089"
    },
    {
        "Mosque Name": "Albany Masjid of Al-Islam",
        "Address": "831 W. Highland Ave.",
        "City": "Albany",
        "State": "GA",
        "Zip": "31705",
        "Contact": "229-436-6326"
    },
    {
        "Mosque Name": "Hamzah Islamic Center",
        "Address": "665 Tidwell Rd.",
        "City": "Alpharetta",
        "State": "GA",
        "Zip": "30004",
        "Contact": "678-386-3711"
    },
    {
        "Mosque Name": "Islamic Center of North Fulton ",
        "Address": "1265 Rucker Rd.",
        "City": "Alpharetta",
        "State": "GA",
        "Zip": "30009",
        "Contact": "678-297-0019"
    },
    {
        "Mosque Name": "Al Huda Islamic Center. Inc.",
        "Address": "2022 S. Milledge Ave",
        "City": "Athens",
        "State": "GA",
        "Zip": "30605",
        "Contact": "706-548-4620"
    },
    {
        "Mosque Name": "Masjid Attaqwa",
        "Address": "2674 Woodwin Rd.",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30360",
        "Contact": "770-454-8152"
    },
    {
        "Mosque Name": "Masjid Al Quran",
        "Address": "560 Mcdonough Blvd. Se",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30316",
        "Contact": "404-627-0500"
    },
    {
        "Mosque Name": "Zainabia Islamic Education Center",
        "Address": "1100 Hope Rd.",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30350",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid As-Salam",
        "Address": "2860 Cambellton Rd. Se",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30331",
        "Contact": "404-554-6500"
    },
    {
        "Mosque Name": "Masjid Ash-Shura",
        "Address": "3095 Jonesboro Rd. Se",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30354",
        "Contact": "404-433-6272"
    },
    {
        "Mosque Name": "Atlanta Masjid of Al Islam",
        "Address": "560 Fayetteville Rd Se",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30316",
        "Contact": "404-378-4219"
    },
    {
        "Mosque Name": "Al Farooq Masjid of Atlanta",
        "Address": "442 14th St. Nw",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30318",
        "Contact": "404-874-7521"
    },
    {
        "Mosque Name": "Masjid Al-Jami",
        "Address": "92 Broad St.",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30303",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Muminun",
        "Address": "1127 Hank Aaron Dr",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30315",
        "Contact": "404-586-9562"
    },
    {
        "Mosque Name": "Masjid Abu Bakr",
        "Address": "P.O. Box 29652",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30359",
        "Contact": "404-424-9997"
    },
    {
        "Mosque Name": "Islamic Community Center ",
        "Address": "547 West End Pl",
        "City": "Atlanta",
        "State": "GA",
        "Zip": "30310",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Augusta ",
        "Address": "1839 Ellis St.",
        "City": "Augusta",
        "State": "GA",
        "Zip": "30904",
        "Contact": "706-667-6740"
    },
    {
        "Mosque Name": "Muslim Community Center",
        "Address": "1821 Slayton St.",
        "City": "Augusta",
        "State": "GA",
        "Zip": "30904",
        "Contact": "706-481-8007"
    },
    {
        "Mosque Name": "Islamic Society of Augusta ",
        "Address": "3416 Middleton St.",
        "City": "Augusta",
        "State": "GA",
        "Zip": "30907",
        "Contact": "706-868-7278"
    },
    {
        "Mosque Name": "Islamic Center of Cartersville",
        "Address": "69 Maple Ridge Dr.",
        "City": "Cartersville",
        "State": "GA",
        "Zip": "30120",
        "Contact": "770-771-8646"
    },
    {
        "Mosque Name": "Islamic Center of Middle Georgia",
        "Address": "2501 Elberta Rd.",
        "City": "Centerville",
        "State": "GA",
        "Zip": "31028",
        "Contact": "478-922-4223"
    },
    {
        "Mosque Name": "Negashi Islamic Community Center of Atlanta",
        "Address": "803 Jolly Ave.",
        "City": "Clarkson",
        "State": "GA",
        "Zip": "30021",
        "Contact": "404-454-7952"
    },
    {
        "Mosque Name": "Masjid Al-Momineen",
        "Address": "837 North Indian Creek Dr.",
        "City": "Clarkston",
        "State": "GA",
        "Zip": "30021",
        "Contact": "404-294-4058"
    },
    {
        "Mosque Name": "Masjid Abdullah Bin Masud",
        "Address": "2342 S. Lumpkin Rd.",
        "City": "Columbus",
        "State": "GA",
        "Zip": "31903",
        "Contact": "706-957-8344"
    },
    {
        "Mosque Name": "Islamic Community ",
        "Address": "753 Church Ave.",
        "City": "Columbus",
        "State": "GA",
        "Zip": "31906",
        "Contact": "706-324-2488"
    },
    {
        "Mosque Name": "Masjid Al Jannah",
        "Address": "6550 Forrest Rd",
        "City": "Columbus",
        "State": "GA",
        "Zip": "31907",
        "Contact": "706-568-6750"
    },
    {
        "Mosque Name": "Dalton Islamic Center",
        "Address": "2054 Dug Gap Rd.",
        "City": "Dalton",
        "State": "GA",
        "Zip": "30720",
        "Contact": "706-529-9706"
    },
    {
        "Mosque Name": "Islamic League of Georgia ",
        "Address": "1972 Wesley Chapel Rd.",
        "City": "Decatur",
        "State": "GA",
        "Zip": "30035",
        "Contact": "678-799-7869"
    },
    {
        "Mosque Name": "Masjid Aboo Bakr As Siddeeq",
        "Address": "3135 Glenwood Rd.",
        "City": "Decatur",
        "State": "GA",
        "Zip": "30332",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of West Georgia ",
        "Address": "4055 Anneewakee Rd.",
        "City": "Douglasville",
        "State": "GA",
        "Zip": "30135",
        "Contact": "770-947-3396"
    },
    {
        "Mosque Name": "Islamic Center of Duluth",
        "Address": "3371 N. Berkeley Lake Rd.",
        "City": "Duluth",
        "State": "GA",
        "Zip": "30096",
        "Contact": "770-608-3492"
    },
    {
        "Mosque Name": "Muhammad Nawaz ",
        "Address": "3580 Sweetwater Rd",
        "City": "Duluth",
        "State": "GA",
        "Zip": "30096",
        "Contact": "678-871-6346"
    },
    {
        "Mosque Name": "Masjid Ettibaa-Us-Sunnah",
        "Address": "2447 River Rd.",
        "City": "Ellenwood",
        "State": "GA",
        "Zip": "30294",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Community Center",
        "Address": "288 E. Lanier Ave.",
        "City": "Fayetteville",
        "State": "GA",
        "Zip": "30214",
        "Contact": "770-719-4447"
    },
    {
        "Mosque Name": "Gainesville Community Mosque",
        "Address": "512 Summit St.",
        "City": "Gainesville",
        "State": "GA",
        "Zip": "30501",
        "Contact": "770-532-5887"
    },
    {
        "Mosque Name": "Gainsvile Islamic Culture Center",
        "Address": "694 E.E. Butler Pkwy",
        "City": "Gainsville",
        "State": "GA",
        "Zip": "30501",
        "Contact": "678-971-4800"
    },
    {
        "Mosque Name": "Griffin Muslim Center",
        "Address": "315 N. 3Rd St",
        "City": "Griffin",
        "State": "GA",
        "Zip": "30224",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Fataran Nas",
        "Address": "701 Randall St.",
        "City": "Griffin",
        "State": "GA",
        "Zip": "30223",
        "Contact": ""
    },
    {
        "Mosque Name": "Maun Islamic Center",
        "Address": "445 E.G. Miles Pkwy",
        "City": "Hinesville",
        "State": "GA",
        "Zip": "31313",
        "Contact": "912-876-4247"
    },
    {
        "Mosque Name": "Bilal Ibn Rabah Islamic Center",
        "Address": "120 Hamilton St.",
        "City": "La Grange",
        "State": "GA",
        "Zip": "30240",
        "Contact": ""
    },
    {
        "Mosque Name": "Greenview Madani Center",
        "Address": "3455 Greenview Dr. Nw",
        "City": "Lawrenceville",
        "State": "GA",
        "Zip": "30044",
        "Contact": "404-993-3400"
    },
    {
        "Mosque Name": "Georgia Islamic Institute",
        "Address": "177 Simonton Rd. Sw",
        "City": "Lawrenceville",
        "State": "GA",
        "Zip": "30045",
        "Contact": "770-339-1122"
    },
    {
        "Mosque Name": "Darus Salam Masjid",
        "Address": "3122 Cruse Rd. Nw",
        "City": "Lawrenceville",
        "State": "GA",
        "Zip": "30044",
        "Contact": "770-856-0153"
    },
    {
        "Mosque Name": "Masjid Abdullah",
        "Address": "805 Dickens Rd. Nw",
        "City": "Lilburn",
        "State": "GA",
        "Zip": "30047",
        "Contact": ""
    },
    {
        "Mosque Name": "Dar-E-Abbas",
        "Address": "5064 Lawrenceville Hwy",
        "City": "Lilburn",
        "State": "GA",
        "Zip": "30047",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ar-Rasool",
        "Address": "Hillcrest Rd.",
        "City": "Lilburn",
        "State": "GA",
        "Zip": "30047",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Farooq Masjid of Atlanta ",
        "Address": "955 Harbins Rd. Nw",
        "City": "Lilburn",
        "State": "GA",
        "Zip": "30047",
        "Contact": "770-279-8606"
    },
    {
        "Mosque Name": "Masjid An-Nur",
        "Address": "1996 S. Stone Mountain",
        "City": "Lithonia",
        "State": "GA",
        "Zip": "30058",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Mableton",
        "Address": "241 Veterans Memorial Hwy",
        "City": "Mableton",
        "State": "GA",
        "Zip": "30126",
        "Contact": "770-720-2200"
    },
    {
        "Mosque Name": "Islamic Center of Macon",
        "Address": "2131 Vineville Ave.",
        "City": "Macon",
        "State": "GA",
        "Zip": "31204",
        "Contact": "478-746-1222"
    },
    {
        "Mosque Name": "Masjid Warithud Din Mohammed",
        "Address": "4525 Bloomfield Rd",
        "City": "Macon",
        "State": "GA",
        "Zip": "31206",
        "Contact": "478-788-6917"
    },
    {
        "Mosque Name": "Islamic Center of Icna",
        "Address": "968 Powder Spring St.",
        "City": "Marietta",
        "State": "GA",
        "Zip": "30064",
        "Contact": "770-795-9391"
    },
    {
        "Mosque Name": "Masjid Al-Athar",
        "Address": "1148 Franklin Rd. F",
        "City": "Marietta",
        "State": "GA",
        "Zip": "30067",
        "Contact": "770-882-4228"
    },
    {
        "Mosque Name": "Islamic Center of Marietta",
        "Address": "1018 Powder Springs St.",
        "City": "Marietta",
        "State": "GA",
        "Zip": "30064",
        "Contact": "678-596-0724"
    },
    {
        "Mosque Name": "East Cobb Islamic Center",
        "Address": "1111 Braswell Rd.",
        "City": "Marietta",
        "State": "GA",
        "Zip": "30062",
        "Contact": "678-528-1414"
    },
    {
        "Mosque Name": "Masjid Ibad-Ur-Rahman",
        "Address": "2692 Sandy Plains Rd. Suite 1700",
        "City": "Marietta",
        "State": "GA",
        "Zip": "30066",
        "Contact": "678-560-3398"
    },
    {
        "Mosque Name": "Al Madina Masjid",
        "Address": "6014 Goshen Springs Rd. Nw",
        "City": "Norcross",
        "State": "GA",
        "Zip": "30071",
        "Contact": "770-242-9991"
    },
    {
        "Mosque Name": "Masjid Al-Ihsaan",
        "Address": "1585 E. Fayetteville Rd.",
        "City": "Riverdale",
        "State": "GA",
        "Zip": "30296",
        "Contact": "770-907-3883"
    },
    {
        "Mosque Name": "Roswell Community Masjid",
        "Address": "1255 Grimes Bridge Rd. Suites I-K",
        "City": "Roswell",
        "State": "GA",
        "Zip": "30075",
        "Contact": "678-643-4571"
    },
    {
        "Mosque Name": "Sahebozzaman Islamic Center",
        "Address": "4853 Old Mountain Park Rd. Ne",
        "City": "Roswell",
        "State": "GA",
        "Zip": "30075",
        "Contact": "770-642-9411"
    },
    {
        "Mosque Name": "Islamic Center of Savanna",
        "Address": "1030 Dutchtown Rd.",
        "City": "Savanna",
        "State": "GA",
        "Zip": "31419",
        "Contact": "912-920-0043"
    },
    {
        "Mosque Name": "Masjid Jihad",
        "Address": "117 E. 34th St.",
        "City": "Savannah",
        "State": "GA",
        "Zip": "31401",
        "Contact": "912-236-7387"
    },
    {
        "Mosque Name": "Jaffari Center of Atlanta",
        "Address": "295 Patterson Ave.",
        "City": "Scottsdale",
        "State": "GA",
        "Zip": "30079",
        "Contact": "404-371-9702"
    },
    {
        "Mosque Name": "Darul Huda",
        "Address": "2752 Main St.",
        "City": "Snellville",
        "State": "GA",
        "Zip": "30078",
        "Contact": "678-789-2800"
    },
    {
        "Mosque Name": "Bosnian Community Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Community of Bosniaks Atlanta ",
        "Address": "2755 Centerville Hwy Sw",
        "City": "Snellville",
        "State": "GA",
        "Zip": "30078",
        "Contact": "770-978-4603"
    },
    {
        "Mosque Name": "Masjid Assunnah & Daw Ah Center",
        "Address": "4565 Elam Rd.",
        "City": "Stone Mountain",
        "State": "GA",
        "Zip": "30083",
        "Contact": "404-298-1511"
    },
    {
        "Mosque Name": "Risala Institute",
        "Address": "675 Village Square Dr.",
        "City": "Stone Mountain",
        "State": "GA",
        "Zip": "30083",
        "Contact": "404-294-1637"
    },
    {
        "Mosque Name": "Masjid Attawheed",
        "Address": "4861 Memorial Dr.",
        "City": "Stone Mountain",
        "State": "GA",
        "Zip": "30083",
        "Contact": "404-294-5785"
    },
    {
        "Mosque Name": "Gwinnett Islamic Circle",
        "Address": "50 Old Peachtree Rd. Suite 211",
        "City": "Suwanee",
        "State": "GA",
        "Zip": "30024",
        "Contact": "410-919-0442"
    },
    {
        "Mosque Name": "Muslim Cultural Center",
        "Address": "420 West St.",
        "City": "Valdosta",
        "State": "GA",
        "Zip": "31601",
        "Contact": "229-245-9975"
    },
    {
        "Mosque Name": "Muslim Association of Hawaii",
        "Address": "1935 Aleo Place",
        "City": "Honolulu",
        "State": "HI",
        "Zip": "96822",
        "Contact": "808-947-6263"
    },
    {
        "Mosque Name": "Maui Islamic Center",
        "Address": "170 Kaahumanu Ave.",
        "City": "Kahului",
        "State": "HI",
        "Zip": "96732",
        "Contact": "808-870-2802"
    },
    {
        "Mosque Name": "Islamic Center of Boise",
        "Address": "2719 Stewart Ave.",
        "City": "Boise",
        "State": "ID",
        "Zip": "83702",
        "Contact": "208-429-1866"
    },
    {
        "Mosque Name": "Imam Al-Mahdi Islamic Center",
        "Address": "212 E. 36th St.",
        "City": "Boise",
        "State": "ID",
        "Zip": "83714",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Community of Bosniaks",
        "Address": "6250 S. Cloverdale Rd.",
        "City": "Boise",
        "State": "ID",
        "Zip": "83709",
        "Contact": "208-258-9390"
    },
    {
        "Mosque Name": "Islamic Center of Moscow ",
        "Address": "316 Lilly St",
        "City": "Moscow",
        "State": "ID",
        "Zip": "83843",
        "Contact": ""
    },
    {
        "Mosque Name": " Pocatello Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Southeastern Idaho ",
        "Address": "343 S. 4th St. No.3",
        "City": "Pocatello",
        "State": "ID",
        "Zip": "83201",
        "Contact": "208-904-1350"
    },
    {
        "Mosque Name": "Islamic Center of Twin Falls",
        "Address": "455 Addison Ave.",
        "City": "Twin Falls",
        "State": "ID",
        "Zip": "83301",
        "Contact": "208-736-3754"
    },
    {
        "Mosque Name": " Al-Jameel Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Jaj Childrens Educational Services ",
        "Address": "4 N 251 North Swift Rd.",
        "City": "Addison",
        "State": "IL",
        "Zip": "60101",
        "Contact": "630-268-8007"
    },
    {
        "Mosque Name": "American Muslim Community Organization",
        "Address": "1548 E Algonquin Rd. No.511",
        "City": "Algonquin",
        "State": "IL",
        "Zip": "60102",
        "Contact": "847-604-4818"
    },
    {
        "Mosque Name": "Fox Vally Muslim Community Center",
        "Address": "1187 Timberlake Dr.",
        "City": "Aurora",
        "State": "IL",
        "Zip": "60506",
        "Contact": "630-810-7729"
    },
    {
        "Mosque Name": "Al-Azhar Islamic Foundation",
        "Address": "160 Hawthorne Rd.",
        "City": "Barrington",
        "State": "IL",
        "Zip": "60010",
        "Contact": "847-277-9910"
    },
    {
        "Mosque Name": "United Muslims of America",
        "Address": "26 W 251 Widgear Lane",
        "City": "Bartlett",
        "State": "IL",
        "Zip": "60133",
        "Contact": "630-539-0786"
    },
    {
        "Mosque Name": " Batavia Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Calvary Episcopal Church--Basement ",
        "Address": "222 S. Batavia Ave.",
        "City": "Batavia",
        "State": "IL",
        "Zip": "60510",
        "Contact": "630-879-0889"
    },
    {
        "Mosque Name": "Mosque And Islamic Education Center",
        "Address": "4525 Old Collinsville Rd.",
        "City": "Belleville",
        "State": "IL",
        "Zip": "62226",
        "Contact": "618-222-9055"
    },
    {
        "Mosque Name": "Masjid Ibrahim",
        "Address": "2407 E. Washington St.",
        "City": "Bloomington",
        "State": "IL",
        "Zip": "61704",
        "Contact": "309-663-2828"
    },
    {
        "Mosque Name": "Islamic Center of Bloomington-Normal",
        "Address": "2911 Gill St. Suite 6",
        "City": "Bloomington",
        "State": "IL",
        "Zip": "61704",
        "Contact": "309-664-0304"
    },
    {
        "Mosque Name": " Masjid Al-Islam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Association of Boilingbrook ",
        "Address": "56 E. North Frontage Rd",
        "City": "Bolingbrook",
        "State": "IL",
        "Zip": "60440",
        "Contact": "630-972-0701"
    },
    {
        "Mosque Name": "Mosque Foundation of Chicago",
        "Address": "7360 W. 93Rd St.",
        "City": "Bridgeview",
        "State": "IL",
        "Zip": "60455",
        "Contact": "708-430-5666"
    },
    {
        "Mosque Name": "Islamic Center of Carbondale",
        "Address": "511 S. Popular",
        "City": "Carbondale",
        "State": "IL",
        "Zip": "62901",
        "Contact": "618-549-3868"
    },
    {
        "Mosque Name": " Masjid An-Nur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Carbondale Muslim Center ",
        "Address": "504 S. Wall",
        "City": "Carbondale",
        "State": "IL",
        "Zip": "62901",
        "Contact": "618-457-6522"
    },
    {
        "Mosque Name": "Islamic Center of Greater Centralia",
        "Address": "224 S. Broadway",
        "City": "Centralia",
        "State": "IL",
        "Zip": "62801",
        "Contact": "618-533-3080"
    },
    {
        "Mosque Name": "Masjid Al-Latif",
        "Address": "1747 W. 51St St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60609",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid-E-Rahmat",
        "Address": "6412 N. Talman Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60645",
        "Contact": "773-988-2351"
    },
    {
        "Mosque Name": "Bosnian Islamic Cultural Center",
        "Address": "7022 N. Western Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60645",
        "Contact": "773-338-4076"
    },
    {
        "Mosque Name": "Muslim Community Center",
        "Address": "4380 N. Elston Ave",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60641",
        "Contact": "773-777-7443"
    },
    {
        "Mosque Name": " Masjid Al-Qassam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Chicago Islamic Center ",
        "Address": "3357 W. 63Rd St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60629",
        "Contact": "773-436-8083"
    },
    {
        "Mosque Name": "Masjid E Faizan E Madeena",
        "Address": "6305 N. Ridge Blvd",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60626",
        "Contact": "773-465-7875"
    },
    {
        "Mosque Name": " Islamic Center of Chicago",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "At-Takaful Islamic Society ",
        "Address": "5933 N. Lincoln Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60659",
        "Contact": "773-989-9330"
    },
    {
        "Mosque Name": "Masjid Al-Ihsan",
        "Address": "227 E. 51St St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60615",
        "Contact": ""
    },
    {
        "Mosque Name": "Western Bosnian Islamic Community Center",
        "Address": "2944 N. Narragansett Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60634",
        "Contact": "630-337-8300"
    },
    {
        "Mosque Name": "Masjid Noor",
        "Address": "6151 N. Greenview",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60660",
        "Contact": "773-465-6667"
    },
    {
        "Mosque Name": "Masjid Al-Salam",
        "Address": "3247 W. 63Rd St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60629",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Muminun",
        "Address": "3003 W. Harrison",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60612",
        "Contact": "773-563-6473"
    },
    {
        "Mosque Name": "Lake Shore Muslim Community Center",
        "Address": "7324 N. Western Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60645",
        "Contact": "773-552-2000"
    },
    {
        "Mosque Name": "The Ephraim Bahar Cultural Center",
        "Address": "2525 W. 71St St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60629",
        "Contact": "773-476-8825"
    },
    {
        "Mosque Name": "Islamic Community Center of Illinois",
        "Address": "6435 W. Belmont Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60634",
        "Contact": "773-637-3755"
    },
    {
        "Mosque Name": " Muslim House",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid Kaba ",
        "Address": "8008 S. Cottage Grove Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60619",
        "Contact": "773-851-5204"
    },
    {
        "Mosque Name": "Jamia Masjid",
        "Address": "6340 N. Campbell Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60659",
        "Contact": "773-681-0599"
    },
    {
        "Mosque Name": " Masom Community Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Midwest Assoc of Shia Organized Musilms ",
        "Address": "6111 W. Addison St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60634",
        "Contact": "773-283-9718"
    },
    {
        "Mosque Name": "Masjid Al-Salam",
        "Address": "4819 S. Ashland Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60609",
        "Contact": "312-247-2666"
    },
    {
        "Mosque Name": "Al-Farooq Mosque",
        "Address": "8950 S. Stony Island",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60649",
        "Contact": "773-752-2015"
    },
    {
        "Mosque Name": " Masjid-E-Syed Hashim",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mahdavia Islamic Center of Chicago ",
        "Address": "7419 N. Western Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60645",
        "Contact": "773-262-6680"
    },
    {
        "Mosque Name": "Masjid Dawah",
        "Address": "210 N. Homan Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60624",
        "Contact": "773-870-1595"
    },
    {
        "Mosque Name": "Masjid Al-Muhajireen",
        "Address": "3777 W. Columbus Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60652",
        "Contact": "773-581-1083"
    },
    {
        "Mosque Name": "Midwest Masoom Assocation",
        "Address": "4353 W. Laurence Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60660",
        "Contact": "773-283-9718"
    },
    {
        "Mosque Name": " Masjid At-Tawheed Chicago",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Tawheed Islamic Center ",
        "Address": "8726 S. Halsted St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60620",
        "Contact": "773-487-9368"
    },
    {
        "Mosque Name": "Bosnian Masjid",
        "Address": "4731 N. Lawndale Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60625",
        "Contact": "847-452-7339"
    },
    {
        "Mosque Name": "Sri Lanka Jummah Masjid",
        "Address": "6412 N. Hamilton Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60645",
        "Contact": "773-761-0469"
    },
    {
        "Mosque Name": "Masjid-E--Abu Bakar (Roscoe Masjid)",
        "Address": "1015 W. Roscoe St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60657",
        "Contact": "312-281-9551"
    },
    {
        "Mosque Name": "Masjid Al-Ansar",
        "Address": "2506 W. 63Rd St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60629",
        "Contact": "773-434-5027"
    },
    {
        "Mosque Name": "Masjid Al-Taqwa",
        "Address": "5101 N. Sheridan Rd.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60640",
        "Contact": "773-251-3200"
    },
    {
        "Mosque Name": "Masjid Al-Taqwa",
        "Address": "3065 E. 93Rd St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60617",
        "Contact": "773-341-7113"
    },
    {
        "Mosque Name": "Taqwa Islamic Center",
        "Address": "1550 W. 88Th  St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60620",
        "Contact": "773-429-0032"
    },
    {
        "Mosque Name": "Tafweedul Quran",
        "Address": "6355 N. Claremont Ave. @B1",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60659",
        "Contact": "773-743-9345"
    },
    {
        "Mosque Name": "Makki Masjid",
        "Address": "3418 W. Ainslie St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60625",
        "Contact": "773-588-8865"
    },
    {
        "Mosque Name": "Al-Madinah Islamic Center",
        "Address": "1701 W. Wallen Ave.  Basement",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60626",
        "Contact": "773-274-1184"
    },
    {
        "Mosque Name": "Downtown Islamic Center",
        "Address": "231 S. State St. 4Th Fl.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60604",
        "Contact": "312-939-9095"
    },
    {
        "Mosque Name": " Masjid-E-Ayesha",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Chicago Sunni Muslim Society ",
        "Address": "2409-B W. Devon Ave",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60659",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al Faatir",
        "Address": "1200 E. 47th St",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60615",
        "Contact": "773-548-3624"
    },
    {
        "Mosque Name": "Masjid Sahwa",
        "Address": "4913 N. Whipple",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60625",
        "Contact": ""
    },
    {
        "Mosque Name": "Turkish American Cultural Alliance",
        "Address": "3745 N. Harlem Ave",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60634",
        "Contact": "509-695-1487"
    },
    {
        "Mosque Name": " Masjid Hameedia",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Lakeshore Muslim Community Center ",
        "Address": "1456 W. Elmdale Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60660",
        "Contact": "773-274-2435"
    },
    {
        "Mosque Name": "Icna-Chicago",
        "Address": "6224 N. California Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60659",
        "Contact": "866-497-9037"
    },
    {
        "Mosque Name": "Nigerian Islamic Assoc.",
        "Address": "932 W. Sheridian Rd",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60613",
        "Contact": "773-665-2451"
    },
    {
        "Mosque Name": " Masjid Al-Hafeez",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Al-Haqqani Masjid ",
        "Address": "461 E. 83Rd St.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60613",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Mustafa Islamic Center",
        "Address": "5736 N. Western Ave.",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60659",
        "Contact": "773-275-7130"
    },
    {
        "Mosque Name": "Masjid Umar",
        "Address": "11405 S. Michigan Ave",
        "City": "Chicago",
        "State": "IL",
        "Zip": "60628",
        "Contact": "773-660-0399"
    },
    {
        "Mosque Name": "Islamic Center of Mchenry County",
        "Address": "5800 E. Crystal Lake Ave.",
        "City": "Crystal Lake",
        "State": "IL",
        "Zip": "60014",
        "Contact": "815-893-6005"
    },
    {
        "Mosque Name": " Masjid Wali Hasan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Decatur ",
        "Address": "1635 Huston Dr.",
        "City": "Decatur",
        "State": "IL",
        "Zip": "62526",
        "Contact": "217-877-2863"
    },
    {
        "Mosque Name": "Islamic Society of Northern Illinois Univ.",
        "Address": "721 Normal Rd",
        "City": "Dekalb",
        "State": "IL",
        "Zip": "60115",
        "Contact": "815-756-9640"
    },
    {
        "Mosque Name": "Islamic Community Center of Des Plains",
        "Address": "480 Potter Rd",
        "City": "Des Plains",
        "State": "IL",
        "Zip": "60016",
        "Contact": "847-824-1100"
    },
    {
        "Mosque Name": " Masjid Al-Ghuraba",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Edwardsville ",
        "Address": "21-A Kettle River Rd.",
        "City": "Edwardsville",
        "State": "IL",
        "Zip": "62034",
        "Contact": ""
    },
    {
        "Mosque Name": " Insitutue of Islamic Education",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid Al-Islam ",
        "Address": "1048 Bluff City Blvd",
        "City": "Elgin",
        "State": "IL",
        "Zip": "60120",
        "Contact": "847-695-4685"
    },
    {
        "Mosque Name": "Islamic Organization of North America",
        "Address": "561 Lancaster Cr",
        "City": "Elgin",
        "State": "IL",
        "Zip": "60123",
        "Contact": "630-433-7029"
    },
    {
        "Mosque Name": "Islamic Community Center",
        "Address": "345 Heine St.",
        "City": "Elgin",
        "State": "IL",
        "Zip": "60123",
        "Contact": "847-695-3338"
    },
    {
        "Mosque Name": "Dar-Us-Sunnah Masjid and Comm Center",
        "Address": "2045 Brown Ave.",
        "City": "Evanston",
        "State": "IL",
        "Zip": "60201",
        "Contact": ""
    },
    {
        "Mosque Name": "American Islamic Association",
        "Address": "8860 W. St. Francis Rd.",
        "City": "Frankfort",
        "State": "IL",
        "Zip": "60423",
        "Contact": "815-469-1551"
    },
    {
        "Mosque Name": " Islamic Education Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Husaini Association of Greater Chicago ",
        "Address": "1269 Goodrich Ave.",
        "City": "Glendale Heights",
        "State": "IL",
        "Zip": "60139",
        "Contact": "630-469-5533"
    },
    {
        "Mosque Name": "Muslim Society",
        "Address": "1785 Bloomingdale Rd",
        "City": "Glendale Hights",
        "State": "IL",
        "Zip": "60139",
        "Contact": "630-653-7872"
    },
    {
        "Mosque Name": "Light of Islam (Masjid Nur-Ul-Islam)",
        "Address": "46 E. Sibley Blvd",
        "City": "Harvey",
        "State": "IL",
        "Zip": "60426",
        "Contact": "708-331-7255"
    },
    {
        "Mosque Name": " South Suburban Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Gujarati Muslim Association ",
        "Address": "15200 S. Broadway",
        "City": "Harvey",
        "State": "IL",
        "Zip": "60426",
        "Contact": "708-331-4165"
    },
    {
        "Mosque Name": "Harvey Islamic Center",
        "Address": "163 E. 154th St.",
        "City": "Harvey",
        "State": "IL",
        "Zip": "60426",
        "Contact": "708-333-1823"
    },
    {
        "Mosque Name": "Albanian American Islamic Center",
        "Address": "5825 W. St. Charles Rd.",
        "City": "Hillsdale",
        "State": "IL",
        "Zip": "60163",
        "Contact": "708-544-2609"
    },
    {
        "Mosque Name": "Islamic Foundation North",
        "Address": "1751 N. O Plaine Rd.",
        "City": "Libertyville",
        "State": "IL",
        "Zip": "60048",
        "Contact": "847-406-3730"
    },
    {
        "Mosque Name": " Lake Cook Weiland Comm Ctr For Spiritual Healing",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid of Lake County ",
        "Address": "20515 N. Horatio Blvd",
        "City": "Lincolnshire",
        "State": "IL",
        "Zip": "60069",
        "Contact": "847-459-8526"
    },
    {
        "Mosque Name": "Al-Masjidul-Huq",
        "Address": "1620 S. Highland Ave.",
        "City": "Lombard",
        "State": "IL",
        "Zip": "60148",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Darussalam",
        "Address": "21W525 North Ave.",
        "City": "Lombard",
        "State": "IL",
        "Zip": "60148",
        "Contact": "630-847-6492"
    },
    {
        "Mosque Name": "Darus Salam",
        "Address": "21 W 525 North Ave",
        "City": "Lombard",
        "State": "IL",
        "Zip": "60148",
        "Contact": "630-847-6492"
    },
    {
        "Mosque Name": "Islamic Center of Macomb",
        "Address": "601 Wigwam Hollow",
        "City": "Macomb",
        "State": "IL",
        "Zip": "61455",
        "Contact": "309-833-3875"
    },
    {
        "Mosque Name": " Masjid Al-Ihsan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Quad Cities ",
        "Address": "6005 34th Ave.",
        "City": "Moline",
        "State": "IL",
        "Zip": "61265",
        "Contact": "309-792-1690"
    },
    {
        "Mosque Name": " Muslim Education Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Center ",
        "Address": "8601 Menard Ave.",
        "City": "Morton Grove",
        "State": "IL",
        "Zip": "60053",
        "Contact": "847-470-8801"
    },
    {
        "Mosque Name": "Islamic Center of Naperville-Al-Hilal",
        "Address": "2844 W. Ogden Ave.",
        "City": "Naperville",
        "State": "IL",
        "Zip": "60540",
        "Contact": "630-428-3733"
    },
    {
        "Mosque Name": "Islamic Center of Naperville-Al-Hidayah",
        "Address": "450 S Olson Dr",
        "City": "Naperville",
        "State": "IL",
        "Zip": "60566",
        "Contact": "630-355-3733"
    },
    {
        "Mosque Name": "Islamic Cultural Center of Greater Chicago",
        "Address": "1810 N Pfingsten Rd",
        "City": "Northbrook",
        "State": "IL",
        "Zip": "60062",
        "Contact": "847-272-0319"
    },
    {
        "Mosque Name": " The Prayer Center of Orland Park",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Orland Park Mosque ",
        "Address": "16530 S. 104th Ave.",
        "City": "Orland Park",
        "State": "IL",
        "Zip": "60467",
        "Contact": "708-349-6592"
    },
    {
        "Mosque Name": "Muslim Education & Community Asst",
        "Address": "817 W. Armstrong",
        "City": "Peoria",
        "State": "IL",
        "Zip": "61606",
        "Contact": "309-685-7576"
    },
    {
        "Mosque Name": "Muslim Student Association House",
        "Address": "1315 W. Main St.",
        "City": "Peoria",
        "State": "IL",
        "Zip": "61606",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Peoria",
        "Address": "1716 N. North St.",
        "City": "Peoria",
        "State": "IL",
        "Zip": "61605",
        "Contact": "309-688-4605"
    },
    {
        "Mosque Name": " Masjid As-Salaam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Foundation of Peoria ",
        "Address": "823 W. Salaam Dr.",
        "City": "Peoria",
        "State": "IL",
        "Zip": "61615",
        "Contact": "309-691-8195"
    },
    {
        "Mosque Name": "Muslim Assoc. of Greater Peoria",
        "Address": "25172 N. Spring Creek Rd.",
        "City": "Peoria",
        "State": "IL",
        "Zip": "61671",
        "Contact": "309-745-8410"
    },
    {
        "Mosque Name": "Islamic Student Society",
        "Address": "1315 W. Main St.",
        "City": "Peoria",
        "State": "IL",
        "Zip": "61604",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Aqsa Islamic Community Center",
        "Address": "17940 Bronk Rd.",
        "City": "Plainfield",
        "State": "IL",
        "Zip": "50586",
        "Contact": "815-230-0786"
    },
    {
        "Mosque Name": "Islamic Foundation of Southwest Suburbs",
        "Address": "16122 R. 59 Suite 108",
        "City": "Plainfield",
        "State": "IL",
        "Zip": "60586",
        "Contact": "630-290-0857"
    },
    {
        "Mosque Name": "Islamic Information Center of America",
        "Address": "830 E. Old Willow Rd.",
        "City": "Prospect Heights",
        "State": "IL",
        "Zip": "60070",
        "Contact": "847-541-8141"
    },
    {
        "Mosque Name": "Muslim Community Center of Rockford",
        "Address": "5921 Darlene Dr.",
        "City": "Rockford",
        "State": "IL",
        "Zip": "61109",
        "Contact": "815-397-3311"
    },
    {
        "Mosque Name": "Islamic Society of Northwest Suburbs",
        "Address": "3890 Industrial Ave",
        "City": "Rolling Meadows",
        "State": "IL",
        "Zip": "60008",
        "Contact": "847-253-6400"
    },
    {
        "Mosque Name": " Masjid Al-Huda",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Midwest Islamic Center ",
        "Address": "1081 W. Irving Park Rd.",
        "City": "Schaumburg",
        "State": "IL",
        "Zip": "60193",
        "Contact": "630-529-1786"
    },
    {
        "Mosque Name": "Islamic Society of Greater Springfield",
        "Address": "3000 Stanton St.",
        "City": "Springfield",
        "State": "IL",
        "Zip": "62703",
        "Contact": "217-529-8970"
    },
    {
        "Mosque Name": "Bait Ul Ilm Islamic Center",
        "Address": "485 S. Bartlett Rd.",
        "City": "Streamwood",
        "State": "IL",
        "Zip": "60107",
        "Contact": ""
    },
    {
        "Mosque Name": "Central Illinois Mosque And Islamic Center",
        "Address": "106 S. Lincoln Ave.",
        "City": "Urbana",
        "State": "IL",
        "Zip": "61801",
        "Contact": "217-344-1555"
    },
    {
        "Mosque Name": "Islamic Foundation",
        "Address": "300 W. Highridge",
        "City": "Villa Park",
        "State": "IL",
        "Zip": "60181",
        "Contact": "630-782-6562"
    },
    {
        "Mosque Name": "Al-Madina Islamic Center",
        "Address": "2 N 579 Morton Rd.",
        "City": "West Chicago",
        "State": "IL",
        "Zip": "60185",
        "Contact": "630-439-4138"
    },
    {
        "Mosque Name": "Islamic Center of Western Suburbs",
        "Address": "28W774 Army Trail Rd.",
        "City": "West Chicago",
        "State": "IL",
        "Zip": "60185",
        "Contact": "630-402-0805"
    },
    {
        "Mosque Name": " Mecca",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Educational Cultural Ctr of America ",
        "Address": "720 E. Plainfield Rd.",
        "City": "Willowsbrook",
        "State": "IL",
        "Zip": "60527",
        "Contact": "630-241-2000"
    },
    {
        "Mosque Name": "Al Hira Community Center",
        "Address": "140 Commercial St.",
        "City": "Wood Dale",
        "State": "IL",
        "Zip": "60191",
        "Contact": "630-350-7860"
    },
    {
        "Mosque Name": "Angola Islamic Center",
        "Address": "406 S. Darling St.",
        "City": "Angola",
        "State": "IN",
        "Zip": "46703",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Bloomington",
        "Address": "1925 E. Atwater",
        "City": "Bloomington",
        "State": "IN",
        "Zip": "47401",
        "Contact": "812-333-1611"
    },
    {
        "Mosque Name": "Islamic Society of Columbus In",
        "Address": "1531 13th St.",
        "City": "Columbus",
        "State": "IN",
        "Zip": "47201",
        "Contact": "269-779-7439"
    },
    {
        "Mosque Name": "Northwest Indiana Islamic Center",
        "Address": "9803 Colarado St",
        "City": "Crown Point",
        "State": "IN",
        "Zip": "46307",
        "Contact": "219-756-7622"
    },
    {
        "Mosque Name": "Al Huda Foundation",
        "Address": "12201 Lantern Rd.",
        "City": "Fishers",
        "State": "IN",
        "Zip": "46038",
        "Contact": "317-570-9100"
    },
    {
        "Mosque Name": " Al-Hidayaa Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Fort Wayne Islamic Center ",
        "Address": "1117 Lagro Dr.",
        "City": "Fort Wayne",
        "State": "IN",
        "Zip": "46804",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al-Quds",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Fort Wayne ",
        "Address": "1109 Chute St.",
        "City": "Ft. Wayne",
        "State": "IN",
        "Zip": "46803",
        "Contact": "260-425-9834"
    },
    {
        "Mosque Name": "Masjid Al- Amin",
        "Address": "3702 W. 11th Ave",
        "City": "Gary",
        "State": "IN",
        "Zip": "46404",
        "Contact": "219-949-1854"
    },
    {
        "Mosque Name": "Gary Muslim Center",
        "Address": "1473 W. 15th Ave",
        "City": "Gary",
        "State": "IN",
        "Zip": "46407",
        "Contact": "219-885-3018"
    },
    {
        "Mosque Name": "Illiana Islamic Association",
        "Address": "9606 Spring St.",
        "City": "Highland",
        "State": "IN",
        "Zip": "46322",
        "Contact": "219-924-2940"
    },
    {
        "Mosque Name": "Nur-Allah Islamic Center",
        "Address": "2040 E. 46th St.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46205",
        "Contact": "317-251-9796"
    },
    {
        "Mosque Name": "Masjid Al-Fajr",
        "Address": "2846 Cold Spring Rd",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46222",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Mumineen",
        "Address": "4088 Millersville Rd.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46205",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid An-Nur",
        "Address": "5250 Lafayette Rd.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46254",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Taqwa",
        "Address": "4836 Mt. Vernon Dr.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46227",
        "Contact": ""
    },
    {
        "Mosque Name": "Dar Al-Zikr",
        "Address": "2900 S. Tibbs",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46221",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Sahaba Masjid",
        "Address": "711 S. High School Rd.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46241",
        "Contact": "317-258-2010"
    },
    {
        "Mosque Name": "Zainabia Center For Momin",
        "Address": "4444 W. 56th St.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46254",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Haqq Foundation",
        "Address": "5554 Georgetown Rd.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46254",
        "Contact": "317-291-0778"
    },
    {
        "Mosque Name": "Masjid As-Salaf As-Salih",
        "Address": "3408 E. 10th St.",
        "City": "Indianapolis",
        "State": "IN",
        "Zip": "46201",
        "Contact": "317-822-8161"
    },
    {
        "Mosque Name": " Kendallville Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â American Moslem Society-Indiana ",
        "Address": "802 N. Swyer Rd.",
        "City": "Kendallville",
        "State": "IN",
        "Zip": "46755",
        "Contact": "260-242-1433"
    },
    {
        "Mosque Name": "Islamic Association of Kokomo",
        "Address": "P.O. Box 6608",
        "City": "Kokomo",
        "State": "IN",
        "Zip": "46904",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Michigan City",
        "Address": "1606 N. 500 E",
        "City": "Michigan City",
        "State": "IN",
        "Zip": "46360",
        "Contact": "219-879-9667"
    },
    {
        "Mosque Name": "Islamic Center of Muncie",
        "Address": "5141 W. Hessler Rd.",
        "City": "Muncie",
        "State": "IN",
        "Zip": "47305",
        "Contact": "765-288-8014"
    },
    {
        "Mosque Name": "Islamic Association of Indiana",
        "Address": "602 Vincennes St.",
        "City": "New Albany",
        "State": "IN",
        "Zip": "47150",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Evansville",
        "Address": "4200 Grimm Rd.",
        "City": "Newburgh",
        "State": "IN",
        "Zip": "47630",
        "Contact": "812-853-8806"
    },
    {
        "Mosque Name": "Islamic Society of North America",
        "Address": "Po Box 38",
        "City": "Plainfield",
        "State": "IN",
        "Zip": "46168",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid As-Sunnah",
        "Address": "910 Bellevue Ave.",
        "City": "South Bend",
        "State": "IN",
        "Zip": "46615",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Michiana ",
        "Address": "3310 Hepler St.",
        "City": "South Bend",
        "State": "IN",
        "Zip": "46635",
        "Contact": "574-272-0569"
    },
    {
        "Mosque Name": "Islamic Dawah Center",
        "Address": "1215 Lincoln Way West",
        "City": "South Bend",
        "State": "IN",
        "Zip": "46616",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Terre Haute",
        "Address": "1319 S. 6th St.",
        "City": "Terre Haute",
        "State": "IN",
        "Zip": "47802",
        "Contact": "812-232-0254"
    },
    {
        "Mosque Name": "Shia Islamic Center of Michigan City",
        "Address": "613 Greentree Dr.",
        "City": "Trail Creek",
        "State": "IN",
        "Zip": "46360",
        "Contact": "219-879-9667"
    },
    {
        "Mosque Name": "Islamic Society of Greater Lafayette",
        "Address": "1022 First St.",
        "City": "West Lafayette",
        "State": "IN",
        "Zip": "47906",
        "Contact": "765-743-8650"
    },
    {
        "Mosque Name": " Masjid Darul Arqum",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Ames ",
        "Address": "1212 Iowa Ave.",
        "City": "Ames",
        "State": "IA",
        "Zip": "50014",
        "Contact": "515-292-3683"
    },
    {
        "Mosque Name": "Muslim Community of Quad Cities",
        "Address": "2115 Kimberly Rd",
        "City": "Bettendorf",
        "State": "IA",
        "Zip": "52782",
        "Contact": "563-359-8123"
    },
    {
        "Mosque Name": "Mother Mosque of North America",
        "Address": "1335 Ninth St. Nw",
        "City": "Cedar Rapids",
        "State": "IA",
        "Zip": "52405",
        "Contact": "319-366-3150"
    },
    {
        "Mosque Name": "Islamic Center & Mosque",
        "Address": "2999 First Ave. Sw",
        "City": "Cedar Rapids",
        "State": "IA",
        "Zip": "52405",
        "Contact": "319-362-0857"
    },
    {
        "Mosque Name": "Muslim American Society of Iowa",
        "Address": "2121 North Towne Lane Ne",
        "City": "Cedar Rapids",
        "State": "IA",
        "Zip": "52402",
        "Contact": "319-892-0256"
    },
    {
        "Mosque Name": "Islamic Society of Clinton County",
        "Address": "1500 2Nd Ave. S",
        "City": "Clinton",
        "State": "IA",
        "Zip": "52732",
        "Contact": "563-243-8421"
    },
    {
        "Mosque Name": "Islamic And Cultural Center Bosniak",
        "Address": "3805 Lower Beaver Rd.",
        "City": "Des Moines",
        "State": "IA",
        "Zip": "50310",
        "Contact": "515-279-8374"
    },
    {
        "Mosque Name": "Islamic And Education Center - Ezan",
        "Address": "6206 Douglas Ave.",
        "City": "Des Moines",
        "State": "IA",
        "Zip": "50322",
        "Contact": "515-864-7003"
    },
    {
        "Mosque Name": " Masjid An-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Organization ",
        "Address": "1117 42Nd St.",
        "City": "Des Moines",
        "State": "IA",
        "Zip": "50311",
        "Contact": "515-274-4626"
    },
    {
        "Mosque Name": "Tri-State Islamic Center",
        "Address": "805 Century Dr. Suite 101",
        "City": "Dubuque",
        "State": "IA",
        "Zip": "52002",
        "Contact": "815-501-4563"
    },
    {
        "Mosque Name": " Masjid Al-Iman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Al-Iman Center of Iowa ",
        "Address": "1812 W. Benton St.",
        "City": "Iowa City",
        "State": "IA",
        "Zip": "52246",
        "Contact": "319-354-6167"
    },
    {
        "Mosque Name": "Islamic Society of Cerro Gordo",
        "Address": "122 1/2 N. Federal Ave.",
        "City": "Mason City",
        "State": "IA",
        "Zip": "50401",
        "Contact": ""
    },
    {
        "Mosque Name": "Mosque of Sioux City",
        "Address": "1219 Jones St.",
        "City": "Sioux City",
        "State": "IA",
        "Zip": "51105",
        "Contact": "712-234-1670"
    },
    {
        "Mosque Name": "Islamic Center of Des Moines",
        "Address": "6201 Franklin Ave.",
        "City": "Urbandale",
        "State": "IA",
        "Zip": "50322",
        "Contact": "515-255-0212"
    },
    {
        "Mosque Name": " Masjid Al Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Waterloo ",
        "Address": "2110 Sager Ave.",
        "City": "Waterloo",
        "State": "IA",
        "Zip": "50701",
        "Contact": "319-233 6640"
    },
    {
        "Mosque Name": "Bosnian Islamic Association of Waterloo",
        "Address": "728 W. 2Nd St.",
        "City": "Waterloo",
        "State": "IA",
        "Zip": "50701",
        "Contact": "319-610-2703"
    },
    {
        "Mosque Name": "Islamic Foundation of Iowa",
        "Address": "330 South St.",
        "City": "Waterloo",
        "State": "IA",
        "Zip": "50701",
        "Contact": "319-610-3235"
    },
    {
        "Mosque Name": "Masjid Al-Taqwa",
        "Address": "2002 1St Ave.",
        "City": "Dodge City",
        "State": "KS",
        "Zip": "67801",
        "Contact": "206-905-1461"
    },
    {
        "Mosque Name": "Islamic Center of Emporia",
        "Address": "1125 Mechanic St.",
        "City": "Emporia",
        "State": "KS",
        "Zip": "66801",
        "Contact": "620-343-9229"
    },
    {
        "Mosque Name": " Islamic Center of Garden City",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Burmese Muslim Community ",
        "Address": "312 W. Mary St. A1",
        "City": "Garden City",
        "State": "KS",
        "Zip": "67846",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid of Hays",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid of Hays Society ",
        "Address": "1409 Pine St.",
        "City": "Hays",
        "State": "KS",
        "Zip": "67601",
        "Contact": "785-625-2311"
    },
    {
        "Mosque Name": "Al-Islam Society of Junction City",
        "Address": "P.O. Box 341",
        "City": "Junction City",
        "State": "KS",
        "Zip": "66441",
        "Contact": "832-741-9302"
    },
    {
        "Mosque Name": " Masjid Al-Ma Roof",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Junction City ",
        "Address": "119 E. 11th St.",
        "City": "Junction City",
        "State": "KS",
        "Zip": "66441",
        "Contact": "316-214-6710"
    },
    {
        "Mosque Name": "Az-Zahra Islamic Center",
        "Address": "8350 Leavenworth Rd.",
        "City": "Kansas City",
        "State": "KS",
        "Zip": "66109",
        "Contact": "913-440-4786"
    },
    {
        "Mosque Name": "Masjid Omar",
        "Address": "2400 Lafayette Ave",
        "City": "Kansas City",
        "State": "KS",
        "Zip": "66104",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Lawrence",
        "Address": "1917 Naismith Dr.",
        "City": "Lawrence",
        "State": "KS",
        "Zip": "66046",
        "Contact": "785-749-1638"
    },
    {
        "Mosque Name": "Islamic Center of Leavenworth",
        "Address": "545 Oregon St.",
        "City": "Leavenworth",
        "State": "KS",
        "Zip": "66048",
        "Contact": "913-683-0905"
    },
    {
        "Mosque Name": "Islamic Center of Manhattan",
        "Address": "1224 Hylton Hights",
        "City": "Manhattan",
        "State": "KS",
        "Zip": "66502",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Kansas",
        "Address": "14750 W. 143Rd St.",
        "City": "Olathe",
        "State": "KS",
        "Zip": "66062",
        "Contact": "913-390-5055"
    },
    {
        "Mosque Name": "Islamic Center of Johnson County",
        "Address": "9001 W. 151St St.",
        "City": "Overland Park",
        "State": "KS",
        "Zip": "66221",
        "Contact": "913-239-0770"
    },
    {
        "Mosque Name": "Islamic Society of Southeast Kansas",
        "Address": "1292 S. 220th St.",
        "City": "Pittsburg",
        "State": "KS",
        "Zip": "66762",
        "Contact": "620-231-6799"
    },
    {
        "Mosque Name": " Shawnee Mission Islamic Education Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â C/O Lenaxa Community Center ",
        "Address": "13420 Oak St.",
        "City": "Shawnee Mission",
        "State": "KS",
        "Zip": "66215",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Topeka",
        "Address": "1115 S.E. 27th St.",
        "City": "Topeka",
        "State": "KS",
        "Zip": "66605",
        "Contact": "785-233-1171"
    },
    {
        "Mosque Name": "Islamic Assoc. of Mid Kansas",
        "Address": "3406 W. Taft",
        "City": "Wichita",
        "State": "KS",
        "Zip": "67213",
        "Contact": "316-945-0472"
    },
    {
        "Mosque Name": " Masjid Al-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Wichita ",
        "Address": "3104 E. 17th St. N",
        "City": "Wichita",
        "State": "KS",
        "Zip": "67214",
        "Contact": "316-516-8939"
    },
    {
        "Mosque Name": " Masjid Daru Salam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Wichita ",
        "Address": "6655 E. 34th St. N",
        "City": "Wichita",
        "State": "KS",
        "Zip": "67226",
        "Contact": "316-682-5479"
    },
    {
        "Mosque Name": "Islamic Society of Wichita Falls",
        "Address": "1701 Trigg Lane",
        "City": "Wichita Falls",
        "State": "KS",
        "Zip": "67206",
        "Contact": ""
    },
    {
        "Mosque Name": "Bosnian Islamic Center of Bowling Green",
        "Address": "115 Dishman Lane",
        "City": "Bowling Green",
        "State": "KY",
        "Zip": "42101",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Bowling Green",
        "Address": "2140 Morgantown Rd.",
        "City": "Bowling Green",
        "State": "KY",
        "Zip": "42101",
        "Contact": "270-846-0806"
    },
    {
        "Mosque Name": "Bowling Green Islamic Society",
        "Address": "802 Lain Ave.",
        "City": "Bowling Green",
        "State": "KY",
        "Zip": "42101",
        "Contact": "270-843-9784"
    },
    {
        "Mosque Name": "Islamic Center of Northern Kentucky",
        "Address": "8142 Mall Rd. No.235",
        "City": "Burlington",
        "State": "KY",
        "Zip": "41042",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Association of Northern Kentucky",
        "Address": "1418 Garrard St.",
        "City": "Covington",
        "State": "KY",
        "Zip": "41011",
        "Contact": "606-491-5986"
    },
    {
        "Mosque Name": "Islamic Center of Danville",
        "Address": "656 Ben Ali Dr. No.308",
        "City": "Danville",
        "State": "KY",
        "Zip": "40422",
        "Contact": "606-936-1694"
    },
    {
        "Mosque Name": "Islamic Center of Elizabethtown",
        "Address": "2816 Ring Rd",
        "City": "Elizabethtown",
        "State": "KY",
        "Zip": "41042",
        "Contact": "270-765-7190"
    },
    {
        "Mosque Name": "Islamic Center of Northern Kentucky",
        "Address": "8142 Mall Rd.",
        "City": "Florence",
        "State": "KY",
        "Zip": "41042",
        "Contact": "859-391-2291"
    },
    {
        "Mosque Name": "Islamic Center of Frankfort",
        "Address": "741 Schenkel Ln",
        "City": "Frankfort",
        "State": "KY",
        "Zip": "40601",
        "Contact": "502-227-8641"
    },
    {
        "Mosque Name": "Masjid Bilal Ibn Rabah",
        "Address": "1545 Russell Cave Rd.",
        "City": "Lexington",
        "State": "KY",
        "Zip": "40505",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Lexington",
        "Address": "649 S. Limestone St",
        "City": "Lexington",
        "State": "KY",
        "Zip": "40508",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Educational Services of London",
        "Address": "133 Park Wells Rd.",
        "City": "London",
        "State": "KY",
        "Zip": "40744",
        "Contact": "606-878-7928"
    },
    {
        "Mosque Name": "Muslim Community Center of Louisville",
        "Address": "8215 Old Westport Rd.",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40222",
        "Contact": "502-412-7825"
    },
    {
        "Mosque Name": "Islamic Cultural Center of Louisville",
        "Address": "4007 N. Upper River Rd",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40207",
        "Contact": "502-893-9466"
    },
    {
        "Mosque Name": "Abubakar Islamic Center of Louisville",
        "Address": "1536 S. 7th St.",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40214",
        "Contact": "502-442-1718"
    },
    {
        "Mosque Name": " Lac Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid Nabi ",
        "Address": "4000 Bardstown Rd.",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40218",
        "Contact": "502-876-6769"
    },
    {
        "Mosque Name": "Islamic Cultural Association of Louisville",
        "Address": "1911 Buechel Bank Rd.",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40218",
        "Contact": "502-451-9549"
    },
    {
        "Mosque Name": "Abdullah Muhammad Islamic Center",
        "Address": "1917 W. Magazine St.",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40210",
        "Contact": "502-772-1500"
    },
    {
        "Mosque Name": "Al-Zaharah Islamic Education Center",
        "Address": "4010 Bishop Lane",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40218",
        "Contact": "502-969-2199"
    },
    {
        "Mosque Name": "Bosnian-American Islamic Center",
        "Address": "5927 Six Mile Ln",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40218",
        "Contact": "502-495-5092"
    },
    {
        "Mosque Name": "Islamic Center of Louisville",
        "Address": "1715 S. 4th St",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40208",
        "Contact": "502-634-4104"
    },
    {
        "Mosque Name": "Al Nur Mosque",
        "Address": "2815 S. 4th St.",
        "City": "Louisville",
        "State": "KY",
        "Zip": "40205",
        "Contact": "502-614-6790"
    },
    {
        "Mosque Name": " Morehead Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Morehead ",
        "Address": "307 W. Second St.",
        "City": "Morehead",
        "State": "KY",
        "Zip": "40351",
        "Contact": "606-783-0661"
    },
    {
        "Mosque Name": "Islamic Center of Owensboro",
        "Address": "1733 Moseley St. Suite C",
        "City": "Ownsboro",
        "State": "KY",
        "Zip": "42303",
        "Contact": "270-688-0001"
    },
    {
        "Mosque Name": " Masjid Al Farooq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Eastern Kentucky ",
        "Address": "8 Masjid Ave.",
        "City": "Prestonsburg",
        "State": "KY",
        "Zip": "41653",
        "Contact": "606-889-0626"
    },
    {
        "Mosque Name": "Islamic Center of Richmond",
        "Address": "203 Hanover St.",
        "City": "Richmond",
        "State": "KY",
        "Zip": "40475",
        "Contact": "859-625-0353"
    },
    {
        "Mosque Name": "Islamic Center of Somerset",
        "Address": "125 Office Park Dr.",
        "City": "Somerset",
        "State": "KY",
        "Zip": "42501",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Central Louisiana",
        "Address": "2232 Worley Dr.",
        "City": "Alexandria",
        "State": "LA",
        "Zip": "71301",
        "Contact": "318-787-2766"
    },
    {
        "Mosque Name": " Masjid Yaseen",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Arabi ",
        "Address": "7527 W. Judge Perez Dr.",
        "City": "Arabi",
        "State": "LA",
        "Zip": "70032",
        "Contact": "504-338-6760"
    },
    {
        "Mosque Name": "Masjid Baitul Furan",
        "Address": "722-C New Rafe Meyer Rd.",
        "City": "Baton Rouge",
        "State": "LA",
        "Zip": "70807",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al Rahman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Baton Rouge ",
        "Address": "285 E. Airport Ave.",
        "City": "Baton Rouge",
        "State": "LA",
        "Zip": "70806",
        "Contact": "225-924-0070"
    },
    {
        "Mosque Name": " Masjid Al Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Baton Rouge ",
        "Address": "820 W. Chimes",
        "City": "Baton Rouge",
        "State": "LA",
        "Zip": "70802",
        "Contact": "225-387-3617"
    },
    {
        "Mosque Name": " Masjid Sabiqun",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Complex ",
        "Address": "740 E. Washington",
        "City": "Baton Rouge",
        "State": "LA",
        "Zip": "70802",
        "Contact": "225-334-7806"
    },
    {
        "Mosque Name": "Masjid Abdur Raqeeb",
        "Address": "5141 Prescott",
        "City": "Baton Rouge",
        "State": "LA",
        "Zip": "70805",
        "Contact": "225-357-8236"
    },
    {
        "Mosque Name": " Masjid Al-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Greater  Shreveport ",
        "Address": "1000 Delhi St.",
        "City": "Bossier City",
        "State": "LA",
        "Zip": "71111",
        "Contact": "318-675-0405"
    },
    {
        "Mosque Name": " Masjid Tawbah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â West Bank Muslim Association ",
        "Address": "448 Reality Rd",
        "City": "Gretna",
        "State": "LA",
        "Zip": "70056",
        "Contact": "504-392-3425"
    },
    {
        "Mosque Name": "Islamic Center of Lafayette",
        "Address": "700 Tulane",
        "City": "Lafayette",
        "State": "LA",
        "Zip": "70503",
        "Contact": "337-232-7700"
    },
    {
        "Mosque Name": "Islamic Center of Fort Polk",
        "Address": "1090 Entrance Rd.",
        "City": "Leesville",
        "State": "LA",
        "Zip": "71446",
        "Contact": "337-537-8012"
    },
    {
        "Mosque Name": "Abu Bakr Al Siddiq",
        "Address": "4425 David Dr.",
        "City": "Metairie",
        "State": "LA",
        "Zip": "70003",
        "Contact": "504-887-5365"
    },
    {
        "Mosque Name": "Masjid Muhammad",
        "Address": "2414 Oak St.",
        "City": "Monroe",
        "State": "LA",
        "Zip": "71202",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Northeastern Louisiana",
        "Address": "7617 Hwy 165 N",
        "City": "Monroe",
        "State": "LA",
        "Zip": "71203",
        "Contact": "318-325-2343"
    },
    {
        "Mosque Name": "Islamic Center of Natchitoches",
        "Address": "125 Caspari St.",
        "City": "Natchitoches",
        "State": "LA",
        "Zip": "71457",
        "Contact": ""
    },
    {
        "Mosque Name": "New Orleans Masjid of Al Islam",
        "Address": "2625-32 Magnolia St.",
        "City": "New Orleans",
        "State": "LA",
        "Zip": "70113",
        "Contact": "504-895-6731"
    },
    {
        "Mosque Name": "Islamic Center of New Orleans",
        "Address": "1911 St. Claude Ave.",
        "City": "New Orleans",
        "State": "LA",
        "Zip": "70116",
        "Contact": "504-944-3758"
    },
    {
        "Mosque Name": "Masjid Ar Rahim",
        "Address": "1238-40 N. Johnson St",
        "City": "New Orleans",
        "State": "LA",
        "Zip": "70116",
        "Contact": "504-827-3879"
    },
    {
        "Mosque Name": "Masjid Al-Rahma",
        "Address": "7103 Burthe St",
        "City": "New Orleans",
        "State": "LA",
        "Zip": "70118",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Message Foundation",
        "Address": "2631 General De Gaulle Blvd",
        "City": "New Orleans",
        "State": "LA",
        "Zip": "70114",
        "Contact": ""
    },
    {
        "Mosque Name": "Bilal Ibn Rabah Islamic Center",
        "Address": "717 Teche St",
        "City": "New Orleans",
        "State": "LA",
        "Zip": "70114",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Rajilun",
        "Address": "24125 Church St.",
        "City": "Plauemine",
        "State": "LA",
        "Zip": "70764",
        "Contact": "225-385-1956"
    },
    {
        "Mosque Name": "Islamic Center of North Louisiana",
        "Address": "203 S. Homer St",
        "City": "Ruston",
        "State": "LA",
        "Zip": "71270",
        "Contact": "318-255-6902"
    },
    {
        "Mosque Name": " Masjid Yaseen",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Arabi ",
        "Address": "3769 Youree Dr.",
        "City": "Shreveport",
        "State": "LA",
        "Zip": "71105",
        "Contact": "318-868-0414"
    },
    {
        "Mosque Name": "Masjid Ul Taqwa",
        "Address": "5403 Virginia",
        "City": "Shreveport",
        "State": "LA",
        "Zip": "71108",
        "Contact": ""
    },
    {
        "Mosque Name": "Slidell Masjid of Al-Islam",
        "Address": "37482 Browns Village",
        "City": "Slidell",
        "State": "LA",
        "Zip": "70460",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Lake Charles",
        "Address": "612 College Manor",
        "City": "West Lake",
        "State": "LA",
        "Zip": "70605",
        "Contact": "337-474-4519"
    },
    {
        "Mosque Name": "Masjidu-Salaam",
        "Address": "256 Barlett St.",
        "City": "Lewiston",
        "State": "ME",
        "Zip": "4240",
        "Contact": "207-795-8977"
    },
    {
        "Mosque Name": "Islamic Center of Maine",
        "Address": "151 Park St.",
        "City": "Orono",
        "State": "ME",
        "Zip": "4473",
        "Contact": "207-866-7932"
    },
    {
        "Mosque Name": "Islamic Society of Portland",
        "Address": "73 Portland St.",
        "City": "Portland",
        "State": "ME",
        "Zip": "4101",
        "Contact": ""
    },
    {
        "Mosque Name": "Portland Masjid and Islamic Center",
        "Address": "978 Washington Ave.",
        "City": "Portland",
        "State": "ME",
        "Zip": "4103",
        "Contact": "207-741-2117"
    },
    {
        "Mosque Name": "Maine Muslim Community",
        "Address": "118 Anderson St.",
        "City": "Portland",
        "State": "ME",
        "Zip": "4101",
        "Contact": "207-797-6626"
    },
    {
        "Mosque Name": "Islamic Society of Annapolis",
        "Address": "2635 Riva Rd.  Suite 110",
        "City": "Annapolis",
        "State": "MD",
        "Zip": "21401",
        "Contact": "410-266-6660"
    },
    {
        "Mosque Name": "Masjid Zamzam",
        "Address": "1510 Lynch Rd.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21222",
        "Contact": "410-284-2840"
    },
    {
        "Mosque Name": "Masjid Muminun",
        "Address": "2642 Hartford Rd",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21213",
        "Contact": "410-467-8798"
    },
    {
        "Mosque Name": "Masjid Saffat",
        "Address": "1335 W. North Ave",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21217",
        "Contact": "410-669-0655"
    },
    {
        "Mosque Name": "Muslim Community Cultural Center of Baltimore",
        "Address": "3401 W. North Ave.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21216",
        "Contact": "410-566-4434"
    },
    {
        "Mosque Name": " Masjid Bayt-Allah of Baltimore",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Bilal Dawah Center ",
        "Address": "1910 Frederick Ave.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21223",
        "Contact": "443-224-4423"
    },
    {
        "Mosque Name": "Masjid Ad-Dawah Ilat-Tawheed",
        "Address": "2203 Maryland Ave.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21218",
        "Contact": "410-244-0799"
    },
    {
        "Mosque Name": "Islamic Center For Proper Learning",
        "Address": "25 E. North Ave.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21202",
        "Contact": "410-207-8953"
    },
    {
        "Mosque Name": "Darul Uloom Maryland",
        "Address": "6334 Dogwood Rd.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21207",
        "Contact": "410-493-0785"
    },
    {
        "Mosque Name": " Masjid Al-Rahmah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Baltimore ",
        "Address": "6631 Johnny Cake Rd",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21244",
        "Contact": "401-747-4869"
    },
    {
        "Mosque Name": " Masjid Us Salaam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Cultural Center ",
        "Address": "300 N. Howard St.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21201",
        "Contact": "410-528-8452"
    },
    {
        "Mosque Name": "Baltimore Masjid",
        "Address": "3019 Ailsa Ave.",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21214",
        "Contact": "646-441-8241"
    },
    {
        "Mosque Name": "Masjid Ul Haqq",
        "Address": "514 Islamic Way",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21217",
        "Contact": "410-728-1363"
    },
    {
        "Mosque Name": "Faizan-E-Madina Baltimore",
        "Address": "1724 Woodlawn Dr. No.38",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21207",
        "Contact": "410-852-7217"
    },
    {
        "Mosque Name": "Masjid Khalifah",
        "Address": "4432 A Parkheights",
        "City": "Baltimore",
        "State": "MD",
        "Zip": "21215",
        "Contact": ""
    },
    {
        "Mosque Name": "Darul Zikir Masjid",
        "Address": "4323 Rosedale Ave.",
        "City": "Bethesda",
        "State": "MD",
        "Zip": "20814",
        "Contact": "301-907-0997"
    },
    {
        "Mosque Name": " Brentwood Islamic Community Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Nigerian Muslims Council ",
        "Address": "4411 41St St.",
        "City": "Brentwood",
        "State": "MD",
        "Zip": "20722",
        "Contact": "301-887-0901"
    },
    {
        "Mosque Name": "Idara Jaferia Center",
        "Address": "3140 Spencerville Road",
        "City": "Burtonsville",
        "State": "MD",
        "Zip": "20866",
        "Contact": "301-384-2903"
    },
    {
        "Mosque Name": "Islamic Research and Humanitarian Ctr",
        "Address": "1 Chamber Ave.",
        "City": "Capitol Heights",
        "State": "MD",
        "Zip": "20743",
        "Contact": "301-324-5040"
    },
    {
        "Mosque Name": "Masjid Fatima",
        "Address": "1928 Powers Lane",
        "City": "Catanville",
        "State": "MD",
        "Zip": "21228",
        "Contact": "410-800-4880"
    },
    {
        "Mosque Name": "Dar-Us-Salaam",
        "Address": "5301 Edgewood Rd",
        "City": "College Park",
        "State": "MD",
        "Zip": "20740",
        "Contact": "301-982-9848"
    },
    {
        "Mosque Name": "Islamic Society of Cumberland",
        "Address": "941 Bishop Walsh Rd. Suite 1",
        "City": "Cumberland",
        "State": "MD",
        "Zip": "21502",
        "Contact": "301-722-5553"
    },
    {
        "Mosque Name": "Masjid Al-Taqwa",
        "Address": "10740 Clarksville Pike",
        "City": "Ellicott City",
        "State": "MD",
        "Zip": "21042",
        "Contact": "410-997-5711"
    },
    {
        "Mosque Name": " Masjid Al-Hikma",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Southern Prince George S Assoc Mutual Improvement ",
        "Address": "11064 Livingston Rd. Unit L (101)",
        "City": "Fort Washington",
        "State": "MD",
        "Zip": "20744",
        "Contact": "301-292-9009"
    },
    {
        "Mosque Name": "Islamic Society of Frederick",
        "Address": "1250 Key Pkwy",
        "City": "Frederick",
        "State": "MD",
        "Zip": "21702",
        "Contact": "301-682-6090"
    },
    {
        "Mosque Name": "Islamic Center of Maryland",
        "Address": "19401 Woodfield Rd",
        "City": "Gaithersburg",
        "State": "MD",
        "Zip": "20879",
        "Contact": "301-840-9440"
    },
    {
        "Mosque Name": " Makkah Learning Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Annapolis ",
        "Address": "814 Brandy Farms Ln",
        "City": "Gambrills",
        "State": "MD",
        "Zip": "21054",
        "Contact": "410-721-5880"
    },
    {
        "Mosque Name": "Islamic Society of Germantown",
        "Address": "19900 Brandermill Rd.",
        "City": "Germantown",
        "State": "MD",
        "Zip": "20874",
        "Contact": "240-277-7758"
    },
    {
        "Mosque Name": " Al-Madinah Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Dawah Society of Baltimore ",
        "Address": "1808 Woodlawn Dr.",
        "City": "Gwynn Oak",
        "State": "MD",
        "Zip": "21207",
        "Contact": "443-803-7680"
    },
    {
        "Mosque Name": "Gwynn Oak Islamic Community",
        "Address": "P.O. Box 26457",
        "City": "Gwynn Oak",
        "State": "MD",
        "Zip": "21207",
        "Contact": "410-367-6704"
    },
    {
        "Mosque Name": "Islamic Society of Western Maryland",
        "Address": "2036 Day Road",
        "City": "Hagerstown",
        "State": "MD",
        "Zip": "21740",
        "Contact": "301-797-0922"
    },
    {
        "Mosque Name": "Imamia Center",
        "Address": "7612 Newburg Dr.",
        "City": "Lanham",
        "State": "MD",
        "Zip": "20706",
        "Contact": "301-552-2912"
    },
    {
        "Mosque Name": "Prince George S Muslim Association",
        "Address": "9150 Lanham-Severn Rd.",
        "City": "Lanham",
        "State": "MD",
        "Zip": "20706",
        "Contact": "301-459-4942"
    },
    {
        "Mosque Name": "Turkish American Cultural Center",
        "Address": "9704 Good Luck Rd.",
        "City": "Lanham",
        "State": "MD",
        "Zip": "20706",
        "Contact": "301-459-9589"
    },
    {
        "Mosque Name": " Masjid Ibn Taymiyyah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â 301-461-9325 ",
        "Address": "8000 Mlk Hwy",
        "City": "Lanham",
        "State": "MD",
        "Zip": "20706",
        "Contact": "301-772-5969"
    },
    {
        "Mosque Name": "Masjid Al-Moghni",
        "Address": "111 Howard St.",
        "City": "Laplata",
        "State": "MD",
        "Zip": "20646",
        "Contact": "301-609-8769"
    },
    {
        "Mosque Name": "Islamic Comm. Ctr. of Laural",
        "Address": "7306 Contee Rd.",
        "City": "Laural",
        "State": "MD",
        "Zip": "20707",
        "Contact": "301-317-4584"
    },
    {
        "Mosque Name": " Masjidul Ghurabaa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Ayah Islamic Center ",
        "Address": "8220 Washington St. S",
        "City": "Laurel",
        "State": "MD",
        "Zip": "20724",
        "Contact": "443-731-6463"
    },
    {
        "Mosque Name": " Avondale Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Nigerian Muslim Society ",
        "Address": "4637 Eastern Ave.",
        "City": "Mt. Rainier",
        "State": "MD",
        "Zip": "20712",
        "Contact": "301-779-9292"
    },
    {
        "Mosque Name": "Islamic Society of S Prince Georges Co",
        "Address": "5410 Indian Head Way",
        "City": "Oxon Hill",
        "State": "MD",
        "Zip": "20745",
        "Contact": "301-856-6909"
    },
    {
        "Mosque Name": "Imam Mahdi Education Center",
        "Address": "2406 Putty Hill Ave.",
        "City": "Parkville",
        "State": "MD",
        "Zip": "21234",
        "Contact": "301-874-1631"
    },
    {
        "Mosque Name": "An-Nur Foundation",
        "Address": "10012 Harford Rd.",
        "City": "Parkville",
        "State": "MD",
        "Zip": "21234",
        "Contact": "410-663-9637"
    },
    {
        "Mosque Name": "Masjid Annur",
        "Address": "10800 Philadelphia Rd.",
        "City": "Perry Hall",
        "State": "MD",
        "Zip": "21128",
        "Contact": "410-344-9050"
    },
    {
        "Mosque Name": "Medina Center",
        "Address": "11600 Falls Rd.",
        "City": "Potomac",
        "State": "MD",
        "Zip": "20854",
        "Contact": "301-299-3955"
    },
    {
        "Mosque Name": "Islamic Education Center",
        "Address": "7917 Motrose Rd",
        "City": "Potomac",
        "State": "MD",
        "Zip": "20854",
        "Contact": "301-340-6584"
    },
    {
        "Mosque Name": "Southern Maryland Islamic Center",
        "Address": "1046 Solomons Island Rd.",
        "City": "Prince Frederick",
        "State": "MD",
        "Zip": "20678",
        "Contact": "410-535-0000"
    },
    {
        "Mosque Name": "Randallstown Islamic Center",
        "Address": "9019 Marcella Dr.",
        "City": "Randallstown",
        "State": "MD",
        "Zip": "21133",
        "Contact": "410-971-4018"
    },
    {
        "Mosque Name": "The Tazkia Center",
        "Address": "9633 Liberty Rd. Unit E",
        "City": "Randallstown",
        "State": "MD",
        "Zip": "21133",
        "Contact": "443-272-5751"
    },
    {
        "Mosque Name": "Indonesian Muslim Association In America",
        "Address": "1611 Veirs Mill Rd.",
        "City": "Rockville",
        "State": "MD",
        "Zip": "20851",
        "Contact": "240-453-0808"
    },
    {
        "Mosque Name": "Islamic Society of Del Marva",
        "Address": "7843 Jersey Rd.",
        "City": "Salisbury",
        "State": "MD",
        "Zip": "21801",
        "Contact": "410-341-4023"
    },
    {
        "Mosque Name": "Muslim Community Center",
        "Address": "15200 New Hampshire Ave",
        "City": "Silver Spring",
        "State": "MD",
        "Zip": "20904",
        "Contact": "301-384-3454"
    },
    {
        "Mosque Name": "Islamic Society of Washington Area",
        "Address": "2701 Briggs Chaney Road",
        "City": "Silver Spring",
        "State": "MD",
        "Zip": "20904",
        "Contact": "301-588-3650"
    },
    {
        "Mosque Name": "Islamic Education Center of Md",
        "Address": "11504 Veirs Mill Rd.",
        "City": "Silver Spring",
        "State": "MD",
        "Zip": "20902",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al-Inshirah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Cultural Center ",
        "Address": "7832 Fairbrook Rd.",
        "City": "Windsor Mill",
        "State": "MD",
        "Zip": "21244",
        "Contact": "410-298-2977"
    },
    {
        "Mosque Name": "Allston Brighton Islamic Center",
        "Address": "15 N. Beacon St.",
        "City": "Allston",
        "State": "MA",
        "Zip": "2134",
        "Contact": "617-783-2229"
    },
    {
        "Mosque Name": "Hampshire Mosque",
        "Address": "1 E. Pleasant St. Suite 47",
        "City": "Amherst",
        "State": "MA",
        "Zip": "1002",
        "Contact": "413-548-8865"
    },
    {
        "Mosque Name": "Masjid Al Hameedullah",
        "Address": "724 Shawmut Ave",
        "City": "Boston",
        "State": "MA",
        "Zip": "2119",
        "Contact": "617-442-2805"
    },
    {
        "Mosque Name": "Masjid Al-Rahman",
        "Address": "396 Harvard St.",
        "City": "Boston",
        "State": "MA",
        "Zip": "2124",
        "Contact": "781-888-7988"
    },
    {
        "Mosque Name": "Islamic Soc of Boston Cultural Center",
        "Address": "100 Malcolm X Blvd",
        "City": "Boston",
        "State": "MA",
        "Zip": "2120",
        "Contact": "617-876-3546"
    },
    {
        "Mosque Name": "Masjid Al-Quran",
        "Address": "35 Interval St",
        "City": "Boston",
        "State": "MA",
        "Zip": "2121",
        "Contact": "617-445-8070"
    },
    {
        "Mosque Name": "Masjid Al-Noor",
        "Address": "28 Circuit St",
        "City": "Boston (Roxbury)",
        "State": "MA",
        "Zip": "2119",
        "Contact": "617-427-1542"
    },
    {
        "Mosque Name": "Yusuf Mosque",
        "Address": "186 Chestnut Hill Ave.",
        "City": "Brighton",
        "State": "MA",
        "Zip": "2135",
        "Contact": ""
    },
    {
        "Mosque Name": "Burlington Center For Peace",
        "Address": "24 Ray Ave.",
        "City": "Burlington",
        "State": "MA",
        "Zip": "1803",
        "Contact": "781-791-3153"
    },
    {
        "Mosque Name": "Islamic Center of Burlington",
        "Address": "130 Lexington St.",
        "City": "Burlington",
        "State": "MA",
        "Zip": "1803",
        "Contact": "781-229-0336"
    },
    {
        "Mosque Name": "Islamic Center of Rindge Ave.",
        "Address": "378 Rindge Ave.",
        "City": "Cambridge",
        "State": "MA",
        "Zip": "2140",
        "Contact": "617-470-5259"
    },
    {
        "Mosque Name": "Islamic Society of Boston",
        "Address": "204 Prospect St",
        "City": "Cambridge",
        "State": "MA",
        "Zip": "2121",
        "Contact": "617-876-3546"
    },
    {
        "Mosque Name": "Islamic Society of Greater Lowell",
        "Address": "131 Steadman St. Unit 9 & 10",
        "City": "Chelmsford",
        "State": "MA",
        "Zip": "1824",
        "Contact": "978-970-5552"
    },
    {
        "Mosque Name": "American Muslim Center",
        "Address": "33 Chelsea St.",
        "City": "Everett",
        "State": "MA",
        "Zip": "2149",
        "Contact": "617-294-0694"
    },
    {
        "Mosque Name": "Makki Masjid",
        "Address": "60 Pickering St.",
        "City": "Fall River",
        "State": "MA",
        "Zip": "2720",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid-E-Basheer",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Framingham ",
        "Address": "234 Union Ave.",
        "City": "Framingham",
        "State": "MA",
        "Zip": "1702",
        "Contact": "508-879-3800"
    },
    {
        "Mosque Name": "Islamic Masumeen Center",
        "Address": "115 Wood St.",
        "City": "Hopkinton",
        "State": "MA",
        "Zip": "1748",
        "Contact": "508-497-3462"
    },
    {
        "Mosque Name": "Turkish American Society",
        "Address": "50-52 Pinevale St.",
        "City": "Indian Orchard",
        "State": "MA",
        "Zip": "1151",
        "Contact": ""
    },
    {
        "Mosque Name": "Boston Islamic Center",
        "Address": "3381 Washington St.",
        "City": "Jamaica Plain",
        "State": "MA",
        "Zip": "2130",
        "Contact": "617-522-1881"
    },
    {
        "Mosque Name": "North Shore Islamic Center",
        "Address": "132 Essex St.",
        "City": "Lynn",
        "State": "MA",
        "Zip": "1902",
        "Contact": "781-599-5552"
    },
    {
        "Mosque Name": " Masjid Ad-Daawah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Outreach Community And Reform Center ",
        "Address": "22 Pleasant St. 3Rd Fl.",
        "City": "Malden",
        "State": "MA",
        "Zip": "2148",
        "Contact": "781-322-0864"
    },
    {
        "Mosque Name": "Islamic Center of Cape Cod",
        "Address": "3072 Falmouth Rd.",
        "City": "Marstons Mills",
        "State": "MA",
        "Zip": "2648",
        "Contact": "508-428-0755"
    },
    {
        "Mosque Name": " Muslim House At Tufts University",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Student Association ",
        "Address": "176 Curtis St.",
        "City": "Medford",
        "State": "MA",
        "Zip": "2155",
        "Contact": ""
    },
    {
        "Mosque Name": "Selimiye Masjid",
        "Address": "105A Oakland Ave.",
        "City": "Methuen",
        "State": "MA",
        "Zip": "1844",
        "Contact": "978-975-9493"
    },
    {
        "Mosque Name": "Masjid-Ul-Khidr",
        "Address": "737 County St.",
        "City": "New Bedford",
        "State": "MA",
        "Zip": "2740",
        "Contact": "508-967-4302"
    },
    {
        "Mosque Name": "Masjid of Waltham",
        "Address": "16 Park Pl.",
        "City": "North Waltham",
        "State": "MA",
        "Zip": "2452",
        "Contact": ""
    },
    {
        "Mosque Name": "First Muslim Center of Cape Cod",
        "Address": "2751 Falmouth Rd.",
        "City": "Osterville",
        "State": "MA",
        "Zip": "2655",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of New England",
        "Address": "470 South St",
        "City": "Quincy",
        "State": "MA",
        "Zip": "2169",
        "Contact": "617-479-8341"
    },
    {
        "Mosque Name": "Iman Islamic Center",
        "Address": "5 Altamont Rd.",
        "City": "Quincy",
        "State": "MA",
        "Zip": "2169",
        "Contact": "617-706-2303"
    },
    {
        "Mosque Name": "Boston Dialogue Foundation",
        "Address": "500 Revere St.",
        "City": "Revere",
        "State": "MA",
        "Zip": "2151",
        "Contact": "781-286-2777"
    },
    {
        "Mosque Name": "Guinean Islamic Cultural Organization",
        "Address": "4258 Washington St. Suite 1",
        "City": "Roslindale",
        "State": "MA",
        "Zip": "2131",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of New England",
        "Address": "74 Chase Dr.",
        "City": "Sharon",
        "State": "MA",
        "Zip": "2067",
        "Contact": "781-784-0434"
    },
    {
        "Mosque Name": "Masjid Al-Ehsan",
        "Address": "2 Cove Rd.",
        "City": "South Dartmouth",
        "State": "MA",
        "Zip": "2748",
        "Contact": "508-999-8594"
    },
    {
        "Mosque Name": "Al Baqi Islamic Center",
        "Address": "148 Fort Pleasant St.",
        "City": "Springfield",
        "State": "MA",
        "Zip": "1108",
        "Contact": "413-732-9288"
    },
    {
        "Mosque Name": "At-Tawhid Masjid",
        "Address": "111 Oak St.",
        "City": "Springfield",
        "State": "MA",
        "Zip": "1109",
        "Contact": "413-788-7546"
    },
    {
        "Mosque Name": "Islamic Center of West Mass",
        "Address": "377 Amostown",
        "City": "W. Springfield",
        "State": "MA",
        "Zip": "1105",
        "Contact": "413-788-7546"
    },
    {
        "Mosque Name": "Islamic Center of Boston",
        "Address": "126 Boston Post Rd",
        "City": "Wayland",
        "State": "MA",
        "Zip": "1778",
        "Contact": "508-358-5885"
    },
    {
        "Mosque Name": "Worcester Islamic Center",
        "Address": "248 E. Mountain St.",
        "City": "Worcester",
        "State": "MA",
        "Zip": "1606",
        "Contact": "508-752-4377"
    },
    {
        "Mosque Name": "Islamic Society of Greater Worcester",
        "Address": "57 Laural St",
        "City": "Worcester",
        "State": "MA",
        "Zip": "1604",
        "Contact": "508-752-4377"
    },
    {
        "Mosque Name": " Islamic Center of Ann Arbor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Association ",
        "Address": "2301 Plymouth Rd",
        "City": "Ann Arbor",
        "State": "MI",
        "Zip": "48105",
        "Contact": "734-665-6772"
    },
    {
        "Mosque Name": "Islamic Center of Southwest Michigan",
        "Address": "817 Thresher Ave.",
        "City": "Benton Harbor",
        "State": "MI",
        "Zip": "49022",
        "Contact": "630-313-9786"
    },
    {
        "Mosque Name": "Benton Harbor Muslim Center",
        "Address": "1181 Ogden Ave.",
        "City": "Benton Harbor",
        "State": "MI",
        "Zip": "49022",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Unity Center",
        "Address": "1830 Square Lake Rd.",
        "City": "Bloomfield Hills",
        "State": "MI",
        "Zip": "48013",
        "Contact": "248-857-9200"
    },
    {
        "Mosque Name": "Masjid Umar Bin Khattab",
        "Address": "18171 Rancho Rd",
        "City": "Brownstown",
        "State": "MI",
        "Zip": "48192",
        "Contact": "734-281-8050"
    },
    {
        "Mosque Name": "As-Siddiq Institute And Mosque",
        "Address": "4417 S. Saginaw St.",
        "City": "Burton",
        "State": "MI",
        "Zip": "48529",
        "Contact": "888-278-6624"
    },
    {
        "Mosque Name": "Muslim Community of Western Suburb",
        "Address": "40440 Palmer",
        "City": "Canton",
        "State": "MI",
        "Zip": "48188",
        "Contact": ""
    },
    {
        "Mosque Name": "Coldwater Masjid",
        "Address": "123 Perkins St.",
        "City": "Coldwater",
        "State": "MI",
        "Zip": "49036",
        "Contact": "517-278-6291"
    },
    {
        "Mosque Name": "The Fadak Foundation",
        "Address": "7261 Middlepointe Rd.",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48126",
        "Contact": "313-582-7052"
    },
    {
        "Mosque Name": "Karbalaa Islamic Education Center",
        "Address": "15332 W. Warren Ave.",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48126",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Institute of Knowledge",
        "Address": "6345 Schaefer Rd.",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48126",
        "Contact": "313-584-2570"
    },
    {
        "Mosque Name": "American Muslim Center",
        "Address": "21110 Outer Dr.",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48124",
        "Contact": "313-565-9314"
    },
    {
        "Mosque Name": "Islamic Center of America",
        "Address": "19500 Ford Rd.",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48128",
        "Contact": "313-593-0000"
    },
    {
        "Mosque Name": "Islamic Council of America",
        "Address": "6941 Schaefer",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48126",
        "Contact": "313-584-4488"
    },
    {
        "Mosque Name": " Masjid Dearborn",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â American Muslim Society ",
        "Address": "9945 W. Vernor Hwy",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48126",
        "Contact": "313-849-2147"
    },
    {
        "Mosque Name": "American Moslem Bekka Center",
        "Address": "6110 Chase Rd",
        "City": "Dearborn",
        "State": "MI",
        "Zip": "48126",
        "Contact": "313-846-3498"
    },
    {
        "Mosque Name": "Islamic House of Wisdom",
        "Address": "22575 Ann Arbor Trail",
        "City": "Dearborn Heights",
        "State": "MI",
        "Zip": "48127",
        "Contact": "313-359-1221"
    },
    {
        "Mosque Name": "Masjid Al Noor",
        "Address": "318 Pilgrim St",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48203",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Detroit",
        "Address": "4646 Cass Ave",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48201",
        "Contact": "313-831-9222"
    },
    {
        "Mosque Name": "Nigerian American Islamic Community of Michigan",
        "Address": "15744 Harper",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48224",
        "Contact": "313-881-3488"
    },
    {
        "Mosque Name": "Masjid Al Fatiha",
        "Address": "2844 Fourth St",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48211",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Muath Ibn Jabal",
        "Address": "4001 Miller St",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48211",
        "Contact": "313-887-1868"
    },
    {
        "Mosque Name": "Baitul Islam Jame Masjid",
        "Address": "7826 Klein St.",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48211",
        "Contact": "313-922-6437"
    },
    {
        "Mosque Name": "Masjidal Haqq",
        "Address": "4118 Joy Rd",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48204",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Tawheed",
        "Address": "18640 Warren Ave. W",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48228",
        "Contact": "313-271-0731"
    },
    {
        "Mosque Name": " Quran and Sunnah Society",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid As-Sunnah ",
        "Address": "19800 Van Dyke",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48234",
        "Contact": "313-355-6761"
    },
    {
        "Mosque Name": "Aqabah Islamic Community Center",
        "Address": "10435 Joy Rd.",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48204",
        "Contact": "313-717-8921"
    },
    {
        "Mosque Name": "Al-Huda Islamic Association",
        "Address": "5838 Lawndale",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48210",
        "Contact": "313-581-7555"
    },
    {
        "Mosque Name": "Masjid Wali Muhammad",
        "Address": "11529 Linwood Ave",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48206",
        "Contact": "313-868-2131"
    },
    {
        "Mosque Name": "Muslim Center",
        "Address": "1605 W. Davison",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48238",
        "Contact": "313-883-3330"
    },
    {
        "Mosque Name": "Islamic Center of Detroit",
        "Address": "14350 Tireman St.",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48228",
        "Contact": "313-584-4143"
    },
    {
        "Mosque Name": "Masjid Al Noor Ii",
        "Address": "11311 Mound Rd",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-892-5450"
    },
    {
        "Mosque Name": "Masjid Al Falah",
        "Address": "12500 Mcdougall",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-368-5308"
    },
    {
        "Mosque Name": "Islamic Iraqi Center",
        "Address": "17644 W. Warren Ave.",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48228",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid As-Salam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Community of As-Salam ",
        "Address": "21628 Fenkell St.",
        "City": "Detroit",
        "State": "MI",
        "Zip": "48223",
        "Contact": "586-945-6855"
    },
    {
        "Mosque Name": "Islamic Society of Greater Lansing",
        "Address": "920 S. Harrison Rd",
        "City": "East Lansing",
        "State": "MI",
        "Zip": "48823",
        "Contact": "517-351-4309"
    },
    {
        "Mosque Name": "Tawheed Center of Farmington Hills",
        "Address": "29707 W. Ten Mile Rd.",
        "City": "Farmington Hills",
        "State": "MI",
        "Zip": "48336",
        "Contact": "248-426-7360"
    },
    {
        "Mosque Name": "Haqqani Islamic Center",
        "Address": "7007 Denton Hill Rd",
        "City": "Fenton",
        "State": "MI",
        "Zip": "48430",
        "Contact": ""
    },
    {
        "Mosque Name": "The Muslim House",
        "Address": "804 M.L. King Ave.",
        "City": "Flint",
        "State": "MI",
        "Zip": "48505",
        "Contact": "810-210-9890"
    },
    {
        "Mosque Name": "Masjid Al-Mustakeem",
        "Address": "1202 N. Ballenger Hwy",
        "City": "Flint",
        "State": "MI",
        "Zip": "48504",
        "Contact": "810-449-3300"
    },
    {
        "Mosque Name": "Masjid Mu Min",
        "Address": "64043-A Clio Rd",
        "City": "Flint",
        "State": "MI",
        "Zip": "48504",
        "Contact": "810-785-4001"
    },
    {
        "Mosque Name": "Masjid Al Ihsaan",
        "Address": "3401 N. Saginaw St.",
        "City": "Flint",
        "State": "MI",
        "Zip": "48505",
        "Contact": "810-789-1019"
    },
    {
        "Mosque Name": "Flint Islamic Center",
        "Address": "5271 N. Dyewood Dr.",
        "City": "Flint",
        "State": "MI",
        "Zip": "48532",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Cultural Association",
        "Address": "32220 Franklin Rd",
        "City": "Franklin",
        "State": "MI",
        "Zip": "48025",
        "Contact": "248-737-7001"
    },
    {
        "Mosque Name": "Grand Blanc Islamic Center",
        "Address": "1479 Baldwin Rd.",
        "City": "Grand Blanc",
        "State": "MI",
        "Zip": "48439",
        "Contact": "810-603-9920"
    },
    {
        "Mosque Name": "Masjid Bilal",
        "Address": "1260 Jefferson Ave. Se",
        "City": "Grand Rapids",
        "State": "MI",
        "Zip": "49507",
        "Contact": "616-881-4110"
    },
    {
        "Mosque Name": "Islamic Center of Grand Rapids",
        "Address": "1301 Burton St",
        "City": "Grand Rapids",
        "State": "Mi",
        "Zip": "49514",
        "Contact": "616-247-8786"
    },
    {
        "Mosque Name": "Islamic Cultural Center Behar",
        "Address": "3425 E. Paris Ave. Se",
        "City": "Grand Rapids",
        "State": "MI",
        "Zip": "49512",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Tawheed",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Mosque And Religious Institute ",
        "Address": "3321 E. Paris Ave. Se",
        "City": "Grand Rapids",
        "State": "MI",
        "Zip": "49512",
        "Contact": "616-233-9587"
    },
    {
        "Mosque Name": "Al-Islah Islamic Center",
        "Address": "2733 Caniff St.",
        "City": "Hamtramck",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-365-9000"
    },
    {
        "Mosque Name": "Islamic Center Gazi-Husrevbeg Detroit",
        "Address": "12426 Joseph Campau",
        "City": "Hamtramck",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-258-0726"
    },
    {
        "Mosque Name": "American Yemeni Islamic Center",
        "Address": "8564 Joseph Campau",
        "City": "Hamtramck",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-587-5248"
    },
    {
        "Mosque Name": "Masjid Imam Algazzli",
        "Address": "Joseph Camau St.",
        "City": "Hamtramck",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-415-8958"
    },
    {
        "Mosque Name": "Baitul Mukarram Masjid",
        "Address": "12203 Conant St.",
        "City": "Hamtramck",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-893-7595"
    },
    {
        "Mosque Name": "American Islamic Institute",
        "Address": "11345-11347 Joseph Campau",
        "City": "Hamtramck",
        "State": "MI",
        "Zip": "48212",
        "Contact": "313-733-8305"
    },
    {
        "Mosque Name": "Bosnian American Islamic Center",
        "Address": "3437 Caniff St.",
        "City": "Hamtramck",
        "State": "MI",
        "Zip": "48212",
        "Contact": ""
    },
    {
        "Mosque Name": "Albanian Islamic Center",
        "Address": "19775 Harper Ave",
        "City": "Harper Woods",
        "State": "MI",
        "Zip": "48225",
        "Contact": "313-884-6676"
    },
    {
        "Mosque Name": "Altaqwa Islamic Center",
        "Address": "30069 Cherry Hill",
        "City": "Inkster",
        "State": "MI",
        "Zip": "48141",
        "Contact": "313-999-6969"
    },
    {
        "Mosque Name": " Bilal Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid Madinah Munawwarah ",
        "Address": "1715 E. Main St.",
        "City": "Kalamazoo",
        "State": "MI",
        "Zip": "49048",
        "Contact": ""
    },
    {
        "Mosque Name": "Kalamazoo Islamic Center",
        "Address": "1520 W. Michigan Ave",
        "City": "Kalamazoo",
        "State": "Mi",
        "Zip": "49007",
        "Contact": "269-381-6611"
    },
    {
        "Mosque Name": "Bosnian Cultural Center Grand Rapids",
        "Address": "2839 Eastern Ave.",
        "City": "Kentwood",
        "State": "MI",
        "Zip": "49508",
        "Contact": "616-706-0685"
    },
    {
        "Mosque Name": "Mosque of Imam Ali",
        "Address": "6361 Whiteford Center Rd.",
        "City": "Lambertville",
        "State": "MI",
        "Zip": "48144",
        "Contact": "734-856-8266"
    },
    {
        "Mosque Name": "Wali Mahmoud Islamic Center",
        "Address": "235 Lahoma",
        "City": "Lansing",
        "State": "MI",
        "Zip": "48915",
        "Contact": "517-882-1883"
    },
    {
        "Mosque Name": "American Islamic Community Center",
        "Address": "27205 Dequindre",
        "City": "Madison Heights",
        "State": "MI",
        "Zip": "48071",
        "Contact": "248-584-4100"
    },
    {
        "Mosque Name": "Islamic Center of Mt. Pleasant",
        "Address": "907 Mcvey St",
        "City": "Mt. Pleasant",
        "State": "MI",
        "Zip": "48858",
        "Contact": "989-773-2545"
    },
    {
        "Mosque Name": "Islamic Center of Greater Muskegan",
        "Address": "2444 Park",
        "City": "Muskegon",
        "State": "MI",
        "Zip": "49444",
        "Contact": ""
    },
    {
        "Mosque Name": "Huron Islamic Society",
        "Address": "2405 Gratiot Ave.",
        "City": "Port Huron",
        "State": "MI",
        "Zip": "48059",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Assoc. of Greater Detroit",
        "Address": "879 W. Auburn Rd",
        "City": "Rochester",
        "State": "MI",
        "Zip": "48307",
        "Contact": "248-852-9345"
    },
    {
        "Mosque Name": "Islamic Center of Saginaw",
        "Address": "114 N. 4th St",
        "City": "Saginaw",
        "State": "MI",
        "Zip": "48601",
        "Contact": "989-752-3531"
    },
    {
        "Mosque Name": "Islamic American University Mosque",
        "Address": "23725 Northwestern Hwy",
        "City": "Southfield",
        "State": "MI",
        "Zip": "48075",
        "Contact": "248-213-0001"
    },
    {
        "Mosque Name": "Islamic Cultural Institute",
        "Address": "30115 Greater Mack Ave.",
        "City": "St. Clair Shores",
        "State": "MI",
        "Zip": "48082",
        "Contact": "586-293-5752"
    },
    {
        "Mosque Name": "American Muslim Diversity Association",
        "Address": "38810 Ryan Rd.",
        "City": "Sterling Heights",
        "State": "MI",
        "Zip": "48310",
        "Contact": ""
    },
    {
        "Mosque Name": "Flint Islamic Center",
        "Address": "9447 Corunna Rd.",
        "City": "Swartz Creek",
        "State": "MI",
        "Zip": "48473",
        "Contact": "810-635-3392"
    },
    {
        "Mosque Name": "Ahlul Bayt Assoc.",
        "Address": "2230 Crumb Rd",
        "City": "Walled Lake",
        "State": "MI",
        "Zip": "48088",
        "Contact": "248-669-5740"
    },
    {
        "Mosque Name": "Islamic Organization of North America",
        "Address": "28630 Ryan Rd.",
        "City": "Warren",
        "State": "MI",
        "Zip": "48092",
        "Contact": "586-558-6900"
    },
    {
        "Mosque Name": "Masjid Ibrahim",
        "Address": "315 S. Ford Blvd.",
        "City": "Ypsilanti",
        "State": "MI",
        "Zip": "48198",
        "Contact": "734-483-2335"
    },
    {
        "Mosque Name": "Masjid Taqwa (Cobble Creek)",
        "Address": "140 Stevens Dr. No.202",
        "City": "Ypsilanti",
        "State": "MI",
        "Zip": "48197",
        "Contact": "734-487-1911"
    },
    {
        "Mosque Name": " Masjid Al-Rahman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Center ",
        "Address": "8910 Old Cedar Ave. S",
        "City": "Bloomington",
        "State": "MN",
        "Zip": "55425",
        "Contact": "952-883-0044"
    },
    {
        "Mosque Name": "Imam Hussain Islamic Center",
        "Address": "6120 Brooklyn Blvd",
        "City": "Brooklyn Center",
        "State": "MN",
        "Zip": "55429",
        "Contact": "763-560-2225"
    },
    {
        "Mosque Name": "Anjaman Asghari Ja Afari Islamic Center",
        "Address": "10301 Jefferson Hwy.",
        "City": "Brooklyn Park",
        "State": "MN",
        "Zip": "55445",
        "Contact": "763-424-4909"
    },
    {
        "Mosque Name": " Burnsville Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Institute of Minnesota ",
        "Address": "1351 Riverwood Dr.",
        "City": "Burnsville",
        "State": "MN",
        "Zip": "55337",
        "Contact": ""
    },
    {
        "Mosque Name": "Dar-Us-Salam Cultural Center",
        "Address": "900 W. 128th St.",
        "City": "Burnsville",
        "State": "MN",
        "Zip": "55337",
        "Contact": "952-808-8712"
    },
    {
        "Mosque Name": " Abu Khadra Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Minnesota ",
        "Address": "4056 7th St. Ne",
        "City": "Columbia Heights",
        "State": "MN",
        "Zip": "55421",
        "Contact": "763-781-9111"
    },
    {
        "Mosque Name": "Islamic Center of The Twin Ports",
        "Address": "145 W. Winona St.",
        "City": "Duluth",
        "State": "MN",
        "Zip": "55803",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid As-Sahabah",
        "Address": "3435 Washington Dr. Suite 200",
        "City": "Eagan",
        "State": "MN",
        "Zip": "55122",
        "Contact": ""
    },
    {
        "Mosque Name": " Islamic Institute of Minnesota Southwest",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid Al-Tawba ",
        "Address": "6861 Flying Cloud Dr.",
        "City": "Eden Prairie",
        "State": "MN",
        "Zip": "55344",
        "Contact": "952-946-6061"
    },
    {
        "Mosque Name": "Irshad Islamic Center",
        "Address": "6520 Eden Vale Blvd",
        "City": "Eden Prairie",
        "State": "MN",
        "Zip": "55346",
        "Contact": "952-681-7785"
    },
    {
        "Mosque Name": "Al Hudaa Mosque",
        "Address": "7  3Rd Ave. Ne",
        "City": "Fairbault",
        "State": "MN",
        "Zip": "55021",
        "Contact": "507-333-5945"
    },
    {
        "Mosque Name": "Masjid Abubaker Sediq",
        "Address": "1400 Cannon Circle Suite 1",
        "City": "Fairhault",
        "State": "MN",
        "Zip": "55021",
        "Contact": "507-209-1764"
    },
    {
        "Mosque Name": " Masjid Al-Aman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim American Society ",
        "Address": "4100 66th St. E",
        "City": "Inver Grove Heights",
        "State": "MN",
        "Zip": "55076",
        "Contact": "651-457-7170"
    },
    {
        "Mosque Name": "Dar Abi Bakr",
        "Address": "329 E. Plum St.",
        "City": "Mankato",
        "State": "MN",
        "Zip": "56001",
        "Contact": "507-386-1797"
    },
    {
        "Mosque Name": "Mankato Islamic Center",
        "Address": "329 N. Broad St.",
        "City": "Mankato",
        "State": "MN",
        "Zip": "56001",
        "Contact": "507-469-2977"
    },
    {
        "Mosque Name": " Masjid As Salaam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Institute of Minnesota ",
        "Address": "1460 Skillman Ave. E",
        "City": "Maplewood",
        "State": "MN",
        "Zip": "55109",
        "Contact": "651-748-1688"
    },
    {
        "Mosque Name": "Masjid Umatul Islam Center",
        "Address": "3015 2Nd Ave. S",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55408",
        "Contact": "612-825-1678"
    },
    {
        "Mosque Name": "Darul-Quba",
        "Address": "1511 4th St. S",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55454",
        "Contact": "612-332-0104"
    },
    {
        "Mosque Name": "Masjid Al Noor",
        "Address": "1729 Lyndale Ave. N",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55411",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Mujaddad",
        "Address": "3759 4th Ave",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55049",
        "Contact": ""
    },
    {
        "Mosque Name": "Abuubakar As-Saddique Islamic Center",
        "Address": "2824 13th Ave. S",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55407",
        "Contact": "612-871-8600"
    },
    {
        "Mosque Name": "Muslim American Society Minnasota",
        "Address": "315 E. Lake St.",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55408",
        "Contact": "612-823-1943"
    },
    {
        "Mosque Name": "Masjid Nuuruliimanan",
        "Address": "2221 15th Ave. S",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55404",
        "Contact": "612-483-1107"
    },
    {
        "Mosque Name": " Masjid Rawdah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Somali Cultural Institute ",
        "Address": "2426 E. 26th St.",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55406",
        "Contact": "612-746-4001"
    },
    {
        "Mosque Name": " Al-Ansar Islamic Movement",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Al-Wafaa Center For Human Services ",
        "Address": "3315 2Nd St. N",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55412",
        "Contact": "612-282-6563"
    },
    {
        "Mosque Name": "Dar Al-Hijrah Islamic Civic Center",
        "Address": "504 Cedar Ave. S",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55454",
        "Contact": "612-339-2625"
    },
    {
        "Mosque Name": "Karmel Masjid",
        "Address": "2910 S. Pillsburg Ave Suite 200",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55408",
        "Contact": "612-825-6111"
    },
    {
        "Mosque Name": "Masjid Al-Abrar",
        "Address": "3011 Cedar Ave. S",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55407",
        "Contact": "952-212-3537"
    },
    {
        "Mosque Name": "Islamic Center of Minn",
        "Address": "1401 Gardena Ave. Ne",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55432",
        "Contact": "763-571-5604"
    },
    {
        "Mosque Name": "Tawfiq Islamic Center",
        "Address": "2900 N. Lyndale Ave.",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55411",
        "Contact": "612-588-1160"
    },
    {
        "Mosque Name": "Dar Al-Farooq",
        "Address": "983 17th Ave. Se",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55414",
        "Contact": "612-331-1234"
    },
    {
        "Mosque Name": " Masjid Al-Iman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Community Center ",
        "Address": "1429 2Nd St. N",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55413",
        "Contact": "612-231-3415"
    },
    {
        "Mosque Name": " Masjid Al-Huda",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Cultural Community Center ",
        "Address": "2534 Central Ave. Ne",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55418",
        "Contact": "612-782-3883"
    },
    {
        "Mosque Name": "Masjid Al-Qanateen",
        "Address": "311 Cedar Ave.",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55455",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Madinah Cultural Center",
        "Address": "300 Washington Ave. Se Rm. 217",
        "City": "Minneapolis",
        "State": "MN",
        "Zip": "55455",
        "Contact": ""
    },
    {
        "Mosque Name": "Nw Islamic Community Center",
        "Address": "1 Maple Grove",
        "City": "Osseo",
        "State": "MN",
        "Zip": "55311",
        "Contact": "763-442-9561"
    },
    {
        "Mosque Name": "Masjid Al-Rahmah",
        "Address": "509 12th St. Ne",
        "City": "Owatonng",
        "State": "MN",
        "Zip": "55060",
        "Contact": "507-214-1510"
    },
    {
        "Mosque Name": "Rumsa Islamic Center",
        "Address": "530 6th Ave. Nw",
        "City": "Rochester",
        "State": "MN",
        "Zip": "55901",
        "Contact": "507-271-0382"
    },
    {
        "Mosque Name": "Rochester Islamic Center",
        "Address": "17 N. Broadway",
        "City": "Rochester",
        "State": "MN",
        "Zip": "55904",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Madina Association",
        "Address": "14555 S. Roberts Trail Unit 206",
        "City": "Rosemount",
        "State": "MN",
        "Zip": "55068",
        "Contact": "612-424-9703"
    },
    {
        "Mosque Name": "Masjid Assunnah",
        "Address": "373 Pederson St. No.102",
        "City": "Saint Paul",
        "State": "MN",
        "Zip": "55119",
        "Contact": "651-702-0140"
    },
    {
        "Mosque Name": "Al-Ihsan Islamic Center",
        "Address": "955 W. Minnehaha",
        "City": "St. Paul",
        "State": "MN",
        "Zip": "55104",
        "Contact": "651-207-5170"
    },
    {
        "Mosque Name": " Masjid Dawah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Minnesota Dawah Institute ",
        "Address": "478 University Ave.",
        "City": "St. Paul",
        "State": "MN",
        "Zip": "55103",
        "Contact": "651-224-6722"
    },
    {
        "Mosque Name": "Masjid At-Taqwa",
        "Address": "1949 University Ave. W",
        "City": "St. Paul",
        "State": "MN",
        "Zip": "55104",
        "Contact": "651-292-9675"
    },
    {
        "Mosque Name": "Islamic Center of Winona",
        "Address": "54 E. Third St.",
        "City": "Winona",
        "State": "MN",
        "Zip": "55987",
        "Contact": "507-312-0307"
    },
    {
        "Mosque Name": "Biloxi Islamic Center",
        "Address": "205 Keller Ave",
        "City": "Biloxi",
        "State": "MS",
        "Zip": "39530",
        "Contact": "228-432-7650"
    },
    {
        "Mosque Name": "Masjid Al Islam",
        "Address": "254 N Hickory St",
        "City": "Canton",
        "State": "MS",
        "Zip": "39046",
        "Contact": ""
    },
    {
        "Mosque Name": "The Islamic Society of The Mississippi Delta",
        "Address": "469 Jeffcoat/Lehr Rd.",
        "City": "Cleveland",
        "State": "MS",
        "Zip": "38732",
        "Contact": "662-402-8407"
    },
    {
        "Mosque Name": " Masjid Al Huda",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Hattiesburg ",
        "Address": "211 N. 25th Ave.",
        "City": "Hattiesburg",
        "State": "MS",
        "Zip": "39401",
        "Contact": "601-467-3532"
    },
    {
        "Mosque Name": "Oak Grove Musalla",
        "Address": "4906 Old Hwy 11 No.1A",
        "City": "Hattiesburg",
        "State": "MS",
        "Zip": "39402",
        "Contact": "601-818-8067"
    },
    {
        "Mosque Name": "Masjid Aleman",
        "Address": "47 Wolf St.",
        "City": "Hickory Flat",
        "State": "MS",
        "Zip": "38633",
        "Contact": "662-216-9633"
    },
    {
        "Mosque Name": " Masjid Umar Bin Khattab",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mississippi Muslim Association ",
        "Address": "2533 Old Mcdowell Rd.",
        "City": "Jackson",
        "State": "MS",
        "Zip": "39204",
        "Contact": "601-371-2834"
    },
    {
        "Mosque Name": "Masjid Muhammad",
        "Address": "6100 Floral Dr.",
        "City": "Jackson",
        "State": "MS",
        "Zip": "39206",
        "Contact": "601-957-2598"
    },
    {
        "Mosque Name": "Magnolia Islamic Center",
        "Address": "1465 Hwy 51",
        "City": "Madison",
        "State": "MS",
        "Zip": "39110",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Association of Mississippi And Alabama",
        "Address": "900 N. Frontage Rd.",
        "City": "Meridian",
        "State": "MS",
        "Zip": "39301",
        "Contact": "601-483-3074"
    },
    {
        "Mosque Name": "Masjid Bilal",
        "Address": "Jfk-Mb  Hwy 61 N",
        "City": "Mound Bayou",
        "State": "MS",
        "Zip": "38762",
        "Contact": ""
    },
    {
        "Mosque Name": "Oxford Muslim Society",
        "Address": "Hill Bldg",
        "City": "Oxford",
        "State": "MS",
        "Zip": "38655",
        "Contact": "662-832-0147"
    },
    {
        "Mosque Name": "Masjid Al-Haque",
        "Address": "66 Inez Bryant Ln",
        "City": "Silver Creek",
        "State": "MS",
        "Zip": "39663",
        "Contact": "601-587-3133"
    },
    {
        "Mosque Name": "Islamic Center of Miss.",
        "Address": "204 Herbert St",
        "City": "Starkville",
        "State": "MS",
        "Zip": "39759",
        "Contact": "662-323-6559"
    },
    {
        "Mosque Name": " Masjid Al Halim",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â New Madinah ",
        "Address": "16 Al-Halim Rd",
        "City": "Sumrall",
        "State": "MS",
        "Zip": "39482",
        "Contact": "601-736-8540"
    },
    {
        "Mosque Name": "Islamic Center of Vicksburg",
        "Address": "6705 Paxton Rd.",
        "City": "Vicksburg",
        "State": "MS",
        "Zip": "39180",
        "Contact": "601-634-8584"
    },
    {
        "Mosque Name": "Islamic Center of Cape Girardeau",
        "Address": "298 N. West End Blvd",
        "City": "Cape Girardeau",
        "State": "MO",
        "Zip": "63701",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Central Missouri",
        "Address": "201 S. 5th St.",
        "City": "Columbia",
        "State": "MO",
        "Zip": "65201",
        "Contact": "314-875-4633"
    },
    {
        "Mosque Name": " Imam Baragah Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Zainabiya ",
        "Address": "7011 Howdershell Rd.",
        "City": "Hazelwood",
        "State": "MO",
        "Zip": "63042",
        "Contact": "314-731-8463"
    },
    {
        "Mosque Name": "Jefferson City Muslim Community",
        "Address": "5123 Moreau Ridge Rd.",
        "City": "Jefferson City",
        "State": "MO",
        "Zip": "65109",
        "Contact": "573-632-4201"
    },
    {
        "Mosque Name": "Islamic Society of Joplin",
        "Address": "1302 Black Cat Rd.",
        "City": "Joplin",
        "State": "MO",
        "Zip": "64801",
        "Contact": "417-529-8995"
    },
    {
        "Mosque Name": "Inshirah Islamic Center",
        "Address": "3664 Troost",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64109",
        "Contact": "816-960-0475"
    },
    {
        "Mosque Name": "Masjid Omar",
        "Address": "2700 E. 49th St.",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64130",
        "Contact": "816-924-5683"
    },
    {
        "Mosque Name": "Islamic Society of Greater Kansas City",
        "Address": "8501 E. 99th St.",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64134",
        "Contact": "816-763-2267"
    },
    {
        "Mosque Name": " Islamic Center of Northland-Kansas City",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â C/O Hillside Church ",
        "Address": "900 Ne Vivion Rd.",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64118",
        "Contact": "816-763-2267"
    },
    {
        "Mosque Name": "Masjid Al-Huda",
        "Address": "141 Van Brunt Blvd.",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64123",
        "Contact": "816-231-6876"
    },
    {
        "Mosque Name": "Al-Haqq Islamic Center",
        "Address": "6941 Prospect",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64132",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Ghurabaa",
        "Address": "2904 Ne Park St.",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64117",
        "Contact": "816-923-1103"
    },
    {
        "Mosque Name": "Masjid Al-Mustaf",
        "Address": "3607 Ne Antioch Rd.",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64117",
        "Contact": "816-255-4391"
    },
    {
        "Mosque Name": "Inner City Islamic Dawah and Education Center",
        "Address": "2912 Park",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64109",
        "Contact": "816-729-6471"
    },
    {
        "Mosque Name": " Masjid Al-Taqwa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Somali Center of Kansis City Mo ",
        "Address": "1340 Admiral Blvd",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64106",
        "Contact": "816-842-2191"
    },
    {
        "Mosque Name": "Masjid Ahmad",
        "Address": "5501 Cleveland Ave",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64140",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Kahf Center",
        "Address": "4206 E. 9th St.",
        "City": "Kansas City",
        "State": "MO",
        "Zip": "64124",
        "Contact": "816-231-3101"
    },
    {
        "Mosque Name": "Islamic Foundation of Greater St. Louis",
        "Address": "517 Weidman Rd",
        "City": "Manchester",
        "State": "MO",
        "Zip": "63011",
        "Contact": "636-394-7878"
    },
    {
        "Mosque Name": "Islamic Center of Poplar Bluff",
        "Address": "1203 State Hwy W",
        "City": "Poplar Bluff",
        "State": "MO",
        "Zip": "63901",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Rolla",
        "Address": "1306 N Elm St.",
        "City": "Rolla",
        "State": "MO",
        "Zip": "65401",
        "Contact": "573-341-7360"
    },
    {
        "Mosque Name": "Sikeston Masjid",
        "Address": "315 N. New Madrid St.",
        "City": "Sikeston",
        "State": "MO",
        "Zip": "63801",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Springfield",
        "Address": "2151 E. Division St.",
        "City": "Springfield",
        "State": "MO",
        "Zip": "65803",
        "Contact": "417-863-1102"
    },
    {
        "Mosque Name": "Islamic Center of St. Joseph",
        "Address": "2325 Messanie St.",
        "City": "St. Joseph",
        "State": "MO",
        "Zip": "64501",
        "Contact": "816-232-1405"
    },
    {
        "Mosque Name": "Northwest Islamic Center",
        "Address": "10543 Lackland Rd.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63114",
        "Contact": "314-427-3900"
    },
    {
        "Mosque Name": "Al Qouba Masjid",
        "Address": "1925 Allen Ave.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63104",
        "Contact": "314-771-3548"
    },
    {
        "Mosque Name": "Masjid Abu Bakr",
        "Address": "4700 S. Grand Ave.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63111",
        "Contact": "314-352-3168"
    },
    {
        "Mosque Name": "Muslim Jamat of St. Louis",
        "Address": "6809 W. Florissant Ave.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63136",
        "Contact": "314-387-1361"
    },
    {
        "Mosque Name": "Imam Hussain Foundation",
        "Address": "5401 Lansdowne Ave.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63109",
        "Contact": "314-504-6887"
    },
    {
        "Mosque Name": "Grand Islamic Center",
        "Address": "3415-R S. Grand Blvd.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63118",
        "Contact": "314-771-3311"
    },
    {
        "Mosque Name": "Masjid Al-Tauheed",
        "Address": "5010 San Francisco Ave.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63115",
        "Contact": "314-381-9105"
    },
    {
        "Mosque Name": "Resalat Community Center",
        "Address": "3618 Meramec St.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63118",
        "Contact": "314-629-3993"
    },
    {
        "Mosque Name": " Medina Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Community Center ",
        "Address": "4666 Landsdowne Ave.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63116",
        "Contact": "314-352-2700"
    },
    {
        "Mosque Name": " Masjid Umar",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Institute of Learning ",
        "Address": "5388 Geraldine Ave.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63115",
        "Contact": "314-479-8994"
    },
    {
        "Mosque Name": " Masjid Bilal Ibn Rabah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Foundation of Greater St. Louis ",
        "Address": "3843 W. Pine St.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63108",
        "Contact": "314-531-8646"
    },
    {
        "Mosque Name": "Islamic Center of South County",
        "Address": "1389 Covington Manor Dr.",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63125",
        "Contact": ""
    },
    {
        "Mosque Name": "Bosnian Islamic Center",
        "Address": "318 Lemay Ferry",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63125",
        "Contact": "314-631-7746"
    },
    {
        "Mosque Name": "Al Mu Minun Islamic Center",
        "Address": "1434 N. Grand Ave",
        "City": "St. Louis",
        "State": "MO",
        "Zip": "63106",
        "Contact": "314-531-0609"
    },
    {
        "Mosque Name": "Islamic Center of Warrensburg",
        "Address": "143 E. Culton",
        "City": "Warrensburg",
        "State": "MO",
        "Zip": "64093",
        "Contact": "660-747-9442"
    },
    {
        "Mosque Name": "Dar Al-Zahra Shiia",
        "Address": "721 Strecker Rd.",
        "City": "Wildwood",
        "State": "MO",
        "Zip": "63011",
        "Contact": "636-532-4888"
    },
    {
        "Mosque Name": "Billings Islamic Center",
        "Address": "P.O. Box 121",
        "City": "Billings",
        "State": "MT",
        "Zip": "59103",
        "Contact": "406-690-9231"
    },
    {
        "Mosque Name": "Islamic Center of Bozeman",
        "Address": "1627 W. Main St. No. 163",
        "City": "Bozeman",
        "State": "MT",
        "Zip": "59715",
        "Contact": "406-587-7162"
    },
    {
        "Mosque Name": "Masjid Al-Rahma",
        "Address": "112 W. 5th St.",
        "City": "Lexington",
        "State": "NE",
        "Zip": "68850",
        "Contact": ""
    },
    {
        "Mosque Name": "Nebraska Islamic Foundation",
        "Address": "7125 Douglas St.",
        "City": "Lincoln",
        "State": "NE",
        "Zip": "68507",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Foundation of Lincoln",
        "Address": "3636 N. 1St St.",
        "City": "Lincoln",
        "State": "NE",
        "Zip": "68521",
        "Contact": "402-475-0475"
    },
    {
        "Mosque Name": "Masjid Al-Wadood",
        "Address": "824 E. Omaha Ave.",
        "City": "Norfolk",
        "State": "NE",
        "Zip": "68701",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Abdu Ur-Rahman Ibn Awf",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Millard Islamic Center ",
        "Address": "5135 Marshall Dr.",
        "City": "Omaha",
        "State": "NE",
        "Zip": "68137",
        "Contact": "402-515-5255"
    },
    {
        "Mosque Name": "Islamic Center of Omaha",
        "Address": "3511 N. 73Rd St.",
        "City": "Omaha",
        "State": "NE",
        "Zip": "68134",
        "Contact": "402-571-0720"
    },
    {
        "Mosque Name": "Masjid Imam Ash-Shafi I",
        "Address": "1122 Northwest Radial Hwy",
        "City": "Omaha",
        "State": "NE",
        "Zip": "68132",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Sioux Land",
        "Address": "2701 Willow St.",
        "City": "South Sioux City",
        "State": "NE",
        "Zip": "68776",
        "Contact": "402-494-5798"
    },
    {
        "Mosque Name": "Mosque of Carson City",
        "Address": "2990 Highway 50 E",
        "City": "Carson City",
        "State": "NV",
        "Zip": "89701",
        "Contact": "775-560-5004"
    },
    {
        "Mosque Name": "Islamic Association of Las Vegas",
        "Address": "837 South Rainbow Blvd",
        "City": "Las Vegas",
        "State": "NV",
        "Zip": "89145",
        "Contact": "702-243-3444"
    },
    {
        "Mosque Name": " Masjid Ibrahim",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Learning Center ",
        "Address": "3799 Edward Ave.",
        "City": "Las Vegas",
        "State": "NV",
        "Zip": "89108",
        "Contact": "702-395-7013"
    },
    {
        "Mosque Name": "Masjid As Sabur",
        "Address": "711 West Morgan Avenue",
        "City": "Las Vegas",
        "State": "NV",
        "Zip": "89106",
        "Contact": "702-647-2500"
    },
    {
        "Mosque Name": " Masjid Al-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Information Center ",
        "Address": "1601 E. Russell Rd.",
        "City": "Las Vegas",
        "State": "NV",
        "Zip": "89119",
        "Contact": "702-837-3400"
    },
    {
        "Mosque Name": " Jamia Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Nevada ",
        "Address": "4730 E. Desert Inn Rd.",
        "City": "Las Vegas",
        "State": "NV",
        "Zip": "89121",
        "Contact": "702-433-3431"
    },
    {
        "Mosque Name": " Islamic Center of Reno",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Northern Nevada Muslim Community Center ",
        "Address": "1857 Oddie Blvd.",
        "City": "Sparks",
        "State": "NV",
        "Zip": "89431",
        "Contact": "775-351-1857"
    },
    {
        "Mosque Name": "Islamic Society of the Seacost Area",
        "Address": "42 N. Dover Point Rd.",
        "City": "Dover",
        "State": "NH",
        "Zip": "3820",
        "Contact": "603-750-4060"
    },
    {
        "Mosque Name": "Islamic Society of Greater Manchester",
        "Address": "228 Maple St.",
        "City": "Manchester",
        "State": "NH",
        "Zip": "3103",
        "Contact": "603-644-0939"
    },
    {
        "Mosque Name": "Masjid Alfath",
        "Address": "571 Chestnut St.",
        "City": "Manchester",
        "State": "NH",
        "Zip": "3104",
        "Contact": "603-858-0943"
    },
    {
        "Mosque Name": " Masjidul Bayaan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Asbury Park ",
        "Address": "612 Ridge Ave.",
        "City": "Asbury Park",
        "State": "NJ",
        "Zip": "7712",
        "Contact": "732-318-6930"
    },
    {
        "Mosque Name": "Dawah Center",
        "Address": "16 S. Tennessee Ave.",
        "City": "Atlantic City",
        "State": "NJ",
        "Zip": "8401",
        "Contact": "609-340-8860"
    },
    {
        "Mosque Name": " Masjid Al-Taqwa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Organization of South Jersey ",
        "Address": "3536 Atlantic Ave.",
        "City": "Atlantic City",
        "State": "NJ",
        "Zip": "8401",
        "Contact": "609-344-1786"
    },
    {
        "Mosque Name": "Masjid Muhammad Islamic Center",
        "Address": "300 N. Albany Ave.",
        "City": "Atlantic City",
        "State": "NJ",
        "Zip": "8401",
        "Contact": "609-347-0788"
    },
    {
        "Mosque Name": "Masjid Furqaan",
        "Address": "1208-B Atlantic Ave.",
        "City": "Atlantic City",
        "State": "NJ",
        "Zip": "8401",
        "Contact": "609-344-0279"
    },
    {
        "Mosque Name": "Islamic Society of Basking Ridge",
        "Address": "P.O. Box 173",
        "City": "Basking Ridge",
        "State": "NJ",
        "Zip": "7920",
        "Contact": "908-672-1798"
    },
    {
        "Mosque Name": "Mas Center of Bayonne",
        "Address": "235 Broadway",
        "City": "Bayonne",
        "State": "NJ",
        "Zip": "7002",
        "Contact": "201-455-8806"
    },
    {
        "Mosque Name": " Miraj Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Bayonne Muslims ",
        "Address": "625 Ave. C",
        "City": "Bayonne",
        "State": "NJ",
        "Zip": "7002",
        "Contact": ""
    },
    {
        "Mosque Name": " Jame-E-Masjid Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â American Islamic Academy ",
        "Address": "110 Harrison",
        "City": "Boonton",
        "State": "NJ",
        "Zip": "7005",
        "Contact": "973-334-9334"
    },
    {
        "Mosque Name": "Garden State Islamic Center",
        "Address": "22 Coral Ave.",
        "City": "Bridgeton",
        "State": "NJ",
        "Zip": "8302",
        "Contact": "856-451-4651"
    },
    {
        "Mosque Name": "Al-Falah",
        "Address": "1475 Mountain Top Rd.",
        "City": "Bridgewater",
        "State": "NJ",
        "Zip": "8807",
        "Contact": ""
    },
    {
        "Mosque Name": " Selimiye Camii",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Delaware Valley Muslim Association ",
        "Address": "203 Fountain Ave.",
        "City": "Burlington",
        "State": "NJ",
        "Zip": "8016",
        "Contact": "609-386-5535"
    },
    {
        "Mosque Name": "Masjidun Nur",
        "Address": "1231 Mechanic St.",
        "City": "Camden",
        "State": "NJ",
        "Zip": "8104",
        "Contact": "856-365-1551"
    },
    {
        "Mosque Name": "Quba School And Islamic Center",
        "Address": "1311 Haddon Ave.",
        "City": "Camden",
        "State": "NJ",
        "Zip": "8103",
        "Contact": "856-831-6562"
    },
    {
        "Mosque Name": "Admiral Family Community Center",
        "Address": "1268 Park Blvd.",
        "City": "Camden",
        "State": "NJ",
        "Zip": "8103",
        "Contact": "609-541-0301"
    },
    {
        "Mosque Name": "Masjid Muhammad Ibn Abdul Wahab",
        "Address": "1032 Spruce St.",
        "City": "Camden",
        "State": "NJ",
        "Zip": "8103",
        "Contact": "856-541-0681"
    },
    {
        "Mosque Name": "Carteret Islamic Center",
        "Address": "P.O. Box 422",
        "City": "Carteret",
        "State": "NJ",
        "Zip": "7008",
        "Contact": "732-770-9363"
    },
    {
        "Mosque Name": "Deleware Valley Islamic Center",
        "Address": "199 Berlin Rd.",
        "City": "Clemeaton",
        "State": "NJ",
        "Zip": "8021",
        "Contact": "856-783-0006"
    },
    {
        "Mosque Name": "Masjid Shahada",
        "Address": "2648 U.S. 206",
        "City": "Columbus",
        "State": "NJ",
        "Zip": "8022",
        "Contact": "609-265-9370"
    },
    {
        "Mosque Name": " Baitul-Qayem",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Shia Association of North America ",
        "Address": "337 Conrow Rd.",
        "City": "Delran",
        "State": "NJ",
        "Zip": "8075",
        "Contact": "856-764-9697"
    },
    {
        "Mosque Name": " Iqra Community Services",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â (East Brunswick Congregational Church) ",
        "Address": "402 New Brunswick Ave",
        "City": "East Brunswick",
        "State": "NJ",
        "Zip": "8816",
        "Contact": "908-227-6830"
    },
    {
        "Mosque Name": "Masjidus- Sadaqa",
        "Address": "18 N. 19Th (Ground Floor)",
        "City": "East Orange",
        "State": "NJ",
        "Zip": "7017",
        "Contact": "973-678-1365"
    },
    {
        "Mosque Name": " Masjidu Ahlis Sunnah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of America ",
        "Address": "215 N. Oraton Pkwy",
        "City": "East Orange",
        "State": "NJ",
        "Zip": "7017",
        "Contact": "201-672-6690"
    },
    {
        "Mosque Name": "Masjid As Habul Yameen",
        "Address": "224 N. 18th St.",
        "City": "East Orange",
        "State": "NJ",
        "Zip": "7017",
        "Contact": "973-678-7878"
    },
    {
        "Mosque Name": "Institute For Islamic Studies",
        "Address": "379 Princeton Highstown Rd. Bldg 2 Suite 1",
        "City": "East Windsor",
        "State": "NJ",
        "Zip": "8512",
        "Contact": "917-685-7502"
    },
    {
        "Mosque Name": "Jamia Musallah",
        "Address": "157 Plainfield Ave.",
        "City": "Edison",
        "State": "NJ",
        "Zip": "8817",
        "Contact": "732-896-0356"
    },
    {
        "Mosque Name": "Muslim Community Center of Union County",
        "Address": "60 Prince St.",
        "City": "Elizabeth",
        "State": "NJ",
        "Zip": "7208",
        "Contact": "908-965-1001"
    },
    {
        "Mosque Name": "Dar-Ul-Islam",
        "Address": "606-612 Salem Ave.",
        "City": "Elizabeth",
        "State": "NJ",
        "Zip": "7208",
        "Contact": "908-965-2011"
    },
    {
        "Mosque Name": "Masjid Al-Hadi",
        "Address": "9 Broad St.",
        "City": "Elizabeth",
        "State": "NJ",
        "Zip": "7201",
        "Contact": "908-351-7238"
    },
    {
        "Mosque Name": "Mehfile Shahe-Khorasan",
        "Address": "36 Tenafly Rd.",
        "City": "Englewood",
        "State": "NJ",
        "Zip": "7631",
        "Contact": ""
    },
    {
        "Mosque Name": " Astana-E Zehra",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Ahle Baith Foundation ",
        "Address": "14 Mt. Vernon Rd.",
        "City": "Englishtown",
        "State": "NJ",
        "Zip": "7726",
        "Contact": "732-446-0554"
    },
    {
        "Mosque Name": "Islamic Center of Hunterdon County",
        "Address": "39 Mine St.",
        "City": "Flemington",
        "State": "NJ",
        "Zip": "8822",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Community of New Jersey",
        "Address": "15 S. 2Nd St.",
        "City": "Fords",
        "State": "NJ",
        "Zip": "8863",
        "Contact": "773-738-5100"
    },
    {
        "Mosque Name": "Imam-A-Zamana Foundation of North America",
        "Address": "235 Georgia Rd.",
        "City": "Freehold",
        "State": "NJ",
        "Zip": "7728",
        "Contact": "732-308-3027"
    },
    {
        "Mosque Name": "Albanian American Muslim Society",
        "Address": "43 Monroe St.",
        "City": "Garfield",
        "State": "NJ",
        "Zip": "7026",
        "Contact": "973-546-4095"
    },
    {
        "Mosque Name": "Bergen County Islamic Education Center",
        "Address": "78 Trinity Place",
        "City": "Hackensack",
        "State": "NJ",
        "Zip": "7601",
        "Contact": "201-488-8075"
    },
    {
        "Mosque Name": "Minhaj-Ul-Quran",
        "Address": "36 Vreeland Ave.",
        "City": "Hackensack",
        "State": "NJ",
        "Zip": "7601",
        "Contact": "201-641-7474"
    },
    {
        "Mosque Name": "Islamic Society of Northern New Jersey",
        "Address": "354 Road 46 W",
        "City": "Hackettstown",
        "State": "NJ",
        "Zip": "7840",
        "Contact": "908-850-9925"
    },
    {
        "Mosque Name": "Islamic Center of Harrison",
        "Address": "301 Jersey St.",
        "City": "Harrison",
        "State": "NJ",
        "Zip": "7029",
        "Contact": "973-481-2877"
    },
    {
        "Mosque Name": "Masjid Waarith Ud-Deen",
        "Address": "62-70 Howard St.",
        "City": "Irvington",
        "State": "NJ",
        "Zip": "7111",
        "Contact": "973-373-3333"
    },
    {
        "Mosque Name": "Zainabia Imambara",
        "Address": "1049 Clinton Ave",
        "City": "Irvington",
        "State": "NJ",
        "Zip": "7111",
        "Contact": "973-375-5995"
    },
    {
        "Mosque Name": " Sunni Rizvi Jamia Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Gmc Foundation ",
        "Address": "294 Grove St.",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7302",
        "Contact": "201-333-2500"
    },
    {
        "Mosque Name": "Masjid Al-Iman",
        "Address": "598 Communipaw",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7304",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Federation of New Jersey",
        "Address": "530 Montgomery St.",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7302",
        "Contact": "201-433-0057"
    },
    {
        "Mosque Name": "El Tawheed Islamic Center",
        "Address": "984 W. Side Ave",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7306",
        "Contact": "201-432-1773"
    },
    {
        "Mosque Name": "Masjid Darul Khair",
        "Address": "20 Chopin Court",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7302",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Salaam",
        "Address": "2824 Kennedy Blvd",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7306",
        "Contact": "201-653-2990"
    },
    {
        "Mosque Name": " Al-Huda Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â The Egyptian American Group ",
        "Address": "326 Central Ave.",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7307",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Muhammad",
        "Address": "297 Martin Luther King Drive",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7305",
        "Contact": "201-435-6845"
    },
    {
        "Mosque Name": "Islamic Center of Jersey City",
        "Address": "17 Park Street",
        "City": "Jersey City",
        "State": "NJ",
        "Zip": "7304",
        "Contact": "201-433-5000"
    },
    {
        "Mosque Name": "Islamic Center of Old Bridge",
        "Address": "205 State Rt. 35 North",
        "City": "Keyport",
        "State": "NJ",
        "Zip": "7735",
        "Contact": "732-583-2030"
    },
    {
        "Mosque Name": "Islamic Center of Lake Hiawatha",
        "Address": "63 N. Beverwyck Rd.",
        "City": "Lake Hiawatha",
        "State": "NJ",
        "Zip": "7034",
        "Contact": "970-703-4474"
    },
    {
        "Mosque Name": "Masjid Free Haven",
        "Address": "280 Ashland Ave.",
        "City": "Lawnside",
        "State": "NJ",
        "Zip": "8045",
        "Contact": "856-546-1500"
    },
    {
        "Mosque Name": "Islamic Circle of Mercer County",
        "Address": "336 Lawrence Station Rd.",
        "City": "Lawrenceville",
        "State": "NJ",
        "Zip": "8648",
        "Contact": "609-586-3165"
    },
    {
        "Mosque Name": "Ar-Rahma Center",
        "Address": "3003 Lincoln Dr. W",
        "City": "Marlton",
        "State": "NJ",
        "Zip": "8053",
        "Contact": "856-334-5414"
    },
    {
        "Mosque Name": " Masjid Al-Amaan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Monmouth County ",
        "Address": "496 Red Hill Rd.",
        "City": "Middletown",
        "State": "NJ",
        "Zip": "7748",
        "Contact": "732-671-3321"
    },
    {
        "Mosque Name": "Islamic Society of Central Jersey",
        "Address": "4145 Us 1",
        "City": "Monmouth Junction",
        "State": "NJ",
        "Zip": "8852",
        "Contact": "732-329-8126"
    },
    {
        "Mosque Name": "New Brunswick Islamic Center",
        "Address": "167 Remsen Ave.",
        "City": "New Brunswick",
        "State": "NJ",
        "Zip": "8901",
        "Contact": "732-214-1547"
    },
    {
        "Mosque Name": " Masjid Al-Quddus",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Nigerian Muslim Council  Inc ",
        "Address": "582 S. 11th St.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7103",
        "Contact": "973-424-0662"
    },
    {
        "Mosque Name": "Masjid Imam Ali Muslim",
        "Address": "257 Orange Avenue S.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7103",
        "Contact": "908-380-3819"
    },
    {
        "Mosque Name": "Masjid Al-Fallahee",
        "Address": "675 Clinton Ave.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7108",
        "Contact": "973-732-0393"
    },
    {
        "Mosque Name": "Masjid Rahmah",
        "Address": "657 Martin Luther King Blvd",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7102",
        "Contact": "973-621-8833"
    },
    {
        "Mosque Name": "National Islamic Association",
        "Address": "239 Roseville Ave.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7107",
        "Contact": "973-482-8996"
    },
    {
        "Mosque Name": " Masjid Al-Mubarak",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Nigerian American Islamic Mission ",
        "Address": "103 14th Ave.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7103",
        "Contact": "973-622-6246"
    },
    {
        "Mosque Name": " Masjid Bayt-Ul-Khaliq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Newark Community Masjid ",
        "Address": "214 Chancellor Ave",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7112",
        "Contact": "973-926-8927"
    },
    {
        "Mosque Name": "Masjid Al-Haqq",
        "Address": "689 Springfield Ave.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7101",
        "Contact": "973-373-0344"
    },
    {
        "Mosque Name": "Islamic Cultural Center",
        "Address": "20-24 Bradford Place",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7102",
        "Contact": "973-623-2100"
    },
    {
        "Mosque Name": "Irvington Islamic Center",
        "Address": "660 Sanford Ave.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7106",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Madina Masjid",
        "Address": "55 Manor Dr. Basement",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7106",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ibrahim",
        "Address": "392 Chancellor Ave.",
        "City": "Newark",
        "State": "NJ",
        "Zip": "7112",
        "Contact": "973-923-3426"
    },
    {
        "Mosque Name": "Islamic Center of South Jersey",
        "Address": "612 Garfield Ave.",
        "City": "Palmyra",
        "State": "NJ",
        "Zip": "8065",
        "Contact": "856-786-7440"
    },
    {
        "Mosque Name": "Islamic Information Institute",
        "Address": "520 Ernston Rd. No.9",
        "City": "Parlin",
        "State": "NJ",
        "Zip": "8859",
        "Contact": "732-316-1800"
    },
    {
        "Mosque Name": "Al-Ibrahemi Masjid",
        "Address": "59 Van Winkle Ave.",
        "City": "Passaic",
        "State": "NJ",
        "Zip": "7055",
        "Contact": "973-277-2237"
    },
    {
        "Mosque Name": "Naksibendi Sufi Center",
        "Address": "940 Main Ave.",
        "City": "Passaic",
        "State": "NJ",
        "Zip": "7055",
        "Contact": "607-369-4816"
    },
    {
        "Mosque Name": "Masjid Al-Ansar",
        "Address": "132 President St.",
        "City": "Passaic",
        "State": "NJ",
        "Zip": "7055",
        "Contact": "973-365-0988"
    },
    {
        "Mosque Name": "Jalalabad Jam-E-Masjid",
        "Address": "57-61 Van Houghton St.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7505",
        "Contact": "973-279-6408"
    },
    {
        "Mosque Name": " Ulu Cami",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Turkish American Cultural Center ",
        "Address": "408 Knickerbocker Ave.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7503",
        "Contact": "973-345-6584"
    },
    {
        "Mosque Name": "Albanian Associated Fund Cultural Center",
        "Address": "456 River St.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7524",
        "Contact": "973-523-9203"
    },
    {
        "Mosque Name": " Mohammadia Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Afghan ",
        "Address": "140 Marshall St.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7501",
        "Contact": "973-742-3020"
    },
    {
        "Mosque Name": "Masjid Ansar As-Sunnah",
        "Address": "63 Washington St. 2Nd Fl.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7501",
        "Contact": "973-357-0122"
    },
    {
        "Mosque Name": " Masjid Al-Ferdous",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Paterson Islamic Mission ",
        "Address": "438 Union Ave.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7502",
        "Contact": "973-389-7987"
    },
    {
        "Mosque Name": "Islamic Center of Passaic & Patterson",
        "Address": "6 Plaza Rd.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7424",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Omar Bin Khattab",
        "Address": "501 Getty Ave.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7503",
        "Contact": "973-279-6226"
    },
    {
        "Mosque Name": "Turkish Muslim Mosque",
        "Address": "32 Chestnut St",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7501",
        "Contact": "973-345-1083"
    },
    {
        "Mosque Name": "Islamic Center of Passaic County",
        "Address": "152 Derrom Ave.",
        "City": "Paterson",
        "State": "NJ",
        "Zip": "7504",
        "Contact": "973-278-7070"
    },
    {
        "Mosque Name": "Muslim Center of Middlesex County",
        "Address": "1000 Hoes Lane",
        "City": "Piscataway",
        "State": "NJ",
        "Zip": "8854",
        "Contact": "732-463-2004"
    },
    {
        "Mosque Name": "Masjidullah",
        "Address": "321 Grant Avenue",
        "City": "Plainfield",
        "State": "NJ",
        "Zip": "7060",
        "Contact": "908-561-6797"
    },
    {
        "Mosque Name": "Plainfield Center for Islamic Enlightenment",
        "Address": "147-151 North Ave.",
        "City": "Plainfield",
        "State": "NJ",
        "Zip": "7060",
        "Contact": "908-222-1101"
    },
    {
        "Mosque Name": "Islamic Dawah Center",
        "Address": "230 E. Fifth St.",
        "City": "Plainfielf",
        "State": "NJ",
        "Zip": "7060",
        "Contact": "908-769-8700"
    },
    {
        "Mosque Name": "Al Falah Center",
        "Address": "P.O. Box 252",
        "City": "Pluckemin",
        "State": "NJ",
        "Zip": "7978",
        "Contact": "908-671-1742"
    },
    {
        "Mosque Name": "Islamic Center of Morris County",
        "Address": "1 Mannino Dr.",
        "City": "Rockaway",
        "State": "NJ",
        "Zip": "7866",
        "Contact": "973-664-1111"
    },
    {
        "Mosque Name": "Masjid Ismail",
        "Address": "121-125 Chestnut St.",
        "City": "Roselle",
        "State": "NJ",
        "Zip": "7203",
        "Contact": "908-245-3586"
    },
    {
        "Mosque Name": " Masjid-E-Ali",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Foundation  Inc. ",
        "Address": "47 Cedar Grove Lane",
        "City": "Somerset",
        "State": "NJ",
        "Zip": "8873",
        "Contact": "732-564-1331"
    },
    {
        "Mosque Name": "Muslim Center of Somerset County",
        "Address": "63 Southside Ave.",
        "City": "Somerville",
        "State": "NJ",
        "Zip": "8876",
        "Contact": "908-231-1263"
    },
    {
        "Mosque Name": "Masjid Shuhada",
        "Address": "2648 Us Rt. 206",
        "City": "Springfield",
        "State": "NJ",
        "Zip": "8022",
        "Contact": "609-265-9310"
    },
    {
        "Mosque Name": "Nida-Ul-Islam Center",
        "Address": "250 Hargreaves Ave.",
        "City": "Teaneck",
        "State": "NJ",
        "Zip": "7666",
        "Contact": "201-833-2162"
    },
    {
        "Mosque Name": " Dar Ul-Islah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community of Bergen ",
        "Address": "320 Febry Terrace",
        "City": "Teaneck",
        "State": "NJ",
        "Zip": "7666",
        "Contact": "201-692-7730"
    },
    {
        "Mosque Name": "Islamic Center of Fairleigh Dicks",
        "Address": "1000 River Road Student Un. Bld T-Su2-03",
        "City": "Teaneck",
        "State": "NJ",
        "Zip": "7666",
        "Contact": "201-692-2768"
    },
    {
        "Mosque Name": " Masjid Al-Mustafa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Ocean County ",
        "Address": "2116 Whitesville Rd.",
        "City": "Toms River",
        "State": "NJ",
        "Zip": "8755",
        "Contact": "732-363-1940"
    },
    {
        "Mosque Name": " Masjid Bilal",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Society of Jersey Shore ",
        "Address": "1733 Route 9",
        "City": "Toms River",
        "State": "NJ",
        "Zip": "8755",
        "Contact": "732-286-0300"
    },
    {
        "Mosque Name": "Islamic Center of Ewing",
        "Address": "685 Parkway Ave.",
        "City": "Trenton",
        "State": "NJ",
        "Zip": "8618",
        "Contact": "609-406-9222"
    },
    {
        "Mosque Name": "Masjid Muhammed Al Uthaymeen",
        "Address": "39 East Paul Ave.",
        "City": "Trenton",
        "State": "NJ",
        "Zip": "8638",
        "Contact": "609-503-5148"
    },
    {
        "Mosque Name": "Masjid As-Saffat",
        "Address": "25 Oxford St.",
        "City": "Trenton",
        "State": "NJ",
        "Zip": "8618",
        "Contact": "609-695-7775"
    },
    {
        "Mosque Name": "Masjidul-Taqwa",
        "Address": "1001 East State Street",
        "City": "Trenton",
        "State": "NJ",
        "Zip": "8609",
        "Contact": "609-392-3303"
    },
    {
        "Mosque Name": "Islamic Center of Union County",
        "Address": "2372 Morris Ave.",
        "City": "Union",
        "State": "NJ",
        "Zip": "7083",
        "Contact": "908-686-5400"
    },
    {
        "Mosque Name": "North Hudson Islamic Educational Cener",
        "Address": "4613 Cottage Place",
        "City": "Union City",
        "State": "NJ",
        "Zip": "7087",
        "Contact": "201-330-0066"
    },
    {
        "Mosque Name": " Voorhees Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim American Community Association ",
        "Address": "3 Lafayette Ave.",
        "City": "Voorhees",
        "State": "NJ",
        "Zip": "8043",
        "Contact": "856-753-7925"
    },
    {
        "Mosque Name": " Masjid Al-Nasr",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Circassian Benevolent Association ",
        "Address": "383 Oldham Rd.",
        "City": "Wayne",
        "State": "NJ",
        "Zip": "7470",
        "Contact": "973-790-9709"
    },
    {
        "Mosque Name": "Westville Islamic Comm Center Masjid",
        "Address": "1420 Pilgrim Ave.",
        "City": "Westville",
        "State": "NJ",
        "Zip": "8096",
        "Contact": "856-853-0330"
    },
    {
        "Mosque Name": "Dar-Al-Islam",
        "Address": "1621 County Rd. 155",
        "City": "Abiquiu",
        "State": "NM",
        "Zip": "87510",
        "Contact": ""
    },
    {
        "Mosque Name": "Mahdavi Center",
        "Address": "524 Chama St. Se",
        "City": "Albuquerque",
        "State": "NM",
        "Zip": "87108",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of New Mexico",
        "Address": "1100 Yale Blvd Se",
        "City": "Albuquerque",
        "State": "NM",
        "Zip": "87106",
        "Contact": "505-256-1450"
    },
    {
        "Mosque Name": "Gallup Islamic Center",
        "Address": "3100 E. Hwy 66",
        "City": "Gallup",
        "State": "NM",
        "Zip": "87301",
        "Contact": "505-879-8727"
    },
    {
        "Mosque Name": " Masjid Al-Huda",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â The Islamic Center of Las Cruces ",
        "Address": "1065 E Boutz",
        "City": "Las Cruces",
        "State": "NM",
        "Zip": "88001",
        "Contact": "575-522-3363"
    },
    {
        "Mosque Name": "The Las Cruces Islamic Center",
        "Address": "1025 S. Solano Dr.",
        "City": "Las Cruces",
        "State": "NM",
        "Zip": "88001",
        "Contact": "575-524-2430"
    },
    {
        "Mosque Name": " Masjid Taha",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Ibn Asheer Institute of Islamic Studies ",
        "Address": "302 E. Barcelona St.",
        "City": "Sante Fe",
        "State": "NM",
        "Zip": "87505",
        "Contact": "505-795-3230"
    },
    {
        "Mosque Name": "Muslim Society of Northern New Mexixo",
        "Address": "839 Camino Sierra Vista Suite 1",
        "City": "Sante Fe",
        "State": "NM",
        "Zip": "87505",
        "Contact": "505-424-3453"
    },
    {
        "Mosque Name": "Islamic Society of Socorro",
        "Address": "1208 El Camino Real",
        "City": "Socorro",
        "State": "NM",
        "Zip": "87801",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Khadijah",
        "Address": "507 Ranchitos Rd.",
        "City": "Taol",
        "State": "NM",
        "Zip": "87571",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid As-Salaam",
        "Address": "276 Central Ave.",
        "City": "Albany",
        "State": "NY",
        "Zip": "12206",
        "Contact": "518-463-6275"
    },
    {
        "Mosque Name": "Islamic Shia Ithna Asheri Jamaat",
        "Address": "617 Sand Creek Rd.",
        "City": "Albany",
        "State": "NY",
        "Zip": "12205",
        "Contact": "518-869-1492"
    },
    {
        "Mosque Name": "Islamic Society of Southern Tier",
        "Address": "3335 Buffalo Rd.",
        "City": "Allegany",
        "State": "NY",
        "Zip": "14706",
        "Contact": "716-373-3404"
    },
    {
        "Mosque Name": "Jaffarya Center of Niagara Frontier",
        "Address": "10300 Transit Rd.",
        "City": "Amherst",
        "State": "NY",
        "Zip": "14051",
        "Contact": "201-567-5993"
    },
    {
        "Mosque Name": " Masjid Baitul Mukarram",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Astoria Islamic Center ",
        "Address": "22-21 33Rd St.",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11105",
        "Contact": "718-204-7562"
    },
    {
        "Mosque Name": " Shah Jalal Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Astoria Islamic Foundation ",
        "Address": "25-67 31th St.",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11102",
        "Contact": "718-204-2337"
    },
    {
        "Mosque Name": "Masjid El-Bir of Astroria",
        "Address": "36-07 30th St.",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11106",
        "Contact": "718-784-0336"
    },
    {
        "Mosque Name": "Islamic Unity And Cultural Center",
        "Address": "31-33 12th St.",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11106",
        "Contact": "718-274-2016"
    },
    {
        "Mosque Name": "Islamic Center of Bosnia and Herzegovina",
        "Address": "18-02 Astoria Blvd",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11102",
        "Contact": "718-545-4980"
    },
    {
        "Mosque Name": " Dar Al Dawah Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim American Society ",
        "Address": "35-13 23Rd Ave.",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11105",
        "Contact": "718-274-2474"
    },
    {
        "Mosque Name": "Al-Amin Jame Masjid And Islamic Center",
        "Address": "35-19 36th Ave.",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11106",
        "Contact": "718-729-6325"
    },
    {
        "Mosque Name": "Masjid Al-Iman",
        "Address": "24-30 Steinway St.",
        "City": "Astoria",
        "State": "NY",
        "Zip": "11103",
        "Contact": "718-626-6633"
    },
    {
        "Mosque Name": "Masjid Dar Al Quran",
        "Address": "1514 E. 3Rd Ave",
        "City": "Bay Shore",
        "State": "NY",
        "Zip": "11706",
        "Contact": "631-665-9462"
    },
    {
        "Mosque Name": "Masjid Ar-Rashid",
        "Address": "352 Main St.",
        "City": "Beacon",
        "State": "NY",
        "Zip": "12508",
        "Contact": "845-831-7903"
    },
    {
        "Mosque Name": "The Islamic Foundation",
        "Address": "8041 237th St.",
        "City": "Bellerose",
        "State": "NY",
        "Zip": "11427",
        "Contact": "718-523-5046"
    },
    {
        "Mosque Name": "Jame Masjid of Bellmore",
        "Address": "1425 Newbridge Rd.",
        "City": "Bellmore",
        "State": "NY",
        "Zip": "11710",
        "Contact": "516-785-1426"
    },
    {
        "Mosque Name": "Masjid Al Mujahideen",
        "Address": "1719 Montauk Hwy",
        "City": "Bellport",
        "State": "NY",
        "Zip": "11713",
        "Contact": "516-698-5794"
    },
    {
        "Mosque Name": " Masjid Al-Baqi",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslims of Long Island ",
        "Address": "320 Central Ave.",
        "City": "Bethpage",
        "State": "NY",
        "Zip": "11714",
        "Contact": "516-433-4141"
    },
    {
        "Mosque Name": "Islamic Assoc. of Finger Lakes",
        "Address": "62 Main St",
        "City": "Big Flats",
        "State": "NY",
        "Zip": "14814",
        "Contact": "607-562-3869"
    },
    {
        "Mosque Name": " Islamic Center of Suffolk County",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Jafria Association of North America ",
        "Address": "124 3Rd St.",
        "City": "Brentwood",
        "State": "NY",
        "Zip": "11717",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Deyaue of Islam",
        "Address": "1475 Jesup Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10452",
        "Contact": "718-293-5323"
    },
    {
        "Mosque Name": "Fouta Islamic Center",
        "Address": "3400 3Rd Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10456",
        "Contact": "347-963-9898"
    },
    {
        "Mosque Name": "Masjid Adam",
        "Address": "2263 Crotona Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10457",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Cultural Center",
        "Address": "371 E. 166th St.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10456",
        "Contact": "718-293-4410"
    },
    {
        "Mosque Name": "Al-Janed Islamic Center",
        "Address": "984 Interval Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10462",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Tajul Huda",
        "Address": "314 E. 170th St.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10451",
        "Contact": "347-271-5476"
    },
    {
        "Mosque Name": "Masjid Al-Huda",
        "Address": "3979 White Plains Rd.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10466",
        "Contact": "718-653-6848"
    },
    {
        "Mosque Name": "North Bronx Islamic Center",
        "Address": "3156 Perry Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10467",
        "Contact": "517-515-3559"
    },
    {
        "Mosque Name": " Islamic Cultural Center-North",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â African Islamic Center Inc ",
        "Address": "2044 Benedict Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10462",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Annasr",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Bronx Islamic Cultural Center ",
        "Address": "50 E. Tremont Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10453",
        "Contact": "718-450-3762"
    },
    {
        "Mosque Name": "Nurudeen Islamic Charity",
        "Address": "3391 3Rd Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10456",
        "Contact": "347-267-8362"
    },
    {
        "Mosque Name": "Masjid Quba",
        "Address": "3573 Rochambeau Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10467",
        "Contact": "718-515-9071"
    },
    {
        "Mosque Name": "Madni Masjid",
        "Address": "834 Brady Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10462",
        "Contact": "718-931-1521"
    },
    {
        "Mosque Name": " Mount Hope Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Sunna Wal Jamaa ",
        "Address": "24 Mount Hope Pl",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10453",
        "Contact": "718-731-2800"
    },
    {
        "Mosque Name": "Parkchester Jamme Masjid  Inc.",
        "Address": "1203 Virginia Ave",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10472",
        "Contact": "718-828-4194"
    },
    {
        "Mosque Name": "Baitus Salaam Jame Masjid Inc",
        "Address": "2703 Decatur Ave",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10458",
        "Contact": "646-402-8277"
    },
    {
        "Mosque Name": "Baitul Aman Islamic Center",
        "Address": "2351 New Bold Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10462",
        "Contact": "718-904-8828"
    },
    {
        "Mosque Name": " Masjid Hefaz",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Anjuman Hefazatul Islam ",
        "Address": "365 E. 198th St.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10458",
        "Contact": "718-733-0234"
    },
    {
        "Mosque Name": " Bronx Muslim Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mas Ny Chapter ",
        "Address": "702 Rhinelander",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10462",
        "Contact": "718-822-1922"
    },
    {
        "Mosque Name": " Islamic Falah of America",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Makky Jamme Masjid ",
        "Address": "115 E. 168th St.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10452",
        "Contact": "718-293-5287"
    },
    {
        "Mosque Name": "Masjid Noor-Ul-Huda",
        "Address": "3033 Young Ave.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10469",
        "Contact": "718-798-5727"
    },
    {
        "Mosque Name": "Riverdale Islamic Center",
        "Address": "3058 Godwin Terrace Suite 3",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10463",
        "Contact": "718-548-4456"
    },
    {
        "Mosque Name": "Ebaide Elrahmain Mosque",
        "Address": "65 E. 183Rd St.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10453",
        "Contact": "718-563-6159"
    },
    {
        "Mosque Name": "Masjid Iman Islamic Center",
        "Address": "279 E. 165th St.",
        "City": "Bronx",
        "State": "NY",
        "Zip": "10456",
        "Contact": "646-220-6340"
    },
    {
        "Mosque Name": "Turkish American Eyup Sultan Center",
        "Address": "2812 Brighton 3Rd St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11235",
        "Contact": "718-332-5747"
    },
    {
        "Mosque Name": "Masjid Al- Rahman",
        "Address": "333 86th St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11218",
        "Contact": "718-748-2540"
    },
    {
        "Mosque Name": "Masjid Iqaamatiddeen",
        "Address": "268 Malcolm X",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11233",
        "Contact": ""
    },
    {
        "Mosque Name": "Sawiatu Sofuwuatu L Islam",
        "Address": "435 Franklin Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11238",
        "Contact": "718-398-0745"
    },
    {
        "Mosque Name": " Crimean Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â American Association of Crimean Turks ",
        "Address": "4509 New Utredcht Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11219",
        "Contact": "718-851-6621"
    },
    {
        "Mosque Name": "Masjid Al Badr",
        "Address": "2431 Bath Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11214",
        "Contact": "718-372-8317"
    },
    {
        "Mosque Name": "Al-Imam Al-Bukhari",
        "Address": "6915 4th Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11209",
        "Contact": "718-238-2252"
    },
    {
        "Mosque Name": "Albanian American Islamic Community",
        "Address": "1325 Albemarie Rd",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11226",
        "Contact": "718-282-0358"
    },
    {
        "Mosque Name": " Masjid An-Nur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Ummah of North America ",
        "Address": "1033 Glenmore Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11208",
        "Contact": "718-277-7900"
    },
    {
        "Mosque Name": "Darul-Jannah Masjid",
        "Address": "6 Ave. C",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11218",
        "Contact": "718-437-9848"
    },
    {
        "Mosque Name": " Masjid Khaled Ibn Al-Waleed",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Canarsie Islamic Service ",
        "Address": "959 E. 85th St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11236",
        "Contact": "718-444-1544"
    },
    {
        "Mosque Name": "Beit Almaqdis Islamic Center",
        "Address": "6206 6th Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11220",
        "Contact": "718-567-7091"
    },
    {
        "Mosque Name": "Baitush Sharaf Jame Masjid",
        "Address": "769 Bergen St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11238",
        "Contact": "718-398-4579"
    },
    {
        "Mosque Name": "Masjid Al Aman",
        "Address": "203 Forbell St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11208",
        "Contact": "718-277-3976"
    },
    {
        "Mosque Name": "Masjid Abdul Muhsi Khalifa",
        "Address": "120 Madison St",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11216",
        "Contact": "718-783-1279"
    },
    {
        "Mosque Name": "Masjid Al-Jamiyah",
        "Address": "547 Howard Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11233",
        "Contact": "718-771-3111"
    },
    {
        "Mosque Name": "Tayba Islamic Center",
        "Address": "2165 Coney Island Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11223",
        "Contact": "718-382-3943"
    },
    {
        "Mosque Name": "African Islamic Mission",
        "Address": "1390 Bedford Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11216",
        "Contact": "718-638-4588"
    },
    {
        "Mosque Name": "Nur Al-Islam",
        "Address": "3727 Cypress Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11224",
        "Contact": "718-435-3237"
    },
    {
        "Mosque Name": " Masjid A-Ansar",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Al-Ansar Islamic Center ",
        "Address": "2230 Bath Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11214",
        "Contact": "347-702-9580"
    },
    {
        "Mosque Name": "Bairtur Rahman Masjid",
        "Address": "90 Ralph Ave. 1St Fl",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11221",
        "Contact": "718-452-2932"
    },
    {
        "Mosque Name": "Islamic Research and Dawah Center",
        "Address": "406 Autumn Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11208",
        "Contact": "718-235-5952"
    },
    {
        "Mosque Name": "Masjid Al-Ihsaan",
        "Address": "977 Fulton St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11238",
        "Contact": "718-783-5787"
    },
    {
        "Mosque Name": " Fatih Camii Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â United American Muslim Assoc. Ny  Inc. ",
        "Address": "59-11 8th Ave",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11220",
        "Contact": "718-438-6919"
    },
    {
        "Mosque Name": "Masjid Oulel-Albab",
        "Address": "234 Bay Ridge Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11220",
        "Contact": "718-491-5950"
    },
    {
        "Mosque Name": " Broadway Masjid And Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Foundation of America ",
        "Address": "345 Broadway",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11211",
        "Contact": "718-935-0349"
    },
    {
        "Mosque Name": "Masjidal Al Muslimeen",
        "Address": "951 Herkimer St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11233",
        "Contact": "718-771-1506"
    },
    {
        "Mosque Name": " Masjid Ibadul-Rahman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Nigerian Muslim Association ",
        "Address": "360 Myrtle Ave",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11201",
        "Contact": "718-260-9618"
    },
    {
        "Mosque Name": " Islamic Guidance Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Brooklyn Mosque Ahlul Bayt ",
        "Address": "543 Atlantic Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11217",
        "Contact": "718-852-1398"
    },
    {
        "Mosque Name": "Baitul Kareem",
        "Address": "380 E. 18th St.  Apt. Lc",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11226",
        "Contact": "718-940-9096"
    },
    {
        "Mosque Name": "Muslim Community Center",
        "Address": "1089 Coney Island Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11230",
        "Contact": "718-859-4485"
    },
    {
        "Mosque Name": "Masjid Bab-Us-Salam",
        "Address": "3604 Neptune Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11224",
        "Contact": "718-714-7412"
    },
    {
        "Mosque Name": "Faizan-E-Madinah Islamic Center",
        "Address": "715 Coney Island Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11218",
        "Contact": "718-902-1480"
    },
    {
        "Mosque Name": "Masjid Arqam",
        "Address": "651 Banner Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11235",
        "Contact": "718-646-0960"
    },
    {
        "Mosque Name": " Flatbush Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Dar Al-Arqam ",
        "Address": "1288 Nostrand Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11226",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Abu Bakr As-Siddiq",
        "Address": "115 Foster Ave",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11230",
        "Contact": "718-871-8814"
    },
    {
        "Mosque Name": " Masjid Dawood",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Mission of America ",
        "Address": "143 State Street",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11201",
        "Contact": "718-875-6607"
    },
    {
        "Mosque Name": " Masjid Ibrahim",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Kings Hwy ",
        "Address": "366 Kings Hwy",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11223",
        "Contact": "718-998-3581"
    },
    {
        "Mosque Name": "Daood Mosque",
        "Address": "6805 5th Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11220",
        "Contact": "718-875-6607"
    },
    {
        "Mosque Name": "Moslem Mosque",
        "Address": "104 Powers St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11211",
        "Contact": "718-783-1279"
    },
    {
        "Mosque Name": " Masjid Umm-Ul-Qura",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Dawah Center ",
        "Address": "632 Coney Island Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11218",
        "Contact": "718-871-3930"
    },
    {
        "Mosque Name": "Masjid Al-Taqwa",
        "Address": "1266 Bedford Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11216",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Imam Al-Albany",
        "Address": "463 3Rd Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11215",
        "Contact": "718-825-4790"
    },
    {
        "Mosque Name": "Masjid Al-Rahman",
        "Address": "333 86th St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11209",
        "Contact": "718-748-2540"
    },
    {
        "Mosque Name": " Islamic Center of Brooklyn",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Al-Iman Islamic Center ",
        "Address": "2015 64th St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11204",
        "Contact": "718-331-2843"
    },
    {
        "Mosque Name": "Brooklyn Broadway Jame Masjid And Islamic Center",
        "Address": "986 Gates Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11221",
        "Contact": "718-443-2133"
    },
    {
        "Mosque Name": "Brooklyn Islamic Center",
        "Address": "1013 Church Ave",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11218",
        "Contact": "718-469-4899"
    },
    {
        "Mosque Name": "Masjid Imam Ali",
        "Address": "433 Halsey St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11233-1014",
        "Contact": ""
    },
    {
        "Mosque Name": "Belal Masjid",
        "Address": "1404 Newkirk Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11226",
        "Contact": "718-859-0216"
    },
    {
        "Mosque Name": "Al-Masjid Al-Jamia",
        "Address": "1433 Bedford Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11216",
        "Contact": "718-230-3090"
    },
    {
        "Mosque Name": " Masjid Omar",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Brighton Beach ",
        "Address": "230 Neptune Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11235",
        "Contact": "718-648-0887"
    },
    {
        "Mosque Name": "Musjid Abu Hanifah",
        "Address": "2743 Pitkin Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11208",
        "Contact": "718-476-7968"
    },
    {
        "Mosque Name": "Mas Youth Center",
        "Address": "1933 Bath Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11214",
        "Contact": "718-232-5905"
    },
    {
        "Mosque Name": " Masjid Musab Bin Omari",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Bayridge ",
        "Address": "68-07 5th Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11220",
        "Contact": "718-680-0121"
    },
    {
        "Mosque Name": "Masjid Nur Al-Islam",
        "Address": "21 Church Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11218",
        "Contact": "718-435-3237"
    },
    {
        "Mosque Name": " Masjid Al-Rahman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Greenpoint Islamic Center ",
        "Address": "602 Leonard St.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11222",
        "Contact": "718-383-1602"
    },
    {
        "Mosque Name": "Al-Farouq Masjid",
        "Address": "552-4 Atlantic Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11217",
        "Contact": "718-488-8711"
    },
    {
        "Mosque Name": "Masjid Ikhwa",
        "Address": "1135 Eastern Pkwy",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11213",
        "Contact": ""
    },
    {
        "Mosque Name": "Universal Foundation",
        "Address": "2727 Coney Island Ave.",
        "City": "Brooklyn",
        "State": "NY",
        "Zip": "11235",
        "Contact": "718-332-5775"
    },
    {
        "Mosque Name": "Masjid Darus Salaam",
        "Address": "75 E. Parade Ave.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14211",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid At-Taqwa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Niagara Frontier ",
        "Address": "40 Parker St",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14214",
        "Contact": "716-836-9489"
    },
    {
        "Mosque Name": "Masjid Markaz",
        "Address": "115 Woltz Ave.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14212",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Zakariya",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Darul Uloom Al Madania ",
        "Address": "182 Sobieski St.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14212",
        "Contact": "716-897-4003"
    },
    {
        "Mosque Name": "Masjid Bilal",
        "Address": "343 Potomac Ave.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14213",
        "Contact": "716-725-0367"
    },
    {
        "Mosque Name": " Masjid Al-Eiman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Cultural Association of Western Ny ",
        "Address": "444 Connecticut St.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14213",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Nu Man",
        "Address": "1373 Fillmore Ave",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14211",
        "Contact": "716-892-1332"
    },
    {
        "Mosque Name": "Masjid Al-Ihsan",
        "Address": "66 Grant St.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14213",
        "Contact": "716-578-0735"
    },
    {
        "Mosque Name": "Jami Masjid",
        "Address": "1955 Genesee St.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14211",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Jum Ah",
        "Address": "215 Forest Ave.",
        "City": "Buffalo",
        "State": "NY",
        "Zip": "14213",
        "Contact": "716-381-0814"
    },
    {
        "Mosque Name": "Islamic Center of Northern New York",
        "Address": "25918 Route 342",
        "City": "Calcium",
        "State": "NY",
        "Zip": "13616",
        "Contact": "315-788-3050"
    },
    {
        "Mosque Name": "Al-Fatemah Islamic Center",
        "Address": "10 S. Family Dr.",
        "City": "Colonie",
        "State": "NY",
        "Zip": "12205",
        "Contact": "518-869-1492"
    },
    {
        "Mosque Name": "The Islamic Center",
        "Address": "101-03 43Rd St.",
        "City": "Corona",
        "State": "NY",
        "Zip": "11368",
        "Contact": "718-478-6653"
    },
    {
        "Mosque Name": "Islamic Center of Imam Zam",
        "Address": "126-12 34th Ave.",
        "City": "Corona",
        "State": "NY",
        "Zip": "11368",
        "Contact": "718-205-1616"
    },
    {
        "Mosque Name": "Masjid Nur-Id Deen",
        "Address": "105-01 Northern Blvd.",
        "City": "Corona",
        "State": "NY",
        "Zip": "11368",
        "Contact": "718-779-1060"
    },
    {
        "Mosque Name": " Masjid Abu Huraira",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Jackson Heights ",
        "Address": "78-04 31St Ave.",
        "City": "East Elmhurst",
        "State": "NY",
        "Zip": "11370",
        "Contact": "718-424-8502"
    },
    {
        "Mosque Name": "Baitul Hamd",
        "Address": "31-39 94th St.",
        "City": "East Elmhurst",
        "State": "NY",
        "Zip": "11369",
        "Contact": "718-639-3175"
    },
    {
        "Mosque Name": "Sultan-E-Murad",
        "Address": "23-38 81 St.",
        "City": "East Elmhurst",
        "State": "NY",
        "Zip": "11370",
        "Contact": "718-397-5579"
    },
    {
        "Mosque Name": "Long Island Muslim Society",
        "Address": "475 E. Meadow Ave.",
        "City": "East Meadow",
        "State": "NY",
        "Zip": "11554",
        "Contact": "516-357-9060"
    },
    {
        "Mosque Name": "Islamic Cultural Center of Bosnians in Syracuse",
        "Address": "6500 Fremont Ave.",
        "City": "East Syracuse",
        "State": "NY",
        "Zip": "13057",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Tawfiq",
        "Address": "4102 Forley St.",
        "City": "Elmhurst",
        "State": "NY",
        "Zip": "11373",
        "Contact": "718-779-1519"
    },
    {
        "Mosque Name": "As-Sabiqun Islamic Center",
        "Address": "518 Broadway St.",
        "City": "Elmira",
        "State": "NY",
        "Zip": "14904",
        "Contact": ""
    },
    {
        "Mosque Name": "Muhammadi Masjid Mosque",
        "Address": "681 Elmont Rd.",
        "City": "Elmont",
        "State": "NY",
        "Zip": "11003",
        "Contact": "516-285-3439"
    },
    {
        "Mosque Name": "Madrasa Zia-Ul-Quran",
        "Address": "115 School Rd.",
        "City": "Elmont",
        "State": "NY",
        "Zip": "11003",
        "Contact": "516-355-0423"
    },
    {
        "Mosque Name": "Masjid Jamal Uddin Afghani",
        "Address": "149 Cherry Ave",
        "City": "Flushing",
        "State": "NY",
        "Zip": "11355",
        "Contact": "718-463-8007"
    },
    {
        "Mosque Name": "Muslim Community Center",
        "Address": "137-58 Geranium",
        "City": "Flushing",
        "State": "NY",
        "Zip": "11355",
        "Contact": "718-460-3000"
    },
    {
        "Mosque Name": "Masjid Saaliheen",
        "Address": "7255 Kessena Blvd",
        "City": "Flushing",
        "State": "NY",
        "Zip": "11367",
        "Contact": "718-544-8218"
    },
    {
        "Mosque Name": "Masjid Hazrat I Abubakr",
        "Address": "34-36 Union St.",
        "City": "Flushing",
        "State": "NY",
        "Zip": "11354",
        "Contact": "718-461-4931"
    },
    {
        "Mosque Name": "Madani Masjid",
        "Address": "41-51 69th St.",
        "City": "Flushing",
        "State": "NY",
        "Zip": "11377",
        "Contact": "718-639-3498"
    },
    {
        "Mosque Name": " Masjid An-Nur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Niagara Frontier ",
        "Address": "745 Heim Rd.",
        "City": "Getzville",
        "State": "NY",
        "Zip": "14068",
        "Contact": ""
    },
    {
        "Mosque Name": "Albanian-American Islamic Center of Queens",
        "Address": "1861 Woodbine",
        "City": "Glendale",
        "State": "NY",
        "Zip": "11385",
        "Contact": "718-386-4720"
    },
    {
        "Mosque Name": "The Islamic Center",
        "Address": "62 Leonard St.",
        "City": "Green Point",
        "State": "NY",
        "Zip": "11222",
        "Contact": "718-383-6344"
    },
    {
        "Mosque Name": " Masjid At-Tasfiyah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Hempstead ",
        "Address": "93 Oak Ave.",
        "City": "Hempstead",
        "State": "NY",
        "Zip": "11550",
        "Contact": "516-214-4088"
    },
    {
        "Mosque Name": "Islamic Center of Five Town",
        "Address": "2 Newport Dr.",
        "City": "Hewlett",
        "State": "NY",
        "Zip": "11557",
        "Contact": ""
    },
    {
        "Mosque Name": "Baitu Uz Zafar",
        "Address": "188-15 Mclaughlin Ave.",
        "City": "Holliswood",
        "State": "NY",
        "Zip": "11423",
        "Contact": "718-479-3345"
    },
    {
        "Mosque Name": " Hudson Islamic Center",
        "Address": " Inc ",
        "City": "35 N Third St Basement",
        "State": "Hudson",
        "Zip": "NY",
        "Contact": "12534"
    },
    {
        "Mosque Name": "Masjid Al Noor",
        "Address": "1032 Park Ave.",
        "City": "Huntington",
        "State": "NY",
        "Zip": "11743",
        "Contact": "631-683-4185"
    },
    {
        "Mosque Name": "Masjid Sulayman (Suleymaniye Camii)",
        "Address": "459 Deer Park Ave.",
        "City": "Huntington Station",
        "State": "NY",
        "Zip": "11746",
        "Contact": "631-351-5428"
    },
    {
        "Mosque Name": "Jackson Heights Islamic Center",
        "Address": "71-20 Roosevelt Ave.",
        "City": "Jackson Heights",
        "State": "NY",
        "Zip": "11372",
        "Contact": "718-334-0498"
    },
    {
        "Mosque Name": "Darul Hidayah",
        "Address": "37-18 73Rd St.",
        "City": "Jackson Heights",
        "State": "NY",
        "Zip": "11372",
        "Contact": "718-779-8603"
    },
    {
        "Mosque Name": "Darul Furqan",
        "Address": "35-06 72Nd St. Box A",
        "City": "Jackson Heights",
        "State": "NY",
        "Zip": "11372",
        "Contact": "718-205-2930"
    },
    {
        "Mosque Name": "Darus Salam Masjid",
        "Address": "148-16 87Th Rd.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11435",
        "Contact": "718-558-6111"
    },
    {
        "Mosque Name": " Al-Markaz",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Circle of North America ",
        "Address": "166-26 89th Ave.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11432",
        "Contact": "718-658-1199"
    },
    {
        "Mosque Name": "Masjid Al-Abidin",
        "Address": "104-14 127th St.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11419",
        "Contact": "718-848-8759"
    },
    {
        "Mosque Name": "Al-Ansar Foundation",
        "Address": "161-34 Foch Blvd",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11434",
        "Contact": "718-528-6008"
    },
    {
        "Mosque Name": "As-Sidiq Muslim Oganization",
        "Address": "117-25 133 St.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11420",
        "Contact": "718-523-4167"
    },
    {
        "Mosque Name": " Masjid Al-Mamoor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Jamaica Muslim Center ",
        "Address": "85-37 168th St.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11432",
        "Contact": "718-739-3182"
    },
    {
        "Mosque Name": "Masjid Al-Hamdu-Li-Lilah",
        "Address": "121-03 Sulphin Blvd.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11436",
        "Contact": "718-322-9703"
    },
    {
        "Mosque Name": "World Islamic Mission",
        "Address": "144-03 S Rd.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11435",
        "Contact": "718-657-9635"
    },
    {
        "Mosque Name": "Imam Al-Khui Islamic Center",
        "Address": "89-89 Jamaica Van Wyck Expwy",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11435",
        "Contact": "718-523-5046"
    },
    {
        "Mosque Name": "Masjid Ar-Rahman",
        "Address": "9442 212th St.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11428",
        "Contact": "718-740-5025"
    },
    {
        "Mosque Name": "Darul Uloom",
        "Address": "8774 150th St.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11435",
        "Contact": "718-523-9195"
    },
    {
        "Mosque Name": "Tauhid Center for Islamic Development",
        "Address": "169-12 90th Ave.  No. B",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11432",
        "Contact": "718-262-8865"
    },
    {
        "Mosque Name": "Masjid Umar Ben Abdel Aziz",
        "Address": "88-29 161th St.",
        "City": "Jamaica",
        "State": "NY",
        "Zip": "11432",
        "Contact": "718-291-1190"
    },
    {
        "Mosque Name": "Jamestown Islamic Society",
        "Address": "1235 N. Main St.",
        "City": "Jamestown",
        "State": "NY",
        "Zip": "14701",
        "Contact": "716-488-9669"
    },
    {
        "Mosque Name": " Masjid Al-Nur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Organization of Southern Tier ",
        "Address": "106 Grand Ave.",
        "City": "Johnson City",
        "State": "NY",
        "Zip": "13790",
        "Contact": "607-729-7625"
    },
    {
        "Mosque Name": " Masjid Umar",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Assoc. of Ulster County ",
        "Address": "7 Downs St.",
        "City": "Kingston",
        "State": "NY",
        "Zip": "12401",
        "Contact": "845-481-0787"
    },
    {
        "Mosque Name": " Masjid Alhuda",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Lackawanna Islamic Community ",
        "Address": "154 Wilkesbarre Ave",
        "City": "Lackawanna",
        "State": "NY",
        "Zip": "14218",
        "Contact": "716-825-9490"
    },
    {
        "Mosque Name": "Masjidu Ahlissunnah Islamic Information Ctr",
        "Address": "35 Aster Rd.",
        "City": "Liberty",
        "State": "NY",
        "Zip": "12754",
        "Contact": "845-417-7457"
    },
    {
        "Mosque Name": " Masjid Al-Hikmah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Indonesian Muslim Community ",
        "Address": "48-01 31St St.",
        "City": "Long Island City",
        "State": "NY",
        "Zip": "11101",
        "Contact": "718-721-8881"
    },
    {
        "Mosque Name": "Islamic Center of Melville",
        "Address": "118 Old East Neck Rd.",
        "City": "Melville",
        "State": "NY",
        "Zip": "11747",
        "Contact": "631-249-3298"
    },
    {
        "Mosque Name": "Mid-Hudson Dawah Center",
        "Address": "256 E. Main St.",
        "City": "Middletown",
        "State": "NY",
        "Zip": "10940",
        "Contact": "845-346-0000"
    },
    {
        "Mosque Name": "Hudson Valley Islamic Community Center",
        "Address": "3680 Lexington Ave.",
        "City": "Mohegan Lake",
        "State": "NY",
        "Zip": "10547",
        "Contact": "914-528-1626"
    },
    {
        "Mosque Name": "Islamic Center of Monticello",
        "Address": "33 Cottage St.",
        "City": "Monticello",
        "State": "NY",
        "Zip": "12701",
        "Contact": "845-794-3480"
    },
    {
        "Mosque Name": " Osmaniye Camii",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â United American Muslim Association ",
        "Address": "63 Montauk Hwy",
        "City": "Moriches",
        "State": "NY",
        "Zip": "11955",
        "Contact": "631-878-1322"
    },
    {
        "Mosque Name": "Islamic Society of Westchester In Rockland",
        "Address": "22 Brookfield Rd",
        "City": "Mount Vernon",
        "State": "NY",
        "Zip": "10552",
        "Contact": "914-668-8786"
    },
    {
        "Mosque Name": "Masjid Yusuf Shah",
        "Address": "10 S. 2Nd Ave.",
        "City": "Mt. Vernon",
        "State": "NY",
        "Zip": "10552",
        "Contact": "914-699-8677"
    },
    {
        "Mosque Name": "Middletown Islamic Center",
        "Address": "169 Ryerson Rd.",
        "City": "New Hampton",
        "State": "NY",
        "Zip": "10958",
        "Contact": "845-374-2190"
    },
    {
        "Mosque Name": "Hillside Islamic Center",
        "Address": "300 Hillside Ave.",
        "City": "New Hyde Park",
        "State": "NY",
        "Zip": "11040",
        "Contact": "917-945-6044"
    },
    {
        "Mosque Name": "Masjid Manhattan",
        "Address": "30 Cliff St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10038",
        "Contact": "212-766-1865"
    },
    {
        "Mosque Name": "Al-Safa Islamic Center",
        "Address": "172 Allen St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10002",
        "Contact": "212-253-1053"
    },
    {
        "Mosque Name": "Masjidus Sabur",
        "Address": "251 E. 119th St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10035",
        "Contact": "212-722-6202"
    },
    {
        "Mosque Name": "Masjid Al Farah",
        "Address": "254 W. Broadway",
        "City": "New York",
        "State": "NY",
        "Zip": "10013",
        "Contact": "212-334-5212"
    },
    {
        "Mosque Name": " Muslim Center of Manhattan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Education And Converts Center of America ",
        "Address": "4 W. 43Rd St. Suite 316",
        "City": "New York",
        "State": "NY",
        "Zip": "10036",
        "Contact": "212-354-4320"
    },
    {
        "Mosque Name": "Annur Islamic Center",
        "Address": "213 W. 111th St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10026",
        "Contact": "212-864-2110"
    },
    {
        "Mosque Name": "Masjid Ar-Rahman",
        "Address": "29 East 29th St",
        "City": "New York",
        "State": "NY",
        "Zip": "10016",
        "Contact": "212-937-0341"
    },
    {
        "Mosque Name": "Islamic Cultural Center of New York",
        "Address": "1711 3Rd Ave.",
        "City": "New York",
        "State": "NY",
        "Zip": "10029",
        "Contact": "212-722-5234"
    },
    {
        "Mosque Name": " Masjid Uthman Bin Affan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Mid Manhattan ",
        "Address": "154 E. 55th St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10022",
        "Contact": "212-888-7838"
    },
    {
        "Mosque Name": "Masjid Al-Rahman",
        "Address": "575 W. 175th St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10033",
        "Contact": "646-309-4084"
    },
    {
        "Mosque Name": " Madina Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Council of America ",
        "Address": "401 E. 11th St",
        "City": "New York",
        "State": "NY",
        "Zip": "10009",
        "Contact": "212-533-5060"
    },
    {
        "Mosque Name": "Harlem Islamic Cultural Center",
        "Address": "108 E. 128th St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10035",
        "Contact": "212-828-4422"
    },
    {
        "Mosque Name": "Masjid Assalam Walkhair",
        "Address": "527 Malcolm X Blvd",
        "City": "New York",
        "State": "NY",
        "Zip": "10037",
        "Contact": "212-690-0925"
    },
    {
        "Mosque Name": "Masjid Al-Aqsa",
        "Address": "2136 8th Ave.",
        "City": "New York",
        "State": "NY",
        "Zip": "10026",
        "Contact": "212-316-9803"
    },
    {
        "Mosque Name": "Mosque of Islamic Brotherhood",
        "Address": "130 W. 113th St.",
        "City": "New York",
        "State": "NY",
        "Zip": "10026",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Futa Islamic Center",
        "Address": "2595 Frederick Douglas Blvd",
        "City": "New York",
        "State": "NY",
        "Zip": "10030",
        "Contact": "646-597-1170"
    },
    {
        "Mosque Name": "Murid Islamic Community In America",
        "Address": "46 Edgecombe Ave.",
        "City": "New York",
        "State": "NY",
        "Zip": "10030",
        "Contact": "212-234-0130"
    },
    {
        "Mosque Name": " Islamic Center of New York University",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Students Assoc Nyu ",
        "Address": "371 Avenue Of The Americas  Basement St. Joseph Ch",
        "City": "New York",
        "State": "NY",
        "Zip": "10014",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center",
        "Address": "1 Riverside Dr.",
        "City": "New York",
        "State": "NY",
        "Zip": "10029",
        "Contact": "212-787-6338"
    },
    {
        "Mosque Name": "Harlem Islamic Cultural Center",
        "Address": "552 Broadway Suite 6N",
        "City": "New York",
        "State": "NY",
        "Zip": "10012",
        "Contact": "646-591-4042"
    },
    {
        "Mosque Name": "Masjid Malcolm Shabazz",
        "Address": "102 West 116th St",
        "City": "New York",
        "State": "NY",
        "Zip": "10026",
        "Contact": "212-662-2200"
    },
    {
        "Mosque Name": " Masjid Al-Ikhlas",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Learning Center of Orange County ",
        "Address": "25 Washington Terrace",
        "City": "Newburgh",
        "State": "NY",
        "Zip": "12550",
        "Contact": "845-561-5610"
    },
    {
        "Mosque Name": "Islamic Center of Niagara Falls",
        "Address": "1801 Pierce Ave.",
        "City": "Niagara Falls",
        "State": "NY",
        "Zip": "14301",
        "Contact": "716-285-9162"
    },
    {
        "Mosque Name": " Masjid Jameul Uloom",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mid Westchester Muslim Community Center ",
        "Address": "73 Croton Ave.",
        "City": "Ossining",
        "State": "NY",
        "Zip": "10562",
        "Contact": ""
    },
    {
        "Mosque Name": "Jama Masjid",
        "Address": "94-17 102 St.",
        "City": "Ozone Park",
        "State": "NY",
        "Zip": "11416",
        "Contact": "718-441-5062"
    },
    {
        "Mosque Name": "Masjid Tawheed",
        "Address": "1000 Main St.",
        "City": "Peekskill",
        "State": "NY",
        "Zip": "10566",
        "Contact": "914-734-8143"
    },
    {
        "Mosque Name": "Islamic Center of Plattsburgh",
        "Address": "37 Boynton",
        "City": "Plattsburgh",
        "State": "NY",
        "Zip": "12901",
        "Contact": "513-563-5911"
    },
    {
        "Mosque Name": "Mevlana Mosque (Camii)",
        "Address": "366 Terryville Rd.",
        "City": "Port Jefferson Station",
        "State": "NY",
        "Zip": "11776",
        "Contact": "631-403-4975"
    },
    {
        "Mosque Name": "Masjidul Mutkabbir  Inc.",
        "Address": "462 Main St.",
        "City": "Poughkeepsie",
        "State": "NY",
        "Zip": "12601",
        "Contact": "914-471-4559"
    },
    {
        "Mosque Name": "Masjid Al Hera",
        "Address": "125-05 Jamaica Ave.",
        "City": "Richmond Hill",
        "State": "NY",
        "Zip": "11418",
        "Contact": "718-850-3575"
    },
    {
        "Mosque Name": " Masjid Touheed",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Saut-Ul-Haq Center ",
        "Address": "124-07 Jamaica Ave.",
        "City": "Richmond Hill",
        "State": "NY",
        "Zip": "11418",
        "Contact": "718-805-1221"
    },
    {
        "Mosque Name": "Islamic Center of Rochester",
        "Address": "727 Westfall",
        "City": "Rochester",
        "State": "NY",
        "Zip": "14620",
        "Contact": "585-442-0117"
    },
    {
        "Mosque Name": "Masjid As-Sunnah",
        "Address": "490 Goodman St. N",
        "City": "Rochester",
        "State": "NY",
        "Zip": "14609",
        "Contact": "585-262-4740"
    },
    {
        "Mosque Name": " Hamidye Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Cultural Center ",
        "Address": "853 Culver Rd",
        "City": "Rochester",
        "State": "NY",
        "Zip": "14609",
        "Contact": "585-482-3657"
    },
    {
        "Mosque Name": "Turkish Society of Rochester",
        "Address": "677 Beahan Rd.",
        "City": "Rochester",
        "State": "NY",
        "Zip": "14624",
        "Contact": "585-266-1980"
    },
    {
        "Mosque Name": "Masjid Al-Rahman",
        "Address": "300 Bay St.",
        "City": "Rochester",
        "State": "NY",
        "Zip": "14605",
        "Contact": ""
    },
    {
        "Mosque Name": "Ahlul Bayt Society of Rochester",
        "Address": "151 Central Park",
        "City": "Rochester",
        "State": "NY",
        "Zip": "14605",
        "Contact": "585-503-9541"
    },
    {
        "Mosque Name": "Masjid Muqbil Bin Haadee",
        "Address": "297 Lyell Ave.",
        "City": "Rochester",
        "State": "NY",
        "Zip": "14608",
        "Contact": "585-530-7034"
    },
    {
        "Mosque Name": " Ronkonkoma Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Suffolk Islamic Center ",
        "Address": "240 Ronkonkoma Ave.",
        "City": "Ronkonkoma",
        "State": "NY",
        "Zip": "11779",
        "Contact": "631-645-4997"
    },
    {
        "Mosque Name": "Ta Ha Masjid",
        "Address": "195 Nassau Rd.",
        "City": "Roosevelt",
        "State": "NY",
        "Zip": "11575",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid As-Sunnah",
        "Address": "1859 Albany St.",
        "City": "Schenectady",
        "State": "NY",
        "Zip": "12304",
        "Contact": "518-374-3535"
    },
    {
        "Mosque Name": "Islamic Center of Capitol District",
        "Address": "21 Lansing Rd",
        "City": "Schenectady",
        "State": "NY",
        "Zip": "12304",
        "Contact": "518-370-2664"
    },
    {
        "Mosque Name": " Masjid Nabawi",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Afghan Islamic Center ",
        "Address": "89 N. Brandywine Ave.",
        "City": "Schenectady",
        "State": "NY",
        "Zip": "12307",
        "Contact": "518-374-2364"
    },
    {
        "Mosque Name": "Darul Taqwa",
        "Address": "1214 State St.",
        "City": "Schenectady",
        "State": "NY",
        "Zip": "12304",
        "Contact": "518-374-1839"
    },
    {
        "Mosque Name": "Islamic Assoc. of Long Island",
        "Address": "10 Park Hill Dr.",
        "City": "Selden",
        "State": "NY",
        "Zip": "11784",
        "Contact": "671-732-1235"
    },
    {
        "Mosque Name": "Masjid Umar Bin Khattaab",
        "Address": "503 William Floyd Pkwy",
        "City": "Shirley",
        "State": "NY",
        "Zip": "11967",
        "Contact": "631-772-5161"
    },
    {
        "Mosque Name": "Osmanli Naksibendi Sufi Center",
        "Address": "1663 Wheat Hill Rd.",
        "City": "Sidney Center",
        "State": "NY",
        "Zip": "13839",
        "Contact": "607-369-4816"
    },
    {
        "Mosque Name": "Masjid Ahlul Quran Wa Sunnah",
        "Address": "109-06 Van Wyck Expressway",
        "City": "South Ozone Park",
        "State": "NY",
        "Zip": "11420",
        "Contact": "718-529-4092"
    },
    {
        "Mosque Name": "Masjid Abdul Muhaymin",
        "Address": "142-64 Rockaway Blvd",
        "City": "South Ozone Park",
        "State": "NY",
        "Zip": "11436",
        "Contact": "718-738-4900"
    },
    {
        "Mosque Name": "Central Islamic Center of Ny",
        "Address": "121-22 103Rd Ave.",
        "City": "South Richmond Hill",
        "State": "NY",
        "Zip": "11419",
        "Contact": "718-848-2706"
    },
    {
        "Mosque Name": "Jerrahi Mosque",
        "Address": "884 Chestnut Ridge Rd.",
        "City": "Spring Valley",
        "State": "NY",
        "Zip": "10977",
        "Contact": "845-352-5518"
    },
    {
        "Mosque Name": "Islamic Masjid of Staten Island",
        "Address": "117 Van Duzer St.",
        "City": "Staten Island",
        "State": "NY",
        "Zip": "10301",
        "Contact": "718-273-3681"
    },
    {
        "Mosque Name": "Masjid Al-Ihsan",
        "Address": "406 St. Mark Place",
        "City": "Staten Island",
        "State": "NY",
        "Zip": "10301",
        "Contact": "718-556-2250"
    },
    {
        "Mosque Name": " Masjid Al Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Masjid of Staten Island ",
        "Address": "104 Rhine Ave.",
        "City": "Staten Island",
        "State": "NY",
        "Zip": "10314",
        "Contact": "718-442-6674"
    },
    {
        "Mosque Name": "Islamic Cultural Center",
        "Address": "307 Victory Blvd",
        "City": "Staten Island",
        "State": "NY",
        "Zip": "10301",
        "Contact": "718-816-9865"
    },
    {
        "Mosque Name": "Albanian Islamic Cultural Center",
        "Address": "307 Victory Blvd",
        "City": "Staten Island",
        "State": "NY",
        "Zip": "10301",
        "Contact": "718-816-9865"
    },
    {
        "Mosque Name": "Masjid Rahmatillah",
        "Address": "36 Hardy St.",
        "City": "Staten Island",
        "State": "NY",
        "Zip": "10304",
        "Contact": "718-727-7412"
    },
    {
        "Mosque Name": "Masjid Darul Ehsan",
        "Address": "6 Suffern Place",
        "City": "Suffern",
        "State": "NY",
        "Zip": "10901",
        "Contact": "845-369-7330"
    },
    {
        "Mosque Name": "Al-Rahman Jame Masjid",
        "Address": "48-04 Skillman Ave.",
        "City": "Sunnyside",
        "State": "NY",
        "Zip": "11104",
        "Contact": "718-205-4009"
    },
    {
        "Mosque Name": "Turkish Islamic Cultural Center",
        "Address": "45-06 Skillman Ave.",
        "City": "Sunnyside",
        "State": "NY",
        "Zip": "11104",
        "Contact": "718-433-4298"
    },
    {
        "Mosque Name": "Al-Osman And Hamid Jame Masjid",
        "Address": "39-17 Greenpoint Ave.",
        "City": "Sunnyside",
        "State": "NY",
        "Zip": "11104",
        "Contact": "718-361-7682"
    },
    {
        "Mosque Name": "Masjid Abdullah Muslim",
        "Address": "127 W. Brighton Ave.",
        "City": "Syracuse",
        "State": "NY",
        "Zip": "13205",
        "Contact": "315-478-3556"
    },
    {
        "Mosque Name": " Al Huda Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim American Society ",
        "Address": "4524 Mcdonald Rd.",
        "City": "Syracuse",
        "State": "NY",
        "Zip": "13215",
        "Contact": "315-494-2081"
    },
    {
        "Mosque Name": "Islamic Society of Central New York",
        "Address": "925 Comstock Ave",
        "City": "Syracuse",
        "State": "NY",
        "Zip": "13210",
        "Contact": "315-471-3645"
    },
    {
        "Mosque Name": "Upper Westchester Muslim Society",
        "Address": "401 Claremont Ave.",
        "City": "Thornwood",
        "State": "NY",
        "Zip": "10594",
        "Contact": "914-747-2955"
    },
    {
        "Mosque Name": " Masjid Al-Hidaya",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community of Troy ",
        "Address": "2339 15th St.",
        "City": "Troy",
        "State": "NY",
        "Zip": "12108",
        "Contact": "518-274-0137"
    },
    {
        "Mosque Name": "Bosnian Islamic Association of Utica",
        "Address": "306 Court St.",
        "City": "Utica",
        "State": "NY",
        "Zip": "13502",
        "Contact": "315-765-0223"
    },
    {
        "Mosque Name": " Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Assoc Mohawk Valley ",
        "Address": "1631 Kemble St.",
        "City": "Utica",
        "State": "NY",
        "Zip": "13501",
        "Contact": "518-274-0137"
    },
    {
        "Mosque Name": "Islamic Center of Rockland",
        "Address": "481 Mountainview Ave.",
        "City": "Valley Cottage",
        "State": "NY",
        "Zip": "10989",
        "Contact": "914-425-2099"
    },
    {
        "Mosque Name": " Masjid Hamza",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of South Shore ",
        "Address": "202 Stuart Ave.",
        "City": "Valley Stream",
        "State": "NY",
        "Zip": "11580",
        "Contact": "516-285-8585"
    },
    {
        "Mosque Name": " Masjid Al Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mid Hudson Islamic Association ",
        "Address": "125 All Angels Rd",
        "City": "Wappinger Falls",
        "State": "NY",
        "Zip": "12590",
        "Contact": "914-297-0882"
    },
    {
        "Mosque Name": "Islamic Center of Long Island",
        "Address": "835 Brush Hollow Rd",
        "City": "Westbury",
        "State": "NY",
        "Zip": "11590",
        "Contact": "516-333-3495"
    },
    {
        "Mosque Name": "Tawheed Institute",
        "Address": "399 Knollwood Rd. Suite 217",
        "City": "White Plains",
        "State": "NY",
        "Zip": "10603",
        "Contact": "914-390-0003"
    },
    {
        "Mosque Name": "Woodhaven Jame Masjid",
        "Address": "86-50 78th St.",
        "City": "Woodhaven",
        "State": "NY",
        "Zip": "11421",
        "Contact": ""
    },
    {
        "Mosque Name": " Imam Ali Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Institute ",
        "Address": "55-11 Queens Blvd",
        "City": "Woodside",
        "State": "NY",
        "Zip": "11377",
        "Contact": "718-651-5888"
    },
    {
        "Mosque Name": "Woodside Baitul Jannah Masjid",
        "Address": "62-01 39th Ave.",
        "City": "Woodside",
        "State": "NY",
        "Zip": "11377",
        "Contact": "718-424-0511"
    },
    {
        "Mosque Name": "Shia Ithna Asheri Jamaat of New York",
        "Address": "48-67 58th St.",
        "City": "Woodside",
        "State": "NY",
        "Zip": "11377",
        "Contact": ""
    },
    {
        "Mosque Name": "Shia Ithna Ashari Jamaat of Ny",
        "Address": "48-67 58th St.",
        "City": "Woodside",
        "State": "NY",
        "Zip": "11373",
        "Contact": "718-507-7680"
    },
    {
        "Mosque Name": "Islamic Center of Maple Hills",
        "Address": "54 Maple St. No.Gf3",
        "City": "Woodside",
        "State": "NY",
        "Zip": "10701",
        "Contact": "914-278-8412"
    },
    {
        "Mosque Name": "Sunnyside Woodside Jame Masjid",
        "Address": "45-18 48th Ave.",
        "City": "Woodside",
        "State": "NY",
        "Zip": "11377",
        "Contact": "718-482-7364"
    },
    {
        "Mosque Name": "Masjid Al-Fatima",
        "Address": "57-16 37th Ave.",
        "City": "Woodside",
        "State": "NY",
        "Zip": "11377",
        "Contact": "718-803-3747"
    },
    {
        "Mosque Name": "Jamia Masjid Hanafia & Muslim",
        "Address": "32-13 57th St.",
        "City": "Woodside",
        "State": "NY",
        "Zip": "11377",
        "Contact": "718-545-6200"
    },
    {
        "Mosque Name": "As-Siraatul Mustaqeem Islamic Center",
        "Address": "1305 Straight Path",
        "City": "Wyandanch",
        "State": "NY",
        "Zip": "11798",
        "Contact": "516-643-8175"
    },
    {
        "Mosque Name": "Project Allahu Akbar Community Ctr.",
        "Address": "133 N. 22Nd St.",
        "City": "Wyandanch",
        "State": "NY",
        "Zip": "11798",
        "Contact": "516-253-3259"
    },
    {
        "Mosque Name": "Islamic Center of Yonkers",
        "Address": "100 Riverdale Ave.",
        "City": "Yonkers",
        "State": "NY",
        "Zip": "10701",
        "Contact": "914-964-5659"
    },
    {
        "Mosque Name": "Andalusia Islamic Center",
        "Address": "380 Walnut St.",
        "City": "Yonkers",
        "State": "NY",
        "Zip": "10701",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Apex",
        "Address": "733 Center St.",
        "City": "Apex",
        "State": "NC",
        "Zip": "27502",
        "Contact": "919-362-0704"
    },
    {
        "Mosque Name": "Asheboro Masjid",
        "Address": "203 Brittian St.",
        "City": "Asheboro",
        "State": "NC",
        "Zip": "27203",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Asheville",
        "Address": "941 Old Fairview Rd.",
        "City": "Asheville",
        "State": "NC",
        "Zip": "28803",
        "Contact": "828-277-5505"
    },
    {
        "Mosque Name": " Cary Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Cary ",
        "Address": "1076 W. Chatham St.",
        "City": "Cary",
        "State": "NC",
        "Zip": "27511",
        "Contact": "919-460-6496"
    },
    {
        "Mosque Name": "Chapel Hill Islamic Society",
        "Address": "103 Stateside Dr.",
        "City": "Chapel Hill",
        "State": "NC",
        "Zip": "27514",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al-Tawbah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isalmic Center of Charlotte ",
        "Address": "1700 Progress Lane",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28205",
        "Contact": "704-537-9399"
    },
    {
        "Mosque Name": "Masjid Ar-Razzaq",
        "Address": "2735 Rayston Rd.",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28208",
        "Contact": "704-393-7584"
    },
    {
        "Mosque Name": " Masjid Al-Mustafa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Charlotte ",
        "Address": "7025 The Plaza",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28215",
        "Contact": "704-536-2016"
    },
    {
        "Mosque Name": " Masjid An-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mas Community Center ",
        "Address": "4301 Shamrock Dr.",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28215",
        "Contact": "704-537-9007"
    },
    {
        "Mosque Name": "Masjid Ash-Shaheed",
        "Address": "400 W. Sugar Creek Rd.",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28213",
        "Contact": "704-598-4274"
    },
    {
        "Mosque Name": "Musalla Al-Quran Wa Sunnah",
        "Address": "1111 Beatties Ford Rd.",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28216",
        "Contact": "704-331-0908"
    },
    {
        "Mosque Name": "Islamic Community of Bosniaks In Nc",
        "Address": "7021 Robinson Church Rd.",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28215",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ali Shah",
        "Address": "2117 Beatties Ford Rd",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28216",
        "Contact": "704-377-9010"
    },
    {
        "Mosque Name": "Medina Mussala",
        "Address": "914 Tom Hunter Rd.",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28213",
        "Contact": "704-287-4320"
    },
    {
        "Mosque Name": "Islamic Education Center (Masjid Al Ansar)",
        "Address": "6630 E. Wt Harris Blvd Suite D-E",
        "City": "Charlotte",
        "State": "NC",
        "Zip": "28215",
        "Contact": "704-535-1685"
    },
    {
        "Mosque Name": "Annoor Islamic Center",
        "Address": "1435 Lake Cottage Rd.",
        "City": "Clemmons",
        "State": "NC",
        "Zip": "27012",
        "Contact": "336-766-0824"
    },
    {
        "Mosque Name": "Masjid Tawheed Was Sunnah",
        "Address": "3714 S. Alston Ave.",
        "City": "Durham",
        "State": "NC",
        "Zip": "27713",
        "Contact": "919-767-1044"
    },
    {
        "Mosque Name": "Ar-Razzaq Islamic Center",
        "Address": "1009 W Chapel Hill St",
        "City": "Durham",
        "State": "NC",
        "Zip": "27702",
        "Contact": "919-493-1230"
    },
    {
        "Mosque Name": "North Durham Islamic Association",
        "Address": "2609 W. Carver St.",
        "City": "Durham",
        "State": "NC",
        "Zip": "27705",
        "Contact": "919-943-5226"
    },
    {
        "Mosque Name": "Jamaat Ibad Ar-Rahman  Inc",
        "Address": "3034 Fayetville St",
        "City": "Durham",
        "State": "NC",
        "Zip": "27702",
        "Contact": "919-683-5593"
    },
    {
        "Mosque Name": "W.D. Mohammed Islamic Center",
        "Address": "1308 Fayetteville St.",
        "City": "Durham",
        "State": "NC",
        "Zip": "27707",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ahlu-Sunnah",
        "Address": "420 Preston Ave.",
        "City": "Fayetteville",
        "State": "NC",
        "Zip": "28301",
        "Contact": "910-488-3604"
    },
    {
        "Mosque Name": "Masjid Omar Ibn Sayyid",
        "Address": "1831 Murchison Rd.",
        "City": "Fayetteville",
        "State": "NC",
        "Zip": "28303",
        "Contact": "910-488-7322"
    },
    {
        "Mosque Name": " Masjid Al-Islam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Gastonia ",
        "Address": "4020 Titman Rd.",
        "City": "Gastonia",
        "State": "NC",
        "Zip": "28056",
        "Contact": "704-824-7994"
    },
    {
        "Mosque Name": " Masjid Al-Saliheen",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Wayne County Islamic Society ",
        "Address": "522 S. Slocumb St.",
        "City": "Goldsboro",
        "State": "NC",
        "Zip": "27531",
        "Contact": "919-736-2874"
    },
    {
        "Mosque Name": " Masjid Ahl Al-Sunnah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of The Sunnah ",
        "Address": "2911 E. Market St.",
        "City": "Greensboro",
        "State": "NC",
        "Zip": "27402",
        "Contact": "336-373-1854"
    },
    {
        "Mosque Name": "Islamic Center of Greensboro",
        "Address": "2023 16th St.",
        "City": "Greensboro",
        "State": "NC",
        "Zip": "27405",
        "Contact": "336-375-4908"
    },
    {
        "Mosque Name": "Al-Ummil Ummat Islamic Center",
        "Address": "2109 Martin Luther King Dr.",
        "City": "Greensboro",
        "State": "NC",
        "Zip": "27406",
        "Contact": "336-574-3689"
    },
    {
        "Mosque Name": " Masjid Elquds",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Triad ",
        "Address": "4390 Mary St.",
        "City": "Greensboro",
        "State": "NC",
        "Zip": "27409",
        "Contact": "336-856-2870"
    },
    {
        "Mosque Name": " Al-Masjid Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association E North Carolina ",
        "Address": "1303 S. Evans",
        "City": "Greenville",
        "State": "NC",
        "Zip": "27858",
        "Contact": "252-758-4411"
    },
    {
        "Mosque Name": "Al-Nur Cultural Center",
        "Address": "1152 Briley Rd",
        "City": "Greenville",
        "State": "NC",
        "Zip": "27834",
        "Contact": "252-945-1682"
    },
    {
        "Mosque Name": "Islamic Center of the Carolinas",
        "Address": "819 Circlewood Dr.",
        "City": "Hamlet",
        "State": "NC",
        "Zip": "28345",
        "Contact": "910-205-3010"
    },
    {
        "Mosque Name": "Community Mosque of High Point",
        "Address": "222 Spring Hill Church Rd.",
        "City": "High Point",
        "State": "NC",
        "Zip": "27262",
        "Contact": "336-886-8341"
    },
    {
        "Mosque Name": "Islamic Community of Jacksonville",
        "Address": "206 White Oak Blvd",
        "City": "Jacksonville",
        "State": "NC",
        "Zip": "28540",
        "Contact": "910-938-4598"
    },
    {
        "Mosque Name": "Islamic Cultural Center",
        "Address": "301 E. North St.",
        "City": "Kinston",
        "State": "NC",
        "Zip": "28501",
        "Contact": "252-526-0413"
    },
    {
        "Mosque Name": "Islamic Center of Morganton",
        "Address": "203 Bethel St.",
        "City": "Morganton",
        "State": "NC",
        "Zip": "28655",
        "Contact": "828-439-9487"
    },
    {
        "Mosque Name": " Islamic Center of Morrisville",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Raleigh ",
        "Address": "126 Morrisville Square Way",
        "City": "Morrisville",
        "State": "NC",
        "Zip": "27560",
        "Contact": "919-834-9572"
    },
    {
        "Mosque Name": "Masjid Al-Madina",
        "Address": "196 Pittman Grove Church Rd.",
        "City": "Raeford",
        "State": "NC",
        "Zip": "28376",
        "Contact": "910-875-5200"
    },
    {
        "Mosque Name": "Jama At At-Taqwa",
        "Address": "Isc Bldg. 118 E. South St.",
        "City": "Raleigh",
        "State": "NC",
        "Zip": "27601",
        "Contact": ""
    },
    {
        "Mosque Name": " Islamic Center of Raleigh",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Raleigh ",
        "Address": "808 Atwater St.",
        "City": "Raleigh",
        "State": "NC",
        "Zip": "27607",
        "Contact": "919-834-9572"
    },
    {
        "Mosque Name": "North Raleigh Masjid",
        "Address": "8480 Garvey Dr.",
        "City": "Raleigh",
        "State": "NC",
        "Zip": "27616",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Salam Islamic Center",
        "Address": "110 Lord Anson Dr.",
        "City": "Raleigh",
        "State": "NC",
        "Zip": "27601",
        "Contact": "919-231-1547"
    },
    {
        "Mosque Name": "Islamic Center of Piedmont",
        "Address": "2335 Nc-87",
        "City": "Reidsville",
        "State": "NC",
        "Zip": "27320",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al Huda",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Rocky Mount ",
        "Address": "1511-13 Memory Lane",
        "City": "Rocky Mount",
        "State": "NC",
        "Zip": "27801",
        "Contact": "252-985-1195"
    },
    {
        "Mosque Name": "Masjid Al-Muminun",
        "Address": "1720 Wilson Lee Blvd.",
        "City": "Stateville",
        "State": "NC",
        "Zip": "28677",
        "Contact": "704-878-6043"
    },
    {
        "Mosque Name": "Islamic Center of Wilmington",
        "Address": "6336 Myrtle Grove Rd.",
        "City": "Wilmington",
        "State": "NC",
        "Zip": "28409",
        "Contact": "910-793-9333"
    },
    {
        "Mosque Name": "Tawheed Islamic Center",
        "Address": "721 Castle St.",
        "City": "Wilmington",
        "State": "NC",
        "Zip": "28401",
        "Contact": "910-343-8034"
    },
    {
        "Mosque Name": "The Islamic Learning Center",
        "Address": "2117 Wrightsville Ave.",
        "City": "Wilmington",
        "State": "NC",
        "Zip": "28403",
        "Contact": "910-343-1919"
    },
    {
        "Mosque Name": "Community Mosque of Winston-Salem",
        "Address": "1419 Waughtown St.",
        "City": "Winston-Salem",
        "State": "NC",
        "Zip": "27107",
        "Contact": "336-650-1095"
    },
    {
        "Mosque Name": "Masjid Ul Muminun",
        "Address": "1500 Harriet Tubman Dr.",
        "City": "Winston-Salem",
        "State": "NC",
        "Zip": "27105",
        "Contact": "336-724-0258"
    },
    {
        "Mosque Name": "Islamic Society of North Dakota",
        "Address": "542 Cottonwood Loop",
        "City": "Bismarck",
        "State": "ND",
        "Zip": "58504",
        "Contact": "701-258-0712"
    },
    {
        "Mosque Name": "Islamic Society of Fargo-Moorehead",
        "Address": "2102 6th Ave. S",
        "City": "Fargo",
        "State": "ND",
        "Zip": "58103",
        "Contact": "701-234-9607"
    },
    {
        "Mosque Name": "Islamic Society of Minot",
        "Address": "504 Central Ave. E",
        "City": "Minot",
        "State": "ND",
        "Zip": "58701",
        "Contact": "720-989-8328"
    },
    {
        "Mosque Name": "Akron Masjid",
        "Address": "1147 Old South Main",
        "City": "Akron",
        "State": "OH",
        "Zip": "44301",
        "Contact": "330-374-9799"
    },
    {
        "Mosque Name": "Islamic Society of Ashland",
        "Address": "1130 E. Main St. Suite 154",
        "City": "Ashland",
        "State": "OH",
        "Zip": "44805",
        "Contact": "614-216-1632"
    },
    {
        "Mosque Name": " Islamic Center of Athens",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Student Assoc Ohio U ",
        "Address": "13 Steward St.",
        "City": "Athens",
        "State": "OH",
        "Zip": "45701",
        "Contact": "740-594-3890"
    },
    {
        "Mosque Name": "The Unity Center",
        "Address": "10909 Chippewa Rd.",
        "City": "Brecksville",
        "State": "OH",
        "Zip": "44114",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Rahman",
        "Address": "1300 7th St. Nw",
        "City": "Canton",
        "State": "OH",
        "Zip": "44703",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Northeast Ohio",
        "Address": "6976 Promway Ave. Nw",
        "City": "Canton",
        "State": "OH",
        "Zip": "44720",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Malik",
        "Address": "776 E. Mcmillan",
        "City": "Cincinnati",
        "State": "OH",
        "Zip": "45206",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Ashab",
        "Address": "1233 Vine St.",
        "City": "Cincinnati",
        "State": "OH",
        "Zip": "45202",
        "Contact": "513-628-6185"
    },
    {
        "Mosque Name": "Cincinnati Islamic Center",
        "Address": "2570 Gobel Ct.",
        "City": "Cincinnati",
        "State": "OH",
        "Zip": "45211",
        "Contact": "513-481-4372"
    },
    {
        "Mosque Name": "Islamic Association of Cincinnati",
        "Address": "3668 Clifton Ave",
        "City": "Cincinnati",
        "State": "OH",
        "Zip": "45220",
        "Contact": "513-221-4003"
    },
    {
        "Mosque Name": " Masjid Al-Mumin",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Revivalist Movement ",
        "Address": "2690 Martin Luther King Blvd",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44104",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Bilal",
        "Address": "7401 Euclid Avenue",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44103",
        "Contact": "216-391-8899"
    },
    {
        "Mosque Name": "First Cleveland Mosque",
        "Address": "3613 E.131 St.",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44120",
        "Contact": "216-283-9027"
    },
    {
        "Mosque Name": "Muhammad Rasul Allah Islamic Society",
        "Address": "9400 Detroit Ave",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44102",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Qiyamah Ul-Haqq",
        "Address": "1187 Hayden Ave. East",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44110",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Association of Cleveland East",
        "Address": "25900 Chardon Rd.",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44143",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ummat-Ul-Allah",
        "Address": "12304 St. Clair Ave.",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44110",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Nur",
        "Address": "1251 E 99th Street",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44108",
        "Contact": ""
    },
    {
        "Mosque Name": "Cleveland Muslim Community Center",
        "Address": "4600 Rocky River Rd.",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44135",
        "Contact": "216-676-9177"
    },
    {
        "Mosque Name": "Warith Deen Islamic Center",
        "Address": "7301 Superior Ave.",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44108",
        "Contact": "216-431-1992"
    },
    {
        "Mosque Name": "Masjid Uqbah",
        "Address": "2222 Stokes Blvd",
        "City": "Cleveland",
        "State": "OH",
        "Zip": "44106",
        "Contact": "216-791-8411"
    },
    {
        "Mosque Name": " Masjid Al-Islam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Center ",
        "Address": "1677 Oak Street",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43203",
        "Contact": "614-252-0338"
    },
    {
        "Mosque Name": " Omar Bin Al-Khattab Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Columbus ",
        "Address": "580 Riverview Dr",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43202",
        "Contact": "614-262-1310"
    },
    {
        "Mosque Name": "Masjid Al-Fath",
        "Address": "634 Garfield Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43205",
        "Contact": "614-515-1978"
    },
    {
        "Mosque Name": "Masjid As-Salaamah",
        "Address": "5255 Cleveland Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43231",
        "Contact": "614-776-3322"
    },
    {
        "Mosque Name": "Masjid An-Nas",
        "Address": "1331 1/2 E. Long St.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43203",
        "Contact": "614-252-7627"
    },
    {
        "Mosque Name": "Sheik Omar Foutiyou Masjid",
        "Address": "3569 Refugee Rd. E",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43232",
        "Contact": "614-575-1202"
    },
    {
        "Mosque Name": "Masjid Ibn Taymiya",
        "Address": "2334 Mock Rd.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43219",
        "Contact": "614-418-9137"
    },
    {
        "Mosque Name": "Masjid Al Rahma",
        "Address": "2215 Albert Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43224",
        "Contact": ""
    },
    {
        "Mosque Name": "Bilal Ibn Rabah Center",
        "Address": "40 W. Long St.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43215",
        "Contact": "614-354-1428"
    },
    {
        "Mosque Name": "Masjid Muqbil Islamic Center",
        "Address": "3350 Cleveland Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43224",
        "Contact": "614-962-3155"
    },
    {
        "Mosque Name": "Masjid As-Sahaba",
        "Address": "2535 Cleveland Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43211",
        "Contact": "614-262-8511"
    },
    {
        "Mosque Name": "Masjid Ummat Rassul",
        "Address": "2773 Cleveland Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43224",
        "Contact": "614-230-8525"
    },
    {
        "Mosque Name": "Masjid Abubakr Al Siddique",
        "Address": "3437 Sullivant Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43204",
        "Contact": "614-272-9994"
    },
    {
        "Mosque Name": " Al Huda Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Foundation of Central Ohio ",
        "Address": "1156 E. Cooke Rd.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43224",
        "Contact": "614-263-4326"
    },
    {
        "Mosque Name": "Masjid Isa Ibn Mariam",
        "Address": "1436 Indianola Ave.",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43201",
        "Contact": "614-554-7123"
    },
    {
        "Mosque Name": " Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Foundation of Central Ohio ",
        "Address": "1428 E. Broad St",
        "City": "Columbus",
        "State": "OH",
        "Zip": "43205",
        "Contact": "614-253-3251"
    },
    {
        "Mosque Name": "Islamic Society of Akron And Kent",
        "Address": "152 E Steels Corners Rd.",
        "City": "Cuyahoga Falls",
        "State": "OH",
        "Zip": "44223",
        "Contact": "330-922-9991"
    },
    {
        "Mosque Name": "Masjid At-Taqwa",
        "Address": "701 N. Broadway",
        "City": "Dayton",
        "State": "OH",
        "Zip": "45417",
        "Contact": "937-277-1805"
    },
    {
        "Mosque Name": "Masjid Salam",
        "Address": "3958 Salem Ave.",
        "City": "Dayton",
        "State": "OH",
        "Zip": "45406",
        "Contact": "937-277-6010"
    },
    {
        "Mosque Name": "Islamic Society of Greater Dayton",
        "Address": "26 Josie St",
        "City": "Dayton",
        "State": "OH",
        "Zip": "45403",
        "Contact": "937-228-1503"
    },
    {
        "Mosque Name": " Noor Islamic Cultural Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â American Islamic Waqf ",
        "Address": "5001 Wilcox Rd.",
        "City": "Dublin",
        "State": "OH",
        "Zip": "43016",
        "Contact": "614-527-7777"
    },
    {
        "Mosque Name": " Kent Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Akron And Kent ",
        "Address": "325 Crain Ave",
        "City": "Kent",
        "State": "OH",
        "Zip": "44240",
        "Contact": "330-678-4252"
    },
    {
        "Mosque Name": "Al-Muwahideen Society",
        "Address": "634 Catalpa Ave.",
        "City": "Lima",
        "State": "OH",
        "Zip": "45804",
        "Contact": "419-227-1327"
    },
    {
        "Mosque Name": "Islamic Society of Greater Lima",
        "Address": "400 S. Mumaugh (Bldg 10-Apt 4)",
        "City": "Lima",
        "State": "OH",
        "Zip": "45804",
        "Contact": "419-222-0057"
    },
    {
        "Mosque Name": " Masjid Al-Madinah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Lorain Islamic Association ",
        "Address": "1300 Reid Ave.",
        "City": "Lorain",
        "State": "OH",
        "Zip": "44052",
        "Contact": "440-244-1361"
    },
    {
        "Mosque Name": "Islamic Society of Mansfield",
        "Address": "110 North Mulberry St.",
        "City": "Mansfield",
        "State": "OH",
        "Zip": "44904",
        "Contact": "419-571-8596"
    },
    {
        "Mosque Name": " Islamic Center of Dayton",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Dayton Mercy Society ",
        "Address": "2277 Maue Rd.",
        "City": "Miamisburg",
        "State": "OH",
        "Zip": "45342",
        "Contact": "937-247-0350"
    },
    {
        "Mosque Name": "Ihsan Center",
        "Address": "6070 Branch Hill Guinea Pike",
        "City": "Milford",
        "State": "OH",
        "Zip": "45150",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Cleveland",
        "Address": "6055 W. 130th St.",
        "City": "Parma",
        "State": "OH",
        "Zip": "44130",
        "Contact": "216-362-0786"
    },
    {
        "Mosque Name": "Islamic Center of Greater Toledo",
        "Address": "25877 Scheider Rd",
        "City": "Perrysburg",
        "State": "OH",
        "Zip": "43551",
        "Contact": "419-874-3509"
    },
    {
        "Mosque Name": "Masjid An Nur",
        "Address": "743 W. Liberty St.",
        "City": "Springfield",
        "State": "OH",
        "Zip": "45506",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al-Madeenah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Miami Valley Islamic Association ",
        "Address": "1800 S. Burnett Rd.",
        "City": "Springfield",
        "State": "OH",
        "Zip": "45505",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Saad Foundation",
        "Address": "5225 Alexis Rd.",
        "City": "Sylvania",
        "State": "OH",
        "Zip": "43560",
        "Contact": "419-882-3339"
    },
    {
        "Mosque Name": "Masjid of Al-Islam",
        "Address": "729 E. Bancroft St.",
        "City": "Toledo",
        "State": "OH",
        "Zip": "43608",
        "Contact": "419-241-9522"
    },
    {
        "Mosque Name": "Toledo Muslim Community Center",
        "Address": "5045 W. Sylvania Rd.",
        "City": "Toledo",
        "State": "OH",
        "Zip": "43623",
        "Contact": "416-671-6295"
    },
    {
        "Mosque Name": "Jaffery Union of Ne Ohio",
        "Address": "189 Chapel Hill Dr. Nw",
        "City": "Warren",
        "State": "OH",
        "Zip": "44483",
        "Contact": "330-847-7280"
    },
    {
        "Mosque Name": "Islamic Center of Greater Cincinnat",
        "Address": "8091 Plantation Dr.",
        "City": "West Chester",
        "State": "OH",
        "Zip": "45069",
        "Contact": "513-755-3280"
    },
    {
        "Mosque Name": "Islamic Community Center",
        "Address": "299 E Market St",
        "City": "Xenia",
        "State": "OH",
        "Zip": "45385",
        "Contact": "937-376-4111"
    },
    {
        "Mosque Name": " Al Khair Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Youngstown ",
        "Address": "1670 Homewood Ave.",
        "City": "Youngstown",
        "State": "OH",
        "Zip": "44502",
        "Contact": "330-743-3742"
    },
    {
        "Mosque Name": "Islamic Society of Ada",
        "Address": "7265 E. County Rd.",
        "City": "Ada",
        "State": "OK",
        "Zip": "74820",
        "Contact": "580-436-2283"
    },
    {
        "Mosque Name": "Islamic Center of Ardmore",
        "Address": "P.O. Box 452",
        "City": "Ardmore",
        "State": "OK",
        "Zip": "73402",
        "Contact": "580-220-7439"
    },
    {
        "Mosque Name": "Al-Mahdi Foundation",
        "Address": "2105 W. Greeley",
        "City": "Broken Arrow",
        "State": "OK",
        "Zip": "74012",
        "Contact": "918-461-1322"
    },
    {
        "Mosque Name": "Islamic Society of Edmond",
        "Address": "525 N. University Dr.",
        "City": "Edmond",
        "State": "OK",
        "Zip": "73034",
        "Contact": "405-341-1077"
    },
    {
        "Mosque Name": " Islamic Center of Lawton",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Dr. Hassan Ahmed ",
        "Address": "913 SW F Ave",
        "City": "Lawton",
        "State": "OK",
        "Zip": "73501",
        "Contact": "580-284-1021"
    },
    {
        "Mosque Name": "Masjid Al-Falah Bilal Muhammad",
        "Address": "701 Nw 17th St. Suite B & C",
        "City": "Lawton",
        "State": "OK",
        "Zip": "73507",
        "Contact": "580-250-1001"
    },
    {
        "Mosque Name": "American Muslim Association of Lawton",
        "Address": "701 Serris Ave.",
        "City": "Lawton",
        "State": "OK",
        "Zip": "73501",
        "Contact": "580-353-2625"
    },
    {
        "Mosque Name": " Masjid An-Nur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Muskogee ",
        "Address": "517 W. Okmulgee St.",
        "City": "Muskogee",
        "State": "OK",
        "Zip": "74401",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Annur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Norman ",
        "Address": "420 E. Lindsey St.",
        "City": "Norman",
        "State": "OK",
        "Zip": "73069",
        "Contact": "405-364-5341"
    },
    {
        "Mosque Name": " Masjid An-Nasr",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Oklahoma ",
        "Address": "3815 St. Clair Ave.",
        "City": "Oklahoma City",
        "State": "OK",
        "Zip": "73112",
        "Contact": "405-946-2116"
    },
    {
        "Mosque Name": "Masjid Al-Mu Minun",
        "Address": "1322 Ne 23Rd St.",
        "City": "Oklahoma City",
        "State": "OK",
        "Zip": "73111",
        "Contact": "405-424-0352"
    },
    {
        "Mosque Name": "Mercy Masjid and School",
        "Address": "3900 Nw 39Th",
        "City": "Oklahoma City",
        "State": "OK",
        "Zip": "73112",
        "Contact": "405-946-3729"
    },
    {
        "Mosque Name": "American Muslim Association",
        "Address": "3201 Nw 48th St",
        "City": "Oklahoma City",
        "State": "OK",
        "Zip": "73112",
        "Contact": "405-948-6188"
    },
    {
        "Mosque Name": " Masjid As-Siddiq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society Stillwater ",
        "Address": "616 N Washington St.",
        "City": "Stillwater",
        "State": "OK",
        "Zip": "74075",
        "Contact": "405-377-5910"
    },
    {
        "Mosque Name": "Tulsa Muslim American Community",
        "Address": "1314 N. Greenwood",
        "City": "Tulsa",
        "State": "OK",
        "Zip": "74106",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al Salam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Tulsa ",
        "Address": "4620 S. Irvington Ave.",
        "City": "Tulsa",
        "State": "OK",
        "Zip": "74135-6851",
        "Contact": "918-584-0597"
    },
    {
        "Mosque Name": " Msa Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Students Assoc University of Tulsa ",
        "Address": "3020 E. 4Th Place",
        "City": "Tulsa",
        "State": "OK",
        "Zip": "74104",
        "Contact": "918-295-5820"
    },
    {
        "Mosque Name": "Masjid Al-Khalifah",
        "Address": "4502 N. Lewis St.",
        "City": "Tulsa",
        "State": "OK",
        "Zip": "74110",
        "Contact": "918-430-0345"
    },
    {
        "Mosque Name": "Bilal Masjid",
        "Address": "4116 Sw 160th Ave.",
        "City": "Beaverton",
        "State": "OR",
        "Zip": "97007",
        "Contact": "503-591-7233"
    },
    {
        "Mosque Name": " Imam Mahdi Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Portland ",
        "Address": "6940 Sw Hall Blvd",
        "City": "Beaverton",
        "State": "OR",
        "Zip": "97008",
        "Contact": "503-533-0116"
    },
    {
        "Mosque Name": "Salman Farsi Islamic Center",
        "Address": "610 Nw Kings Blvd",
        "City": "Corvallis",
        "State": "OR",
        "Zip": "97330",
        "Contact": "541-758-0329"
    },
    {
        "Mosque Name": "Abu Bakr As-Siddiq Islamic Center",
        "Address": "1856 W. Broadway",
        "City": "Eugene",
        "State": "OR",
        "Zip": "97402",
        "Contact": "541-844-2872"
    },
    {
        "Mosque Name": "Klamath Basin Islamic Society",
        "Address": "4810 Shasta Way",
        "City": "Klamath Falls",
        "State": "OR",
        "Zip": "97603",
        "Contact": "541-850-6233"
    },
    {
        "Mosque Name": "Douglas County Islamic Society",
        "Address": "17690 Elkhead Rd.",
        "City": "Oakland",
        "State": "OR",
        "Zip": "97462",
        "Contact": "541-459-1654"
    },
    {
        "Mosque Name": "Masjid Abubaka Al-Sadiq",
        "Address": "1731 Ne 66th Ave. No.41",
        "City": "Portland",
        "State": "OR",
        "Zip": "97213",
        "Contact": "503-408-7635"
    },
    {
        "Mosque Name": "Islamic Center of Se Portland",
        "Address": "11939 Se Stark St.",
        "City": "Portland",
        "State": "OR",
        "Zip": "97216",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid As-Saber",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Portland ",
        "Address": "10323 Sw 43Rd Ave.",
        "City": "Portland",
        "State": "OR",
        "Zip": "97219",
        "Contact": "503-293-6554"
    },
    {
        "Mosque Name": "Masjid Al-Furqan",
        "Address": "5510 N. Commercial Ave.",
        "City": "Portland",
        "State": "OR",
        "Zip": "97217",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Community Center of Portland",
        "Address": "3801 Ne Martin Luther King Bld",
        "City": "Portland",
        "State": "OR",
        "Zip": "97211",
        "Contact": "503-281-7691"
    },
    {
        "Mosque Name": "Masjid Al-Noor",
        "Address": "7108 Ne Gilsan St.",
        "City": "Portland",
        "State": "OR",
        "Zip": "97213",
        "Contact": "503-477-9724"
    },
    {
        "Mosque Name": "Al-Ahad Islamic Center",
        "Address": "1500 Ridgeview Dr.",
        "City": "Allentown",
        "State": "PA",
        "Zip": "18104",
        "Contact": "610-398-1900"
    },
    {
        "Mosque Name": "Islamic Education Center of Penn",
        "Address": "1109 W. Linden St.",
        "City": "Allentown",
        "State": "PA",
        "Zip": "18102",
        "Contact": "610-351-3937"
    },
    {
        "Mosque Name": "Islamic Center of Ambridge",
        "Address": "300 Maplewood Ave.",
        "City": "Ambridge",
        "State": "PA",
        "Zip": "15003",
        "Contact": "917-940-8990"
    },
    {
        "Mosque Name": " Masjid Al-Salam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â The Peace Center ",
        "Address": "505 Cavalry Rd.",
        "City": "Carlisle",
        "State": "PA",
        "Zip": "17013",
        "Contact": "717-241-9600"
    },
    {
        "Mosque Name": "Masjid Al-Fajr",
        "Address": "2009 W. 3Rd St.",
        "City": "Chester",
        "State": "PA",
        "Zip": "19013",
        "Contact": "610-364-1975"
    },
    {
        "Mosque Name": "Central Mosque",
        "Address": "1609 W. 9th St.",
        "City": "Chester",
        "State": "PA",
        "Zip": "19013",
        "Contact": "484-483-7705"
    },
    {
        "Mosque Name": "Masjid As Sabiqun",
        "Address": "1105 Concord Ave.",
        "City": "Chester",
        "State": "PA",
        "Zip": "19013",
        "Contact": "610-490-1757"
    },
    {
        "Mosque Name": "Islamic Center of Chester",
        "Address": "14 E. 7th St.",
        "City": "Chester",
        "State": "PA",
        "Zip": "19013",
        "Contact": "610-876-1270"
    },
    {
        "Mosque Name": "Masjid Al-Rahman",
        "Address": "723 Merchant St.",
        "City": "Coatesville",
        "State": "PA",
        "Zip": "19320",
        "Contact": "610-384-8092"
    },
    {
        "Mosque Name": "Islamic Society of Greater Valley Forge",
        "Address": "958 Valley Forge Rd.",
        "City": "Devon",
        "State": "PA",
        "Zip": "19333",
        "Contact": "610-688-2209"
    },
    {
        "Mosque Name": "Easton Phillipsburg Muslim Association",
        "Address": "1017 Lehigh St.",
        "City": "Easton",
        "State": "PA",
        "Zip": "18042",
        "Contact": "484-903-4903"
    },
    {
        "Mosque Name": "Islamic Cultural Center of Erie",
        "Address": "2426 Parade St.",
        "City": "Erie",
        "State": "PA",
        "Zip": "16503",
        "Contact": "814-453-3001"
    },
    {
        "Mosque Name": "Almakarim Islamic Foundation",
        "Address": "1635 Ash St.",
        "City": "Erie",
        "State": "PA",
        "Zip": "16503",
        "Contact": "814-455-5500"
    },
    {
        "Mosque Name": " Erie Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Erie ",
        "Address": "2410 Holland St.",
        "City": "Erie",
        "State": "PA",
        "Zip": "16503",
        "Contact": "814-454-8380"
    },
    {
        "Mosque Name": "Islamic Society of Greater Harrisburg",
        "Address": "407 N. Front St.",
        "City": "Harrisburg",
        "State": "PA",
        "Zip": "17113",
        "Contact": "717-939-3107"
    },
    {
        "Mosque Name": "Harrisburg Masjid Culture Center",
        "Address": "200 S. 17th St.",
        "City": "Harrisburg",
        "State": "PA",
        "Zip": "17104",
        "Contact": "717-232-4545"
    },
    {
        "Mosque Name": "Masjid As-Sabreen",
        "Address": "1403 S. Cameron St.",
        "City": "Harrisburg",
        "State": "PA",
        "Zip": "17104",
        "Contact": "717-238-8313"
    },
    {
        "Mosque Name": "Cham Muslims Association of Penn",
        "Address": "1701 Putnam St.",
        "City": "Harrisburg",
        "State": "PA",
        "Zip": "17104",
        "Contact": "717-221-8562"
    },
    {
        "Mosque Name": "Bangladeshi Jame Masjid And Islamic Center",
        "Address": "77 E. Lincoln Ave.",
        "City": "Hatfield",
        "State": "PA",
        "Zip": "19440",
        "Contact": "215-362-5771"
    },
    {
        "Mosque Name": "Islamic Center of Altoona",
        "Address": "703 Logan Blvd",
        "City": "Hollidaysburg",
        "State": "PA",
        "Zip": "16648",
        "Contact": "814-949-0577"
    },
    {
        "Mosque Name": "Islamic Center of Indiana PA",
        "Address": "132 Philadelphia St.",
        "City": "Indiana",
        "State": "PA",
        "Zip": "15701",
        "Contact": "724-349-6170"
    },
    {
        "Mosque Name": "Islamic Center of Lancaster County",
        "Address": "739 W. Vine St.",
        "City": "Lancaster",
        "State": "PA",
        "Zip": "17603",
        "Contact": "717-391-6211"
    },
    {
        "Mosque Name": "North Penn Mosque",
        "Address": "600 Maple Ave.",
        "City": "Lansdale",
        "State": "PA",
        "Zip": "19446",
        "Contact": "215-361-2229"
    },
    {
        "Mosque Name": "Lebanon Valley Mosque",
        "Address": "525 N. 9th St.",
        "City": "Lebanon",
        "State": "PA",
        "Zip": "17046",
        "Contact": ""
    },
    {
        "Mosque Name": " Yunus Emre Camii",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Turkish American Muslim Cultural Association ",
        "Address": "541 Levittown Pkwy",
        "City": "Levittown",
        "State": "PA",
        "Zip": "19054",
        "Contact": "215-945-6820"
    },
    {
        "Mosque Name": "B&H Islamic Center of Penn",
        "Address": "4922 Simpson Ferry Rd.",
        "City": "Mechanicsburg",
        "State": "PA",
        "Zip": "17050",
        "Contact": "717-439-1010"
    },
    {
        "Mosque Name": "Masjid An Noor",
        "Address": "5205 Simpson Ferry Rd.",
        "City": "Mechanicsburg",
        "State": "PA",
        "Zip": "17050",
        "Contact": "717-802-5133"
    },
    {
        "Mosque Name": " Al-Hikmeh Instititue",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Penn ",
        "Address": "5138 E. Trindle",
        "City": "Mechanicsburg",
        "State": "PA",
        "Zip": "17050",
        "Contact": "717-608-5532"
    },
    {
        "Mosque Name": "Muslim Community Center of Greater Pittsburgh",
        "Address": "233 Seaman Lane",
        "City": "Monroeville",
        "State": "PA",
        "Zip": "15146",
        "Contact": "412-373-0101"
    },
    {
        "Mosque Name": " Masjid Al-Rahmah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Grt New Castle ",
        "Address": "1229 Finch St.",
        "City": "New Castle",
        "State": "PA",
        "Zip": "16103",
        "Contact": "724-658-8835"
    },
    {
        "Mosque Name": "Norristown Masjid",
        "Address": "931 Green St.",
        "City": "Norristown",
        "State": "PA",
        "Zip": "19401",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid An-Nour",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Norristown Islamic Society ",
        "Address": "518 Green St.",
        "City": "Norristown",
        "State": "PA",
        "Zip": "19401",
        "Contact": "610-306-7119"
    },
    {
        "Mosque Name": "Masjid Muhammad",
        "Address": "414 E. Penn St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19138",
        "Contact": "215-849-9112"
    },
    {
        "Mosque Name": "Muslims of the Americas",
        "Address": "530 S 52Nd Street",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19143",
        "Contact": "215-472-0922"
    },
    {
        "Mosque Name": "Yankasa Association Mosque",
        "Address": "3408 Haverford Ave",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19104",
        "Contact": "215-609-7061"
    },
    {
        "Mosque Name": "Masjid Al-Jamia",
        "Address": "4228 Walnut St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19104",
        "Contact": "267-275-8087"
    },
    {
        "Mosque Name": "Masjid Mujahideen",
        "Address": "413 S 60th St",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19143",
        "Contact": "215-471-7073"
    },
    {
        "Mosque Name": "Bawa Muhaiyaddeen Fellowship",
        "Address": "5820 Overbrook Ave",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19131",
        "Contact": "215-879-6300"
    },
    {
        "Mosque Name": "Islamic Family Center",
        "Address": "6840 Old York Rd.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19126",
        "Contact": "215-224-7343"
    },
    {
        "Mosque Name": "Masjid Al-Wasatiyah Wal-Itidaal",
        "Address": "2658 S. 66th St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19142",
        "Contact": "215-921-9866"
    },
    {
        "Mosque Name": "Masjid Taubah",
        "Address": "3093 Kensington Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19134",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ahlil Hadeeth",
        "Address": "6711 Woodland Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19142",
        "Contact": "215-724-1169"
    },
    {
        "Mosque Name": "Masjid Al-Tawheed",
        "Address": "3027 N. 22Nd St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19132",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Sakinah",
        "Address": "311 E. Cliveden St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19119",
        "Contact": "267-226-4670"
    },
    {
        "Mosque Name": "Mujtaba Islamic Association",
        "Address": "2034 Orthodox St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19124",
        "Contact": "215-289-6019"
    },
    {
        "Mosque Name": "Masjid Salaam",
        "Address": "4101 W. Girard Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19104",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Muqbil Bin Hadee",
        "Address": "2735 W. Alleghany Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19132",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al Islaah Community Center",
        "Address": "6502 Elmwood Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19142",
        "Contact": "215-365-5134"
    },
    {
        "Mosque Name": "Makkah Masjid",
        "Address": "1319 W Susquehanna Ave",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19132",
        "Contact": "215-978-9508"
    },
    {
        "Mosque Name": "Al-Aqsa Islamic Society",
        "Address": "1501 Germantown Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19122",
        "Contact": "215-765-2743"
    },
    {
        "Mosque Name": "Masjid Al-Birr Wat Taqwa",
        "Address": "23 S. 52Nd St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19139",
        "Contact": "215-747-3136"
    },
    {
        "Mosque Name": " Masjid Al-Furqan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Philadelphia ",
        "Address": "7252 Roosevelt Blvd.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19149",
        "Contact": "215-333-3550"
    },
    {
        "Mosque Name": "Masjidur Razzaqal Karim",
        "Address": "6215 W. Girard",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19139",
        "Contact": ""
    },
    {
        "Mosque Name": "Association of Islamic Charitable Projects",
        "Address": "4431 Walnut St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19104",
        "Contact": "215-387-8888"
    },
    {
        "Mosque Name": "Masjidullah",
        "Address": "7700 Ogontz Ave",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19150",
        "Contact": "215-424-8022"
    },
    {
        "Mosque Name": "Masjid As-Sunnah An-Nabawiyyah",
        "Address": "4944 Germantown Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19144",
        "Contact": "215-438-9893"
    },
    {
        "Mosque Name": "Islamic Ahlolbait Associates",
        "Address": "7420 Brockton Rd.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19151",
        "Contact": "215-871-7656"
    },
    {
        "Mosque Name": " Masjid Alhedaya",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim American Society ",
        "Address": "123 E. Luzerne St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19124",
        "Contact": "215-457-0300"
    },
    {
        "Mosque Name": "United Muslim Masjid",
        "Address": "810 S. 15th St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19146",
        "Contact": "215-546-6555"
    },
    {
        "Mosque Name": " Baitul Mukarram",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â North East Phila Islamic Center ",
        "Address": "1421 Tyson Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19111",
        "Contact": "267-258-7878"
    },
    {
        "Mosque Name": "Masjid Al-Hashar",
        "Address": "2823 N 22Nd St",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19132",
        "Contact": "215-225-2084"
    },
    {
        "Mosque Name": "Albanian American Muslim Society",
        "Address": "157 W. Girard Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19123",
        "Contact": "215-639-0217"
    },
    {
        "Mosque Name": " Masjid Quba",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Quba  Inc ",
        "Address": "4637 Lancaster Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19131",
        "Contact": "215-473-8589"
    },
    {
        "Mosque Name": "Faith Unity Inc",
        "Address": "5931 Bensalem Blvd",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19020",
        "Contact": "215-633-8337"
    },
    {
        "Mosque Name": "Islamic Center of Ridge Ave.",
        "Address": "3116 Ridge Ave",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19121",
        "Contact": "215-232-9475"
    },
    {
        "Mosque Name": "Mahdieh",
        "Address": "6502 Haverford Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19151",
        "Contact": "215-871-7656"
    },
    {
        "Mosque Name": "Masjid Al-Quran",
        "Address": "1546 N. 27th St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19121",
        "Contact": "215-763-1601"
    },
    {
        "Mosque Name": "Baitul Mukarram Jam-E-Masjid",
        "Address": "18 S. 43Rd St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19104",
        "Contact": "215-386-6353"
    },
    {
        "Mosque Name": "Philadelphia Masjid",
        "Address": "4700 Wyalusing Avenue",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19131",
        "Contact": "215-877-8600"
    },
    {
        "Mosque Name": "United Muslim Islamic Center",
        "Address": "51 Point Breeze",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19146",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Isha",
        "Address": "5801 Crittenden St. 2Nd Fl.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19138",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Taqwa",
        "Address": "7918 Frankford Ave.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19136",
        "Contact": "215-332-4220"
    },
    {
        "Mosque Name": "African Islamic Sw Community Center",
        "Address": "2400 S. 63Rd St.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19142",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Taha",
        "Address": "4665 Frankfort Ave. 2Nd Fl.",
        "City": "Philadelphia",
        "State": "PA",
        "Zip": "19124",
        "Contact": ""
    },
    {
        "Mosque Name": "Attawheed Islamic Center",
        "Address": "1424 Banksville Rd. 2Nd Fl",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip": "15216",
        "Contact": "412-344-4404"
    },
    {
        "Mosque Name": "An Nur Islamic Center",
        "Address": "303 Trenton Ave.",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip": "15221",
        "Contact": "412-371-1833"
    },
    {
        "Mosque Name": "Masjid Al-Awwal (First Muslim Mosque Pitt)",
        "Address": "I911 Wylie Ave",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip": "15219",
        "Contact": "412-434-7979"
    },
    {
        "Mosque Name": " Masjid Nur Uz Zamaan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Sankore Institute of Islamic-African Studies ",
        "Address": "1320 Boyle",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip": "15212",
        "Contact": "412-231-0763"
    },
    {
        "Mosque Name": "Masjid Al-Mu Min",
        "Address": "357 Paulson Ave. E.Liberty.",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip": "15206",
        "Contact": "412-363-1237"
    },
    {
        "Mosque Name": "Islamic Center of Pittsburg",
        "Address": "4100 Bigalow Blvd.",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip": "15213",
        "Contact": "412-682-5555"
    },
    {
        "Mosque Name": "Islamic Society of Schuylkill County",
        "Address": "1043 E. Norwegian St.",
        "City": "Pottsville",
        "State": "PA",
        "Zip": "17901",
        "Contact": "570-622-6860"
    },
    {
        "Mosque Name": "Islamic Center of Reading",
        "Address": "18 S. Noble St.",
        "City": "Reading",
        "State": "PA",
        "Zip": "19611",
        "Contact": "610-478-1338"
    },
    {
        "Mosque Name": "Darul Uloom Al-Qasim",
        "Address": "818 Race St.",
        "City": "Shamokin",
        "State": "PA",
        "Zip": "17872",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Central Penn",
        "Address": "709 Ridge Ave.",
        "City": "State College",
        "State": "PA",
        "Zip": "16803",
        "Contact": "814-238-2079"
    },
    {
        "Mosque Name": "Stroudsburg Islamic Mosque",
        "Address": "133 North 2nd Street",
        "City": "Stroudsburg",
        "State": "PA",
        "Zip": "18360",
        "Contact": "570-420-1793"
    },
    {
        "Mosque Name": " Sunbury Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Susquehanna Valley ",
        "Address": "63 N. Fourth St.",
        "City": "Sunbury",
        "State": "PA",
        "Zip": "17801",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Greater Uniontown",
        "Address": "100 Woodlawn Ave. Suite 300",
        "City": "Uniontown",
        "State": "PA",
        "Zip": "15401",
        "Contact": "724-430-4254"
    },
    {
        "Mosque Name": "Masjid Al-Madina",
        "Address": "6800 Ludlow St.",
        "City": "Upper Darby",
        "State": "PA",
        "Zip": "19082",
        "Contact": "610-352-7774"
    },
    {
        "Mosque Name": "The Foundation for Islamic Education",
        "Address": "1860 Montgomery Ave.",
        "City": "Villanova",
        "State": "PA",
        "Zip": "19085",
        "Contact": "610-520-9624"
    },
    {
        "Mosque Name": " Islamic Center of North Pittsburgh",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Trinity Luthern Church ",
        "Address": "2500 Brandt School",
        "City": "Wexford",
        "State": "PA",
        "Zip": "15090",
        "Contact": "724-940-9214"
    },
    {
        "Mosque Name": "Muslim Association of Greater Pittsburgh",
        "Address": "11676 Perry Hwy Suite 2200",
        "City": "Wexford",
        "State": "PA",
        "Zip": "15090",
        "Contact": "412-253-0578"
    },
    {
        "Mosque Name": " Islamic Center of Lehigh Valley",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Association of Lehigh Valley ",
        "Address": "1798 Schadt Ave.",
        "City": "Whitehall",
        "State": "PA",
        "Zip": "18052",
        "Contact": "610-799-6224"
    },
    {
        "Mosque Name": "Masjid Tawheed",
        "Address": "402 S. Franklin St.",
        "City": "Wilkes-Barre",
        "State": "PA",
        "Zip": "18702",
        "Contact": "570-821-1730"
    },
    {
        "Mosque Name": "Islamic Association of Ne Pennsylvania",
        "Address": "991 Scott St.",
        "City": "Wilkes-Barre",
        "State": "PA",
        "Zip": "18705",
        "Contact": "570-823-9660"
    },
    {
        "Mosque Name": "Willamsport Islamic Center",
        "Address": "1663 Memorial Ave.",
        "City": "Willamsport",
        "State": "PA",
        "Zip": "17701",
        "Contact": "570-601-4691"
    },
    {
        "Mosque Name": "Islamic Center of Johnstown",
        "Address": "809 Main St.",
        "City": "Windber",
        "State": "PA",
        "Zip": "15963",
        "Contact": "814-467-0640"
    },
    {
        "Mosque Name": "Zubaida Foundation",
        "Address": "855 Big Oak Rd.",
        "City": "Yardley",
        "State": "PA",
        "Zip": "19067",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid At-Tawheed",
        "Address": "9 S. Belvidere Ave.",
        "City": "York",
        "State": "PA",
        "Zip": "17404",
        "Contact": "717-699-1988"
    },
    {
        "Mosque Name": "Muslim American Dawah Center",
        "Address": "978 Plainfield St.",
        "City": "Johnston",
        "State": "RI",
        "Zip": "2919",
        "Contact": "401-529-4251"
    },
    {
        "Mosque Name": " Masjid Al-Hoda",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community Center of Ri ",
        "Address": "100 Fortin Rd.  Bldg 1 Unit 2",
        "City": "Kingston",
        "State": "RI",
        "Zip": "2881",
        "Contact": "401-569-9585"
    },
    {
        "Mosque Name": "Masjid Al-Islam",
        "Address": "40 Sayles Hill Rd.",
        "City": "North Smithfield",
        "State": "RI",
        "Zip": "2896",
        "Contact": "401-762-0107"
    },
    {
        "Mosque Name": " Masjid Alrahman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Society of Rhode Island ",
        "Address": "18 Dunnell Lane",
        "City": "Pawtucket",
        "State": "RI",
        "Zip": "2860",
        "Contact": "401-729-0745"
    },
    {
        "Mosque Name": " Masjid Al-Razzaq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim American Dawah Center ",
        "Address": "1148 Board",
        "City": "Providence",
        "State": "RI",
        "Zip": "2905",
        "Contact": "401-467-0011"
    },
    {
        "Mosque Name": " Masjid Al Karim",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Rhode Island ",
        "Address": "39 Haskins St.",
        "City": "Providence",
        "State": "RI",
        "Zip": "2903",
        "Contact": "401-274-3986"
    },
    {
        "Mosque Name": "Muhajirun Wal Ansar Masjid",
        "Address": "304 E. Main St.",
        "City": "Charleston",
        "State": "SC",
        "Zip": "29461",
        "Contact": "843-899-5500"
    },
    {
        "Mosque Name": "Central Mosque of Charleston",
        "Address": "1082 King St.",
        "City": "Charleston",
        "State": "SC",
        "Zip": "29403",
        "Contact": "843-720-8614"
    },
    {
        "Mosque Name": "Masjid Al-Furqan Islamic Center",
        "Address": "249 Routledge Ave.",
        "City": "Charleston",
        "State": "SC",
        "Zip": "29403",
        "Contact": "843-720-8614"
    },
    {
        "Mosque Name": "Islamic Society of Clemson",
        "Address": "1009 Old Stone Church Rd.",
        "City": "Clemson",
        "State": "SC",
        "Zip": "29631",
        "Contact": "864-654-4514"
    },
    {
        "Mosque Name": "Mosque of The Holy Quran",
        "Address": "6411 Shakespeare Rd.",
        "City": "Columbia",
        "State": "SC",
        "Zip": "29223",
        "Contact": "803-714-6749"
    },
    {
        "Mosque Name": " Masjid Al-Muslimin",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Columbia ",
        "Address": "1929 Gervais St",
        "City": "Columbia",
        "State": "SC",
        "Zip": "29201",
        "Contact": "803-254-7242"
    },
    {
        "Mosque Name": "Masjid As-Salaam",
        "Address": "5119 Monticello Road",
        "City": "Columbia",
        "State": "SC",
        "Zip": "29203",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Noor Ul Huda",
        "Address": "517 Winmet Dr.",
        "City": "Columbia",
        "State": "SC",
        "Zip": "29203",
        "Contact": "803-754-2632"
    },
    {
        "Mosque Name": "Conway Islamic Center",
        "Address": "1808 Racepath Ave.",
        "City": "Conway",
        "State": "SC",
        "Zip": "29527",
        "Contact": "803-397-0811"
    },
    {
        "Mosque Name": "Islamic Center of Florence",
        "Address": "160 N. Edisto Dr.",
        "City": "Florence",
        "State": "SC",
        "Zip": "29501",
        "Contact": "843-230-9433"
    },
    {
        "Mosque Name": "Florence Islamic Center",
        "Address": "410 N. Coit Street",
        "City": "Florence",
        "State": "SC",
        "Zip": "29501",
        "Contact": "843-669-9982"
    },
    {
        "Mosque Name": "Islamic Community Center of South Charlotte",
        "Address": "1048 Gant Rd.",
        "City": "Fort Mill",
        "State": "SC",
        "Zip": "29715",
        "Contact": "704-900-1964"
    },
    {
        "Mosque Name": "Islamic Society of Greenville",
        "Address": "2701 Wade Hampton Blvd",
        "City": "Greenville",
        "State": "SC",
        "Zip": "29609",
        "Contact": "864-292-2219"
    },
    {
        "Mosque Name": " Upstate Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greenville ",
        "Address": "1601 Clement Rd.",
        "City": "Greer",
        "State": "SC",
        "Zip": "29650",
        "Contact": "864-292-2219"
    },
    {
        "Mosque Name": "Masjid Al Jami Ar-Rashid",
        "Address": "1998 Hugo Avenue",
        "City": "N. Charleston",
        "State": "SC",
        "Zip": "29405",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Taqwa",
        "Address": "399 Summers Ave.",
        "City": "Orangeburg",
        "State": "SC",
        "Zip": "29115",
        "Contact": "803-539-2024"
    },
    {
        "Mosque Name": "Islamic Society of South Carolina",
        "Address": "1705 Cherry Rd. Unit No.102",
        "City": "Rock Hill",
        "State": "SC",
        "Zip": "29732",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Spartanburg",
        "Address": "377 Successful Way",
        "City": "Spartanburg",
        "State": "SC",
        "Zip": "29303",
        "Contact": "864-621-6460"
    },
    {
        "Mosque Name": "Masjid Muqarrabun",
        "Address": "485 E. Liberty St.",
        "City": "Sumter",
        "State": "SC",
        "Zip": "29150",
        "Contact": "803-720-2700"
    },
    {
        "Mosque Name": "Islamic Cultural Information Center",
        "Address": "847 N. Main",
        "City": "Sumter",
        "State": "SC",
        "Zip": "29150",
        "Contact": "803-773-3919"
    },
    {
        "Mosque Name": "Masjid Al Fatimah",
        "Address": "243 Flintlock Dr.",
        "City": "York",
        "State": "SC",
        "Zip": "29745",
        "Contact": "803-526-1173"
    },
    {
        "Mosque Name": "Islamic Society of Brookings",
        "Address": "724 11th Ave.",
        "City": "Brookings",
        "State": "SD",
        "Zip": "57006",
        "Contact": "605-697-6187"
    },
    {
        "Mosque Name": "Islamic Association of the Black Hills",
        "Address": "2526 Tomahawk Dr.",
        "City": "Rapid City",
        "State": "SD",
        "Zip": "57701",
        "Contact": "605-394-2335"
    },
    {
        "Mosque Name": "Muslim Community Center of Sd",
        "Address": "3932 S. Western Ave.",
        "City": "Sioux Falls",
        "State": "SD",
        "Zip": "57105",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Attakwa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Community of South Dakota ",
        "Address": "701 S. Garfield Ave.",
        "City": "Sioux Falls",
        "State": "SD",
        "Zip": "57104",
        "Contact": "605-838-3500"
    },
    {
        "Mosque Name": "Islamic Center of Sioux Falls",
        "Address": "1909 E. 6th St.",
        "City": "Sioux Falls",
        "State": "SD",
        "Zip": "57103",
        "Contact": "605-333-2005"
    },
    {
        "Mosque Name": "Islamic Center of Tennessee",
        "Address": "5400 Bell Forge Lane East",
        "City": "Antioch",
        "State": "TN",
        "Zip": "37013",
        "Contact": "615-731-8895"
    },
    {
        "Mosque Name": "Al-Zahra Islamic Center",
        "Address": "12457 Old Hickory Blvd",
        "City": "Antioch",
        "State": "TN",
        "Zip": "37013",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Williamson County",
        "Address": "1724 Carothers Parkway",
        "City": "Brentwood",
        "State": "TN",
        "Zip": "37027",
        "Contact": "615-261-9909"
    },
    {
        "Mosque Name": " Al Kalem Bih Islamic Community",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Bosnian Community Center ",
        "Address": "5708 Uptain Rd. No.250",
        "City": "Chattanooga",
        "State": "TN",
        "Zip": "37412",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslim Community Center",
        "Address": "504 Kilmer St.",
        "City": "Chattanooga",
        "State": "TN",
        "Zip": "37404",
        "Contact": "423-756-4917"
    },
    {
        "Mosque Name": "Masjid Al Qadir",
        "Address": "1817 E. 26th St.",
        "City": "Chattanooga",
        "State": "TN",
        "Zip": "37407",
        "Contact": ""
    },
    {
        "Mosque Name": "An-Nour Islamic Society",
        "Address": "5311 Upshaw Dr.",
        "City": "Chattanooga",
        "State": "TN",
        "Zip": "37416",
        "Contact": "423-490-8544"
    },
    {
        "Mosque Name": "Islamic Society of Greater Chattanooga",
        "Address": "2533 Gunbarrel Rd.",
        "City": "Chattanooga",
        "State": "TN",
        "Zip": "37421",
        "Contact": ""
    },
    {
        "Mosque Name": "Chattanooga Cultural Academy",
        "Address": "2129 W. Shepherd Rd.",
        "City": "Chattanooga",
        "State": "TN",
        "Zip": "37421",
        "Contact": "423-490-5672"
    },
    {
        "Mosque Name": "Masjid Muhammad",
        "Address": "1410 Cemetery Ave.",
        "City": "Chattanooga",
        "State": "TN",
        "Zip": "37408",
        "Contact": "423-756-4917"
    },
    {
        "Mosque Name": "Islamic Center of Clarksville",
        "Address": "202 Uffelman Dr.",
        "City": "Clarksville",
        "State": "TN",
        "Zip": "37043",
        "Contact": "931-216-0449"
    },
    {
        "Mosque Name": "Islamic Center of Columbia",
        "Address": "500 Carter St.",
        "City": "Columbia",
        "State": "TN",
        "Zip": "38401",
        "Contact": "931-446-0078"
    },
    {
        "Mosque Name": "Memphis Islamic Center",
        "Address": "10225 Humphreys Rd.",
        "City": "Cordova",
        "State": "TN",
        "Zip": "38018",
        "Contact": "901-231-9340"
    },
    {
        "Mosque Name": "Hendersonville Masjid",
        "Address": "919 W. Main St. Unit L-6",
        "City": "Hendersonville",
        "State": "TN",
        "Zip": "37075",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Jackson",
        "Address": "1742 Airways Blvd",
        "City": "Jackson",
        "State": "TN",
        "Zip": "38301",
        "Contact": "731-423-1818"
    },
    {
        "Mosque Name": "Muslim Community of N.E. Tennessee",
        "Address": "3010 Antioch Rd.",
        "City": "Johnson City",
        "State": "TN",
        "Zip": "37604",
        "Contact": "423-975-6681"
    },
    {
        "Mosque Name": " Masjid Annoor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Community of Knoxvlle ",
        "Address": "100 13th St. Sw",
        "City": "Knoxville",
        "State": "TN",
        "Zip": "37916",
        "Contact": "865-637-8172"
    },
    {
        "Mosque Name": "Quran Center",
        "Address": "8044 Ray Mears Blvd Suite 110",
        "City": "Knoxville",
        "State": "TN",
        "Zip": "37919",
        "Contact": ""
    },
    {
        "Mosque Name": "Musallah Annoor Academy",
        "Address": "724 Fox Vue Rd.",
        "City": "Knoxville",
        "State": "TN",
        "Zip": "37922",
        "Contact": "865-525-3399"
    },
    {
        "Mosque Name": "Masjed Al Nour",
        "Address": "B-10 Grove Apartments",
        "City": "Martin",
        "State": "TN",
        "Zip": "38238",
        "Contact": "731-881-7249"
    },
    {
        "Mosque Name": " Masjid As-Salam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Society of Memphis ",
        "Address": "1065 Stratford St.",
        "City": "Memphis",
        "State": "TN",
        "Zip": "38122",
        "Contact": "901-685-8906"
    },
    {
        "Mosque Name": " Masjid An-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Greater Memphis ",
        "Address": "3529 Mynders Ave.",
        "City": "Memphis",
        "State": "TN",
        "Zip": "38111",
        "Contact": "901-432-0761"
    },
    {
        "Mosque Name": "Association of Islamic Charitable Projects",
        "Address": "4609 Tchulahoma Rd.",
        "City": "Memphis",
        "State": "TN",
        "Zip": "38118",
        "Contact": "901-794-9855"
    },
    {
        "Mosque Name": " Muslim Community Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Pleasant View School ",
        "Address": "1888 N. Bartlett Rd.",
        "City": "Memphis",
        "State": "TN",
        "Zip": "38134",
        "Contact": "901-380-0122"
    },
    {
        "Mosque Name": "Al Rasool Islamic Center",
        "Address": "5311 Stage Rd.",
        "City": "Memphis",
        "State": "TN",
        "Zip": "38134",
        "Contact": "901-380-9002"
    },
    {
        "Mosque Name": "Masjid Al-Mu Minun",
        "Address": "4412 South Third Street",
        "City": "Memphis",
        "State": "TN",
        "Zip": "38109",
        "Contact": "901-482-8232"
    },
    {
        "Mosque Name": "Masjid At-Taqwa",
        "Address": "1803 Winchester Rd.",
        "City": "Memphis",
        "State": "TN",
        "Zip": "38116",
        "Contact": "901-438-9133"
    },
    {
        "Mosque Name": " Masjid Al-Iman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Murfreesboro ",
        "Address": "862 Middle Tennessee Blvd",
        "City": "Murfreesboro",
        "State": "TN",
        "Zip": "37129",
        "Contact": "615-890-1551"
    },
    {
        "Mosque Name": "Salahadeen Center of Nashville",
        "Address": "364 Elysian Fields Ct.",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37211",
        "Contact": "615-333-0530"
    },
    {
        "Mosque Name": "Al-Mahdi Islamic Center",
        "Address": "404 Wingrove St.",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37203",
        "Contact": "615-256-2434"
    },
    {
        "Mosque Name": "Islamic Center of Nashville",
        "Address": "2515 12th Ave. S",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37204",
        "Contact": "615-385-9373"
    },
    {
        "Mosque Name": "Muslim American Community",
        "Address": "2420 Batavia St.",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37208",
        "Contact": "615-320-5126"
    },
    {
        "Mosque Name": "Sunni Muslim Students Mosala",
        "Address": "810 Bellevue Rd. Bldg 57 No.303",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37221",
        "Contact": "615-673-2005"
    },
    {
        "Mosque Name": "Masjid Al-Noor",
        "Address": "123 1St Ave.",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37217",
        "Contact": ""
    },
    {
        "Mosque Name": "Ethiopian Community Musalla",
        "Address": "2131 Murfreesboro Pike",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37217",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Islam",
        "Address": "3620 Buena Vista Pike",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37218",
        "Contact": "615-569-4877"
    },
    {
        "Mosque Name": "Masjid Al-Farooq",
        "Address": "1421 4th Ave. S",
        "City": "Nashville",
        "State": "TN",
        "Zip": "37210",
        "Contact": "615-313-8844"
    },
    {
        "Mosque Name": "Musallah Gatlinburg",
        "Address": "205 Valley Dr.",
        "City": "Pigeon Forge",
        "State": "TN",
        "Zip": "37862",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Association of Allen",
        "Address": "202 N. Allen Dr.  Suite D",
        "City": "Allen",
        "State": "TX",
        "Zip": "75013",
        "Contact": "972-908-3330"
    },
    {
        "Mosque Name": " Alvin Musalla",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Sez ",
        "Address": "1704 W. South St.",
        "City": "Alvin",
        "State": "TX",
        "Zip": "77511",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Amarillo",
        "Address": "601 Quail Creek",
        "City": "Amarillo",
        "State": "TX",
        "Zip": "79124",
        "Contact": "806-358-1615"
    },
    {
        "Mosque Name": "Mansfield Islamic Center",
        "Address": "6401 New York Ave. Suite 135",
        "City": "Arlington",
        "State": "TX",
        "Zip": "76018",
        "Contact": ""
    },
    {
        "Mosque Name": "Dar El Salam Islamic Center",
        "Address": "747 W. Lamar Blvd",
        "City": "Arlington",
        "State": "TX",
        "Zip": "76012",
        "Contact": "817-265-2596"
    },
    {
        "Mosque Name": "Islamic Society of Arlington",
        "Address": "1700 S. Center",
        "City": "Arlington",
        "State": "TX",
        "Zip": "76010",
        "Contact": "817-461-8415"
    },
    {
        "Mosque Name": "Zia Ul Quran Center",
        "Address": "2425 Carter Dr.",
        "City": "Arlington",
        "State": "TX",
        "Zip": "76014",
        "Contact": "817-860-3786"
    },
    {
        "Mosque Name": " Dar El-Eman Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Dfw Islamic Educational Center ",
        "Address": "5511 Mansfield Rd.",
        "City": "Arlington",
        "State": "TX",
        "Zip": "76017",
        "Contact": "817-466-0505"
    },
    {
        "Mosque Name": "Masjid Ibn Uthaymeen",
        "Address": "2114-D Roosevelt Dr.",
        "City": "Arlington",
        "State": "TX",
        "Zip": "76013",
        "Contact": "817-275-1250"
    },
    {
        "Mosque Name": "Masjid Ibrahim",
        "Address": "1701 W. Ben White Blvd  No.3",
        "City": "Austin",
        "State": "TX",
        "Zip": "78704",
        "Contact": "512-693-2924"
    },
    {
        "Mosque Name": "Nueces Mosque",
        "Address": "1906 Neuces Street",
        "City": "Austin",
        "State": "TX",
        "Zip": "78705",
        "Contact": "512-495-9590"
    },
    {
        "Mosque Name": "East Austin Community of Al-Islam",
        "Address": "701 Tillery St. No.A-8",
        "City": "Austin",
        "State": "TX",
        "Zip": "78702",
        "Contact": ""
    },
    {
        "Mosque Name": " Islamic Ahlul Bayt Association",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Al-Mahdi Center ",
        "Address": "12460 Los Indios Tr",
        "City": "Austin",
        "State": "TX",
        "Zip": "78729",
        "Contact": "512-291-9855"
    },
    {
        "Mosque Name": " Masjid Khadijah Bint Khuwaylid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Greater Austin ",
        "Address": "5110 Manor Rd.",
        "City": "Austin",
        "State": "TX",
        "Zip": "78723",
        "Contact": "512-926-9221"
    },
    {
        "Mosque Name": " Masjid Aisha",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â North Austin Muslim Community Center ",
        "Address": "11900 N. Lamar Blvd",
        "City": "Austin",
        "State": "TX",
        "Zip": "78753",
        "Contact": "512-491-7148"
    },
    {
        "Mosque Name": " Masjid Ar-Rahman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Southeast Baytown ",
        "Address": "4000 Emmet Hutto Blvd",
        "City": "Baytown",
        "State": "TX",
        "Zip": "77521",
        "Contact": "281-428-8682"
    },
    {
        "Mosque Name": "Islamic Society of Triplex",
        "Address": "1270 W. Cardinal Dr.",
        "City": "Beaumont",
        "State": "TX",
        "Zip": "77705",
        "Contact": "409-842-5349"
    },
    {
        "Mosque Name": "Masjid Zakariya",
        "Address": "4699 Calder Ave.",
        "City": "Beaumont",
        "State": "TX",
        "Zip": "77706",
        "Contact": "409-284-5309"
    },
    {
        "Mosque Name": "Al-Akbar Islamic Center",
        "Address": "225 Pr 3477",
        "City": "Big Sandy",
        "State": "TX",
        "Zip": "75755",
        "Contact": "903-258-6089"
    },
    {
        "Mosque Name": "Islamic Center of Bownsville",
        "Address": "246 Gilson Rd.",
        "City": "Brownsville",
        "State": "TX",
        "Zip": "78521",
        "Contact": "956-371-8272"
    },
    {
        "Mosque Name": "Cactus Musallah",
        "Address": "403 Winona Ave. No.D",
        "City": "Cactus",
        "State": "TX",
        "Zip": "79013",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Canyon",
        "Address": "2608 4th Ave.",
        "City": "Canyon",
        "State": "TX",
        "Zip": "79015",
        "Contact": ""
    },
    {
        "Mosque Name": "Albanian Community Center",
        "Address": "1606 Ih-35E",
        "City": "Carrollton",
        "State": "TX",
        "Zip": "75006",
        "Contact": "972-242-7681"
    },
    {
        "Mosque Name": "Islamic Association of Carrollton",
        "Address": "1901 Kelly Blvd",
        "City": "Carrollton",
        "State": "TX",
        "Zip": "75006",
        "Contact": "214-390-1120"
    },
    {
        "Mosque Name": "Madinah Masjid of Carrollton",
        "Address": "2180 Old Denton Rd.",
        "City": "Carrollton",
        "State": "TX",
        "Zip": "75006",
        "Contact": "972-466-1211"
    },
    {
        "Mosque Name": "Islamic Center of Brushy Creek",
        "Address": "1950 Brushy Creek Rd.",
        "City": "Cedar Park",
        "State": "TX",
        "Zip": "78613",
        "Contact": "512-850-4786"
    },
    {
        "Mosque Name": "Islamic Community of Bryan College Station",
        "Address": "417 Stasney St.",
        "City": "College Station",
        "State": "TX",
        "Zip": "77840",
        "Contact": "979-846-4222"
    },
    {
        "Mosque Name": "Isalmic Association of Mid Cities",
        "Address": "500 Cheek Sparger Rd.",
        "City": "Colleyville",
        "State": "TX",
        "Zip": "76034",
        "Contact": "817-788-8820"
    },
    {
        "Mosque Name": "East Texas Islamic Association",
        "Address": "1703 Live Oak St.",
        "City": "Commerce",
        "State": "TX",
        "Zip": "75428",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al-Ansaar",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Nz ",
        "Address": "15217 Sunset Trail",
        "City": "Conroe",
        "State": "TX",
        "Zip": "77384",
        "Contact": "832-741-7145"
    },
    {
        "Mosque Name": "Islamic Center of Conroe",
        "Address": "1108-A South Frazier",
        "City": "Conroe",
        "State": "TX",
        "Zip": "77301",
        "Contact": "936-539-5196"
    },
    {
        "Mosque Name": " Abul Qasim Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of South Texas ",
        "Address": "7341 Mcardle Rd.",
        "City": "Corpus Christi",
        "State": "TX",
        "Zip": "78412",
        "Contact": "361-992-8550"
    },
    {
        "Mosque Name": "Anwar Masjid",
        "Address": "1123 Spring Valley Rd.",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75240",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Quran",
        "Address": "2420 Cedar Crest Blvd",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75203",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Uthaymeen",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of South Dallas ",
        "Address": "2806 Martin Luther King Blvd",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75215",
        "Contact": "214-256-3202"
    },
    {
        "Mosque Name": "Dallas Masjid of Al-Islam",
        "Address": "2604 South Harwood Street",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75215",
        "Contact": "214-421-3839"
    },
    {
        "Mosque Name": "Islamic Community Center of N. Texas",
        "Address": "5767 Phoenix Ave.",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75231",
        "Contact": "214-336-7910"
    },
    {
        "Mosque Name": "Pleasant Grove Islamic Center",
        "Address": "1346 N. Masters Dr.",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75217",
        "Contact": "469-853-3189"
    },
    {
        "Mosque Name": "Mosque of Allah",
        "Address": "4752 Nome St.",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75216",
        "Contact": "214-372-3741"
    },
    {
        "Mosque Name": "Masjid Taqullah",
        "Address": "4737 Village Fair Rd.",
        "City": "Dallas",
        "State": "TX",
        "Zip": "75224",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Mosque At Texoma",
        "Address": "3601 Holly Dr.",
        "City": "Dennison",
        "State": "TX",
        "Zip": "75020",
        "Contact": "903-786-3366"
    },
    {
        "Mosque Name": "The Islamic Society of Denton",
        "Address": "1105 Green Lee St.",
        "City": "Denton",
        "State": "TX",
        "Zip": "76201",
        "Contact": "940-484-1871"
    },
    {
        "Mosque Name": "Islamic Association of Desoto",
        "Address": "1120 W. Beltline Rd.",
        "City": "Desoto",
        "State": "TX",
        "Zip": "75115",
        "Contact": "972-274-1101"
    },
    {
        "Mosque Name": "Dumas Musallah",
        "Address": "1332 Bruce Ave. No.56",
        "City": "Dumas",
        "State": "TX",
        "Zip": "79013",
        "Contact": ""
    },
    {
        "Mosque Name": " Duncanville Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid Al-Tawheed ",
        "Address": "1419 Acton Ave.",
        "City": "Duncanville",
        "State": "TX",
        "Zip": "75137",
        "Contact": "972-709-5042"
    },
    {
        "Mosque Name": " Masjid Al Redwan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Al-Khair Islamic Society of Rio Grande Valley ",
        "Address": "1910 Elsham Ave.",
        "City": "Edinburg",
        "State": "TX",
        "Zip": "78539",
        "Contact": "956-682-8278"
    },
    {
        "Mosque Name": "Islamic Center of El Paso",
        "Address": "143 Paragon Lane",
        "City": "El Paso",
        "State": "TX",
        "Zip": "79912",
        "Contact": "915-581-7729"
    },
    {
        "Mosque Name": "Islamic Association of Lewisville/Flower Mound",
        "Address": "3430 Peters Colony Rd.",
        "City": "Flower Mound",
        "State": "TX",
        "Zip": "75022",
        "Contact": "972-691-5566"
    },
    {
        "Mosque Name": "Masjid Hassan of Al-Islam",
        "Address": "1201 E Allen Ave",
        "City": "Fort Worth",
        "State": "TX",
        "Zip": "76104",
        "Contact": "817-923-5929"
    },
    {
        "Mosque Name": " Masjid Al-Ibrahimi",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Tarrant County ",
        "Address": "4901 Diaz Ave.",
        "City": "Fort Worth",
        "State": "TX",
        "Zip": "76107",
        "Contact": "817-737-8104"
    },
    {
        "Mosque Name": "Islamic Center of Al-Hedayah",
        "Address": "8601 Randol Mill Rd.",
        "City": "Fort Worth",
        "State": "TX",
        "Zip": "76120",
        "Contact": "817-265-6667"
    },
    {
        "Mosque Name": "Islamic Center of Watauga",
        "Address": "6001 Chapman Rd.",
        "City": "Fort Worth",
        "State": "TX",
        "Zip": "76248",
        "Contact": "816-656-0100"
    },
    {
        "Mosque Name": "Masjid Shakir Dawan",
        "Address": "2605 Ennis Ave.",
        "City": "Fort Worth",
        "State": "TX",
        "Zip": "76111",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Unity Center",
        "Address": "1207 Country Club Ln",
        "City": "Fort Worth",
        "State": "TX",
        "Zip": "76112",
        "Contact": "817-496-5281"
    },
    {
        "Mosque Name": " Dar Un Noor Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Fort Worth ",
        "Address": "5747 Westcreek Dr.",
        "City": "Fort Worth",
        "State": "TX",
        "Zip": "76133",
        "Contact": "817-294-1234"
    },
    {
        "Mosque Name": "Frisco Masjid",
        "Address": "6890 Main St. Suite F",
        "City": "Frisco",
        "State": "TX",
        "Zip": "75034",
        "Contact": "469-826-8985"
    },
    {
        "Mosque Name": " Galveston Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Galveston Islamic Society ",
        "Address": "921 Broadway St.",
        "City": "Galveston",
        "State": "TX",
        "Zip": "77550",
        "Contact": "409-750-8555"
    },
    {
        "Mosque Name": " Makkah Masjid of Garland",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Directions And Enhancement Assoc ",
        "Address": "3301 W. Buckingham Rd.",
        "City": "Garland",
        "State": "TX",
        "Zip": "75042",
        "Contact": "972-675-4000"
    },
    {
        "Mosque Name": "Masjid Yaseen",
        "Address": "1601 W. Campbell Rd.",
        "City": "Garland",
        "State": "TX",
        "Zip": "75044",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Mesquite",
        "Address": "5902 Duck Greek No.14",
        "City": "Garland",
        "State": "TX",
        "Zip": "75043",
        "Contact": "972-240-2783"
    },
    {
        "Mosque Name": "Imam Ali Islamic Center",
        "Address": "2330 Dalworth St.",
        "City": "Grand Prairie",
        "State": "TX",
        "Zip": "75050",
        "Contact": "972-206-0095"
    },
    {
        "Mosque Name": "Islamic Center of Hewitt",
        "Address": "319 S. Hewitt Dr.",
        "City": "Hewitt",
        "State": "TX",
        "Zip": "76643",
        "Contact": "254-750-6678"
    },
    {
        "Mosque Name": " Masjid Bilal",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Gr. Houston Sw Zone ",
        "Address": "11815 Adel Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77067",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Education Center",
        "Address": "2313 S. Voss Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77057",
        "Contact": "713-787-5000"
    },
    {
        "Mosque Name": " Wilcrest Musalla",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Swz ",
        "Address": "11246 Wilcrest Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77099",
        "Contact": "281-568-6615"
    },
    {
        "Mosque Name": " Mas Katy Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim American Society ",
        "Address": "1800 Baker Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77094",
        "Contact": "281-717-4622"
    },
    {
        "Mosque Name": " Spring Branch Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Northwest ",
        "Address": "1209 Conrad Sauer",
        "City": "Houston",
        "State": "TX",
        "Zip": "77043",
        "Contact": "713-464-4726"
    },
    {
        "Mosque Name": "Masjid Al Shareef",
        "Address": "7428 Lindencrest St.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77061",
        "Contact": "713-242-6969"
    },
    {
        "Mosque Name": "Markazi Imam Bargah Al-Murtaza",
        "Address": "14903-B Bellaire Blvd",
        "City": "Houston",
        "State": "TX",
        "Zip": "77083",
        "Contact": "281-564-7786"
    },
    {
        "Mosque Name": " Masjid Al-Quran",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mercy Community Center ",
        "Address": "5920 Hillcroft Suite C",
        "City": "Houston",
        "State": "TX",
        "Zip": "77036",
        "Contact": "713-780-2880"
    },
    {
        "Mosque Name": "Masjidul Mumineen",
        "Address": "8875 Benning Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77031",
        "Contact": "713-271-5221"
    },
    {
        "Mosque Name": "Masjid Ul Aala",
        "Address": "11951 Bissonnet St.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77099",
        "Contact": "281-568-5869"
    },
    {
        "Mosque Name": " Masjid Al-Ma Adah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Sz ",
        "Address": "6923 Almeda Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77021",
        "Contact": ""
    },
    {
        "Mosque Name": " North Shore Musalla",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Sez ",
        "Address": "13818 Brownsville St.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77015",
        "Contact": ""
    },
    {
        "Mosque Name": " Turkish Center Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Citadel Foundation ",
        "Address": "9301 W. Bellfort St.  Suite 102",
        "City": "Houston",
        "State": "TX",
        "Zip": "77031",
        "Contact": "713-988-8803"
    },
    {
        "Mosque Name": "Dar-E-Abbas",
        "Address": "12121 Vetern Memorial Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77067",
        "Contact": "832-283-9347"
    },
    {
        "Mosque Name": "Bait-Ul-Allah Masjid",
        "Address": "3823 Lydia",
        "City": "Houston",
        "State": "TX",
        "Zip": "77021",
        "Contact": ""
    },
    {
        "Mosque Name": "Muhammadi Masjid and Madrasah Darussalam",
        "Address": "11830 Corona Ln",
        "City": "Houston",
        "State": "TX",
        "Zip": "77072",
        "Contact": "281-498-6666"
    },
    {
        "Mosque Name": "Masjid-E-Quraish",
        "Address": "12419 Scarsdale Blvd",
        "City": "Houston",
        "State": "TX",
        "Zip": "77089",
        "Contact": "832-352-1992"
    },
    {
        "Mosque Name": " Jama Mecca Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Hijaz Foundation of America ",
        "Address": "15001 Beechnut St.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77083",
        "Contact": "281-564-8383"
    },
    {
        "Mosque Name": "Muslim American Society",
        "Address": "6226 Hwy 6 S",
        "City": "Houston",
        "State": "TX",
        "Zip": "77083",
        "Contact": "281-530-4627"
    },
    {
        "Mosque Name": "Madina Mosque",
        "Address": "7800 Bissonet St. No.110",
        "City": "Houston",
        "State": "TX",
        "Zip": "77074",
        "Contact": "713-981-1435"
    },
    {
        "Mosque Name": "Masjid Al-Muhaiman",
        "Address": "3103 Cleburne St.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77004",
        "Contact": ""
    },
    {
        "Mosque Name": "Al Noor Masjid",
        "Address": "6443 Prestwood",
        "City": "Houston",
        "State": "TX",
        "Zip": "77081",
        "Contact": "713-779-1304"
    },
    {
        "Mosque Name": "Islamic Society of Greater Houston",
        "Address": "3110 Eastside Dr",
        "City": "Houston",
        "State": "TX",
        "Zip": "77098",
        "Contact": "713-524-6615"
    },
    {
        "Mosque Name": "Madrassah Islamiah",
        "Address": "6665 Bintliff Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77074",
        "Contact": "713-534-2376"
    },
    {
        "Mosque Name": "Talim Muhammad Masjid",
        "Address": "505 E. 40 1/2 St.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77022",
        "Contact": "713-694-5728"
    },
    {
        "Mosque Name": "Masjid El-Farouq",
        "Address": "1207 Conrad Sauer Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77043",
        "Contact": "713-465-2020"
    },
    {
        "Mosque Name": " Masjid Al-Rasool Al-Akram",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Propagation Foundation ",
        "Address": "9300 S. Course Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77099",
        "Contact": "281-988-0330"
    },
    {
        "Mosque Name": " Masjid  Al-Mustafa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Nwz ",
        "Address": "17250 Coventry Park Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77084",
        "Contact": "281-859-8203"
    },
    {
        "Mosque Name": "Madrasah Al-Quran",
        "Address": "6540 Tarnef Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77074",
        "Contact": "713-777-4255"
    },
    {
        "Mosque Name": "Makkah Masjid",
        "Address": "3505 Dairy Ashford Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77082",
        "Contact": "281-496-5225"
    },
    {
        "Mosque Name": "Southeast Zone-Mission Bend",
        "Address": "6265 Hwy. 6 South",
        "City": "Houston",
        "State": "TX",
        "Zip": "77083",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Salahuddin",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Association of Islamic Charitable Projects ",
        "Address": "5645 Hillcroft Ave.  Suite 305",
        "City": "Houston",
        "State": "TX",
        "Zip": "77036",
        "Contact": "713-785-5779"
    },
    {
        "Mosque Name": "Islamic Dawah Center",
        "Address": "201 Travis St.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77002",
        "Contact": "713-223-3311"
    },
    {
        "Mosque Name": "Clear Lake Islamic Center",
        "Address": "18026 Upper Bay Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77058",
        "Contact": "281-333-8305"
    },
    {
        "Mosque Name": "Ansarudeen Sw Branch",
        "Address": "14411 Laterna Lane",
        "City": "Houston",
        "State": "TX",
        "Zip": "77083",
        "Contact": "832-715-4402"
    },
    {
        "Mosque Name": "Mas Youth Center Clear Lake",
        "Address": "16302 Sealark Rd. Suite C",
        "City": "Houston",
        "State": "TX",
        "Zip": "77062",
        "Contact": "281-461-4627"
    },
    {
        "Mosque Name": "Houston Masjid of Al-Islam",
        "Address": "6641 Bellfort",
        "City": "Houston",
        "State": "TX",
        "Zip": "77087",
        "Contact": "713-649-7789"
    },
    {
        "Mosque Name": " Masjid Hamza",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Swz ",
        "Address": "6233 Tres Lagunas Dr.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77083",
        "Contact": "281-575-9554"
    },
    {
        "Mosque Name": "Islamic Center",
        "Address": "6515 Hillcroft",
        "City": "Houston",
        "State": "TX",
        "Zip": "77081",
        "Contact": "832-206-2718"
    },
    {
        "Mosque Name": " Masjid Abu Bakr Siddique",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Southeast Zone ",
        "Address": "8830 Old Galveston Rd",
        "City": "Houston",
        "State": "TX",
        "Zip": "77034",
        "Contact": "713-947-0394"
    },
    {
        "Mosque Name": "Nasfat Masjid",
        "Address": "9360 Kegan Rd.",
        "City": "Houston",
        "State": "TX",
        "Zip": "77099",
        "Contact": "281-530-9737"
    },
    {
        "Mosque Name": "Ghouse Azam Islamic Center",
        "Address": "7211 Fm 1960 No.180",
        "City": "Humble",
        "State": "TX",
        "Zip": "77338",
        "Contact": "281-540-8760"
    },
    {
        "Mosque Name": "Dar Alhuda Islamic Center",
        "Address": "1245 Karla Dr.",
        "City": "Hurst",
        "State": "TX",
        "Zip": "76053",
        "Contact": "817-280-0201"
    },
    {
        "Mosque Name": "Islamic Center of Irving",
        "Address": "2555 Esters Rd.",
        "City": "Irving",
        "State": "TX",
        "Zip": "75062",
        "Contact": "972-812-2230"
    },
    {
        "Mosque Name": "Dfw Islamic Center",
        "Address": "4019 Jackson St.",
        "City": "Irving",
        "State": "TX",
        "Zip": "75061",
        "Contact": "972-986-7126"
    },
    {
        "Mosque Name": "Valley Ranch Masjid",
        "Address": "9940 Valley Ranch Pkwy W",
        "City": "Irving",
        "State": "TX",
        "Zip": "75063",
        "Contact": "214-496-9000"
    },
    {
        "Mosque Name": "Islamic Center of Momin",
        "Address": "1019 Perry St.",
        "City": "Irving",
        "State": "TX",
        "Zip": "75061",
        "Contact": "972-554-0200"
    },
    {
        "Mosque Name": "Tayyaba Mosque",
        "Address": "21925 Franz Rd. Suite 601",
        "City": "Katy",
        "State": "TX",
        "Zip": "77449",
        "Contact": "281-347-3426"
    },
    {
        "Mosque Name": "Masjid Al-Ahad",
        "Address": "19214 Clay Rd.",
        "City": "Katy",
        "State": "TX",
        "Zip": "77449",
        "Contact": "713-459-9339"
    },
    {
        "Mosque Name": " Masjid Aqsa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Cinco Ranch Islamic Center ",
        "Address": "2810 Saddlehorn Trail",
        "City": "Katy",
        "State": "TX",
        "Zip": "77494",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Community of Greater Killen",
        "Address": "5800 S. Hood  Hwy. 195",
        "City": "Killen",
        "State": "TX",
        "Zip": "76542",
        "Contact": "254-634-8799"
    },
    {
        "Mosque Name": "Islamic Society of Kingsville",
        "Address": "702 West B Ave.",
        "City": "Kingsville",
        "State": "TX",
        "Zip": "78363",
        "Contact": "361-592-7870"
    },
    {
        "Mosque Name": "Islamic Center of Laredo",
        "Address": "5719 Springfield",
        "City": "Laredo",
        "State": "TX",
        "Zip": "78041",
        "Contact": ""
    },
    {
        "Mosque Name": "League City Islamic Center",
        "Address": "118 Mckibben Lane",
        "City": "League City",
        "State": "TX",
        "Zip": "77573",
        "Contact": "832-217-0027"
    },
    {
        "Mosque Name": "Islamic Cultural and Students Masjid",
        "Address": "2222 15th St.",
        "City": "Lubbock",
        "State": "TX",
        "Zip": "79401",
        "Contact": "806-797-8026"
    },
    {
        "Mosque Name": "Islamic Center of the South Plains",
        "Address": "3419 La Salle Ave",
        "City": "Lubbock",
        "State": "TX",
        "Zip": "79406",
        "Contact": "806-797-8026"
    },
    {
        "Mosque Name": "Islamic Circle of East Texas",
        "Address": "208 White Ave.",
        "City": "Lufkin",
        "State": "TX",
        "Zip": "75904",
        "Contact": "936-634-9463"
    },
    {
        "Mosque Name": " Masjid Umar Al-Farooq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of South Texas ",
        "Address": "2008 N. Ware Rd.",
        "City": "Mcallen",
        "State": "TX",
        "Zip": "78501",
        "Contact": "956-618-4180"
    },
    {
        "Mosque Name": "Mckinney Islamic Association",
        "Address": "1799 N. Graves St.",
        "City": "Mckinney",
        "State": "TX",
        "Zip": "75069",
        "Contact": "469-450-4444"
    },
    {
        "Mosque Name": "Mesquite Islamic Center",
        "Address": "2419 Franklin Dr.",
        "City": "Mesquite",
        "State": "TX",
        "Zip": "75150",
        "Contact": "214-415-1446"
    },
    {
        "Mosque Name": "Islamic Center of Permian Basin",
        "Address": "5010 W. Loop 250 N No.10F",
        "City": "Midland",
        "State": "TX",
        "Zip": "79707",
        "Contact": "432-520-3751"
    },
    {
        "Mosque Name": "Islamic Association of West Texas",
        "Address": "1200 S. Midland Dr.",
        "City": "Midland",
        "State": "TX",
        "Zip": "79703",
        "Contact": "432-520-4689"
    },
    {
        "Mosque Name": " Riad Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Murphy ",
        "Address": "601 Pheasant Run Dr. Suite 299",
        "City": "Murphy",
        "State": "TX",
        "Zip": "75094",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Haqq",
        "Address": "2723 Alaska Ave.",
        "City": "Oak Cliff",
        "State": "TX",
        "Zip": "75216",
        "Contact": ""
    },
    {
        "Mosque Name": " Pearland Musalla",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Sez ",
        "Address": "6057 W. Broadway St.",
        "City": "Pearland",
        "State": "TX",
        "Zip": "77581",
        "Contact": "281-412-0478"
    },
    {
        "Mosque Name": "East Plano Islamic Center",
        "Address": "1360 Star Court",
        "City": "Plano",
        "State": "TX",
        "Zip": "75074",
        "Contact": "972-824-0563"
    },
    {
        "Mosque Name": "Institute of Islamic Learning In Metroplex",
        "Address": "2109 W. Parker Rd. No.220",
        "City": "Plano",
        "State": "TX",
        "Zip": "75023",
        "Contact": ""
    },
    {
        "Mosque Name": "Mas Youth Center",
        "Address": "740 F Ave. No.363",
        "City": "Plano",
        "State": "TX",
        "Zip": "75074",
        "Contact": "972-633-9692"
    },
    {
        "Mosque Name": " Plano Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Collin County ",
        "Address": "6401 Independence Pkwy",
        "City": "Plano",
        "State": "TX",
        "Zip": "75023",
        "Contact": "972-491-5800"
    },
    {
        "Mosque Name": "Darul Uloom Azizia",
        "Address": "1251 Shilo Rd.",
        "City": "Plano",
        "State": "TX",
        "Zip": "75074",
        "Contact": "972-423-5786"
    },
    {
        "Mosque Name": "Islamic Center of Port Arthur",
        "Address": "1100 Gulway Dr.",
        "City": "Port Arthur",
        "State": "TX",
        "Zip": "77640",
        "Contact": "409-982-5176"
    },
    {
        "Mosque Name": "Jam Atus Salam Masjid",
        "Address": "22001 E. Martin Dr.",
        "City": "Porter",
        "State": "TX",
        "Zip": "77365",
        "Contact": "281-354-6400"
    },
    {
        "Mosque Name": " Dallas Central Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of N Texas ",
        "Address": "840 Abrams Rd",
        "City": "Richardson",
        "State": "TX",
        "Zip": "75083",
        "Contact": "972-231-5698"
    },
    {
        "Mosque Name": "Bilal Ethiopian Muslim Center",
        "Address": "2146 E. Beltline (Jupiter Plaza Shopping Center)",
        "City": "Richardson",
        "State": "TX",
        "Zip": "75081",
        "Contact": "972-231-0760"
    },
    {
        "Mosque Name": "Islamic Center of Round Rock",
        "Address": "1951 Hampton Lane",
        "City": "Round Rock",
        "State": "TX",
        "Zip": "78664",
        "Contact": "512-659-1171"
    },
    {
        "Mosque Name": "Masjid Ibn Baz",
        "Address": "5622 Evers Rd.  Vista Del Rey Apts No.2604",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78238",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Bilal Bin Rabah",
        "Address": "818 West Ave.",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78201",
        "Contact": "210-519-6610"
    },
    {
        "Mosque Name": " Al-Madinah Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Children Education And Civic Center ",
        "Address": "5281 Casa Bella St.",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78249",
        "Contact": "210-877-0199"
    },
    {
        "Mosque Name": "Zainabia Islamic Education Center",
        "Address": "5005 Timberhill Dr.",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78238",
        "Contact": "210-618-8978"
    },
    {
        "Mosque Name": "Masjid Luqman",
        "Address": "1702 Hayes",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78202",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Education Center of San Antonio",
        "Address": "7310 Blanco Rd.",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78216",
        "Contact": "210-373-4253"
    },
    {
        "Mosque Name": "Islamic Association of Bexar County",
        "Address": "8671 S.W. Loop 410 No.597",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78242",
        "Contact": "210-623-3551"
    },
    {
        "Mosque Name": "Islamic Center of San Antonio",
        "Address": "8638 Fairhaven St.",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78229",
        "Contact": "210-614-0989"
    },
    {
        "Mosque Name": "Masjed Beit El Magdes",
        "Address": "7627 Culebra Rd.",
        "City": "San Antonio",
        "State": "TX",
        "Zip": "78251",
        "Contact": "210-543-2222"
    },
    {
        "Mosque Name": "San Marcos Mosque",
        "Address": "434 N. Comanche St.",
        "City": "San Marcos",
        "State": "TX",
        "Zip": "78666",
        "Contact": "512-589-7149"
    },
    {
        "Mosque Name": " Masjid As-Salam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Nz ",
        "Address": "16700 Old Louetta Rd.",
        "City": "Spring",
        "State": "TX",
        "Zip": "77379",
        "Contact": "281-257-2575"
    },
    {
        "Mosque Name": "Woodlands Islamic Community Center",
        "Address": "1701 Sawdust Rd.",
        "City": "Spring",
        "State": "TX",
        "Zip": "77380",
        "Contact": "713-540-7586"
    },
    {
        "Mosque Name": "Faizane-Madinah",
        "Address": "12829 Capricorn St.",
        "City": "Stafford",
        "State": "TX",
        "Zip": "77477",
        "Contact": "713-459-1581"
    },
    {
        "Mosque Name": " Masjid As-Sabireen",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh Sz ",
        "Address": "610 Brand Ln",
        "City": "Stafford",
        "State": "TX",
        "Zip": "77477",
        "Contact": "281-261-6615"
    },
    {
        "Mosque Name": " Maryam Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Isgh ",
        "Address": "600 Sartartia Rd.",
        "City": "Sugarland",
        "State": "TX",
        "Zip": "77002",
        "Contact": "713-459-5700"
    },
    {
        "Mosque Name": "Masjid Dhu L-Nurayn",
        "Address": "3527 Hwy 6 Suite 6",
        "City": "Sugarland",
        "State": "TX",
        "Zip": "77478",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Attaqwa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Gr Houston N Zone ",
        "Address": "10415 Synott Rd.",
        "City": "Sugarland",
        "State": "TX",
        "Zip": "77478",
        "Contact": "281-495-3403"
    },
    {
        "Mosque Name": "Masjid-E-Iqbal",
        "Address": "3527 Tx Hwy 6",
        "City": "Sugarland",
        "State": "TX",
        "Zip": "77478",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Central Texas",
        "Address": "3033 Kegley Rd.",
        "City": "Temple",
        "State": "TX",
        "Zip": "76502",
        "Contact": "254-742-0262"
    },
    {
        "Mosque Name": "Masjid Al-Fattah",
        "Address": "2506 25th Ave. N Suite 2",
        "City": "Texas City",
        "State": "TX",
        "Zip": "77590",
        "Contact": "409-945-9851"
    },
    {
        "Mosque Name": "Al-Mustafa Center",
        "Address": "5201 S. Colony Blvd No.120",
        "City": "The Colony",
        "State": "TX",
        "Zip": "75056",
        "Contact": ""
    },
    {
        "Mosque Name": "East Texas Islamic Society",
        "Address": "10569 State Hwy 64 S",
        "City": "Tyler",
        "State": "TX",
        "Zip": "75707",
        "Contact": "903-566-0606"
    },
    {
        "Mosque Name": "Victoria Islamic Center",
        "Address": "201 E. Airline Rd.",
        "City": "Victoria",
        "State": "TX",
        "Zip": "77901",
        "Contact": "361-575-1001"
    },
    {
        "Mosque Name": " Masjid-E-Siddiq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Waco ",
        "Address": "2725 Benton Dr",
        "City": "Waco",
        "State": "TX",
        "Zip": "76706",
        "Contact": "254-723-6556"
    },
    {
        "Mosque Name": " Masjid A-Sahaabah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Association of Fort Worth ",
        "Address": "6005 Chapman Rd.",
        "City": "Watauga",
        "State": "TX",
        "Zip": "76148",
        "Contact": "817-605-0863"
    },
    {
        "Mosque Name": " Asia Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â American Society For Islamic Awareness ",
        "Address": "618 Barringer Ln",
        "City": "Webster",
        "State": "TX",
        "Zip": "77598",
        "Contact": "281-480-2800"
    },
    {
        "Mosque Name": "Rio Grande Valley Islamic Center",
        "Address": "504 E. Pike Blvd",
        "City": "Weslaco",
        "State": "TX",
        "Zip": "78596",
        "Contact": "956-969-8549"
    },
    {
        "Mosque Name": "Islamic Association of Wichita Falls",
        "Address": "1701 Trigg Lane",
        "City": "Wichita Falls",
        "State": "TX",
        "Zip": "76306",
        "Contact": ""
    },
    {
        "Mosque Name": "Wylie Musallah",
        "Address": "3990 Lakeway Dr. No.112",
        "City": "Wylie",
        "State": "TX",
        "Zip": "75098",
        "Contact": "214-799-1112"
    },
    {
        "Mosque Name": " Layton Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Salt Lake ",
        "Address": "568 W. 2400 N",
        "City": "Layton",
        "State": "UT",
        "Zip": "84041",
        "Contact": ""
    },
    {
        "Mosque Name": " Logan Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Salt Lake ",
        "Address": "748 North 600 East",
        "City": "Logan",
        "State": "UT",
        "Zip": "84321",
        "Contact": "435-753-2491"
    },
    {
        "Mosque Name": " Masjid As-Salaam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Ogden Valley ",
        "Address": "1061 23Rd St.",
        "City": "Ogden",
        "State": "UT",
        "Zip": "84401",
        "Contact": "801-392-1515"
    },
    {
        "Mosque Name": " Masjid Al-Noor",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Salt Lake City ",
        "Address": "740 S 700 E",
        "City": "Salt Lake City",
        "State": "UT",
        "Zip": "84102",
        "Contact": "801-364-7822"
    },
    {
        "Mosque Name": "Islamic Society of Bosniaks",
        "Address": "427 E 3300 S  Suite D",
        "City": "Salt Lake City",
        "State": "UT",
        "Zip": "84115",
        "Contact": "801-746-7172"
    },
    {
        "Mosque Name": "Utah Islamic Center",
        "Address": "235 W 9000 S",
        "City": "Sandy",
        "State": "UT",
        "Zip": "84070",
        "Contact": "801-255-2212"
    },
    {
        "Mosque Name": "Masjid Al-Huda",
        "Address": "470 E. Stanley Ave.",
        "City": "South Salt Lake",
        "State": "UT",
        "Zip": "84115",
        "Contact": "801-463-4631"
    },
    {
        "Mosque Name": "Alrasool Islamic Center",
        "Address": "1247 W. 4800 S",
        "City": "Taylorsville",
        "State": "UT",
        "Zip": "84123",
        "Contact": "801-266-0518"
    },
    {
        "Mosque Name": " Khadeeja Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Greater Salt Lake ",
        "Address": "1019 W. Parkway Ave.",
        "City": "West Valley City",
        "State": "UT",
        "Zip": "84119",
        "Contact": "801-972-6555"
    },
    {
        "Mosque Name": "Islamic Society of Vermont",
        "Address": "182 Hegeman Suite 1",
        "City": "Colchester",
        "State": "VT",
        "Zip": "5446",
        "Contact": "802-655-6711"
    },
    {
        "Mosque Name": "Qureshi Masjid",
        "Address": "6020 Richmond Hwy",
        "City": "Alexanderia",
        "State": "VA",
        "Zip": "22203",
        "Contact": "703-992-3851"
    },
    {
        "Mosque Name": " Icna Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Icna ",
        "Address": "2913 Woodlawn Trail",
        "City": "Alexandria",
        "State": "VA",
        "Zip": "22306",
        "Contact": "703-660-1255"
    },
    {
        "Mosque Name": "Virginia Islamic Center",
        "Address": "2801 Park Center Dr.",
        "City": "Alexandria",
        "State": "VA",
        "Zip": "22302",
        "Contact": "703-931-1054"
    },
    {
        "Mosque Name": "Masjid Mustafa",
        "Address": "6844 Braddock Road",
        "City": "Annandale",
        "State": "VA",
        "Zip": "22003",
        "Contact": "703-658-7134"
    },
    {
        "Mosque Name": "Baitul Mukkaram Masjid",
        "Address": "2116 S. Nelson St.",
        "City": "Arlington",
        "State": "VA",
        "Zip": "22204",
        "Contact": "703-778-1550"
    },
    {
        "Mosque Name": " Adams-Ashburn Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Adams ",
        "Address": "21740 Beaumeade Circle",
        "City": "Ashburn",
        "State": "VA",
        "Zip": "20147",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al-Ihsan",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of New River Valley ",
        "Address": "1284 N. Main St.",
        "City": "Blacksburg",
        "State": "VA",
        "Zip": "24060",
        "Contact": "540-961-5210"
    },
    {
        "Mosque Name": " Masjid Al-Hedaya",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Blacksburg ",
        "Address": "106-B Southpark Dr.",
        "City": "Blacksburg",
        "State": "VA",
        "Zip": "24060",
        "Contact": "540-953-4622"
    },
    {
        "Mosque Name": "Chantille Islamic Center",
        "Address": "14640 Flint Lee Rd. Unit C",
        "City": "Chantilly",
        "State": "VA",
        "Zip": "20151",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Darul Iman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Society of Central Virginia ",
        "Address": "118 Ten 1/2 Street  Nw",
        "City": "Charlottesville",
        "State": "VA",
        "Zip": "22903",
        "Contact": ""
    },
    {
        "Mosque Name": "United Community of Al-Islam",
        "Address": "1060 Cascade St.",
        "City": "Chesapeake",
        "State": "VA",
        "Zip": "23324",
        "Contact": "757-543-8973"
    },
    {
        "Mosque Name": "Tricities Islamic Center",
        "Address": "1710 East Hundred Rd.",
        "City": "Chester",
        "State": "VA",
        "Zip": "23836",
        "Contact": ""
    },
    {
        "Mosque Name": " Danville Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â At-Taqwa Islamic Center ",
        "Address": "259 Piney Forest Rd.",
        "City": "Danville",
        "State": "VA",
        "Zip": "24541",
        "Contact": "434-793-4016"
    },
    {
        "Mosque Name": " Dar Ul-Ghuraba",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Masjid Ur Rahmah For Dawah And Islamic Affairs ",
        "Address": "155 Baker St.",
        "City": "Emporia",
        "State": "VA",
        "Zip": "23847",
        "Contact": "434-336-1025"
    },
    {
        "Mosque Name": "Islamic Center Northern Virginia",
        "Address": "4420 Shirley Gate Rd.",
        "City": "Fairfax",
        "State": "VA",
        "Zip": "22030",
        "Contact": "703-591-0999"
    },
    {
        "Mosque Name": "Dar Al Hijrah",
        "Address": "3159 Row St",
        "City": "Falls Church",
        "State": "VA",
        "Zip": "22044",
        "Contact": "703-536-1030"
    },
    {
        "Mosque Name": "Moroccan Islamic Center",
        "Address": "5613 Leesburg Pike Suite 1",
        "City": "Falls Church",
        "State": "VA",
        "Zip": "22041",
        "Contact": ""
    },
    {
        "Mosque Name": " Masjid Al Taqwa",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Fredricksburg ",
        "Address": "7020 Harrison Rd.",
        "City": "Fredricksburg",
        "State": "VA",
        "Zip": "22407",
        "Contact": "540-786-5972"
    },
    {
        "Mosque Name": " Icr Twin Hickory",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Richmond ",
        "Address": "5320 Twin Hickory Rd.",
        "City": "Glen Allen",
        "State": "VA",
        "Zip": "23059",
        "Contact": "804-273-9293"
    },
    {
        "Mosque Name": "West End Islamic Center",
        "Address": "5000 Shady Grove Rd.",
        "City": "Glen Allen",
        "State": "VA",
        "Zip": "23059",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Richmond",
        "Address": "8481 Hungary Rd.",
        "City": "Glen Allen",
        "State": "VA",
        "Zip": "23060",
        "Contact": "804-273-9293"
    },
    {
        "Mosque Name": "Muslim Community of Tidewater",
        "Address": "530 Lasalle Ave",
        "City": "Hampton",
        "State": "VA",
        "Zip": "23661",
        "Contact": ""
    },
    {
        "Mosque Name": "Mosque And Islamic Center of Hampton Roads",
        "Address": "22 Tide Mill Ln",
        "City": "Hampton",
        "State": "VA",
        "Zip": "23666",
        "Contact": "757-838-4756"
    },
    {
        "Mosque Name": "Islamic Assoc. of Shenandoah Valley",
        "Address": "1330 Country Club Road",
        "City": "Harrisonburg",
        "State": "VA",
        "Zip": "22802",
        "Contact": "540-433-8186"
    },
    {
        "Mosque Name": "Islamic Center of Central Virginia",
        "Address": "1718 15th St.",
        "City": "Lynchburg",
        "State": "VA",
        "Zip": "24501",
        "Contact": ""
    },
    {
        "Mosque Name": "Greater Lynchburg Islamic Association",
        "Address": "1105 Airport Rd.",
        "City": "Lynchburg",
        "State": "VA",
        "Zip": "24502",
        "Contact": "434-841-6829"
    },
    {
        "Mosque Name": "Imam Mehdi Center",
        "Address": "2035 Shallow Well Rd.",
        "City": "Manakin Sabot",
        "State": "VA",
        "Zip": "23103",
        "Contact": "804-784-4377"
    },
    {
        "Mosque Name": "Tawheed Center",
        "Address": "9720 Capital Ct.  Suite 109",
        "City": "Manassas",
        "State": "VA",
        "Zip": "20110",
        "Contact": "703-906-8566"
    },
    {
        "Mosque Name": "Dar Al Salaam Mosque",
        "Address": "15250 Dumfries Road",
        "City": "Manassas",
        "State": "VA",
        "Zip": "22112",
        "Contact": "703-670-0707"
    },
    {
        "Mosque Name": " Dar Al-Noor Islamic Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Association of Virginia ",
        "Address": "5404 Hoadly Rd.",
        "City": "Manassas",
        "State": "VA",
        "Zip": "20112",
        "Contact": "703-580-0808"
    },
    {
        "Mosque Name": "Prince William Islamic Center",
        "Address": "9002 Mathis Ave.",
        "City": "Manassas",
        "State": "VA",
        "Zip": "20110",
        "Contact": "703-330-3556"
    },
    {
        "Mosque Name": "Manassas Mosque",
        "Address": "12950 Center Entrance Court",
        "City": "Manassas",
        "State": "VA",
        "Zip": "22112",
        "Contact": "703-257-5537"
    },
    {
        "Mosque Name": "Mclean Islamic Center",
        "Address": "1340 Old Chain Bridge",
        "City": "Mclean",
        "State": "VA",
        "Zip": "22101",
        "Contact": "571-241-0073"
    },
    {
        "Mosque Name": "Islamic Center of South Boston",
        "Address": "8145 Chatham Rd.",
        "City": "Nathalie",
        "State": "VA",
        "Zip": "24577",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Al-Haqq",
        "Address": "5002 Jefferson Ave.",
        "City": "Newport News",
        "State": "VA",
        "Zip": "23605",
        "Contact": "757-652-3595"
    },
    {
        "Mosque Name": "Masjid Ash-Shura",
        "Address": "3518 Colley Ave.",
        "City": "Norfolk",
        "State": "VA",
        "Zip": "23508",
        "Contact": "757-714-5705"
    },
    {
        "Mosque Name": "Masjid William Salaam",
        "Address": "614 W. 35th St.",
        "City": "Norfolk",
        "State": "VA",
        "Zip": "23501",
        "Contact": "757-626-0734"
    },
    {
        "Mosque Name": " Islamic Center of Tidewater",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Old Dominion University Islamic Center ",
        "Address": "1442 W. 49th St.",
        "City": "Norfolk",
        "State": "VA",
        "Zip": "23508",
        "Contact": "757-423-8609"
    },
    {
        "Mosque Name": "Petersburg Islamic Center",
        "Address": "630 S. Jones",
        "City": "Petersburg",
        "State": "VA",
        "Zip": "23803",
        "Contact": "804-943-5199"
    },
    {
        "Mosque Name": "United Community of Al-Islam In Portsmouth",
        "Address": "449 Martin Luther King Fwy",
        "City": "Portsmouth",
        "State": "VA",
        "Zip": "23704",
        "Contact": ""
    },
    {
        "Mosque Name": "Muslims of America",
        "Address": "242 Sheikh Gilani Lane",
        "City": "Red House",
        "State": "VA",
        "Zip": "23963",
        "Contact": "434-248-6016"
    },
    {
        "Mosque Name": " Adams-S. Reston Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Adams ",
        "Address": "12343 Sunrise Valley Rd. Suite B",
        "City": "Reston",
        "State": "VA",
        "Zip": "20191",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Ar-Rahman",
        "Address": "1305 Hull St.",
        "City": "Richmond",
        "State": "VA",
        "Zip": "23224",
        "Contact": "804-291-3800"
    },
    {
        "Mosque Name": "Islamic Society of Greater Richmond",
        "Address": "6324 Rigsby Rd.",
        "City": "Richmond",
        "State": "VA",
        "Zip": "23226",
        "Contact": "804-673-4177"
    },
    {
        "Mosque Name": "Masjidullah of Richmond",
        "Address": "2201 North Ave.",
        "City": "Richmond",
        "State": "VA",
        "Zip": "23222",
        "Contact": "804-321-8864"
    },
    {
        "Mosque Name": "Masjid Bilal",
        "Address": "400 Chimbrazo Blvd",
        "City": "Richmond",
        "State": "VA",
        "Zip": "23223",
        "Contact": "804-222-9825"
    },
    {
        "Mosque Name": "Islamic Center of Virginia",
        "Address": "1241 Bufford Road",
        "City": "Richmond",
        "State": "VA",
        "Zip": "23235",
        "Contact": "804-320-7333"
    },
    {
        "Mosque Name": "Masjid Annur",
        "Address": "3718 Salem Tpke Nw",
        "City": "Roanoke",
        "State": "VA",
        "Zip": "24017",
        "Contact": "540-342-7688"
    },
    {
        "Mosque Name": "The Clarence Sabree Islamic Center",
        "Address": "210 2Nd St. Sw",
        "City": "Roanoke",
        "State": "VA",
        "Zip": "24011",
        "Contact": ""
    },
    {
        "Mosque Name": "Darul Huda",
        "Address": "6666 Commerce Street",
        "City": "Springfield",
        "State": "VA",
        "Zip": "22150",
        "Contact": "703-922-0111"
    },
    {
        "Mosque Name": " Imam E Asr Islamic Seminary",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Siraj Isalmic Center ",
        "Address": "7817 Odell St.",
        "City": "Springfield",
        "State": "VA",
        "Zip": "22153",
        "Contact": "703-927-1944"
    },
    {
        "Mosque Name": "Islamic Foundation of America",
        "Address": "6606 Electronic Dr.",
        "City": "Springfield",
        "State": "VA",
        "Zip": "22151",
        "Contact": "703-914-4982"
    },
    {
        "Mosque Name": " Imam Ali Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Mohammadia Center of Virginia ",
        "Address": "7900 Backlick Rd.",
        "City": "Springfield",
        "State": "VA",
        "Zip": "22150",
        "Contact": ""
    },
    {
        "Mosque Name": "Masjid Noor",
        "Address": "8608 Pohick Rd.",
        "City": "Springfield",
        "State": "VA",
        "Zip": "22153",
        "Contact": "703-451-7615"
    },
    {
        "Mosque Name": "Madina Islamic Center",
        "Address": "6805 Backlick Rd.",
        "City": "Springfield",
        "State": "VA",
        "Zip": "22150",
        "Contact": "703-451-4612"
    },
    {
        "Mosque Name": "Islamic Center of Winchester",
        "Address": "420 Stephenson Rd.",
        "City": "Stephenson",
        "State": "VA",
        "Zip": "22656",
        "Contact": "540-550-2685"
    },
    {
        "Mosque Name": " Adams Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â All Dulles Area Muslim Society ",
        "Address": "46903 Sugarland Rd.",
        "City": "Sterling",
        "State": "VA",
        "Zip": "20164",
        "Contact": "703-433-1325"
    },
    {
        "Mosque Name": "Islamic Heritage Center",
        "Address": "262 Cedar Lane A-3",
        "City": "Vienna",
        "State": "VA",
        "Zip": "22180",
        "Contact": "703-206-9056"
    },
    {
        "Mosque Name": "Crescent Community Center",
        "Address": "1429 Lynnhaven Pkwy Suite 101",
        "City": "Virginia Beach",
        "State": "VA",
        "Zip": "23453",
        "Contact": "757-368-2525"
    },
    {
        "Mosque Name": "Masjid Abdul Aziz of Williamsburg",
        "Address": "2692A John Tyler Hwy",
        "City": "Willamsburg",
        "State": "VA",
        "Zip": "23185",
        "Contact": "757-564-1659"
    },
    {
        "Mosque Name": "Islamic Society of Winchester",
        "Address": "601 Woodstock Lane",
        "City": "Winchester",
        "State": "VA",
        "Zip": "22601",
        "Contact": "540-869-6401"
    },
    {
        "Mosque Name": "Islamic Community Center of Northern Virginia",
        "Address": "14505 Jefferson Davis Hwy Unit No.8",
        "City": "Woodbridge",
        "State": "VA",
        "Zip": "22191",
        "Contact": "703-490-5080"
    },
    {
        "Mosque Name": "Islamic Center of Eastside",
        "Address": "14700 Main St.",
        "City": "Bellevue",
        "State": "WA",
        "Zip": "98007",
        "Contact": "425-746-0398"
    },
    {
        "Mosque Name": "Islamic Society of Whatcom",
        "Address": "1244 Nevada",
        "City": "Bellingham",
        "State": "WA",
        "Zip": "98229",
        "Contact": "360-752-9399"
    },
    {
        "Mosque Name": "Islamic Center of Bothell",
        "Address": "10130B Main St.",
        "City": "Bothell",
        "State": "WA",
        "Zip": "98011",
        "Contact": "206-235-8969"
    },
    {
        "Mosque Name": "Everett Muslim Community Center",
        "Address": "500 Se Everett Mall Way Suite B110",
        "City": "Everett",
        "State": "WA",
        "Zip": "92808",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Everett",
        "Address": "818 W. Casino Rd.",
        "City": "Everett",
        "State": "WA",
        "Zip": "98204",
        "Contact": "425-355-3362"
    },
    {
        "Mosque Name": "Masjid Al-Rahman",
        "Address": "5705 Evergreen Way Suite 102-C",
        "City": "Everett",
        "State": "WA",
        "Zip": "98203",
        "Contact": "425-274-6383"
    },
    {
        "Mosque Name": "Islamic Center of Federal Way",
        "Address": "31140 Pacific Hwy S",
        "City": "Federal Way",
        "State": "WA",
        "Zip": "98003",
        "Contact": "253-222-0009"
    },
    {
        "Mosque Name": "Islamic Center of Kent",
        "Address": "20857 108th Ave. Se",
        "City": "Kent",
        "State": "WA",
        "Zip": "98031",
        "Contact": "253-850-2260"
    },
    {
        "Mosque Name": "Iman Center",
        "Address": "515 State St.",
        "City": "Kirkland",
        "State": "WA",
        "Zip": "98033",
        "Contact": "206-202-4626"
    },
    {
        "Mosque Name": " Masjid Feidul-Islam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Olympia Lacey Islamic Center ",
        "Address": "7945 Pacific Ave. Se",
        "City": "Lacey",
        "State": "WA",
        "Zip": "98503",
        "Contact": "360-438-3570"
    },
    {
        "Mosque Name": " Zainab Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Zainab Organization of Greater Seattle ",
        "Address": "5723 198th St. Sw",
        "City": "Lynnwood",
        "State": "WA",
        "Zip": "98036",
        "Contact": ""
    },
    {
        "Mosque Name": " Dar Alarqam",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Evergreen Islamic Institute ",
        "Address": "6210 188th St. Sw",
        "City": "Lynnwood",
        "State": "WA",
        "Zip": "98037",
        "Contact": "425-774-8852"
    },
    {
        "Mosque Name": " Masjid Umar Al-Farooq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Association of Northwest ",
        "Address": "5507 238th St. Sw",
        "City": "Mountlake Terrace",
        "State": "WA",
        "Zip": "98043",
        "Contact": "425-776-6162"
    },
    {
        "Mosque Name": " Masjid Al-Nur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Islamic Center of Olympia ",
        "Address": "4324 20Th Lane Ne",
        "City": "Olympia",
        "State": "WA",
        "Zip": "98516",
        "Contact": "360-491-5760"
    },
    {
        "Mosque Name": " Masjid Al-Farouq",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Pullman Islamic Center ",
        "Address": "Ne 1155 Stadium Way",
        "City": "Pullman",
        "State": "WA",
        "Zip": "99163",
        "Contact": "509-334-9424"
    },
    {
        "Mosque Name": " Masjid Ar-Rahmah",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Â Â Muslim Association of Puget Sound ",
        "Address": "17550 Ne 67Th Court",
        "City": "Redmond",
        "State": "WA",
        "Zip": "98052",
        "Contact": "425-861-9555"
    },
    {
        "Mosque Name": "Islamic Center of Redmond",
        "Address": "18080 Ne 68th St. Bldg D",
        "City": "Redmond",
        "State": "WA",
        "Zip": "98052",
        "Contact": "425-895-9147"
    },
    {
        "Mosque Name": "Gambia International",
        "Address": "5903 Rainer Ave. S",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98118",
        "Contact": "206-721-3542"
    },
    {
        "Mosque Name": "Abu Bakr Mosque",
        "Address": "7621 Rockery Dr. S",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98118",
        "Contact": "206-722-6222"
    },
    {
        "Mosque Name": " Masjid Al Tawheed",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Sw Seattle Islamic Center ",
        "Address": "1022 Sw Henderson St.",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98106",
        "Contact": "206-763-2239"
    },
    {
        "Mosque Name": "Islamic Education Center",
        "Address": "4755 Ne 22Nd Ave. No.5",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98122",
        "Contact": "206-528-1990"
    },
    {
        "Mosque Name": "Jamaatul Al-Ikhlas Muslim Center",
        "Address": "1350 E. First St.",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98101",
        "Contact": "206-261-6109"
    },
    {
        "Mosque Name": "Masjid Al-Taqwa",
        "Address": "2413 E. Union St.",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98122",
        "Contact": "206-497-3899"
    },
    {
        "Mosque Name": "Masjid Jamiul Muslimin",
        "Address": "5945 39th Ave. S",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98118",
        "Contact": "206-723-7677"
    },
    {
        "Mosque Name": "Plymouth Congregational Church ",
        "Address": "1217 6th Ave.",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98101",
        "Contact": "206-723-7491"
    },
    {
        "Mosque Name": "Islamic Center of Seattle ",
        "Address": "3040 S 150th St.",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98188",
        "Contact": ""
    },
    {
        "Mosque Name": "Thawr Institute",
        "Address": "4033 Aurora Ave. N",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98103",
        "Contact": "425-248-0560"
    },
    {
        "Mosque Name": "Idris Mosque",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Washington ",
        "Address": "1420 Ne Northgate Way",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98125",
        "Contact": "206-363-3013"
    },
    {
        "Mosque Name": "Masjid Al-Towfiq",
        "Address": "6951 Martin Luther King Jr Way S",
        "City": "Seattle",
        "State": "WA",
        "Zip": "98144",
        "Contact": "206-588-3539"
    },
    {
        "Mosque Name": "Islamic Center of Shoreline",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Community of Bosniaks In Washington ",
        "Address": "20004 24th Ave. Ne",
        "City": "Shoreline",
        "State": "WA",
        "Zip": "98155",
        "Contact": "206-365-3350"
    },
    {
        "Mosque Name": "Spokane Islamic Center",
        "Address": "6411 E. 2Nd Ave.",
        "City": "Spokane Valley",
        "State": "WA",
        "Zip": "99212",
        "Contact": "509-482-2608"
    },
    {
        "Mosque Name": "Mas Allah Muslim Center",
        "Address": "1218 Martin Luther King Jr. Wa",
        "City": "Tacoma",
        "State": "WA",
        "Zip": "98405",
        "Contact": "253-305-0329"
    },
    {
        "Mosque Name": "Islamic Center of Tacoma",
        "Address": "2010 Bridgeport Way",
        "City": "Tacoma",
        "State": "WA",
        "Zip": "98466",
        "Contact": "253-565-0314"
    },
    {
        "Mosque Name": "Islamic Society of Sw Washington",
        "Address": "1000 Ne 66th St.",
        "City": "Vancouver",
        "State": "WA",
        "Zip": "98665",
        "Contact": "360-694-7799"
    },
    {
        "Mosque Name": "Islamic Center of Tri-Cities",
        "Address": "2900 Bombing Range Rd.",
        "City": "West Richland",
        "State": "WA",
        "Zip": "99352",
        "Contact": "509-967-6695"
    },
    {
        "Mosque Name": "Islamic Center of Yakim",
        "Address": "301 S. Tenth Ave.",
        "City": "Yakim",
        "State": "WA",
        "Zip": "98902",
        "Contact": "509-248-5919"
    },
    {
        "Mosque Name": "Islamic Association of West Virginai",
        "Address": "307 Stanford Rd.",
        "City": "Beckley",
        "State": "WV",
        "Zip": "25801",
        "Contact": "304-252-8863"
    },
    {
        "Mosque Name": "Islamic Center of Bidgeport",
        "Address": "170 Thompson Dr.  Suite 105",
        "City": "Bridgeport",
        "State": "WV",
        "Zip": "26330",
        "Contact": "304-629-3155"
    },
    {
        "Mosque Name": "Islamic Association of West Virginia",
        "Address": "1 Valley Dr.",
        "City": "Charleston",
        "State": "WV",
        "Zip": "25203",
        "Contact": "304-744-1031"
    },
    {
        "Mosque Name": "Muslim Association of Huntington",
        "Address": "944 20th St.",
        "City": "Huntington",
        "State": "WV",
        "Zip": "25703",
        "Contact": "561-666-7783"
    },
    {
        "Mosque Name": "Islamic Center of Morgantown",
        "Address": "441 Harding Ave.",
        "City": "Morgantown",
        "State": "WV",
        "Zip": "26505",
        "Contact": "304-598-0512"
    },
    {
        "Mosque Name": "Princeton Masjid",
        "Address": "247 Frontage Rd.",
        "City": "Princeton",
        "State": "WV",
        "Zip": "24740",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Center of Wheeling",
        "Address": "260 Betheny Pike",
        "City": "Wheeling",
        "State": "WV",
        "Zip": "26003",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Northern Wisconcin",
        "Address": "527 Second St. W",
        "City": "Altoona",
        "State": "WI",
        "Zip": "54720",
        "Contact": "715-831-1560"
    },
    {
        "Mosque Name": "Islamic Center of Northern Wisconsin",
        "Address": "527 2Nd St. W",
        "City": "Altoona",
        "State": "WI",
        "Zip": "53420",
        "Contact": "715-831-1560"
    },
    {
        "Mosque Name": "Islamic Center of Wisconsin",
        "Address": "720 W. Parkway Blvd",
        "City": "Appleton",
        "State": "WI",
        "Zip": "54914",
        "Contact": "920-882-3001"
    },
    {
        "Mosque Name": "Barron Islamic Center",
        "Address": "1418 E. La Salle Ave. Unit A",
        "City": "Barron",
        "State": "WI",
        "Zip": "54812",
        "Contact": "715-529-2417"
    },
    {
        "Mosque Name": "Masjid Al Haqq",
        "Address": "1146 Wisconsin Ave.",
        "City": "Beloit",
        "State": "WI",
        "Zip": "53511",
        "Contact": "608-365-7780"
    },
    {
        "Mosque Name": "Masjid Manhaj Ul-Anbiyaa",
        "Address": "3860 N. Port Washington Rd.",
        "City": "Glendale",
        "State": "WI",
        "Zip": "53212",
        "Contact": "414-264-2508"
    },
    {
        "Mosque Name": "Islamic Society of Wisconsin",
        "Address": "1512 Velp Ave.",
        "City": "Green Bay",
        "State": "WI",
        "Zip": "54303",
        "Contact": "920-676-2882"
    },
    {
        "Mosque Name": "Masjid Al-Huda",
        "Address": "5075 S. 43Rd St.",
        "City": "Greenfield",
        "State": "WI",
        "Zip": "53220",
        "Contact": "414-502-0913"
    },
    {
        "Mosque Name": "Albanian American Islamic Center",
        "Address": "6001 88th Ave.",
        "City": "Kenosha",
        "State": "WI",
        "Zip": "53142",
        "Contact": "262-654-0575"
    },
    {
        "Mosque Name": "Othman Bin Affan Mosque",
        "Address": "206 Rose St.",
        "City": "La Crosse",
        "State": "WI",
        "Zip": "54603",
        "Contact": "608-784-7167"
    },
    {
        "Mosque Name": "Masjid-Us-Sunnah",
        "Address": "4718 Hammersley Rd.",
        "City": "Madison",
        "State": "WI",
        "Zip": "53711",
        "Contact": "608-277-1857"
    },
    {
        "Mosque Name": "Islamic Center of Madison",
        "Address": "21 N.Orchard St",
        "City": "Madison",
        "State": "WI",
        "Zip": "53715",
        "Contact": "608-251-9851"
    },
    {
        "Mosque Name": "Masjid Al-Madina",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Madison Muslim Dawa Circle ",
        "Address": "2617 E. Washington Ave.",
        "City": "Madison",
        "State": "WI",
        "Zip": "53704",
        "Contact": "608-242-9937"
    },
    {
        "Mosque Name": "Marshfield Masjid",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Central Wisconsin ",
        "Address": "M-115 Meadow Ave. N",
        "City": "Marshfield",
        "State": "WI",
        "Zip": "54449",
        "Contact": "715-207-9081"
    },
    {
        "Mosque Name": "Masjid Al-Quran and Muslim Community Center",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Al-Quran Foundation ",
        "Address": "11723 W. Brown Deer Rd. Suite 101",
        "City": "Milwaukee",
        "State": "WI",
        "Zip": "53224",
        "Contact": "414-354-1013"
    },
    {
        "Mosque Name": "Dar Al-Hikmah",
        "Address": "11615 W. Layton Ave.",
        "City": "Milwaukee",
        "State": "WI",
        "Zip": "53228",
        "Contact": "414-427-1214"
    },
    {
        "Mosque Name": "Masjid Ar-Rahman",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Dawah Center ",
        "Address": "5135 N. Teutonia",
        "City": "Milwaukee",
        "State": "WI",
        "Zip": "53209",
        "Contact": "414-462-1998"
    },
    {
        "Mosque Name": "Islamic Center of Milwaukee",
        "Address": "4707 S. 13th St",
        "City": "Milwaukee",
        "State": "WI",
        "Zip": "53221",
        "Contact": "414-282-1812"
    },
    {
        "Mosque Name": "Masjid Sultan Muhammad",
        "Address": "317 W. Wright Street",
        "City": "Milwaukee",
        "State": "WI",
        "Zip": "53212",
        "Contact": "414-263-6772"
    },
    {
        "Mosque Name": "Ism Musalla Nur",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "",
        "Address": "",
        "City": "",
        "State": "",
        "Zip": "",
        "Contact": ""
    },
    {
        "Mosque Name": "Islamic Society of Milwaukee ",
        "Address": "3028 N. Maryland Ave.",
        "City": "Milwaukee",
        "State": "WI",
        "Zip": "53211",
        "Contact": "414-469-9130"
    },
    {
        "Mosque Name": "Fox Valley Islamic Society",
        "Address": "103 Kappel Dr.",
        "City": "Neenah",
        "State": "WI",
        "Zip": "54956",
        "Contact": "920-722-7860"
    },
    {
        "Mosque Name": "Islamic Society of Sheboygan",
        "Address": "9110 Sauk Trail Rd.",
        "City": "Oostburg",
        "State": "WI",
        "Zip": "53070",
        "Contact": "920-564-3456"
    },
    {
        "Mosque Name": "Racine Islamic Center",
        "Address": "419-21 High St.",
        "City": "Racine",
        "State": "WI",
        "Zip": "53404",
        "Contact": "262-632-3751"
    },
    {
        "Mosque Name": "Islamic Center of Cheyenne",
        "Address": "6005 Weaver Rd.",
        "City": "Cheyenne",
        "State": "WY",
        "Zip": "82009",
        "Contact": ""
    },
    {
        "Mosque Name": "Southeast Wyoming Islamic Center",
        "Address": "3005 Thomas Ave.",
        "City": "Cheyenne",
        "State": "WY",
        "Zip": "82001",
        "Contact": "307-287-4076"
    },
    {
        "Mosque Name": "Islamic Center of Larimie",
        "Address": "618 E. Garfield St.",
        "City": "Larimie",
        "State": "WY",
        "Zip": "82070",
        "Contact": "307-721-8810"
    }
]
const title = {
    textAlign: 'center',
    fontSize: 18,
    // fontFamily: 'Helvetica Neue',
    color: 'white'
  };

  const titleContainer = {
    backgroundColor: 'rgba(102,182,69,1)',
    margin: 0,
    padding: 10
  };

  const inputField = {
    margin: 20,
    padding: 10,
    width: 350,
    borderRadius: 10,
    outlineStyle: 'none',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  };

  const button = {
    margin: 20,
    padding: 10,
    width: 130,
    height: 45,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    alignSelf: 'center', 
    backgroundColor: 'rgba(102,182,69,1)',
    borderRadius: 10,
    color: 'white'
  };

  const filterdDataContainer = {
    backgroundColor: 'rgba(242, 242, 247, 1)'
  };

  const filterdTextItem = {
    padding: 10,
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold'
  };

  const filterdTextSubItem = {
    margin: 0,
    paddingLeft: 20
  };

  const filteredDataStylesContainer = {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  };

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const findMosque = () => {
    const regex = new RegExp(searchText, "i");
    setFilteredData(mosqueData.filter(data => regex.test(data["Mosque Name"])));
  };

  return (
    <View>
      <View style={titleContainer}>
        <Text style={title}>Mosque Finder</Text>
      </View>

      <View>
        <TextInput
          style={inputField}
          onChangeText={(text) => setSearchText(text)}
          placeholder='Enter City or zip'
        />
      </View>

      <TouchableOpacity onPress={findMosque} style={button}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Find Mosques</Text>
      </TouchableOpacity>

      {
        filteredData.length > 0 &&
        <ScrollView style={filterdDataContainer}>
          {
            filteredData.map((data, index) =>
              <View key={index} style={filteredDataStylesContainer}>
                <Text style={filterdTextItem}>{data["Mosque Name"]}</Text>
                <Text style={filterdTextSubItem}>{data["Address"]}</Text>
                <Text style={filterdTextSubItem}>{data["City"]} {data["State"]} {data["Zip"]}</Text>
                <Text style={filterdTextSubItem}>{data["Contact"]}</Text>
              </View>
            )
          }
        </ScrollView>
      }
    </View>
  );
}

export default App;