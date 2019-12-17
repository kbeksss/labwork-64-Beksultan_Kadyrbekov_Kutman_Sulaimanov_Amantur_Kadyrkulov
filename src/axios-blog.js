import axios from 'axios';

const axiosBlog = axios.create({
    baseURL: 'https://my-blog-9bc8c.firebaseio.com/'
});

export default axiosBlog;