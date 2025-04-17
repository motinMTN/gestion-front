import axios, { AxiosInstance } from "axios";
import store from "../store";
import DOMPurify from "dompurify";
import { clearUser } from "../slices/authSlice";

const environment = import.meta.env;
const baseURL = `${environment.VITE_API_URL}${environment.VITE_API_PREFIX}${environment.VITE_API_VERSION}`;

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    // 'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'  
  },
  transformRequest: [function (data: any) {    
    // No transformación específica para multipart/form-data, solo para JSON
    if (data && !(data instanceof FormData)) {
      const sanitizedData = DOMPurify.sanitize(JSON.stringify(data));
      return JSON.stringify(JSON.parse(sanitizedData));
    } 
    
    return data;
  }],
});

// Configura el interceptor para agregar el token de autenticación a todas las solicitudes
instance.interceptors.request.use((config: any) => {
  const authUser = store.getState().auth;
  const token = authUser.token;
  console.log({ token });

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Configura el interceptor de respuesta para manejar errores de autenticación
instance.interceptors.response.use(
  response => response,
  error => {
    console.log('Interceptor de respuesta - Error:', error);

    const { config, response } = error;

    if (response && response.status === 401) {
      // Error 401: No autorizado
      console.log('Error 401 detectado - Ejecutando logout');
      store.dispatch(clearUser());
      localStorage.removeItem("token");
    } else if (response && response.status === 403) {
      // Error 403: Prohibido (puedes manejarlo según tus necesidades)
      console.log('Error 403 detectado - Manejar según sea necesario');
      store.dispatch(clearUser());
      localStorage.removeItem("token");
      // Aquí puedes decidir qué hacer en caso de error 403
      // Por ejemplo, redireccionar a una página de acceso denegado
    }

    // Rechazar el error para que se propague a la siguiente cadena de promesas
    return Promise.reject(error);
  }
);

export default instance;
