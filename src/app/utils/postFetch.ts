// A general purpose post fetch function

export const postFetch = async (url: string, data: any) => {
  try {
    const response = await fetch(process.env.URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
