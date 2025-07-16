const STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_API_KEY = import.meta.env.STRAPI_API_KEY; // On récupère la nouvelle clé

export async function getLandingPages() {
  // On prépare les en-têtes de la requête
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRAPI_API_KEY}`,
    },
  };

  try {
    // On ajoute les options au fetch
    const response = await fetch(`${STRAPI_URL}/api/lp-gazelecs`, fetchOptions);

    if (!response.ok) {
      console.error("Erreur de réseau ou du serveur Strapi:", response.status, response.statusText);
      const errorBody = await response.text();
      console.error("Corps de l'erreur:", errorBody);
      return null;
    }

    const data = await response.json();
    return data.data; // On renvoie la liste qui se trouve dans la clé "data"

  } catch (error) {
    console.error("Impossible de fetch les données de Strapi:", error);
    return null;
  }
}