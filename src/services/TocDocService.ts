import instance from "./axios-instance";

export class TocDocService {
  public static post(end_point: string, data?: any): Promise<any> {
    
    const headers = {
      'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
    };
    
    const config = {
      headers: headers,
    };

    return instance.post(end_point, data, config)
      .then(response => {        
        return response;
      })
      .catch(error => {        
        // console.error('Error en POST:', error);
        throw error;
      });
  }

  public static get(end_point: string, data?: any): Promise<any> {    
    return instance.get(end_point, data )
     .then(response => {
        return response;
     })
     .catch(error => {
        // console.error('Error en GET:', error);
        throw error;
      });
  }

  public static put(end_point: string, data?: any): Promise<any> { 
    const headers = {
      'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
    };

    const config = {
      headers: headers,
    };

    return instance.put(end_point, data, config)    
     .then(response => {
        return response;
     })
     .catch(error => {
        // console.error('Error en PUT:', error);
        throw error;
      });
  }
  public static delete(end_point: string, data?: any): Promise<any> {    
    return instance.delete(end_point, data)
     .then(response => {
        return response;
     })
     .catch(error => {
        // console.error('Error en DELETE:', error);
        throw error;
      });
  }
  public static patch(end_point: string, data?: any): Promise<any> { 
    const headers = {
      'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
    };

    const config = {
      headers: headers,
    };

    return instance.patch(end_point, data, config)    
     .then(response => {
        return response;
     })
     .catch(error => {
        // console.error('Error en PATCH:', error);
        throw error;
      });
  }
}
