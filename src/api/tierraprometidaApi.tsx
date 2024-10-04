export const tierraprometidaApi = {
  get: async (url: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        ...options,
      });
      if (!response.ok) {
        throw new Error(`GET request failed: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error in GET request:", error);
      throw error;
    }
  },

  post: async (url: string, data: any, options: RequestInit = {}) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers, // Permite pasar otros headers
        },
        body: JSON.stringify(data),
        ...options,
      });
      if (!response.ok) {
        throw new Error(`POST request failed: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error in POST request:", error);
      throw error;
    }
  },

  put: async (url: string, data: any, options: RequestInit = {}) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...options.headers, // Permite pasar otros headers
        },
        body: JSON.stringify(data),
        ...options,
      });
      if (!response.ok) {
        throw new Error(`PUT request failed: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error in PUT request:", error);
      throw error;
    }
  },

  delete: async (url: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        ...options,
      });
      if (!response.ok) {
        throw new Error(`DELETE request failed: ${response.status}`);
      }
      return response.json(); // Esto puede ser opcional dependiendo de la API
    } catch (error) {
      console.error("Error in DELETE request:", error);
      throw error;
    }
  },
};
