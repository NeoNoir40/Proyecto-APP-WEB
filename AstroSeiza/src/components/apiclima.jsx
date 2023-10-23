import axios from "axios";

const url = 'https://api.openweathermap.org/data/2.5/weather?'//q=${ciudad}&lang=es&appid=${APIKey}
const APIKey = '15906b2f5062bc69e918e5b34f697e39'

export const verClima = async (ciudad) => {
    try{
        const {data} = await axios.get(url + `q=${ciudad}&lang=es&appid=${APIKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}