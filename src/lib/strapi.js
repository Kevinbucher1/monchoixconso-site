const STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_API_KEY = import.meta.env.STRAPI_API_KEY;

export async function getPages() {
  if (!STRAPI_URL || !STRAPI_API_KEY) {
    console.error("Erreur: STRAPI_URL ou STRAPI_API_KEY n'est pas défini dans les variables d'environnement.");
    return null;
  }

  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRAPI_API_KEY}`,
    },
  };

  try {
const response = await fetch(`${STRAPI_URL}/api/lp-gazelecs?populate=*`, fetchOptions);
    if (!response.ok) {
      console.error("Erreur de l'API Strapi:", response.status, response.statusText);
      const errorBody = await response.text();
      console.error("Détails de l'erreur:", errorBody);
      return null;
    }

    const data = await response.json();
    return data.data;

  } catch (error) {
    console.error("Impossible de contacter l'API Strapi:", error);
    return null;
  }
}