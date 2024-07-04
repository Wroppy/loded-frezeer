// A general purpose post fetch function

export const postFetch = async (url: string, data: any) => {
  try {
    // Checks if the fetch is being done on the client or server
    if (process.env.URL) {
      url = process.env.URL + url;
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
