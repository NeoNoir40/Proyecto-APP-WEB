const pruebaQuimicApi = (req, res) => {
    res.send("Probando API quimmica");
}
const ApiQuimic = (req, res) => {
    res.send(tablaPeriodica);
}

const tablaPeriodica = [
    {
        id: 1,
        nombre: "Hidrógeno",
        simbolo: "H",
        numero: "1",
        masa: "1.00784(7)",
        periodo: "1",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027019.png"
    },
    {
        id: 2,
        nombre: "Helio",
        simbolo: "He",
        numero: "2",
        masa: "4.002602(2)",
        periodo: "1",
        grupo: "18",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027107.png"
    },
    {
        id: 3,
        nombre: "Litio",
        simbolo: "Li",
        numero: "3",
        masa: "6.941(2)",
        periodo: "2",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027022.png"
    },
    {
        id: 4,
        nombre: "Berilio",
        simbolo: "Be",
        numero: "4",
        masa: "9.012182(3)",
        periodo: "2",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027025.png"
    },
    {
        id: 5,
        nombre: "Boro",
        simbolo: "B",
        numero: "5",
        masa: "10.811(7)",
        periodo: "2",
        grupo: "13",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027083.png"
    },
    {
        id: 6,
        nombre: "Carbono",
        simbolo: "C",
        numero: "6",
        masa: "12.0107(8)",
        periodo: "2",
        grupo: "14",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027087.png"
    },
    {
        id: 7,
        nombre: "Nitrógeno",
        simbolo: "N",
        numero: "7",
        masa: "14.0067(2)",
        periodo: "2",
        grupo: "15",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027091.png"
    },
    {
        id: 8,
        nombre: "Oxígeno",
        simbolo: "O",
        numero: "8",
        masa: "15.9994(3)",
        periodo: "2",
        grupo: "16",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027093.png"
    },
    {
        id: 9,
        nombre: "Flúor",
        simbolo: "F",
        numero: "9",
        masa: "18.9984032(5)",
        periodo: "2",
        grupo: "17",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027099.png"
    },
    {
        id: 10,
        nombre: "Neón",
        simbolo: "Ne",
        numero: "10",
        masa: "20.1797(6)",
        periodo: "2",
        grupo: "18",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027103.png"
    },
    {
        id: 11,
        nombre: "Sodio",
        simbolo: "Na",
        numero: "11",
        masa: "22.98976928(2)",
        periodo: "3",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027028.png"
    },
    {
        id: 12,
        nombre: "Magnesio",
        simbolo: "Mg",
        numero: "12",
        masa: "24.3050(6)",
        periodo: "3",
        grupo: "2",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027033.png"
    },
    {
        id: 13,
        nombre: "Aluminio",
        simbolo: "Al",
        numero: "13",
        masa: "26.9815386(8)",
        periodo: "3",
        grupo: "13",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027110.png"
    },
    {
        id: "14",
        nombre: "Silicio",
        simbolo: "Si",
        numero: "14",
        masa: "28.0855(3)",
        periodo: "3",
        grupo: "14",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027113.png"
    },
    {
        id: 15,
        nombre: "Fósforo",
        simbolo: "P",
        numero: "15",
        masa: "30.973762(2)",
        periodo: "3",
        grupo: "15",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027117.png"
    },
    {
        id: 16,
        nombre: "Azufre",
        simbolo: "S",
        numero: "16",
        masa: "32.065(5)",
        periodo: "3",
        grupo: "16",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027123.png"
    },
    {
        id: 17,
        nombre: "Cloro",
        simbolo: "Cl",
        numero: "17",
        masa: "35.453(2)",
        periodo: "3",
        grupo: "17",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027126.png"
    },
    {
        id: 18,
        nombre: "Argón",
        simbolo: "Ar",
        numero: "18",
        masa: "39.948(1)",
        periodo: "3",
        grupo: "18",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027128.png"
    },
    {
        id: 19,
        nombre: "Potasio",
        simbolo: "K",
        numero: "19",
        masa: "39.0983(1)",
        periodo: "4",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027035.png"
    },
    {
        id: 20,
        nombre: "Calcio",
        simbolo: "Ca",
        numero: "20",
        masa: "40.078(4)",
        periodo: "4",
        grupo: "2",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027040.png"
    },
    {
        id: 21,
        nombre: "Escandio",
        simbolo: "Sc",
        numero: "21",
        masa: "44.955912(6)",
        periodo: "4",
        grupo: "3",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027045.png"
    },
    {
        id: 22,
        nombre: "Titanio",
        simbolo: "Ti",
        numero: "22",
        masa: "	47.867(1)",
        periodo: "4",
        grupo: "4",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027049.png"
    },
    {
        id: 23,
        nombre: "Vanadio",
        simbolo: "V",
        numero: "23",
        masa: "50.9415(1)",
        periodo: "4",
        grupo: "5",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027051.png"
    },
    {
        id: 24,
        nombre: "Cromo",
        simbolo: "Cr",
        numero: "25",
        masa: "51.9961(6)",
        periodo: "4",
        grupo: "6",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027057.png"
    },
    {
        id: 25,
        nombre: "Manganeso",
        simbolo: "Mn",
        numero: "25",
        masa: "54.938045(5)",
        periodo: "4",
        grupo: "7",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027060.png"
    },
    {
        id: 26,
        nombre: "Hierro",
        simbolo: "Fe",
        numero: "26",
        masa: "55.845(2)",
        periodo: "4",
        grupo: "8",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027064.png"
    },
    {
        id: 27,
        nombre: "Cobalto",
        simbolo: "Co",
        numero: "27",
        masa: "58.933200(9)",
        periodo: "4",
        grupo: "9",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027069.png"
    },
    {
        id: 28,
        nombre: "Niquel",
        simbolo: "Ni",
        numero: "28",
        masa: "58.6934(2)",
        periodo: "4",
        grupo: "10",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027073.png"
    },
    {
        id: 29,
        nombre: "Cobre",
        simbolo: "Cu",
        numero: "29",
        masa: "63.546(3)",
        periodo: "4",
        grupo: "11",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027077.png"
    },
    {
        id: 30,
        nombre: "Zinc",
        simbolo: "Zn",
        numero: "30",
        masa: "65.409(4)",
        periodo: "4",
        grupo: "12",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027081.png"
    },
    {
        id: 31,
        nombre: "Galio",
        simbolo: "Ga",
        numero: "31",
        masa: "69.723(1)",
        periodo: "4",
        grupo: "13",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027132.png"
    },
    {
        id: 32,
        nombre: "Germanio",
        simbolo: "Ge",
        numero: "32",
        masa: "72.64(1)",
        periodo: "4",
        grupo: "14",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027135.png"
    },
    {
        id: 33,
        nombre: "Arsénico",
        simbolo: "As",
        numero: "33",
        masa: "74.92160(2)",
        periodo: "4",
        grupo: "15",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027139.png"
    },
    {
        id: 34,
        nombre: "Selenio",
        simbolo: "Se",
        numero: "34",
        masa: "78.96(3)",
        periodo: "4",
        grupo: "16",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027143.png"
    },
    {
        id: 35,
        nombre: "Bromo",
        simbolo: "Br",
        numero: "35",
        masa: "79.904(1)",
        periodo: "4",
        grupo: "17",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027146.png"
    },
    {
        id: 36,
        nombre: "Kriptón",
        simbolo: "Kr",
        numero: "36",
        masa: "83.798(2)",
        periodo: "4",
        grupo: "18",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027148.png"
    },
    {
        id: 37,
        nombre: "Rubidio",
        simbolo: "Rb",
        numero: "37",
        masa: "85.4678(3)",
        periodo: "5",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027152.png"
    },
    {
        id: 38,
        nombre: "Estroncio",
        simbolo: "Sr",
        numero: "38",
        masa: "87.62(1)",
        periodo: "5",
        grupo: "2",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027155.png"
    },
    {
        id: 39,
        nombre: "Itrio",
        simbolo: "Y",
        numero: "39",
        masa: "88.90585(2)",
        periodo: "5",
        grupo: "3",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027175.png"
    },
    {
        id: 40,
        nombre: "Zirconio",
        simbolo: "Zr",
        numero: "40",
        masa: "91.224(2)",
        periodo: "5",
        grupo: "4",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027181.png"
    },
    {
        id: 41,
        nombre: "Niobio",
        simbolo: "Nb",
        numero: "41",
        masa: "92.906 38(2)",
        periodo: "5",
        grupo: "5",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027185.png"
    },
    {
        id: 42,
        nombre: "Molibdeno",
        simbolo: "Mo",
        numero: "42",
        masa: "95.94(2)",
        periodo: "5",
        grupo: "6",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027189.png"
    },
    {
        id: 43,
        nombre: "Tecnecio",
        simbolo: "Tc",
        numero: "43",
        masa: "[98.9063]",
        periodo: "5",
        grupo: "7",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027193.png"
    },
    {
        id: 44,
        nombre: "Rutenio",
        simbolo: "Ru",
        numero: "44",
        masa: "101.07(2)",
        periodo: "5",
        grupo: "8",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027197.png"
    },
    {
        id: 45,
        nombre: "Rodio",
        simbolo: "Rh",
        numero: "45",
        masa: "102.90550(2)",
        periodo: "5",
        grupo: "9",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027201.png"
    },
    {
        id: 46,
        nombre: "Paladio",
        simbolo: "Pd",
        numero: "46",
        masa: "106.42(1)",
        periodo: "5",
        grupo: "10",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027204.png"
    },
    {
        id: 47,
        nombre: "Plata",
        simbolo: "Ag",
        numero: "47",
        masa: "107.8682(2)",
        periodo: "5",
        grupo: "11",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027208.png"
    },
    {
        id: 48,
        nombre: "Cadmio",
        simbolo: "Cd",
        numero: "48",
        masa: "112.411(8)",
        periodo: "5",
        grupo: "12",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027212.png"
    },
    {
        id: 49,
        nombre: "Indio",
        simbolo: "In",
        numero: "49",
        masa: "114.818(3)",
        periodo: "5",
        grupo: "13",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027217.png"
    },
    {
        id: 50,
        nombre: "Estaño",
        simbolo: "Sn",
        numero: "50",
        masa: "118.710(7)",
        periodo: "5",
        grupo: "14",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027225.png"
    },
    {
        id: 51,
        nombre: "Antimonio",
        simbolo: "Sb",
        numero: "51",
        masa: "121.760(1)",
        periodo: "5",
        grupo: "15",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027230.png"
    },
    {
        id: 52,
        nombre: "Teluro",
        simbolo: "Te",
        numero: "52",
        masa: "127.60(3)",
        periodo: "5",
        grupo: "16",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027234.png"
    },
    {
        id: 53,
        nombre: "Yodo",
        simbolo: "I",
        numero: "53",
        masa: "126.90447(3)",
        periodo: "5",
        grupo: "17",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027238.png"
    },
    {
        id: 54,
        nombre: "Xenón",
        simbolo: "Xe",
        numero: "54",
        masa: "131.293(6)",
        periodo: "5",
        grupo: "18",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027242.png"
    },
    {
        id: 55,
        nombre: "Cesio",
        simbolo: "Cs",
        numero: "55",
        masa: "132.9054519(2)",
        periodo: "6",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027159.png"
    },
    {
        id: 56,
        nombre: "Bario",
        simbolo: "Ba",
        numero: "56",
        masa: "137.327(7)",
        periodo: "6",
        grupo: "2",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027163.png"
    },
    {
        id: 57,
        nombre: "Lantano",
        simbolo: "La",
        numero: "57",
        masa: "138.90547(7)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027362.png"
    },
    {
        id: 58,
        nombre: "Cerio",
        simbolo: "Ce",
        numero: "58",
        masa: "140.116(1)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027366.png"
    },
    {
        id: 59,
        nombre: "Praseodimio",
        simbolo: "Pr",
        numero: "59",
        masa: "140.90765(2)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027369.png"
    },
    {
        id: 60,
        nombre: "Neodimio",
        simbolo: "Nd",
        numero: "60",
        masa: "144.242(3)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027374.png"
    },
    {
        id: 61,
        nombre: "Prometio",
        simbolo: "Pm",
        numero: "61",
        masa: "[146.9151]",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027378.png"
    },
    {
        id: 62,
        nombre: "Samario",
        simbolo: "Sm",
        numero: "63",
        masa: "150.36(2)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027381.png"
    },
    {
        id: 63,
        nombre: "Europio",
        simbolo: "Eu",
        numero: "63",
        masa: "151.964(1)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027386.png"
    },
    {
        id: 64,
        nombre: "Gadolinio",
        simbolo: "Gd",
        numero: "64",
        masa: "157.25(3)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027391.png"
    },
    {
        id: 65,
        nombre: "Terbio",
        simbolo: "Tb",
        numero: "65",
        masa: "158.92535(2)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027395.png"
    },
    {
        id: 66,
        nombre: "Disropio",
        simbolo: "Dy",
        numero: "66",
        masa: "162.500(1)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027397.png"
    },
    {
        id: 67,
        nombre: "Holmio",
        simbolo: "Ho",
        numero: "67",
        masa: "164.93032(2)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027402.png"
    },
    {
        id: 68,
        nombre: "Erbio",
        simbolo: "Er",
        numero: "68",
        masa: "167.259(3)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027405.png"
    },
    {
        id: 69,
        nombre: "Tulio",
        simbolo: "Tm",
        numero: "69",
        masa: "168.93421(2)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027409.png"
    },
    {
        id: 70,
        nombre: "Iterbio",
        simbolo: "Yb",
        numero: "70",
        masa: "173.04(3)",
        periodo: "6",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027413.png"
    },
    {
        id: 71,
        nombre: "Lutecio",
        simbolo: "Lu",
        numero: "71",
        masa: "174.967(1)",
        periodo: "6",
        grupo: "3",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027417.png"
    },
    {
        id: 72,
        nombre: "Hafnio",
        simbolo: "Hf",
        numero: "73",
        masa: "178.49(2)",
        periodo: "6",
        grupo: "4",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027245.png"
    },
    {
        id: 73,
        nombre: "Tantalio",
        simbolo: "Ta",
        numero: "3",
        masa: "180.9479(1)",
        periodo: "6",
        grupo: "5",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027249.png"
    },
    {
        id: 74,
        nombre: "Wolframio",
        simbolo: "W",
        numero: "74",
        masa: "183.84(1)",
        periodo: "6",
        grupo: "6",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027253.png"
    },
    {
        id: 75,
        nombre: "Renio",
        simbolo: "Re",
        numero: "75",
        masa: "186.207(1)",
        periodo: "6",
        grupo: "7",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027258.png"
    },
    {
        id: 76,
        nombre: "Osmio",
        simbolo: "Os",
        numero: "76",
        masa: "190.23(3)",
        periodo: "6",
        grupo: "8",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027262.png"
    },
    {
        id: 77,
        nombre: "Iridio",
        simbolo: "Ir",
        numero: "77",
        masa: "192.217(3)",
        periodo: "6",
        grupo: "9",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027266.png"
    },
    {
        id: 78,
        nombre: "Platino",
        simbolo: "Pt",
        numero: "78",
        masa: "195.084(9)",
        periodo: "6",
        grupo: "10",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027270.png"
    },
    {
        id: 79,
        nombre: "Oro",
        simbolo: "Au",
        numero: "79",
        masa: "196.966569(4)",
        periodo: "6",
        grupo: "11",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027274.png"
    },
    {
        id: 80,
        nombre: "Mercurio",
        simbolo: "Hg",
        numero: "80",
        masa: "200.59(2)",
        periodo: "6",
        grupo: "12",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027278.png"
    },
    {
        id: 81,
        nombre: "Talio",
        simbolo: "Tl",
        numero: "81",
        masa: "204.3833(2)",
        periodo: "6",
        grupo: "13",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027281.png"
    },
    {
        id: 82,
        nombre: "Plomo",
        simbolo: "Pb",
        numero: "83",
        masa: "207.2(1)",
        periodo: "6",
        grupo: "14",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027286.png"
    },
    {
        id: 83,
        nombre: "Bismuto",
        simbolo: "Bi",
        numero: "83",
        masa: "208.98040(1)",
        periodo: "6",
        grupo: "15",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027290.png"
    },
    {
        id: 84,
        nombre: "Polonio",
        simbolo: "Po",
        numero: "84",
        masa: "[208.9824]",
        periodo: "6",
        grupo: "16",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027295.png"
    },
    {
        id: 85,
        nombre: "Astato",
        simbolo: "At",
        numero: "85",
        masa: "[209.9871]",
        periodo: "6",
        grupo: "17",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027299.png"
    },
    {
        id: 86,
        nombre: "Radón",
        simbolo: "Rn",
        numero: "86",
        masa: "[222.0176]",
        periodo: "6",
        grupo: "18",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027302.png"
    },
    {
        id: 87,
        nombre: "Francio",
        simbolo: "Fr",
        numero: "87",
        masa: "[223.0197]",
        periodo: "7",
        grupo: "1",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027167.png"
    },
    {
        id: 88,
        nombre: "Radio",
        simbolo: "Ra",
        numero: "88",
        masa: "[226.0254]",
        periodo: "7",
        grupo: "2",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027171.png"
    },
    {
        id: 89,
        nombre: "Actinio",
        simbolo: "Ac",
        numero: "89",
        masa: "[227.0278]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027421.png"
    },
    {
        id: 90,
        nombre: "Torio",
        simbolo: "Th",
        numero: "90",
        masa: "232.03806(2)",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027427.png"
    },
    {
        id: 91,
        nombre: "Protactinio",
        simbolo: "Pa",
        numero: "91",
        masa: "231.03588(2)",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027432.png"
    },
    {
        id: 92,
        nombre: "Uranio",
        simbolo: "U",
        numero: "92",
        masa: "238.02891(3)",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027436.png"
    },
    {
        id: 93,
        nombre: "Neptunio",
        simbolo: "Np",
        numero: "93",
        masa: "[237.0482]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027441.png"
    },
    {
        id: 94,
        nombre: "Plutonio",
        simbolo: "Pu",
        numero: "94",
        masa: "[244.0642]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027447.png"
    },
    {
        id: 95,
        nombre: "Americio",
        simbolo: "Am",
        numero: "95",
        masa: "[243.0614]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027450.png"
    },
    {
        id: 96,
        nombre: "Curio",
        simbolo: "Cm",
        numero: "96",
        masa: "[247.0703]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027455.png"
    },
    {
        id: 97,
        nombre: "Berkelio",
        simbolo: "Bk",
        numero: "97",
        masa: "[247.0703]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027459.png"
    },
    {
        id: 98,
        nombre: "Californio",
        simbolo: "Cf",
        numero: "98",
        masa: "[251.0796]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027463.png"
    },
    {
        id: 99,
        nombre: "Einstenio",
        simbolo: "Es",
        numero: "99",
        masa: "[252.0829]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027465.png"
    },
    {
        id: 100,
        nombre: "Fermio",
        simbolo: "Fm",
        numero: "100",
        masa: "[257.0951]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027472.png"
    },
    {
        id: 101,
        nombre: "Mendelevio",
        simbolo: "Md",
        numero: "101",
        masa: "[258.0986]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027476.png"
    },
    {
        id: 102,
        nombre: "Nobelio",
        simbolo: "No",
        numero: "102",
        masa: "[259.1009]",
        periodo: "7",
        grupo: "",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027478.png"
    },
    {
        id: 103,
        nombre: "Laurencio",
        simbolo: "Lr",
        numero: "103",
        masa: "[260.1053]",
        periodo: "7",
        grupo: "3",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027480.png"
    },
    {
        id: 104,
        nombre: "Rutherfordio",
        simbolo: "Rf",
        numero: "104",
        masa: "[261.1087]",
        periodo: "7",
        grupo: "4",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027306.png"
    },
    {
        id: 105,
        nombre: "Dubnio",
        simbolo: "Db",
        numero: "105",
        masa: "[262.1138]",
        periodo: "7",
        grupo: "5",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027310.png"
    },
    {
        id: 106,
        nombre: "Seaborgio",
        simbolo: "Sg",
        numero: "106",
        masa: "[263.1182]",
        periodo: "7",
        grupo: "6",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027312.png"
    },
    {
        id: 107,
        nombre: "Bohrio",
        simbolo: "Bh",
        numero: "107",
        masa: "[262.1229]",
        periodo: "7",
        grupo: "7",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027315.png"
    },
    {
        id: 108,
        nombre: "Hassio",
        simbolo: "Hs",
        numero: "108",
        masa: "[265]",
        periodo: "7",
        grupo: "8",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027319.png"
    },
    {
        id: 109,
        nombre: "Meitnerio",
        simbolo: "Mt",
        numero: "109",
        masa: "[266]",
        periodo: "7",
        grupo: "9",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027324.png"
    },
    {
        id: 110,
        nombre: "Darmstatio",
        simbolo: "Ds",
        numero: "110",
        masa: "[269]",
        periodo: "7",
        grupo: "10",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027329.png"
    },
    {
        id: 111,
        nombre: "Roentgenio",
        simbolo: "Rg",
        numero: "111",
        masa: "[272]",
        periodo: "7",
        grupo: "11",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027333.png"
    },
    {
        id: 112,
        nombre: "Copernicio",
        simbolo: "Cn",
        numero: "112",
        masa: "[285]",
        periodo: "7",
        grupo: "12",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027335.png"
    },
    {
        id: 113,
        nombre: "Nihonio",
        simbolo: "Nh",
        numero: "113",
        masa: "[284]",
        periodo: "7",
        grupo: "13",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027339.png"
    },
    {
        id: 114,
        nombre: "Flerovio",
        simbolo: "Fl",
        numero: "114",
        masa: "[289]",
        periodo: "7",
        grupo: "14",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027343.png"
    },
    {
        id: 115,
        nombre: "Moscovio",
        simbolo: "Mc",
        numero: "115",
        masa: "[288]",
        periodo: "7",
        grupo: "15",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027348.png"
    },
    {
        id: 116,
        nombre: "Livermorio",
        simbolo: "Lv",
        numero: "116",
        masa: "[290]",
        periodo: "7",
        grupo: "16",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027351.png"
    },
    {
        id: 117,
        nombre: "Teneso",
        simbolo: "Ts",
        numero: "117",
        masa: "[294]",
        periodo: "7",
        grupo: "17",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027355.png"
    },
    {
        id: 118,
        nombre: "Oganesón",
        simbolo: "Og",
        numero: "118",
        masa: "[294]",
        periodo: "7",
        grupo: "18",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027359.png"
    }    
]
module.exports = {
    pruebaQuimicApi,
    ApiQuimic
}