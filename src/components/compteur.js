const namespace = "mon-site";
const key = "visites";
const apiKey = "IZiYtNAvDWy3RyhNKcvNBcuqvx23Z8ndJTdmNbP5vBk";
const baseUrl = "https://letscountapi.com";

const incrementCount = async () => {
  try {
    const res = await fetch(`${baseUrl}/${namespace}/${key}/increment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
    });
    const data = await res.json();
    return data.current_value;
  } catch (err) {
    console.error("Erreur incrementCount:", err);
    return 404;
  }
};

export default incrementCount;
