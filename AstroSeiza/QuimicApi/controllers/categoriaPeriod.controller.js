const CategApi = (req, res) => {
    res.send(categoriaApi);
}

const categoriaApi = [
    {
        id: 1,
        nombreCat: "Alcalinos",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027028.png"
    },
    {
        id: 2,
        nombreCat: "Alcalino-térreo",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027040.png"
    },
    {
        id: 3,
        nombreCat: "Lantánidos",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027362.png"
    },
    {
        id: 4,
        nombreCat: "Actínidos",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027421.png"
    },
    {
        id: 5,
        nombreCat: "Metales de Transición",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027049.png"
    },
    {
        id: 6,
        nombreCat: "Otros Metales",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027110.png"
    },
    {
        id: 7,
        nombreCat: "Metaloides",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027083.png"
    },
    {
        id: 8,
        nombreCat: "Otros No Metales",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027087.png"
    },
    {
        id: 9,
        nombreCat: "Halógenos",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027126.png"
    },
    {
        id: 10,
        nombreCat: "Gases Nobles",
        img: "https://cdn-icons-png.flaticon.com/128/4027/4027107.png"
    },

]
module.exports = {
    CategApi
}