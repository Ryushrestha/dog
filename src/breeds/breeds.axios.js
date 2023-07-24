import axios from 'axios'

export const getDogCategories = async ()=> {
    const options = {
        method: 'GET',
        url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
        headers: {
          'X-RapidAPI-Key': '936bd9fe5fmshd6b04f3a8e8560ap1fbed9jsne6c834ad6ecb',
          'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
      };

      const response = await axios.request(options)
      const data= response.data.slice(0,15)
      console.log("data",data)
      return data
}