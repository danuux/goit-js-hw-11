import axios from 'axios';

const fetchImages = async (name, page, perPage) => {
  const baseURL = 'https://pixabay.com/api/';
  const key = '43589952-9412a2249e6c48e695659638d';

  try {
    const response = await axios.get(`${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
    return response.data;
  } catch (error) {
    console.error('ERROR:', error);
    throw error; 
  }
};

const fadeEffect = () => {
  const preloader = document.querySelector('.preloader');
  
  if (!preloader) return; 
  
  let opacity = 1;
  const intervalId = setInterval(() => {
    if (opacity > 0) {
      preloader.style.opacity = opacity;
      opacity -= 0.1;
    } else {
      clearInterval(intervalId);
      preloader.remove();
    }
  }, 200);
};

export { fetchImages, fadeEffect };
