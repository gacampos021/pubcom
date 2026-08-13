import api from "./api";

export default async function getAllPubComAPI(){
  const response = await api.get('/public-consultations/')
  console.log('aoi',response)
  return response;
}