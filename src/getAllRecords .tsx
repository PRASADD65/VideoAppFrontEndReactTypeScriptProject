import axios from 'axios';

const API_URL = 'http://localhost:8080/api/video';

export interface Record {
  id: number;
  videoName: string;
  videoDescription: string;
  videoSourceUrl :string;
}

export const getAllRecords = async (videoName?: string): Promise<Record[]> => {
  const response = await axios.get(API_URL, {
    params: { videoName },
  });
  return response.data;
};

export const fetchAllVideos = async () => {
  
    const response = await axios.get<Record[]>('http://localhost:8080/api/video/getAllVideos');
    return response.data; 
};