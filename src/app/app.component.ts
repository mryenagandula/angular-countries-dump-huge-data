import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ContriesService } from './api/contries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-material-forms-username-availability';
  public contriesdata= [
    {
     "country": "Afghanistan",
     "countryCode": 93,
     "isoCodes": "AF \/ AFG",
     "population": 29121286,
     "area": 647500,
     "gdpUsd": "20.65 Billion"
    },
    {
     "country": "Albania",
     "countryCode": 355,
     "isoCodes": "AL \/ ALB",
     "population": 2986952,
     "area": 28748,
     "gdpUsd": "12.8 Billion"
    },
    {
     "country": "Algeria",
     "countryCode": 213,
     "isoCodes": "DZ \/ DZA",
     "population": 34586184,
     "area": 2381740,
     "gdpUsd": "215.7 Billion"
    },
    {
     "country": "American Samoa",
     "countryCode": "1-684",
     "isoCodes": "AS \/ ASM",
     "population": 57881,
     "area": 199,
     "gdpUsd": "462.2 Million"
    },
    {
     "country": "Andorra",
     "countryCode": 376,
     "isoCodes": "AD \/ AND",
     "population": 84000,
     "area": 468,
     "gdpUsd": "4.8 Billion"
    },
    {
     "country": "Angola",
     "countryCode": 244,
     "isoCodes": "AO \/ AGO",
     "population": 13068161,
     "area": 1246700,
     "gdpUsd": "124 Billion"
    },
    {
     "country": "Anguilla",
     "countryCode": "1-264",
     "isoCodes": "AI \/ AIA",
     "population": 13254,
     "area": 102,
     "gdpUsd": "175.4 Million"
    },
    {
     "country": "Antarctica",
     "countryCode": 672,
     "isoCodes": "AQ \/ ATA",
     "population": 0,
     "area": 14000000
    },
    {
     "country": "Antigua and Barbuda",
     "countryCode": "1-268",
     "isoCodes": "AG \/ ATG",
     "population": 86754,
     "area": 443,
     "gdpUsd": "1.22 Billion"
    },
    {
     "country": "Argentina",
     "countryCode": 54,
     "isoCodes": "AR \/ ARG",
     "population": 41343201,
     "area": 2766890,
     "gdpUsd": "484.6 Billion"
    },
    {
     "country": "Armenia",
     "countryCode": 374,
     "isoCodes": "AM \/ ARM",
     "population": 2968000,
     "area": 29800,
     "gdpUsd": "10.44 Billion"
    },
    {
     "country": "Aruba",
     "countryCode": 297,
     "isoCodes": "AW \/ ABW",
     "population": 71566,
     "area": 193,
     "gdpUsd": "2.516 Billion"
    },
    {
     "country": "Australia",
     "countryCode": 61,
     "isoCodes": "AU \/ AUS",
     "population": 21515754,
     "area": 7686850,
     "gdpUsd": "1.488 Trillion"
    },
    {
     "country": "Austria",
     "countryCode": 43,
     "isoCodes": "AT \/ AUT",
     "population": 8205000,
     "area": 83858,
     "gdpUsd": "417.9 Billion"
    },
    {
     "country": "Azerbaijan",
     "countryCode": 994,
     "isoCodes": "AZ \/ AZE",
     "population": 8303512,
     "area": 86600,
     "gdpUsd": "76.01 Billion"
    },
    {
     "country": "Bahamas",
     "countryCode": "1-242",
     "isoCodes": "BS \/ BHS",
     "population": 301790,
     "area": 13940,
     "gdpUsd": "8.373 Billion"
    },
    {
     "country": "Bahrain",
     "countryCode": 973,
     "isoCodes": "BH \/ BHR",
     "population": 738004,
     "area": 665,
     "gdpUsd": "28.36 Billion"
    },
    {
     "country": "Bangladesh",
     "countryCode": 880,
     "isoCodes": "BD \/ BGD",
     "population": 156118464,
     "area": 144000,
     "gdpUsd": "140.2 Billion"
    },
    {
     "country": "Barbados",
     "countryCode": "1-246",
     "isoCodes": "BB \/ BRB",
     "population": 285653,
     "area": 431,
     "gdpUsd": "4.262 Billion"
    },
    {
     "country": "Belarus",
     "countryCode": 375,
     "isoCodes": "BY \/ BLR",
     "population": 9685000,
     "area": 207600,
     "gdpUsd": "69.24 Billion"
    },
    {
     "country": "Belgium",
     "countryCode": 32,
     "isoCodes": "BE \/ BEL",
     "population": 10403000,
     "area": 30510,
     "gdpUsd": "507.4 Billion"
    },
    {
     "country": "Belize",
     "countryCode": 501,
     "isoCodes": "BZ \/ BLZ",
     "population": 314522,
     "area": 22966,
     "gdpUsd": "1.637 Billion"
    },
    {
     "country": "Benin",
     "countryCode": 229,
     "isoCodes": "BJ \/ BEN",
     "population": 9056010,
     "area": 112620,
     "gdpUsd": "8.359 Billion"
    },
    {
     "country": "Bermuda",
     "countryCode": "1-441",
     "isoCodes": "BM \/ BMU",
     "population": 65365,
     "area": 53,
     "gdpUsd": "5.6 Billion"
    },
    {
     "country": "Bhutan",
     "countryCode": 975,
     "isoCodes": "BT \/ BTN",
     "population": 699847,
     "area": 47000,
     "gdpUsd": "2.133 Billion"
    },
    {
     "country": "Bolivia",
     "countryCode": 591,
     "isoCodes": "BO \/ BOL",
     "population": 9947418,
     "area": 1098580,
     "gdpUsd": "30.79 Billion"
    },
    {
     "country": "Bosnia and Herzegovina",
     "countryCode": 387,
     "isoCodes": "BA \/ BIH",
     "population": 4590000,
     "area": 51129,
     "gdpUsd": "18.87 Billion"
    },
    {
     "country": "Botswana",
     "countryCode": 267,
     "isoCodes": "BW \/ BWA",
     "population": 2029307,
     "area": 600370,
     "gdpUsd": "15.53 Billion"
    },
    {
     "country": "Brazil",
     "countryCode": 55,
     "isoCodes": "BR \/ BRA",
     "population": 201103330,
     "area": 8511965,
     "gdpUsd": "2.19 Trillion"
    },
    {
     "country": "British Indian Ocean Territory",
     "countryCode": 246,
     "isoCodes": "IO \/ IOT",
     "population": 4000,
     "area": 60
    },
    {
     "country": "British Virgin Islands",
     "countryCode": "1-284",
     "isoCodes": "VG \/ VGB",
     "population": 21730,
     "area": 153,
     "gdpUsd": "1.095 Billion"
    },
    {
     "country": "Brunei",
     "countryCode": 673,
     "isoCodes": "BN \/ BRN",
     "population": 395027,
     "area": 5770,
     "gdpUsd": "16.56 Billion"
    },
    {
     "country": "Bulgaria",
     "countryCode": 359,
     "isoCodes": "BG \/ BGR",
     "population": 7148785,
     "area": 110910,
     "gdpUsd": "53.7 Billion"
    },
    {
     "country": "Burkina Faso",
     "countryCode": 226,
     "isoCodes": "BF \/ BFA",
     "population": 16241811,
     "area": 274200,
     "gdpUsd": "12.13 Billion"
    },
    {
     "country": "Burundi",
     "countryCode": 257,
     "isoCodes": "BI \/ BDI",
     "population": 9863117,
     "area": 27830,
     "gdpUsd": "2.676 Billion"
    },
    {
     "country": "Cambodia",
     "countryCode": 855,
     "isoCodes": "KH \/ KHM",
     "population": 14453680,
     "area": 181040,
     "gdpUsd": "15.64 Billion"
    },
    {
     "country": "Cameroon",
     "countryCode": 237,
     "isoCodes": "CM \/ CMR",
     "population": 19294149,
     "area": 475440,
     "gdpUsd": "27.88 Billion"
    },
    {
     "country": "Canada",
     "countryCode": 1,
     "isoCodes": "CA \/ CAN",
     "population": 33679000,
     "area": 9984670,
     "gdpUsd": "1.825 Trillion"
    },
    {
     "country": "Cape Verde",
     "countryCode": 238,
     "isoCodes": "CV \/ CPV",
     "population": 508659,
     "area": 4033,
     "gdpUsd": "1.955 Billion"
    },
    {
     "country": "Cayman Islands",
     "countryCode": "1-345",
     "isoCodes": "KY \/ CYM",
     "population": 44270,
     "area": 262,
     "gdpUsd": "2.25 Billion"
    },
    {
     "country": "Central African Republic",
     "countryCode": 236,
     "isoCodes": "CF \/ CAF",
     "population": 4844927,
     "area": 622984,
     "gdpUsd": "2.05 Billion"
    },
    {
     "country": "Chad",
     "countryCode": 235,
     "isoCodes": "TD \/ TCD",
     "population": 10543464,
     "area": 1284000,
     "gdpUsd": "13.59 Billion"
    },
    {
     "country": "Chile",
     "countryCode": 56,
     "isoCodes": "CL \/ CHL",
     "population": 16746491,
     "area": 756950,
     "gdpUsd": "281.7 Billion"
    },
    {
     "country": "China",
     "countryCode": 86,
     "isoCodes": "CN \/ CHN",
     "population": 1330044000,
     "area": 9596960,
     "gdpUsd": "9.33 Trillion"
    },
    {
     "country": "Christmas Island",
     "countryCode": 61,
     "isoCodes": "CX \/ CXR",
     "population": 1500,
     "area": 135
    },
    {
     "country": "Cocos Islands",
     "countryCode": 61,
     "isoCodes": "CC \/ CCK",
     "population": 628,
     "area": 14
    },
    {
     "country": "Colombia",
     "countryCode": 57,
     "isoCodes": "CO \/ COL",
     "population": 47790000,
     "area": 1138910,
     "gdpUsd": "369.2 Billion"
    },
    {
     "country": "Comoros",
     "countryCode": 269,
     "isoCodes": "KM \/ COM",
     "population": 773407,
     "area": 2170,
     "gdpUsd": "658 Million"
    },
    {
     "country": "Cook Islands",
     "countryCode": 682,
     "isoCodes": "CK \/ COK",
     "population": 21388,
     "area": 240,
     "gdpUsd": "183.2 Million"
    },
    {
     "country": "Costa Rica",
     "countryCode": 506,
     "isoCodes": "CR \/ CRI",
     "population": 4516220,
     "area": 51100,
     "gdpUsd": "48.51 Billion"
    },
    {
     "country": "Croatia",
     "countryCode": 385,
     "isoCodes": "HR \/ HRV",
     "population": 4491000,
     "area": 56542,
     "gdpUsd": "59.14 Billion"
    },
    {
     "country": "Cuba",
     "countryCode": 53,
     "isoCodes": "CU \/ CUB",
     "population": 11423000,
     "area": 110860,
     "gdpUsd": "72.3 Billion"
    },
    {
     "country": "Curacao",
     "countryCode": 599,
     "isoCodes": "CW \/ CUW",
     "population": 141766,
     "area": 444,
     "gdpUsd": "5.6 Billion"
    },
    {
     "country": "Cyprus",
     "countryCode": 357,
     "isoCodes": "CY \/ CYP",
     "population": 1102677,
     "area": 9250,
     "gdpUsd": "21.78 Billion"
    },
    {
     "country": "Czech Republic",
     "countryCode": 420,
     "isoCodes": "CZ \/ CZE",
     "population": 10476000,
     "area": 78866,
     "gdpUsd": "194.8 Billion"
    },
    {
     "country": "Democratic Republic of the Congo",
     "countryCode": 243,
     "isoCodes": "CD \/ COD",
     "population": 70916439,
     "area": 2345410,
     "gdpUsd": "18.56 Billion"
    },
    {
     "country": "Denmark",
     "countryCode": 45,
     "isoCodes": "DK \/ DNK",
     "population": 5484000,
     "area": 43094,
     "gdpUsd": "324.3 Billion"
    },
    {
     "country": "Djibouti",
     "countryCode": 253,
     "isoCodes": "DJ \/ DJI",
     "population": 740528,
     "area": 23000,
     "gdpUsd": "1.459 Billion"
    },
    {
     "country": "Dominica",
     "countryCode": "1-767",
     "isoCodes": "DM \/ DMA",
     "population": 72813,
     "area": 754,
     "gdpUsd": "495 Million"
    },
    {
     "country": "Dominican Republic",
     "countryCode": "1-809, 1-829, 1-849",
     "isoCodes": "DO \/ DOM",
     "population": 9823821,
     "area": 48730,
     "gdpUsd": "59.27 Billion"
    },
    {
     "country": "East Timor",
     "countryCode": 670,
     "isoCodes": "TL \/ TLS",
     "population": 1154625,
     "area": 15007,
     "gdpUsd": "6.129 Billion"
    },
    {
     "country": "Ecuador",
     "countryCode": 593,
     "isoCodes": "EC \/ ECU",
     "population": 14790608,
     "area": 283560,
     "gdpUsd": "91.41 Billion"
    },
    {
     "country": "Egypt",
     "countryCode": 20,
     "isoCodes": "EG \/ EGY",
     "population": 80471869,
     "area": 1001450,
     "gdpUsd": "262 Billion"
    },
    {
     "country": "El Salvador",
     "countryCode": 503,
     "isoCodes": "SV \/ SLV",
     "population": 6052064,
     "area": 21040,
     "gdpUsd": "24.67 Billion"
    },
    {
     "country": "Equatorial Guinea",
     "countryCode": 240,
     "isoCodes": "GQ \/ GNQ",
     "population": 1014999,
     "area": 28051,
     "gdpUsd": "17.08 Billion"
    },
    {
     "country": "Eritrea",
     "countryCode": 291,
     "isoCodes": "ER \/ ERI",
     "population": 5792984,
     "area": 121320,
     "gdpUsd": "3.438 Billion"
    },
    {
     "country": "Estonia",
     "countryCode": 372,
     "isoCodes": "EE \/ EST",
     "population": 1291170,
     "area": 45226,
     "gdpUsd": "24.28 Billion"
    },
    {
     "country": "Ethiopia",
     "countryCode": 251,
     "isoCodes": "ET \/ ETH",
     "population": 88013491,
     "area": 1127127,
     "gdpUsd": "47.34 Billion"
    },
    {
     "country": "Falkland Islands",
     "countryCode": 500,
     "isoCodes": "FK \/ FLK",
     "population": 2638,
     "area": 12173,
     "gdpUsd": "164.5 Million"
    },
    {
     "country": "Faroe Islands",
     "countryCode": 298,
     "isoCodes": "FO \/ FRO",
     "population": 48228,
     "area": 1399,
     "gdpUsd": "2.32 Billion"
    },
    {
     "country": "Fiji",
     "countryCode": 679,
     "isoCodes": "FJ \/ FJI",
     "population": 875983,
     "area": 18270,
     "gdpUsd": "4.218 Billion"
    },
    {
     "country": "Finland",
     "countryCode": 358,
     "isoCodes": "FI \/ FIN",
     "population": 5244000,
     "area": 337030,
     "gdpUsd": "259.6 Billion"
    },
    {
     "country": "France",
     "countryCode": 33,
     "isoCodes": "FR \/ FRA",
     "population": 64768389,
     "area": 547030,
     "gdpUsd": "2.739 Trillion"
    },
    {
     "country": "French Polynesia",
     "countryCode": 689,
     "isoCodes": "PF \/ PYF",
     "population": 270485,
     "area": 4167,
     "gdpUsd": "5.65 Billion"
    },
    {
     "country": "Gabon",
     "countryCode": 241,
     "isoCodes": "GA \/ GAB",
     "population": 1545255,
     "area": 267667,
     "gdpUsd": "19.97 Billion"
    },
    {
     "country": "Gambia",
     "countryCode": 220,
     "isoCodes": "GM \/ GMB",
     "population": 1593256,
     "area": 11300,
     "gdpUsd": "896 Million"
    },
    {
     "country": "Georgia",
     "countryCode": 995,
     "isoCodes": "GE \/ GEO",
     "population": 4630000,
     "area": 69700,
     "gdpUsd": "15.95 Billion"
    },
    {
     "country": "Germany",
     "countryCode": 49,
     "isoCodes": "DE \/ DEU",
     "population": 81802257,
     "area": 357021,
     "gdpUsd": "3.593 Trillion"
    },
    {
     "country": "Ghana",
     "countryCode": 233,
     "isoCodes": "GH \/ GHA",
     "population": 24339838,
     "area": 239460,
     "gdpUsd": "45.55 Billion"
    },
    {
     "country": "Gibraltar",
     "countryCode": 350,
     "isoCodes": "GI \/ GIB",
     "population": 27884,
     "area": 7,
     "gdpUsd": "1.106 Billion"
    },
    {
     "country": "Greece",
     "countryCode": 30,
     "isoCodes": "GR \/ GRC",
     "population": 11000000,
     "area": 131940,
     "gdpUsd": "243.3 Billion"
    },
    {
     "country": "Greenland",
     "countryCode": 299,
     "isoCodes": "GL \/ GRL",
     "population": 56375,
     "area": 2166086,
     "gdpUsd": "2.16 Billion"
    },
    {
     "country": "Grenada",
     "countryCode": "1-473",
     "isoCodes": "GD \/ GRD",
     "population": 107818,
     "area": 344,
     "gdpUsd": "811 Million"
    },
    {
     "country": "Guam",
     "countryCode": "1-671",
     "isoCodes": "GU \/ GUM",
     "population": 159358,
     "area": 549,
     "gdpUsd": "4.6 Billion"
    },
    {
     "country": "Guatemala",
     "countryCode": 502,
     "isoCodes": "GT \/ GTM",
     "population": 13550440,
     "area": 108890,
     "gdpUsd": "53.9 Billion"
    },
    {
     "country": "Guernsey",
     "countryCode": "44-1481",
     "isoCodes": "GG \/ GGY",
     "population": 65228,
     "area": 78,
     "gdpUsd": "2.742 Billion"
    },
    {
     "country": "Guinea",
     "countryCode": 224,
     "isoCodes": "GN \/ GIN",
     "population": 10324025,
     "area": 245857,
     "gdpUsd": "6.544 Billion"
    },
    {
     "country": "Guinea-Bissau",
     "countryCode": 245,
     "isoCodes": "GW \/ GNB",
     "population": 1565126,
     "area": 36120,
     "gdpUsd": "880 Million"
    },
    {
     "country": "Guyana",
     "countryCode": 592,
     "isoCodes": "GY \/ GUY",
     "population": 748486,
     "area": 214970,
     "gdpUsd": "3.02 Billion"
    },
    {
     "country": "Haiti",
     "countryCode": 509,
     "isoCodes": "HT \/ HTI",
     "population": 9648924,
     "area": 27750,
     "gdpUsd": "8.287 Billion"
    },
    {
     "country": "Honduras",
     "countryCode": 504,
     "isoCodes": "HN \/ HND",
     "population": 7989415,
     "area": 112090,
     "gdpUsd": "18.88 Billion"
    },
    {
     "country": "Hong Kong",
     "countryCode": 852,
     "isoCodes": "HK \/ HKG",
     "population": 6898686,
     "area": 1092,
     "gdpUsd": "272.1 Billion"
    },
    {
     "country": "Hungary",
     "countryCode": 36,
     "isoCodes": "HU \/ HUN",
     "population": 9982000,
     "area": 93030,
     "gdpUsd": "130.6 Billion"
    },
    {
     "country": "Iceland",
     "countryCode": 354,
     "isoCodes": "IS \/ ISL",
     "population": 308910,
     "area": 103000,
     "gdpUsd": "14.59 Billion"
    },
    {
     "country": "India",
     "countryCode": 91,
     "isoCodes": "IN \/ IND",
     "population": 1173108018,
     "area": 3287590,
     "gdpUsd": "1.67 Trillion"
    },
    {
     "country": "Indonesia",
     "countryCode": 62,
     "isoCodes": "ID \/ IDN",
     "population": 242968342,
     "area": 1919440,
     "gdpUsd": "867.5 Billion"
    },
    {
     "country": "Iran",
     "countryCode": 98,
     "isoCodes": "IR \/ IRN",
     "population": 76923300,
     "area": 1648000,
     "gdpUsd": "411.9 Billion"
    },
    {
     "country": "Iraq",
     "countryCode": 964,
     "isoCodes": "IQ \/ IRQ",
     "population": 29671605,
     "area": 437072,
     "gdpUsd": "221.8 Billion"
    },
    {
     "country": "Ireland",
     "countryCode": 353,
     "isoCodes": "IE \/ IRL",
     "population": 4622917,
     "area": 70280,
     "gdpUsd": "220.9 Billion"
    },
    {
     "country": "Isle of Man",
     "countryCode": "44-1624",
     "isoCodes": "IM \/ IMN",
     "population": 75049,
     "area": 572,
     "gdpUsd": "4.076 Billion"
    },
    {
     "country": "Israel",
     "countryCode": 972,
     "isoCodes": "IL \/ ISR",
     "population": 7353985,
     "area": 20770,
     "gdpUsd": "272.7 Billion"
    },
    {
     "country": "Italy",
     "countryCode": 39,
     "isoCodes": "IT \/ ITA",
     "population": 60340328,
     "area": 301230,
     "gdpUsd": "2.068 Trillion"
    },
    {
     "country": "Ivory Coast",
     "countryCode": 225,
     "isoCodes": "CI \/ CIV",
     "population": 21058798,
     "area": 322460,
     "gdpUsd": "28.28 Billion"
    },
    {
     "country": "Jamaica",
     "countryCode": "1-876",
     "isoCodes": "JM \/ JAM",
     "population": 2847232,
     "area": 10991,
     "gdpUsd": "14.39 Billion"
    },
    {
     "country": "Japan",
     "countryCode": 81,
     "isoCodes": "JP \/ JPN",
     "population": 127288000,
     "area": 377835,
     "gdpUsd": "5.007 Trillion"
    },
    {
     "country": "Jersey",
     "countryCode": "44-1534",
     "isoCodes": "JE \/ JEY",
     "population": 90812,
     "area": 116,
     "gdpUsd": "5.1 Billion"
    },
    {
     "country": "Jordan",
     "countryCode": 962,
     "isoCodes": "JO \/ JOR",
     "population": 6407085,
     "area": 92300,
     "gdpUsd": "34.08 Billion"
    },
    {
     "country": "Kazakhstan",
     "countryCode": 7,
     "isoCodes": "KZ \/ KAZ",
     "population": 15340000,
     "area": 2717300,
     "gdpUsd": "224.9 Billion"
    },
    {
     "country": "Kenya",
     "countryCode": 254,
     "isoCodes": "KE \/ KEN",
     "population": 40046566,
     "area": 582650,
     "gdpUsd": "45.31 Billion"
    },
    {
     "country": "Kiribati",
     "countryCode": 686,
     "isoCodes": "KI \/ KIR",
     "population": 92533,
     "area": 811,
     "gdpUsd": "173 Million"
    },
    {
     "country": "Kosovo",
     "countryCode": 383,
     "isoCodes": "XK \/ XKX",
     "population": 1800000,
     "area": 10887,
     "gdpUsd": "7.15 Billion"
    },
    {
     "country": "Kuwait",
     "countryCode": 965,
     "isoCodes": "KW \/ KWT",
     "population": 2789132,
     "area": 17820,
     "gdpUsd": "179.5 Billion"
    },
    {
     "country": "Kyrgyzstan",
     "countryCode": 996,
     "isoCodes": "KG \/ KGZ",
     "population": 5508626,
     "area": 198500,
     "gdpUsd": "7.234 Billion"
    },
    {
     "country": "Laos",
     "countryCode": 856,
     "isoCodes": "LA \/ LAO",
     "population": 6368162,
     "area": 236800,
     "gdpUsd": "10.1 Billion"
    },
    {
     "country": "Latvia",
     "countryCode": 371,
     "isoCodes": "LV \/ LVA",
     "population": 2217969,
     "area": 64589,
     "gdpUsd": "30.38 Billion"
    },
    {
     "country": "Lebanon",
     "countryCode": 961,
     "isoCodes": "LB \/ LBN",
     "population": 4125247,
     "area": 10400,
     "gdpUsd": "43.49 Billion"
    },
    {
     "country": "Lesotho",
     "countryCode": 266,
     "isoCodes": "LS \/ LSO",
     "population": 1919552,
     "area": 30355,
     "gdpUsd": "2.457 Billion"
    },
    {
     "country": "Liberia",
     "countryCode": 231,
     "isoCodes": "LR \/ LBR",
     "population": 3685076,
     "area": 111370,
     "gdpUsd": "1.977 Billion"
    },
    {
     "country": "Libya",
     "countryCode": 218,
     "isoCodes": "LY \/ LBY",
     "population": 6461454,
     "area": 1759540,
     "gdpUsd": "70.92 Billion"
    },
    {
     "country": "Liechtenstein",
     "countryCode": 423,
     "isoCodes": "LI \/ LIE",
     "population": 35000,
     "area": 160,
     "gdpUsd": "5.113 Billion"
    },
    {
     "country": "Lithuania",
     "countryCode": 370,
     "isoCodes": "LT \/ LTU",
     "population": 2944459,
     "area": 65200,
     "gdpUsd": "46.71 Billion"
    },
    {
     "country": "Luxembourg",
     "countryCode": 352,
     "isoCodes": "LU \/ LUX",
     "population": 497538,
     "area": 2586,
     "gdpUsd": "60.54 Billion"
    },
    {
     "country": "Macau",
     "countryCode": 853,
     "isoCodes": "MO \/ MAC",
     "population": 449198,
     "area": 254,
     "gdpUsd": "51.68 Billion"
    },
    {
     "country": "Macedonia",
     "countryCode": 389,
     "isoCodes": "MK \/ MKD",
     "population": 2062294,
     "area": 25333,
     "gdpUsd": "10.65 Billion"
    },
    {
     "country": "Madagascar",
     "countryCode": 261,
     "isoCodes": "MG \/ MDG",
     "population": 21281844,
     "area": 587040,
     "gdpUsd": "10.53 Billion"
    },
    {
     "country": "Malawi",
     "countryCode": 265,
     "isoCodes": "MW \/ MWI",
     "population": 15447500,
     "area": 118480,
     "gdpUsd": "3.683 Billion"
    },
    {
     "country": "Malaysia",
     "countryCode": 60,
     "isoCodes": "MY \/ MYS",
     "population": 28274729,
     "area": 329750,
     "gdpUsd": "312.4 Billion"
    },
    {
     "country": "Maldives",
     "countryCode": 960,
     "isoCodes": "MV \/ MDV",
     "population": 395650,
     "area": 300,
     "gdpUsd": "2.27 Billion"
    },
    {
     "country": "Mali",
     "countryCode": 223,
     "isoCodes": "ML \/ MLI",
     "population": 13796354,
     "area": 1240000,
     "gdpUsd": "11.37 Billion"
    },
    {
     "country": "Malta",
     "countryCode": 356,
     "isoCodes": "MT \/ MLT",
     "population": 403000,
     "area": 316,
     "gdpUsd": "9.541 Billion"
    },
    {
     "country": "Marshall Islands",
     "countryCode": 692,
     "isoCodes": "MH \/ MHL",
     "population": 65859,
     "area": 181,
     "gdpUsd": "193 Million"
    },
    {
     "country": "Mauritania",
     "countryCode": 222,
     "isoCodes": "MR \/ MRT",
     "population": 3205060,
     "area": 1030700,
     "gdpUsd": "4.183 Billion"
    },
    {
     "country": "Mauritius",
     "countryCode": 230,
     "isoCodes": "MU \/ MUS",
     "population": 1294104,
     "area": 2040,
     "gdpUsd": "11.9 Billion"
    },
    {
     "country": "Mayotte",
     "countryCode": 262,
     "isoCodes": "YT \/ MYT",
     "population": 159042,
     "area": 374
    },
    {
     "country": "Mexico",
     "countryCode": 52,
     "isoCodes": "MX \/ MEX",
     "population": 112468855,
     "area": 1972550,
     "gdpUsd": "1.327 Trillion"
    },
    {
     "country": "Micronesia",
     "countryCode": 691,
     "isoCodes": "FM \/ FSM",
     "population": 107708,
     "area": 702,
     "gdpUsd": "339 Million"
    },
    {
     "country": "Moldova",
     "countryCode": 373,
     "isoCodes": "MD \/ MDA",
     "population": 4324000,
     "area": 33843,
     "gdpUsd": "7.932 Billion"
    },
    {
     "country": "Monaco",
     "countryCode": 377,
     "isoCodes": "MC \/ MCO",
     "population": 32965,
     "area": 2,
     "gdpUsd": "5.748 Billion"
    },
    {
     "country": "Mongolia",
     "countryCode": 976,
     "isoCodes": "MN \/ MNG",
     "population": 3086918,
     "area": 1565000,
     "gdpUsd": "11.14 Billion"
    },
    {
     "country": "Montenegro",
     "countryCode": 382,
     "isoCodes": "ME \/ MNE",
     "population": 666730,
     "area": 14026,
     "gdpUsd": "4.518 Billion"
    },
    {
     "country": "Montserrat",
     "countryCode": "1-664",
     "isoCodes": "MS \/ MSR",
     "population": 9341,
     "area": 102
    },
    {
     "country": "Morocco",
     "countryCode": 212,
     "isoCodes": "MA \/ MAR",
     "population": 31627428,
     "area": 446550,
     "gdpUsd": "104.8 Billion"
    },
    {
     "country": "Mozambique",
     "countryCode": 258,
     "isoCodes": "MZ \/ MOZ",
     "population": 22061451,
     "area": 801590,
     "gdpUsd": "14.67 Billion"
    },
    {
     "country": "Myanmar",
     "countryCode": 95,
     "isoCodes": "MM \/ MMR",
     "population": 53414374,
     "area": 678500,
     "gdpUsd": "59.43 Billion"
    },
    {
     "country": "Namibia",
     "countryCode": 264,
     "isoCodes": "NA \/ NAM",
     "population": 2128471,
     "area": 825418,
     "gdpUsd": "12.3 Billion"
    },
    {
     "country": "Nauru",
     "countryCode": 674,
     "isoCodes": "NR \/ NRU",
     "population": 10065,
     "area": 21
    },
    {
     "country": "Nepal",
     "countryCode": 977,
     "isoCodes": "NP \/ NPL",
     "population": 28951852,
     "area": 140800,
     "gdpUsd": "19.34 Billion"
    },
    {
     "country": "Netherlands",
     "countryCode": 31,
     "isoCodes": "NL \/ NLD",
     "population": 16645000,
     "area": 41526,
     "gdpUsd": "722.3 Billion"
    },
    {
     "country": "Netherlands Antilles",
     "countryCode": 599,
     "isoCodes": "AN \/ ANT",
     "population": 136197,
     "area": 960
    },
    {
     "country": "New Caledonia",
     "countryCode": 687,
     "isoCodes": "NC \/ NCL",
     "population": 216494,
     "area": 19060,
     "gdpUsd": "9.28 Billion"
    },
    {
     "country": "New Zealand",
     "countryCode": 64,
     "isoCodes": "NZ \/ NZL",
     "population": 4252277,
     "area": 268680,
     "gdpUsd": "181.1 Billion"
    },
    {
     "country": "Nicaragua",
     "countryCode": 505,
     "isoCodes": "NI \/ NIC",
     "population": 5995928,
     "area": 129494,
     "gdpUsd": "11.26 Billion"
    },
    {
     "country": "Niger",
     "countryCode": 227,
     "isoCodes": "NE \/ NER",
     "population": 15878271,
     "area": 1267000,
     "gdpUsd": "7.304 Billion"
    },
    {
     "country": "Nigeria",
     "countryCode": 234,
     "isoCodes": "NG \/ NGA",
     "population": 154000000,
     "area": 923768,
     "gdpUsd": "502 Billion"
    },
    {
     "country": "Niue",
     "countryCode": 683,
     "isoCodes": "NU \/ NIU",
     "population": 2166,
     "area": 260,
     "gdpUsd": "10.01 Million"
    },
    {
     "country": "North Korea",
     "countryCode": 850,
     "isoCodes": "KP \/ PRK",
     "population": 22912177,
     "area": 120540,
     "gdpUsd": "28 Billion"
    },
    {
     "country": "Northern Mariana Islands",
     "countryCode": "1-670",
     "isoCodes": "MP \/ MNP",
     "population": 53883,
     "area": 477,
     "gdpUsd": "733 Million"
    },
    {
     "country": "Norway",
     "countryCode": 47,
     "isoCodes": "NO \/ NOR",
     "population": 5009150,
     "area": 324220,
     "gdpUsd": "515.8 Billion"
    },
    {
     "country": "Oman",
     "countryCode": 968,
     "isoCodes": "OM \/ OMN",
     "population": 2967717,
     "area": 212460,
     "gdpUsd": "81.95 Billion"
    },
    {
     "country": "Pakistan",
     "countryCode": 92,
     "isoCodes": "PK \/ PAK",
     "population": 184404791,
     "area": 803940,
     "gdpUsd": "236.5 Billion"
    },
    {
     "country": "Palau",
     "countryCode": 680,
     "isoCodes": "PW \/ PLW",
     "population": 19907,
     "area": 458,
     "gdpUsd": "221 Million"
    },
    {
     "country": "Palestine",
     "countryCode": 970,
     "isoCodes": "PS \/ PSE",
     "population": 3800000,
     "area": 5970,
     "gdpUsd": "6.641 Billion"
    },
    {
     "country": "Panama",
     "countryCode": 507,
     "isoCodes": "PA \/ PAN",
     "population": 3410676,
     "area": 78200,
     "gdpUsd": "40.62 Billion"
    },
    {
     "country": "Papua New Guinea",
     "countryCode": 675,
     "isoCodes": "PG \/ PNG",
     "population": 6064515,
     "area": 462840,
     "gdpUsd": "16.1 Billion"
    },
    {
     "country": "Paraguay",
     "countryCode": 595,
     "isoCodes": "PY \/ PRY",
     "population": 6375830,
     "area": 406750,
     "gdpUsd": "30.56 Billion"
    },
    {
     "country": "Peru",
     "countryCode": 51,
     "isoCodes": "PE \/ PER",
     "population": 29907003,
     "area": 1285220,
     "gdpUsd": "210.3 Billion"
    },
    {
     "country": "Philippines",
     "countryCode": 63,
     "isoCodes": "PH \/ PHL",
     "population": 99900177,
     "area": 300000,
     "gdpUsd": "272.2 Billion"
    },
    {
     "country": "Pitcairn",
     "countryCode": 64,
     "isoCodes": "PN \/ PCN",
     "population": 46,
     "area": 47
    },
    {
     "country": "Poland",
     "countryCode": 48,
     "isoCodes": "PL \/ POL",
     "population": 38500000,
     "area": 312685,
     "gdpUsd": "513.9 Billion"
    },
    {
     "country": "Portugal",
     "countryCode": 351,
     "isoCodes": "PT \/ PRT",
     "population": 10676000,
     "area": 92391,
     "gdpUsd": "219.3 Billion"
    },
    {
     "country": "Puerto Rico",
     "countryCode": "1-787, 1-939",
     "isoCodes": "PR \/ PRI",
     "population": 3916632,
     "area": 9104,
     "gdpUsd": "93.52 Billion"
    },
    {
     "country": "Qatar",
     "countryCode": 974,
     "isoCodes": "QA \/ QAT",
     "population": 840926,
     "area": 11437,
     "gdpUsd": "213.1 Billion"
    },
    {
     "country": "Republic of the Congo",
     "countryCode": 242,
     "isoCodes": "CG \/ COG",
     "population": 3039126,
     "area": 342000,
     "gdpUsd": "14.25 Billion"
    },
    {
     "country": "Reunion",
     "countryCode": 262,
     "isoCodes": "RE \/ REU",
     "population": 776948,
     "area": 2517
    },
    {
     "country": "Romania",
     "countryCode": 40,
     "isoCodes": "RO \/ ROU",
     "population": 21959278,
     "area": 237500,
     "gdpUsd": "188.9 Billion"
    },
    {
     "country": "Russia",
     "countryCode": 7,
     "isoCodes": "RU \/ RUS",
     "population": 140702000,
     "area": 17100000,
     "gdpUsd": "2.113 Trillion"
    },
    {
     "country": "Rwanda",
     "countryCode": 250,
     "isoCodes": "RW \/ RWA",
     "population": 11055976,
     "area": 26338,
     "gdpUsd": "7.7 Billion"
    },
    {
     "country": "Saint Barthelemy",
     "countryCode": 590,
     "isoCodes": "BL \/ BLM",
     "population": 8450,
     "area": 21
    },
    {
     "country": "Saint Helena",
     "countryCode": 290,
     "isoCodes": "SH \/ SHN",
     "population": 7460,
     "area": 410
    },
    {
     "country": "Saint Kitts and Nevis",
     "countryCode": "1-869",
     "isoCodes": "KN \/ KNA",
     "population": 51134,
     "area": 261,
     "gdpUsd": "767 Million"
    },
    {
     "country": "Saint Lucia",
     "countryCode": "1-758",
     "isoCodes": "LC \/ LCA",
     "population": 160922,
     "area": 616,
     "gdpUsd": "1.377 Billion"
    },
    {
     "country": "Saint Martin",
     "countryCode": 590,
     "isoCodes": "MF \/ MAF",
     "population": 35925,
     "area": 53,
     "gdpUsd": "561.5 Million"
    },
    {
     "country": "Saint Pierre and Miquelon",
     "countryCode": 508,
     "isoCodes": "PM \/ SPM",
     "population": 7012,
     "area": 242,
     "gdpUsd": "215.3 Million"
    },
    {
     "country": "Saint Vincent and the Grenadines",
     "countryCode": "1-784",
     "isoCodes": "VC \/ VCT",
     "population": 104217,
     "area": 389,
     "gdpUsd": "742 Million"
    },
    {
     "country": "Samoa",
     "countryCode": 685,
     "isoCodes": "WS \/ WSM",
     "population": 192001,
     "area": 2944,
     "gdpUsd": "705 Million"
    },
    {
     "country": "San Marino",
     "countryCode": 378,
     "isoCodes": "SM \/ SMR",
     "population": 31477,
     "area": 61,
     "gdpUsd": "1.866 Billion"
    },
    {
     "country": "Sao Tome and Principe",
     "countryCode": 239,
     "isoCodes": "ST \/ STP",
     "population": 175808,
     "area": 1001,
     "gdpUsd": "311 Million"
    },
    {
     "country": "Saudi Arabia",
     "countryCode": 966,
     "isoCodes": "SA \/ SAU",
     "population": 25731776,
     "area": 1960582,
     "gdpUsd": "718.5 Billion"
    },
    {
     "country": "Senegal",
     "countryCode": 221,
     "isoCodes": "SN \/ SEN",
     "population": 12323252,
     "area": 196190,
     "gdpUsd": "15.36 Billion"
    },
    {
     "country": "Serbia",
     "countryCode": 381,
     "isoCodes": "RS \/ SRB",
     "population": 7344847,
     "area": 88361,
     "gdpUsd": "43.68 Billion"
    },
    {
     "country": "Seychelles",
     "countryCode": 248,
     "isoCodes": "SC \/ SYC",
     "population": 88340,
     "area": 455,
     "gdpUsd": "1.271 Billion"
    },
    {
     "country": "Sierra Leone",
     "countryCode": 232,
     "isoCodes": "SL \/ SLE",
     "population": 5245695,
     "area": 71740,
     "gdpUsd": "4.607 Billion"
    },
    {
     "country": "Singapore",
     "countryCode": 65,
     "isoCodes": "SG \/ SGP",
     "population": 4701069,
     "area": 693,
     "gdpUsd": "295.7 Billion"
    },
    {
     "country": "Sint Maarten",
     "countryCode": "1-721",
     "isoCodes": "SX \/ SXM",
     "population": 37429,
     "area": 34,
     "gdpUsd": "794.7 Million"
    },
    {
     "country": "Slovakia",
     "countryCode": 421,
     "isoCodes": "SK \/ SVK",
     "population": 5455000,
     "area": 48845,
     "gdpUsd": "96.96 Billion"
    },
    {
     "country": "Slovenia",
     "countryCode": 386,
     "isoCodes": "SI \/ SVN",
     "population": 2007000,
     "area": 20273,
     "gdpUsd": "46.82 Billion"
    },
    {
     "country": "Solomon Islands",
     "countryCode": 677,
     "isoCodes": "SB \/ SLB",
     "population": 559198,
     "area": 28450,
     "gdpUsd": "1.099 Billion"
    },
    {
     "country": "Somalia",
     "countryCode": 252,
     "isoCodes": "SO \/ SOM",
     "population": 10112453,
     "area": 637657,
     "gdpUsd": "2.372 Billion"
    },
    {
     "country": "South Africa",
     "countryCode": 27,
     "isoCodes": "ZA \/ ZAF",
     "population": 49000000,
     "area": 1219912,
     "gdpUsd": "353.9 Billion"
    },
    {
     "country": "South Korea",
     "countryCode": 82,
     "isoCodes": "KR \/ KOR",
     "population": 48422644,
     "area": 98480,
     "gdpUsd": "1.198 Trillion"
    },
    {
     "country": "South Sudan",
     "countryCode": 211,
     "isoCodes": "SS \/ SSD",
     "population": 8260490,
     "area": 644329,
     "gdpUsd": "11.77 Billion"
    },
    {
     "country": "Spain",
     "countryCode": 34,
     "isoCodes": "ES \/ ESP",
     "population": 46505963,
     "area": 504782,
     "gdpUsd": "1.356 Trillion"
    },
    {
     "country": "Sri Lanka",
     "countryCode": 94,
     "isoCodes": "LK \/ LKA",
     "population": 21513990,
     "area": 65610,
     "gdpUsd": "65.12 Billion"
    },
    {
     "country": "Sudan",
     "countryCode": 249,
     "isoCodes": "SD \/ SDN",
     "population": 35000000,
     "area": 1861484,
     "gdpUsd": "52.5 Billion"
    },
    {
     "country": "Suriname",
     "countryCode": 597,
     "isoCodes": "SR \/ SUR",
     "population": 492829,
     "area": 163270,
     "gdpUsd": "5.009 Billion"
    },
    {
     "country": "Svalbard and Jan Mayen",
     "countryCode": 47,
     "isoCodes": "SJ \/ SJM",
     "population": 2550,
     "area": 62049
    },
    {
     "country": "Swaziland",
     "countryCode": 268,
     "isoCodes": "SZ \/ SWZ",
     "population": 1354051,
     "area": 17363,
     "gdpUsd": "3.807 Billion"
    },
    {
     "country": "Sweden",
     "countryCode": 46,
     "isoCodes": "SE \/ SWE",
     "population": 9555893,
     "area": 449964,
     "gdpUsd": "552 Billion"
    },
    {
     "country": "Switzerland",
     "countryCode": 41,
     "isoCodes": "CH \/ CHE",
     "population": 7581000,
     "area": 41290,
     "gdpUsd": "646.2 Billion"
    },
    {
     "country": "Syria",
     "countryCode": 963,
     "isoCodes": "SY \/ SYR",
     "population": 22198110,
     "area": 185180,
     "gdpUsd": "64.7 Billion"
    },
    {
     "country": "Taiwan",
     "countryCode": 886,
     "isoCodes": "TW \/ TWN",
     "population": 22894384,
     "area": 35980,
     "gdpUsd": "484.7 Billion"
    },
    {
     "country": "Tajikistan",
     "countryCode": 992,
     "isoCodes": "TJ \/ TJK",
     "population": 7487489,
     "area": 143100,
     "gdpUsd": "8.513 Billion"
    },
    {
     "country": "Tanzania",
     "countryCode": 255,
     "isoCodes": "TZ \/ TZA",
     "population": 41892895,
     "area": 945087,
     "gdpUsd": "31.94 Billion"
    },
    {
     "country": "Thailand",
     "countryCode": 66,
     "isoCodes": "TH \/ THA",
     "population": 67089500,
     "area": 514000,
     "gdpUsd": "400.9 Billion"
    },
    {
     "country": "Togo",
     "countryCode": 228,
     "isoCodes": "TG \/ TGO",
     "population": 6587239,
     "area": 56785,
     "gdpUsd": "4.299 Billion"
    },
    {
     "country": "Tokelau",
     "countryCode": 690,
     "isoCodes": "TK \/ TKL",
     "population": 1466,
     "area": 10
    },
    {
     "country": "Tonga",
     "countryCode": 676,
     "isoCodes": "TO \/ TON",
     "population": 122580,
     "area": 748,
     "gdpUsd": "477 Million"
    },
    {
     "country": "Trinidad and Tobago",
     "countryCode": "1-868",
     "isoCodes": "TT \/ TTO",
     "population": 1228691,
     "area": 5128,
     "gdpUsd": "27.13 Billion"
    },
    {
     "country": "Tunisia",
     "countryCode": 216,
     "isoCodes": "TN \/ TUN",
     "population": 10589025,
     "area": 163610,
     "gdpUsd": "48.38 Billion"
    },
    {
     "country": "Turkey",
     "countryCode": 90,
     "isoCodes": "TR \/ TUR",
     "population": 77804122,
     "area": 780580,
     "gdpUsd": "821.8 Billion"
    },
    {
     "country": "Turkmenistan",
     "countryCode": 993,
     "isoCodes": "TM \/ TKM",
     "population": 4940916,
     "area": 488100,
     "gdpUsd": "40.56 Billion"
    },
    {
     "country": "Turks and Caicos Islands",
     "countryCode": "1-649",
     "isoCodes": "TC \/ TCA",
     "population": 20556,
     "area": 430
    },
    {
     "country": "Tuvalu",
     "countryCode": 688,
     "isoCodes": "TV \/ TUV",
     "population": 10472,
     "area": 26,
     "gdpUsd": "38 Million"
    },
    {
     "country": "U.S. Virgin Islands",
     "countryCode": "1-340",
     "isoCodes": "VI \/ VIR",
     "population": 108708,
     "area": 352
    },
    {
     "country": "Uganda",
     "countryCode": 256,
     "isoCodes": "UG \/ UGA",
     "population": 33398682,
     "area": 236040,
     "gdpUsd": "22.6 Billion"
    },
    {
     "country": "Ukraine",
     "countryCode": 380,
     "isoCodes": "UA \/ UKR",
     "population": 45415596,
     "area": 603700,
     "gdpUsd": "175.5 Billion"
    },
    {
     "country": "United Arab Emirates",
     "countryCode": 971,
     "isoCodes": "AE \/ ARE",
     "population": 4975593,
     "area": 82880,
     "gdpUsd": "390 Billion"
    },
    {
     "country": "United Kingdom",
     "countryCode": 44,
     "isoCodes": "GB \/ GBR",
     "population": 62348447,
     "area": 244820,
     "gdpUsd": "2.49 Trillion"
    },
    {
     "country": "United States",
     "countryCode": 1,
     "isoCodes": "US \/ USA",
     "population": 310232863,
     "area": 9629091,
     "gdpUsd": "16.72 Trillion"
    },
    {
     "country": "Uruguay",
     "countryCode": 598,
     "isoCodes": "UY \/ URY",
     "population": 3477000,
     "area": 176220,
     "gdpUsd": "57.11 Billion"
    },
    {
     "country": "Uzbekistan",
     "countryCode": 998,
     "isoCodes": "UZ \/ UZB",
     "population": 27865738,
     "area": 447400,
     "gdpUsd": "55.18 Billion"
    },
    {
     "country": "Vanuatu",
     "countryCode": 678,
     "isoCodes": "VU \/ VUT",
     "population": 221552,
     "area": 12200,
     "gdpUsd": "828 Million"
    },
    {
     "country": "Vatican",
     "countryCode": 379,
     "isoCodes": "VA \/ VAT",
     "population": 921,
     "area": 0
    },
    {
     "country": "Venezuela",
     "countryCode": 58,
     "isoCodes": "VE \/ VEN",
     "population": 27223228,
     "area": 912050,
     "gdpUsd": "367.5 Billion"
    },
    {
     "country": "Vietnam",
     "countryCode": 84,
     "isoCodes": "VN \/ VNM",
     "population": 89571130,
     "area": 329560,
     "gdpUsd": "170 Billion"
    },
    {
     "country": "Wallis and Futuna",
     "countryCode": 681,
     "isoCodes": "WF \/ WLF",
     "population": 16025,
     "area": 274
    },
    {
     "country": "Western Sahara",
     "countryCode": 212,
     "isoCodes": "EH \/ ESH",
     "population": 273008,
     "area": 266000
    },
    {
     "country": "Yemen",
     "countryCode": 967,
     "isoCodes": "YE \/ YEM",
     "population": 23495361,
     "area": 527970,
     "gdpUsd": "43.89 Billion"
    },
    {
     "country": "Zambia",
     "countryCode": 260,
     "isoCodes": "ZM \/ ZMB",
     "population": 13460305,
     "area": 752614,
     "gdpUsd": "22.24 Billion"
    },
    {
     "country": "Zimbabwe",
     "countryCode": 263,
     "isoCodes": "ZW \/ ZWE",
     "population": 11651858,
     "area": 390580,
     "gdpUsd": "10.48 Billion"
    }
  ]
  public totalRecords = 0;
  public failedRecords = 0;
  public logs=[];
  public buttonDisable = true;

  constructor(private api:ContriesService){}

  public ngOnInit(): void {
      
  }

  public async loadContriesData():Promise<void>{
    this.totalRecords = 0;
    this.failedRecords = 0;
    this.logs=[]
    this.buttonDisable =false;
    for (let index = 0; index < this.contriesdata.length; index++) {
      const country = this.contriesdata[index];
      try {
        await this.api.loadContries(country).toPromise();
        this.totalRecords = this.totalRecords+1;
        this.logs.push(`<h5> <span class='success'> <strong>INSERTED SUCCESSFULLY</strong> </span> ${country.countryCode} - ${country.country}<h5>`)
      } catch (error) {
        this.failedRecords = this.failedRecords+1;
        this.logs.push(`<h5> <span class='failed'> <strong>INSERTED FAILED</strong><span> ${country.countryCode} - ${country.country}  <strong>Record Already Existed</strong></h5>`)
        continue;
      }
    }
    this.buttonDisable =true;
    
  }

}
